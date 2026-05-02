'use client';
import { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { motion } from 'framer-motion';

export default function Earth3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    let phi = Math.PI; // Start at different angle
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.3,
      dark: 1, 
      diffuse: 1.5,
      mapSamples: 16000,
      mapBrightness: 3.5,
      baseColor: [0.02, 0.08, 0.2], // Deep navy ocean
      markerColor: [0.6, 0.8, 0.7], // Pale realistic landmass
      glowColor: [0.1, 0.3, 0.6], // Blue atmosphere
      markers: [],
      // @ts-ignore
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.02; // Very fast rotation
      }
    });

    return () => {
      globe.destroy();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <motion.div 
      className="absolute right-[-150px] md:right-[50px] top-1/2 w-[600px] h-[600px] pointer-events-none z-[1] opacity-60 mix-blend-screen"
      initial={{ y: "-50%" }}
      animate={{ 
        y: ["-50%", "-30%", "-70%", "-50%"],
        x: [0, 100, -50, 0]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </motion.div>
  );
}
