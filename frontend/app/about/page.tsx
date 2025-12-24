'use client';

import OutputBlock from '../../components/OutputBlock';
import { User, GraduationCap, MapPin, Briefcase, Target, Code, Cloud, Server } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const sections = [
    {
      icon: User,
      title: 'IDENTITY',
      color: '#00ff00',
      content: 'I am Kanhaiya Tiwari, a final-year B.Tech Computer Science Engineering student at AKS University, Satna, with a focused interest in DevOps and Cloud Engineering. I come from Jabalpur, India, and I am building my career around designing, automating, and managing reliable infrastructure systems.'
    },
    {
      icon: Code,
      title: 'CORE STRENGTHS',
      color: '#00bfff',
      content: 'My core strength lies in Linux system administration, cloud fundamentals, and DevOps tooling. I have hands-on experience working with Docker, Kubernetes, AWS, Git, GitHub, Jenkins, GitHub Actions, Terraform, Ansible, and Grafana, along with Bash and Python scripting for automation. I believe strongly in Infrastructure as Code, CI/CD best practices, and monitoring-driven reliability.'
    },
    {
      icon: Briefcase,
      title: 'CURRENT ROLE',
      color: '#ff5555',
      content: 'I am currently working as a Linux, Cloud & DevOps Engineer Intern at Codenixia (Rostris Verse Pvt. Ltd.), Pune, where I am gaining real-world exposure to industry workflows. During this internship, I am being trained in Linux server configuration, cloud computing, virtualization, monitoring, automation, and DevOps pipelines. I am also contributing to an integrated intelligent cloud-based application involving Docker containers, Python programming, CI/CD pipelines, monitoring frameworks, and distributed systems running on Linux.'
    },
    {
      icon: Target,
      title: 'GOALS',
      color: '#ffff00',
      content: 'My goal is to work as a DevOps or Cloud Engineer in a growth-focused organization, where I can contribute to building stable, scalable systems while continuously learning and improving as an engineer.'
    },
  ];

  return (
    <OutputBlock>
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 animate-glow" style={{ 
            color: '#00ff00',
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
          }}>
            {'>'} ABOUT.TXT
          </h2>
          <p className="text-terminalGray text-lg animate-flicker font-medium">
            $ Loading profile data... [COMPLETE]
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-lg border-2 cursor-pointer clickable transition-all duration-300 group relative overflow-hidden"
                style={{
                  borderColor: section.color,
                  backgroundColor: hoveredSection === idx ? `${section.color}15` : 'rgba(0, 0, 0, 0.3)',
                  boxShadow: hoveredSection === idx 
                    ? `0 0 20px ${section.color}, 0 0 40px ${section.color}` 
                    : `0 0 10px ${section.color}40`,
                  animationDelay: `${idx * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredSection(idx)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0"
                    style={{ 
                      backgroundColor: `${section.color}20`,
                      border: `2px solid ${section.color}`,
                    }}
                  >
                    <Icon size={28} style={{ color: section.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm opacity-50 font-bold" style={{ color: section.color }}>{'$'}</span>
                      <h3 
                        className="font-bold text-xl transition-all duration-300 group-hover:text-2xl"
                        style={{ color: section.color }}
                      >
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-terminalGray text-base leading-relaxed group-hover:text-terminalGreen transition-colors font-normal">
                      {section.content}
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 text-xs opacity-50 animate-flicker" style={{ color: section.color }}>
                  {'>'}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" style={{ color: section.color }}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: GraduationCap, label: 'B.Tech CSE', color: '#00ff00' },
            { icon: MapPin, label: 'Jabalpur, India', color: '#00bfff' },
            { icon: Cloud, label: 'Cloud Focus', color: '#ff5555' },
            { icon: Server, label: 'DevOps', color: '#ffff00' },
          ].map((info, idx) => {
            const Icon = info.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-lg border-2 text-center clickable transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: info.color,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  boxShadow: `0 0 10px ${info.color}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${info.color}, 0 0 40px ${info.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 10px ${info.color}40`;
                }}
              >
                <Icon size={32} style={{ color: info.color }} className="mx-auto mb-2" />
                <p className="text-sm font-bold" style={{ color: info.color }}>{info.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </OutputBlock>
  );
}