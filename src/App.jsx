import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-cyber-500/30 selection:text-cyber-300`}>
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-radial-glow opacity-60"></div>
      <div className="fixed inset-0 -z-50 pointer-events-none bg-purple-glow opacity-40"></div>

      {/* Sticky Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
