'use client';

import OutputBlock from '../../components/OutputBlock';
import { 
  Terminal, Code, GitBranch, Workflow, Cloud, Container, 
  FileCode, Settings, Activity, Box, Sparkles, Server,
  Shield, Database, Network, Zap, Lock, Cpu, HardDrive
} from 'lucide-react';
import { useState } from 'react';

const skills = [
  { 
    name: 'Linux & System Administration', 
    icon: Terminal, 
    symbol: '🐧',
    color: '#00ff00',
    level: 90,
    description: 'Master-level Linux administration and system management'
  },
  { 
    name: 'Bash & Python Scripting', 
    icon: Code, 
    symbol: '⚡',
    color: '#00bfff',
    level: 85,
    description: 'Advanced scripting for automation and system tasks'
  },
  { 
    name: 'Git & GitHub', 
    icon: GitBranch, 
    symbol: '🔀',
    color: '#ff5555',
    level: 88,
    description: 'Version control and collaborative development'
  },
  { 
    name: 'Jenkins & GitHub Actions', 
    icon: Workflow, 
    symbol: '🔄',
    color: '#ffff00',
    level: 82,
    description: 'CI/CD pipeline automation and orchestration'
  },
  { 
    name: 'AWS Cloud Services', 
    icon: Cloud, 
    symbol: '☁️',
    color: '#ff00ff',
    level: 80,
    description: 'Cloud infrastructure and services management'
  },
  { 
    name: 'Kubernetes Orchestration', 
    icon: Container, 
    symbol: '☸️',
    color: '#00ffff',
    level: 78,
    description: 'Container orchestration and cluster management'
  },
  { 
    name: 'Terraform (IaC)', 
    icon: FileCode, 
    symbol: '🏗️',
    color: '#ff8800',
    level: 83,
    description: 'Infrastructure as Code and provisioning'
  },
  { 
    name: 'Ansible Automation', 
    icon: Settings, 
    symbol: '⚙️',
    color: '#00ff41',
    level: 81,
    description: 'Configuration management and automation'
  },
  { 
    name: 'Grafana & Monitoring', 
    icon: Activity, 
    symbol: '📊',
    color: '#ff0080',
    level: 79,
    description: 'Monitoring, visualization, and observability'
  },
  { 
    name: 'Docker & Containerization', 
    icon: Box, 
    symbol: '📦',
    color: '#0080ff',
    level: 87,
    description: 'Container creation and management'
  },
  { 
    name: 'Prompt Engineering', 
    icon: Sparkles, 
    symbol: '✨',
    color: '#aa00ff',
    level: 75,
    description: 'AI interaction and prompt optimization'
  },
];

export default function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  return (
    <OutputBlock>
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 animate-glow" style={{ 
            color: '#00ff00',
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
          }}>
            {'>'} SKILLS MATRIX
          </h2>
          <p className="text-terminalGray text-sm animate-flicker">
            $ Loading skill database... [COMPLETE]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-lg border-2 cursor-pointer clickable glitch transition-all duration-300 group relative overflow-hidden"
                style={{
                  borderColor: skill.color,
                  backgroundColor: hoveredSkill === idx ? `${skill.color}20` : 'rgba(0, 0, 0, 0.5)',
                  boxShadow: hoveredSkill === idx 
                    ? `0 0 20px ${skill.color}, 0 0 40px ${skill.color}` 
                    : `0 0 10px ${skill.color}40`,
                  animationDelay: `${idx * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => setSelectedSkill(selectedSkill === idx ? null : idx)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div 
                    className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{ 
                      backgroundColor: `${skill.color}20`,
                      border: `2px solid ${skill.color}`,
                    }}
                  >
                    <Icon size={32} style={{ color: skill.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{skill.symbol}</span>
                      <h3 
                        className="font-bold text-lg transition-all duration-300 group-hover:text-xl"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-500 rounded-full"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                            boxShadow: `0 0 10px ${skill.color}`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
                
                {selectedSkill === idx && (
                  <div 
                    className="mt-3 pt-3 border-t-2 animate-slideIn"
                    style={{ borderColor: skill.color }}
                  >
                    <p className="text-terminalGray text-sm">{skill.description}</p>
                  </div>
                )}

                <div className="absolute top-2 right-2 text-xs opacity-50 animate-flicker" style={{ color: skill.color }}>
                  {'>'}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" style={{ color: skill.color }}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-lg border-2" style={{ borderColor: '#00ff00', backgroundColor: 'rgba(0, 255, 0, 0.05)' }}>
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={20} style={{ color: '#00ff00' }} />
            <span className="font-bold" style={{ color: '#00ff00' }}>SYSTEM STATUS:</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00ff00' }}></div>
              <span className="text-terminalGray">Core Skills: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00bfff' }}></div>
              <span className="text-terminalGray">Cloud Stack: ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ff5555' }}></div>
              <span className="text-terminalGray">Automation: RUNNING</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ffff00' }}></div>
              <span className="text-terminalGray">Monitoring: ENABLED</span>
            </div>
          </div>
        </div>
      </div>
    </OutputBlock>
  );
}