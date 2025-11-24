import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState("closed");
  const [isOverlayOpen, setIsOverlayOpen] = useState("");

  function removeOverlay() {
    let menu = "dsp-none";
    setIsOverlayOpen(menu);
  }

  function openMenu() {
    let menu = "open";
    setIsMenuOpen(menu);
    console.log("works");
  }

  function closeMenu() {
    let menu = "closed";
    setIsMenuOpen(menu);
  }

  return (
    <header className=" p-5 flex justify-between shadow ">
      <a href="#" className=" heading">
        Rushikesh Aundhakar
      </a>
      <Menu className=" cursor-pointer icon-dlt" onClick={openMenu} />
      <nav className={`space-x-5 ${isMenuOpen} navbar`}>
        <X className=" self-end m-4 icon-dlt" onClick={closeMenu} />
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
      <div id="overlay" className={isOverlayOpen} onClick={removeOverlay}></div>
    </header>
  );
}
export default Navbar;
