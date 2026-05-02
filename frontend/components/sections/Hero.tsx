'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HeroEarth from '../HeroEarth';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-[1000px]">
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="glow-orb glow-orb-1" aria-hidden="true" />
        <div className="glow-orb glow-orb-2" aria-hidden="true" />
        <div className="glow-orb glow-orb-3" aria-hidden="true" />
      </motion.div>

      {/* Massive 3D Earth behind hero */}
      <HeroEarth />
      
      <motion.div 
        style={{ opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-xl relative z-10 flex flex-col items-center text-center transform-gpu"
      >
        <motion.div variants={itemVariants} className="mb-8 relative group">
          <div className="absolute inset-0 bg-[#07CB6C] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full" />
          <span className="section-label relative border border-[#07CB6C]/40 bg-[#07CB6C]/5 backdrop-blur-xl hover:scale-105 transition-transform duration-500 py-2 px-6">
            <span className="animate-pulse mr-2 w-2 h-2 rounded-full bg-[#07CB6C] inline-block" />
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 max-w-6xl mix-blend-plus-lighter"
          style={{ lineHeight: 1.05 }}
        >
          <span className="block overflow-hidden pb-2">
            <motion.span className="block" variants={itemVariants}>Engineering the</motion.span>
          </span>
          <span className="block overflow-hidden pb-4">
            <motion.span className="block gradient-text drop-shadow-[0_0_30px_rgba(7,203,108,0.4)]" variants={itemVariants}>
              Future of Cloud
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[#8fa89a] text-lg md:text-2xl max-w-3xl mb-12 font-medium leading-relaxed"
        >
          Hi, I'm Kanhaiya Tiwari. A DevOps & Cloud Engineer specializing in Kubernetes, AWS, Terraform, and building scalable CI/CD pipelines.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#projects" className="btn-neon text-lg px-10 py-5 group relative overflow-hidden isolate">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            View My Work
            <motion.svg 
              className="ml-2 inline-block group-hover:translate-x-2 transition-transform" 
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </motion.svg>
          </a>
          <a href="#contact" className="btn-ghost text-lg px-10 py-5 hover:bg-[#07CB6C]/10 border-[#07CB6C]/50 hover:border-[#07CB6C] transition-all duration-300 backdrop-blur-sm">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl border-t border-[rgba(7,203,108,0.2)] pt-12 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#07CB6C]/50 to-transparent blur-sm" />
          {[
            { label: 'Cloud Certified', value: 'AWS' },
            { label: 'Orchestration', value: 'K8s' },
            { label: 'IaC Mastery', value: 'Terraform' },
            { label: 'Automation', value: 'CI/CD' }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center group cursor-default"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-[#07CB6C] font-mono text-3xl md:text-5xl font-bold mb-2 drop-shadow-[0_0_15px_rgba(7,203,108,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(7,203,108,0.8)] transition-all">
                {stat.value}
              </span>
              <span className="text-[#4a6358] text-sm md:text-base uppercase tracking-widest font-bold group-hover:text-[#8fa89a] transition-colors">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50"
      >
        <span className="text-xs font-mono text-[#07CB6C] tracking-[0.3em] uppercase">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#07CB6C] to-transparent origin-top animate-scan-line" />
      </motion.div>
    </section>
  );
}
