import React, { useState } from 'react';
import { 
  Network, ShieldCheck, Cloud, Terminal, Activity, 
  Search, CheckCircle2, ChevronRight, Cpu, Layers 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Network': return <Network className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const selectedCategoryData = skillCategories.find(c => c.id === activeCategory);

  // Filter skills across all categories if search is active
  const filteredSkills = searchQuery.trim() === ''
    ? selectedCategoryData.skills
    : skillCategories.flatMap(c => c.skills.map(s => ({ ...s, categoryName: c.name }))).filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section id="skills" className="py-24 relative bg-[#090d16] bg-dot-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Systems Proficiency
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Proven across enterprise IT support, hardware maintenance, network administration, and modern software development.
          </p>

          {/* Quick Filter Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. AnyDesk, React, IP, Printer, Java, Linux)..."
              className="w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 text-xs text-white placeholder-slate-500 rounded-lg pl-10 pr-4 py-2.5 outline-none font-mono transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Tab Bar (Visible when not searching) */}
        {!searchQuery && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all border ${
                    isActive
                      ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] font-semibold'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Category Description Banner */}
        {!searchQuery && (
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <p className="text-xs font-mono text-slate-400 italic">
              "{selectedCategoryData.summary}"
            </p>
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-xl p-5 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Header of skill card */}
                <div className="flex items-start justify-between">
                  <div>
                    {skill.categoryName && (
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                        {skill.categoryName}
                      </span>
                    )}
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800/80 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Verified badge */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Verified</span>
                </span>
                <span className="text-slate-500">Tier-3 Validated</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-mono text-sm">
            No specific skills found matching "{searchQuery}". Try searching for BGP, OSPF, Python, or Firewalls.
          </div>
        )}

      </div>
    </section>
  );
}
