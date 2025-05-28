import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();

    const getGreeting = () => {
        const hour = new Date().getHours();
    
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
      };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center space-y-4 bg-white">
    <h1 className="text-4xl font-bold">
      {getGreeting()}! My name is <span className="text-blue-600">Chigazo Graham</span>
    </h1>
    <h2 className="text-3xl font-semibold">
      I am a <span className="text-blue-500">software developer</span>
    </h2>
    <h3 className="text-2xl">
      Welcome to my portfolio — take a look around and check out some of the projects I’ve been working on!
    </h3>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
      <button
        onClick={() => navigate("/ProjectGallery")}
        className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition duration-300"
      >
        Contact Me
      </button>

      <Link
        to="/pages/Projects"
        className="text-blue-600 hover:underline text-lg font-medium"
      >
        Explore My Projects →
      </Link>
    </div>
  </div>
  );
}

export default Banner;