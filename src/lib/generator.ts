export interface SearchParams {
  seed: string;
  goal: string;
  mode: string;
  platform: string;
  location: string;
  contentType: string;
}

export interface SearchStrategy {
  technique: {
    name: string;
    explanation: string;
  };
  tools: Array<{ name: string; bestFor: string; useWhen: string }>;
  workflow: string[];
  queries: string[];
  platformTips: string;
  termExpansion: {
    core: string[];
    modifiers: string[];
    platforms: string[];
  };
}

export function generateStrategy(params: SearchParams): SearchStrategy {
  const { seed, goal, platform, location } = params;
  
  // Default values
  let technique = {
    name: "Visual similarity search + keyword refinement",
    explanation: "Start with a broad visual or keyword search, then refine using specific modifiers to zero in on what you need."
  };
  
  let tools = [
    { name: "Google Lens", bestFor: "Similar images & products", useWhen: "You want fast visual matches" },
    { name: "Pinterest Lens", bestFor: "Inspiration", useWhen: "You want similar aesthetics" }
  ];
  
  let workflow = [
    "Start with a descriptive keyword query.",
    "Use Google Lens or Pinterest Lens to discover visually similar images.",
    "Add style, color, material, location, or era modifiers.",
    "Save strong result terms and reuse them as new queries."
  ];

  let queries = [
    `"${seed}"`,
    `${seed} ideas`,
    `${seed} inspiration`,
    `${seed} examples`,
    `site:pinterest.com "${seed}"`,
    `site:instagram.com "${seed}"`
  ];
  
  // Goal based rules
  if (goal === "Find original image source") {
    technique = {
      name: "Reverse image search + context keyword search",
      explanation: "You are trying to find where an image first appeared, not just visually similar images. Start with exact or near-duplicate matching, then use visible clues and metadata."
    };
    tools = [
      { name: "TinEye", bestFor: "Source and duplicates", useWhen: "You need older copies and earliest indexing dates" },
      { name: "Google Lens", bestFor: "Similar images", useWhen: "You want to find where else the image is posted" }
    ];
    workflow = [
      "Upload the image to Google Lens and check exact matches.",
      "Run the same image through TinEye to look for older indexed copies.",
      "Search for visible text, logos, location clues, or product names in the image.",
      "Use site-specific queries to search likely platforms.",
      "Compare publication dates to identify the earliest credible source."
    ];
    queries = [
      `"${seed}" source`,
      `"${seed}" original image`,
      `"${seed}" photographer`,
      `"${seed}" first appeared`,
      `"${seed}" reverse image search`
    ];
  } else if (goal === "Find product from image") {
    technique = {
      name: "Object-based visual search + shopping query refinement",
      explanation: "Isolate the product visually and cross-reference with shopping platforms using specific descriptors."
    };
    tools = [
      { name: "Google Lens", bestFor: "Shopping & products", useWhen: "You need to find where to buy an item" },
      { name: "Bing Visual Search", bestFor: "Products", useWhen: "You want shopping-style results" }
    ];
    workflow = [
      "Crop the image around the product if possible.",
      "Search with Google Lens or Bing Visual Search.",
      "Describe the product using material, color, shape, and category.",
      "Search shopping platforms with product-specific query templates.",
      "Compare results by visual details before buying."
    ];
    queries = [
      `"${seed}" where to buy`,
      `"${seed}" similar product`,
      `"${seed}" review`,
      `"${seed}" alternative`,
      `site:amazon.com "${seed}"`
    ];
  } else if (goal === "Verify an image") {
    technique = {
      name: "Reverse image search + date/context verification",
      explanation: "Cross-check image occurrences across different time periods and platforms to identify manipulation or misattribution."
    };
    tools = [
      { name: "TinEye", bestFor: "Source verification", useWhen: "Checking if an image is older than claimed" },
      { name: "Reddit search", bestFor: "Context & debunking", useWhen: "Looking for community discussions about the image" }
    ];
    workflow = [
      "Reverse search the image across Google Lens, TinEye, Bing, and Yandex.",
      "Look for older versions of the same image.",
      "Search visible text or names from the image.",
      "Check whether the image appears in news, forums, or debunking sites.",
      "Compare dates, context, and source credibility."
    ];
    queries = [
      `"${seed}" real or fake`,
      `"${seed}" debunked`,
      `"${seed}" fact check`,
      `"${seed}" original source`,
      `"${seed}" before after`
    ];
  }

  // Add location to queries if provided
  if (location && location.trim() !== "") {
    const loc = location.trim();
    queries.push(`"${seed}" "${loc}"`);
    queries.push(`"${seed}" near "${loc}"`);
    queries.push(`site:instagram.com "${seed}" "${loc}"`);
  }

  // Platform Tips
  let platformTips = "Use descriptive keywords and platform-specific filters. Combine visual search with text search for best results.";
  if (platform === "Google Images") {
    platformTips = "Use descriptive keywords, exact phrases, and Google’s image filters. Add terms for color, material, object type, location, and usage intent.";
  } else if (platform === "Google Lens") {
    platformTips = "Best for visually similar images, product identification, landmarks, and objects. Crop the image to focus on the most important object.";
  } else if (platform === "TinEye") {
    platformTips = "Best for finding duplicates, older copies, and source history. Use it when you care about where an image first appeared.";
  } else if (platform === "Pinterest") {
    platformTips = "Best for visual inspiration, fashion, decor, recipes, and aesthetic discovery. Start broad, then refine using style and object terms.";
  } else if (platform === "Instagram") {
    platformTips = "Best for creator discovery, social trends, location-based visuals, and niche aesthetics. Use creator, reels, location, and style modifiers.";
  } else if (platform === "Reddit") {
    platformTips = "Best for context, community discussion, product identification, and image origin clues. Use site-specific Google queries.";
  }

  // Deduplicate and clean queries
  const uniqueQueries = [...new Set(queries)].filter(Boolean).slice(0, 10);

  // Term Expansion
  const termExpansion = {
    core: [seed, `${seed} ideas`, `${seed} examples`],
    modifiers: ["luxury", "affordable", "minimalist", "vintage", "modern"],
    platforms: ["review", "creator", "forum", "where to buy", "collection"]
  };

  return {
    technique,
    tools,
    workflow,
    queries: uniqueQueries,
    platformTips,
    termExpansion
  };
}
