import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Certifications } from '@/components/sections/Certifications';
import { CodingProfiles } from '@/components/sections/CodingProfiles';
import { Hackathons } from '@/components/sections/Hackathons';
import { Contact } from '@/components/sections/Contact';
import { Particles } from '@/components/ui/Particles';
import { GlowCursor } from '@/components/ui/GlowCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { BackToTop } from '@/components/ui/BackToTop';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <ScrollProgress />
      <GlowCursor />
      <Particles />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
