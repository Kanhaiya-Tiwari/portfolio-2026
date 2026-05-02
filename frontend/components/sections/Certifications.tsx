'use client';
import { motion } from 'framer-motion';

const certifications = [
  { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat", date: "2024" },
  { name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", date: "2024" },
  { name: "Python Essentials 1", issuer: "Cisco", date: "2023" },
  { name: "Deloitte Australia - Cyber Job Simulation", issuer: "Deloitte", date: "2023" }
];

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="certifications" className="section-padding relative min-h-screen flex items-center">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#07CB6C]/20 to-transparent" />
      
      <div className="container-xl relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6">Achievements</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            Licenses & <span className="text-[#07CB6C] drop-shadow-[0_0_20px_rgba(7,203,108,0.5)]">Certifications</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[1000px]"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
              className="glass-card rounded-3xl p-8 group cursor-crosshair h-full flex flex-col items-center text-center relative overflow-hidden transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#07CB6C]/30 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-20 h-20 rounded-2xl bg-[#07CB6C]/5 flex items-center justify-center border border-[#07CB6C]/20 mb-8 group-hover:bg-[#07CB6C]/20 group-hover:border-[#07CB6C]/50 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(7,203,108,0.3)]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#07CB6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform duration-500">
                  <path d="M12 15l-3 3-3-3v-5c0-3.3 2.7-6 6-6s6 2.7 6 6v5l-3 3z"/><path d="M12 21v-3"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-[#e8f5ee] mb-4 group-hover:text-[#07CB6C] transition-colors duration-300">{cert.name}</h3>
              <p className="text-[#8fa89a] text-base mt-auto font-medium">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
