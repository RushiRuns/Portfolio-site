function Footer() {
  return (
    <footer className=" px-6 md:px-12 py-8 border-t border-stone-200">
      <div className=" container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
        <span className=" clr-secondary-mod">© 2025 Rushikesh Aundhakar</span>
        <div className=" flex gap-6">
          <a
            href="https://github.com/RushiRuns"
            target="_blank"
            rel="noreferrer"
            className="clr-secondary-mod hover-link"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/rushikeshaundhakar/"
            target="_blank"
            rel="noreferrer"
            className="clr-secondary-mod hover-link"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
