import React from 'react';
import { X, Printer, Download, CheckCircle, GraduationCap, Award, Mail, Phone, MapPin, Laptop, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, certifications, experience, skillCategories, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
================================================================================
${personal.name.toUpperCase()}
${personal.title.toUpperCase()}
Location: ${personal.location} | Email: ${personal.email}
LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}
================================================================================

PROFESSIONAL SUMMARY:
${personal.summary}

EDUCATION & ACADEMIC QUALIFICATIONS:
${education.map(e => `• ${e.degree.toUpperCase()}
  Institution: ${e.institution} (${e.period}) - ${e.location}
  Focus: ${e.description}
  Highlights:
${e.highlights.map(h => `    - ${h}`).join('\n')}`).join('\n\n')}

CERTIFICATIONS & PROFESSIONAL TRAINING:
${certifications.map(c => `• ${c.name} (${c.issuer}, ${c.date}) - Code: ${c.code}
  ${c.description}`).join('\n\n')}

PROFESSIONAL EXPERIENCE:
${experience.map(e => `• ${e.role.toUpperCase()} @ ${e.company}
  Period: ${e.period} | Location: ${e.location}
  Responsibilities:
${e.responsibilities.map(r => `    - ${r}`).join('\n')}`).join('\n\n')}

FEATURED TECHNICAL PROJECTS:
${projects.map(p => `• ${p.title.toUpperCase()} (${p.timeframe})
  Role: ${p.role} | Tech: ${p.technologies.join(', ')}
  Summary: ${p.summary}
  Impact:
${p.impact.map(i => `    - ${i}`).join('\n')}`).join('\n\n')}

TECHNICAL SKILLS MATRIX:
${skillCategories.map(cat => `${cat.name.toUpperCase()}:\n${cat.skills.map(s => `  - ${s.name}: ${s.desc}`).join('\n')}`).join('\n\n')}
================================================================================
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Fiston_Ngabonziza_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#090d16] border border-cyan-500/40 shadow-2xl overflow-hidden">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>CURRICULUM VITAE (CV) // FISTON NGABONZIZA</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-cyan-400 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Raw TXT</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090d16] text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {personal.name}
                </h1>
                <p className="text-cyan-400 font-mono font-semibold text-sm mt-1">
                  {personal.title} &bull; {personal.badge}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 space-y-1">
                <div>Email: {personal.email}</div>
                <div>Location: {personal.location}</div>
                <div>GitHub: {personal.github}</div>
                <div>LinkedIn: {personal.linkedin}</div>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-4 leading-relaxed max-w-3xl">
              {personal.summary}
            </p>
          </div>

          {/* Education Section in CV */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Qualifications</span>
            </h2>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.id} className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white">
                    <span>{e.degree}</span>
                    <span className="text-cyan-400 font-mono text-[11px] font-normal">{e.period} | {e.location}</span>
                  </div>
                  <div className="text-slate-300 font-semibold mt-0.5">{e.institution}</div>
                  <p className="text-slate-400 mt-1 text-[11px]">{e.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Row */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications & Training</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c.id} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                  <div className="font-bold text-white">{c.name}</div>
                  <div className="text-slate-400 font-mono text-[11px] mt-0.5">
                    {c.issuer} &bull; {c.date}
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.role}</span>
                      <span className="text-cyan-400 font-mono ml-2">@ {exp.company}</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-300">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Laptop className="w-4 h-4" />
              <span>Core Systems & Engineering Projects</span>
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                  <div className="flex justify-between font-bold text-white">
                    <span>{proj.title}</span>
                    <span className="text-cyan-400 font-mono text-[11px] font-normal">{proj.timeframe}</span>
                  </div>
                  <p className="text-slate-300 mt-1">{proj.summary}</p>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">
                    Tech: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
              Technical Competencies Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="font-mono text-cyan-300 font-semibold mb-1">{cat.name}</div>
                  <div className="text-slate-400 text-[11px]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
