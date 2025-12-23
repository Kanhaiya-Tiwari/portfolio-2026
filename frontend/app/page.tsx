'use client';

import OutputBlock from '../components/OutputBlock';
import { Code, Cloud, Server, Zap, Github, Linkedin, Mail, Terminal, Shield, Cpu, Database } from 'lucide-react';
import { useState } from 'react';

// Terminal Home page
export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const cards = [
    { icon: Code, label: 'Coding', color: '#00ff00', delay: '0s' },
    { icon: Cloud, label: 'Cloud', color: '#00bfff', delay: '0.1s' },
    { icon: Server, label: 'DevOps', color: '#ff5555', delay: '0.2s' },
    { icon: Zap, label: 'Automation', color: '#ffff00', delay: '0.3s' },
    { icon: Terminal, label: 'Linux', color: '#ff00ff', delay: '0.4s' },
    { icon: Shield, label: 'Security', color: '#00ffff', delay: '0.5s' },
    { icon: Cpu, label: 'Infrastructure', color: '#ff8800', delay: '0.6s' },
    { icon: Database, label: 'Data', color: '#00ff41', delay: '0.7s' },
  ];

  return (
    <OutputBlock>
      <div className="text-center">
        <div className="mb-8 animate-slideIn">
          <h1 className="text-5xl font-bold mb-3 animate-glow" style={{ 
            color: '#00ff00',
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}>
            {'>'} Kanhaiya Tiwari
          </h1>
          <h2 className="text-2xl mb-4 animate-pulseGlow" style={{ 
            color: '#00bfff',
            textShadow: '0 0 10px #00bfff',
          }}>
            [DevOps Engineer]
          </h2>
          <p className="text-terminalGray mb-6 text-lg animate-flicker">
            $ Passionate about automation, cloud technologies, and building scalable infrastructure
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-6 rounded-lg border-2 cursor-pointer clickable glitch transition-all duration-300 group relative overflow-hidden"
                style={{
                  borderColor: card.color,
                  backgroundColor: hoveredCard === idx ? `${card.color}15` : 'rgba(0, 0, 0, 0.5)',
                  boxShadow: hoveredCard === idx 
                    ? `0 0 20px ${card.color}, 0 0 40px ${card.color}` 
                    : `0 0 10px ${card.color}40`,
                  animationDelay: card.delay,
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {}}
              >
                <div className="absolute top-1 right-1 text-xs opacity-50" style={{ color: card.color }}>
                  {'>'}
                </div>
                <Icon 
                  className="mb-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" 
                  size={40} 
                  style={{ color: card.color }}
                />
                <span 
                  className="font-bold transition-all duration-300 group-hover:text-xl"
                  style={{ color: card.color }}
                >
                  {card.label}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" style={{ color: card.color }}></div>
              </div>
            );
          })}
        </div>

        <div className="mb-8 animate-fadeIn">
          <p className="text-terminalGray text-lg mb-4">
            $ Welcome to my terminal-themed portfolio.
          </p>
          <p className="text-terminalBlue text-sm animate-flicker">
            {'>'} Navigate using the commands above or explore my journey in DevOps and cloud engineering.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, href: 'https://github.com', color: '#00ff00', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', color: '#00bfff', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:kt230088@gmail.com', color: '#ff5555', label: 'Email' },
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="clickable group relative p-4 rounded-lg border-2 transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: social.color,
                  boxShadow: `0 0 10px ${social.color}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${social.color}, 0 0 40px ${social.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 10px ${social.color}40`;
                }}
                title={social.label}
              >
                <Icon size={28} style={{ color: social.color }} className="group-hover:animate-spin" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: social.color }}>
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </OutputBlock>
  );
}
