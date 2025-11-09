import React from "react";
import { motion } from "framer-motion";
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
    <section className="p-10 bg-white dark:bg-black text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white/60 dark:bg-black/40 text-gray-900 dark:text-white backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-cyan-500/50 transition duration-300"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
