import React from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is the best image search technique?",
    answer: "There is no single best technique. The right choice depends on your goal. If you want to find an image's origin, use reverse image search (like TinEye). If you're looking for inspiration or shopping items, use visual similarity search (like Google Lens or Pinterest Lens). For deep database searches, metadata and keyword operators work best."
  },
  {
    question: "How do I find the original source of an image?",
    answer: "To find the original source, use a reverse image search engine like TinEye or Google Images. These engines look for exact or near-exact duplicates across the web. Sort the results by 'oldest' (if supported) or look for high-authority domains like news sites or official portfolios. You can also search for visible text or watermarks in the image."
  },
  {
    question: "What is the difference between reverse image search and visual similarity search?",
    answer: "Reverse image search looks for exact copies or slightly modified versions of the same image to track its origin or usage. Visual similarity search looks for different images that share the same aesthetic, colors, composition, or objects (e.g., finding a similar dress or a room with a similar layout)."
  },
  {
    question: "How do I find similar images online?",
    answer: "Use visual discovery tools like Pinterest Lens or Google Lens. Simply upload your image, crop it to focus on the specific element you like, and the tool will return visually similar content. You can also type descriptive keyword queries and append words like 'aesthetic', 'ideas', or 'inspiration'."
  },
  {
    question: "Which tool is best for reverse image search?",
    answer: "TinEye is widely considered one of the best tools for strict reverse image search because it focuses heavily on finding exact matches and older versions, making it great for finding original sources. Google Lens is also excellent, especially for identifying objects and finding similar images across a broader index."
  },
  {
    question: "Can I search Instagram by image?",
    answer: "Instagram does not have a native reverse image search feature. However, you can use Google site operators (e.g., site:instagram.com 'your keyword') to search Instagram's indexed text, or use Google Lens to see if the image has been posted publicly on Instagram or other social platforms."
  },
  {
    question: "How do I find a product from an image?",
    answer: "Crop the image so only the product is visible. Then use Google Lens, Bing Visual Search, or the Amazon app's camera feature. These tools are optimized to identify objects and match them with shoppable products across the web."
  },
  {
    question: "How do I verify if an image is real?",
    answer: "Start with a reverse image search across multiple platforms (Google, TinEye, Bing, Yandex). Look for the earliest date the image was published. If an image claims to be from a recent event but appears in search results from years ago, it is likely being misrepresented. You can also check fact-checking websites or look for obvious AI-generation artifacts."
  },
  {
    question: "What are advanced image search operators?",
    answer: "Advanced operators are special commands you add to your keyword search. Examples include 'site:pinterest.com' to only search Pinterest, putting exact phrases in quotes (\"vintage red car\"), or using 'filetype:jpg' to filter by file format. These force the search engine to be much more specific."
  },
  {
    question: "Why do different image search tools show different results?",
    answer: "Every search engine (Google, Bing, TinEye, Yandex) uses its own proprietary web crawler, indexing method, and image recognition algorithm. Some prioritize exact pixel matches, while others prioritize semantic meaning or visual similarity. Using multiple tools will give you the most comprehensive results."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          return (
            <details
              key={faq.question}
              open={idx === 0}
              className="group rounded-3xl border border-zinc-200 bg-white overflow-hidden transition-all open:shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-left outline-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{faq.question}</span>
                <span className="relative ml-4 h-5 w-5 shrink-0">
                  <Plus className="absolute inset-0 h-5 w-5 text-zinc-400 transition-opacity group-open:opacity-0" />
                  <Minus className="absolute inset-0 h-5 w-5 text-primary opacity-0 transition-opacity group-open:opacity-100" />
                </span>
              </summary>
              <div className="border-t border-zinc-100 p-6 pt-2 font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
