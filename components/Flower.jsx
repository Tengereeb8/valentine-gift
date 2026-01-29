"use client";

import { motion } from "framer-motion";

export default function Flower() {
  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
      {/* Stem */}
      <svg
        viewBox="0 0 100 200"
        className="absolute bottom-0 w-full h-full"
        style={{ overflow: "visible" }}
      >
        <motion.path
          d="M50 200 C50 150, 40 100, 50 50"
          fill="transparent"
          stroke="#4ade80"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Leaf 1 */}
        <motion.path
          d="M50 140 Q30 130, 20 150 Q35 160, 50 140"
          fill="#22c55e"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        
        {/* Leaf 2 */}
        <motion.path
          d="M50 100 Q70 90, 80 110 Q65 120, 50 100"
          fill="#22c55e"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </svg>

      {/* Blossom */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, duration: 1, type: "spring", stiffness: 100 }}
      >
        <div className="relative w-24 h-24">
          {/* Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-12 h-16 bg-red-accent rounded-full border border-burgundy/20 shadow-lg"
              style={{
                originX: "50%",
                originY: "100%",
                x: "-50%",
                y: "-100%",
              }}
              initial={{ rotate: angle, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1.8 + i * 0.1,
                duration: 0.6,
                type: "spring",
              }}
            />
          ))}
          {/* Center */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 shadow-inner"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.6, duration: 0.4 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
