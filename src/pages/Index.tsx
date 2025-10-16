import React, { Suspense, lazy } from 'react';
import FloatingElements from '../components/FloatingElements';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';

// Lazy load heavy components to reduce initial bundle size
const Hero = lazy(() => import('../components/Hero'));
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
      
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Hero />
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
