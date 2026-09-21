import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Code,
  Terminal,
  Cpu,
  Database
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function Certifications() {
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-cyber-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-electric-violet" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      default:
        return <Database className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>06 // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Verified mastery in core programming languages, algorithmic complexity, and database management.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-2xl glass-card glass-card-hover border border-slate-200 dark:border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-md">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.badge}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {cert.issuer}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.topic}
                </p>

                {/* Skills tags covered */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skillsCovered.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Completion
                </span>
                <span>Online Evaluation</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
