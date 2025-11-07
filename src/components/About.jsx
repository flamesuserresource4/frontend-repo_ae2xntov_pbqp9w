import React from 'react';
import { motion } from 'framer-motion';
import { User, Star, Cpu } from 'lucide-react';

const stats = [
  { label: 'Years Creating', value: '6+' },
  { label: 'Projects Released', value: '80+' },
  { label: 'Students Taught', value: '1.2k+' },
];

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              About Om Donn
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-white/70"
            >
              I’m a GTA SAMP content creator and mod educator, blending cinematic storytelling with technical depth. I also work as a full‑stack developer, bringing production‑grade tooling, performance, and polish to every project I touch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-xs uppercase tracking-wide text-white/60">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-white/5 p-3">
                <Cpu className="h-6 w-6 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Teaching Mods, Building Tools</h3>
                <p className="mt-1 text-sm text-white/70">
                  From CLEO scripts to server‑side plugins, I teach setups that scale and create tools that push SAMP forward.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">CLEO & Lua scripting</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">SA‑MP Pawn</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">Optimized mapping & FX</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">React, Node, FastAPI</div>
            </div>

            <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_50%)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
