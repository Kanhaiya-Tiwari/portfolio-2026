'use client';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

const skills = [
  { 
    category: "Infrastructure & Cloud", 
    items: [
      { name: "AWS Cloud Services", score: 85, color: "#FF9900", icon: "M11.08 17.62c.16... (AWS)" }, // I'll use real SVG paths below
      { name: "Terraform (IaC)", score: 80, color: "#844FBA" },
      { name: "Linux & System Admin", score: 85, color: "#FCC624" }
    ] 
  },
  { 
    category: "Containerization", 
    items: [
      { name: "Docker", score: 90, color: "#2496ED" },
      { name: "Kubernetes Orchestration", score: 85, color: "#326CE5" },
      { name: "Helm", score: 75, color: "#0F1689" }
    ] 
  },
  { 
    category: "CI/CD & Automation", 
    items: [
      { name: "Jenkins", score: 80, color: "#D24939" },
      { name: "GitHub Actions", score: 85, color: "#2088FF" },
      { name: "Ansible Automation", score: 75, color: "#EE0000" },
      { name: "Bash & Python", score: 80, color: "#3776AB" }
    ] 
  },
  { 
    category: "Monitoring & Others", 
    items: [
      { name: "Grafana", score: 80, color: "#F46800" },
      { name: "Prometheus", score: 75, color: "#E6522C" },
      { name: "Git & GitHub", score: 90, color: "#F05032" },
      { name: "Prompt Engineering", score: 85, color: "#07CB6C" }
    ] 
  }
];

// Reusing Simple-icons SVGs
const getIcon = (name: string) => {
  if (name.includes("AWS")) return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.08 17.62c.16.27.46.29.68.12.78-.58 2.05-1.39 3.52-1.39 1.41 0 2.29.74 2.29 2.09 0 1.6-1.32 2.56-3.23 2.56-1.57 0-3.13-.56-4.57-1.54-.25-.17-.4-.14-.52.09l-1.04 1.84c-.1.18-.08.35.08.52 1.68 1.25 3.82 2.01 5.95 2.01 3.56 0 5.86-1.87 5.86-4.75 0-2.31-1.37-3.5-3.8-4.22-1.57-.47-2.17-.81-2.17-1.48 0-.58.55-1.02 1.48-1.02 1.15 0 2.45.47 3.55 1.12.2.12.38.1.48-.09l1.09-1.85c.12-.2.08-.36-.08-.5a8.77 8.77 0 00-4.88-1.4c-3.11 0-5.32 1.74-5.32 4.38 0 2.2 1.35 3.23 3.69 3.93 1.77.53 2.33.91 2.33 1.63 0 .73-.7 1.18-1.68 1.18-1.35 0-2.8-.57-4.14-1.45-.2-.13-.4-.1-.52.12l-1.08 1.87zM2.08 10.96l2.12 6.32c.12.35.34.45.62.45h2.24c.3 0 .5-.12.61-.43l1.83-5.34 1.76 5.34c.11.31.3.43.6.43h2.25c.28 0 .5-.1.62-.45l2.08-6.32c.1-.28-.02-.45-.28-.45h-1.8c-.28 0-.46.12-.55.4l-1.08 3.97-1.5-4.04c-.11-.29-.32-.42-.61-.42h-1.63c-.3 0-.5.13-.61.42l-1.55 4.14-1.12-4.07c-.09-.28-.27-.4-.55-.4h-1.83c-.26 0-.38.17-.28.45zM22.02 2C13.25 2 5.56 5.86 0 12.02l.62.66c5.44-5.96 12.92-9.68 21.4-9.68z"/></svg>;
  if (name.includes("Terraform")) return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.64 4.23v7.575l6.56 3.787V8.018zm0 8.675v7.575L15.2 24v-7.575z"/></svg>;
  if (name.includes("Docker")) return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M13.983 11.278h-3.23V8.05h3.23v3.228ZM9.92 11.278h-3.23V8.05h3.23v3.228ZM5.856 11.278h-3.23V8.05h3.23v3.228ZM13.983 7.215h-3.23V3.987h3.23v3.228ZM9.92 7.215h-3.23V3.987h3.23v3.228ZM5.856 7.215h-3.23V3.987h3.23v3.228ZM13.983 3.151h-3.23V-.077h3.23v3.228ZM22.564 10.428c-.161-1.39-1.112-2.396-2.52-2.396-.285 0-.583.048-.874.129-.19-.908-1.025-1.572-1.954-1.572-.25 0-.495.044-.73.125V11.28h-2.5v.91c0 2.21-1.815 4-4.048 4H4v1.895c0 1.258.91 2.302 2.128 2.456 1.055.132 2.138.196 3.238.196 2.502 0 4.88-.426 7.024-1.256 3.197-1.236 5.568-3.953 6.174-7.054Z"/></svg>;
  if (name.includes("Kubernetes")) return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.836 24l-9.825-5.59 3.018-10.962L12.164 0l7.135 7.448L22.317 18.41 11.836 24zm-6.953-6.914l6.953 3.956 6.953-3.956-2.137-7.755-4.816-5.025-4.816 5.025-2.137 7.755z"/></svg>;
  if (name.includes("Jenkins")) return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.19 14.3c-.65-.18-1.53-.18-2.18 0l-.39.1.52 1.33c.63-.12 1.36-.12 1.99 0l.45-1.33-.39-.1zm-4.32-.98c-.46-.35-1.23-.74-1.97-.93l-.33.6c.55.19 1.14.49 1.57.8l.73-.47zm8.54-1.02l-.33-.51c-.69.21-1.42.54-1.89.85l.77.46c.41-.29.93-.6 1.45-.8zm-4.22-3.76c-2.45 0-4.38 2.06-4.38 4.71 0 1.01.26 1.96.73 2.76.1-.21.23-.42.37-.6-.35-.61-.55-1.31-.55-2.06 0-2.3 1.71-4.17 3.83-4.17s3.83 1.87 3.83 4.17c0 .75-.2 1.45-.55 2.06.14.18.27.39.37.6.47-.8.73-1.75.73-2.76 0-2.65-1.93-4.71-4.38-4.71z"/></svg>;
  if (name.includes("GitHub")) return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
  if (name.includes("Grafana")) return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M14.646 0C10.74 0 7.357 2.083 5.464 5.37L10.79 9.6c.725-1.666 2.378-2.825 4.304-2.825 2.585 0 4.675 2.09 4.675 4.674s-2.09 4.674-4.675 4.674a4.654 4.654 0 0 1-3.668-1.785L6.036 18.52c1.942 2.502 4.966 4.103 8.41 4.103 5.86 0 10.606-4.747 10.606-10.606 0-5.858-4.746-10.605-10.606-10.605"/></svg>;
  if (name.includes("Python")) return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.08.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.14-.18.22-.12.27-.06.31.01.35.08.33.16.29.24.23.3.15.34.07.38-.02.39-.12.36-.22.3-.3.21-.36.09-.39-.03-.4-.14-.38-.25-.32-.34-.23-.41-.12-.45-.02-.45.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01H9.96v.83h8.93l.01 2.75.02.37-.05.34-.11.31-.17.28-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.08-.77.04-.84.02-1.27-.05-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.28l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V8.43h.06l.21.03zm-3.98 10.53l.23-.14.18-.22.12-.27.06-.31-.01-.35-.08-.33-.16-.29-.24-.23-.3-.15-.34-.07-.38.02-.39.12-.36.22-.3.3-.21.36-.09.39.03.4.14.38.25.32.34.23.41.12.45.02.45-.09z"/></svg>;
  
  // Generic Tech Icon
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
};

