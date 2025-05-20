import { useEffect, useRef } from "react";

interface ParticleProps {
  x: number;
  y: number;
  fadeDelay: number;
  fadeStart: number;
  fadingOut: boolean;
  speed: number;
  opacity: number;
  reset(): void;
  update(): void;
  draw(): void;
}

export default function CanvasBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    let particles: Particle[] = [];
    let animationId: number;

    class Particle implements ParticleProps {
      x: number;
      y: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
      speed: number;
      opacity: number;

      constructor() {
        this.x = 0;
        this.speed = 0;
        this.opacity = 0;
        this.y = 0;
        this.fadeDelay = 0;
        this.fadeStart = 0;
        this.fadingOut = false;
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() / 5 + 0.1;
        this.opacity = 1;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) {
          this.reset();
        }

        if (!this.fadingOut && Date.now() > this.fadeStart) {
          this.fadingOut = true;
        }

        if (this.fadingOut) {
          this.opacity -= 0.008;
          if (this.opacity <= 0) {
            this.reset();
          }
        }
      }

      draw() {
        // Create a consistent color for each particle
        const colorVariation = 255 - Math.random() * 50;
        if (!ctx) return;
        ctx.fillStyle = `rgba(${colorVariation}, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
      }
    }

    function calculateParticleCount() {
      if (!canvas) return;
      return Math.floor((canvas.width * canvas.height) / 6000);
    }

    function initParticles() {
      const particleCount = calculateParticleCount();
      particles = [];
      if (particleCount)
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationId = requestAnimationFrame(animate);
    }

    function onResize() {
      resizeCanvas();
      initParticles();
    }

    window.addEventListener("resize", onResize);

    // Initialize and start animation
    initParticles();
    animationId = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas"></canvas>;
}
