import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { callAIMLModel, extractAIMLText } from "../src/lib/aimlClient.mjs";
import { buildOptimizePrompt } from "../src/lib/optimizePrompt.mjs";

const DEFAULT_MODEL = process.env.AIML_MODEL || "anthropic/claude-haiku-4.5";
const DEFAULT_ROUNDS = 2;
const DEFAULT_DELAY_MS = 250;
const DEFAULT_RETRIES = 2;
const DEFAULT_SEEDS = [
  { seed: "pilates studio", goal: "Local Discovery", location: "Los Angeles", type: "Places" },
  { seed: "matcha cafe", goal: "Local Discovery", location: "New York", type: "Places" },
  { seed: "small apartment decor", goal: "Content Inspiration", location: "", type: "Posts" },
  { seed: "clean girl makeup", goal: "Buyer Intent", location: "", type: "Reels" },
  { seed: "running coach", goal: "Creator Discovery", location: "Austin", type: "Accounts" },
  { seed: "meal prep ideas", goal: "Content Inspiration", location: "", type: "Reels" },
  { seed: "korean skincare", goal: "Buyer Intent", location: "", type: "Posts" },
  { seed: "vintage furniture", goal: "Competitor Research", location: "Chicago", type: "Accounts" },
];

const QUALITY_RULES = [
  {
    key: "best_or_top",
    label: "Contains 'best' or 'top'",
    test: (query) => /\b(best|top)\b/i.test(query),
  },
  {
    key: "inspo",
    label: "Contains 'inspo'",
    test: (query) => /\binspo\b/i.test(query),
  },
  {
    key: "first_person_title",
    label: "Contains first-person/title phrasing",
    test: (query) => /\b(what i use|products i use|i actually use|gear i love|favorites|worth buying)\b/i.test(query),
  },
  {
    key: "people_who_love",
    label: "Contains 'people who love'",
    test: (query) => /\bpeople who love\b/i.test(query),
  },
  {
    key: "abstract_viral",
    label: "Abstract 'viral/trending' phrasing",
    test: (query) => /\b(viral|trending)\b/i.test(query) && !/\b(this week|202[0-9]|new|opening|spot|studio|cafe|class|product|routine|look|video|reel|recipe|hack|shop)\b/i.test(query),
  },
];

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const contents = fs.readFileSync(filePath, "utf8");

  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) {
      continue;
    }

    const [, key, rawValue] = match;
    if (process.env[key]) {
      continue;
    }

    const value = rawValue.replace(/^['"]|['"]$/g, "");
    process.env[key] = value;
  }
}

