import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-gray-300 px-6 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Me</h2>

      {/* Short single paragraph */}
      <p className="max-w-3xl text-center leading-relaxed">
        Hi, I’m <span className="text-cyan-400 font-semibold">Pakthapriyan</span>, a Computer Science graduate passionate about{" "}
        <span className="text-white font-medium">software development</span>,{" "}
        <span className="text-cyan-300 font-medium">web development</span>,{" "}
        <span className="text-cyan-300 font-medium">data visualization</span>, and{" "}
        <span className="text-cyan-300 font-medium">AWS Cloud (Restart Program)</span>. I enjoy building{" "}
        <span className="text-white font-medium">scalable</span> and{" "}
        <span className="text-white font-medium">user-friendly</span> applications using{" "}
        <span className="text-white font-medium">Java, Python, React, Tailwind CSS, Tableau</span>, and{" "}
        <span className="text-white font-medium">MySQL</span>, while continuously growing in{" "}
        <span className="text-cyan-300 font-medium">cloud computing</span> and{" "}
        <span className="text-cyan-300 font-medium">full-stack development</span>.
      </p>
    </section>
  );
}
