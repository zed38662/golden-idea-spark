import React from 'react';

interface ParticleEffectProps {
  type: 'explosion' | 'gentle';
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({ type }) => {
  const particleCount = type === 'explosion' ? 20 : 10;
  const animationClass = type === 'explosion' ? 'animate-particle-explosion' : 'animate-particle-rise';
  
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      {[...Array(particleCount)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 bg-particle-gold rounded-full ${animationClass}`}
          style={{
            left: `${45 + Math.random() * 10}%`,
            top: `${45 + Math.random() * 10}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            boxShadow: 'var(--glow-particle)',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      
      {type === 'explosion' && (
        <>
          {/* Golden burst rays */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-1 bg-gradient-to-t from-gold-glow to-transparent animate-particle-explosion"
              style={{
                height: '60px',
                left: '50%',
                top: '50%',
                transformOrigin: 'bottom center',
                transform: `rotate(${i * 45}deg) translateX(-50%)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
          
          {/* Central flash */}
          <div 
            className="absolute w-20 h-20 rounded-full animate-particle-explosion"
            style={{
              background: 'radial-gradient(circle, hsl(var(--particle-white)), hsl(var(--gold-glow)), transparent)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </>
      )}
    </div>
  );
};