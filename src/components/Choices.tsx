import { motion } from "framer-motion";

interface ChoicesProps {
  choices: string[];
  handleUserChoice: (choice: string) => void;
}

const capitalizeFirstLetter = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Choices: React.FC<ChoicesProps> = ({ choices, handleUserChoice }) => {
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
            <div className="bg-tertiary py-5 px-5 rounded-full flex justify-evenly items-center flex-col">
              <div className="relative group">
                <div className="absolute duration-300 opacity-50 -inset-px bg-gradient-to-r from-[#2ebe9c] via-[#cac718] to-[#d45719] blur-lg group-hover:opacity-90"></div>
                <button
                  key={choice}
                  onClick={() => handleUserChoice(choice)}
                  className="min-w-28 relative py-4 text-white font-bold text-xl rounded-lg"
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
