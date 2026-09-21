import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  ArrowUpRight,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web Application', 'Java & Database', 'Python & Data'];

  const filteredProjects = resumeData.projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>03 // PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects &amp; Software Systems
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Engineered with modern full-stack architectures, relational database connectors, and clean algorithmic problem-solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyber-500 to-electric-violet text-white shadow-glow-cyan font-semibold'
                    : 'glass-card border-slate-300 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-cyber-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl glass-card glass-card-hover border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Header with Glowing Color Accent */}
              <div className="p-6 sm:p-7 space-y-4">
                {/* Meta Badges */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-400">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyber-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {project.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 2).map((item, i) => (
                    <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-400 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-7 sm:py-4 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  id={`project-details-${project.id}`}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyber-400 hover:text-cyber-300 transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span>Deep Dive Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    id={`project-github-${project.id}`}
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-200/50 dark:bg-slate-800/60 hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
