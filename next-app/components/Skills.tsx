"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const skillCategories = {
  "Programming Languages": [
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "HTML5", icon: "/icons/HTML5.svg" },
    { name: "CSS3", icon: "/icons/CSS3.svg" },
  ],
  "Frameworks and Libraries": [
    { name: "React", icon: "/icons/React.svg" },
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: "Express", icon: "/icons/Express.svg" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
  ],
  "Tools & Technologies": [
    { name: "Git", icon: "/icons/Git.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "VS Code", icon: "/icons/VSCode.svg" },
    { name: "PyCharm", icon: "/icons/PyCharm.svg" },
    { name: "Slack", icon: "/icons/Slack.svg" },
    { name: "Vite", icon: "/icons/Vite.js.svg" },
    { name: "Anaconda", icon: "/icons/Anaconda.svg" },
    { name: "Docker", icon: "/icons/Docker.svg" },
    { name: "Figma", icon: "/icons/Figma.svg" },
  ],
};

type Skill = { name: string; icon: string };

const SkillItem = ({ name, icon }: Skill) => {
  const fallbackSrc = "https://via.placeholder.com/32?text=?";
  const [imgSrc, setImgSrc] = useState(icon);
  return (
    <div className="flex flex-col items-center bg-[#2f2b2b] rounded-xl p-6 shadow hover:animate-pulse hover:scale-105 hover:smooth-transition duration-300">
      <img
        src={imgSrc}
        alt={`${name} icon`}
        className="w-10 h-10 object-contain mb-3"
        onError={() => setImgSrc(fallbackSrc)}
      />
      <span className="text-white text-sm font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Technical Skills
      </h1>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-white">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
            {skills.map(({ name, icon }, idx) => (
              <SkillItem key={`${name}-${idx}`} name={name} icon={icon} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
