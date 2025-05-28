import React from "react";
import { Link } from "react-router-dom"; // make sure you are using react-router-dom
import placeholderImg from "../assets/Headshot.png"; // Replace with your own image paths

const projects = [
  {
    title: "Kanban Board App",
    description:
      "A task management application inspired by Trello. Users can create, move, and organize cards across columns. Built with Java, SOLID principles, and unit/integration testing.",
    tech: ["Java", "JUnit", "SOLID", "MVC"],
    github: "https://github.com/your-username/kanban-board",
    demo: "",
    image: placeholderImg,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather app that fetches real-time weather data using a public API. Shows current conditions and 5-day forecasts by city.",
    tech: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
    github: "https://github.com/your-username/weather-dashboard",
    demo: "https://your-username.github.io/weather-dashboard/",
    image: placeholderImg,
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, experience, and contact info. Designed for clarity and responsiveness.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/portfolio",
    demo: "",
    image: placeholderImg,
  },
];

function Projects() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center underline mb-10">Projects</h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {projects.map((project, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                !isImageLeft ? "md:flex-row-reverse" : ""
              } items-center md:items-start gap-6 md:gap-10`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* See All Projects Button */}
      <div className="mt-12 text-center">
        <Link
          to="/project-gallery"
          className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow hover:bg-blue-700 transition"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}

export default Projects;
