import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const keywordMap = {
  skills: ["skills", "skill", "abilities", "what can you do", "tech skills"],
  react: ["react", "frontend", "javascript framework"],
  aws: ["aws", "cloud", "ec2", "s3", "vpc", "iam", "rds"],
  projects: ["projects", "project", "portfolio", "work", "show me project", "show me projects"],
  resume: ["resume", "cv", "curriculum vitae", "download"],
  contact: ["contact", "email", "linkedin", "github", "connect"],
  education: ["education", "degree", "college", "university", "cgpa"],
  experience: ["experience", "internship", "work", "intern"],
  "tech stack": ["tech stack", "tools", "technology", "built with", "stack"],
  about: ["about", "who are you", "introduction", "self"],
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi, I'm your Portfolio Assistant! Ask me about skills, AWS, projects, or get my resume.",
    },
  ]);
  const [input, setInput] = useState("");
  const hiddenDownloadRef = useRef(null);
  const messagesEndRef = useRef(null);

  const knowledgeBase = {
    about: "🙋‍♂️ Hi, I’m Pakthapriyan! I’m passionate about building scalable web apps, solving problems with data, and exploring cloud technologies (AWS).",
    skills: "✅ I have experience in Java, React, HTML, CSS, JavaScript, MySQL, and AWS.",
    react: "⚛️ I have built projects in React such as the Swiggy Website Clone and my own Portfolio site.",
    aws: "☁️ I’m currently pursuing AWS re/Start. Hands-on with EC2, S3, IAM, VPC, RDS, CloudFormation, and CloudWatch. Certification in progress (AWS Cloud Practitioner).",
    projects: `📂 Check out my projects:
      <br/>- <a href="https://github.com/Pakthapriyan/Job_Analytics_Portal" target="_blank" class="text-cyan-600 underline">Job Dataset Analysis</a>
      <br/>- <a href="https://github.com/Pakthapriyan/DETECTION-OF-LPG-LEAKAGE-AND-MONITORING-THE-LEVEL-OF-THE-CYLINDER-USING-ESP32" target="_blank" class="text-cyan-600 underline">IoT Smart LPG Cylinder</a>
      <br/>- <a href="https://github.com/Pakthapriyan/Electric-vehicle-Battery-optimization/tree/main" target="_blank" class="text-cyan-600 underline">EV Battery Optimization</a>
      <br/>- <a href="https://github.com/Pakthapriyan/parkinson-disease-prediction" target="_blank" class="text-cyan-600 underline">Parkinson's Disease Prediction</a>
      <br/>- <a href="https://github.com/Pakthapriyan/Swiggy" target="_blank" class="text-cyan-600 underline">Swiggy Clone</a>
      <br/>- <a href="https://github.com/Pakthapriyan/Portfolio" target="_blank" class="text-cyan-600 underline">Portfolio Repository</a>`,
    resume: "📄 Downloading resume now...",
    contact: `📬 Connect with me:
              <br/>📧 <a href="mailto:spakthapriyan@gmail.com" class="text-cyan-600 underline">Email</a>
              <br/>🔗 <a href="https://www.linkedin.com/in/paktha-priyan" target="_blank" class="text-cyan-600 underline">LinkedIn</a>
              <br/>💻 <a href="https://github.com/Pakthapriyan" target="_blank" class="text-cyan-600 underline">GitHub</a>
              <br/>🌐 <a href="http://pakthapriyan-portfolio.vercel.app" target="_blank" class="text-cyan-600 underline">Portfolio</a>`,
    education: "🎓 Completed M.Sc. Computer Science at Sastra University (CGPA: 7.88). Also completed B.Sc. Computer Science (CGPA: 7.10).",
    experience: "💼 Data Analyst Intern @ NullClass (Dec 2024 - Jan 2025). Worked on EDA, preprocessing, and Tableau visualization.",
    "tech stack": "🛠️ This portfolio is built with React + TailwindCSS, deployed on Vercel.",
  };

  const quickOptions = [
    { label: "About Me", key: "about" },
    { label: "Show Skills", key: "skills" },
    { label: "Show Projects", key: "projects" },
    { label: "AWS Experience", key: "aws" },
    { label: "Education", key: "education" },
    { label: "Work Experience", key: "experience" },
    { label: "Download Resume", key: "resume" },
    { label: "Contact Info", key: "contact" },
    { label: "Tech Stack", key: "tech stack" },
  ];

  const findAnswer = (message) => {
    const lowerMsg = message.toLowerCase();
    for (let key in keywordMap) {
      if (keywordMap[key].some((word) => lowerMsg.includes(word))) {
        return { key, text: knowledgeBase[key] };
      }
    }
    return {
      key: "unknown",
      text: "🤔 I’m not sure about that. Try asking about skills, AWS, projects, resume, or contact.",
    };
  };

  const handleUserMessage = (message) => {
    const { key, text } = findAnswer(message);

    if (key === "resume" && hiddenDownloadRef.current) {
      setTimeout(() => hiddenDownloadRef.current.click(), 500);
    }

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: message },
      { sender: "bot", text },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleUserMessage(input);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed z-[9999] bottom-4 right-4 sm:bottom-5 sm:right-5 max-h-[90vh]">
      <a
        ref={hiddenDownloadRef}
        href="/resume.pdf"
        download="Pakthapriyan_Resume.pdf"
        className="hidden"
      />

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-400 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-80 md:w-96 max-w-[96vw] sm:max-w-sm md:max-w-md 
                        bg-white shadow-2xl rounded-2xl overflow-hidden border border-cyan-500 
                        flex flex-col max-h-[85vh]">
          {/* Header */}
          <div className="bg-cyan-500 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold">🤖 Portfolio Assistant</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-black">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-black border border-cyan-300 self-start"
                    : "bg-cyan-500 text-white ml-auto"
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: msg.text }} />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          <div className="flex flex-wrap gap-2 px-3 py-2 border-t border-gray-200 bg-gray-50">
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleUserMessage(opt.key)}
                className="px-3 py-1 text-xs border border-cyan-400 text-cyan-600 rounded-full hover:bg-cyan-500 hover:text-white"
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex border-t border-gray-200 bg-gray-50">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 text-base sm:text-sm bg-white text-black outline-none"
            />
            <button
              type="submit"
              className="px-4 text-cyan-500 font-bold hover:text-black"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
