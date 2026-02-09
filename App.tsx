
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { CTASection } from './components/CTASection';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingChat } from './components/FloatingChat';

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <Skills />
        <Portfolio />
        <CTASection />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default App;
