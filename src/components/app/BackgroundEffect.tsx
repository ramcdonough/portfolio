import { useEffect, useRef } from "react";
import "../../BackgroundEffect.css";

interface Point {
  x: number;
  y: number;
}

const BackgroundEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const currentPointRef = useRef<Point>({ x: 0, y: 0 });

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

      // Smooth interpolation towards mouse position
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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      pointsRef.current = []; // Reset points on resize
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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

