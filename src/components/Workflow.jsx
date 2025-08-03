import React from 'react';
import { steps } from '../utils/stepData.js';
import { motion } from 'framer-motion';

export default function Workflow() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map(step => (
        <motion.div
          key={step.id}
          className="workflow-step bg-gray-800 p-6 rounded-lg flex flex-col items-center"
          whileHover={{ scale: 1.05, backgroundColor: '#1F2937' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={step.icon} alt={step.label} className="h-16 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{step.label}</h3>
          <p className="text-gray-400 text-center">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
