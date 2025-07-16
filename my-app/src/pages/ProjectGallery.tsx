import React from "react";
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
    date: "2024-07-02",
  },
];

function ProjectGallery() {
  const sortedByRecency = [...projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const sortedByAlphabet = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const recentProjects = sortedByRecency.slice(0, 3);

  const cardStyles = {
    backgroundColor: "#1a1a1a",
    border: "1px solid #282828",
    color: "#ffffff",
  };

  const tagStyles = {
    backgroundColor: "#282828",
    color: "#ffffff",
  };

  const linkStyles = {
    color: "#915f6e",
  };

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#121212" }}
    >
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Project Gallery
      </h1>

      {/* Recent Projects */}
      <section>
        <h2
          className="text-2xl font-semibold text-center mb-8"
          style={linkStyles}
        >
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center text-center"
              style={cardStyles}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-sm rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2" style={linkStyles}>
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={tagStyles}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sm"
                    style={linkStyles}
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
                    style={linkStyles}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="mt-16">
        <h2
          className="text-2xl font-semibold text-center mb-8"
          style={linkStyles}
        >
          All Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedByAlphabet.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center text-center"
              style={cardStyles}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-sm rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2" style={linkStyles}>
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={tagStyles}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sm"
                    style={linkStyles}
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
                    style={linkStyles}
                  >
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

export default ProjectGallery;
