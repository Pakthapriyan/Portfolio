import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function Modal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  const id = project ? project.title : "";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            layoutId={`card-${id}`}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 230, damping: 22 }}
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-cyan-500/30 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {project.image && (
              <motion.img
                layoutId={`image-${id}`}
                src={project.image}
                alt="cover"
                className="w-full h-60 object-cover"
              />
            )}

            <div className="p-5 md:p-6 grid md:grid-cols-5 gap-5">
              <div className="md:col-span-3 space-y-3">
                <motion.h3 layoutId={`title-${id}`} className="text-xl font-semibold text-cyan-400">
                  {project.title}
                </motion.h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-2">
                {project.tech && project.tech.length > 0 && (
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-700"
                    >
                      <ExternalLink size={16} /> GitHub
                    </a>
                  )}
                  {project.link && project.link !== project.github && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
