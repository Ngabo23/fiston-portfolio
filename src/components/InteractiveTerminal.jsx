import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const INITIAL_WELCOME = [
  'Fiston Ngabonziza - IT Support & Network Diagnostic Console [v2.4]',
  'Environment: Ubuntu Linux / Windows 11 Support Shell (Kigali, Rwanda)',
  'Type "help" to display available diagnostic commands or tap the shortcut chips below.',
  '-----------------------------------------------------------------------------------'
];

export default function InteractiveTerminal({ isOpen, onClose, initialCommand }) {
  const [history, setHistory] = useState([
    ...INITIAL_WELCOME,
    'fiston@it-support:~$ whoami',
    'Fiston Ngabonziza | IT Support Technician & IT Graduate',
    'Education: BSc in IT (AUCA) • Advanced Diploma A1 in ICT (IPRC Huye) • A2 in CS',
    'Enterprise Experience: NPD Ltd (IT Support, Hardware, Networking, AnyDesk)',
    'Certifications: NET OPS 1 Certified • GIZ & RISA Code & Design Camp',
    ' '
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (initialCommand) {
      executeCommand(initialCommand);
    }
  }, [initialCommand]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const tokens = raw.toLowerCase().split(/\s+/);
    const main = tokens[0];

    const newHistory = [...history, `fiston@it-support:~$ ${raw}`];

    if (raw.toLowerCase() === 'clear') {
      setHistory(['Screen buffer reset. Type "help" for available commands.', ' ']);
      setInputVal('');
      return;
    }

    if (raw.toLowerCase() === 'help') {
      newHistory.push(
        'Available Diagnostic, System & Career Commands:',
        '  whoami                  - Display Fiston Ngabonziza profile & credentials',
        '  show education          - Display academic qualifications (AUCA, IPRC Huye, St. Peter)',
        '  show certs              - Display certifications (NET OPS 1, GIZ & RISA Camp)',
        '  show skills             - List IT support, networking, programming & DB skills',
        '  show projects           - View summary of Chatbot, Clearance & Attendance systems',
        '  show tickets            - View sample NPD Ltd IT support tickets and resolutions',
        '  ipconfig                - Show current network interface and IP configuration',
        '  ping <ip>               - Test network connectivity (e.g. ping 192.168.1.1, ping 8.8.8.8)',
        '  traceroute <target>     - Trace route hops to an IP or domain',
        '  contact                 - Display verified email, LinkedIn and GitHub endpoints',
        '  clear                   - Clear the terminal screen buffer'
      );
    } else if (raw.toLowerCase() === 'whoami') {
      newHistory.push(
        'User: Fiston Ngabonziza',
        'Professional Title: IT Support Technician | IT Graduate',
        'Location: Kigali, Rwanda',
        'Key Expertise: Hardware/Software Maintenance, Network Operations, AnyDesk Support, React, Node.js, Java, Spring Boot',
        'Status: Available for IT Support, Network & Systems Roles'
      );
    } else if (raw.toLowerCase() === 'show education' || raw.toLowerCase() === 'education') {
      newHistory.push(
        'Verified Academic Qualifications:',
        '  [1] Bachelor of Science in Information Technology',
        '      Institution: Adventist University of Central Africa (AUCA) | 2023 – 2026',
        '      Focus: Enterprise Information Systems, AI Help Desk Chatbot Project',
        '  [2] Advanced Diploma (A1) in Information & Communication Technology (ICT)',
        '      Institution: IPRC Huye | 2018 – 2021',
        '      Focus: Practical Hardware Maintenance, LAN Networking, Systems Administration',
        '  [3] Certificate of Secondary Education (A2) in Computer Science',
        '      Institution: St. Peter College of Shyogwe | 2015 – 2017'
      );
    } else if (raw.toLowerCase() === 'show certs' || raw.toLowerCase() === 'certs') {
      newHistory.push(
        'Professional Certifications & Training:',
        '  • NET OPS 1 Certificate - Network Operations Program (IP Subnetting, Routing, Cabling)',
        '  • Code and Design Camp Certificate (2019) - Organized by GIZ & RISA (Rwanda Information Society Authority)'
      );
    } else if (raw.toLowerCase() === 'show skills' || raw.toLowerCase() === 'skills') {
      newHistory.push(
        'Technical Capabilities Matrix:',
        '  • IT Support: Hardware/Software troubleshooting, printer maintenance, remote support (AnyDesk), OS install (Win/Linux), server room ops, email setup',
        '  • Networking: IP configuration, subnetting, network maintenance, CAT6 cabling, Linux administration',
        '  • Programming: React.js, Node.js, Java, Spring Boot, PHP, C, HTML5, CSS3, JavaScript',
        '  • Databases & Tools: PostgreSQL, MySQL, Git, GitHub (Ngabo23), VS Code'
      );
    } else if (raw.toLowerCase() === 'show projects' || raw.toLowerCase() === 'projects') {
      newHistory.push(
        'Major Enterprise & Development Projects:',
        '  1. AI-Powered IT Help Desk Chatbot (NPD Ltd Concept) - Node.js, React, NLP, Ticketing',
        '  2. Digital Student Clearance System - React, Node.js, PostgreSQL, Workflow Automation',
        '  3. Labour Attendance & Wage Management System - Java, Spring Boot, MySQL',
        '  4. Enterprise IT Support & Operations - 100+ PCs, Printers & AnyDesk at NPD Ltd'
      );
    } else if (raw.toLowerCase() === 'show tickets') {
      newHistory.push(
        'Recent IT Support Log (NPD Ltd Enterprise Experience):',
        '  [TICKET #1042] HP LaserJet Pro - Spooler queue hung -> Cleared spooler, restarted service [RESOLVED]',
        '  [TICKET #1043] User Workstation - Network unreachable -> Re-assigned static IP & patched CAT6 [RESOLVED]',
        '  [TICKET #1044] Remote Site Employee - ERP login failing -> AnyDesk remote session & credentials reset [RESOLVED]',
        '  [TICKET #1045] Finance Dept - Dell OptiPlex slow boot -> Upgraded to SSD & clean Windows 11 install [RESOLVED]'
      );
    } else if (raw.toLowerCase() === 'ipconfig' || raw.toLowerCase() === 'ifconfig') {
      newHistory.push(
        'Windows IP Configuration / Linux ifconfig:',
        ' ',
        'Ethernet adapter Local Area Connection:',
        '   Connection-specific DNS Suffix  . : npd.local',
        '   IPv4 Address. . . . . . . . . . . : 192.168.1.105',
        '   Subnet Mask . . . . . . . . . . . : 255.255.255.0',
        '   Default Gateway . . . . . . . . . : 192.168.1.1',
        '   DNS Servers . . . . . . . . . . . : 192.168.1.10, 8.8.8.8',
        '   DHCP Enabled. . . . . . . . . . . : Yes',
        '   Link Speed. . . . . . . . . . . . : 1000/1000 (Mbps) Gigabit'
      );
    } else if (main === 'ping') {
      const target = tokens[1] || '192.168.1.1';
      newHistory.push(
        `Pinging ${target} with 32 bytes of data:`,
        `Reply from ${target}: bytes=32 time<1ms TTL=64`,
        `Reply from ${target}: bytes=32 time<1ms TTL=64`,
        `Reply from ${target}: bytes=32 time<1ms TTL=64`,
        `Reply from ${target}: bytes=32 time<1ms TTL=64`,
        `Ping statistics for ${target}:`,
        `    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),`,
        `Approximate round trip times in milli-seconds:`,
        `    Minimum = 0ms, Maximum = 1ms, Average = 0ms`
      );
    } else if (main === 'traceroute') {
      const target = tokens[1] || '8.8.8.8';
      newHistory.push(
        `Tracing route to ${target} over a maximum of 30 hops:`,
        `  1    <1 ms    <1 ms    <1 ms  192.168.1.1 (npd-core-gw.local)`,
        `  2     2 ms     2 ms     2 ms  197.243.10.1 (kigali-isp-fiber.rw)`,
        `  3    14 ms    13 ms    14 ms  carrier-backbone.kgl.rw`,
        `  4    18 ms    17 ms    18 ms  8.8.8.8 (dns.google)`,
        `Trace complete. Path verified within latency SLA.`
      );
    } else if (raw.toLowerCase() === 'contact') {
      newHistory.push(
        'Direct Connection Endpoints for Fiston Ngabonziza:',
        '  • Email:    ngabofiston23@gmail.com',
        '  • LinkedIn: linkedin.com/in/fiston-ngabonziza-9a709b1ab',
        '  • GitHub:   github.com/Ngabo23',
        '  • Location: Kigali, Rwanda',
        '  • Open for: IT Support Technician, Network Support & Systems Roles'
      );
    } else {
      newHistory.push(
        `% Command not recognized: "${raw}"`,
        `Type "help" to see available commands.`
      );
    }

    newHistory.push(' ');
    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const chips = [
    'whoami',
    'show education',
    'show certs',
    'show skills',
    'show tickets',
    'ipconfig',
    'ping 192.168.1.1',
    'contact'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full ${isFullScreen ? 'h-full max-w-none' : 'max-w-4xl h-[620px]'} flex flex-col rounded-xl bg-[#060a12] border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden transition-all duration-200`}>
        
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a101f] border-b border-slate-800 text-xs font-mono select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button 
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors"
                title="Close Terminal"
              />
              <button 
                onClick={() => setHistory(['Screen buffer reset. Type "help".', ' '])}
                className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
                title="Clear"
              />
              <button 
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
                title="Toggle Fullscreen"
              />
            </div>
            <span className="ml-3 text-cyan-400 font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5" />
              fiston@it-support:~$ [KIGALI-HUB]
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-[11px] hidden sm:inline text-emerald-400">NET OPS 1 VERIFIED</span>
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1 hover:text-white"
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-rose-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div className="px-4 py-2 bg-[#080d1a] border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span className="text-slate-500 flex items-center gap-1 flex-shrink-0">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Shortcuts:</span>
          </span>
          {chips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => executeCommand(chip)}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/50 flex-shrink-0 transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Content Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 font-mono text-xs text-slate-200 overflow-y-auto space-y-1 selection:bg-cyan-600 selection:text-white"
        >
          {history.map((line, idx) => (
            <div 
              key={idx} 
              className={`leading-relaxed whitespace-pre-wrap ${
                line.startsWith('fiston@it-support:~$') 
                  ? 'text-cyan-300 font-bold' 
                  : line.startsWith('% Command') 
                  ? 'text-rose-400'
                  : line.includes('RESOLVED') || line.includes('Reply from') || line.includes('Verified')
                  ? 'text-emerald-400'
                  : 'text-slate-300'
              }`}
            >
              {line}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1 text-cyan-300 font-bold">
            <span className="select-none">fiston@it-support:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none font-mono text-xs caret-cyan-400"
              placeholder="type command (e.g. 'help', 'show education', 'show tickets')..."
              autoFocus
            />
          </div>
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 bg-[#0a101f] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Press [Enter] to execute</span>
          <span className="text-cyan-400">Type "contact" to reach Fiston Ngabonziza</span>
        </div>

      </div>
    </div>
  );
}
