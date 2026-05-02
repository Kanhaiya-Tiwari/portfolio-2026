'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Stars
    const stars: { x: number; y: number; size: number; speed: number; opacity: number; twinkleSpeed: number; twinklePhase: number; color: string }[] = [];
    const starColors = ['255,255,255', '255,255,255', '200,220,255', '255,230,200', '255,255,255'];
    for (let i = 0; i < 800; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.1, // Smaller, more realistic
        speed: Math.random() * 0.05 + 0.01,
        opacity: Math.random() * 0.9 + 0.1,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)]
      });
    }

    // Shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; angle: number; opacity: number; active: boolean; life: number }[] = [];
    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * width * 1.5,
        y: Math.random() * height * 0.3 - 200,
        length: Math.random() * 200 + 100, // Longer tails
        speed: Math.random() * 25 + 15,    // Much faster
        angle: Math.PI / 4 + Math.random() * 0.2, // Straighter angle
        opacity: 1,
        active: true,
        life: 0,
      });
    }

    // Nebula particles (Darker)
    const nebulae: { x: number; y: number; radius: number; color: string; opacity: number; drift: number }[] = [];
    const nebulaColors = ['rgba(7,203,108,', 'rgba(10,50,150,', 'rgba(50,20,100,'];
    for (let i = 0; i < 8; i++) {
      nebulae.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 400 + 200,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        opacity: Math.random() * 0.015 + 0.005, // Extremely faint so background is very dark
        drift: Math.random() * 0.2 + 0.05,
      });
    }

    let time = 0;
    let shootTimer = 0;
    let nextShootThreshold = 0.2; // Very fast initial spawn

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      time += 0.016;
      shootTimer += 0.016;

      // Draw nebulae
      nebulae.forEach(n => {
        const nx = n.x + Math.sin(time * n.drift) * 20;
        const ny = n.y + Math.cos(time * n.drift * 0.7) * 15;
        const gradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.radius);
        gradient.addColorStop(0, n.color + (n.opacity + Math.sin(time * 0.3) * 0.005) + ')');
        gradient.addColorStop(1, n.color + '0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(nx - n.radius, ny - n.radius, n.radius * 2, n.radius * 2);
      });

      // Draw & twinkle stars
      stars.forEach(s => {
        // More subtle twinkling
        const twinkle = Math.sin(time * s.twinkleSpeed * 60 + s.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = s.opacity * twinkle;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${currentOpacity})`;
        ctx.fill();

        // Very faint star glow for big stars only
        if (s.size > 1.2) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3);
          glow.addColorStop(0, `rgba(${s.color},${currentOpacity * 0.2})`);
          glow.addColorStop(1, `rgba(${s.color},0)`);
          ctx.fillStyle = glow;
          ctx.fillRect(s.x - s.size * 3, s.y - s.size * 3, s.size * 6, s.size * 6);
        }

        s.y += s.speed;
        if (s.y > height) { s.y = 0; s.x = Math.random() * width; }
      });

      // Much more frequent shooting stars
      if (shootTimer > nextShootThreshold) {
        spawnShootingStar();
        shootTimer = 0;
        // Randomize next spawn between 0.1 and 1.2 seconds
        nextShootThreshold = 0.1 + Math.random() * 1.1; 
      }

      shootingStars.forEach(ss => {
        if (!ss.active) return;
        ss.life += 0.016;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.015;
        if (ss.opacity <= 0 || ss.x > width + 100 || ss.y > height + 100) { ss.active = false; return; }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;
        
        // Intense tail gradient
        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(7,203,108,0)`);
        grad.addColorStop(0.8, `rgba(7,203,108,${ss.opacity * 0.8})`);
        grad.addColorStop(1, `rgba(255,255,255,${ss.opacity})`);
        
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = ss.opacity > 0.5 ? 2.5 : 1.5;
        ctx.stroke();

        // Intense head glow
        const headGlow = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 10);
        headGlow.addColorStop(0, `rgba(255,255,255,${ss.opacity})`);
        headGlow.addColorStop(0.3, `rgba(150,255,200,${ss.opacity * 0.8})`);
        headGlow.addColorStop(1, 'rgba(7,203,108,0)');
        ctx.fillStyle = headGlow;
        ctx.fillRect(ss.x - 10, ss.y - 10, 20, 20);
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />
    </>
  );
}
