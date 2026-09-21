import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/5 bg-white/40 dark:bg-slate-950/60 backdrop-blur-md pt-12 pb-8 text-slate-600 dark:text-slate-400 text-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyber-500 to-electric-violet flex items-center justify-center text-white font-mono font-bold text-lg shadow-glow-cyan">
              S
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white">
                {resumeData.personal.name}
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Software Engineer &bull; Information Science Undergrad
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noreferrer"
              id="footer-github-link"
              className="p-2 rounded-lg glass-card hover:text-cyber-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              id="footer-linkedin-link"
              className="p-2 rounded-lg glass-card hover:text-cyber-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              id="footer-email-link"
              className="p-2 rounded-lg glass-card hover:text-cyber-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Back to top"
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-cyber-500/10 text-cyber-400 hover:bg-cyber-500/20 border border-cyber-500/30 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-3 text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with React, Tailwind CSS &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
