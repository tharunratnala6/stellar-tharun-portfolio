import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Lazy load non-critical components to reduce initial bundle size
const FloatingElements = lazy(() => import('../components/FloatingElements'));
const ScrollProgress = lazy(() => import('../components/ScrollProgress'));
const About = lazy(() => import('../components/About'));
const Education = lazy(() => import('../components/Education'));
const Projects = lazy(() => import('../components/Projects'));
const Experience = lazy(() => import('../components/Experience'));
const Skills = lazy(() => import('../components/Skills'));
const Certifications = lazy(() => import('../components/Certifications'));
const Contact = lazy(() => import('../components/Contact'));
const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.3),rgba(0,0,0,0))]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.2),rgba(0,0,0,0))]" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={null}>
          <FloatingElements />
          <ScrollProgress />
          <About />
          <Education />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
