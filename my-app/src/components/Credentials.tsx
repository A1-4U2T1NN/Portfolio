import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SMLogo from "../icons/SA-CSM.png";
import CDLogo from "../icons/CDLogo.jpeg";

const credentials = [
  {
    title: "Certified Software Engineer",
    issuer: "Code Differently",
    year: "2025",
    description: "Understands the foundations of digital computing and programming to understand how to build complex software systems at scale. Also, how modern collaborative software development takes place within organizations and teams through practical application.",
    logo: CDLogo,
    link: "https://drive.google.com/file/d/1tqR8wbCJRAY8Sn9t8SGQg3n5InZlW1NK/view?usp=share_link"
  },
  {
    title: "Certified ScrumMaster",
    issuer: "ScrumAlliance",
    year: "2024",
    description: "Understands team accountabilities, events, and artifacts, as well as how to guide your team in the effective application of scrum.",
    logo: SMLogo,
    link: "https://drive.google.com/file/d/18CZ5F9EMHBx9350rM4QKQHZw3t7weltw/view?usp=share_link"
  },
];

const CredentialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevIndex = (current - 1 + credentials.length) % credentials.length;
  const nextIndex = (current + 1) % credentials.length;

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) {
      setCurrent(nextIndex);
    } else if (info.offset.x > 100) {
      setCurrent(prevIndex);
    }
  };

  const goToPrevious = () => setCurrent(prevIndex);
  const goToNext = () => setCurrent(nextIndex);

  const renderSideCard = (index: number, position: "left" | "right") => (
    <motion.div
      key={index + position}
      className={`absolute ${position === "left" ? "left-[7%]" : "right-[7%]"} w-[360px] h-[500px] rounded-2xl shadow-md blur-[1px] opacity-70 scale-95 z-10 pointer-events-none overflow-hidden flex flex-col items-center text-center px-4 py-6`}
      style={{ backgroundColor: "#282828", color: "#d1d1d1" }}
    >
      <img src={credentials[index].logo} alt="logo" className="w-20 h-20 object-contain mb-3" />
      <p className="text-lg font-semibold mb-1" style={{ color: "#915f6e" }}>{credentials[index].title}</p>
      <p className="text-sm">{credentials[index].issuer}</p>
      <p className="text-sm mb-2 text-gray-400">{credentials[index].year}</p>
      <p className="text-sm line-clamp-4 text-gray-400">{credentials[index].description}</p>
    </motion.div>
  );

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center px-6 py-10">
      <h2 className="text-white text-4xl font-bold text-center mb-12">Credentials</h2>

      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 z-30 p-3 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 z-30 p-3 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Cards */}
        <div className="relative flex justify-center items-center w-full h-[560px]">
          {renderSideCard(prevIndex, "left")}

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="z-20 w-[440px] h-[540px] rounded-3xl shadow-xl p-8 text-center flex flex-col items-center overflow-hidden"
              style={{ backgroundColor: "#282828", color: "#d1d1d1" }}
            >
              <img src={credentials[current].logo} alt="logo" className="w-28 h-28 object-contain mb-6" />
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#915f6e" }}>{credentials[current].title}</h3>
              <p className="text-md mb-1">{credentials[current].issuer}</p>
              <p className="text-sm mb-4 text-gray-400">{credentials[current].year}</p>
              <p className="text-base leading-relaxed px-4 mb-4 text-gray-300">
                {credentials[current].description}
              </p>
              <a
                href={credentials[current].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-white text-sm px-4 py-2 rounded transition"
                style={{
                  backgroundColor: "#915f6e",
                }}
              >
                View Certificate
              </a>
            </motion.div>
          </AnimatePresence>

          {renderSideCard(nextIndex, "right")}
        </div>
      </div>
    </div>
  );
};

export default CredentialsCarousel;
