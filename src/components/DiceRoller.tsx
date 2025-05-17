
import React, { useState } from 'react';
import Die from './Die';
import DiceControls from './DiceControls';
import { Button } from "@/components/ui/button";
import { Dices } from 'lucide-react';

const DiceRoller = () => {
  const [diceCount, setDiceCount] = useState<number>(2);
  const [diceValues, setDiceValues] = useState<number[]>([1, 1]);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(2);

  const handleRoll = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    
    // Calculate new random values after delay to match animation
    setTimeout(() => {
      const newValues = Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
      setDiceValues(newValues);
      setTotal(newValues.reduce((sum, val) => sum + val, 0));
      setIsRolling(false);
    }, 800);
  };

  const handleDiceCountChange = (count: number) => {
    setDiceCount(count);
    // Initialize dice values array based on new count
    const initialValues = Array(count).fill(1);
    setDiceValues(initialValues);
    setTotal(count); // All dice start with value 1
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-dice-background min-h-screen">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-dice-red mb-8">
          Dice Roller
        </h1>
        
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <DiceControls 
                diceCount={diceCount} 
                onDiceCountChange={handleDiceCountChange}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {diceValues.map((value, index) => (
                <Die key={index} value={value} isRolling={isRolling} />
              ))}
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="text-2xl font-bold">
                Total: <span className="text-dice-red">{total}</span>
              </div>
              
              <Button 
                onClick={handleRoll}
                disabled={isRolling}
                className="bg-dice-red hover:bg-dice-red/90 text-white px-8 py-4 text-xl h-auto"
              >
                <Dices className="mr-2" /> Roll Dice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceRoller;
