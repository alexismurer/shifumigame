import { useState } from "react";
import Top from "./components/Top";
import Game from "./components/Game";
import Bottom from "./components/Bottom";
import Pluses from "./components/Pluses";

const App = () => {
  const [gameMode, setGameMode] = useState<string>("Rock-Paper-Scissors");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [result, setResult] = useState<string>("");
  const [aiScore, setAiScore] = useState<number>(0);

  const resetScore = () => {
    setAiScore(0);
    setPlayerScore(0);
    setResult("");
  };

  const handleModeChange = (mode: string) => {
    setGameMode(mode);
    resetScore();
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-between bg">
        <Pluses />
        <Top
          gameMode={gameMode}
          playerScore={playerScore}
          aiScore={aiScore}
          resetScore={resetScore}
        />
        <Game
          gameMode={gameMode}
          setPlayerScore={setPlayerScore}
          setAiScore={setAiScore}
          result={result}
          setResult={setResult}
        />
        <Bottom gameMode={gameMode} handleModeChange={handleModeChange} />
      </div>
    </>
  );
};

export default App;
