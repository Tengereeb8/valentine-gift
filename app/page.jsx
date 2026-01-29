"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import LetterInterface from "@/components/LetterInterface";
import RewardsModal from "@/components/RewardsModal";

import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [step, setStep] = useState("envelope"); // envelope, letter
  const [showRewards, setShowRewards] = useState(false);

  return (
    <main className="min-h-screen bg-burgundy overflow-hidden relative">
      <FloatingHearts />
      <MusicPlayer />
      <AnimatePresence mode="wait">
        {step === "envelope" && (
          <Envelope key="envelope" onOpen={() => setStep("letter")} />
        )}
        
        {step === "letter" && (
          <LetterInterface key="letter" onClaim={() => setShowRewards(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRewards && (
          <RewardsModal onClose={() => setShowRewards(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}
