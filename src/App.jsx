import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950 text-white">
      {/* Subtle background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Contact />

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Om Donn — Built with modern web tech. Stay playful.
        </div>
      </footer>
    </div>
  );
}

export default App;
