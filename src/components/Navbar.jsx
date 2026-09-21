import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileDown, Terminal, ChevronRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-left cursor-pointer"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-500 to-electric-violet flex items-center justify-center shadow-glow-cyan text-white font-mono font-bold text-xl group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-cyber-400 transition-colors flex items-center gap-1">
                {resumeData.personal.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="block text-xs font-mono text-slate-500 dark:text-slate-400">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyber-400 font-semibold bg-cyber-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyber-400 dark:hover:text-cyber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyber-400 to-electric-violet rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              aria-label="Toggle dark and light theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:text-cyber-400 hover:border-cyber-500/40 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="#resume"
              id="nav-resume-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyber-500 to-electric-violet hover:from-cyber-400 hover:to-electric-purple shadow-glow-cyan hover:shadow-glow-violet transition-all transform hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              id="mobile-theme-toggle"
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-card border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-2 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-cyber-500/10 hover:text-cyber-400 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <a
              href="#resume"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyber-500 to-electric-violet shadow-glow-cyan"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
