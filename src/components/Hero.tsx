export default function Hero(){
  return(
    <section id="home" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold loading-tight tracking-tight text-link sm:text-5xl">
          Build Your Ideal
            <br></br>
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
        Explore frontend, backend, database, and tooling options,
        compare them side by side, and put together the stack that fits your
        next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
            href="#technologies"
            className="rounded-full bg-brand-gradient px-6 py-3 text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Explore Technologies
             </a>

             <a
              href="#about"
              className="rounded-full border border-state-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-state-300 hover:bg-slate-50"
              >
                Learn More
             </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/hero-illustration.png"
            alt="Illustration of a layered tech stack"
            className="w-full max-w-md">
          </img>
        </div>
      </div>
    </section>
  )
}