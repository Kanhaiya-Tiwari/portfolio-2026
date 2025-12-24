'use client';

import OutputBlock from '../../components/OutputBlock';
import ContactForm from '../../components/ContactForm';
import { Mail, Phone, Linkedin, Github, FileText, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const contacts = [
    { icon: Mail, label: 'Email', value: 'kt230088@gmail.com', href: 'mailto:kt230088@gmail.com', color: '#00ff00' },
    { icon: Phone, label: 'Phone', value: '7489960276', href: 'tel:7489960276', color: '#00bfff' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com', color: '#ff5555' },
    { icon: Github, label: 'GitHub', value: 'View on GitHub', href: 'https://github.com', color: '#ffff00' },
    { icon: FileText, label: 'Resume', value: 'Download Resume', href: '/Kanhaiya_Tiwari DevOps CV.pdf', color: '#ff00ff', download: true },
    { icon: MapPin, label: 'Location', value: 'Jabalpur, India', href: '#', color: '#00ffff' },
  ];

  return (
    <OutputBlock>
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 animate-glow" style={{ 
            color: '#00ff00',
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
          }}>
            {'>'} CONTACT.INFO
          </h2>
          <p className="text-terminalGray text-lg animate-flicker font-medium">
            $ Establishing secure connection...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-5 rounded-lg border-2 cursor-pointer clickable transition-all duration-300 group relative overflow-hidden"
                style={{
                  borderColor: contact.color,
                  backgroundColor: hoveredContact === idx ? `${contact.color}15` : 'rgba(0, 0, 0, 0.5)',
                  boxShadow: hoveredContact === idx 
                    ? `0 0 20px ${contact.color}, 0 0 40px ${contact.color}` 
                    : `0 0 10px ${contact.color}40`,
                }}
                onMouseEnter={() => setHoveredContact(idx)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{ 
                      backgroundColor: `${contact.color}20`,
                      border: `2px solid ${contact.color}`,
                    }}
                  >
                    <Icon size={32} style={{ color: contact.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-terminalGray mb-1 font-medium">{contact.label}</div>
                    <div 
                      className="font-bold text-lg transition-all duration-300 group-hover:text-xl"
                      style={{ color: contact.color }}
                    >
                      {contact.value}
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 text-xs opacity-50 animate-flicker" style={{ color: contact.color }}>
                  {'>'}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" style={{ color: contact.color }}></div>
              </a>
            );
          })}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#00bfff' }}>
            {'>'} SEND MESSAGE
          </h3>
          <ContactForm />
        </div>
      </div>
    </OutputBlock>
  );
}