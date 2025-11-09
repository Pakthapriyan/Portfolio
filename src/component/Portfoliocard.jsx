import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card from "./card";
import Modal from "./Modal";

const TABS = [
  { key: "react", label: "React" },
  { key: "aws", label: "AWS" },
  { key: "others", label: "Others" },
];

export default function PortfolioCard() {
  const projects = [
    {
      title: "Job Dataset Analysis",
      description: "Exploratory data analysis and visualization of job market trends.",
      image: "/images/jjj.jpg",
      github: "https://github.com/Pakthapriyan/Job_Analytics_Portal",
      category: "others",
      tech: ["Python", "Pandas", "Matplotlib", "EDA"],
    },
    {
      title: "IoT Smart LPG Cylinder",
      description: "Real-time leakage detection and smart control for gas cylinders.",
      image: "/images/fla.jpg",
      github: "https://github.com/Pakthapriyan/DETECTION-OF-LPG-LEAKAGE-AND-MONITORING-THE-LEVEL-OF-THE-CYLINDER-USING-ESP32",
      category: "others",
      tech: ["ESP32", "MQ-2", "IoT"],
    },
    {
      title: "EV Battery Optimization",
      description: "ML-based prediction of battery degradation with explainable AI.",
      image: "/images/evcar.jpg",
      github: "https://github.com/Pakthapriyan/Electric-vehicle-Battery-optimization/tree/main",
      category: "others",
      tech: ["Python", "XGBoost", "SHAP"],
    },
    {
      title: "Parkinson's Disease Prediction",
      description: "ML-based prediction tool with Tkinter GUI and multiple classifiers.",
      image: "/images/R.jpeg",
      github: "https://github.com/Pakthapriyan/parkinson-disease-prediction",
      category: "others",
      tech: ["Python", "SVM", "Tkinter"],
    },
    {
      title: "Swiggy Website Clone",
      description: "Designed and developed a dynamic Swiggy Clone website.",
      image: "/images/swiggy-logo-02.png",
      github: "https://github.com/Pakthapriyan/Swiggy",
      category: "react",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Stock Market Prediction",
      description: "Predicted stock prices using ARIMA, LSTM, and Regression models.",
      image: "/images/stock.webp",
      github: "https://github.com/your-username/stocks",
      category: "others",
      tech: ["Python", "LSTM", "ARIMA"],
    },
    // New React projects
    {
      title: "AquaMart",
      description:
        "AquaMart is a simple and modern e-commerce platform built with React, offering smooth product browsing and a clean user experience. It is designed for scalability and easy integration with future backend",
      image: "/images/aquamart.png",
      github: "https://github.com/your-username/aquamart",
      category: "react",
      tech: [
        "React",
        "Vite",
        "React Router",
        "Axios",
        "Node.js",
        "Express",
        "Mongoose",
        "JWT",
        "bcrypt",
        "MongoDB Atlas",
      ],
    },
    {
      title: "FareWise – Smart Cab Fare Estimator",
      description:
        "FareWise is a cab fare estimation app built with React and Node.js, allowing users to calculate ride fares based on distance and vehicle type. It features a fast UI, a lightweight Express backend, and is easily deployable on AWS.",
      image: "/images/farewise.png",
      github: "https://github.com/Pakthapriyan/farewise-react",
      category: "react",
      tech: [
        "React",
        "TailwindCSS",
        "Axios",
        "Node.js",
        "Express",
        "AWS (optional)",
      ],
    },
    {
      title: "Full-Stack E-Commerce on AWS (Deployed End-to-End)",
      description:
        "Built and deployed a full-stack e-commerce platform fully on AWS using S3 + CloudFront (OAC) for secure static hosting, EC2 for the Node.js backend, DynamoDB for auth, and Route 53 + ACM for custom domain + HTTPS. Architecture follows IAM role-based access, caching, HTTPS termination, origin access control, and scalable storage.",
      image: "/images/eccomerce.png",
      github: undefined,
      category: "aws",
      tech: [
        "AWS S3",
        "CloudFront (OAC)",
        "EC2",
        "Node.js",
        "DynamoDB",
        "Route 53",
        "ACM",
        "IAM Roles",
        "HTTPS",
        "Caching",
      ],
    },
    {
      title: "Deploying a Secure and Scalable Web Server on Amazon EC2",
      description:
        "Deployed a secure and scalable web server on Amazon EC2 with automated Apache setup, monitoring, and storage scaling. Implemented security groups, termination protection, CloudWatch monitoring, and EBS/instance type upgrades.",
      image: "/images/server.png",
      github: undefined,
      category: "aws",
      tech: [
        "AWS EC2 (Linux Instance)",
        "Amazon EBS",
        "AWS CloudWatch",
        "Security Groups",
        "Apache HTTP Server",
        "User Data Script (Bash)",
        "AWS CLI/Console",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("react");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => projects.filter((p) => p.category === activeTab),
    [projects, activeTab]
  );

  return (
    <section id="projects" className="bg-white dark:bg-black px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full border border-cyan-500/40 bg-white/60 dark:bg-black/30 p-1">
          {TABS.map((t) => {
            const count = projects.filter((p) => p.category === t.key).length;
            const isActive = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "text-cyan-300 hover:bg-cyan-500/10"
                }`}
              >
                {t.label} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center md:px-10 min-h-[200px]">
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-400">
            No projects in this category yet.
          </p>
        )}

        {filtered.map((project, index) => (
          <motion.div
            key={`${activeTab}-${index}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <Card
              id={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              onClick={() => setSelected(project)}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
