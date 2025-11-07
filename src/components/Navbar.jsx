import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Mail, Youtube } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <Rocket className="h-5 w-5 text-cyan-300 transition-transform group-hover:-rotate-12" />
          <span className="text-sm font-semibold tracking-wide text-white">Om Donn</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://youtube.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white hover:bg-white/10"
          >
            <Youtube className="h-4 w-4 text-red-400" />
            YouTube
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/25"
          >
            <Mail className="h-4 w-4" />
            Hire Me
          </a>
        </div>
      </div>
      {/* Underline accent */}
      <motion.div
        layoutId="nav-underline"
        className="h-px w-full bg-gradient-to-r from-cyan-400/40 via-blue-400/40 to-indigo-400/40"
      />
    </div>
  );
};

export default Navbar;
