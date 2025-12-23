'use client';

import OutputBlock from '../../components/OutputBlock';
import { Briefcase, Calendar, MapPin, Code, Cloud, Server, Settings, Activity } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  { 
    company: 'Codenixia (Rostris Verse Pvt. Ltd.)', 
    role: 'Linux, Cloud & DevOps Engineer Intern', 
    location: 'Pune, India',
    duration: 'Current',
    description: 'Gaining real-world exposure to industry workflows. Trained in Linux server configuration, cloud computing, virtualization, monitoring, automation, and DevOps pipelines. Contributing to integrated intelligent cloud-based application involving Docker containers, Python programming, CI/CD pipelines, monitoring frameworks, and distributed systems.',
    achievements: [
      'Linux server configuration and management',
      'Cloud infrastructure setup and optimization',
      'CI/CD pipeline development',
      'Container orchestration with Docker',
      'Monitoring and observability implementation'
    ],
    color: '#00ff00',
    icon: Briefcase
  },
];

export default function ExperiencePage() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <OutputBlock>
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 animate-glow" style={{ 
            color: '#00ff00',
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
          }}>
            {'>'} EXPERIENCE.LOG
          </h2>
          <p className="text-terminalGray text-sm animate-flicker">
            $ Loading career history... [COMPLETE]
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border-2 cursor-pointer clickable transition-all duration-300 group relative overflow-hidden"
                style={{
                  borderColor: exp.color,
                  backgroundColor: hoveredExp === idx ? `${exp.color}15` : 'rgba(0, 0, 0, 0.5)',
                  boxShadow: hoveredExp === idx 
                    ? `0 0 20px ${exp.color}, 0 0 40px ${exp.color}` 
                    : `0 0 10px ${exp.color}40`,
                }}
                onMouseEnter={() => setHoveredExp(idx)}
                onMouseLeave={() => setHoveredExp(null)}
                onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="p-4 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0"
                    style={{ 
                      backgroundColor: `${exp.color}20`,
                      border: `2px solid ${exp.color}`,
                    }}
                  >
                    <Icon size={32} style={{ color: exp.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 
                        className="font-bold text-xl transition-all duration-300 group-hover:text-2xl"
                        style={{ color: exp.color }}
                      >
                        {exp.role}
                      </h3>
                      <span className="px-3 py-1 rounded text-xs font-bold" style={{ 
                        backgroundColor: `${exp.color}20`,
                        color: exp.color,
                        border: `1px solid ${exp.color}`,
                      }}>
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className="flex items-center gap-2 text-terminalGray">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-terminalGray">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-terminalGray text-sm leading-relaxed group-hover:text-terminalGreen transition-colors">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {expandedExp === idx && (
                  <div 
                    className="mt-4 pt-4 border-t-2 animate-slideIn"
                    style={{ borderColor: exp.color }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Activity size={18} style={{ color: exp.color }} />
                      <h4 className="font-bold" style={{ color: exp.color }}>KEY ACHIEVEMENTS:</h4>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-2 text-terminalGray text-sm">
                          <span style={{ color: exp.color }}>{'>>'}</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="absolute top-2 right-2 text-xs opacity-50 animate-flicker" style={{ color: exp.color }}>
                  {expandedExp === idx ? '▼' : '▶'}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" style={{ color: exp.color }}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-lg border-2" style={{ borderColor: '#00ff00', backgroundColor: 'rgba(0, 255, 0, 0.05)' }}>
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={20} style={{ color: '#00ff00' }} />
            <span className="font-bold" style={{ color: '#00ff00' }}>CAREER TIMELINE:</span>
          </div>
          <div className="text-terminalGray text-sm">
            <p>{'$'} Currently building expertise in DevOps and Cloud Engineering</p>
            <p>{'$'} Seeking opportunities to contribute to scalable infrastructure systems</p>
          </div>
        </div>
      </div>
    </OutputBlock>
  );
}