import React, { useState } from 'react';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../css/main.css";
import "../css/service.css";

export default function MainPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const googleReviews = [
    {
      name: "Sophie Poirier",
      review: "Service très courtois et travail minutieux. Je recommande sans aucune hésitation."
    },
    {
      name: "Maryse St-Amant",
      review: "William est venu faire le lavage des vitres extérieures chez-moi, le 23 mai 2024, je suis très satisfaite du travail accompli. Ils utilisent une nouvelle technologie, il brosse la vitre plusieurs fois. A1 dans tout!"
    },
    {
      name: "Eugénie Lemire-Théberge",
      review: "Tout c'est bien déroulé, je recommande sans appelle à eux annuellement c'est certain!"
    },
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
  ];



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
      
      {/* Top Blue Strip */}
      <div className="top-blue-strip">
        <div className="top-strip-content">
          <div className="phone-section">
            <Phone className="phone-icon" size={16} />
            <span>+1 819-588-5224</span>
          </div>
          <div className="center-text">
            VOS EXPERTS EN ENTRETIENS EXTÉRIEURS D'IMMEUBLES
          </div>
          <div className="social-section">
            <a href="#" className="social-icon facebook">f</a>
            <div className="language-selector">
              <span>FR</span>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
        </div>
      </div>

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
          <source src="/src/BG_video/Bghero.mp4" type="video/mp4" />
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

      {/* New Section - Property Types */}
      <section className="property-types-section">
        <div className="property-types-content">
          <div className="property-dot"></div>
          <h2 className="property-types-title">
            RÉSIDENTIEL - IMMEUBLES LOCATIFS - COMMERCIAL
          </h2>
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

      {/* Google-Style Testimonials Carousel Section */}
      <section className="google-testimonials-section">
        <div className="testimonials-background">
          <img src="/images/reviewBI.jpg" alt="Background" className="testimonials-bg-image" />
          <div className="testimonials-overlay"></div>
        </div>
        
        <div className="testimonials-content">
          <div className="testimonials-header">
            <span className="testimonials-blue-tag">/ TÉMOIGNAGES</span>
            <h2 className="testimonials-title">
              Avis Google de nos clients
            </h2>
          </div>

          <div className="testimonials-carousel">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              className="testimonials-swiper"
            >
              {googleReviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4 className="reviewer-name">{review.name}</h4>
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="star">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="review-text">{review.review}</p>
                    <div className="google-logo">
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="google-text">Google</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="carousel-bottom-section">
              <div className="bottom-arrows">
                <button className="bottom-arrow left-arrow">
                  <ChevronLeft size={20} />
                </button>
                <button className="bottom-arrow right-arrow">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      
    </div>
  );
}
