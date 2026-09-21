import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle,
  Calendar,
  Layers,
  Code2,
  Cpu,
  Database
} from 'lucide-react';
import { GithubIcon } from './Icons';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-cyber-500/30 p-6 sm:p-8 shadow-2xl z-10 text-left bg-slate-900/95 text-slate-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-cyber-500/20 border border-cyber-500/30 text-cyber-400">
              {project.badge}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-electric-violet/20 border border-electric-violet/30 text-purple-300">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
            {project.title}
          </h3>

          {/* Full Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-cyber-400" />
              <span>Technologies &amp; Architecture</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/90 text-cyan-300 border border-cyan-500/20 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights / Implementation Points */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Core Features &amp; Implementation Details</span>
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-400 mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Insights Box */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 mb-8 font-mono text-xs text-slate-300">
            <div className="text-cyber-400 font-bold mb-1 flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>System &amp; Engineering Focus</span>
            </div>
            <p className="text-slate-400 leading-normal">
              Built with emphasis on modularity, data integrity, error boundaries, and intuitive user flows. Adheres to software engineering best practices and structured version control.
            </p>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyber-500 to-electric-violet hover:from-cyber-400 hover:to-electric-purple transition-all"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
