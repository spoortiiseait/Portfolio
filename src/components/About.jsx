import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layers,
  Sparkles,
  BookOpen,
  Cpu,
  GraduationCap,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function About() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Algorithmic Problem Solving',
      description:
        'Deep foundation in Data Structures & Algorithms and Object-Oriented Programming (OOP) using Java, Python, and C.',
      color: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30',
      badge: 'Core CS'
    },
    {
      icon: Layers,
      title: 'Full-Stack Web Development',
      description:
        'Building responsive, dynamic web experiences using React.js, JavaScript (ES6+), Node.js, and RESTful API integrations.',
      color: 'from-violet-500/20 to-purple-500/10',
      border: 'border-violet-500/30',
      badge: 'Web Systems'
    },
    {
      icon: Database,
      title: 'Persistent Database Design',
      description:
        'Architecting structured relational databases with MySQL & JDBC as well as NoSQL document databases with MongoDB.',
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30',
      badge: 'Data Architecture'
    },
    {
      icon: Code2,
      title: 'Clean Engineering & Tooling',
      description:
        'Strict adherence to maintainable coding practices, Git version control, testing, API documentation with Postman, and team collaboration.',
      color: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-500/30',
      badge: 'Workflow'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>01 // IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Practical Solutions With Passion &amp; Purpose
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyber-400" />
              <span>Who I Am &amp; What I Build</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              I am an <strong className="text-slate-900 dark:text-white">Information Science Engineering</strong> undergraduate
              currently pursuing my 5th semester at{' '}
              <strong className="text-cyber-400 font-semibold">Adichunchanagiri Institute of Technology (VTU)</strong> in Karnataka, India.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My software engineering journey is centered around turning complex theoretical concepts into robust,
              practical software. Whether it's designing a campus-wide lost &amp; found web platform in{' '}
              <strong className="text-slate-800 dark:text-slate-100 font-mono">React &amp; MongoDB</strong>,
              building an enterprise-level library management system in{' '}
              <strong className="text-slate-800 dark:text-slate-100 font-mono">Java &amp; MySQL</strong>, or
              automating examination analytics with <strong className="text-slate-800 dark:text-slate-100 font-mono">Python</strong>,
              I am dedicated to writing clean, maintainable, and efficient code.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I thrive on continuous learning, problem solving, and collaborating with cross-functional student teams
              to deliver functional technology that makes an everyday difference.
            </p>

            {/* Quick Strengths Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Practical Software Solutions',
                'Strong Data Structures Foundation',
                'Object-Oriented Programming (OOP)',
                'Responsive UI & RESTful APIs',
                'Relational Database Modeling',
                'Git Version Control & Team Workflows'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {resumeData.metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-200 dark:border-white/5 flex flex-col justify-between"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {metric.label}
                </div>
                <div className="my-3 text-4xl sm:text-5xl font-extrabold font-mono text-gradient-cyan">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl glass-card border ${pillar.border} relative overflow-hidden flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-cyber-400 shadow-glow-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
