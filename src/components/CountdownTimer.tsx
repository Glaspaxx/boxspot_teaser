import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date (90 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 90);
    launchDate.setHours(0, 0, 0, 0);
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;
      
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return <h3>Lancé !</h3>;
  }

  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className="countdown-label">Jours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="countdown-label">Heures</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="countdown-label">Secondes</span>
      </div>
    </div>
  );
};

export default CountdownTimer;