import React from "react";
import { Link } from "react-router-dom";
import portfolioproject from "../assets/PortfolioProject.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, experience, and contact info. Designed for clarity and responsiveness.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/A1-4U2T1NN/Portfolio",
    demo: "",
    image: portfolioproject,
  },
];

function Projects() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-white text-3xl font-bold text-center mb-10">
        Featured Projects
      </h2>

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
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#915f6e" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        backgroundColor: "#282828",
                        color: "#ffffff",
                      }}
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
                      className="hover:underline text-sm"
                      style={{ color: "#915f6e" }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sm"
                      style={{ color: "#915f6e" }}
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
          to="/Projects"
          className="inline-block font-medium py-2 px-6 rounded-full shadow transition"
          style={{
            backgroundColor: "#915f6e",
            color: "white",
          }}
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}

export default Projects;
