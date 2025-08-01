import React from 'react';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="legal-page">
        <div className="legal-container">
          <header className="legal-header">
            <a href="/" className="back-link">← Retour à l'accueil</a>
            <img 
              src="https://logo.tawjihy.ma/boxspot_nobg.png" 
              alt="BoxSpot Logo"
              className="legal-logo"
            />
          </header>

          <main className="legal-content">
            <h1>Politique de confidentialité</h1>
            <p className="last-updated">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

            <section>
              <h2>1. Introduction</h2>
              <p>
                Dans le cadre du projet BoxSpot, actuellement en phase de pré-lancement, nous nous engageons à protéger 
                la confidentialité de vos données personnelles. Cette politique explique comment nous collectons, utilisons 
                et protégeons les informations limitées que vous nous confiez, conformément à la loi marocaine n° 09-08 
                relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.
              </p>
            </section>

            <section>
              <h2>2. Données collectées</h2>
              <h3>2.1 Données que vous nous fournissez</h3>
              <ul>
                <li><strong>Adresse email :</strong> Uniquement via le formulaire d'inscription pour être informé du lancement</li>
              </ul>

              <h3>2.2 Données collectées automatiquement</h3>
              <ul>
                <li>Données de navigation basiques (pages visitées, durée de visite)</li>
                <li>Adresse IP (pour des raisons techniques uniquement)</li>
                <li>Type de navigateur (pour l'optimisation du site)</li>
              </ul>
            </section>

            <section>
              <h2>3. Utilisation des données</h2>
              <p>Dans le cadre de ce projet de pré-lancement, vos données sont utilisées exclusivement pour :</p>
              <ul>
                <li><strong>Vous informer une seule fois du lancement de BoxSpot</strong> (usage unique)</li>
                <li>Améliorer l'expérience de navigation sur ce site de présentation</li>
                <li>Répondre à vos éventuelles questions via contact@boxspot.ma</li>
              </ul>
              <p><strong>Important :</strong> Aucune exploitation commerciale, revente ou usage marketing récurrent n'est réalisé.</p>
            </section>

            <section>
              <h2>4. Base légale du traitement</h2>
              <p>Nous traitons vos données personnelles sur la base de :</p>
              <ul>
                <li><strong>Consentement :</strong> Pour l'envoi de l'information de lancement (usage unique)</li>
                <li><strong>Intérêt légitime :</strong> Pour l'amélioration technique du site de présentation</li>
              </ul>
            </section>

            <section>
              <h2>5. Partage des données</h2>
              <p>
                <strong>Aucune donnée n'est vendue, louée ou partagée</strong> avec des tiers à des fins commerciales. 
                Les seuls cas de partage sont :
              </p>
              <ul>
                <li>Pour respecter une obligation légale</li>
                <li>Avec l'hébergeur Vercel (dans le cadre technique uniquement)</li>
                <li>En cas d'évolution du projet vers une structure commerciale (avec information préalable)</li>
              </ul>
            </section>

            <section>
              <h2>6. Sécurité des données</h2>
              <p>
                Malgré le caractère limité des données collectées, nous mettons en place des mesures de sécurité 
                appropriées pour protéger votre adresse email contre l'accès non autorisé, la perte ou l'utilisation abusive.
              </p>
            </section>

            <section>
              <h2>7. Conservation des données</h2>
              <p>
                Votre adresse email sera conservée uniquement jusqu'au lancement officiel de BoxSpot, puis supprimée 
                automatiquement sauf si vous souhaitez continuer à recevoir des informations du service commercial.
              </p>
            </section>

            <section>
              <h2>8. Vos droits</h2>
              <p>
                Dans le cadre du projet BoxSpot, et conformément à la loi 09-08, l'utilisateur dispose d'un droit 
                d'accès, de modification et de suppression de ses données, à exercer par simple demande à 
                <strong> contact@boxspot.ma</strong>
              </p>
              <p>Vous disposez également des droits suivants :</p>
              <ul>
                <li><strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
                <li><strong>Droit de rectification :</strong> Corriger votre adresse email si nécessaire</li>
                <li><strong>Droit d'effacement :</strong> Demander la suppression immédiate de votre email</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer à recevoir l'information de lancement</li>
                <li><strong>Droit de retrait du consentement :</strong> Annuler votre inscription à tout moment</li>
              </ul>
            </section>

            <section>
              <h2>9. Cookies</h2>
              <p>
                Ce site de présentation utilise uniquement des cookies techniques essentiels pour son fonctionnement. 
                Aucun cookie de tracking ou publicitaire n'est utilisé.
              </p>
            </section>

            <section>
              <h2>10. Hébergement et transferts</h2>
              <p>
                Le site est hébergé sur nos propres serveurs sécurisés, situés sur le territoire national.
                Les flux de données sont protégés par Cloudflare, qui assure un chiffrement SSL, une protection DDoS et des contrôles d'accès renforcés.
              </p>
            </section>

            <section>
              <h2>11. Évolution du projet</h2>
              <p>
                Si le projet BoxSpot évolue vers une phase commerciale avec création d'une société, 
                vous serez informé des changements de politique de confidentialité et pourrez choisir 
                de continuer ou non.
              </p>
            </section>

            <section>
              <h2>12. Modifications de cette politique</h2>
              <p>
                Cette politique peut être modifiée pour s'adapter à l'évolution du projet. 
                Les modifications seront publiées sur cette page avec une date de mise à jour révisée.
              </p>
            </section>

            <section>
              <h2>13. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                contactez-nous à :
              </p>
              <div className="contact-info">
                <p><strong>Email :</strong> contact@boxspot.ma</p>
                <p><strong>Responsable :</strong> Mohamed Aymane SFOULI</p>
                <p><strong>Adresse :</strong> Riad Ahlan, avenue Attahajod, Tanger, Maroc</p>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
