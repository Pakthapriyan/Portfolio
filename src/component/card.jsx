import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Card({ id, title, description, image, onClick }) {
  const [imgOk, setImgOk] = useState(true);

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.div
      layoutId={`card-${id}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKey}
      className="w-72 bg-black/40 backdrop-blur-md rounded-xl 
      border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.4)] 
      p-4 overflow-hidden transition-all duration-300 cursor-pointer
      hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
    >
      <div className="w-full h-32 mb-3 relative overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
        {image && imgOk ? (
          <motion.img
            layoutId={`image-${id}`}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-cyan-400">
            Image not available
          </div>
        )}
      </div>
      <motion.h2 layoutId={`title-${id}`} className="text-lg font-semibold text-cyan-400 mb-2">
        {title}
      </motion.h2>
      <p className="text-gray-200 text-sm leading-snug mb-1 line-clamp-3">
        {description}
      </p>
      <p className="text-xs text-gray-400">Click to view details</p>
    </motion.div>
  );
}
