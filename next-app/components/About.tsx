function About() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 bg-transparent flex flex-col items-center text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Introduction Overview</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-6xl w-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <img src="/assets/headshot.png" alt="Chigazo Graham Headshot" className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-md" />
          <div className="flex gap-4">
            <a href="https://github.com/A1-4U2T1NN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg[#915f6e] text-white px-4 py-2 rounded-lg shadow bg-[#7f4f5b] hover:opacity-80 transition">
              <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/chigazo-graham/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#282828] text-white px-4 py-2 rounded-lg shadow hover:opacity-80 transition">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-3">
            <p className="text-base sm:text-lg leading-relaxed">
              🧑🏾‍💻 Hi, I’m <span className="font-semibold" style={{ color: "#915f6d" }}>Chigazo Graham</span>, a software engineer with a passion for building clean, intuitive systems that solve real-world problems.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              💡 I thrive at the intersection of logic and creativity, blending structure with imaginative thinking to craft software that’s both functional and elegant.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              🧠 I’m driven by curiosity, a love for innovation, and the challenge of making technology work smarter and more securely.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              🎧 Outside of code, you’ll likely find me listening to music, reading, gaming, or exploring new tools that sharpen my thinking and discipline.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center w-full px-4">
        <div className="max-w-4xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">My Approach</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I approach my work with <span className="font-medium text-[#915f6d]">proactive ownership</span> through taking initiative, staying adaptable, and always learning. I believe in writing thoughtful code, communicating clearly, and collaborating with purpose. Whether I’m working solo or with a team, I value consistency, clarity, and a mindset that aims to improve myself, the product, and the process.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center w-full px-4">
        <div className="max-w-4xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">Areas of Interest</h2>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white text-base sm:text-lg font-medium">
            {["UI/UX Design", "Cybersecurity", "Automation", "Project Management"].map((item) => (
              <li key={item} className="bg-[#915f6e] bg-opacity-10 px-4 py-2 rounded-xl shadow backdrop-blur-md">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

