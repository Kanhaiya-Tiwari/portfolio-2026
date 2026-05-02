'use client';
import { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { motion } from 'framer-motion';

export default function HeroEarth() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    let phi = 0;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.2,
      dark: 1, // Full dark mode
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 3,
      baseColor: [0.02, 0.08, 0.2], // Deep navy ocean
      markerColor: [0.6, 0.8, 0.7], // Pale realistic landmass
      glowColor: [0.1, 0.3, 0.6], // Blue atmosphere
      markers: [
        // Few random glowing cities
        { location: [18.5204, 73.8567], size: 0.1 }, // Pune
        { location: [37.7749, -122.4194], size: 0.05 }, // SF
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [35.6895, 139.6917], size: 0.08 }, // Tokyo
      ],
      // @ts-ignore
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.015; // Fast rotation
      }
    });

    return () => {
      globe.destroy();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <motion.div 
      className="absolute left-1/2 top-1/2 w-[1000px] h-[1000px] pointer-events-none z-[1] opacity-70 mix-blend-screen"
      initial={{ x: "-50%", y: "-50%" }}
      animate={{ 
        x: ["-50%", "-40%", "-60%", "-50%"],
        y: ["-50%", "-60%", "-40%", "-50%"]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: 1000, height: 1000, maxWidth: "100%", aspectRatio: 1 }}
      />
    </motion.div>
  );
}
