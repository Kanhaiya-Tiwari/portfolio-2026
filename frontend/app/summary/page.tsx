'use client';

import OutputBlock from '../../components/OutputBlock';
import { User, Code, Cloud, Server, Target, Zap, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function SummaryPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const highlights = [
    { icon: User, text: 'DevOps & Cloud Engineer with a passion for automation, cloud-native technologies, and building scalable infrastructure.', color: '#00ff00' },
    { icon: Code, text: 'Currently a 4th year B.Tech Computer Science Engineering student at AKS University Satna.', color: '#00bfff' },
    { icon: Cloud, text: 'Experienced in Linux, scripting, CI/CD, and cloud platforms.', color: '#ff5555' },
    { icon: Zap, text: 'Always eager to learn and solve real-world problems.', color: '#ffff00' },
  ];

  const skills = [
    'Linux System Administration',
    'Cloud Infrastructure (AWS)',
    'Container Orchestration (Kubernetes, Docker)',
    'CI/CD Pipelines (Jenkins, GitHub Actions)',
    'Infrastructure as Code (Terraform)',
    'Configuration Management (Ansible)',
    'Monitoring & Observability (Grafana)',
    'Scripting (Bash, Python)',
  ];

  return (
    <OutputBlock>
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 animate-glow" style={{ 
            color: '#00ff00',
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
          }}>
            {'>'} SUMMARY.TXT
          </h2>
          <p className="text-terminalGray text-lg animate-flicker font-medium">
            $ Loading professional summary... [COMPLETE]
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-lg border-2 cursor-pointer clickable transition-all duration-300 group relative overflow-hidden"
                style={{
                  borderColor: highlight.color,
                  backgroundColor: hoveredItem === idx ? `${highlight.color}15` : 'rgba(0, 0, 0, 0.3)',
                  boxShadow: hoveredItem === idx 
                    ? `0 0 20px ${highlight.color}, 0 0 40px ${highlight.color}` 
                    : `0 0 10px ${highlight.color}40`,
                }}
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0"
                    style={{ 
                      backgroundColor: `${highlight.color}20`,
                      border: `2px solid ${highlight.color}`,
                    }}
                  >
                    <Icon size={28} style={{ color: highlight.color }} />
                  </div>
                  <p className="text-terminalGray text-base leading-relaxed group-hover:text-terminalGreen transition-colors flex-1 font-normal">
                    {highlight.text}
                  </p>
                </div>
                <div className="absolute top-2 right-2 text-xs opacity-50 animate-flicker" style={{ color: highlight.color }}>
                  {'>'}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" style={{ color: highlight.color }}></div>
              </div>
            );
          })}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00bfff' }}>
            <Server size={28} />
            {'>'} KEY COMPETENCIES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border-2 flex items-center gap-3 clickable transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: '#00ff00',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px #00ff00, 0 0 40px #00ff00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.2)';
                }}
              >
                <CheckCircle size={20} style={{ color: '#00ff00' }} />
                <span className="text-terminalGray text-base font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg border-2" style={{ borderColor: '#00ff00', backgroundColor: 'rgba(0, 255, 0, 0.05)' }}>
          <div className="flex items-center gap-2 mb-2">
            <Target size={24} style={{ color: '#00ff00' }} />
            <span className="font-bold text-lg" style={{ color: '#00ff00' }}>CAREER OBJECTIVE:</span>
          </div>
          <p className="text-terminalGray text-base font-normal">
            Seeking opportunities to contribute to scalable infrastructure systems as a DevOps or Cloud Engineer, 
            where I can apply my skills in automation, containerization, and cloud technologies while continuously 
            learning and growing in a dynamic environment.
          </p>
        </div>
      </div>
    </OutputBlock>
  );
}
