import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <header className=" p-5 flex justify-between shadow ">
        <a href="#">Rushikesh Aundhakar</a>
        <Menu className=" cursor-pointer icon-dlt" onClick={isMenu} />
        <nav className={`space-x-5 navbar ${isMenuOpen ? "open" : "closed"}`}>
          <X
            className=" self-end m-4 icon-dlt cursor-pointer"
            onClick={isMenu}
          />
          <a
            href="#"
            className=" hover:underline underline-offset-4 decoration-[.0938rem] cursor-pointer py-4"
          >
            About Me
          </a>
          <a
            href="#"
            className=" hover:underline underline-offset-4 decoration-[.0938rem] cursor-pointer py-4"
          >
            Education
          </a>
          <a
            href="#"
            className=" hover:underline underline-offset-4 decoration-[.0938rem] cursor-pointer py-4"
          >
            Skills
          </a>
          <a
            href="#"
            className=" hover:underline underline-offset-4 decoration-[.0938rem] cursor-pointer py-4"
          >
            Projects
          </a>
          <a
            href="#"
            className=" hover:underline underline-offset-4 decoration-[.0938rem] cursor-pointer py-4"
          >
            Contact Me
          </a>
        </nav>
      </header>
      <div
        className={`overlay ${
          isMenuOpen ? "overlay--open" : "overlay--closed"
        } `}
        onClick={isMenu}
      ></div>
    </div>
  );
}
export default Navbar;
