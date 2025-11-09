import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative bg-gray-50 dark:bg-black min-h-screen flex items-center px-6 overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Hi, I'm <span className="text-cyan-500">Pakthapriyan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          >
            A passionate Frontend Developer building interactive, accessible websites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow hover:bg-cyan-600 hover:text-white transition"
            >
              View Projects
            </a>
            <a
              href="#Contact"
              className="inline-block px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <motion.img
              src="/images/profile-removebg-preview.jpg"
              alt="Pakthapriyan"
              className="w-72 h-72 rounded-b-4xl object-cover shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
