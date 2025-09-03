import React, { useState } from "react";
import Card from "./card";

export default function PortfolioCard() {
  const projects = [
    
    {
      title: "Job Dataset Analysis",
      description: "Exploratory data analysis and visualization of job market trends.",
      image: "jjj.jpg",
      link: "https://github.com/Pakthapriyan/Job_Analytics_Portal"
    },
    {
      title: "IoT Smart LPG Cylinder",
      description: "Real-time leakage detection and smart control for gas cylinders.",
      image: "fla.jpg",
      link: "https://github.com/Pakthapriyan/DETECTION-OF-LPG-LEAKAGE-AND-MONITORING-THE-LEVEL-OF-THE-CYLINDER-USING-ESP32"
    },
    {
      title: "EV Battery Optimization",
      description: "ML-based prediction of battery degradation with explainable AI.",
      image: "evcar.jpg",
      link: "https://github.com/Pakthapriyan/Electric-vehicle-Battery-optimization/tree/main"
    },
    
    {
      title: "Parkinson's Disease Prediction",
      description: "ML-based prediction tool with Tkinter GUI and multiple classifiers.",
      image: "R.jpeg",
      link: "https://github.com/Pakthapriyan/parkinson-disease-prediction"
    },
    {
      title: "Swiggy Website Clone",
      description: "Designed and developed a dynamic Swiggy Clone website.",
      image: "swiggy-logo-02.png",
      link: "https://github.com/Pakthapriyan/Swiggy"
    },
    {
      title: "Stock Market Prediction",
      description: "Predicted stock prices using ARIMA, LSTM, and Regression models.",
      image: "stock.webp",
      link: "https://github.com/your-username/stocks"
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="bg-black px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 
                justify-items-center px-40">
  {visibleProjects.map((project, index) => (
    <Card
      key={index}
      title={project.title}
      description={project.description}
      image={project.image}
      link={project.link}
    />
  ))}
</div>


      

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}
