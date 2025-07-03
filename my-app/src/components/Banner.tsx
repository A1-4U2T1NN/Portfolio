import React from "react";
import { Link } from "react-router-dom";
import backgroundGif from "../assets/background.gif";

function Banner() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center space-y-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundGif})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-grey-900 bg-opacity-50 z-0"></div>

      {/* Bottom Gradient Overlay */}
      <div
        className="absolute -bottom-5 left-0 w-full h-32 z-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to top, #121212, transparent)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">
          {getGreeting()}! My name is{" "}
          <span style={{ color: "#915f6d" }}>Chigazo Graham</span>
        </h1>
        <h2 className="text-3xl font-semibold">
          I am a <span style={{ color: "#915f6d" }}>Software Developer</span>
        </h2>
        <h3 className="text-2xl">
          Welcome to my portfolio — take a look around and check out some of the
          projects I’ve been working on!
        </h3>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <a
            href="#Contact"
            className="rounded-xl px-6 py-3 text-white transition duration-300"
            style={{ backgroundColor: "#915f6e" }}
          >
            Contact Me
          </a>

          <Link
            to="/Projects"
            className="hover:underline text-lg font-medium"
            style={{ color: "#915f6e" }}
          >
            Explore My Projects →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
