import { motion } from "framer-motion";

import { ChoicesProps } from "../types";

const capitalizeFirstLetter = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Choices = ({ choices, handleUserChoice }: ChoicesProps) => {
  return (
    <div>
      <motion.div
        key={choices.length}
        className="flex flex-row flex-wrap justify-center gap-10 mt-12"
      >
        {choices.map((choice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
          >
            <div className="bg-tertiary py-5 px-2 sm:px-5 rounded-full flex justify-evenly items-center flex-col">
              <div className="relative group">
                <div className="absolute duration-300 opacity-50 -inset-px bg-gradient-to-r from-[#2ebe9c] via-[#cac718] to-[#d45719] blur-lg group-hover:opacity-90"></div>
                <button
                  key={choice}
                  onClick={() => handleUserChoice(choice)}
                  className="min-w-28 relative py-2 sm:py-4 text-white font-bold text-l sm:text-xl rounded-lg"
                >
                  {capitalizeFirstLetter(choice)}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Choices;
