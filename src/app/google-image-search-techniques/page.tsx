import { Metadata } from "next";
import Image from "next/image";
import SEOHubPageLayout from "@/components/layout/SEOHubPageLayout";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEORelatedGuides from "@/components/seo/SEORelatedGuides";
import QueryCopyCard, { QueryItem } from "@/components/seo/QueryCopyCard";

export const metadata: Metadata = {
  title: "Advanced Google Image Search Techniques & Operators",
  description: "Master Google Images and Google Lens with advanced search operators, filters, and exact-match visual discovery techniques to find exactly what you need.",
};

const OPERATORS: QueryItem[] = [
  { label: "Restrict to one site", query: 'site:unsplash.com "mountain landscape"', description: "Only show images hosted on Unsplash" },
  { label: "Exclude Pinterest spam", query: '"living room decor" -site:pinterest.com', description: "Remove all Pinterest results from the feed" },
  { label: "Find transparent PNG", query: 'filetype:png "logo" transparent background', description: "Great for finding assets with no background" },
  { label: "Exact image dimensions", query: '"desktop wallpaper" imagesize:1920x1080', description: "Force Google to return a specific resolution" },
  { label: "Exact phrase in context", query: '"2024 olympic gold medal winner"', description: "Find images whose surrounding page uses this exact phrase" },
  { label: "Creative Commons images", query: '"mountain landscape" license:creativecommons', description: "Find images you can legally reuse or adapt" },
];

const faqs = [
  {
    question: "Is Google Lens replacing Google Images?",
    answer: "Yes, for visual/reverse searching. Google has largely shifted the 'search by image' experience toward Google Lens, which focuses on object recognition and visual similarity rather than finding exact URL duplicates."
  },
  {
    question: "How do I use search operators on Google Images?",
    answer: "Type them directly into the Google Images search bar. For example, 'sports car site:reddit.com' will only show sports car images hosted on Reddit."
  },
  {
    question: "Can I search for an exact image size?",
    answer: "Yes. Use the operator 'imagesize:WxH' (e.g., 'wallpaper imagesize:1920x1080'). You can also use the Tools → Size filter after performing a search."
  },
  {
    question: "How do I exclude Pinterest from Google Images?",
    answer: "Add '-site:pinterest.com' to your query. Example: 'kitchen ideas -site:pinterest.com'. You can chain multiple exclusions: '-site:pinterest.com -site:etsy.com'."
  },
  {
    question: "Why did Google remove the 'Exact Size' filter?",
    answer: "Google removed many advanced dropdown filters to simplify the UI for mainstream users. Power users can still achieve the same result by typing the 'imagesize:' operator directly into the search bar."
  }
];

export default function GoogleImageSearchTechniques() {
  return (
    <SEOHubPageLayout
      title="Advanced Google Image Search Techniques & Operators"
      description="Learn how to leverage the full power of Google Images, Google Lens, and advanced search operators to find precise visual content."
      heroImage="https://s3.us-east-2.amazonaws.com/igquery.com/image/a8760dc60c63432b9cd34107d0a36bfb~tplv-tb4s082cfz-aigc_resize_2400_2400.webp"
      heroAlt="Google Images vs. Google Lens — visual comparison chart"
    >
      <h2>The Two Sides of Google: Images vs. Lens</h2>
      <p>
        When people say "Google Image Search," they are usually referring to one of two distinct systems. Understanding the difference is the first step to mastering Google visual search.
      </p>

      {/* Comparison Cards */}
      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-950/20">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Text → Image</p>
          <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">🔎 Google Images</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Type keywords to find images. Relies on surrounding webpage text, alt-text, and filenames. Best with operators.</p>
          <ul className="mt-3 space-y-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <li>✓ Advanced text operators (site:, filetype:)</li>
            <li>✓ Usage rights filter</li>
            <li>✓ Exact phrase matching</li>
          </ul>
        </div>
        <div className="rounded-2xl border-2 border-primary/20 bg-red-50 p-6 dark:border-red-900/30 dark:bg-red-950/20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Image → Insight</p>
          <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">🔍 Google Lens</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Upload an image and Google identifies what's inside it. Object recognition, shopping, text translation.</p>
          <ul className="mt-3 space-y-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <li>✓ Object & product identification</li>
            <li>✓ Multisearch (image + text)</li>
            <li>✓ Text translation from image</li>
          </ul>
        </div>
      </div>

      <h2>Mastering Google Lens</h2>
      <p>Google Lens is incredibly powerful when used with these three core techniques:</p>

      <h3>1. The Bounding Box Crop</h3>
      <p>
        When you upload a photo with multiple objects, Lens guesses what you want. Take control by dragging the white bounding box to tightly enclose the specific item. This dramatically changes the "Visual Matches" results.
      </p>

      <h3>2. Multisearch — Combine Image + Text</h3>
      <p>
        Upload an image of a white dress, then type "red" in the search bar. Google will find visually similar dresses but force your color constraint. This feature is exclusive to the Google mobile app.
      </p>

      <h3>3. The "Find Image Source" Button</h3>
      <p>
        If you want to know <em>where</em> the image came from (not just what's in it), upload it to Lens and click "Find image source." This activates reverse image search mode and surfaces the originating page.
      </p>

      <h2>Advanced Text Search Operators</h2>
      <p>
        Type these operators directly into the Google Images search bar to unlock precision results that the dropdown UI can't achieve.
      </p>

      <QueryCopyCard queries={OPERATORS} />

      <h2>Hidden Filters in Google Images</h2>
      <p>
        After any image search, click the <strong>"Tools"</strong> button to reveal hidden visual filters:
      </p>
      <ul>
        <li><strong>Size:</strong> Filter by Large, Medium, or Icon.</li>
        <li><strong>Color:</strong> Filter by dominant color or choose "Transparent" for no-background assets.</li>
        <li><strong>Type:</strong> Filter by Clip Art, Line Drawing, or Animated GIF.</li>
        <li><strong>Usage Rights:</strong> Find images with Creative Commons licenses for legal reuse.</li>
      </ul>

      <SEOFAQ faqs={faqs} />
      <SEORelatedGuides currentPath="/google-image-search-techniques" />
    </SEOHubPageLayout>
  );
}
