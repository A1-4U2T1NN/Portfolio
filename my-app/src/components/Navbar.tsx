import React, { useEffect, useState } from "react";
import logo1 from "../assets/CGLogoWhite.png";
import logo2 from "../assets/CGLogoBlack.png";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
    }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={scrolled ? logo1 : logo2} alt="Chigazo Graham Logo" className="h-55 w-auto transition duration-300" />

          {/* Navigation links */}
          <ul className="flex md:flex-row flex-col md:items-center md:gap-10 gap-4 text-gray-700 text-lg">
            <li>
              <a href="#About" className="hover:text-blue-600 transition">About</a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-blue-600 transition">My Work</a>
            </li>
            <li>
              <a href="#Credentials" className="hover:text-blue-600 transition">Credentials</a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-blue-600 transition">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;