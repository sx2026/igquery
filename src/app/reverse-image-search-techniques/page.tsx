import { Metadata } from "next";
import SEOHubPageLayout from "@/components/layout/SEOHubPageLayout";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEORelatedGuides from "@/components/seo/SEORelatedGuides";
import ToolCardGrid, { ToolCard } from "@/components/seo/ToolCardGrid";
import VisualStepFlow, { StepItem } from "@/components/seo/VisualStepFlow";
import QueryCopyCard, { QueryItem } from "@/components/seo/QueryCopyCard";

export const metadata: Metadata = {
  title: "How to Do a Reverse Image Search: Advanced Techniques Guide",
  description: "Master reverse image search with Google Lens, TinEye, Yandex, and Bing. Step-by-step workflows, engine comparisons, and advanced tips.",
};

const TOOLS: ToolCard[] = [
  {
    icon: "🔍",
    name: "Google Lens",
    tagline: "Object & product identification",
    strengths: ["Object recognition", "Shopping results", "Text in images"],
    weakness: "Poor at finding the oldest/original source",
    bestFor: "Identifying products, landmarks, and objects",
  },
  {
    icon: "🎯",
    name: "TinEye",
    tagline: "Source tracing & copyright",
    strengths: ["Exact matching", "Oldest date sorting", "High-res versions"],
    weakness: "Fails if image is cropped too heavily",
    bestFor: "Finding where an image first appeared online",
  },
  {
    icon: "🌐",
    name: "Yandex Images",
    tagline: "Aggressive matching for obscure sources",
    strengths: ["Face matching", "Non-English content", "Deep crawling"],
    weakness: "Interface and index are Eastern-European-biased",
    bestFor: "When Google and TinEye both fail",
  },
  {
    icon: "🛒",
    name: "Bing Visual Search",
    tagline: "Shopping-optimized visual engine",
    strengths: ["Multi-product parsing", "Retailer links", "Shoppable rooms"],
    weakness: "Smaller index than Google",
    bestFor: "Finding individual products in a scene",
  },
];

const WORKFLOW: StepItem[] = [
  {
    icon: "✂️",
    title: "Crop the image",
    description: "Remove all background noise. Crop tightly to the subject you actually want to search. The engine won't guess.",
    tip: "If you're searching for a lamp in a room photo, crop so only the lamp is visible.",
  },
  {
    icon: "🎯",
    title: "Start with TinEye",
    description: "Upload to TinEye.com for exact duplicate matching. After results load, sort by 'Oldest'.",
    tip: "The oldest result is almost always closest to the original source.",
  },
  {
    icon: "🔍",
    title: "Run through Google Lens",
    description: "Upload the same image to Google Lens and click 'Find image source'. Look for authoritative domains in the results.",
  },
  {
    icon: "🌐",
    title: "Try Yandex as fallback",
    description: "If both TinEye and Google fail, upload to Yandex Images. It finds sources in Eastern European networks and obscure blogs that others miss.",
  },
  {
    icon: "🔎",
    title: "Use visible clues as keywords",
    description: "Look for watermarks, brand names, or text visible in the image. Run those as text queries in Google — often faster than any visual tool.",
  },
  {
    icon: "📅",
    title: "Compare and verify dates",
    description: "Across all results, check the publication dates. The earliest date is your strongest lead for the original source.",
  },
];

const QUERIES: QueryItem[] = [
  { label: "Find original photographer", query: '"[image topic]" photographer site:500px.com OR site:flickr.com', description: "Search portfolio sites for the creator" },
  { label: "Find news context", query: '"[image topic]" -site:pinterest.com "original source" OR "credit"', description: "Remove Pinterest noise and find attribution" },
  { label: "Find high-resolution version", query: '"[image name]" imagesize:3000x2000', description: "Force Google Images to return large versions" },
  { label: "Debunk misattributed image", query: '"[image topic]" "fact check" OR "debunked" OR "misleading"', description: "Find fact-checker write-ups" },
];

