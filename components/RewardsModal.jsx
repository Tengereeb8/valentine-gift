"use client";

import { motion } from "framer-motion";
import { Gift, Utensils, Ticket, Music } from "lucide-react";

const rewards = [
  { id: 1, title: "Movie Night", icon: <Ticket className="w-8 h-8 text-gold-accent" />, desc: "One movie of your choice" },
  { id: 2, title: "Dinner Date", icon: <Utensils className="w-8 h-8 text-gold-accent" />, desc: "Chef's special dinner" },
  { id: 3, title: "Playlist Control", icon: <Music className="w-8 h-8 text-gold-accent" />, desc: "DJ for the road trip" },
  { id: 4, title: "Surprise Gift", icon: <Gift className="w-8 h-8 text-gold-accent" />, desc: "Something special..." },
];

export default function RewardsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-burgundy border-2 border-gold-accent rounded-lg p-6 max-w-2xl w-full text-center relative shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-cream hover:text-gold-accent">✕</button>
        
        <h2 className="text-3xl font-cursive text-gold-accent mb-2">Surprise!</h2>
        <p className="text-cream mb-6">You've Unlocked Your Love Rewards</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((r) => (
            <div key={r.id} className="bg-black/40 p-4 rounded-lg flex items-center space-x-4 hover:bg-black/60 transition-colors border border-white/10">
              <div className="bg-white/10 p-2 rounded-full">{r.icon}</div>
              <div className="text-left">
                <h3 className="text-gold-accent font-bold">{r.title}</h3>
                <p className="text-xs text-gray-300">{r.desc}</p>
              </div>
              <button className="ml-auto bg-gold-accent text-burgundy text-xs font-bold px-3 py-1 rounded hover:bg-yellow-500">
                Select
              </button>
            </div>
          ))}
        </div>

        <button onClick={onClose} className="mt-8 bg-red-accent hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg">
          Claim Your Gift Book
        </button>
      </motion.div>
    </div>
  );
}
