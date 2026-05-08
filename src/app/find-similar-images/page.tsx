import { Metadata } from "next";
import Image from "next/image";
import SEOHubPageLayout from "@/components/layout/SEOHubPageLayout";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEORelatedGuides from "@/components/seo/SEORelatedGuides";
import ToolCardGrid, { ToolCard } from "@/components/seo/ToolCardGrid";

export const metadata: Metadata = {
  title: "How to Find Visually Similar Images",
  description: "Learn how to use visual similarity search to find images with the same aesthetic, layout, colors, or objects using Pinterest and Google Lens.",
};

const TOOLS: ToolCard[] = [
  {
    icon: "📌",
    name: "Pinterest Lens",
    tagline: "Best for aesthetic & style matching",
    strengths: ["Interior design", "Fashion", "Color palette", "Art styles"],
    weakness: "Results biased to Pinterest's own content ecosystem",
    bestFor: "Creative inspiration, mood boards, lifestyle discovery",
  },
  {
    icon: "🔍",
    name: "Google Lens",
    tagline: "Best for general visual similarity",
    strengths: ["Object recognition", "Multi-product parsing", "Shopping results"],
    weakness: "Less tuned to 'aesthetic' — better for literal similarity",
    bestFor: "Identifying specific items and finding similar consumer products",
  },
  {
    icon: "🛒",
    name: "Bing Visual Search",
    tagline: "Best for shoppable alternatives",
    strengths: ["Multi-item scene parsing", "Retailer links", "Product alternatives"],
    weakness: "Smaller index; less useful for pure inspiration",
    bestFor: "Finding similar but cheaper alternatives to a product",
  },
];

const faqs = [
  {
    question: "What is the best tool for finding aesthetic inspiration?",
    answer: "Pinterest Lens is unmatched. Upload an image of a moody dark-academia bedroom, and Pinterest will return thousands of similar rooms, outfits, and color palettes — all curated by taste."
  },
  {
    question: "Can I find similar images using text instead of an upload?",
    answer: "Yes. Use highly descriptive keywords. Instead of 'living room', try 'mid-century modern living room mustard yellow accents natural light'. The more specific, the better."
  },
  {
    question: "Why do my results look completely different from my uploaded image?",
    answer: "The engine is guessing what you care about. If you upload a photo of a red dress on a beach, it might think you want beaches. Crop the image tightly around the dress before searching."
  },
  {
    question: "How do I find a similar but higher quality version of my image?",
    answer: "If you want the exact same image in higher resolution, that's Reverse Image Search (TinEye sorted by 'Largest'), not Visual Similarity Search."
  },
  {
    question: "Does Instagram have a visual search feature?",
    answer: "Not directly. Instagram doesn't support image uploads for search. However, consistently engaging with certain posts (liking, saving) trains the Explore algorithm to organically serve you visually similar content."
  }
];

export default function FindSimilarImages() {
  return (
    <SEOHubPageLayout
      title="How to Find Visually Similar Images"
      description="Discover techniques and tools to find images that share the same visual aesthetic, composition, or objects without being exact duplicates."
    >
      <h2>What is Visual Similarity Search?</h2>
      <p>
        Unlike reverse image search — which hunts for exact pixel-for-pixel duplicates — visual similarity search finds different images that share common visual characteristics: the same color palette, lighting style, composition, or even just the same "vibe." The algorithm understands <em>meaning and aesthetics</em>, not just pixels.
      </p>

      <h2>Choose Your Tool Based on Your Goal</h2>
      <ToolCardGrid tools={TOOLS} />

      {/* Visual comparison — Group 1 */}
      <h2>See It in Action: Visual Similarity Results</h2>
      <p>Below are two sets of examples showing how uploading one image leads to finding visually related results:</p>

      <div className="not-prose my-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Example 1 — Interior Design Style Matching
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-800">
            <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-100 dark:border-zinc-800">
              🔎 Source Image
            </div>
            <Image
              src="https://s3.us-east-2.amazonaws.com/igquery.com/image/8a20035f28a24a6f81882af6810fcca7~tplv-tb4s082cfz-aigc_resize_2400_2400.webp"
              alt="Original image uploaded for visual similarity search"
              width={600}
              height={600}
              className="w-full object-cover"
              unoptimized
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
            <div className="bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider border-b border-emerald-100 dark:border-emerald-900/30">
              ✨ Similar Result Found
            </div>
            <Image
              src="https://s3.us-east-2.amazonaws.com/igquery.com/image/b51677689e0a4ab8a1dc45b5bfa54a46~tplv-tb4s082cfz-aigc_resize_1080_1080.webp"
              alt="Visually similar image found via Pinterest Lens"
              width={600}
              height={600}
              className="w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Visual comparison — Group 2 */}
      <div className="not-prose my-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Example 2 — Fashion & Color Style Matching
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-800">
            <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-100 dark:border-zinc-800">
              🔎 Source Image
            </div>
            <Image
              src="https://s3.us-east-2.amazonaws.com/igquery.com/image/01ea59770810420c9e2432c555baec0d~tplv-tb4s082cfz-aigc_resize_1080_1080.webp"
              alt="Original fashion image for visual similarity search"
              width={600}
              height={600}
              className="w-full object-cover"
              unoptimized
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
            <div className="bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider border-b border-emerald-900/30 dark:border-emerald-900/30">
              ✨ Similar Result Found
            </div>
            <Image
              src="https://s3.us-east-2.amazonaws.com/igquery.com/image/da2b12216718495f864710bea8f66d08~tplv-tb4s082cfz-aigc_resize_2400_2400.webp"
              alt="Visually similar fashion result from search"
              width={600}
              height={600}
              className="w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>

      <h2>Search by Scene — 5 Use Cases</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: "🛋️", label: "Interior Design", tip: "Upload a room photo to Pinterest Lens. It breaks down individual items and finds similar pieces to buy." },
          { icon: "👗", label: "Fashion & Outfits", tip: "Crop tightly around the garment, then search with Google Lens for the brand and exact item." },
          { icon: "🎨", label: "Color Palette", tip: "Use Adobe Color to extract the palette, or add color descriptors like 'dusty rose, sage green' to your query." },
          { icon: "🖼️", label: "Art Style", tip: "Describe the art movement: 'impressionist landscape warm tones' is far better than just uploading a painting." },
          { icon: "📱", label: "Product Alternatives", tip: "Found an expensive item? Search Bing Visual and add 'affordable alternative' to find similar budget options." },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-zinc-100 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="text-2xl">{item.icon}</span>
            <h3 className="mt-2 font-bold text-zinc-900 dark:text-zinc-50">{item.label}</h3>
            <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.tip}</p>
          </div>
        ))}
      </div>

      <h2>Tips for Better Results</h2>
      <ul>
        <li><strong>Crop aggressively:</strong> Eliminate background noise. If you want a similar lamp, crop out the rest of the room.</li>
        <li><strong>Combine image with text:</strong> In Google Lens, add text modifiers like "vintage," "minimalist," or a specific color to steer the algorithm.</li>
        <li><strong>Iterate:</strong> If a result is <em>closer</em> to what you want but not perfect, use that new image as the seed for your next search.</li>
      </ul>

      <SEOFAQ faqs={faqs} />
      <SEORelatedGuides currentPath="/find-similar-images" />
    </SEOHubPageLayout>
  );
}
