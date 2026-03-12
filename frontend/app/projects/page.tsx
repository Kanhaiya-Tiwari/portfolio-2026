'use client';

import OutputBlock from '../../components/OutputBlock';
import { FolderOpen, ExternalLink, Github, Code, Cloud, Server, Zap, Database, Shield } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    name: 'Portfolio 2026 (Terminal Theme)',
    description: 'Terminal/hacker-themed portfolio built with Next.js App Router + Tailwind. Deployed on GitHub Pages with custom domain and static export.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
    icon: Code,
    color: '#00ff00',
    status: 'LIVE',
    github: 'https://github.com/Kanhaiya-Tiwari/portfolio-2026',
    demo: 'https://info.buildwithkanha.shop'
  },
  {
    name: 'Docker Fullstack',
    description: 'Full-stack app containerized with Docker. Focus on reproducible local dev, networking, service separation, and production-style workflows.',
    tech: ['Docker', 'Docker Compose', 'Linux', 'Networking'],
    icon: Database,
    color: '#00bfff',
    status: 'ACTIVE',
    github: 'https://github.com/Kanhaiya-Tiwari/docker_fullstack',
    demo: null
  },
  {
    name: 'Terraform Exercises',
    description: 'Hands-on Terraform practice repo covering core IaC concepts: providers, modules, state, variables, outputs, and reusable patterns.',
    tech: ['Terraform', 'IaC', 'Cloud', 'HCL'],
    icon: Cloud,
    color: '#ff8800',
    status: 'LEARNING',
    github: 'https://github.com/Kanhaiya-Tiwari/Terraform-exercises',
    demo: null
  },
  {
    name: 'Ansible Exercises',
    description: 'Ansible practice repo focused on automation basics: inventory, playbooks, roles, templates, handlers, and idempotent runs.',
    tech: ['Ansible', 'Automation', 'Linux', 'YAML'],
    icon: Zap,
    color: '#ff00ff',
    status: 'LEARNING',
    github: 'https://github.com/Kanhaiya-Tiwari/ansible_exercises',
    demo: null
  },
  {
    name: 'Kubernetes Practice',
    description: 'Kubernetes learning repo with manifests and notes. Focus on core objects, deployments, services, config/secrets, and debugging.',
    tech: ['Kubernetes', 'Containers', 'YAML', 'Troubleshooting'],
    icon: Server,
    color: '#ff5555',
    status: 'LEARNING',
    github: 'https://github.com/Kanhaiya-Tiwari/kubernetes-Practice',
    demo: null
  },
  {
    name: 'GitHub Actions Workflow Practice',
    description: 'CI/CD practice workflows: triggers, jobs, caching, artifacts, and deployment patterns using GitHub Actions.',
    tech: ['GitHub Actions', 'CI/CD', 'YAML', 'Automation'],
    icon: Shield,
    color: '#00ffff',
    status: 'ACTIVE',
    github: 'https://github.com/Kanhaiya-Tiwari/Github-Action-workflow-Practice',
    demo: null
  },
  {
    name: 'Auto-Healing System (Docker Project)',
    description: 'Automation project exploring health checks and restart strategies to keep services running reliably (auto-healing approach).',
    tech: ['Docker', 'Python', 'Reliability', 'Monitoring'],
    icon: Database,
    color: '#ffff00',
    status: 'ACTIVE',
    github: 'https://github.com/Kanhaiya-Tiwari/auto-healing-system-docker-project',
    demo: null
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
          <p className="text-terminalGray text-lg animate-flicker font-medium">
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
                      <Icon size={32} style={{ color: project.color }} />
                    </div>
                    <div>
                      <h3 
                        className="font-bold text-xl transition-all duration-300 group-hover:text-2xl mb-1"
                        style={{ color: project.color }}
                      >
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: project.color }}></div>
                        <span className="text-sm font-bold" style={{ color: project.color }}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <FolderOpen size={20} style={{ color: project.color }} className="opacity-50" />
                </div>

                <p className="text-terminalGray text-base mb-4 group-hover:text-terminalGreen transition-colors font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded text-sm font-bold transition-all duration-300 hover:scale-110"
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
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-all duration-300 hover:scale-110 clickable"
                    style={{ color: project.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = `0 0 10px ${project.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm transition-all duration-300 hover:scale-110 clickable"
                      style={{ color: project.color }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textShadow = `0 0 10px ${project.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.textShadow = 'none';
                      }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <div className="absolute top-2 right-2 text-sm opacity-50 animate-flicker font-bold" style={{ color: project.color }}>
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