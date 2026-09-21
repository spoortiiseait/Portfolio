import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  Mail,
  MapPin,
  Check,
  Copy,
  Terminal,
  Code2,
  Sparkles,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const typingText = useTypewriter([
    'Software Engineer',
    'Information Science Undergrad',
    'Full-Stack Developer',
    'Java & Python Enthusiast',
    'Problem Solver'
  ], 90, 45, 1800);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Futuristic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyber-500/15 dark:bg-cyber-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-electric-violet/15 dark:bg-electric-violet/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyber-500/30 bg-cyber-500/10 backdrop-blur-md shadow-glow-cyan text-xs font-mono font-medium text-cyber-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>Available for Internships & Full-Time Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-mono font-medium tracking-wide text-cyber-400 uppercase">
                Hello World &bull; I am
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="text-gradient-cyan">{resumeData.personal.name}</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-slate-700 dark:text-slate-200">
                <span className="mr-2 text-slate-400">&gt;</span>
                <span className="text-electric-purple dark:text-cyber-300">{typingText}</span>
                <span className="w-2.5 h-6 sm:h-7 bg-cyber-400 ml-1 inline-block animate-pulse"></span>
              </div>
            </div>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {resumeData.personal.summary}
            </p>

            {/* Location & Institution Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyber-400" />
                <span>{resumeData.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-electric-violet" />
                <span>B.E. ISE @ AIT, VTU (5th Sem)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-projects-btn"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyber-500 to-electric-violet hover:from-cyber-400 hover:to-electric-purple shadow-glow-cyan hover:shadow-glow-violet transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 glass-card hover:border-cyber-500/40 hover:text-cyber-400 transition-all transform hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href="#resume"
                id="hero-resume-btn"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
              >
                <FileDown className="w-4 h-4 text-cyber-400" />
                <span>CV / Resume</span>
              </a>
            </div>

            {/* Quick Connect Links */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyber-400 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyber-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                id="hero-copy-email-btn"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyber-400 transition-colors"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{resumeData.personal.email}</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${resumeData.personal.phone}`}
                id="hero-phone-link"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyber-400 transition-colors"
                title="Call Phone"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{resumeData.personal.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-cyber-500/40 via-electric-violet/30 to-transparent shadow-2xl">
              <div className="rounded-xl glass-card overflow-hidden text-left font-mono">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-cyber-400" />
                    <span>developer_env.json</span>
                  </div>
                  <div className="w-10"></div>
                </div>

                {/* Code Window Content */}
                <div className="p-5 text-xs sm:text-sm space-y-2 overflow-x-auto bg-slate-950/70 text-slate-300 leading-relaxed">
                  <p className="text-slate-500">// Personal developer config</p>
                  <p>
                    <span className="text-electric-pink">const</span>{' '}
                    <span className="text-cyber-300">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"{resumeData.personal.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">degree:</span>{' '}
                    <span className="text-emerald-300">"B.E. Information Science"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">institution:</span>{' '}
                    <span className="text-emerald-300">"AIT, VTU"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-amber-300">"5th Semester Undergrad"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">primaryLanguages:</span> [
                    <span className="text-cyber-300">"Java"</span>,{' '}
                    <span className="text-cyber-300">"Python"</span>,{' '}
                    <span className="text-cyber-300">"C"</span>
                    ],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">stack:</span> [
                    <span className="text-electric-purple">"React"</span>,{' '}
                    <span className="text-electric-purple">"Node.js"</span>,{' '}
                    <span className="text-electric-purple">"MySQL"</span>,{' '}
                    <span className="text-electric-purple">"MongoDB"</span>
                    ],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">openForHiring:</span>{' '}
                    <span className="text-emerald-400 font-bold">true</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-emerald-300">"Building Scalable & Practical Systems"</span>
                  </p>
                  <p>&#125;;</p>
                  <div className="pt-2 border-t border-slate-800 text-slate-500 flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Sparkles className="w-3 h-3" /> Ready for Compilation
                    </span>
                    <span>UTF-8 &bull; JS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
