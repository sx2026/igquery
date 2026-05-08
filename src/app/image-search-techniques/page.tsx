import { Metadata } from "next";
import Link from "next/link";
import SEOHubPageLayout from "@/components/layout/SEOHubPageLayout";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEORelatedGuides from "@/components/seo/SEORelatedGuides";
import ToolCardGrid, { ToolCard } from "@/components/seo/ToolCardGrid";
import VisualStepFlow, { StepItem } from "@/components/seo/VisualStepFlow";
import QueryCopyCard, { QueryItem } from "@/components/seo/QueryCopyCard";

export const metadata: Metadata = {
  title: "Image Search Techniques: 5 Methods, Tools & Search Tips",
  description: "Master advanced image search techniques. From reverse image searching to visual similarity matching, metadata searches, and Google Lens strategies.",
};

// ─── Schema: Article + FAQPage + BreadcrumbList ───────────────────────────
const ALL_FAQS = [
  {
    question: "What are the main image search techniques?",
    answer: "The main image search techniques are reverse image search, visual similarity search, object/product search, metadata and context search, and advanced operator search. Each technique solves a different problem, from finding an image source to discovering similar visuals or identifying products.",
  },
  {
    question: "How do I search using an image instead of text?",
    answer: "Use a reverse image search or visual search tool such as Google Lens, TinEye, Bing Visual Search, or Pinterest Lens. Upload the image, crop it around the subject you care about, and review the matches, sources, or product results.",
  },
  {
    question: "What is the best free image search tool?",
    answer: "Google Lens is the best free all-purpose image search tool because it can identify objects, products, text, landmarks, and visually similar images. TinEye is better when your goal is to find exact duplicates or trace the oldest indexed version of an image.",
  },
  {
    question: "How do I find similar images online?",
    answer: "Use visual similarity tools such as Pinterest Lens or Google Lens. Upload an image, crop it around the style, object, or composition you want to match, and review visually similar results. For inspiration, Pinterest Lens usually works better; for general image matching, Google Lens is stronger.",
  },
  {
    question: "What is the best technique to find an image's original source?",
    answer: "The most reliable technique is Reverse Image Search sorted by oldest date. Use TinEye and sort results by 'Oldest' to find the earliest indexed version. If that fails, upload to Google Lens and click 'Find image source'.",
  },
  {
    question: "How is Visual Similarity Search different from Reverse Image Search?",
    answer: "Reverse image search looks for exact or near-exact duplicates of your uploaded image. Visual similarity search looks for images that share the same aesthetic, composition, or style — without being the same photo. Pinterest Lens is the prime example.",
  },
  {
    question: "Can I use text operators while searching with an image?",
    answer: "Yes. Google Lens supports 'multisearch' — upload an image and then type additional keywords (like a color or style) in the search bar to combine both signals.",
  },
  {
    question: "Is it possible to detect if an image is AI-generated?",
    answer: "Reverse image search can be a strong signal: if an incredible image has zero results on TinEye and no search history, it's likely AI-generated. Tools like Google's 'About this image' panel also flag synthetic content.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Image Search Techniques: 5 Methods, Tools & Search Tips",
  "description": "Master advanced image search techniques including reverse image search, visual similarity search, product search, metadata search, and advanced operator search.",
  "url": "https://www.igquery.com/image-search-techniques",
  "author": { "@type": "Organization", "name": "IGQuery" },
  "publisher": { "@type": "Organization", "name": "IGQuery", "url": "https://www.igquery.com" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.igquery.com/image-search-techniques" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ALL_FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.igquery.com" },
    { "@type": "ListItem", "position": 2, "name": "Image Search Techniques", "item": "https://www.igquery.com/image-search-techniques" },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────
const TOOLS: ToolCard[] = [
  {
    icon: "🔍",
    name: "Google Lens",
    tagline: "Best for object identification & products",
    strengths: ["Object ID", "Product shopping", "Text translation"],
    weakness: "Poor at finding the exact oldest source",
    bestFor: "Identifying what something is, and where to buy it",
  },
  {
    icon: "🎯",
    name: "TinEye",
    tagline: "Best for source tracing & copyright",
    strengths: ["Exact matching", "Oldest date", "High-res versions"],
    weakness: "Fails on heavily cropped or modified images",
    bestFor: "Tracing copyright, finding the original publisher",
  },
  {
    icon: "📌",
    name: "Pinterest Lens",
    tagline: "Best for aesthetic discovery",
    strengths: ["Style matching", "Interior design", "Fashion inspiration"],
    weakness: "Results biased to Pinterest's own ecosystem",
    bestFor: "Creative mood boards, visual inspiration, decor",
  },
  {
    icon: "🌐",
    name: "Yandex Images",
    tagline: "Best for obscure & international sources",
    strengths: ["Face matching", "Eastern European content", "Aggressive crawling"],
    weakness: "Interface and index skew non-English",
    bestFor: "Finding images invisible to Google",
  },
  {
    icon: "🛒",
    name: "Bing Visual Search",
    tagline: "Best for shoppable visuals",
    strengths: ["Shopping results", "Multi-object parsing", "Retailer links"],
    weakness: "Smaller index than Google",
    bestFor: "Finding products to buy from an image of a room or outfit",
  },
];

const SOURCE_WORKFLOW: StepItem[] = [
  {
    icon: "💾",
    title: "Save the image",
    description: "Download the highest quality version you have access to.",
    tip: "If the image is on social media, right-click → 'Open image in new tab' for the full resolution.",
  },
  {
    icon: "🎯",
    title: "Upload to TinEye",
    description: "Go to TinEye.com, drag and drop the image, and wait for the results.",
  },
  {
    icon: "📅",
    title: "Sort by Oldest",
    description: "Change the sort dropdown from 'Best Match' to 'Oldest'. The oldest result is often the original source.",
    tip: "Look for domains like news orgs, stock photo agencies, or photographer portfolios.",
  },
  {
    icon: "🔎",
    title: "Fallback to Google Lens",
    description: "If TinEye returns 0 results, upload to Google Lens → click 'Find image source'.",
  },
  {
    icon: "✅",
    title: "Compare & verify",
    description: "Cross-reference publication dates across the results to confirm the earliest credible source.",
  },
];

const PRODUCT_WORKFLOW: StepItem[] = [
  {
    icon: "✂️",
    title: "Crop tightly around the product",
    description: "Remove all background and unrelated objects. The AI can't guess what you care about.",
    tip: "If the photo has 5 items, search each one separately.",
  },
  {
    icon: "📷",
    title: "Upload to Google Lens",
    description: "Use the Google app or images.google.com to upload your cropped image.",
  },
  {
    icon: "🏷️",
    title: "Read the product labels",
    description: "Lens will surface brand names and product titles in the 'Visual Matches' panel.",
  },
  {
    icon: "💰",
    title: "Compare prices with text search",
    description: "Once you have the product name, run a Google Shopping text search to find the best deal.",
  },
];

const QUERY_TEMPLATES: QueryItem[] = [
  { label: "Find high-res wallpaper", query: '"cyberpunk city" resolution:4k imagesize:3840x2160', description: "Force Google to return large images only" },
  { label: "Find transparent PNG assets", query: 'filetype:png "shopping cart icon" transparent', description: "Ideal for design work" },
  { label: "Search a specific creative platform", query: 'site:behance.net "app UI design" dark mode', description: "Skip all the Pinterest clutter" },
  { label: "Exclude Pinterest & stock sites", query: '"coffee shop interior" -site:pinterest.com -stock', description: "Find blog posts and real photos" },
  { label: "Find original source context", query: '"[your topic]" "original source" OR "photographer"', description: "Hunt for attribution pages" },
  { label: "Site-specific search", query: 'site:unsplash.com "mountain landscape" winter', description: "Search within free image databases" },
];

const DECISION_TABLE = [
  { goal: "Find where an image came from", technique: "Reverse image search", tools: "TinEye, Google Lens" },
  { goal: "Find similar-looking images", technique: "Visual similarity search", tools: "Pinterest Lens, Google Lens" },
  { goal: "Find a product from a photo", technique: "Object / product search", tools: "Google Lens, Bing Visual Search" },
  { goal: "Verify if an image is old or fake", technique: "Source tracing + context search", tools: "TinEye, Google, Yandex" },
  { goal: "Find exact image size or file type", technique: "Advanced operator search", tools: "Google Images" },
  { goal: "Find creator, credit, or license", technique: "Metadata + source tracing", tools: "TinEye, EXIF tools, stock sites" },
];

// ─── Inline components ────────────────────────────────────────────────────
function QuickAnswer() {
  return (
    <div className="not-prose my-8 flex gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/30 dark:bg-blue-950/20">
      <span className="text-2xl shrink-0 mt-0.5">💡</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">Quick Answer</p>
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
          Image search techniques are methods used to find, identify, verify, or compare images online. The five main techniques are <strong>reverse image search</strong>, <strong>visual similarity search</strong>, <strong>product/object search</strong>, <strong>metadata and context search</strong>, and <strong>advanced operator search</strong>.
        </p>
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Use <strong>reverse image search</strong> to find where an image came from, <strong>visual similarity search</strong> to find images with the same style or composition, <strong>product search</strong> to identify items in a photo, <strong>metadata/context search</strong> to trace creators or verify authenticity, and <strong>advanced operators</strong> to find precise image results with text queries.
        </p>
      </div>
    </div>
  );
}

function DecisionTable() {
  return (
    <div className="not-prose my-8">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Which Image Search Technique Should You Use?</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
        The best image search technique depends on your goal. If you need the original source, use reverse image search. If you want visually similar results, use visual similarity search. If you want to identify or buy an item, use product/object search.
      </p>
      {/* Single table with horizontal scroll on mobile — no duplicate DOM content */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="min-w-[520px] w-full text-sm text-left">
          <thead className="bg-zinc-50 dark:bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <tr>
              <th className="px-5 py-3">Goal</th>
              <th className="px-5 py-3">Best Technique</th>
              <th className="px-5 py-3">Best Tools</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 bg-white dark:bg-zinc-950">
            {DECISION_TABLE.map((row, i) => (
              <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                <td className="px-5 py-3.5 font-semibold text-zinc-900 dark:text-zinc-100">{row.goal}</td>
                <td className="px-5 py-3.5 text-zinc-600 dark:text-zinc-400">{row.technique}</td>
                <td className="px-5 py-3.5 font-medium text-[#e60023]">{row.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GeneratorCTA({ headline, buttonText }: { headline: string; buttonText: string }) {
  return (
    <div className="not-prose my-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-900/60">
      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 max-w-lg">{headline}</p>
      <Link
        href="/#generator"
        className="shrink-0 rounded-full bg-[#e60023] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#c0001d] whitespace-nowrap"
      >
        {buttonText}
      </Link>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function ImageSearchTechniques() {
  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SEOHubPageLayout
        title="Image Search Techniques: The Ultimate Guide"
        description="Everything you need to know about finding, verifying, and matching images — with the right tool for every situation."
        heroImage="https://s3.us-east-2.amazonaws.com/igquery.com/image/c5b8aee9b25e461491c2c9644022a6c4~tplv-tb4s082cfz-aigc_resize_4096_4096.webp"
        heroAlt="Image Search Techniques — complete method map"
      >
        {/* Quick Answer — above the fold */}
        <QuickAnswer />

        {/* Decision Table */}
        <DecisionTable />

        {/* Generator CTA #1 */}
        <div className="not-prose my-1">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            IGQuery helps turn an image search goal into platform-specific search strategies and copy-paste queries for tools like Google Lens, TinEye, Pinterest Lens, Bing Visual Search, and Google Images.
          </p>
        </div>
        <GeneratorCTA
          headline="Not sure which technique fits your image? Generate a search strategy based on your goal, platform, and topic."
          buttonText="Generate Search Strategy"
        />

        <h2>What Are Image Search Techniques?</h2>
        <p>
          Image search techniques encompass all the methodologies, tools, and strategies used to locate visual media across the internet. Unlike traditional text search, these techniques allow you to use an actual image as your query — or use highly specific operator-driven text to find a precise visual aesthetic.
        </p>
        <p>
          Mastering these techniques is no longer just for researchers or journalists. Whether you want to verify a suspicious photo, find where to buy a jacket in a street style shot, or locate a high-resolution wallpaper — knowing the right technique is essential.
        </p>

        <hr />

        {/* AEO Summary — scannable list for AI answer engines */}
        <div className="not-prose my-6 rounded-2xl border border-zinc-100 bg-zinc-50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">Summary: The 5 Image Search Techniques</p>
          <ol className="space-y-2.5 list-none m-0 p-0">
            {[
              { name: "Reverse image search", desc: "Finds exact or near-exact copies of an image and helps trace the original source." },
              { name: "Visual similarity search", desc: "Finds different images with similar colors, composition, objects, or aesthetic style." },
              { name: "Product/object search", desc: "Identifies products, objects, landmarks, clothes, furniture, or other items inside an image." },
              { name: "Metadata and context search", desc: "Uses EXIF data, visible text, watermarks, captions, or surrounding page context to verify an image." },
              { name: "Advanced operator search", desc: 'Uses search operators such as site:, filetype:, imagesize:, and exact-match quotes to find precise image results.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e60023] text-[10px] font-extrabold text-white mt-0.5">{i + 1}</span>
                <span className="text-zinc-700 dark:text-zinc-300 leading-relaxed"><strong>{item.name}</strong> — {item.desc}</span>
              </li>
            ))}
          </ol>
        </div>

        <h2>The 5 Main Types of Image Search Techniques</h2>
        <p>There is no single "best" method. Choose your technique based on what you want to achieve:</p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {[
            { icon: "🔄", title: "Reverse Image Search", desc: "Upload an image to find where it exists online, who created it, and find higher-resolution versions.", tools: "TinEye, Google Lens" },
            { icon: "🎨", title: "Visual Similarity Search", desc: "Find images with the same aesthetic, color palette, or style — not exact duplicates.", tools: "Pinterest Lens, Google Lens" },
            { icon: "🛒", title: "Object & Product Search", desc: "Isolate a specific product in an image and find where to purchase it.", tools: "Google Lens, Bing Visual Search" },
            { icon: "📋", title: "Metadata & Context Search", desc: "Extract EXIF data, watermarks, or visible text to trace an image's origin.", tools: "Jeffrey's Metadata Viewer" },
            { icon: "⌨️", title: "Advanced Operator Search", desc: "Use text operators like site:, filetype:, imagesize: to find exact images via text.", tools: "Google Images, Bing" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="text-3xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-base">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                <p className="mt-2 text-xs font-bold text-[#e60023]">Tools: {item.tools}</p>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <h2>Tool Comparison: Which Engine to Use When</h2>
        <p>Not all search engines index the web the same way. Use the right tool for your specific goal.</p>

        <ToolCardGrid tools={TOOLS} />

        <hr />

        <h2>Workflow: Find the Original Source of an Image</h2>
        <VisualStepFlow steps={SOURCE_WORKFLOW} />

        <h2>Workflow: Find a Product from an Image</h2>
        <VisualStepFlow steps={PRODUCT_WORKFLOW} />

        <hr />

        <h2>Real World Scenarios</h2>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
          {[
            { icon: "🗞️", title: "Verify a news image", method: "Reverse search + sort by oldest", tool: "TinEye → Google Lens", desc: "A viral photo claims to show a current event. You reverse-search it and find a 2019 TinEye result — the image is being misused." },
            { icon: "👟", title: "Find where to buy sneakers", method: "Object search + crop", tool: "Google Lens → Shopping", desc: "You see someone wearing cool sneakers in a street photo. Crop the shoe tightly, search with Lens, and find the exact Nike model and retailer." },
            { icon: "🖼️", title: "Credit a photographer", method: "Source tracing + keyword", tool: "TinEye → 500px / Portfolio", desc: "A beautiful landscape photo has no attribution. TinEye traces it to a 2021 upload on 500px, revealing the photographer's name." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-100 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="mt-2 font-bold text-zinc-900 dark:text-zinc-50">{s.title}</h3>
              <p className="mt-1 text-xs font-bold text-[#e60023]">Method: {s.method}</p>
              <p className="mt-1 text-xs font-semibold text-zinc-500">Tool: {s.tool}</p>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <hr />

        {/* Generator CTA #2 — before Query Templates */}
        <GeneratorCTA
          headline="Want copy-paste queries for your own topic? Use the generator to create platform-specific image search queries."
          buttonText="Create My Queries"
        />

        <h2>Advanced Query Templates</h2>
        <p>When you don't have an image to upload, these operator-driven text queries will find highly specific results.</p>

        <QueryCopyCard queries={QUERY_TEMPLATES} />

        <hr />

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li><strong>Not cropping the image:</strong> Always crop tightly around your subject before reverse searching. The AI can't guess which of the 10 objects in your photo you care about.</li>
          <li><strong>Relying on only one tool:</strong> Google Lens and TinEye use different algorithms. Always try both.</li>
          <li><strong>Ignoring visible text:</strong> If an image has a watermark or sign, typing that text into a standard search is often faster than reverse image searching.</li>
        </ul>

        <SEOFAQ faqs={ALL_FAQS} />
        <SEORelatedGuides currentPath="/image-search-techniques" />
      </SEOHubPageLayout>
    </>
  );
}
