import { Download, MoveRight } from 'lucide-react';

function Hero() {
  return (
    <section className="  px-6 md:px-12 mb-32 ">
      <div className=" container max-w-5xl mx-auto border-l border-stone-200 pl-8 md:pl-16 py-12">
        <h1 className=" text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10">
          Building minimal
          <br />
          <span className="italic">digital experiences</span>.
        </h1>

        <p className=" text-lg md:text-xl max-w-xl leading-relaxed mb-12 body-font clr-secondary">
          I build websites that prioritize simplicity, efficiency, and
          responsiveness.
        </p>

        <div className=" flex flex-col md:flex-row w-full gap-6 justify-items-start body-font">
          <a
            href="#projects"
            className="group flex items-center gap-3 text-sm font-sans uppercase tracking-widest clr-secondary hover-link "
          >
            View projects
            <MoveRight className=" h-4 w-4 transition-transform group-hover:translate-x-2" />
          </a>
          <a
            href="#"
            className=" flex items-center gap-3 text-sm font-sans uppercase tracking-widest clr-secondary-mod clr-secondary hover-link "
          >
            RESUME
            <Download className=" h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
