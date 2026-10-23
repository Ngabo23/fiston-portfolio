import React, { useState } from 'react';
import { 
  Network, Server, Shield, CheckCircle, ArrowUpRight, 
  Layers, ExternalLink, Activity, Terminal, ChevronDown, ChevronUp 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProjectId, setExpandedProjectId] = useState(projects[0].id);

  const categories = ['All', 'AI & IT Service Management', 'Web & Workflow Automation', 'Enterprise Software Development', 'IT Support & Network Operations'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#090d16] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>Applied Solutions & Software Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Case Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Real-world systems spanning AI helpdesk automation, full-stack university workflow digitization, workforce attendance engines, and enterprise IT support.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="glass-panel rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all p-6 md:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Project Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                        {project.category}
                      </span>
                      <span className="text-slate-600">|</span>
                      <span className="text-slate-400">{project.role}</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-slate-500">{project.timeframe}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Impact Metrics */}
                  <div className="lg:col-span-4 bg-slate-950/80 rounded-xl p-5 border border-slate-800/80 space-y-3">
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      Measured Business & Tech Impact
                    </div>
                    <ul className="space-y-2">
                      {project.impact.map((imp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full mt-4 flex items-center justify-between py-2 px-3 rounded bg-slate-900 hover:bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-700 hover:border-cyan-500/40 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Architecture Detail' : 'Inspect Architectural Details'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                </div>

                {/* Expandable Architectural Details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Topology Summary */}
                      <div className="bg-[#050811] rounded-xl p-4 border border-slate-800">
                        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                          Network Topology & Link Design
                        </div>
                        <p className="text-xs text-slate-300 font-mono leading-relaxed">
                          {project.topologySummary}
                        </p>
                      </div>

                      {/* Technical Highlights */}
                      <div className="bg-[#050811] rounded-xl p-4 border border-slate-800">
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                          Engineering Highlights
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {project.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-emerald-400">&bull;</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
