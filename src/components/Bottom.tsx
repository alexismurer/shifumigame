import { useState } from "react";

import RulesModal from "./RulesModal";
import { BottomProps } from "../types";

const MODES = [
  { id: "Rock-Paper-Scissors", label: "Classic" },
  { id: "Rock-Paper-Scissors-Lizard-Spock", label: "Lizard · Spock" },
];

const Bottom = ({ gameMode, handleModeChange }: BottomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="relative z-10 flex items-center justify-between gap-3 px-5 pb-5 sm:px-8">
      <div role="tablist" aria-label="Game mode" className="flex rounded-full border border-white/10 bg-panel/90 p-1 backdrop-blur">
        {MODES.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={gameMode === m.id}
            onClick={() => gameMode !== m.id && handleModeChange(m.id)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition sm:px-4 ${
              gameMode === m.id ? "bg-white text-ink" : "text-white/60 hover:text-white"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-panel/90 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/25 hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14" />
          <path d="M12 17.5h.01" />
        </svg>
        Rules
      </button>
      <RulesModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        gameMode={gameMode}
      />
    </footer>
  );
};

export default Bottom;
