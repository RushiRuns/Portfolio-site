function Projects() {
  return (
    <section id="projects" className=" px-6 md:px-12 mb-32 scroll-mt-32">
      <div className=" container mx-auto max-w-5xl">
        <header className="mb-16 border-t border-stone-200 pt-8">
          <h2 className=" text-3xl md:text-4xl leading-[1.1] italic ">
            Projects
          </h2>
        </header>

        <div className=" grid grid-cols-1 gap-16">
          <div className="flex flex-col gap-4 md:flex-row md:gap-16 border-b border-stone-200 pb-12">
            <div className=" md:w-1/4">
              <span className="mb-2 text-[10px] tracking-widest block">
                FRONTEND
              </span>
              <h3 className="mb-4 text-2xl">PortFolio website</h3>
              <div className=" flex gap-4">
                <a href="https://github.com/RushiRuns/Portfolio-site">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a6a09b"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github-icon lucide-github w-5 h-5 hover:stroke-stone-700"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a6a09b"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-external-link-icon lucide-external-link w-5 h-5 hover:stroke-stone-700"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className=" md:w-3/4 flex flex-col gap-6">
              <p className=" heading-font leading-relaxed clr-secondary text-lg">
                Designing a personal presence that balances aesthetic minimalism
                with technical showcase.
              </p>

              <div className=" flex flex-wrap gap-x-8 gap-y-2 ">
                <span className=" text-sm pb-1 border-b border-stone-50 hover:border-stone-300">
                  Editorial Typography
                </span>
                <span className=" text-sm pb-1 border-b border-stone-50 hover:border-stone-300">
                  React Architecture
                </span>
                <span className=" text-sm pb-1 border-b border-stone-50 hover:border-stone-300">
                  Tailwind Styling
                </span>
              </div>

              <div className=" flex gap-3">
                <span className=" uppercase text-[10px] tracking-widest border border-stone-200 rounded-full px-3 py-1">
                  react
                </span>
                <span className=" uppercase text-[10px] tracking-widest border border-stone-200 rounded-4xl px-3 py-1">
                  tailwind css
                </span>
                <span className=" uppercase text-[10px] tracking-widest border border-stone-200 rounded-4xl px-3 py-1">
                  vite
                </span>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-4 md:flex-row md:gap-16 border-b border-stone-200 pb-12">
            <div className=" md:w-1/4">
              <span className="mb-2 text-[10px] tracking-widest block">
                FRONTEND
              </span>
              <h3 className="mb-4 text-2xl">PortFolio website</h3>
              <div className=" flex gap-4">
                <a href="https://github.com/RushiRuns/Portfolio-site">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a6a09b"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github-icon lucide-github w-5 h-5 hover:stroke-stone-700"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a6a09b"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-external-link-icon lucide-external-link w-5 h-5 hover:stroke-stone-700"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className=" md:w-3/4 flex flex-col gap-6">
              <p className=" heading-font leading-relaxed clr-secondary text-lg">
                Designing a personal presence that balances aesthetic minimalism
                with technical showcase.
              </p>

              <div className=" flex flex-wrap gap-x-8 gap-y-2 ">
                <span className=" text-sm pb-1 border-b border-stone-50 hover:border-stone-300">
                  Editorial Typography
                </span>
                <span className=" text-sm pb-1 border-b border-stone-50 hover:border-stone-300">
                  React Architecture
                </span>
                <span className=" text-sm pb-1 border-b border-stone-50 hover:border-stone-300">
                  Tailwind Styling
                </span>
              </div>

              <div className=" flex gap-3">
                <span className=" uppercase text-[10px] tracking-widest border border-stone-200 rounded-full px-3 py-1">
                  react
                </span>
                <span className=" uppercase text-[10px] tracking-widest border border-stone-200 rounded-4xl px-3 py-1">
                  tailwind css
                </span>
                <span className=" uppercase text-[10px] tracking-widest border border-stone-200 rounded-4xl px-3 py-1">
                  vite
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
