import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const createParticles = () => {
      const container = document.getElementById('particlesContainer');
      if (!container) return;
      
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(particle);
      }
    };

    const createGeometricLines = () => {
      const container = document.getElementById('geometricLines');
      if (!container) return;
      
      const lineCount = window.innerWidth < 768 ? 3 : 5;
      
      for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        line.style.top = Math.random() * 100 + '%';
        line.style.width = (20 + Math.random() * 60) + '%';
        line.style.animationDelay = Math.random() * 8 + 's';
        line.style.animationDuration = (6 + Math.random() * 4) + 's';
        container.appendChild(line);
      }
    };

    createParticles();
    createGeometricLines();

    const handleResize = () => {
      const particlesContainer = document.getElementById('particlesContainer');
      const linesContainer = document.getElementById('geometricLines');
      
      if (particlesContainer) particlesContainer.innerHTML = '';
      if (linesContainer) linesContainer.innerHTML = '';
      
      createParticles();
      createGeometricLines();
    };

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return (
    <div className="animated-background">
      <div className="particles-container" id="particlesContainer"></div>
      <div className="geometric-lines" id="geometricLines"></div>
    </div>
  );
};

export default AnimatedBackground;