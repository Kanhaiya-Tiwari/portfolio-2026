'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function RunningArrow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 bottom-0 left-[5%] md:left-[10%] w-[2px] z-0 pointer-events-none mix-blend-screen opacity-60">
      {/* Background Track */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07CB6C]/10 to-transparent" />
      
      {/* The Running Arrow / Laser Beam */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-[150px] bg-gradient-to-b from-transparent via-[#07CB6C] to-[#ffffff] rounded-full shadow-[0_0_20px_#07CB6C,0_0_40px_#07CB6C]"
        animate={{
          top: ['-20%', '120%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Arrow Head */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 text-white drop-shadow-[0_0_10px_#07CB6C] flex items-end justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="translate-y-2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </motion.div>

      {/* Second delayed arrow for continuous effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[250px] bg-gradient-to-b from-transparent via-[#07CB6C]/50 to-[#07CB6C] rounded-full shadow-[0_0_15px_#07CB6C]"
        animate={{
          top: ['-20%', '120%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      >
        {/* Arrow Head */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 text-[#07CB6C] flex items-end justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="translate-y-1">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
