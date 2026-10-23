import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Operational Roles
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Hands-on IT technical support, hardware/software maintenance, and network troubleshooting at NPD Ltd alongside academic software engineering leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical line indicator */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500/50 to-slate-800" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group"
              >
                {/* Timeline node badge on desktop */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex-shrink-0 z-10">
                  <Activity className="w-6 h-6 text-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className="flex-1 glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all">
                  
                  {/* Job Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {job.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                        {job.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="mt-4 space-y-2.5">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
