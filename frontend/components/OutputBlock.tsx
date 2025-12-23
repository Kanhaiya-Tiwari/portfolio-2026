import React, { useState, useEffect } from 'react';

const colors = [
  '#00ff00', // green
  '#00bfff', // blue
  '#ff5555', // red
  '#ffff00', // yellow
  '#ff00ff', // purple
  '#00ffff', // cyan
  '#ff8800', // orange
];

export default function OutputBlock({ children }: { children: React.ReactNode }) {
  const [borderColor, setBorderColor] = useState(colors[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="bg-terminalBg text-terminalGreen font-mono p-6 rounded-lg shadow-lg my-4 border-2 animate-fadeIn cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: borderColor,
        boxShadow: isHovered 
          ? `0 0 20px ${borderColor}, 0 0 40px ${borderColor}, 0 0 60px ${borderColor}` 
          : `0 0 10px ${borderColor}40`,
        animation: 'borderGlow 2s ease-in-out infinite',
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"
          style={{ 
            background: `linear-gradient(to right, transparent, ${borderColor}, transparent)`,
            animation: 'scan 3s linear infinite',
          }}
        ></div>
      </div>
      <div className="absolute top-2 right-2 text-xs opacity-50 animate-flicker" style={{ color: borderColor }}>
        {'>'}
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}