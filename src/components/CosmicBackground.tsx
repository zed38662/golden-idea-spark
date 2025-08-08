import React from 'react';

interface CosmicBackgroundProps {
  stage: 'entrance' | 'anticipation' | 'reveal' | 'conclusion';
}

export const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ stage }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base cosmic gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: 'var(--gradient-cosmic)',
          opacity: stage === 'entrance' ? 0 : 1,
        }}
      />
      
      {/* Nebula effect */}
      <div 
        className="absolute inset-0 animate-nebula-drift transition-opacity duration-1000"
        style={{
          background: 'var(--gradient-nebula)',
          opacity: stage === 'anticipation' || stage === 'reveal' ? 0.8 : 0.3,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-particle-white rounded-full animate-cosmic-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              boxShadow: 'var(--glow-particle)',
            }}
          />
        ))}
      </div>

      {/* Energy waves during reveal */}
      {(stage === 'reveal' || stage === 'conclusion') && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 border border-energy-blue rounded-full animate-ping opacity-30"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};