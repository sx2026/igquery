import { Search, Image as ImageIcon, Camera, Link as LinkIcon, Database, CheckCircle, Lightbulb, Copy } from "lucide-react";

export default function LandingSections() {
  return (
    <div className="space-y-32 py-16">
      
      {/* What Are Image Search Techniques */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-6">
            What Are Image Search Techniques?
          </h2>
          <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Image search techniques are methods used to find, identify, compare, verify, or discover images online. They include keyword-based image search, reverse image search, visual similarity search, product search, metadata search, and platform-specific search operators.
          </p>
        </div>
      </section>

      {/* Which Technique Should You Use? */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-12 text-center">
            Which Technique Should You Use?
          </h2>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-600 dark:text-zinc-400">
                <thead className="bg-zinc-50 text-xs font-bold uppercase text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
                  <tr>
                    <th className="px-6 py-4">Goal</th>
                    <th className="px-6 py-4">Best Technique</th>
                    <th className="px-6 py-4">Best Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 font-medium">
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="px-6 py-4 text-zinc-900 dark:text-zinc-100 font-bold">Find original source</td>
                    <td className="px-6 py-4">Reverse image search</td>
                    <td className="px-6 py-4">TinEye, Google Lens</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="px-6 py-4 text-zinc-900 dark:text-zinc-100 font-bold">Find similar images</td>
                    <td className="px-6 py-4">Visual similarity search</td>
                    <td className="px-6 py-4">Google Lens, Pinterest</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="px-6 py-4 text-zinc-900 dark:text-zinc-100 font-bold">Find product</td>
                    <td className="px-6 py-4">Object search</td>
                    <td className="px-6 py-4">Google Lens, Bing</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="px-6 py-4 text-zinc-900 dark:text-zinc-100 font-bold">Verify image</td>
                    <td className="px-6 py-4">Reverse + context search</td>
                    <td className="px-6 py-4">TinEye, Google</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="px-6 py-4 text-zinc-900 dark:text-zinc-100 font-bold">Find inspiration</td>
                    <td className="px-6 py-4">Keyword + visual search</td>
                    <td className="px-6 py-4">Pinterest, Instagram</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="px-6 py-4 text-zinc-900 dark:text-zinc-100 font-bold">Search archives</td>
                    <td className="px-6 py-4">Metadata search</td>
                    <td className="px-6 py-4">JSTOR, Museum collections</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Core Techniques Grid */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Core Image Search Techniques
            </h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { title: "Keyword-based image search", desc: "Using descriptive text, modifiers, and search operators to find images.", icon: Search },
              { title: "Reverse image search", desc: "Uploading an image to find exactly where else it appears online.", icon: ImageIcon },
              { title: "Visual similarity search", desc: "Finding images with the same composition, style, or color palette.", icon: Lightbulb },
              { title: "Object-based visual search", desc: "Cropping an image to identify a specific landmark, plant, or object.", icon: Camera },
              { title: "Metadata and context search", desc: "Searching for the text, tags, or EXIF data surrounding an image.", icon: Database },
              { title: "Site-specific image search", desc: "Using 'site:' operators to search images within a specific platform.", icon: LinkIcon },
            ].map((item, i) => (
              <div key={i} className="break-inside-avoid rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-primary dark:bg-red-950/30">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                <p className="font-medium text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Query Templates */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-12 text-center">
          Advanced Query Templates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'site:pinterest.com "{topic}"',
            'site:instagram.com "{topic}" creator',
            '"{topic}" "where to buy"',
            '"{topic}" "original source"',
            '"{topic}" "photographer"',
            '"{topic}" "before after"',
            '"{topic}" "2026"',
            'intitle:"{topic}" image'
          ].map((query, i) => (
            <div key={i} className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <code className="font-mono text-sm font-bold text-zinc-700 dark:text-zinc-300">{query}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Best Tools */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Best Tools for Image Search
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Google Lens", best: "Similar images, products, objects", limit: "Not great for finding oldest sources" },
            { name: "TinEye", best: "Exact duplicates, source history", limit: "Index is smaller than Google" },
            { name: "Pinterest Lens", best: "Aesthetic inspiration, fashion", limit: "Only searches Pinterest's database" },
            { name: "Bing Visual Search", best: "Shopping, text extraction", limit: "Can be noisy with ads" },
          ].map((tool, i) => (
            <div key={i} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">{tool.name}</h3>
              <p className="mb-4 text-sm font-bold text-primary">Best for: {tool.best}</p>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Limitation: {tool.limit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflows */}
      <section className="bg-zinc-900 py-24 dark:bg-zinc-950">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-16 text-center">
            Practical Image Search Workflows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">How to find an image's original source</h3>
              <ul className="space-y-4 text-zinc-300 font-medium">
                <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-primary shrink-0" /> Upload to Google Lens for exact matches.</li>
                <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-primary shrink-0" /> Run through TinEye and sort by oldest date.</li>
                <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-primary shrink-0" /> Extract visible text or watermarks and search as keywords.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-6">How to find a product from an image</h3>
              <ul className="space-y-4 text-zinc-300 font-medium">
                <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-primary shrink-0" /> Crop the image directly around the product.</li>
                <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-primary shrink-0" /> Search with Google Lens or Bing Visual Search.</li>
                <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-primary shrink-0" /> Add modifiers like "where to buy" or material names.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
