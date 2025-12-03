function Education() {
  return (
    <section id="education" className=" px-6 md:px-12 mb-32 scroll-mt-32">
      <div className=" container mx-auto max-w-5xl">
        <header className="mb-16 border-t border-stone-200 pt-8">
          <h2 className=" text-3xl md:text-4xl leading-[1.1] italic ">
            Education
          </h2>
        </header>

        <div className=" grid grid-cols-1 gap-12">
          <div className=" flex flex-col md:flex-row md:items-baseline  gap-4 md:gap-16 pb-12 border-b border-stone-200">
            <div className=" md:w-1/4">
              <span className="clr-secondary-mod text-sm tracking-widest">
                2019 - 2022
              </span>
            </div>
            <div className=" md:w-3/4">
              <h3 className=" mb-2 text-2xl">
                Yashwantrao chavan college of science
              </h3>
              <p className=" mb-4 clr-secondary heading-font text-lg">
                B.Sc.Computer Science
              </p>
              <p className=" clr-secondary text-sm">
                Focus on computer science. Graduated with Honors.
              </p>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row md:items-baseline  gap-4 md:gap-16 pb-12 border-b border-stone-200">
            <div className=" md:w-1/4">
              <span className="clr-secondary-mod text-sm tracking-widest">
                2022 - 2023
              </span>
            </div>
            <div className=" md:w-3/4">
              <h3 className=" mb-2 text-2xl">Orange Itech</h3>
              <p className=" mb-4 clr-secondary heading-font text-lg">
                Certification in Java fullstack
              </p>
              <p className=" clr-secondary text-sm">
                Intensive coursework on react, java and springboot.
              </p>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row md:items-baseline  gap-4 md:gap-16 pb-12 border-b border-stone-200">
            <div className=" md:w-1/4">
              <span className="clr-secondary-mod text-sm tracking-widest">
                2023 - 2025
              </span>
            </div>
            <div className=" md:w-3/4">
              <h3 className=" mb-2 text-2xl">Lovely professinal university</h3>
              <p className=" mb-4 clr-secondary heading-font text-lg">
                Master of Computer Science (Online)
              </p>
              <p className=" clr-secondary text-sm">
                Focus on computer science and web development. Graduated with
                Honors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
