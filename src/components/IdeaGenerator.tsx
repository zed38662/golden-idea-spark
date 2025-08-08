import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TreasureBoxAnimation } from './TreasureBoxAnimation';

export const IdeaGenerator = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleGenerateIdeas = () => {
    setShowAnimation(true);
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
        {/* Subtle background stars */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-foreground rounded-full animate-cosmic-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-8 text-foreground">
            Idea Generator
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Unlock the power of creativity with our magical idea generator. 
            Each click opens a treasure chest of infinite possibilities.
          </p>
          
          <Button 
            variant="treasure"
            size="lg"
            onClick={handleGenerateIdeas}
            className="text-xl px-12 py-6 animate-button-glow"
          >
            Generate Ideas
          </Button>
        </div>
      </div>

      {showAnimation && (
        <TreasureBoxAnimation onComplete={handleAnimationComplete} />
      )}
    </>
  );
};