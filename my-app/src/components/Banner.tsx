import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();

  return (
    <>
    <div>
      <h1 className="text-3xl font-bold underline">
        Good Morning/Afternoon/Evening! My name is Chigazo Graham
      </h1>
      <h2 className="text-3xl font-bold underline">
        I am a software developer
      </h2>
      <h3 className="text-3xl font-bold underline">
        Welcome to my portfolio — take a look around and check out some of the projects I’ve been working on!
      </h3>
      <button
          onClick={() => navigate("/ProjectGallery")}
          className="mt-4 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition duration-300"
        >
            Contact Me
        </button>
        <Link to="/pages/Projects" >
            Explore My Projects
        </Link>
        <div>Continue</div>
      </div>
    </>
  );
}

export default Banner;