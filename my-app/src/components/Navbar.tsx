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
        scrolled ? "shadow-md" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "#121212" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#Banner" onClick={() => setMenuOpen(false)}>
            <img
              src={scrolled ? logo1 : logo2}
              alt="Chigazo Graham Logo"
              className="h-55 w-auto transition duration-300 cursor-pointer"
            />
          </a>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl p-2 rounded transition"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className={`md:flex md:flex-row md:items-center md:gap-10 absolute md:static top-16 left-0 w-full md:w-auto text-lg p-6 md:p-0 space-y-4 md:space-y-0 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
            style={{
              backgroundColor: menuOpen ? "#121212" : "transparent",
            }}
          >
            {["About", "Projects", "Credentials", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-[#915f6d] text-white"
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
