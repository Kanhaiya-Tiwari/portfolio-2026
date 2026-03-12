'use client';

import OutputBlock from '../../components/OutputBlock';
import { Briefcase, Calendar, MapPin, Code, Cloud, Server, Settings, Activity } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  { 
    company: 'Codenixia', 
    role: 'Internship Trainee — DevOps & Cloud Engineer Intern', 
    location: 'Satna, Madhya Pradesh, India',
    duration: 'Dec 2025 – Present',
    description: 'DevOps & Cloud Engineer intern. Working on Linux fundamentals, Docker-based workflows, CI/CD basics, and deploying real-world cloud applications.',
    achievements: [
      'Linux administration practice and system troubleshooting',
      'Containerization with Docker and service connectivity',
      'CI/CD exposure with GitHub Actions-style workflows',
      'Hands-on cloud fundamentals and deployment basics'
    ],
    color: '#00ff00',
    icon: Server
  },
  { 
    company: 'Excelerate', 
    role: 'Internship Trainee — Mobile App Development (Flutter)', 
    location: 'Remote',
    duration: 'Oct 2025 – Nov 2025',
    description: 'Mobile app development with Flutter. Built cross-platform UI flows and learned practical development workflows.',
    achievements: [
      'Flutter UI implementation and app workflow building',
      'Version control basics and team-style iteration',
      'Understanding deployment lifecycle for mobile apps'
    ],
    color: '#00bfff',
    icon: Cloud
  },
  { 
    company: 'TechnoHacks EduTech', 
    role: 'Internship Trainee — DevOps Engineer Trainee', 
    location: 'Remote',
    duration: 'Jun 2025 – Jul 2025',
    description: 'Worked as a DevOps engineer trainee. Practiced Linux, Git basics, and container fundamentals while learning CI/CD concepts.',
    achievements: [
      'Linux and CLI fundamentals',
      'Git + GitHub workflow practice',
      'Docker basics and containerized runs',
      'CI/CD concepts and automation mindset'
    ],
    color: '#ff5555',
    icon: Code
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
          <p className="text-terminalGray text-lg animate-flicker font-medium">
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
                        className="font-bold text-2xl transition-all duration-300 group-hover:text-3xl"
                        style={{ color: exp.color }}
                      >
                        {exp.role}
                      </h3>
                      <span className="px-3 py-1 rounded text-sm font-bold" style={{ 
                        backgroundColor: `${exp.color}20`,
                        color: exp.color,
                        border: `1px solid ${exp.color}`,
                      }}>
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-3 text-base font-medium">
                      <div className="flex items-center gap-2 text-terminalGray">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-terminalGray">
                        <MapPin size={18} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-terminalGray text-base leading-relaxed group-hover:text-terminalGreen transition-colors font-normal">
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
                      <Activity size={20} style={{ color: exp.color }} />
                      <h4 className="font-bold text-lg" style={{ color: exp.color }}>KEY ACHIEVEMENTS:</h4>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-2 text-terminalGray text-base font-medium">
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
          <div className="text-terminalGray text-base">
            <p>{'$'} Currently building expertise in DevOps and Cloud Engineering</p>
            <p>{'$'} Seeking opportunities to contribute to scalable infrastructure systems</p>
          </div>
        </div>
      </div>
    </OutputBlock>
  );
}