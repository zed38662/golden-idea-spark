import React, { useState, useEffect } from 'react';

export const IdeaReveal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the text appearance slightly after particles
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
      <div
        className={`
          text-8xl font-bold text-center transition-all duration-1000
          ${isVisible ? 'animate-idea-emerge' : 'opacity-0'}
        `}
        style={{
          background: 'linear-gradient(45deg, hsl(var(--gold-bright)), hsl(var(--gold-glow)), hsl(var(--particle-white)))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px hsl(var(--gold-glow)), 0 0 60px hsl(var(--gold-bright))',
          filter: 'drop-shadow(0 0 20px hsl(var(--gold-glow)))',
        }}
      >
        <span className="animate-text-glow-pulse">IDEA</span>
      </div>
      
      {/* Magical sparkles around the text */}
      {isVisible && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-particle-white rounded-full animate-cosmic-float"
              style={{
                left: `${30 + Math.random() * 40}%`,
                top: `${30 + Math.random() * 40}%`,
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