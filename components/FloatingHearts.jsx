"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Heart = ({ delay, x, size, duration }) => (
  <motion.div
    initial={{ y: "110vh", x: `${x}vw`, opacity: 0, scale: 0 }}
    animate={{ 
      y: "-10vh", 
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0.5],
      rotate: [0, 45, -45, 0]
    }}
    transition={{ 
      duration: duration, 
      delay: delay, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="absolute text-red-accent/20 pointer-events-none"
    style={{ fontSize: size }}
  >
    ♥
  </motion.div>
);

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 20,
      x: Math.random() * 100,
      size: Math.random() * 20 + 10 + "px",
      duration: Math.random() * 10 + 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  );
}
