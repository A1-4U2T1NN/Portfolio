import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Brand / Name */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold">Chigazo Graham</h4>
          <p className="text-sm text-gray-400">Building useful software one line at a time.</p>
        </div>

        {/* Navigation (optional) */}
        <div className="flex space-x-6">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:you@example.com" className="hover:text-white">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Chigazo Graham. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
