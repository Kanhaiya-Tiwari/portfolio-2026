'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section id="contact" className="section-padding relative overflow-hidden min-h-screen flex items-center" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#07CB6C]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#07CB6C]/20 to-transparent" />
      
      <motion.div 
        style={{ scale, y }}
        className="container-xl max-w-6xl mx-auto relative z-10"
      >
        <div className="glass-card rounded-[3rem] p-10 md:p-20 border border-[#07CB6C]/30 shadow-[0_0_80px_rgba(7,203,108,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(7,203,108,0.15)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="flex flex-col h-full justify-center">
              <span className="section-label mb-8 self-start">Contact</span>
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                Let's Build <br/>
                <span className="text-[#07CB6C] drop-shadow-[0_0_20px_rgba(7,203,108,0.5)]">Together</span>
              </h2>
              <p className="text-[#8fa89a] text-xl mb-12 max-w-lg leading-relaxed font-medium">
                Based in Pune, Maharashtra, India. Interested in working together or have a question about my DevOps workflow? I'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <a href="mailto:kt230088@gmail.com" className="flex items-center gap-6 text-[#e8f5ee] hover:text-[#07CB6C] transition-colors group w-fit">
                  <div className="w-16 h-16 rounded-2xl bg-[#07CB6C]/5 flex items-center justify-center border border-[#07CB6C]/20 group-hover:bg-[#07CB6C]/20 group-hover:scale-110 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#4a6358] mb-1 uppercase tracking-widest font-bold">Email</div>
                    <div className="font-bold text-xl">kt230088@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+917489960276" className="flex items-center gap-6 text-[#e8f5ee] hover:text-[#07CB6C] transition-colors group w-fit">
                  <div className="w-16 h-16 rounded-2xl bg-[#07CB6C]/5 flex items-center justify-center border border-[#07CB6C]/20 group-hover:bg-[#07CB6C]/20 group-hover:scale-110 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#4a6358] mb-1 uppercase tracking-widest font-bold">Mobile</div>
                    <div className="font-bold text-xl">+91 7489960276</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/kanhaiyatiwari" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-[#e8f5ee] hover:text-[#07CB6C] transition-colors group w-fit">
                  <div className="w-16 h-16 rounded-2xl bg-[#07CB6C]/5 flex items-center justify-center border border-[#07CB6C]/20 group-hover:bg-[#07CB6C]/20 group-hover:scale-110 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#4a6358] mb-1 uppercase tracking-widest font-bold">LinkedIn</div>
                    <div className="font-bold text-xl">linkedin.com/in/kanhaiyatiwari</div>
                  </div>
                </a>
              </div>
            </div>

            <form
              className="space-y-6 bg-[#010403] p-10 rounded-[2rem] border border-[#07CB6C]/20 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#07CB6C] to-transparent opacity-50" />
              <h3 className="text-2xl font-bold text-[#e8f5ee] mb-8">Send a Message</h3>
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="form-input bg-[#0a1510] border-[#07CB6C]/20 focus:border-[#07CB6C] py-4" />
                <input type="email" placeholder="Email" className="form-input bg-[#0a1510] border-[#07CB6C]/20 focus:border-[#07CB6C] py-4" />
              </div>
              <input type="text" placeholder="Subject" className="form-input bg-[#0a1510] border-[#07CB6C]/20 focus:border-[#07CB6C] py-4" />
              <textarea placeholder="Message" rows={5} className="form-input bg-[#0a1510] border-[#07CB6C]/20 focus:border-[#07CB6C] py-4 resize-none" />
              <button type="submit" className="btn-neon w-full justify-center py-5 mt-4 text-lg font-bold group">
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <div className="absolute bottom-0 w-full text-center border-t border-[#07CB6C]/10 py-6 bg-[#020705]/80 backdrop-blur-md">
        <p className="text-[#4a6358] text-sm flex items-center justify-center gap-2 font-mono tracking-widest uppercase">
          Built with <span className="text-[#07CB6C] animate-pulse">♥</span> by Kanhaiya Tiwari &copy; 2026
        </p>
      </div>
    </section>
  );
}
