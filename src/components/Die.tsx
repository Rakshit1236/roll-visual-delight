
import React from 'react';

interface DieProps {
  value: number;
  isRolling: boolean;
}

const Die: React.FC<DieProps> = ({ value, isRolling }) => {
  const renderPips = () => {
    // Configuration of pips for each face
    const pipConfigurations = {
      1: ['center'],
      2: ['top-left', 'bottom-right'],
      3: ['top-left', 'center', 'bottom-right'],
      4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
      6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
    };

    const pipPositions: Record<string, string> = {
      'top-left': 'top-0 left-0',
      'top-right': 'top-0 right-0',
      'middle-left': 'top-1/2 -translate-y-1/2 left-0',
      'middle-right': 'top-1/2 -translate-y-1/2 right-0',
      'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      'bottom-left': 'bottom-0 left-0',
      'bottom-right': 'bottom-0 right-0'
    };

    const pips = pipConfigurations[value as keyof typeof pipConfigurations] || [];

    return pips.map((position, index) => (
      <div 
        key={index} 
        className={`absolute w-4 h-4 bg-white rounded-full ${pipPositions[position]}`}
      />
    ));
  };

  return (
    <div className="relative perspective-500">
      <div 
        className={`
          w-20 h-20 bg-dice-red rounded-lg shadow-lg relative
          transform-preserve-3d
          flex items-center justify-center
          ${isRolling ? 'animate-roll-dice' : 'animate-bounce-in'}
        `}
      >
        {renderPips()}
      </div>
    </div>
  );
};

export default Die;
