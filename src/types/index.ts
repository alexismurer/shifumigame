export type ChoicesProps = {
  choices: string[];
  handleUserChoice: (choice: string) => void;
};

export type BottomProps = {
  gameMode: string;
  handleModeChange: (mode: string) => void;
};

export type RulesModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  gameMode: string;
};

export type GameProps = {
  gameMode: string;
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
  setAiScore: React.Dispatch<React.SetStateAction<number>>;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
};

export type TopProps = {
  gameMode: string;
  playerScore: number;
  aiScore: number;
  resetScore: () => void;
};
