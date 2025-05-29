import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo1 from "../assets/CGLogoWhite.png";
import logo2 from "../assets/CGLogoBlack.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img
            src={scrolled ? logo1 : logo2}
            alt="Chigazo Graham Logo"
            className="h-55 w-auto transition duration-300"
          />

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`text-2xl p-2 rounded transition ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className={`md:flex md:flex-row md:items-center md:gap-10 absolute md:static bg-black md:bg-transparent top-16 left-0 w-full md:w-auto text-lg p-6 md:p-0 space-y-4 md:space-y-0 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {["About", "Projects", "Credentials", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition hover:text-blue-600 ${
                    scrolled ? "text-white" : "text-black md:text-gray-700"
                  }`}
                >
                  {item === "Projects" ? "My Work" : item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
