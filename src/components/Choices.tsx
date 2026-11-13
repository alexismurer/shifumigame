import { motion } from "framer-motion";

import HandIcon from "./HandIcon";
import { ChoicesProps } from "../types";
import { capitalize, type Choice } from "../game/rules";

const Choices = ({ choices, handleUserChoice }: ChoicesProps) => {
  return (
    <motion.div key={choices.length} className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {choices.map((choice, index) => (
        <motion.button
          key={choice}
          onClick={() => handleUserChoice(choice)}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 * index, duration: 0.3 }}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.94 }}
          className="group flex w-[92px] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-panel/90 px-2 pb-3 pt-4 backdrop-blur transition-colors hover:border-you/50 hover:bg-panel2 hover:shadow-[0_12px_40px_-12px_rgba(56,189,248,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-you sm:w-[112px]"
        >
          <HandIcon choice={choice as Choice} className="h-12 w-12 transition-transform group-hover:scale-110 sm:h-14 sm:w-14" />
          <span className="text-sm font-semibold">{capitalize(choice)}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Choices;
