import React, { useState } from 'react';
import "../css/main.css";
import "../css/service.css";

export default function ServicesBF() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "LAVAGE DE VITRES",
      shortDescription: "Service de nettoyage professionnel pour vos vitres et surfaces vitrées",
      longDescription: "Le lavage de vitres présente plusieurs avantages. Tout d’abord, cela améliore l’apparence générale de votre maison ou de votre entreprise en rendant vos fenêtres propres et transparentes. Cela permet également à plus de lumière naturelle de pénétrer à l’intérieur, ce qui crée une atmosphère plus lumineuse et agréable. De plus, le lavage régulier des fenêtres peut prolonger leur durée de vie en éliminant la saleté, la poussière et les contaminants qui pourraient les endommager. Enfin, cela peut également contribuer à maintenir la qualité de l’isolation thermique de vos fenêtres.",
      image: "./src/images/im.jpg"
    },
    {
      id: 2,
      title: "NETTOYAGE EXTÉRIEUR",
      shortDescription: "Nettoyage complet des façades et surfaces extérieures de votre propriété",
      longDescription: "Le nettoyage extérieur présente de nombreux avantages ! On utilise des produits spéciaux et de l’eau à basse pression pour nettoyer les surfaces extérieures de votre maison, comme les revêtements , les toitures et les moisissures. Les avantages incluent un nettoyage en douceur, une meilleure préservation des matériaux et une élimination efficace des saletés.",
      image: "./src/images/im.jpg"
    }
  ];

  return (
    <div className="services-bf-website-main-page-container">
      
      {/* Header */}
      <header className="services-bf-website-navigation-header-section">
        <div className="services-bf-website-header-content-wrapper-container">
          <div className="services-bf-website-company-logo-section">
            <div className="services-bf-website-logo-icon-blue-square">BF</div>
          </div>
          <nav className="services-bf-website-main-navigation-menu">
            <a href="#" className="services-bf-website-nav-menu-link services-bf-website-nav-link-active-state">ACCUEIL</a>
            <a href="#" className="services-bf-website-nav-menu-link">SERVICES</a>
            <a href="#" className="services-bf-website-nav-menu-link">À PROPOS</a>
            <a href="#" className="services-bf-website-nav-menu-link">NOS RÉALISATIONS</a>
            <a href="#" className="services-bf-website-nav-menu-link">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="services-bf-website-hero-banner-section">
        <video
          className="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="src/BG_video/Bghero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="services-bf-website-hero-background-overlay"></div>

        <div className="services-bf-website-hero-content-wrapper-container">
          <div className="services-bf-website-hero-text-content-area">
            <h2 className="services-bf-website-hero-blue-subtitle-text">
              VOTRE PROPRIÉTÉ, NOTRE PRIORITÉ!
            </h2>
            <h1 className="services-bf-website-hero-main-title-heading">
              Vos experts en entretiens
              <br />
              extérieurs d'immeubles
            </h1>
            <button className="services-bf-website-hero-cta-button-primary">
              DEMANDEZ VOTRE DEVIS →
            </button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="services-bf-website-services-showcase-section">
        <div className="services-bf-website-services-content-wrapper-container">
          <span className="services-bf-website-services-blue-tag-label">/ NOS SERVICES</span>
          <div className="services-bf-website-services-section-header-area">
            <h2 className="services-bf-website-services-main-section-title">
              Valorisez vos extérieurs
              <br />
              avec Les Services BF
            </h2>
            <button className="services-bf-website-services-view-more-button">Voir plus</button>
          </div>



          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
                onClick={() => setSelectedService(service)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-image">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} />
                  <div className="service-icon">
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.4519 13.4994H22.1182" stroke="white" strokeWidth="2.23804" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.2847 5.66602L22.1178 13.4992L14.2847 21.3323" stroke="white" strokeWidth="2.23804" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="services-bf-website-testimonials-reviews-section">
        <div className="services-bf-website-testimonials-content-wrapper-container">
          <div className="services-bf-website-testimonials-section-header-area">
            <span className="services-bf-website-testimonials-blue-tag-label">/ TÉMOIGNAGES</span>
          </div>
          <h2 className="services-bf-website-testimonials-main-section-title">
              Témoignages authentiques
              <br />
              de clients satisfaits
          </h2>

          <div className="services-bf-website-testimonials-cards-grid-layout">
            {[
              {
                name: "Jérôme Morelle",
                review: "Très satisfait du service de nettoyage. L'équipe est professionnelle et le résultat impeccable."
              },
              {
                name: "Sylvain Lemaire",
                review: "Service excellent, ponctuel et soigné. Je recommande vivement Les Services BF."
              },
              {
                name: "Mélanie Morelle",
                review: "Travail de qualité et équipe très professionnelle. Nos vitres n'ont jamais été aussi propres!"
              }
            ].map((testimonial, idx) => (
              <div className="services-bf-website-individual-testimonial-card" key={idx}>
                <div className="services-bf-website-testimonial-card-header-section">
                  <div className="services-bf-website-client-information-area">
                    <div className="services-bf-website-client-avatar-circle"></div>
                    <div>
                      <h4>{testimonial.name}</h4>
                      <div className="services-bf-website-five-star-rating-display">★★★★★</div>
                    </div>
                  </div>
                </div>
                <h5>Sparkling Clean Home</h5>
                <p>{testimonial.review}</p>
              </div>
            ))}
          </div>

          {/* Bottom Images Section - positioned right after testimonials */}
          <section className='bottom-images'>
            <div className="image-container">
              <div className="wide-image">
                <img src="./src/images/im.jpg" alt="Wide profile" />
              </div>
              <div className="square-image">
                <img src="./src/images/im.jpg" alt="Square thumbnail" />
              </div>
            </div>
          </section>

        </div>
      </section>
      
    </div>
  );
}
