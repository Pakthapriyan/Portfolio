import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-black text-gray-800 dark:text-gray-300 px-6 py-16 mt-10 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Me</h2>

      {/* Short single paragraph */}
      <p className="max-w-3xl text-center leading-relaxed">
        Hi, I’m <span className="text-cyan-400 font-semibold">Pakthapriyan</span> — a Computer Science graduate,
        <span className="text-cyan-300 font-medium"> AWS re/Start graduate</span>, and
        <span className="text-cyan-300 font-medium"> AWS Certified Cloud Practitioner</span>.
        I specialize in <span className="text-cyan-300 font-medium">full-stack development</span> and
        <span className="text-cyan-300 font-medium"> cloud computing</span>, building
        <span className="text-gray-900 dark:text-white font-medium"> scalable</span> and
        <span className="text-gray-900 dark:text-white font-medium"> user-friendly</span> applications using
        <span className="text-gray-900 dark:text-white font-medium"> React, Java, Python, Tailwind CSS, MySQL</span>, and
        <span className="text-gray-900 dark:text-white font-medium"> Tableau</span>.
      </p>
    </section>
  );
}
