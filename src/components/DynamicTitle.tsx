'use client';

import { motion } from 'framer-motion';

export default function DynamicTitle() {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-baseline justify-center gap-2 flex-wrap">
          <span className="text-5xl md:text-6xl font-bold text-charcoal-600">EVY</span>
          <span className="text-4xl md:text-5xl font-bold text-primary-600">GROWTH</span>
        </div>
        <motion.p
          className="text-xl md:text-2xl text-primary-600 font-medium mt-4 tracking-wide uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Assessoria em marketing digital estratégico
        </motion.p>
      </div>
    </div>
  );
}
