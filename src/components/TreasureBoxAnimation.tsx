import React, { useState, useEffect } from 'react';
import { CosmicBackground } from './CosmicBackground';
import { TreasureBox } from './TreasureBox';
import { ParticleEffect } from './ParticleEffect';
import { IdeaReveal } from './IdeaReveal';

interface TreasureBoxAnimationProps {
  onComplete: () => void;
}

type AnimationStage = 'entrance' | 'anticipation' | 'reveal' | 'conclusion';

export const TreasureBoxAnimation: React.FC<TreasureBoxAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<AnimationStage>('entrance');

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Stage progression
    timers.push(setTimeout(() => setStage('anticipation'), 1000));
    timers.push(setTimeout(() => setStage('reveal'), 4000));
    timers.push(setTimeout(() => setStage('conclusion'), 6500));
    timers.push(setTimeout(() => onComplete(), 9000));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <CosmicBackground stage={stage} />
      
      {(stage === 'entrance' || stage === 'anticipation') && (
        <TreasureBox 
          stage={stage}
          onOpenComplete={() => {}} 
        />
      )}
      
      {stage === 'reveal' && (
        <>
          <TreasureBox 
            stage="opening"
            onOpenComplete={() => {}}
          />
          <ParticleEffect type="explosion" />
          <IdeaReveal />
        </>
      )}
      
      {stage === 'conclusion' && (
        <>
          <ParticleEffect type="gentle" />
          <IdeaReveal />
        </>
      )}
    </div>
  );
};