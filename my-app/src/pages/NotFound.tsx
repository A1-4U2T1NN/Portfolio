import React from "react";
import NotFoundImage from "../assets/404.png";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start h-screen text-center px-4 pt-30">
      <img src={NotFoundImage} alt="404 Not Found" className="max-w-xs" />
      <h1 className="text-4xl font-extrabold mb-2 text-gray-800">
        Oops... Page Not Found
      </h1>
      <p className="text-gray-600 mb-4 max-w-md">
        The page you're looking for doesn't exist. If you're lost, click below
        to return to the home page.
      </p>
      <a
        href="/"
        className="bg-[#915f6e] text-white px-6 py-2 rounded-md hover:bg-[#7f4f5b] transition"
      >
        Return Home
      </a>
    </div>
  );
}

export default NotFound;
