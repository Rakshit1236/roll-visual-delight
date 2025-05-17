
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

interface DiceControlsProps {
  diceCount: number;
  onDiceCountChange: (count: number) => void;
}

const DiceControls: React.FC<DiceControlsProps> = ({ 
  diceCount, 
  onDiceCountChange 
}) => {
  // Array of dice count options with their corresponding icons
  const diceOptions = [
    { count: 1, icon: <Dice1 /> },
    { count: 2, icon: <Dice2 /> },
    { count: 3, icon: <Dice3 /> },
    { count: 4, icon: <Dice4 /> },
    { count: 5, icon: <Dice5 /> },
    { count: 6, icon: <Dice6 /> },
  ];

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg mb-3 font-medium">Select number of dice:</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {diceOptions.map((option) => (
          <Button
            key={option.count}
            onClick={() => onDiceCountChange(option.count)}
            variant={diceCount === option.count ? "default" : "outline"}
            className={`
              w-12 h-12 p-0 flex items-center justify-center
              ${diceCount === option.count ? 'bg-dice-red hover:bg-dice-red/90' : ''}
            `}
          >
            {option.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DiceControls;
