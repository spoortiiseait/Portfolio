import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Users,
  Code,
  Terminal,
  Presentation
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>04 // EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Leadership &amp; Engineering Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Hands-on team collaboration, full-stack prototyping, testing, and technical presentations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-cyber-500/40 space-y-4"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-cyber-500 border-4 border-slate-900 shadow-glow-cyan"></div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-white/10 text-left space-y-4">
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-cyber-500/15 border border-cyber-500/30 text-cyber-400 mb-2 inline-block">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-electric-violet dark:text-electric-purple mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyber-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Contributions Checklist */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyber-400" />
                    <span>Key Contributions &amp; Impact</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.keyContributions.map((contrib, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Tech Environment:</span>
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-cyber-400 border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
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
