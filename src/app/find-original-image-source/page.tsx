import { Metadata } from "next";
import Image from "next/image";
import SEOHubPageLayout from "@/components/layout/SEOHubPageLayout";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEORelatedGuides from "@/components/seo/SEORelatedGuides";
import VisualStepFlow, { StepItem } from "@/components/seo/VisualStepFlow";

export const metadata: Metadata = {
  title: "How to Find the Original Source of an Image",
  description: "Step-by-step guide on tracing an image back to its original creator, photographer, or first publication date to verify authenticity.",
};

const WORKFLOW: StepItem[] = [
  {
    icon: "🎯",
    title: "Upload to TinEye & Sort by Oldest",
    description: "TinEye is purpose-built for tracking duplicates across time. Upload the image and change the sort to 'Oldest'. The oldest result is your best lead.",
    tip: "Look for domains like 500px, Flickr, Behance, or news outlets — not social media reposts.",
  },
  {
    icon: "🔍",
    title: "Search via Google Lens → Find Image Source",
    description: "Upload to Google Lens and click the 'Find image source' button. Scan for high-authority domains: news organizations, stock agencies, or photographer portfolios.",
  },
  {
    icon: "🔎",
    title: "Extract & Search Contextual Clues",
    description: "Look for visible watermarks, brand names, location signs, or any text in the image. Run those as keyword queries — often faster than visual search.",
    tip: "Partial watermarks like 'JD Photo' → search 'JD Photo photographer' to find the creator.",
  },
  {
    icon: "🌐",
    title: "Try Yandex for Obscure Sources",
    description: "If TinEye and Google both fail, upload to Yandex Images. Its aggressive crawling often surfaces non-English or Eastern European sources that Google misses.",
  },
  {
    icon: "📋",
    title: "Check EXIF Metadata",
    description: "If you have the original image file, use Jeffrey's Image Metadata Viewer or ExifTool to extract embedded camera data, GPS, and copyright holder information.",
    tip: "Social media platforms strip EXIF on upload — this only works with original files.",
  },
];

const faqs = [
  {
    question: "How do I find the photographer of an image?",
    answer: "Use TinEye and sort by 'Oldest'. Look for domains like 500px, Flickr, Behance, or personal portfolio sites. If the original file is available, check its EXIF data for the copyright field."
  },
  {
    question: "Can Google Lens find the first upload of a picture?",
    answer: "No. Google Lens prioritizes relevance and high-authority sites over chronological history. TinEye is the right tool for finding the oldest indexed version."
  },
  {
    question: "How can I tell if an image on social media is a repost?",
    answer: "Download the image and run it through TinEye or Google Lens. If you see dozens of results dating back years, the social media post is a repost of older content."
  },
  {
    question: "How do I find license information for an image?",
    answer: "When you reverse search the image, look for results from stock agencies like Getty Images, Shutterstock, or Adobe Stock. Those pages will show you the licensing terms."
  },
  {
    question: "Can I find image metadata online?",
    answer: "Most social media platforms strip EXIF metadata when images are uploaded. To find metadata, you need the original image file from the camera or a photography site like Flickr."
  }
];

export default function FindImageSource() {
  return (
    <SEOHubPageLayout
      title="How to Find the Original Source of an Image"
      description="A practical guide to tracing an image back to its creator, verifying its authenticity, and finding its first instance online."
      heroImage="https://s3.us-east-2.amazonaws.com/igquery.com/image/eccdec53eabf4c25be0dd99efd34b03f~tplv-tb4s082cfz-aigc_resize_1080_1080.webp"
      heroAlt="Source discovery ladder — how to trace an image back to its original creator"
    >
      <h2>Why Find the Original Source?</h2>
      <p>
        Images spread rapidly across the internet, losing their attribution along the way. Finding the original source is essential for journalists fact-checking news photos, designers needing commercial licenses, and anyone wanting to properly credit the original artist or photographer.
      </p>

      <h2>The Source Discovery Ladder</h2>
      <p>
        When one engine fails, move to the next. Follow this escalation path from the quickest method to the most thorough:
      </p>

      <VisualStepFlow steps={WORKFLOW} />

      <h2>What Counts as an "Original Source"?</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {[
          { icon: "✅", label: "Photographer's portfolio", desc: "500px, Flickr, Behance, personal site with their name on it", isOriginal: true },
          { icon: "✅", label: "First news publication", desc: "Accredited news wire (Reuters, AP) that captured the event", isOriginal: true },
          { icon: "✅", label: "Stock agency page", desc: "Getty, Shutterstock — they hold licensed originals", isOriginal: true },
          { icon: "⚠️", label: "Earliest social media post", desc: "May still be a repost — check if the account is the creator", isOriginal: false },
          { icon: "❌", label: "Pinterest or Reddit reposts", desc: "Almost always aggregators, not original creators", isOriginal: false },
          { icon: "❌", label: "Generic image blog", desc: "'Wallpaper sites' rarely credit original photographers", isOriginal: false },
        ].map((item) => (
          <div key={item.label} className={`flex items-start gap-3 rounded-xl border p-4 ${item.isOriginal ? "border-emerald-100 bg-emerald-50 dark:border-emerald-900/30 dark:bg-emerald-950/20" : "border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"}`}>
            <span className="text-xl shrink-0">{item.icon}</span>
            <div>
              <p className="font-bold text-sm text-zinc-900 dark:text-zinc-50">{item.label}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Red Flags — This Image May Be Misattributed</h2>
      <ul>
        <li><strong>Low resolution with heavy compression:</strong> Originals are almost always higher quality. A heavily compressed JPEG suggests multiple rounds of re-uploading.</li>
        <li><strong>Multiple overlapping watermarks:</strong> If the image has more than one watermark from different services, it has definitely been re-shared extensively.</li>
        <li><strong>Date mismatch:</strong> A photo "from 2023" that appears in TinEye results from 2018 means the date is false or the image is being reused out of context.</li>
        <li><strong>No EXIF data:</strong> Real camera photos have rich EXIF data. Images stripped of all metadata are often passed through social platforms (where EXIF is removed).</li>
      </ul>

      <SEOFAQ faqs={faqs} />
      <SEORelatedGuides currentPath="/find-original-image-source" />
    </SEOHubPageLayout>
  );
}
