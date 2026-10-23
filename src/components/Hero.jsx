import React from 'react';
import { Network, Shield, Terminal, ArrowRight, Activity, Cpu, Server, CheckCircle2, Wrench, Laptop } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const { personal, metrics } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{personal.badge}</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-medium">{personal.location}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personal.name}</span>.
            </h1>

            <div className="text-lg sm:text-xl font-mono text-cyan-300 font-semibold">
              {personal.title}
            </div>

            {/* Subhead / Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Equipped with hands-on enterprise IT support experience from <strong className="text-white font-medium">NPD Ltd</strong>, a strong academic grounding from <strong className="text-white font-medium">AUCA</strong> and <strong className="text-white font-medium">IPRC Huye</strong>, and certified in <strong className="text-white font-medium">NET OPS 1</strong>. Specializing in hardware/software maintenance, network operations, printer setups, remote support via AnyDesk, and full-stack software development.
            </p>

            {/* Network spec pills */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-slate-300">
                <span className="text-cyan-400">Support:</span> Hardware & OS Maintenance
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-slate-300">
                <span className="text-cyan-400">Networking:</span> IP Config & Subnetting
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-slate-300">
                <span className="text-cyan-400">Remote:</span> AnyDesk & Server Room
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-slate-300">
                <span className="text-cyan-400">Dev:</span> React • Node.js • Java • Spring Boot
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold font-mono text-sm transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5"
              >
                <Laptop className="w-4 h-4 text-slate-950" />
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-mono text-sm transition-all"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>IT DIAGNOSTIC CLI</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-slate-300 hover:text-cyan-400 font-mono text-sm transition-colors"
              >
                <span>View Full CV</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Live IT Telemetry & Support Status Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-5 border border-cyan-500/25 relative shadow-2xl overflow-hidden group">
              {/* Top Bar of Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-slate-300 font-semibold">npd-it-support-hub.local</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* IT Stats Grid inside card */}
              <div className="grid grid-cols-2 gap-3 py-4 text-xs font-mono">
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400">PRIMARY ROLE</div>
                  <div className="text-cyan-400 font-bold mt-1 text-sm">IT Support Tech</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">NPD Ltd Experience</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400">NETWORK SUBNET</div>
                  <div className="text-emerald-400 font-bold mt-1 text-sm">192.168.1.0/24</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Static & DHCP Pools</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400">REMOTE PROTOCOL</div>
                  <div className="text-slate-200 font-bold mt-1 text-sm">AnyDesk / SSH</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Quick Incident Triage</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400">HARDWARE SLA</div>
                  <div className="text-emerald-400 font-bold mt-1 text-sm">99% Resolution</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">PC / Printer / OS</div>
                </div>
              </div>

              {/* Simulated Diagnostic Stream */}
              <div className="bg-[#050811] rounded-lg p-3 font-mono text-[11px] space-y-1 border border-slate-800/80 text-slate-300">
                <div className="text-slate-500 flex items-center justify-between">
                  <span># ipconfig /all & ping 192.168.1.1</span>
                  <span className="text-emerald-400">GATEWAY OK</span>
                </div>
                <div className="text-slate-400">IPv4 Address . . . . . : 192.168.1.105 (Assigned)</div>
                <div className="text-slate-400">Subnet Mask . . . . . . : 255.255.255.0</div>
                <div className="text-cyan-400">Reply from 192.168.1.1: bytes=32 time&lt;1ms TTL=64</div>
                <div className="text-slate-500 text-[10px] pt-1 border-t border-slate-800/60 flex justify-between">
                  <span>Printer Spooler: Running</span>
                  <span className="text-slate-400">Email Server: Synced</span>
                </div>
              </div>

              {/* Quick CLI invite */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Interactive IT diagnostic CLI ready</span>
                <button
                  onClick={onOpenTerminal}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold hover:underline flex items-center gap-1"
                >
                  Run commands &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Metrics Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all text-left group"
            >
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 group-hover:scale-105 transition-transform origin-left">
                {metric.value}
              </div>
              <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
