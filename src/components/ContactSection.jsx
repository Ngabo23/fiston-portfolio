import React, { useState } from 'react';
import { 
  Mail, Send, Linkedin, Github, MapPin, CheckCircle, 
  Key, ShieldCheck, Terminal, Copy, Check, MessageSquare 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onOpenResume }) {
  const { personal } = portfolioData;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'IT Support Technician / Desktop Support Role',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep state or reset
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16] bg-dot-matrix border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inbound Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect With Fiston Ngabonziza
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Open for IT Support Technician roles, network operations, systems administration, and software development opportunities in Kigali and remotely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Endpoints */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Direct Contact Endpoints
              </div>

              <div className="space-y-3 font-mono text-xs">
                <a 
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="truncate">{personal.email}</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personal.location}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{personal.status}</span>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-2 flex gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 font-mono text-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 font-mono text-xs transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Overview Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                PROFESSIONAL HIGHLIGHTS
              </div>
              <ul className="space-y-1.5 text-slate-300 text-xs">
                <li>&bull; BSc in Information Technology (AUCA, 2023–2026)</li>
                <li>&bull; Advanced Diploma (A1) in ICT (IPRC Huye, 2018–2021)</li>
                <li>&bull; Certificate (A2) in Computer Science (St. Peter, 2015–2017)</li>
                <li>&bull; NET OPS 1 & GIZ/RISA Certified</li>
                <li>&bull; Hands-on IT Support Experience at NPD Ltd</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/25 relative shadow-2xl">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Transmission Received!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Fiston Ngabonziza will review your message and reply promptly to your email.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', category: 'IT Support Technician / Desktop Support Role', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-300 text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs">
                    <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-4 h-4" />
                      INBOUND_MESSAGE_PORTAL
                    </span>
                    <span className="text-slate-500 text-[11px]">KIGALI, RWANDA</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring Manager / Tech Lead"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 text-xs text-white placeholder-slate-500 font-mono outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 text-xs text-white placeholder-slate-500 font-mono outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Opportunity / Discussion Topic
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 focus:border-cyan-400 text-xs text-white font-mono outline-none"
                    >
                      <option>IT Support Technician / Desktop Support Role</option>
                      <option>Systems Administration & Network Maintenance</option>
                      <option>Full-Stack Software Development (React / Node / Java)</option>
                      <option>General Professional Inquiry / Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your opportunity or technical requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 text-xs text-white placeholder-slate-500 font-mono outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE TO FISTON</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
