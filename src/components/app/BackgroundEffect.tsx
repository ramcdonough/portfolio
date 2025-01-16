import { useEffect, useRef } from "react";
import "../../BackgroundEffect.css";

interface Point {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

const BackgroundEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const currentPointRef = useRef<Point>({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        particle.life -= 0.01;
        
        if (particle.life <= 0) {
          particlesRef.current.splice(index, 1);
          return;
        }

        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(120, 120, 180, ${0.2 * particle.life * (1 - distance / 50)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 180, 255, ${particle.life})`;
        ctx.fill();
      });

      // Draw mouse trail
      currentPointRef.current.x += (mouseRef.current.x - currentPointRef.current.x) * 0.15;
      currentPointRef.current.y += (mouseRef.current.y - currentPointRef.current.y) * 0.15;

      // Add current point to trail
      pointsRef.current.push({ ...currentPointRef.current });
      
      // Keep only last 20 points
      if (pointsRef.current.length > 20) {
        pointsRef.current.shift();
      }

      // Draw trail
      ctx.beginPath();
      ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
      
      // Create smooth curve through points
      for (let i = 1; i < pointsRef.current.length - 2; i++) {
        const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
        const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
        ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc);
      }

      // Draw glow effect
      ctx.shadowColor = '#333333';
      ctx.shadowBlur = 20;
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(80, 80, 80, 0.3)';
      ctx.stroke();

      // Draw main point
      ctx.beginPath();
      ctx.arc(currentPointRef.current.x, currentPointRef.current.y, 10, 0, Math.PI * 2);
      
      const gradient = ctx.createRadialGradient(
        currentPointRef.current.x, currentPointRef.current.y, 0,
        currentPointRef.current.x, currentPointRef.current.y, 10
      );
      gradient.addColorStop(0, 'rgba(80, 80, 80, 0.4)');
      gradient.addColorStop(1, 'rgba(40, 40, 40, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e: MouseEvent) => {
      // Create a small burst of particles
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;
        const speed = 0.5 + Math.random() * 1;
        
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: 1
        });
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      pointsRef.current = [];
      particlesRef.current = [];
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="radial-gradient-background"
      style={{ 
        background: '#121212',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default BackgroundEffect;

