import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      setFeedback({ message: 'Veuillez entrer une adresse email valide', type: 'error' });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://boxspot.ma/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: trimmedEmail })
      });
      
      if (response.ok) {
        setFeedback({ message: 'Merci ! Vous serez informé du lancement.', type: 'success' });
        setEmail('');
      } else {
        throw new Error('Erreur réseau');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setFeedback({ message: 'Erreur lors de l\'inscription. Veuillez réessayer.', type: 'error' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  return (
    <div className="email-form-container">
      <form className="email-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          className="email-input" 
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Adresse email"
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          className="cta-button"
          disabled={isSubmitting}
          style={{
            opacity: isSubmitting ? '0.7' : '1',
            background: feedback?.type === 'success' 
              ? 'linear-gradient(135deg, #22c55e, #16a34a)'
              : feedback?.type === 'error'
              ? 'linear-gradient(135deg, #ef4444, #dc2626)'
              : 'linear-gradient(135deg, var(--accent-green), #0d9488)'
          }}
        >
          {isSubmitting ? 'Inscription...' : feedback?.type === 'success' ? 'Merci !' : feedback?.type === 'error' ? 'Erreur' : 'Prévenez‑moi'}
        </button>
      </form>
      
      <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: '0.8', textAlign: 'center' }}>
        En vous inscrivant, vous acceptez notre{' '}
        <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>
          politique de confidentialité
        </a>
        . Votre email sera utilisé uniquement pour vous prévenir du lancement de BoxSpot.
      </p>
      
      {feedback && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: '500',
            opacity: feedback ? '1' : '0',
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            background: feedback.type === 'success' 
              ? 'linear-gradient(135deg, #22c55e, #16a34a)' 
              : 'linear-gradient(135deg, #ef4444, #dc2626)',
            color: 'white'
          }}
        >
          {feedback.message}
        </div>
      )}
    </div>
  );
};

export default EmailForm;