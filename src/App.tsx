import { useState } from "react";
import Top from "./components/Top";
import Game from "./components/Game";
import Bottom from "./components/Bottom";

const App = () => {
  const [gameMode, setGameMode] = useState<string>("Rock-Paper-Scissors");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const handleModeChange = (mode: string) => {
    setGameMode(mode);
    setPlayerScore(0);
    setResult("");
  };

  const resetScore = () => {
    setPlayerScore(0);
    setResult("");
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-between bg">
      <Top
        gameMode={gameMode}
        playerScore={playerScore}
        resetScore={resetScore}
      />
      <Game
        gameMode={gameMode}
        setPlayerScore={setPlayerScore}
        result={result}
        setResult={setResult}
      />
      <Bottom gameMode={gameMode} handleModeChange={handleModeChange} />
    </div>
  );
};

export default App;
