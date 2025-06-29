import React, { useState } from "react";

// Icon imports
import JavaScript from "../icons/JavaScript.svg";
import TypeScript from "../icons/TypeScript.svg";
import Python from "../icons/Python.svg";
import ReactLogo from "../icons/React.svg";
import Node from "../icons/Node.js.svg";
import Express from "../icons/Express.svg";
import Tailwind from "../icons/Tailwind.svg";
import Git from "../icons/Git.svg";
import GitHub from "../icons/GitHub.svg";
import VSCode from "../icons/VSCode.svg";
import HTML5 from "../icons/HTML5.svg";
import Next from "../icons/Next.js.svg";
import PyCharm from "../icons/PyCharm.svg";
import Slack from "../icons/Slack.svg";
import Vite from "../icons/Vite.js.svg";
import CSS3 from "../icons/CSS3.svg";
import Anaconda from "../icons/Anaconda.svg";
import Docker from "../icons/Docker.svg";
import Figma from "../icons/Figma.svg";


const skillCategories = {
  "Programming Languages": [
    { name: "JavaScript", icon: JavaScript },
    { name: "TypeScript", icon: TypeScript },
    { name: "Python", icon: Python },
    { name: "HTML5", icon: HTML5 },
    { name: "CSS3", icon: CSS3 },
  ],
  "Frameworks and Libraries": [
    { name: "React", icon: ReactLogo },
    { name: "Node.js", icon: Node },
    { name: "Express", icon: Express },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Next.js", icon: Next },
  ],
  "Tools & Technologies": [
    { name: "Git", icon: Git },
    { name: "GitHub", icon: GitHub },
    { name: "VS Code", icon: VSCode },
    { name: "PyCharm", icon: PyCharm },
    { name: "Slack", icon: Slack },
    { name: "Vite", icon: Vite },
    { name: "Anaconda", icon: Anaconda },
    { name: "Docker", icon: Docker },
    { name: "Figma", icon: Figma },
  ],
};

const Skills = () => {
    const fallbackSrc = "https://via.placeholder.com/32?text=?"
  
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">
          Technical Skills
        </h1>
  
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-white">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
              {skills.map(({ name, icon }, idx) => {
                const [imgSrc, setImgSrc] = useState(icon);
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow mb-2">
                      <img
                        src={imgSrc}
                        alt={`${name} icon`}
                        className="w-8 h-8"
                        onError={() => setImgSrc(fallbackSrc)}
                      />
                    </div>
                    <p className="text-sm font-medium text-white">{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    );
};

export default Skills;
