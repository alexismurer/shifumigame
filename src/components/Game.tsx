import { Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Choices from "./Choices";
import HandIcon from "./HandIcon";
import { GameProps } from "../types";
import { describeOutcome, type Choice } from "../game/rules";

// @ts-expect-error untyped .jsx model
import Player from "../models/Player";
// @ts-expect-error untyped .jsx model
import Monster from "../models/Monster";
import { Canvas } from "@react-three/fiber";

const RESULT_COLOR: Record<string, string> = {
  "You win!": "text-you",
  "Computer wins!": "text-cpu",
  "It's a tie!": "text-tie",
};

const Fighter = ({ side, children }: { side: "you" | "cpu"; children: React.ReactNode }) => (
  <div className="relative hidden h-[440px] w-full max-w-[300px] md:block">
    <div
      aria-hidden
      className={`absolute bottom-6 left-1/2 h-10 w-48 -translate-x-1/2 rounded-[100%] blur-md ${side === "you" ? "bg-you/25" : "bg-cpu/25"}`}
    />
    <div className="absolute inset-0">{children}</div>
    <span
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
        side === "you" ? "border-you/30 bg-you/10 text-you" : "border-cpu/30 bg-cpu/10 text-cpu"
      }`}
    >
      {side === "you" ? "You" : "CPU"}
    </span>
  </div>
);

const Slot = ({ choice, side, trigger }: { choice: string | null; side: "you" | "cpu"; trigger: number }) => (
  <div
    className={`grid h-28 w-28 place-items-center rounded-3xl border bg-panel2 sm:h-36 sm:w-36 ${
      choice ? (side === "you" ? "border-you/40 shadow-[0_0_60px_-10px_rgba(56,189,248,0.6)]" : "border-cpu/40 shadow-[0_0_60px_-10px_rgba(251,113,133,0.6)]") : "border-white/10"
    }`}
  >
    {choice ? (
      <motion.div key={trigger} initial={{ scale: 0.3, rotate: side === "you" ? -20 : 20, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 16 }}>
        <HandIcon choice={choice as Choice} className="h-20 w-20 sm:h-24 sm:w-24" />
      </motion.div>
    ) : (
      <span className="font-mono text-4xl font-bold text-white/15">?</span>
    )}
  </div>
);

const Game = ({
  gameMode,
  setPlayerScore,
  setAiScore,
  result,
  setResult,
}: GameProps) => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [trigger, setTrigger] = useState<number>(0);

  const handleUserChoice = (choice: string) => {
    const computerChoice = generateComputerChoice();
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
    setTrigger(trigger + 1);
  };

  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (user: string, computer: string) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "rock" && (computer === "scissors" || computer === "lizard")) ||
      (user === "paper" && (computer === "rock" || computer === "spock")) ||
      (user === "scissors" &&
        (computer === "paper" || computer === "lizard")) ||
      (user === "lizard" && (computer === "spock" || computer === "paper")) ||
      (user === "spock" && (computer === "scissors" || computer === "rock"))
    ) {
      setResult("You win!");
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      setResult("Computer wins!");
      setAiScore((prevScore) => prevScore + 1);
    }
  };

  const choices = ["rock", "paper", "scissors"];
  if (gameMode !== "Rock-Paper-Scissors") choices.push("lizard", "spock");

  const played = result !== "";
  const outcome = played && userChoice && computerChoice ? describeOutcome(userChoice, computerChoice) : null;

  return (
    <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-4 pb-6">
      <div className="grid w-full max-w-6xl items-center justify-items-center md:grid-cols-[1fr_auto_1fr]">
        <Fighter side="you">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 1, 1]} intensity={3} />
            <Suspense fallback={null}>
              <Player />
            </Suspense>
          </Canvas>
        </Fighter>

        <div className="flex flex-col items-center gap-6 py-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <Slot choice={played ? userChoice : null} side="you" trigger={trigger} />
            <span className="font-display text-2xl font-bold italic text-white/30">VS</span>
            <Slot choice={played ? computerChoice : null} side="cpu" trigger={trigger} />
          </div>

          <div className="flex h-16 flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={played ? trigger : "idle"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: played ? 0.25 : 0 }}
              >
                {played ? (
                  <>
                    <p className={`text-3xl font-bold tracking-tight ${RESULT_COLOR[result] ?? ""}`}>{result}</p>
                    <p className="mt-1 text-sm text-white/50">{outcome ?? "Same move, nobody scores."}</p>
                  </>
                ) : (
                  <>
                    <p className="text-3xl font-bold tracking-tight">Make your move</p>
                    <p className="mt-1 text-sm text-white/50">Pick a hand below. The CPU picks at the same time.</p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Fighter side="cpu">
          <Canvas>
            <ambientLight intensity={2} />
            <directionalLight position={[-4, 1, 1]} intensity={3} />
            <Suspense fallback={null}>
              <Monster />
            </Suspense>
          </Canvas>
        </Fighter>
      </div>

      <Choices choices={choices} handleUserChoice={handleUserChoice} />
    </main>
  );
};

export default Game;
