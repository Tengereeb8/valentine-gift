"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CloudRain, Sparkles, Heart } from "lucide-react";
import Image from "next/image"; // Note: Since we don't have actual images, we'll use placeholders or colors

export default function LetterInterface({ onClaim }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-burgundy flex flex-col md:flex-row p-4 md:p-8 gap-6"
    >
      {/* Sidebar Controls */}
      <div className="hidden md:flex flex-col gap-4 text-cream w-16 items-center pt-10">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Rain Petals">
          <CloudRain className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Sparkles">
          <Sparkles className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-red-accent" title="My Heart">
          <Heart className="w-6 h-6 fill-current" />
        </button>
      </div>

      {/* Main Letter Content */}
      <div className="flex-1 bg-cream rounded-lg shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[85vh] relative text-burgundy">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <Heart className="w-40 h-40" />
        </div>
        
        <div className="max-w-prose mx-auto">
            <h1 className="font-cursive text-5xl mb-8">Dearest Valentine,</h1>
            
            <div className="space-y-6 text-lg leading-relaxed font-sans text-stone-800">
                <p>
                    I've spent a long time putting my feelings into words, but every time I try, 
                    they seem to fall short of what my heart truly holds for you.
                </p>
                <p>
                    From the moment we met, you became my favorite thought, my safest place, 
                    and my greatest adventure. You listen to my dreams and hold my fears 
                    with such gentleness.
                </p>
                <p>
                    Thank you for being my peace, my joy, and my greatest supporter. 
                    I promise to cherish you, today and alway.
                </p>
                <p>
                  "In all the world, there is no heart for me like yours. 
                  In all the world, there is no love for you like mine."
                </p>
            </div>

            <div className="mt-12 text-right">
                <p className="font-cursive text-3xl">Forever Yours,</p>
                <p className="mt-2 font-bold">[Your Name]</p>
            </div>
            
            <div className="mt-16 flex justify-center">
                 <button 
                    onClick={onClaim}
                    className="bg-red-accent hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    Claim Your Gift Book
                </button>
            </div>
        </div>
      </div>

      {/* Memory Lane Gallery */}
      <div className="w-full md:w-80 flex flex-col gap-6 overflow-y-auto max-h-[85vh] pr-2">
        <h3 className="text-cream font-cursive text-2xl text-center md:text-left">Memory Lane</h3>
        
        {/* Mock Polaroids */}
        {[
            { id: 1, caption: "Our First Date", color: "bg-blue-200" }, 
            { id: 2, caption: "Summer Magic", color: "bg-orange-200" },
            { id: 3, caption: "New Year's Kiss", color: "bg-indigo-200" }
        ].map((item) => (
            <div key={item.id} className="bg-white p-3 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className={`w-full h-48 ${item.color} mb-3 flex items-center justify-center text-gray-500`}>
                    Photo Placeholder
                </div>
                <p className="text-center font-cursive text-xl text-stone-700">{item.caption}</p>
            </div>
        ))}
      </div>
    </motion.div>
  );
}
