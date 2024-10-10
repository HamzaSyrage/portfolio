import { useEffect, useRef } from "react";

export default function CanvasBG() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas!.current!.getContext("2d");
    canvas!.current!.width = window.innerWidth;
    canvas!.current!.height = window.innerHeight;
    let particles: Particle[] = [];
    let particleCount = calculateParticleCount();

    class Particle {
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

        this.reset();
        this.y = Math.random() * canvas!.current!.height;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * canvas!.current!.width;
        this.y = Math.random() * canvas!.current!.height;
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
        ctx!.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${
          this.opacity
        })`;
        ctx!.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.current!.width, canvas!.current!.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    function calculateParticleCount() {
      return Math.floor(
        (canvas!.current!.width * canvas!.current!.height) / 6000
      );
    }

    function onResize() {
      canvas!.current!.width = window.innerWidth;
      canvas!.current!.height = window.innerHeight;
      particleCount = calculateParticleCount();
      initParticles();
    }

    window.addEventListener("resize", onResize);

    initParticles();
    animate();
  }, [canvas.current]);

  return <canvas ref={canvas} id="particleCanvas"></canvas>;
}
