import { motion } from "framer-motion";

import { TopProps } from "../types";
import HandIcon from "./HandIcon";

const Score = ({ value, color }: { value: number; color: string }) => (
  <motion.span
    key={value}
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className={`inline-block min-w-[2ch] text-center font-mono text-3xl font-bold tabular-nums ${color}`}
  >
    {value}
  </motion.span>
);

const Top = ({ gameMode, playerScore, resetScore, aiScore }: TopProps) => {
  return (
    <header className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-4 sm:px-8">
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-panel2">
          <HandIcon choice="scissors" className="h-7 w-7" />
        </span>
        <h1 className="text-xl font-bold tracking-tight">Shifumi</h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-panel/80 px-4 py-1.5 backdrop-blur">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-you">You</span>
          <Score value={playerScore} color="text-you" />
          <span className="font-mono text-xl text-white/30">:</span>
          <Score value={aiScore} color="text-cpu" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cpu">CPU</span>
        </div>
        <span className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-white/40">
          {gameMode === "Rock-Paper-Scissors" ? "Classic" : "Lizard · Spock"} mode
        </span>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => resetScore()}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-panel2 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 4v5h5" />
          </svg>
          <span className="hidden sm:inline">Reset score</span>
        </button>
      </div>
    </header>
  );
};

export default Top;
