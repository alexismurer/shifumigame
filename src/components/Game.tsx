import { useState } from "react";
import { motion } from "framer-motion";

import Choices from "./Choices";
import { GameProps } from "../types";

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

  return (
    <div className="p-4 text-center">
      {result != "" ? (
        <motion.div key={trigger}>
          <div className="flex items-center justify-evenly py-6">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`images/${userChoice}.png`}
                alt="user choice"
                width={180}
                height={180}
                className={`${userChoice}-icon rounded-full`}
              />
            </motion.div>

            <img src="images/vs.png" alt="vs" width={60} height={60} />

            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <img
                src={`images/${computerChoice}.png`}
                alt="computer choice"
                width={180}
                height={180}
                className={`${computerChoice}-icon rounded-full`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <p className="font-bold text-xl">{result}</p>
          </motion.div>
        </motion.div>
      ) : (
        <div className="p-4 font-bold text-2xl">Make your move!</div>
      )}
      <Choices choices={choices} handleUserChoice={handleUserChoice} />
    </div>
  );
};

export default Game;
