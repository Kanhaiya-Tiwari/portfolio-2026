'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <section id="about" className="section-padding relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[#07CB6C]/5 blur-[200px] pointer-events-none -translate-y-1/2" />
      
      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="mb-10">
              <span className="section-label mb-6">About Me</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter mix-blend-plus-lighter">
                Architecting <br/>
                <span className="text-[#07CB6C] drop-shadow-[0_0_20px_rgba(7,203,108,0.4)]">Digital Infrastructure</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-[#8fa89a] text-xl leading-relaxed font-medium">
              <p>
                I am Kanhaiya Tiwari, a DevOps Engineer Intern at Codenixia. I specialize in deploying containerized microservices using Docker and Kubernetes on AWS EKS, enhancing efficiency by streamlining release processes.
              </p>
              <p>
                I collaborate on building secure CI/CD pipelines with GitHub Actions, integrating Trivy and Semgrep for automated security checks, and managing cloud infrastructure using Terraform. 
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-3xl mt-12 hover:shadow-[0_0_40px_rgba(7,203,108,0.15)] transition-all duration-500 border border-[#07CB6C]/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#07CB6C]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <h3 className="text-[#e8f5ee] font-black text-2xl mb-6 flex items-center gap-4">
                  <span className="p-2 rounded-xl bg-[#07CB6C]/10 text-[#07CB6C]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </span>
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="group/edu">
                    <h4 className="text-[#e8f5ee] font-bold text-lg group-hover/edu:text-[#07CB6C] transition-colors">B.Tech, Computer Science Engineering</h4>
                    <p className="text-base text-[#07CB6C]/80 font-mono mt-1">AKS University Satna | Jan 2022 - Jun 2026</p>
                  </div>
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#07CB6C]/50 to-transparent" />
                  <div className="group/edu">
                    <h4 className="text-[#e8f5ee] font-bold text-lg group-hover/edu:text-[#07CB6C] transition-colors">Higher Secondary</h4>
                    <p className="text-base text-[#07CB6C]/80 font-mono mt-1">Saraswati Vidhya Mandir | Jul 2012 - Apr 2021</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            style={{ scale, rotateY }}
            className="relative perspective-[1000px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#07CB6C]/30 to-transparent blur-3xl rounded-[3rem] animate-pulse" />
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass-card rounded-[3rem] p-3 relative z-10 border border-[#07CB6C]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative bg-[#010403] border border-white/5">
                {/* Code Editor Mockup */}
                <div className="absolute inset-0 p-8 font-mono text-base md:text-lg leading-relaxed text-[#8fa89a] flex flex-col">
                  <div className="flex gap-3 mb-8 border-b border-white/5 pb-6">
                    <div className="w-4 h-4 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <div className="w-4 h-4 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                    <div className="w-4 h-4 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div className="flex-1 overflow-hidden space-y-2">
                    <p><span className="text-[#07CB6C] font-bold">import</span> <span className="text-blue-400">{"{"}</span> Cloud <span className="text-blue-400">{"}"}</span> <span className="text-[#07CB6C] font-bold">from</span> <span className="text-yellow-300">'@aws/eks'</span>;</p>
                    <p className="mt-4"><span className="text-purple-400 font-bold">const</span> engineer <span className="text-purple-400 font-bold">=</span> <span className="text-blue-400">{"{"}</span></p>
                    <p className="pl-6">name: <span className="text-yellow-300">"Kanhaiya Tiwari"</span>,</p>
                    <p className="pl-6">role: <span className="text-yellow-300">"DevOps Engineer"</span>,</p>
                    <p className="pl-6">location: <span className="text-yellow-300">"Pune, India"</span>,</p>
                    <p className="pl-6">focus: <span className="text-yellow-300">"Security & Automation"</span>,</p>
                    <p className="pl-6">certifications: <span className="text-blue-400">[</span></p>
                    <p className="pl-12 text-white/90">"RHCSA",</p>
                    <p className="pl-12 text-white/90">"AWS Solutions Architect"</p>
                    <p className="pl-6"><span className="text-blue-400">]</span>,</p>
                    <p><span className="text-blue-400">{"}"}</span>;</p>
                    <p className="mt-6"><span className="text-[#07CB6C] font-bold">await</span> Cloud.deploy(engineer);</p>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mt-8 flex items-center gap-3 bg-[#07CB6C]/10 p-4 rounded-xl border border-[#07CB6C]/20"
                    >
                      <span className="text-[#07CB6C] font-bold">✓ Deployment successful in 0.84s</span>
                      <span className="w-3 h-6 bg-[#07CB6C] animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
