import React, { useEffect, useState } from 'react';

interface TreasureBoxProps {
  stage: 'entrance' | 'anticipation' | 'opening';
  onOpenComplete: () => void;
}

export const TreasureBox: React.FC<TreasureBoxProps> = ({ stage, onOpenComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (stage === 'entrance') {
      setTimeout(() => setIsVisible(true), 100);
    } else if (stage === 'opening') {
      setIsOpening(true);
      setTimeout(() => onOpenComplete(), 500);
    }
  }, [stage, onOpenComplete]);

  return (
    <div className="relative z-20">
      {/* Box base */}
      <div 
        className={`
          relative w-48 h-32 transition-all duration-1000 preserve-3d
          ${isVisible ? 'animate-treasure-bounce' : 'opacity-0'}
          ${stage === 'anticipation' ? 'animate-treasure-pulse' : ''}
        `}
        style={{
          background: 'var(--gradient-golden)',
          borderRadius: '12px',
          boxShadow: 'var(--glow-golden)',
          border: '3px solid hsl(var(--gold-bright))',
        }}
      >
        {/* Box decorative elements */}
        <div className="absolute inset-2 border-2 border-gold-light rounded-lg opacity-60" />
        
        {/* Center gem */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--particle-white)), hsl(var(--gold-glow)))',
            boxShadow: 'var(--glow-particle)',
          }}
        />
        
        {/* Corner decorations */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 border-2 border-gold-bright rounded-sm transform rotate-45
              ${i === 0 ? 'top-2 left-2' : ''}
              ${i === 1 ? 'top-2 right-2' : ''}
              ${i === 2 ? 'bottom-2 left-2' : ''}
              ${i === 3 ? 'bottom-2 right-2' : ''}
            `}
            style={{ background: 'hsl(var(--gold-light))' }}
          />
        ))}
      </div>

      {/* Box lid */}
      <div 
        className={`
          absolute top-0 left-0 w-48 h-16 transition-all duration-500 origin-bottom
          ${isOpening ? 'animate-box-open' : ''}
        `}
        style={{
          background: 'var(--gradient-treasure)',
          borderRadius: '12px 12px 8px 8px',
          boxShadow: 'var(--glow-golden)',
          border: '3px solid hsl(var(--gold-bright))',
          transform: isOpening ? 'rotateX(-90deg)' : 'rotateX(0deg)',
        }}
      >
        {/* Lid decorations */}
        <div className="absolute inset-2 border-2 border-gold-light rounded-lg opacity-60" />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-3 rounded-full"
          style={{ background: 'hsl(var(--gold-bright))' }}
        />
      </div>

      {/* Magical aura particles */}
      {stage === 'anticipation' && (
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-particle-gold rounded-full animate-particle-rise"
              style={{
                left: `${20 + Math.random() * 60}%`,
                bottom: '0%',
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: 'var(--glow-particle)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};