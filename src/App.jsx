import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveTopology from './components/InteractiveTopology';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InteractiveTerminal from './components/InteractiveTerminal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalCmd, setTerminalCmd] = useState('');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenTerminal = () => {
    setTerminalCmd('');
    setIsTerminalOpen(true);
  };

  const handleOpenTerminalWithCmd = (cmd) => {
    setTerminalCmd(cmd);
    setIsTerminalOpen(true);
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <Navbar 
        onOpenResume={handleOpenResume}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenTerminal={handleOpenTerminal}
          onOpenResume={handleOpenResume}
        />

        <InteractiveTopology 
          onOpenTerminalWithCmd={handleOpenTerminalWithCmd}
        />

        <SkillsSection />

        <EducationSection />

        <CertificationsSection />

        <ProjectsSection />

        <ExperienceSection />

        <ContactSection 
          onOpenResume={handleOpenResume}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTerminal={handleOpenTerminal}
        onOpenResume={handleOpenResume}
      />

      {/* Modals & Overlays */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        initialCommand={terminalCmd}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
