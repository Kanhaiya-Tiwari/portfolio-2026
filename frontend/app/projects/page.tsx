'use client';

import OutputBlock from '../../components/OutputBlock';
import { FolderOpen, ExternalLink, Github, Code, Cloud, Server, Zap, Database } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    name: 'Cloud Infrastructure Automation',
    description: 'Automated cloud infrastructure provisioning using Terraform and Ansible for scalable deployments.',
    tech: ['Terraform', 'Ansible', 'AWS', 'Docker'],
    icon: Cloud,
    color: '#00bfff',
    status: 'ACTIVE'
  },
  {
    name: 'CI/CD Pipeline System',
    description: 'Complete CI/CD pipeline implementation with Jenkins and GitHub Actions for automated testing and deployment.',
    tech: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes'],
    icon: Zap,
    color: '#ffff00',
    status: 'DEPLOYED'
  },
  {
    name: 'Kubernetes Cluster Management',
    description: 'Managed Kubernetes clusters with monitoring, logging, and auto-scaling capabilities.',
    tech: ['Kubernetes', 'Grafana', 'Prometheus', 'Helm'],
    icon: Server,
    color: '#ff5555',
    status: 'PRODUCTION'
  },
  {
    name: 'Container Orchestration Platform',
    description: 'Docker-based containerization platform with automated build and deployment workflows.',
    tech: ['Docker', 'Docker Compose', 'Linux', 'Bash'],
    icon: Database,
    color: '#00ff00',
    status: 'ACTIVE'
  },
  {
    name: 'Infrastructure Monitoring Dashboard',
    description: 'Real-time monitoring dashboard for infrastructure metrics and system health.',
    tech: ['Grafana', 'Prometheus', 'Python', 'Linux'],
    icon: Code,
    color: '#ff00ff',
    status: 'DEPLOYED'
  },
];

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <OutputBlock>
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 animate-glow" style={{ 
            color: '#00ff00',
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
          }}>
            {'>'} PROJECTS.REPO
          </h2>
          <p className="text-terminalGray text-sm animate-flicker">
            $ Scanning repository... [FOUND {projects.length} PROJECTS]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border-2 cursor-pointer clickable glitch transition-all duration-300 group relative overflow-hidden"
                style={{
                  borderColor: project.color,
                  backgroundColor: hoveredProject === idx ? `${project.color}15` : 'rgba(0, 0, 0, 0.5)',
                  boxShadow: hoveredProject === idx 
                    ? `0 0 20px ${project.color}, 0 0 40px ${project.color}` 
                    : `0 0 10px ${project.color}40`,
                  animationDelay: `${idx * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        border: `2px solid ${project.color}`,
                      }}
                    >
                      <Icon size={28} style={{ color: project.color }} />
                    </div>
                    <div>
                      <h3 
                        className="font-bold text-lg transition-all duration-300 group-hover:text-xl mb-1"
                        style={{ color: project.color }}
                      >
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.color }}></div>
                        <span className="text-xs font-bold" style={{ color: project.color }}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <FolderOpen size={20} style={{ color: project.color }} className="opacity-50" />
                </div>

                <p className="text-terminalGray text-sm mb-4 group-hover:text-terminalGreen transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded text-xs font-bold transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                        border: `1px solid ${project.color}`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm transition-all duration-300 hover:scale-110"
                    style={{ color: project.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = `0 0 10px ${project.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm transition-all duration-300 hover:scale-110"
                    style={{ color: project.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = `0 0 10px ${project.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>

                <div className="absolute top-2 right-2 text-xs opacity-50 animate-flicker" style={{ color: project.color }}>
                  {'>'}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" style={{ color: project.color }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </OutputBlock>
  );
}