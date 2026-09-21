import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Database,
  Cpu,
  Wrench,
  Search,
  CheckCircle,
  Terminal,
  Zap
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Programming Languages',
    'Web Technologies',
    'Databases & Storage',
    'Core CS Fundamentals',
    'Tools & Developer Practices'
  ];

  // Flatten skills with category info for unified search & filtering
  const allSkills = resumeData.skills.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      category: cat.category,
      categoryIcon: cat.icon
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory =
      activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-cyber-400" />;
      case 'Web Technologies':
        return <Globe className="w-4 h-4 text-electric-violet" />;
      case 'Databases & Storage':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Core CS Fundamentals':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      default:
        return <Wrench className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>02 // SKILL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Proficiency &amp; Arsenal
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Curated skills across systems programming, modern web technologies, persistent databases, and computer science fundamentals.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter and Search Bar */}
        <div className="space-y-4 mb-10">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., React, Java, Python, SQL, DSA...)"
              className="w-full pl-11 pr-4 py-2.5 rounded-xl text-sm glass-card border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyber-500 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyber-500 text-white shadow-glow-cyan font-semibold'
                      : 'glass-card border-slate-300 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-cyber-400 hover:border-cyber-500/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="p-5 rounded-2xl glass-card glass-card-hover border border-slate-200 dark:border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(skill.category)}
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-cyber-400 font-semibold">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
                  {skill.highlight}
                </p>
              </div>

              {/* Progress Bar Indicator */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>Proficiency</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {skill.rating}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.rating}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyber-500 to-electric-violet rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Computer Science Spotlight Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-card border border-cyber-500/30 bg-gradient-to-r from-cyber-500/10 via-electric-violet/10 to-transparent">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-left">
              <div className="flex items-center gap-2 text-cyber-400 font-mono text-xs mb-1">
                <Zap className="w-4 h-4" />
                <span>CORE COMPUTER SCIENCE</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Academic &amp; Systems Foundation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Undergraduate coursework at Adichunchanagiri Institute of Technology (VTU).
              </p>
            </div>

            <div className="md:col-span-8 flex flex-wrap gap-2">
              {[
                'Data Structures & Algorithms',
                'Object-Oriented Programming (OOP)',
                'Database Management Systems (DBMS)',
                'Operating Systems',
                'Computer Networks',
                'REST APIs',
                'Responsive Design',
                'Basic Cloud Computing',
                'Problem Solving'
              ].map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900/60 dark:bg-slate-950/80 text-slate-200 border border-white/10 flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
