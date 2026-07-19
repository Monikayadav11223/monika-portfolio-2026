import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <div className="mb-12 md:mb-16 flex flex-col items-center justify-center text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20"
      >
        {title}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-white"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "60px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400"
      />
    </div>
  );
};
