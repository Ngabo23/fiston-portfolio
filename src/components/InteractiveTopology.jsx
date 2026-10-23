import React, { useState, useEffect } from 'react';
import { 
  Network, Shield, Cloud, Server, Cpu, Globe, CheckCircle, 
  AlertTriangle, RefreshCw, Activity, Zap, Play, Pause, Terminal, Info, Printer, Laptop, Wrench
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function InteractiveTopology({ onOpenTerminalWithCmd }) {
  const { topologyNodes } = portfolioData;
  const [selectedNode, setSelectedNode] = useState(topologyNodes[1]); // Default to core switch
  const [packetSimulation, setPacketSimulation] = useState(true);
  const [incidentSimulated, setIncidentSimulated] = useState(false);

  const toggleIncident = () => {
    setIncidentSimulated(prev => !prev);
  };

  const getNodeIcon = (type) => {
    switch (type) {
      case 'cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'router': return <Network className="w-5 h-5 text-cyan-400" />;
      case 'spine': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'firewall': return <Shield className="w-5 h-5 text-amber-400" />;
      case 'lan': return <Laptop className="w-5 h-5 text-indigo-400" />;
      default: return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="topology" className="py-24 relative bg-[#070b14] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Enterprise IT Infrastructure Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Enterprise Network & IT Environment
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Modeled after the enterprise office network and server room infrastructure supported at NPD Ltd. Click any node to inspect device configs, IP addressing, and operational status.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setPacketSimulation(!packetSimulation)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono border transition-all ${
                packetSimulation 
                  ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {packetSimulation ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{packetSimulation ? 'Flow Active' : 'Pause Flow'}</span>
            </button>

            <button
              onClick={toggleIncident}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono border transition-all ${
                incidentSimulated 
                  ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-500/50'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>{incidentSimulated ? 'Printer Offline (Resolved via Spooler Restart)' : 'Simulate Printer Jam & Spooler Incident'}</span>
            </button>
          </div>
        </div>

        {/* Incident Alert Banner */}
        {incidentSimulated && (
          <div className="mb-6 p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs font-mono flex items-center justify-between animate-pulse">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <span className="font-bold text-amber-300">INCIDENT DIAGNOSED & RESOLVED: </span>
                <span>Network Printer (192.168.1.200) spooler queue stalled. Restarted Print Spooler service, cleared corrupted EMF buffer, and verified physical paper tray sensor. Service restored in &lt;3 minutes.</span>
              </div>
            </div>
            <button
              onClick={toggleIncident}
              className="px-2.5 py-1 bg-amber-900/60 hover:bg-amber-800 text-amber-200 rounded border border-amber-600 text-[11px] whitespace-nowrap ml-3"
            >
              Clear Ticket
            </button>
          </div>
        )}

        {/* Main Diagram Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Grid Representation */}
          <div className="lg:col-span-8 bg-[#0a0f1d] rounded-2xl border border-cyan-500/20 p-6 relative overflow-hidden shadow-2xl">
            
            {/* Top Bar inside diagram */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-semibold">NPD_ENTERPRISE_LAN // 192.168.1.0/24</span>
                <span className="text-slate-600">|</span>
                <span>6 Infrastructure Segments Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-emerald-400">Health: 100% Operational</span>
              </div>
            </div>

            {/* Interactive Grid Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              {topologyNodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const isFaulted = incidentSimulated && node.id === 'printers-lan';

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`cursor-pointer rounded-xl p-4 transition-all relative border ${
                      isSelected 
                        ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/50' 
                        : isFaulted
                        ? 'bg-amber-950/20 border-amber-500/60'
                        : 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80'
                    }`}
                  >
                    {/* Header of node */}
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                        {getNodeIcon(node.type)}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px]">
                        <span className={`w-2 h-2 rounded-full ${isFaulted ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}></span>
                        <span className={isFaulted ? 'text-amber-400 font-bold' : 'text-emerald-400'}>
                          {isFaulted ? 'INCIDENT' : 'HEALTHY'}
                        </span>
                      </div>
                    </div>

                    {/* Node Labels */}
                    <div className="mt-3">
                      <div className="text-[11px] font-mono text-cyan-400/90 uppercase tracking-wide">
                        {node.category}
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5 truncate">
                        {node.name}
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-1 truncate">
                        {node.ip}
                      </div>
                    </div>

                    {/* Micro specs */}
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{node.speed}</span>
                      <span className="text-slate-300 font-medium">MTU {node.mtu}</span>
                    </div>

                    {/* Packet simulation dots */}
                    {packetSimulation && !isFaulted && (
                      <div className="absolute top-2 right-2 flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Interconnect Topology Schema Visual */}
            <div className="mt-6 pt-5 border-t border-slate-800 font-mono text-xs text-slate-400">
              <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-2">Network Segment Pathways & Protocols:</div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  ISP &harr; Switch: <span className="text-cyan-400 font-medium">Static IP / Gateway</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  Switch &harr; Server Room: <span className="text-emerald-400 font-medium">Gigabit LAN / SMB</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  Workstations &harr; Support: <span className="text-amber-400 font-medium">AnyDesk / Remote</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  Printers &harr; LAN: <span className="text-cyan-400 font-medium">Static IP Pool</span>
                </span>
              </div>
            </div>

          </div>

          {/* Node Inspector Panel (Right Column) */}
          <div className="lg:col-span-4 bg-[#0a0f1d] rounded-2xl border border-cyan-500/30 p-5 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
              <span className="text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                Equipment Inspector
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 text-[10px]">
                NPD MONITORED
              </span>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">{selectedNode.category}</span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                  {getNodeIcon(selectedNode.type)}
                  <span>{selectedNode.name}</span>
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {selectedNode.details}
                </p>
              </div>

              {/* Specs Breakdown */}
              <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 space-y-2 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-500">Hardware / Model</span>
                  <span className="text-slate-200 font-semibold text-right">{selectedNode.model}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-500">OS / Platform</span>
                  <span className="text-cyan-400 text-right">{selectedNode.os}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-500">IP Configuration</span>
                  <span className="text-slate-200 text-right">{selectedNode.ip}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-500">Interface Speed</span>
                  <span className="text-slate-200 text-right">{selectedNode.speed}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-500">MTU Size</span>
                  <span className="text-emerald-400 text-right">{selectedNode.mtu} Bytes</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">System Load</span>
                  <span className="text-slate-300 text-right">{selectedNode.cpu}</span>
                </div>
              </div>

              {/* Protocols */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Protocols & Services
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {selectedNode.protocols.map((proto, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 text-[11px]"
                    >
                      {proto}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Summary */}
              <div className="bg-[#050811] rounded-lg p-3 border border-slate-800 text-xs font-mono">
                <div className="text-slate-500 text-[11px]">ACTIVE TELEMETRY & STATUS</div>
                <div className="text-slate-200 font-semibold mt-1">
                  {selectedNode.activeRoutes}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 flex justify-between">
                  <span>Packet Drop: 0.00%</span>
                  <span className="text-emerald-400">Response: &lt;1ms</span>
                </div>
              </div>

              {/* CLI Action Button */}
              <button
                onClick={() => onOpenTerminalWithCmd && onOpenTerminalWithCmd(`ping ${selectedNode.ip.split(' ')[0].split('/')[0]}`)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-mono text-xs transition-all shadow-sm"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Test IP via IT Diagnostic CLI &rarr;</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
