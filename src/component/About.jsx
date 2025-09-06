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
        Hi, I’m <span className="text-cyan-400 font-semibold">Pakthapriyan</span>, 
        a Computer Science graduate passionate about{" "}
        <span className="text-white font-medium">software engineering</span>,{" "}
        <span className="text-cyan-300 font-medium">full-stack web development</span>,{" "}
        and <span className="text-cyan-300 font-medium">cloud computing</span>. 
        I enjoy building <span className="text-white font-medium">scalable</span>,{" "}
        <span className="text-white font-medium">user-friendly</span> applications with{" "}
        <span className="text-white font-medium">React, Java, Python, Tailwind CSS, MySQL</span>, 
        and <span className="text-white font-medium">Tableau</span>. 
        Currently, I’m expanding my expertise through the{" "}
        <span className="text-cyan-300 font-medium">AWS re/Start Program</span> 
        to design and deploy modern cloud-based solutions.
      </p>
    </section>
  );
}
