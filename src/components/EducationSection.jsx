import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen, Award, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Qualifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            A comprehensive, rigorous progression across higher education in Information Technology and Computer Science.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle ambient glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Header with level badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-400 transition-colors">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${
                    idx === 0 
                      ? 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'bg-slate-900 border-slate-700 text-slate-300'
                  }`}>
                    {edu.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                  {edu.level}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {edu.institution}
                </div>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-slate-400 mt-2.5">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Key Coursework / Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Core Focus & Achievements:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Academic Record</span>
                <span className="text-cyan-400/80">Rwanda Higher Ed</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
