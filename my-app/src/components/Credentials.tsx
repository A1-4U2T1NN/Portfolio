import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const credentials = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    description: "Fundamentals of cloud computing, core AWS services, security, and pricing.",
    logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    title: "Figma Advanced UX Design",
    issuer: "Figma Academy",
    year: "2023",
    description: "Advanced user experience design strategies using Figma's collaborative tools.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    link: "https://figma.com/certifications/advanced-ux"
  },
  {
    title: "Docker Fundamentals",
    issuer: "Docker, Inc.",
    year: "2024",
    description: "Introduction to containerization, Docker CLI, images, and DockerHub workflows.",
    logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    link: "https://www.docker.com/certifications/"
  }
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
      className={`absolute ${position === "left" ? "left-[7%]" : "right-[7%]"} w-[360px] h-[500px] bg-white rounded-2xl shadow-md blur-[1px] opacity-70 scale-95 z-10 pointer-events-none overflow-hidden flex flex-col items-center text-center px-4 py-6`}
    >
      <img src={credentials[index].logo} alt="logo" className="w-20 h-20 object-contain mb-3" />
      <p className="text-lg font-semibold mb-1">{credentials[index].title}</p>
      <p className="text-gray-700 text-sm">{credentials[index].issuer}</p>
      <p className="text-gray-500 text-sm mb-2">{credentials[index].year}</p>
      <p className="text-gray-600 text-sm line-clamp-4">{credentials[index].description}</p>
    </motion.div>
  );

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-12">Credentials</h2>

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
              className="z-20 w-[440px] h-[540px] bg-blue-50 rounded-3xl shadow-xl p-8 text-center flex flex-col items-center overflow-hidden"
            >
              <img src={credentials[current].logo} alt="logo" className="w-28 h-28 object-contain mb-6" />
              <h3 className="text-2xl font-bold mb-2">{credentials[current].title}</h3>
              <p className="text-gray-700 text-md mb-1">{credentials[current].issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{credentials[current].year}</p>
              <p className="text-gray-600 text-base leading-relaxed px-4 mb-4">
                {credentials[current].description}
              </p>
              <a
                href={credentials[current].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
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
