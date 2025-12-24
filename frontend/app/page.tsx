'use client';

import OutputBlock from '../components/OutputBlock';
import { Code, Cloud, Server, Zap, Github, Linkedin, Mail, Terminal, Shield, Cpu, Database } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

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
          {/* Profile Photo - Add your photo to /public/images/profile/photo.jpg */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Left side glow effect */}
              <div className="absolute -left-4 top-0 bottom-0 w-2 rounded-l-lg animate-pulseGlow" style={{
                background: 'linear-gradient(to right, #00ff00, #00bfff, #ff00ff)',
                opacity: 0.8,
                boxShadow: '0 0 20px #00ff00, 0 0 40px #00bfff',
                filter: 'blur(4px)',
                zIndex: 12,
              }}></div>
              
              {/* Right side glow effect */}
              <div className="absolute -right-4 top-0 bottom-0 w-2 rounded-r-lg animate-pulseGlow" style={{
                background: 'linear-gradient(to left, #00ff00, #00bfff, #ff00ff)',
                opacity: 0.8,
                boxShadow: '0 0 20px #00ff00, 0 0 40px #00bfff',
                filter: 'blur(4px)',
                zIndex: 12,
                animationDelay: '0.5s',
              }}></div>
              
              {/* Profile photo container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden cursor-pointer clickable group-hover:scale-105 transition-all duration-300" style={{
                boxShadow: '0 0 30px rgba(0, 255, 0, 0.3), 0 0 60px rgba(0, 191, 255, 0.2)',
                zIndex: 10,
              }}>
                <Image
                  src="/images/profile/photo.jpeg"
                  alt="Kanhaiya Tiwari - DevOps Engineer"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    objectPosition: 'center 25%',
                    objectFit: 'cover',
                  }}
                  sizes="(max-width: 768px) 192px, 224px"
                  onError={(e) => {
                    // If image doesn't exist, show placeholder
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-800 text-terminalGreen text-4xl font-bold">KT</div>';
                    }
                  }}
                />
                
                {/* Top and bottom border effects on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terminalGreen to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(to right, transparent, #00ff00, #00bfff, #00ff00, transparent)',
                  boxShadow: '0 0 10px #00ff00',
                }}></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terminalGreen to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(to right, transparent, #00ff00, #00bfff, #00ff00, transparent)',
                  boxShadow: '0 0 10px #00ff00',
                }}></div>
              </div>
            </div>
          </div>
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
          <p className="text-terminalGray mb-6 text-xl font-medium animate-flicker">
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
                <div className="absolute top-1 right-1 text-sm opacity-50 font-bold" style={{ color: card.color }}>
                  {'>'}
                </div>
                  <Icon 
                    className="mb-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" 
                    size={48} 
                    style={{ color: card.color }}
                  />
                  <span 
                    className="font-bold text-lg transition-all duration-300 group-hover:text-2xl"
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
          <p className="text-terminalGray text-xl mb-4 font-medium">
            $ Welcome to my terminal-themed portfolio.
          </p>
          <p className="text-terminalBlue text-lg animate-flicker font-medium">
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
                <Icon size={32} style={{ color: social.color }} className="group-hover:animate-spin" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity font-medium" style={{ color: social.color }}>
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
