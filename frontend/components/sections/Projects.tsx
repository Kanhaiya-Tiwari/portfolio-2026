'use client';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import Earth3D from '../Earth3D';

const projects = [
  { 
    name: "CloudKart E-Commerce", 
    description: "Production-grade EKS platform powered by GitOps, Terraform, and ArgoCD with Jenkins CI/CD.", 
    tags: ["EKS", "Terraform", "ArgoCD", "Jenkins"],
    link: "https://github.com/Kanhaiya-Tiwari/CloudKart-E_Commerce_Project.git"
  },
  { 
    name: "AI BankApp DevOps", 
    description: "Automated deployment pipeline for an AI-powered banking application focusing on security and DevSecOps practices.", 
    tags: ["DevSecOps", "AWS", "Docker", "SAST"],
    link: "https://github.com/Kanhaiya-Tiwari/AIBankapp.git"
  },
  { 
    name: "DevSecOps for DevTracker", 
    description: "End-to-end secure CI/CD pipeline featuring code scanning, dependency checks, and container image vulnerability scanning.", 
    tags: ["Security", "CI/CD", "Trivy", "SonarQube"],
    link: "https://github.com/Kanhaiya-Tiwari/DevSecOps-for-devtracker.git"
  },
  { 
    name: "Smart Rural Operations Agent", 
    description: "Cloud-native agent infrastructure for rural operations data management and automated reporting.", 
    tags: ["Cloud Native", "Agent", "Automation", "AWS"],
    link: "https://github.com/Kanhaiya-Tiwari/Smart-Rural-Operations-Agent.git"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 80 }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      className="project-card glass-card rounded-3xl p-8 group cursor-pointer h-full flex flex-col no-underline block relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(7,203,108,0.15), transparent 80%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-8 flex justify-between items-start">
          <div className="w-16 h-16 rounded-2xl bg-[#07CB6C]/5 flex items-center justify-center border border-[#07CB6C]/10 group-hover:bg-[#07CB6C]/20 group-hover:border-[#07CB6C]/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(7,203,108,0.3)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#07CB6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform duration-500">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div className="w-12 h-12 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#07CB6C] group-hover:border-[#07CB6C] transition-all duration-500 group-hover:rotate-45">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#e8f5ee] mb-4 group-hover:text-[#07CB6C] transition-colors duration-500">{project.name}</h3>
        <p className="text-[#8fa89a] text-lg leading-relaxed mb-8 flex-grow group-hover:text-white/80 transition-colors duration-500">{project.description}</p>
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag bg-[#010403] border border-[#07CB6C]/30 text-[#07CB6C] px-4 py-2 text-sm font-bold group-hover:shadow-[0_0_15px_rgba(7,203,108,0.2)] transition-shadow duration-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="projects" className="section-padding relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#07CB6C]/20 to-transparent" />

      {/* 3D Earth in background */}
      <Earth3D />

      <div className="container-xl relative z-10" ref={ref}>
        <motion.div style={{ scale, opacity }} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 origin-left">
          <div>
            <span className="section-label mb-6 inline-block">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Featured <br className="hidden md:block" />
              <span className="text-[#07CB6C] drop-shadow-[0_0_20px_rgba(7,203,108,0.4)]">Deployments</span>
            </h2>
          </div>
          <a href="https://github.com/Kanhaiya-Tiwari" target="_blank" rel="noopener noreferrer" className="btn-ghost self-start md:self-auto group hover:scale-105">
            View All on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-2 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