function SkillCard({ skillGroup, index }: { skillGroup: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
      onMouseMove={handleMouseMove}
      className="glass-card rounded-[2.5rem] p-8 hover:shadow-[0_0_50px_rgba(7,203,108,0.1)] transition-shadow duration-700 relative overflow-hidden group/card transform-gpu"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(7,203,108,0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#07CB6C]/20 to-transparent blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
      
      <h3 className="text-xl md:text-2xl font-black text-[#e8f5ee] mb-10 flex items-center gap-4 tracking-tight drop-shadow-[0_0_10px_rgba(7,203,108,0.3)] relative z-10">
        <span className="w-12 h-[3px] bg-[#07CB6C] rounded-full group-hover/card:w-20 transition-all duration-500 shadow-[0_0_10px_rgba(7,203,108,0.8)]" />
        {skillGroup.category}
      </h3>
      
      <div className="space-y-8 relative z-10">
        {skillGroup.items.map((skill: any, i: number) => (
          <div key={i} className="group/item cursor-crosshair">
            <div className="flex justify-between items-end text-lg font-bold mb-3">
              <div className="flex items-center gap-3">
                <span 
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#010403] border border-white/5 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6"
                  style={{ color: skill.color }}
                >
                  {getIcon(skill.name)}
                </span>
                <span className="text-[#e8f5ee] group-hover/item:text-[#07CB6C] transition-colors duration-300">{skill.name}</span>
              </div>
              <span className="font-mono text-sm group-hover/item:text-white transition-colors duration-300" style={{ color: skill.color }}>{skill.score}%</span>
            </div>
            <div className="skill-bar-track relative overflow-hidden h-3 rounded-full bg-[#0a1510] border border-white/5">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.3 + (i * 0.1), type: "spring", bounce: 0.4 }}
                className="skill-bar-fill absolute inset-0 rounded-full"
                style={{ 
                  width: `${skill.score}%`,
                  background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  boxShadow: `0 0 15px ${skill.color}66`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="skills" className="section-padding relative min-h-screen flex items-center perspective-[1000px]" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(circle,rgba(7,203,108,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="container-xl relative z-10 w-full">
        <motion.div style={{ y, opacity }} className="text-center mb-24">
          <span className="section-label mb-6">Technical Arsenal</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mix-blend-plus-lighter">
            Tools & <span className="text-[#07CB6C] drop-shadow-[0_0_20px_rgba(7,203,108,0.5)]">Tech</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <SkillCard key={index} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
