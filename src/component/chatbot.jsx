import React, { useState, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

const keywordMap = {
  skills: ["skills", "abilities", "what can you do", "tech skills"],
  react: ["react", "frontend", "javascript framework"],
  aws: ["aws", "cloud", "ec2", "s3", "vpc", "iam", "rds"],
  projects: ["projects", "portfolio", "work", "show me projects"],
  resume: ["resume", "cv", "curriculum vitae", "download"],
  contact: ["contact", "email", "linkedin", "github", "connect"],
  education: ["education", "degree", "college", "university", "cgpa"],
  experience: ["experience", "internship", "work", "intern"],
  "tech stack": ["tech stack", "tools", "technology", "built with", "stack"],
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi, I'm your Portfolio Assistant! Ask me about skills, AWS, projects, or get my resume." }
  ]);
  const [input, setInput] = useState("");
  const hiddenDownloadRef = useRef(null);
  

  const knowledgeBase = {
    "skills": "✅ I have experience in Java, React, HTML, CSS, JavaScript, MySQL, and AWS.",
    "react": "⚛️ I have built projects in React such as the Swiggy Website Clone and my own Portfolio site.",
    "aws": "☁️ I’m currently pursuing AWS re/Start. Hands-on with EC2, S3, IAM, VPC, RDS, CloudFormation, and CloudWatch. Certification in progress (AWS Cloud Practitioner).",
    "projects": `📂 I’ve worked on: 
      <br/>- Job Dataset Analysis 
      <br/>- IoT Smart LPG Cylinder 
      <br/>- EV Battery Optimization 
      <br/>- Parkinson's Disease Prediction 
      <br/>- Swiggy Website Clone 
      <br/>- Stock Market Prediction`,
    "resume": "📄 Downloading resume now...",
    "contact": `📬 Reach me at <a href="mailto:spakthapriyan@gmail.com" class="text-cyan-600 underline">Email</a> 
                <br/>🔗 <a href="https://www.linkedin.com/in/paktha-priyan" target="_blank" class="text-cyan-600 underline">LinkedIn</a> 
                <br/>💻 <a href="https://github.com/your-github" target="_blank" class="text-cyan-600 underline">GitHub</a>`,
    "education": "🎓 Completed M.Sc. Computer Science at Sastra University (CGPA: 7.88). Also completed B.Sc. Computer Science (CGPA: 7.10).",
    "experience": "💼 Data Analyst Intern @ NullClass (Dec 2024 - Jan 2025). Worked on EDA, preprocessing, and Tableau visualization.",
    "tech stack": "🛠️ This portfolio is built with React + TailwindCSS, deployed on Vercel.",
    "about": "🙋‍♂️ Hi, I’m Pakthapriyan! I’m passionate about building scalable web apps, solving problems with data, and exploring cloud technologies (AWS). I enjoy working on full-stack projects and continuously learning new skills to grow as a developer."
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
    return { key: "unknown", text: "🤔 I’m not sure about that. Try asking about skills, AWS, projects, resume, or contact." };
  };

  const handleUserMessage = (message) => {
    const { key, text } = findAnswer(message);

    // If resume is requested → auto download
    if (key === "resume" && hiddenDownloadRef.current) {
      setTimeout(() => hiddenDownloadRef.current.click(), 800); // delay for realism
    }

    setMessages([...messages, { sender: "user", text: message }, { sender: "bot", text }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleUserMessage(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Hidden Resume Download */}
      <a
        ref={hiddenDownloadRef}
        href="/resume.pdf"
        download="PakthaPriyan_Resume.pdf"
        className="hidden"
      />

      {/* Toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-400 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chatbot window */}
      {isOpen && (
        <div className="w-80 bg-white shadow-2xl rounded-2xl overflow-hidden border border-cyan-500">
          {/* Header */}
          <div className="bg-cyan-500 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold">🤖 Portfolio Assistant</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-black">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-black border border-cyan-300"
                    : "bg-cyan-500 text-white ml-auto"
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: msg.text }} />
              </div>
            ))}
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
              className="flex-1 px-3 py-2 text-sm bg-white text-black outline-none"
            />
            <button type="submit" className="px-4 text-cyan-500 font-bold hover:text-black">➤</button>
          </form>
        </div>
      )}
    </div>
  );
}