function parseArgs(argv) {
  const options = {
    rounds: DEFAULT_ROUNDS,
    model: DEFAULT_MODEL,
    delayMs: DEFAULT_DELAY_MS,
    retries: DEFAULT_RETRIES,
    seedFilter: "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const nextValue = argv[index + 1];

    if (arg === "--rounds" && nextValue) {
      options.rounds = Number.parseInt(nextValue, 10);
      index += 1;
      continue;
    }

    if (arg === "--model" && nextValue) {
      options.model = nextValue;
      index += 1;
      continue;
    }

    if (arg === "--delay" && nextValue) {
      options.delayMs = Number.parseInt(nextValue, 10);
      index += 1;
      continue;
    }

    if (arg === "--seed" && nextValue) {
      options.seedFilter = nextValue.toLowerCase();
      index += 1;
      continue;
    }

    if (arg === "--retries" && nextValue) {
      options.retries = Number.parseInt(nextValue, 10);
      index += 1;
    }
  }

  return options;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function summarizeGroups(groups) {
  return {
    core: Array.isArray(groups.core) ? groups.core.length : 0,
    long_tail: Array.isArray(groups.long_tail) ? groups.long_tail.length : 0,
    intent_mix: Array.isArray(groups.intent_mix) ? groups.intent_mix.length : 0,
    recency: Array.isArray(groups.recency) ? groups.recency.length : 0,
  };
}

function flattenQueries(groups) {
  return [
    ...(Array.isArray(groups.core) ? groups.core : []),
    ...(Array.isArray(groups.long_tail) ? groups.long_tail : []),
    ...(Array.isArray(groups.intent_mix) ? groups.intent_mix : []),
    ...(Array.isArray(groups.recency) ? groups.recency : []),
  ];
}

function collectQualityFlags(groups) {
  const queries = flattenQueries(groups);
  const flags = [];

  for (const query of queries) {
    for (const rule of QUALITY_RULES) {
      if (rule.test(query)) {
        flags.push({
          rule: rule.key,
          label: rule.label,
          query,
        });
      }
    }
  }

  return flags;
}

function summarizeQualityFlags(flags) {
  const summary = {};

  for (const rule of QUALITY_RULES) {
    const count = flags.filter((flag) => flag.rule === rule.key).length;
    if (count > 0) {
      summary[rule.key] = count;
    }
  }

  return summary;
}

async function runCase({ apiKey, model, input, round }) {
  const startedAt = performance.now();
  const response = await callAIMLModel({
    apiKey,
    model,
    prompt: buildOptimizePrompt(input),
  });

  const durationMs = performance.now() - startedAt;

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Round ${round} failed (${response.status}): ${errorText || response.statusText}`);
  }

  const payload = await response.json();
  const rawText = extractAIMLText(payload);
  const parsed = JSON.parse(rawText);

  return {
    durationMs,
    parsed,
  };
}

async function runCaseWithRetry({ apiKey, model, input, round, retries, delayMs }) {
  let lastError = null;

  for (let attempt = 1; attempt <= retries + 1; attempt += 1) {
    try {
      const result = await runCase({ apiKey, model, input, round });
      return {
        ...result,
        attempt,
      };
    } catch (error) {
      lastError = error;
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`Round ${round} attempt ${attempt} failed for "${input.seed}": ${message}`);

      if (attempt <= retries) {
        await sleep(delayMs * attempt);
      }
    }
  }

  throw lastError;
}

async function main() {
  const cwd = process.cwd();
  loadEnvFile(path.join(cwd, ".env.local"));

  const apiKey = process.env.AIML_API_KEY;
  if (!apiKey) {
    throw new Error("Missing AIML_API_KEY. Add it to .env.local or export it in your shell.");
  }

  const options = parseArgs(process.argv.slice(2));
  const cases = options.seedFilter
    ? DEFAULT_SEEDS.filter((item) => item.seed.toLowerCase().includes(options.seedFilter))
    : DEFAULT_SEEDS;

  if (cases.length === 0) {
    throw new Error(`No seeds matched filter: ${options.seedFilter}`);
  }

  console.log(`Model: ${options.model}`);
  console.log(`Rounds per seed: ${options.rounds}`);
  console.log(`Seeds under test: ${cases.length}`);
  console.log(`Retries per round: ${options.retries}`);
  console.log("");

  const allDurations = [];
  const failures = [];
  const allQualityFlags = [];

  for (const testCase of cases) {
    const perSeedDurations = [];
    let successfulRounds = 0;
    console.log(`=== Seed: ${testCase.seed} | Goal: ${testCase.goal} | Location: ${testCase.location || "N/A"} | Type: ${testCase.type} ===`);

    for (let round = 1; round <= options.rounds; round += 1) {
      try {
        const result = await runCaseWithRetry({
          apiKey,
          model: options.model,
          input: testCase,
          round,
          retries: options.retries,
          delayMs: options.delayMs,
        });

        successfulRounds += 1;
        perSeedDurations.push(result.durationMs);
        allDurations.push(result.durationMs);
        const qualityFlags = collectQualityFlags(result.parsed);
        allQualityFlags.push(...qualityFlags.map((flag) => ({ ...flag, seed: testCase.seed })));

        console.log(`Round ${round}: ${result.durationMs.toFixed(1)}ms${result.attempt > 1 ? ` (attempt ${result.attempt})` : ""}`);
        console.log(`Counts: ${JSON.stringify(summarizeGroups(result.parsed))}`);
        console.log(`Quality flags: ${JSON.stringify(summarizeQualityFlags(qualityFlags))}`);
        if (qualityFlags.length > 0) {
          console.log("Flagged queries:");
          for (const flag of qualityFlags) {
            console.log(`- ${flag.label}: ${flag.query}`);
          }
        }
        console.log(JSON.stringify(result.parsed, null, 2));
        console.log("");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        failures.push({
          seed: testCase.seed,
          round,
          message,
        });
        console.log(`Round ${round}: failed after ${options.retries + 1} attempts`);
        console.log(message);
        console.log("");
      }

      if (round < options.rounds) {
        await sleep(options.delayMs);
      }
    }

    if (perSeedDurations.length > 0) {
      const averageMs = perSeedDurations.reduce((sum, value) => sum + value, 0) / perSeedDurations.length;
      const minMs = Math.min(...perSeedDurations);
      const maxMs = Math.max(...perSeedDurations);

      console.log(`Summary for "${testCase.seed}": ${successfulRounds}/${options.rounds} succeeded | avg ${averageMs.toFixed(1)}ms | min ${minMs.toFixed(1)}ms | max ${maxMs.toFixed(1)}ms`);
    } else {
      console.log(`Summary for "${testCase.seed}": 0/${options.rounds} succeeded`);
    }
    console.log("");
  }

  if (allDurations.length > 0) {
    const overallAverage = allDurations.reduce((sum, value) => sum + value, 0) / allDurations.length;
    console.log(`Overall average: ${overallAverage.toFixed(1)}ms across ${allDurations.length} successful runs`);
  } else {
    console.log("Overall average: no successful runs");
  }

  console.log(`Failures: ${failures.length}`);
  if (failures.length > 0) {
    console.log("");
    console.log("Failure details:");
    for (const failure of failures) {
      console.log(`- ${failure.seed} | round ${failure.round} | ${failure.message}`);
    }
  }

  const overallQualitySummary = summarizeQualityFlags(allQualityFlags);
  console.log("");
  console.log(`Quality summary: ${JSON.stringify(overallQualitySummary)}`);
  if (allQualityFlags.length > 0) {
    console.log("Quality flag details:");
    for (const flag of allQualityFlags) {
      console.log(`- ${flag.seed} | ${flag.label} | ${flag.query}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
