'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Terminal, Home, User, Briefcase, FolderKanban, 
  Code, Image, Shield, FileText, Mail, Sparkles 
} from 'lucide-react';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const links = [
    { href: '/', label: 'Home', icon: Home, color: '#00ff00', description: 'Main Page' },
    { href: '/about', label: 'About', icon: User, color: '#00bfff', description: 'About Me' },
    { href: '/experience', label: 'Experience', icon: Briefcase, color: '#ff5555', description: 'Work History' },
    { href: '/projects', label: 'Projects', icon: FolderKanban, color: '#ffff00', description: 'My Projects' },
    { href: '/skills', label: 'Skills', icon: Code, color: '#ff00ff', description: 'Tech Skills' },
    { href: '/gallery', label: 'Gallery', icon: Image, color: '#ff0080', description: 'Certificates' },
    { href: '/hacker', label: 'Hacker', icon: Shield, color: '#00ffff', description: 'Terminal' },
    { href: '/summary', label: 'Summary', icon: FileText, color: '#ff8800', description: 'Overview' },
    { href: '/contact', label: 'Contact', icon: Mail, color: '#00ff41', description: 'Get in Touch' },
  ];

  return (
    <nav className="sticky top-0 z-50 mb-6 py-3 backdrop-blur-sm" style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }}>
      <div className="p-4 rounded-lg border relative overflow-hidden" style={{ 
        borderColor: '#00ff00',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        boxShadow: '0 0 15px rgba(0, 255, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.4)',
      }}>
        {/* Animated background scan line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-terminalGreen to-transparent animate-scan opacity-30"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md border animate-pulseGlow" style={{
              borderColor: '#00ff00',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
            }}>
              <Terminal size={18} style={{ color: '#00ff00' }} />
            </div>
            <div>
              <h2 className="text-base font-bold animate-glow" style={
                {
                  color: '#00ff00',
                  textShadow: '0 0 5px #00ff00',
                }
              }>
                {'>'} NAVIGATION
              </h2>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-md border" style={{
            borderColor: '#00ff00',
            backgroundColor: 'rgba(0, 255, 0, 0.05)',
          }}>
            <Sparkles size={12} style={{ color: '#00ff00' }} />
            <span className="text-terminalGreen text-xs font-bold">
              {links.findIndex(l => l.href === pathname) + 1} / {links.length}
            </span>
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            const isHovered = hoveredLink === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div
                  className="p-3 rounded-md border transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center relative overflow-hidden clickable"
                  style={{
                    borderColor: isActive ? link.color : isHovered ? link.color : 'rgba(255, 255, 255, 0.1)',
                    backgroundColor: isActive 
                      ? `${link.color}15` 
                      : isHovered 
                        ? `${link.color}10` 
                        : 'rgba(0, 0, 0, 0.4)',
                    boxShadow: isActive 
                      ? `0 0 15px ${link.color}, inset 0 0 10px ${link.color}20` 
                      : isHovered
                        ? `0 0 10px ${link.color}80`
                        : 'none',
                    transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
                    minHeight: '80px',
                  }}
                >
                  {/* Background glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${link.color}10, transparent)`,
                    }}
                  ></div>
                  
                  {/* Icon */}
                  <div 
                    className="mb-1 p-1 rounded transition-all duration-330 relative z-10"
                    style={{ 
                      backgroundColor: `${link.color}10`,
                      border: `1px solid ${link.color}`,
                      boxShadow: `0 0 8px ${link.color}40`,
                    }}
                  >
                    <Icon size={20} style={{ color: link.color }} className="group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  
                  {/* Label */}
                  <h3 
                    className="font-bold text-xs transition-all duration-300 relative z-10"
                    style={{ color: isActive || isHovered ? link.color : '#888888' }}
                  >
                    {link.label}
                  </h3>
                  
                  {/* Description (hidden by default, shown on hover) */}
                  <p 
                    className="absolute bottom-1 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                    style={{ color: link.color }}
                  >
                    {link.description}
                  </p>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <>
                      <div className="absolute top-1 right-1 w-2 h-2 rounded-full animate-pulse" style={{ 
                        backgroundColor: link.color,
                        boxShadow: `0 0 5px ${link.color}`,
                      }}></div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-current" style={{ color: link.color }}></div>
                    </>
                  )}
                  
                  {/* Hover border animation */}
                  <div 
                    className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: `1px solid ${link.color}`,
                      boxShadow: `inset 0 0 10px ${link.color}30`,
                    }}
                  ></div>
                  
                  {/* Corner indicators */}
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 border-t border-l opacity-50" style={{ borderColor: link.color }}></div>
                  <div className="absolute top-0.5 right-0.5 w-1 h-1 border-t border-r opacity-50" style={{ borderColor: link.color }}></div>
                  <div className="absolute bottom-0.5 left-0.5 w-1 h-1 border-b border-l opacity-50" style={{ borderColor: link.color }}></div>
                  <div className="absolute bottom-0.5 right-0.5 w-1 h-1 border-b border-r opacity-50" style={{ borderColor: link.color }}></div>
                </div>
              </Link>
            );
          })}
        </div>
        
        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-terminalGreen/20 flex items-center justify-between text-xs text-terminalGray">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#00ff00' }}></div>
            <span>System: ONLINE</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Portfolio v2026</span>
            <span className="text-terminalGreen">|</span>
            <span>DevOps Engineer</span>
          </div>
        </div>
    </div>
    </nav>
  );
}