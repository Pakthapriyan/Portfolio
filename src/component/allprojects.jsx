import React from "react";
import Card from "./card";

export default function AllProjects() {
  const allProjects = [
    {
      title: "Library Management System",
      description: "Desktop app using Java Swing and MySQL for managing library records.",
      technologies: "Java, Swing, MySQL",
      image: "https://source.unsplash.com/random/400x200/?library",
      link: "https://github.com/your-username/library-system"
    },
    {
      title: "Inventory Management System",
      description: "Spring Boot web app with CRUD and reports.",
      technologies: "Java, Spring Boot",
      image: "https://source.unsplash.com/random/400x200/?inventory",
      link: "https://github.com/your-username/inventory-system"
    },
    {
      title: "Stock Market Prediction",
      description: "Predicted stock prices using ARIMA, LSTM, and regression models.",
      technologies: "Python, ML, LSTM",
      image: "https://source.unsplash.com/random/400x200/?stock",
      link: "https://github.com/your-username/stock-prediction"
    },
    {
      title: "CollegeConnect UI",
      description: "Responsive UI design for college management in Figma.",
      technologies: "UI/UX, Figma",
      image: "https://source.unsplash.com/random/400x200/?figma",
      link: "#"
    },
    // also include the first 6 here so it shows all
  ];

  return (
    <section className="bg-black px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        All Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <div key={index} className="flex justify-center">
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
