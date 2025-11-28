import { Download } from "lucide-react";

function Hero() {
  return (
    <div>
      <section className=" h-[80vh] flex flex-col justify-center items-center text-center gap-6 ">
        <header>
          <h1 className=" text-[3.815rem] lg:text-[5.61rem] leading-20">
            Building minimal digital experiences
          </h1>
          <p className=" text-[1rem]">
            I build digital interfaces that prioritize content, accessibility,
            and precision
          </p>
        </header>
        <div className=" flex space-x-2">
          <button
            className="text-lg font-medium transition-colors hover:text-slate-100 capitalize
              text-blue-900 hero-btn-bg py-1 px-3 rounded-[5px]"
          >
            View projects
          </button>
          <button className=" flex items-center">
            RESUME
            <Download className=" ml-2 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
