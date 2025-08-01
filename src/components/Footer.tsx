import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer fade-in">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://facebook.com/boxspot" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" width="24" height="24" />
          </a>
          <a href="https://instagram.com/boxspot.ma" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="Instagram" width="24" height="24" />
          </a>
          <a href="https://linkedin.com/company/boxspot-ma" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/521725/linkedin.svg" alt="LinkedIn" width="24" height="24" />
          </a>
          <a href="https://twitter.com/boxspotma" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="Twitter" width="24" height="24" />
          </a>
          <a href="mailto:contact@boxspot.ma" className="social-link" aria-label="Email">
            <img src="https://www.svgrepo.com/show/533194/mail-alt.svg" alt="Email" width="24" height="24" />
          </a>
        </div>
        
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Politique de confidentialité</a>
          <span className="footer-separator">|</span>
          <a href="/terms" className="footer-link">Conditions d'utilisation</a>
          <span className="footer-separator">|</span>
          <a href="/legal" className="footer-link">Mentions légales</a>
        </div>
        
        <p className="footer-text">© BoxSpot – Projet de Mohamed Aymane SFOULI – Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;