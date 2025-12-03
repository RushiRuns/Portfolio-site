import Profile from '../assets/Images/High Quallity.JPG';

function Aboutme() {
  return (
    <section id="about-me" className=" px-6 md:px-12 mb-32 scroll-mt-32 ">
      <div className=" container mx-auto max-w-5xl">
        <header className="mb-10 border-t border-stone-200 pt-8">
          <h2 className=" text-3xl md:text-4xl leading-[1.1] italic ">
            About Me
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-16 ">
          <div className="text-xl md:text-2xl leading-relaxed heading-font">
            <p className="mb-8">
              I believe that good code is like good writing: concise, clear, and
              purposeful.
            </p>
            <p className="clr-secondary">
              As a developer, I don't just write functions; I structure logic.
              My background focuses on creating clean, performant applications
              using the modern React ecosystem.
            </p>
          </div>

          <div>
            <h3 className=" uppercase text-xs clr-secondary aboutMe-heading tracking-widest mb-6">
              Technology
            </h3>

            <ul className=" grid grid-cols-1 gap-4">
              <li className=" flex items-baseline justify-between pb-2  border-b border-stone-200">
                <span className=" text-lg clr-primary heading-font">HTML5</span>
                <span className="uppercase text-xs">Advanced</span>
              </li>

              <li className=" flex items-baseline justify-between pb-2  border-b border-stone-200">
                <span className=" text-lg clr-primary heading-font">
                  CSS3 / Tailwind
                </span>
                <span className="uppercase text-xs">Intermidiate</span>
              </li>

              <li className=" flex items-baseline justify-between pb-2  border-b border-stone-200">
                <span className=" text-lg clr-primary heading-font">
                  Javascript ES6
                </span>
                <span className="uppercase text-xs">Intermidiate</span>
              </li>

              <li className=" flex items-baseline justify-between pb-2  border-b border-stone-200">
                <span className=" text-lg clr-primary heading-font">
                  React.js
                </span>
                <span className="uppercase text-xs">Intermidiate</span>
              </li>

              <li className=" flex items-baseline justify-between pb-2  border-b border-stone-200">
                <span className=" text-lg clr-primary heading-font">
                  Git Workflow
                </span>
                <span className="uppercase text-xs">Intermidiate</span>
              </li>

              <li className=" flex items-baseline justify-between pb-2  border-b border-stone-200">
                <span className=" text-lg clr-primary heading-font">
                  UI Design
                </span>
                <span className="uppercase text-xs">Advanced</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
