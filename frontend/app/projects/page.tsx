'use client';

import OutputBlock from '../../components/OutputBlock';
import { FolderOpen, ExternalLink, Github, Code, Cloud, Server, Zap, Database } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    name: 'Portfolio 2026',
    description: 'Modern terminal-themed portfolio website built with Next.js, React, and TypeScript. Features hacker-style animations, interactive components, and a full-stack architecture with Go backend.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Go', 'PostgreSQL'],
    icon: Code,
    color: '#00ff00',
    status: 'LIVE',
    github: 'https://github.com/Kanhaiya-Tiwari/portfolio-2026.git',
    demo: null
  },
  {
    name: 'Docker Fullstack Application',
    description: 'Full-stack application containerized with Docker, demonstrating microservices architecture, container orchestration, and DevOps best practices.',
    tech: ['Docker', 'Docker Compose', 'Microservices', 'CI/CD'],
    icon: Database,
    color: '#00bfff',
    status: 'ACTIVE',
    github: 'https://github.com/Kanhaiya-Tiwari/docker_fullstack.git',
    demo: null
  },
  {
    name: 'Sharda Boys Hostel Management System',
    description: 'Complete hostel management system for Sharda Boys Hostel. Includes room booking, complaint management, admin dashboard, and student portal. Built with PHP and MySQL.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
    icon: Server,
    color: '#ff5555',
    status: 'DEPLOYED',
    github: 'https://github.com/Kanhaiya-Tiwari/7th-semester-project.git',
    demo: null
  },
  {
    name: 'Flask Web Application',
    description: 'Web application built with Python Flask framework. Demonstrates RESTful API design, database integration, and modern web development practices.',
    tech: ['Python', 'Flask', 'REST API', 'HTML', 'CSS'],
    icon: Cloud,
    color: '#ffff00',
    status: 'ACTIVE',
    github: 'https://github.com/Kanhaiya-Tiwari/Flask.git',
    demo: null
  },
  {
    name: 'Flask with MongoDB',
    description: 'Full-stack application using Flask backend with MongoDB database. Features NoSQL data management, API endpoints, and dynamic web interface.',
    tech: ['Python', 'Flask', 'MongoDB', 'NoSQL', 'API'],
    icon: Zap,
    color: '#ff00ff',
    status: 'ACTIVE',
    github: 'https://github.com/Kanhaiya-Tiwari/Flask_with-_mangoDB.git',
    demo: null
  },
  {
    name: 'Hostel Management System (Alternative)',
    description: 'Alternative implementation of hostel management system with enhanced features for student accommodation, room allocation, and administrative controls.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Web Development'],
    icon: Server,
    color: '#00ffff',
    status: 'COMPLETED',
    github: 'https://github.com/Kanhaiya-Tiwari/Sharda_Boys_hostel.git',
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
                    <Github size={16} />
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
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
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