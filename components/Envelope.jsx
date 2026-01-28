"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1500); // Wait for animation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-burgundy p-4">
      <div className="relative w-80 h-60 md:w-96 md:h-72 bg-cream shadow-2xl rounded-lg flex items-center justify-center cursor-pointer group" onClick={handleOpen}>
        
        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-cream origin-top z-20 border-b-2 border-gray-200"
          style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
          animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Wax Seal */}
        <motion.div 
          className="absolute z-30 top-[40%] bg-red-accent w-12 h-12 rounded-full flex items-center justify-center shadow-md border-2 border-red-700"
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
           <span className="text-cream text-lg font-bold">♥</span>
        </motion.div>

        {/* Letter Preview (Inside) */}
        <motion.div 
            className="absolute top-2 w-[90%] h-[90%] bg-white p-4 shadow-inner z-10 flex flex-col items-center justify-center text-center"
            initial={{ y: 0 }}
            animate={isOpen ? { y: -50 } : { y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
        >
             <h2 className="font-cursive text-2xl text-burgundy">To My Forever Valentine</h2>
        </motion.div>

        {/* Main Text Below */}
        <div className="absolute -bottom-24 text-center">
            <h1 className="text-3xl font-cursive text-cream mb-4">A special message is waiting for you...</h1>
            <button 
                onClick={(e) => { e.stopPropagation(); handleOpen(); }}
                className="bg-red-accent hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
                Open Your Heart
            </button>
            <p className="mt-4 text-xs text-stone-300">Every moment with you is a gift</p>
        </div>
      </div>
    </div>
  );
}
