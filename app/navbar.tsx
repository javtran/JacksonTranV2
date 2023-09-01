const Navbar = () => {
  return (
    <nav className="absolute nav w-full">
      <ul className="flex justify-around px-10 py-8 rounded-b-lg">
        <li>
          <a href="#about" className="text-slate-200">
            <span className="text-sky-400">1.</span> About
          </a>
        </li>
        <li>
          <a href="#experience" className="text-slate-200">
            <span className="text-sky-400">2.</span> Experience
          </a>
        </li>
        <li>
          <a className="text-slate-200">
            <span className="text-sky-400">2.</span> Projects
          </a>
        </li>
        <li>
          <a className="text-slate-200">
            <span className="text-sky-400">2.</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
