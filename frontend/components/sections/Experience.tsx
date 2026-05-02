'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experience = [
  { 
    company: "Codenixia", 
    location: "Pune District",
    role: "DevOps Engineer Intern", 
    duration: "November 2025 - April 2026", 
    description: "Deployed containerized microservices using Docker and Kubernetes on AWS EKS, cutting manual steps from 8 to 2. Built GitHub Actions CI/CD pipeline with Trivy container scanning and Semgrep SAST. Provisioned 3-tier AWS infrastructure using Terraform. Configured Prometheus + Grafana monitoring."
  },
  { 
    company: "TechnoHacks EduTech", 
    location: "Nashik",
    role: "DevOps Trainee", 
    duration: "June 2025 - July 2025", 
    description: "Practiced Linux system administration, Git workflows, and basic Docker containerization. Completed hands-on labs covering AWS EC2 provisioning, S3 bucket management, and IAM role configuration." 
  }
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section-padding relative min-h-screen" ref={ref}>
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#07CB6C]/20 to-transparent" />
      
      <div className="container-xl max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="section-label mb-6">Journey</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            Professional <span className="text-[#07CB6C] drop-shadow-[0_0_20px_rgba(7,203,108,0.5)]">Experience</span>
          </h2>
        </motion.div>

        <div className="relative pl-4 md:pl-0">
          <motion.div 
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#07CB6C] via-[#07CB6C]/50 to-transparent origin-top"
            style={{ scaleY: lineScale }}
          />
          
          <div className="space-y-24">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#020705] border-4 border-[#07CB6C] shadow-[0_0_20px_rgba(7,203,108,0.8)] z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                  
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="glass-card rounded-3xl p-8 md:p-10 hover:border-[#07CB6C]/50 hover:shadow-[0_0_40px_rgba(7,203,108,0.15)] transition-all duration-500 relative overflow-hidden group hover:-translate-y-2">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#07CB6C]/15 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className={`flex flex-col mb-6 gap-3 ${isEven ? 'md:items-end' : 'items-start'}`}>
                        <span className="font-mono text-sm md:text-base font-bold text-[#020705] bg-gradient-to-r from-[#07CB6C] to-[#05a358] px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(7,203,108,0.5)]">
                          {exp.duration}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black text-[#e8f5ee] group-hover:text-[#07CB6C] transition-colors duration-300 tracking-tight">{exp.role}</h3>
                      </div>
                      
                      <h4 className={`text-xl font-bold text-[#8fa89a] mb-6 flex items-center gap-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.company} <span className="text-sm font-mono opacity-60">| {exp.location}</span>
                      </h4>
                      <p className="text-[#4a6358] leading-relaxed relative z-10 text-lg group-hover:text-[#8fa89a] transition-colors duration-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
