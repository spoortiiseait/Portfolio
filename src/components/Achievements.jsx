import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Sparkles,
  Target,
  Compass,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyber-400" />;
      default:
        return <Target className="w-6 h-6 text-electric-violet" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>07 // ACTIVITIES &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements &amp; Activities
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Active engagement in hackathons, competitive problem solving, and technical placement prep.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {resumeData.achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-7 rounded-2xl glass-card glass-card-hover border border-slate-200 dark:border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-md">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyber-500/10 text-cyber-400 border border-cyber-500/20 font-semibold">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Active &amp; Ongoing</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Interests Banner */}
        <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 bg-slate-950/60 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-400">
                <Compass className="w-4 h-4" />
                <span>DOMAIN PASSION</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Core Engineering Interests
              </h3>
              <p className="text-xs text-slate-400">
                Key technological domains I explore and continuously deepen my expertise in.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {resumeData.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900 text-slate-200 border border-white/10 hover:border-cyber-500/50 hover:text-cyber-300 transition-colors cursor-default"
                >
                  #{interest.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
