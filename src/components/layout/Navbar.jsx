import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h1 className="cursor-pointer text-2xl font-bold text-cyan-400">
          Boobalan
        </h1>

        <ul className="hidden gap-8 text-slate-300 md:flex">
         
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-cyan-400"
                className="cursor-pointer transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-2xl text-white md:hidden"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>

      </nav>
      {menuOpen && (
  <div className="bg-slate-900/95 backdrop-blur-xl md:hidden">
    <ul className="flex flex-col items-center gap-6 py-8">

      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            to={link.to}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer text-lg text-slate-300 hover:text-cyan-400"
          >
            {link.name}
          </Link>
        </li>
      ))}

    </ul>
  </div>
)}
    </header>
  );
}

export default Navbar;