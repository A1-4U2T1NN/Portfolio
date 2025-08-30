"use client";
import React from "react";

// Minimal port: if you have a richer data set, plug it in here
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio with projects and contact.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/A1-4U2T1NN/Portfolio",
    demo: "",
    image: "/assets/PortfolioProject.png",
  },
];

const cardStyles: React.CSSProperties = { backgroundColor: "#1e1e1e" };
const tagStyles: React.CSSProperties = { backgroundColor: "#282828", color: "#ffffff" };
const linkStyles: React.CSSProperties = { color: "#915f6e" };

export default function ProjectGallery() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 text-white">
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-8" style={linkStyles}>
          All Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center text-center" style={cardStyles}>
              <img src={project.image} alt={project.title} className="w-full max-w-sm rounded-md mb-4 object-cover" />
              <h3 className="text-xl font-bold mb-2" style={linkStyles}>{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 rounded text-xs font-medium" style={tagStyles}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={linkStyles}>
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={linkStyles}>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

