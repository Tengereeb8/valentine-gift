"use client";

import { motion } from "framer-motion";
import Flower from "./Flower";

export default function RewardsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-burgundy border-2 border-gold-accent rounded-lg p-8 max-w-xl w-full text-center relative shadow-2xl overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-cream hover:text-gold-accent z-30 text-xl font-bold">✕</button>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-gold-accent/0 via-gold-accent to-gold-accent/0 opacity-50" />
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl font-cursive text-gold-accent mb-2">A Special Bloom</h2>
          <p className="text-cream text-lg mb-8 italic">Where love grows, life blossoms...</p>
        </motion.div>

        <div className="flex justify-center items-center py-4">
           <Flower />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="mt-8 space-y-4"
        >
          <div className="text-3xl font-cursive text-gold-accent">
            Happy Valentine's Day! 🌹
          </div>
          <p className="text-cream/80 max-w-sm mx-auto leading-relaxed">
            I saved this rose just for you. Like this flower, my love for you grows more beautiful every day.
          </p>
          
          <button 
            onClick={onClose} 
            className="mt-6 bg-red-accent hover:bg-red-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            With All My Love
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
