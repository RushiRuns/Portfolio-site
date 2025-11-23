function Navbar() {
  return (
    <header className=" shadow">
      <nav className=" flex flex-row justify-between p-4">
        <a href="#" className=" heading">
          Rushikesh Aundhakar
        </a>
        <ul className=" flex flex-row space-x-3">
          <li className=" hover:underline underline-offset-4 decoration-[1.5px]">
            About
          </li>
          <li className=" hover:underline underline-offset-4 decoration-[1.5px]">
            Skills
          </li>
          <li className=" hover:underline underline-offset-4 decoration-[1.5px]">
            Education
          </li>
          <li className=" hover:underline underline-offset-4 decoration-[1.5px]">
            Projects
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
