import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import PortfolioHero from './component/hero';
import PortfolioCard from './component/Portfoliocard';
import Skills from './component/skills';
import Contact from './component/Contact';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  return (
    <>
      <Navbar />
      <div id="PortfolioHero">
        <PortfolioHero />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="projects">
        <PortfolioCard />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
