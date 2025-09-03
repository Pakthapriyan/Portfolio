import React from "react";
import { FaReact, FaJava, FaPython, FaAws } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai"; // SQL icon (generic database)

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={50} className="text-cyan-400" /> },
    { name: "Java", icon: <FaJava size={50} className="text-red-600" /> },
    { name: "Python", icon: <FaPython size={50} className="text-yellow-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={50} className="text-cyan-500" /> },
    { name: "SQL", icon: <AiOutlineDatabase size={50} className="text-purple-400" /> },
    { name: "AWS", icon: <FaAws size={50} className="text-orange-400" /> },
  ];

  return (
    <section className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-cyan-500/50 transition duration-300"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
