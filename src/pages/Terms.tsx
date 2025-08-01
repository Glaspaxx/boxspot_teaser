import React from 'react';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
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
            <h1>Conditions d'utilisation</h1>
            <p className="last-updated">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

            <section>
              <h2>1. Acceptation des conditions</h2>
              <p>
                En accédant et en naviguant sur le site web BoxSpot (ci-après "le Site"), vous acceptez les présentes 
                conditions d'utilisation. Ce site constitue un projet vitrine en phase de pré-lancement, sans service 
                en ligne actif à ce jour.
              </p>
            </section>

            <section>
              <h2>2. Nature du site</h2>
              <p>
                <strong>Ce site ne constitue pas une offre de services, mais une prévisualisation du projet BoxSpot.</strong> 
                Les informations sont fournies à titre indicatif et peuvent évoluer sans préavis. BoxSpot vise à devenir 
                une plateforme de consigne de bagages au Maroc, mais aucun service commercial n'est actuellement disponible.
              </p>
            </section>

            <section>
              <h2>3. Utilisation du site</h2>
              <h3>3.1 Accès libre</h3>
              <p>
                L'accès à ce site de présentation est libre et gratuit. Aucune inscription n'est requise pour consulter 
                les informations sur le projet BoxSpot.
              </p>

              <h3>3.2 Formulaire d'information</h3>
              <ul>
                <li>Le formulaire d'email sert uniquement à être informé du lancement futur</li>
                <li>Aucun engagement contractuel ou commercial n'est créé par cette inscription</li>
                <li>Vous pouvez vous désinscrire à tout moment en contactant privacy@boxspot.ma</li>
              </ul>
            </section>

            <section>
              <h2>4. Utilisation autorisée</h2>
              <h3>4.1 Utilisation autorisée</h3>
              <p>Ce site peut être utilisé pour :</p>
              <ul>
                <li>Consulter les informations sur le projet BoxSpot</li>
                <li>S'inscrire pour être informé du lancement</li>
                <li>Contacter l'équipe pour des questions ou suggestions</li>
              </ul>

              <h3>4.2 Utilisation interdite</h3>
              <p>Il est strictement interdit de :</p>
              <ul>
                <li>Utiliser le site à des fins illégales ou malveillantes</li>
                <li>Tenter de perturber le fonctionnement du site</li>
                <li>Violer les droits de propriété intellectuelle</li>
                <li>Collecter des données d'autres utilisateurs</li>
              </ul>
            </section>

            <section>
              <h2>5. Absence d'engagement contractuel</h2>
              <p>
                La navigation sur ce site vaut acceptation des présentes conditions, mais 
                <strong>il n'y a aucun engagement contractuel ou commercial à ce stade</strong>. 
                Le projet BoxSpot est en développement et les informations présentées sont susceptibles 
                d'évoluer.
              </p>
            </section>

            <section>
              <h2>6. Responsabilité</h2>
              <h3>6.1 Responsabilité de l'éditeur</h3>
              <p>
                L'éditeur s'efforce de maintenir ce site accessible et de fournir des informations exactes sur le projet. 
                Cependant, il ne peut garantir la disponibilité permanente du site ni l'exactitude absolue des informations 
                qui restent indicatives.
              </p>

              <h3>6.2 Limitation de responsabilité</h3>
              <p>
                La responsabilité de l'éditeur ne peut être engagée pour les dommages directs ou indirects résultant 
                de l'utilisation de ce site de présentation ou de l'impossibilité d'y accéder.
              </p>
            </section>

            <section>
              <h2>7. Évolution vers un service commercial</h2>
              <p>
                Lorsque BoxSpot évoluera vers un service commercial actif, de nouvelles conditions d'utilisation 
                spécifiques seront établies. Les personnes inscrites à la newsletter seront informées de ces évolutions 
                et pourront choisir d'utiliser ou non les futurs services.
              </p>
            </section>

            <section>
              <h2>8. Propriété intellectuelle</h2>
              <p>
                Tous les contenus de ce site (textes, images, logos, concept BoxSpot) sont protégés par les droits 
                de propriété intellectuelle. Toute reproduction non autorisée est interdite.
              </p>
            </section>

            <section>
              <h2>9. Protection des données</h2>
              <p>
                Le traitement des données personnelles (limitées à l'adresse email) est régi par notre 
                <a href="/privacy-policy">Politique de confidentialité</a>, qui fait partie intégrante 
                de ces conditions d'utilisation.
              </p>
            </section>

            <section>
              <h2>10. Droit applicable et juridiction</h2>
              <p>
                Ces conditions sont régies par le droit marocain. Tout litige sera soumis à la juridiction 
                des tribunaux compétents de Tanger, Maroc.
              </p>
            </section>

            <section>
              <h2>11. Modifications des conditions</h2>
              <p>
                Ces conditions peuvent être modifiées à tout moment pour s'adapter à l'évolution du projet. 
                Les modifications seront publiées sur cette page et prendront effet immédiatement.
              </p>
            </section>

            <section>
              <h2>12. Contact</h2>
              <p>
                Pour toute question concernant ces conditions d'utilisation, contactez-nous à :
              </p>
              <div className="contact-info">
                <p><strong>Email :</strong> legal@boxspot.ma</p>
                <p><strong>Responsable :</strong> Badr Ragbi</p>
                <p><strong>Adresse :</strong> Riad Ahlan, avenue Attahajod, Tanger, Maroc</p>
              </div>
            </section>

            <section>
              <h2>13. Clause de non-responsabilité</h2>
              <p>
                Ce site présente un projet en développement. Les informations, délais, fonctionnalités et 
                caractéristiques mentionnés sont indicatifs et peuvent être modifiés sans préavis. 
                Aucune garantie n'est donnée quant à la réalisation effective du projet dans les conditions décrites.
              </p>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;