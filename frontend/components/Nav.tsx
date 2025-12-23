'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal } from 'lucide-react';

export default function Nav() {
  const pathname = usePathname();
  
  const links = [
    { href: '/', label: 'home', color: '#00ff00' },
    { href: '/about', label: 'about', color: '#00bfff' },
    { href: '/experience', label: 'experience', color: '#ff5555' },
    { href: '/projects', label: 'projects', color: '#ffff00' },
    { href: '/skills', label: 'skills', color: '#ff00ff' },
    { href: '/hacker', label: 'hacker', color: '#00ffff' },
    { href: '/summary', label: 'summary', color: '#ff8800' },
    { href: '/contact', label: 'contact', color: '#00ff41' },
  ];

  return (
    <div className="mb-6 p-4 rounded-lg border-2 relative overflow-hidden group" style={{ 
      borderColor: '#00ff00',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
    }}>
      <div className="flex items-center gap-2 mb-3">
        <Terminal size={20} style={{ color: '#00ff00' }} />
        <span className="text-terminalGreen font-bold">$ navigate:</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-110 relative group/link clickable"
              style={{
                borderColor: isActive ? link.color : 'rgba(255, 255, 255, 0.2)',
                backgroundColor: isActive ? `${link.color}20` : 'rgba(0, 0, 0, 0.3)',
                color: isActive ? link.color : '#888888',
                boxShadow: isActive 
                  ? `0 0 15px ${link.color}, 0 0 30px ${link.color}` 
                  : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = link.color;
                  e.currentTarget.style.color = link.color;
                  e.currentTarget.style.boxShadow = `0 0 10px ${link.color}`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = '#888888';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <span className="relative z-10 font-bold">{link.label}</span>
              {isActive && (
                <div className="absolute top-1 right-1 text-xs animate-flicker" style={{ color: link.color }}>
                  {'>'}
                </div>
              )}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full" style={{ color: link.color }}></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}