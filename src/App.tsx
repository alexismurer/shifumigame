import { useState } from "react";
import Top from "./components/Top";
import Game from "./components/Game";
import Bottom from "./components/Bottom";

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
    <div className="stage relative flex min-h-dvh w-full flex-col overflow-x-hidden">
      <div aria-hidden className="floor pointer-events-none absolute inset-x-0 bottom-0 h-2/3" />
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
  );
};

export default App;
