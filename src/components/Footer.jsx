import React from 'react';
import { Terminal, Activity, ArrowUp, Github, Linkedin, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800 text-slate-400 font-mono text-xs">
      
      {/* Real-time Ticker Bar */}
      <div className="border-b border-slate-800/80 bg-[#070b16] py-2.5 px-4 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap text-[11px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              IT_SUPPORT_HUB: OPERATIONAL
            </span>
            <span className="text-slate-600">|</span>
            <span>LAN SUBNET: <span className="text-cyan-400 font-semibold">192.168.1.0/24</span></span>
            <span className="text-slate-600">|</span>
            <span>GATEWAY: <span className="text-emerald-400 font-semibold">192.168.1.1 OK</span></span>
            <span className="text-slate-600">|</span>
            <span>ANYDESK REMOTE: <span className="text-cyan-400 font-semibold">READY</span></span>
            <span className="text-slate-600">|</span>
            <span>PRINT SPOOLER: <span className="text-emerald-400 font-semibold">0 QUEUE DROPS</span></span>
            <span className="text-slate-600">|</span>
            <span>LOCATION: <span className="text-slate-300 font-semibold">KIGALI, RWANDA</span></span>
          </div>

          <div className="text-slate-500 hidden md:block">
            AUCA • IPRC Huye • NPD Ltd
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-white font-bold text-sm tracking-tight">{personal.name}</span>
              <span className="text-slate-600">//</span>
              <span className="text-cyan-400 text-xs">{personal.title}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-sans">
              IT Support Technician and IT Graduate from Kigali, Rwanda. Experienced in end-user support, hardware diagnostics, network maintenance at NPD Ltd, and modern web application development.
            </p>
          </div>

          {/* Quick Shortcuts */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Fast Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#topology" className="hover:text-cyan-400 transition-colors">Infrastructure Lab</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education (AUCA / IPRC)</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications (NET OPS 1)</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience (NPD Ltd)</a></li>
            </ul>
          </div>

          {/* NetOps & Support Tools */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Diagnostic Tools
            </div>
            <div className="space-y-2 text-xs">
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Launch IT Terminal</span>
              </button>
              <div>
                <button
                  onClick={onOpenResume}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Download Curriculum Vitae (CV)
                </button>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToTop}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors ml-auto"
                  title="Scroll to Top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} {personal.name} &bull; {personal.location}.
          </div>
          <div className="flex items-center gap-1.5">
            <span>IT Support &bull; Networking &bull; Software Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
