import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>05 // ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Foundations &amp; Degrees
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Formal education milestones in Information Science Engineering, Mathematics, and Computer Science.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10 border-l-2 border-cyber-500/30 group"
            >
              {/* Milestone Icon Dot */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-900 border-2 border-cyber-400 flex items-center justify-center text-cyber-400 shadow-glow-cyan">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl glass-card glass-card-hover border border-slate-200 dark:border-white/10 text-left space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyber-500/15 border border-cyber-500/30 text-cyber-400 inline-block mb-1.5">
                      {edu.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyber-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
