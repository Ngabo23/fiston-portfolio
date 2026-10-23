import React, { useState } from 'react';
import { Award, Network, CheckCircle2, Copy, Check, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CertificationsSection() {
  const { certifications } = portfolioData;
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (code, id) => {
    navigator.clipboard?.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'Network': return <Network className="w-6 h-6 text-cyan-400" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Training & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Technical Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Industry-recognized credentials in network operations, software development, and digital technology solutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => {
            const isCopied = copiedId === cert.id;

            return (
              <div
                key={cert.id}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400 transition-colors">
                        {getBadgeIcon(cert.badgeIcon)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                          {cert.issuer}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {cert.name}
                        </h3>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono whitespace-nowrap">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer with verification ID */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-[11px]">CREDENTIAL:</span>
                    <span className="text-slate-200 font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {cert.code}
                    </span>
                    <button
                      onClick={() => handleCopy(cert.code, cert.id)}
                      className="text-slate-400 hover:text-cyan-400 p-1"
                      title="Copy Credential Code"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="text-slate-400 text-[11px]">
                    {cert.date}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
