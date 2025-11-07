import React from 'react';
import { motion } from 'framer-motion';
import { Film, Code, PenTool } from 'lucide-react';

const items = [
  {
    icon: Film,
    title: 'Cinematic Roleplay Series',
    desc: 'Multi-episode storytelling inside SAMP with custom camera paths and sound design.',
    tag: 'Storytelling'
  },
  {
    icon: Code,
    title: 'SAMP Mod Lessons',
    desc: 'Clear tutorials on CLEO, SA-MP scripting, and optimization for smooth servers.',
    tag: 'Education'
  },
  {
    icon: PenTool,
    title: 'Custom Map & FX',
    desc: 'From neon city vibes to gritty scenes, crafted with tools and precision.',
    tag: 'Design'
  }
];

const Showcase = () => {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Work</h2>
            <p className="mt-2 text-white/60">A mix of cinematic projects, mod education, and technical builds.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-3">
                  <it.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
              <span className="mt-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-200">
                {it.tag}
              </span>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-950/60" />
    </section>
  );
};

export default Showcase;