const faqs = [
  { question: "Which reverse image search engine is the best?", answer: "It depends. TinEye for finding the oldest source and copyright tracing, Google Lens for object and product identification, Yandex for non-English content." },
  { question: "Can I reverse search a specific part of an image?", answer: "Yes. Google Lens and Pinterest Lens let you adjust a crop box. For TinEye, you must manually crop the image file first." },
  { question: "Why did my reverse image search return zero results?", answer: "Three reasons: the image is entirely original and never indexed, it's behind a private/gated platform, or it's AI-generated with no real-world prior." },
  { question: "How do I reverse search a video?", answer: "Take a screenshot of the clearest, most identifiable frame and reverse search that still image." },
  { question: "Can people see that I reverse image searched their photo?", answer: "No. The search is processed privately on the engine's servers. The image owner has no notification system." },
];

export default function ReverseImageSearch() {
  return (
    <SEOHubPageLayout
      title="How to Do a Reverse Image Search"
      description="The complete guide to tracing image origins, verifying authenticity, and finding high-resolution copies — using TinEye, Google Lens, Yandex, and Bing."
      heroImage="https://s3.us-east-2.amazonaws.com/igquery.com/image/90ea4bc28953495eac59e8624e4e9ab8~tplv-tb4s082cfz-aigc_resize_4096_4096.webp"
      heroAlt="Reverse image search workflow — how to trace an image back to its source"
    >
      <h2>What is Reverse Image Search?</h2>
      <p>
        Reverse image search is a technique where you use an image file or URL as your query instead of text. The engine analyzes the pixels, colors, textures, and patterns to find where that image exists elsewhere online — or identifies what is inside it.
      </p>
      <p>
        It is the go-to technique for fact-checkers, journalists, designers, and anyone who needs to know where an image came from or who created it.
      </p>

      <hr />

      <h2>Engine Comparison: Google Lens vs. TinEye vs. Yandex vs. Bing</h2>
      <p>Each engine uses a different algorithm and indexes the web differently. You need the right tool for each goal.</p>

      <ToolCardGrid tools={TOOLS} />

      <hr />

      <h2>The Source Tracing Ladder</h2>
      <p>When one engine fails, move to the next. This is the proven escalation path from quickest to most thorough:</p>

      <div className="not-prose my-6 flex flex-col sm:flex-row items-center gap-2">
        {["TinEye\n(Sort: Oldest)", "Google Lens\n(Find Image Source)", "Yandex Images\n(International)", "Context Clues\n(Visible text & logos)"].map((step, i, arr) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <div className="rounded-2xl border-2 border-zinc-200 bg-white px-4 py-3 text-center dark:border-zinc-700 dark:bg-zinc-900">
              <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400">Step {i + 1}</p>
              <p className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50 whitespace-pre-line leading-tight">{step}</p>
            </div>
            {i < arr.length - 1 && (
              <span className="text-2xl font-bold text-zinc-300 dark:text-zinc-700 hidden sm:block">→</span>
            )}
          </div>
        ))}
      </div>

      <h2>Step-by-Step Reverse Search Workflow</h2>
      <VisualStepFlow steps={WORKFLOW} />

      <hr />

      <h2>Advanced Tips for Better Results</h2>
      <ul>
        <li><strong>Crop aggressively:</strong> Upload only the subject. A cluttered scene confuses the AI about what you're looking for.</li>
        <li><strong>Check image dimensions:</strong> Among duplicate results, the highest-resolution version is usually closest to the original.</li>
        <li><strong>Use visible text first:</strong> A watermark or sign in the image searched as plain text is often faster than reverse image searching the whole photo.</li>
        <li><strong>Look for EXIF data:</strong> If you have the original file, use an EXIF viewer tool to extract the camera, location, and copyright field.</li>
      </ul>

      <hr />

      <h2>Query Templates for Context Searches</h2>
      <QueryCopyCard queries={QUERIES} />

      <SEOFAQ faqs={faqs} />
      <SEORelatedGuides currentPath="/reverse-image-search-techniques" />
    </SEOHubPageLayout>
  );
}
