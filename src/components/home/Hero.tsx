export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-8 sm:px-6 lg:pt-24 lg:pb-12 text-center">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-[60%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5" />

      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50 leading-[1.15]">
          <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            Instagram Search Query Optimization
          </span>
          <br className="hidden sm:block" />
          for Better Discovery
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl leading-relaxed">
          Need expert <strong>Instagram search queries help</strong>? Our free tool helps creators and researchers turn vague ideas into smarter <strong>Instagram search queries</strong> to discover exactly what you need.
        </p>
      </div>
    </section>
  );
}
