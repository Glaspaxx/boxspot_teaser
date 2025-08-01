import React from 'react';
import Footer from '../components/Footer';

const Legal: React.FC = () => {
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
            <h1>Mentions légales</h1>
            <p className="last-updated">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

            <section>
              <h2>1. Éditeur du site</h2>
              <div className="company-info">
                <p>
                  Le présent site est édité à titre personnel par M. <strong>Mohamed Aymane SFOULI</strong>, 
                  dans le cadre de la préfiguration du projet BoxSpot.
                </p>
                <p><strong>Domicile :</strong> Riad Ahlan, avenue Attahajod, Tanger, Maroc</p>
                <p><strong>Email :</strong> contact@boxspot.ma</p>
                <p><strong>Statut :</strong> Projet en phase de pré-lancement</p>
              </div>
            </section>

            <section>
              <h2>2. Nature du projet</h2>
              <p>
                BoxSpot est un projet en cours de développement visant à créer un réseau de consigne 
                de bagages au Maroc. À ce stade, aucune société n'a été immatriculée et aucun service 
                commercial n'est proposé.
              </p>
            </section>

            <section>
              <h2>3. Responsable de la publication</h2>
              <p>
                <strong>Nom :</strong> Mohamed Aymane SFOULI<br />
                <strong>Qualité :</strong> Porteur du projet BoxSpot
              </p>
            </section>

            <section>
              <h2>4. Hébergement et sécurité</h2>
              <div className="hosting-info">
                <p>
                  <strong>Hébergement :</strong> Le site BoxSpot est hébergé sur une infrastructure propre, sécurisée et contrôlée directement par l’équipe projet. Aucune donnée n’est hébergée sur un prestataire externe de type cloud public.
                </p>
                <p>
                  <strong>Sécurité réseau :</strong> Les communications et accès sont protégés par <strong>Cloudflare</strong>, fournissant un chiffrement SSL complet, une protection contre les attaques DDoS et une surveillance active des menaces.
                </p>
                <p>
                  <strong>Localisation des serveurs :</strong> Les serveurs sont physiquement localisés au Maroc.
                </p>
              </div>
            </section>

            <section>
              <h2>5. Conformité CNDP</h2>
              <p>
                Ce site n'est pas soumis à déclaration CNDP à ce stade, aucun traitement actif 
                de données personnelles à des fins commerciales n'est réalisé. Seule la collecte 
                d'adresses email pour information du lancement est effectuée.
              </p>
            </section>

            <section>
              <h2>6. Propriété intellectuelle</h2>
              <p>
                Le site web BoxSpot et l'ensemble de son contenu (textes, images, vidéos, logos, etc.) 
                sont protégés par les droits de propriété intellectuelle et appartiennent à Badr Ragbi 
                dans le cadre du projet BoxSpot.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
                éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
                écrite préalable du responsable du projet.
              </p>
            </section>

            <section>
              <h2>7. Responsabilité</h2>
              <h3>6.1 Contenu du site</h3>
              <p>
                L'éditeur s'efforce de fournir des informations exactes et à jour sur ce site de présentation. 
                Cependant, les informations présentées sont indicatives et peuvent évoluer sans préavis dans 
                le cadre du développement du projet.
              </p>

              <h3>6.2 Disponibilité du site</h3>
              <p>
                L'éditeur met tout en œuvre pour assurer la disponibilité du site. Cependant, 
                il ne peut garantir une disponibilité absolue et se réserve le droit d'interrompre 
                l'accès au site pour des raisons de maintenance ou de mise à jour.
              </p>

              <h3>6.3 Liens externes</h3>
              <p>
                Le site peut contenir des liens vers des sites web tiers. L'éditeur n'exerce aucun contrôle sur 
                ces sites et décline toute responsabilité quant à leur contenu ou à leur politique de confidentialité.
              </p>
            </section>

            <section>
              <h2>8. Données personnelles</h2>
              <p>
                Le traitement des données personnelles collectées sur ce site est régi par notre 
                <a href="/privacy-policy"> Politique de confidentialité</a>, conforme à la loi marocaine 
                n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données 
                à caractère personnel.
              </p>
            </section>

            <section>
              <h2>9. Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à 
                notre politique de cookies détaillée dans notre Politique de confidentialité.
              </p>
            </section>

            <section>
              <h2>10. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à 
                l'utilisation du site sera soumis à la compétence exclusive des tribunaux de Casablanca, Maroc.
              </p>
            </section>

            <section>
              <h2>11. Médiation</h2>
              <p>
                En cas de litige, et avant toute action judiciaire, les parties s'efforceront de trouver une 
                solution amiable. À défaut, le litige pourra être soumis à une procédure de médiation.
              </p>
            </section>

            <section>
              <h2>12. Modifications</h2>
              <p>
                L'éditeur se réserve le droit de modifier les présentes mentions légales à tout moment. 
                Les modifications prendront effet dès leur publication sur le site.
              </p>
            </section>

            <section>
              <h2>13. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
              </p>
              <div className="contact-info">
                <p><strong>Par email :</strong> contact@boxspot.ma</p>
                <p><strong>Par courrier :</strong></p>
                <p>Mohamed Aymane SFOULI - Projet BoxSpot</p>
                <p>Riad Ahlan, avenue Attahajod</p>
                <p>Tanger, Maroc</p>
              </div>
            </section>

            <section>
              <h2>14. Accessibilité</h2>
              <p>
                L'éditeur s'engage à rendre ce site web accessible au plus grand nombre. Si vous rencontrez 
                des difficultés d'accès à certains contenus, n'hésitez pas à nous contacter pour que nous 
                puissions vous aider ou vous fournir le contenu sous une forme alternative.
              </p>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Legal;