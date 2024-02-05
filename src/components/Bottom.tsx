import { useState } from "react";

import RulesModal from "./RulesModal";
import { BottomProps } from "../types";

const Bottom = ({ gameMode, handleModeChange }: BottomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4 flex justify-between">
      <button
        onClick={() =>
          gameMode == "Rock-Paper-Scissors"
            ? handleModeChange("Rock-Paper-Scissors-Lizard-Spock")
            : handleModeChange("Rock-Paper-Scissors")
        }
        className="relative bg-white text-[#0e0039] px-5 py-3 rounded-full mr-2 hover:translate-x-1 hover:-translate-y-1 duration-300 ease-in-out hover:bg-[#0e0039] hover:text-white"
      >
        Change Game Mode
      </button>
      <button
        onClick={() => setIsOpen(true)}
        className="relative bg-white text-[#0e0039] px-5 py-3 rounded-full mr-2 hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out hover:bg-[#0e0039] hover:text-white"
      >
        Rules
      </button>
      <RulesModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        gameMode={gameMode}
      />
    </div>
  );
};

export default Bottom;
