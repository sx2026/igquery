import { Metadata } from "next";
import Image from "next/image";
import SEOHubPageLayout from "@/components/layout/SEOHubPageLayout";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEORelatedGuides from "@/components/seo/SEORelatedGuides";
import VisualStepFlow, { StepItem } from "@/components/seo/VisualStepFlow";

export const metadata: Metadata = {
  title: "How to Find a Product from an Image",
  description: "Learn how to identify clothes, furniture, and consumer objects from a picture and find out exactly where to buy them online.",
};

const WORKFLOW: StepItem[] = [
  {
    icon: "✂️",
    title: "Crop tightly around the product",
    description: "Remove all background, people, and unrelated objects. The AI can't guess which item you care about. Crop so only the target product is visible.",
    tip: "If the photo has 5 items, search each one as a separate cropped image.",
  },
  {
    icon: "📷",
    title: "Upload to Google Lens",
    description: "Use the Google app (mobile) or images.google.com (desktop). Upload your cropped image and check the 'Visual Matches' and 'Products' tabs.",
  },
  {
    icon: "🏷️",
    title: "Read the product label or name",
    description: "Lens will often surface the exact brand name and product title. Even without a direct shopping link, this name is your key to the next step.",
    tip: "Got a product name? Now pivot to Google Shopping for price comparison.",
  },
  {
    icon: "💰",
    title: "Compare prices via Google Shopping",
    description: "Take the product name from Lens and run a text search in Google Shopping or Amazon to find the best deal across retailers.",
  },
  {
    icon: "🔀",
    title: "Use Multisearch for color/style variants",
    description: "Found the right jacket but want it in blue? In the Google app, upload the image, then type 'blue' in the search bar. Google applies your color filter to visual matches.",
  },
];

const faqs = [
  {
    question: "Which tool is best for finding clothes from a picture?",
    answer: "Google Lens is the most robust for specific garments. It analyzes cut, texture, and color, linking directly to retailers. Pinterest Lens is better for finding the overall aesthetic or similar style outfits."
  },
  {
    question: "How can I find furniture I saw on Pinterest?",
    answer: "Use Pinterest Lens. Tap the camera icon on the Pin. Pinterest places dots over recognized objects (lamp, sofa). Tap the dot, and it shows visually similar products to buy."
  },
  {
    question: "Is there a way to search Amazon with a picture?",
    answer: "Yes. Open the Amazon app and tap the camera icon in the search bar. Take a photo of a product and Amazon will search its catalog for visual matches."
  },
  {
    question: "Why is the search returning similar but not the exact brand?",
    answer: "If the item is discontinued, custom-made, from a small boutique, or a vintage piece, the algorithm falls back to showing the closest visual matches it can find across major e-commerce platforms."
  },
  {
    question: "Can I use an image to find the cheapest price?",
    answer: "Yes. Once Google Lens identifies the product name, switch to a Google Shopping text search to compare prices across all retailers at once."
  }
];

export default function FindProductFromImage() {
  return (
    <SEOHubPageLayout
      title="How to Find a Product from an Image"
      description="A complete guide to identifying items in a photo — from streetwear to vintage furniture — and finding where to buy them online."
      heroImage="https://s3.us-east-2.amazonaws.com/igquery.com/image/8ef2d9e127294c3e93b01c10a78b2480~tplv-tb4s082cfz-aigc_resize_2400_2400.webp"
      heroAlt="Product search workflow — how to find and buy an item from a photo"
    >
      <h2>The Rise of Visual Shopping</h2>
      <p>
        Have you ever seen a stunning living room or perfectly styled outfit and wondered, "Where did they buy that?" E-commerce visual search is one of the fastest-growing technology segments, designed specifically to turn any image into a shoppable storefront.
      </p>

      <h2>The 4-Step Product Discovery Workflow</h2>
      <VisualStepFlow steps={WORKFLOW} />

      {/* Second product image — inline after workflow */}
      <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
        <Image
          src="https://s3.us-east-2.amazonaws.com/igquery.com/image/b6aa820389b54f478b37ecfe3e480775~tplv-tb4s082cfz-aigc_resize_1080_1080.webp"
          alt="Visual product search — identifying items in a street style photo"
          width={1080}
          height={1080}
          className="w-full object-cover"
          unoptimized
        />
      </div>

      <h2>The Best Tools for Product Discovery</h2>
      <p>Don't use TinEye for product discovery — it only finds duplicates. Use engines connected to e-commerce catalogs:</p>

      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {[
          { icon: "🔍", name: "Google Lens", tagline: "The all-rounder", desc: "Largest shopping index. Best for sneakers, clothes, watches, plants, hardware tools — almost anything." },
          { icon: "🛒", name: "Bing Visual Search", tagline: "The retail specialist", desc: "Excels at parsing an entire room or outfit scene and presenting each product as a separate, shoppable clickable item." },
          { icon: "📌", name: "Pinterest Lens", tagline: "The aesthetic matcher", desc: "Best for fashion and interior design. Finds aesthetically 'similar' items and links to boutique retailers." },
          { icon: "📦", name: "Amazon App Camera", tagline: "Skip the middleman", desc: "Searches only Amazon's catalog. Ideal when you already know you want to buy from Amazon." },
        ].map((tool) => (
          <div key={tool.name} className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="text-2xl shrink-0">{tool.icon}</span>
            <div>
              <h3 className="font-extrabold text-zinc-900 dark:text-zinc-50">{tool.name}</h3>
              <p className="text-xs font-bold text-primary">{tool.tagline}</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Shop by Category</h2>
      <div className="not-prose my-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {[
          { icon: "👗", label: "Fashion" },
          { icon: "🛋️", label: "Furniture" },
          { icon: "💻", label: "Electronics" },
          { icon: "🏡", label: "Home Decor" },
          { icon: "💄", label: "Beauty" },
          { icon: "👟", label: "Sneakers" },
        ].map((cat) => (
          <div key={cat.label} className="flex flex-col items-center gap-1.5 rounded-2xl border border-zinc-100 bg-white py-4 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">{cat.label}</span>
          </div>
        ))}
      </div>

      <h2>Common Challenges</h2>
      <ul>
        <li><strong>Knockoffs vs. Authentic:</strong> Fast-fashion brands often clone designer items visually. Always verify the brand name before purchasing — visual search can't tell a $20 dupe from a $2000 original.</li>
        <li><strong>Heavy filters change colors:</strong> A white dress under a warm filter looks yellow. Try to find an unfiltered version of the image if results are wildly off.</li>
        <li><strong>Discontinued items:</strong> If an item is older or discontinued, the engine will show the closest current alternatives. Use the description to search vintage marketplaces like Depop or eBay.</li>
      </ul>

      <SEOFAQ faqs={faqs} />
      <SEORelatedGuides currentPath="/find-product-from-image" />
    </SEOHubPageLayout>
  );
}
