import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import EmailForm from '../components/EmailForm';
import CountdownTimer from '../components/CountdownTimer';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="logo">
          <img 
            src="https://logo.tawjihy.ma/boxspot_nobg.png" 
            alt="BoxSpot Logo"
            className="logo-img"
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Voyagez léger : déposez vos bagages et vivez votre ville à 100 %
          </h1>
          <p className="hero-subtitle">
            Fini le poids sur les épaules. <strong>BoxSpot</strong> vous permet de confier vos effets personnels dans un réseau de points partenaires <strong>vérifiés, sécurisés et partout au Maroc</strong>.  
            Explorez librement, récupérez vos affaires quand vous voulez.
          </p>
          <ul style={{listStyle:'none', marginBottom:'2rem'}}>
            <li style={{margin:'0.5rem 0', fontSize:'1.1rem'}}>✅ Hôtels, cafés et boutiques de confiance</li>
            <li style={{margin:'0.5rem 0', fontSize:'1.1rem'}}>✅ Réservation immédiate en quelques clics</li>
            <li style={{margin:'0.5rem 0', fontSize:'1.1rem'}}>✅ Vos bagages protégés et assurés</li>
          </ul>
          <div style={{ position: 'relative' }}>
            <EmailForm />
          </div>
        </div>
      </section>

      {/* Partner Network Ribbon */}
      <section className="partner-ribbon fade-in">
        <div className="ribbon-container" id="ribbonContainer">
          {/* First set of cards */}
          <div className="partner-card">
            <span className="partner-icon">🏨 </span>
            <h3 className="partner-title">Hôtels</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">🏠</span>
            <h3 className="partner-title">Riads & maisons d'hôtes</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">☕ </span>
            <h3 className="partner-title">Cafés & salons de thé</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">🛍️</span>
            <h3 className="partner-title">Boutiques de souvenirs</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">✈️</span>
            <h3 className="partner-title">Agences de voyages</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">📚</span>
            <h3 className="partner-title">Librairies & papeteries</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">💻 </span>
            <h3 className="partner-title">Espaces de coworking</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">🏬</span>
            <h3 className="partner-title">Centres commerciaux</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">👔</span>
            <h3 className="partner-title">Pressings</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">🛒</span>
            <h3 className="partner-title">Superettes & mini‑markets</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">⛽ </span>
            <h3 className="partner-title">Stations‑service</h3>
            <div className="pulse-indicator"></div>
          </div>
          <div className="partner-card">
            <span className="partner-icon">🏋️</span>
            <h3 className="partner-title">Salles de sport</h3>
            <div className="pulse-indicator"></div>
          </div>
        </div>
        
        <div className="ribbon-cta">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdX8Sfz3-AHo86E0fwI3JEIQqoBCMAaFisk1sJ5ObcIuvRjwQ/viewform?usp=sharing&ouid=105729354954045835675" className="ribbon-button" target="_blank" rel="noopener noreferrer">
            Devenir partenaire !
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section fade-in" id="features">
        <div className="features-container">
          <h2 className="section-title">BoxSpot, la liberté de voyager léger</h2>
          <div className="features-grid">
            <div className="feature-card slide-in-left">
              <span className="feature-icon">🔒</span>
              <h3 className="feature-title">Sécurité 24/7</h3>
              <p className="feature-description">Points partenaires sélectionnés avec soin, surveillance et traçabilité des dépôts.</p>
            </div>

            <div className="feature-card fade-in">
              <span className="feature-icon">📲</span>
              <h3 className="feature-title">Réservation en 1 clic</h3>
              <p className="feature-description">Trouvez, réservez et déposez vos affaires via notre site web intuitive.</p>
            </div>

            <div className="feature-card slide-in-right">
              <span className="feature-icon">🌍</span>
              <h3 className="feature-title">Partout au Maroc</h3>
              <p className="feature-description">Une couverture croissante dans les centres-villes, gares et lieux touristiques.</p>
            </div>

            <div className="feature-card slide-in-left">
              <span className="feature-icon">⚡</span>
              <h3 className="feature-title">Dépôt express</h3>
              <p className="feature-description">Processus simplifié : en 2 minutes, vos affaires sont en lieu sûr.</p>
            </div>

            <div className="feature-card fade-in">
              <span className="feature-icon">👀</span>
              <h3 className="feature-title">Suivi en temps réel</h3>
              <p className="feature-description">Notification à chaque étape, localisation instantanée, gestion via votre téléphone.</p>
            </div>

            <div className="feature-card slide-in-right">
              <span className="feature-icon">💼</span>
              <h3 className="feature-title">Liberté retrouvée</h3>
              <p className="feature-description">Faites ce que vous aimez sans vous soucier de vos affaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section fade-in" id="countdown">
        <div className="countdown-container">
          <h2 className="countdown-title">Lancement officiel dans...</h2>
          <CountdownTimer />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;