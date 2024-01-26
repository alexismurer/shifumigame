import { TopProps } from "../types";

const Top = ({ gameMode, playerScore, resetScore, aiScore }: TopProps) => {
  return (
    <div className="p-4 px-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Shifumi</h1>
      <div className="text-lg flex flex-col items-end">
        <p>
          Game Mode:
          {gameMode === "Rock-Paper-Scissors" ? " Normal" : " Star Trek"}
        </p>
        <p>
          {playerScore} : {aiScore}
        </p>
        <button
          onClick={() => resetScore()}
          className="bg-white text-[#2e00be] px-3 py-1 mt-1 rounded-full mr-2 hover:-translate-x-1 hover:translate-y-1 duration-300 ease-in-out hover:bg-[#2e00be] hover:text-white"
        >
          Reset score
        </button>
      </div>
    </div>
  );
};

export default Top;
