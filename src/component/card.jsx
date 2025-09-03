import React from "react";

export default function Card({ title, description, image, link }) {
  return (
    <div
      className="w-72 bg-black/40 backdrop-blur-md rounded-xl 
      border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.4)] 
      p-4 overflow-hidden transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] hover:scale-105"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-lg mb-3"
        />
      )}
      <h2 className="text-lg font-semibold text-cyan-400 mb-2">
        {title}
      </h2>
      <p className="text-gray-200 text-sm leading-snug mb-3">
        {description}
      </p>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button
            className="px-3 py-1.5 bg-cyan-600 text-white 
            text-sm rounded-md hover:bg-cyan-500 transition-colors duration-300"
          >
            Learn More
          </button>
        </a>
      )}
    </div>
  );
}
