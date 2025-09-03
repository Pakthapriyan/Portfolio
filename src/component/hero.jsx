export default function PortfolioHero() {
  return (
    <section className="bg-gray-50 dark:bg-black min-h-screen flex items-center px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-cyan-500">Pakthapriyan</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            A passionate Frontend Developer building interactive, accessible websites.
          </p>
          <div className="space-x-4">
            <a 
              href="#projects" 
              className="inline-block px-6 py-3 border bg-cyan-500 text-black font-semibold rounded-lg shadow hover:bg-cyan-800  hover:text-white transition"
            >
              View Projects
            </a>
            <a 
              href="#Contact" 
              className="inline-block px-6 py-3 border bg-cyan-500 text-black font-semibold hover:bg-cyan-800 rounded-lg shadow  hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <img 
            src="src\assets\profile-removebg-preview.jpg" 
            alt="Alex Johnson" 
            className="w-72 h-72 rounded-b-4xl object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
