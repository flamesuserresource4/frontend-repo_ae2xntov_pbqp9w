import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl sm:text-3xl font-bold text-white"
          >
            Let’s collaborate
          </motion.h2>
          <p className="mt-2 text-center text-white/70">
            For commissions, tutorials, or dev work—drop a message.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <textarea
              required
              placeholder="Tell me about your idea..."
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:opacity-90"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
            {sent && (
              <div className="mt-2 inline-flex items-center gap-2 text-sm text-cyan-200">
                <Mail className="h-4 w-4" /> Message sent (demo)
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/40 via-blue-400/40 to-indigo-400/40" />
    </section>
  );
};

export default Contact;
