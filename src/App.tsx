import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const activeSection = useScrollSpy();

  return (
    <div className="font-body text-charcoal bg-light-gray">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;