import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <header className=" p-5 flex justify-between fixed w-full z-21 bg-[#fafaf8] items-center ">
        <a href="#hero" className=" heading-font text-xl">
          ※ Rushikesh Aundhakar
        </a>
        <Menu
          className=" cursor-pointer icon-dlt clr-secondary hover-link hover:underline underline-offset-8"
          onClick={isMenu}
        />
        <nav
          className={`space-x-4 navbar bg-[#fafaf8] ${
            isMenuOpen ? 'open' : 'closed'
          }`}
        >
          <X
            className=" self-end m-4 icon-dlt cursor-pointer clr-secondary hover-link hover:underline underline-offset-8"
            onClick={isMenu}
          />
          <a
            href="#about-me"
            className="  cursor-pointer nav-link py-4 uppercase body-font clr-secondary hover-link hover:underline underline-offset-8 decoration-[1.3px]"
            onClick={isMenu}
          >
            About Me
          </a>
          <a
            href="#education"
            className="  cursor-pointer nav-link py-4 uppercase body-font clr-secondary hover-link hover:underline underline-offset-8 decoration-[1.3px]"
            onClick={isMenu}
          >
            Education
          </a>
          <a
            href="#projects"
            className="  cursor-pointer nav-link py-4 uppercase body-font clr-secondary hover-link hover:underline underline-offset-8 decoration-[1.3px]"
            onClick={isMenu}
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="  cursor-pointer nav-link py-4 uppercase body-font clr-secondary hover-link hover:underline underline-offset-8 decoration-[1.3px]"
            onClick={isMenu}
          >
            Contact Me
          </a>
        </nav>
      </header>
      <div
        className={`overlay bg-black/20 backdrop-blur-sm  ${
          isMenuOpen ? 'overlay--open' : 'overlay--closed'
        } `}
        onClick={isMenu}
      ></div>
    </div>
  );
}
export default Navbar;
