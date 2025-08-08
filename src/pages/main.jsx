import React, { useState, useRef } from 'react';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../css/main.css";
import "../css/service.css";
import "../css/ModalService.css";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const googleReviews = [
    {
      name: "Rafaël Lamontagne",
      review: "Très satisfait du service ! L'équipe est ponctuelle et professionnelle. Mes vitres n'ont jamais été aussi propres. Je recommande sans hésiter!"
    },
    {
      name: "Karolane Voyer Roy",
      review: "Service très efficace et excellent lavage de mes fenêtres. Elles sont super claires et propres. Équipe très professionnelle. Je les recommande fortement !"
    },
    {
      name: "Marianne Dupont",
      review: "Excellent service du début à la fin. Nathan et son équipe ont lavé mes vitres et nettoyé mes gouttières, tout est impeccable. Je vais définitivement refaire affaire avec eux!"
    },
    {
      name: "R.n.powell",
      review: "Super happy with the service! My windows are crystal clear, and the balcony looks completely refreshed. Very professional team!"
    },
    {
      name: "Fortuna Gebrewet",
      review: "They did an incredible job, my concrete patio looks like new, and the windows haven't been this clean in years. Very professional team!"
    },
    {
      name: "Charlotte Morin",
      review: "Service impeccable ! Nettoyage des fenêtres et du balcon très bien fait. Professionnels et respectueux. Je recommande sans hésiter !"
    }
  ];



  const services = [
    {
        id: 1,
        title: "LAVAGE DE VITRES",
        shortDescription: "Service de nettoyage professionnel pour vos vitres et surfaces vitrées",
        longDescription: "Le lavage de vitres présente plusieurs avantages. Tout d'abord, cela améliore l'apparence générale de votre maison ou de votre entreprise en rendant vos fenêtres propres et transparentes. Cela permet également à plus de lumière naturelle de pénétrer à l'intérieur, ce qui crée une atmosphère plus lumineuse et agréable. De plus, le lavage régulier des fenêtres peut prolonger leur durée de vie en éliminant la saleté, la poussière et les contaminants qui pourraient les endommager. Enfin, cela peut également contribuer à maintenir la qualité de l'isolation thermique de vos fenêtres. Donc, en résumé, le lavage de vitres offre à la fois des avantages esthétiques et pratiques !",
        mainImage: "/images/vitre1.jpg",
        galleryImages: [
            "/images/vitre2.jpg",
            "/images/vitre3.jpg"
        ]
    },
    {
        id: 2,
        title: "NETTOYAGE EXTÉRIEUR",
        shortDescription: "Nettoyage complet des façades et surfaces extérieures de votre propriété",
        longDescription: "Le nettoyage extérieur présente de nombreux avantages ! On utilise des produits spéciaux et de l'eau à basse pression pour nettoyer les surfaces extérieures de votre maison, comme les revêtements , les toitures et les moisissures. Les avantages incluent un nettoyage en douceur, une meilleure préservation des matériaux et une élimination efficace des saletés. C'est une excellente option pour garder votre maison propre et en bon état !",
        mainImage: "/outside/Exteruir.jpg",
        galleryImages: [
            "/outside/Exteruir2.jpg",
            "/outside/Exteruir3.jpg"
        ]
    },
    {
        id: 3,
        title: "ENTRETIEN DE GOUTTIÈRES",
        shortDescription: "Nettoyage et entretien professionnel de vos gouttières",
        longDescription: "L'entretien des gouttières est essentiel pour protéger votre propriété. Nos services incluent le nettoyage complet des gouttières, l'élimination des débris et la vérification du bon fonctionnement du système de drainage. Cela prévient les dommages causés par l'eau et maintient l'intégrité de votre toiture.",
        mainImage: "/garout/garoutier.jpg",
        galleryImages: [
            "/beforeafter/gutter01.jpg",
            "/beforeafter/gutter02.jpg"
        ]
    },
    {
        id: 4,
        title: "LAVAGE À PRESSION",
        shortDescription: "Service de nettoyage à pression pour toutes vos surfaces extérieures",
        longDescription: "Le lavage à pression est une méthode efficace pour nettoyer en profondeur les surfaces extérieures. Nous utilisons de l'eau à haute pression pour éliminer la saleté, les taches et les moisissures de vos allées, terrasses, murs et autres surfaces extérieures.",
        mainImage: "/beforeafter/pression01.jpg",
        galleryImages: [
            "/beforeafter/pression02.jpg",
            "/presurewashing/pressure3.jpg"
        ]
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
            {t('topStrip.tagline')}
          </div>
          <div className="social-section">
            <a href="https://www.facebook.com/people/Les-Services-BF/100084751583004/?locale=fr_CA" className="social-icon facebook" target="_blank" rel="noopener noreferrer">f</a>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <header className="services-bf-website-navigation-header-section">
        <div className="services-bf-website-header-content-wrapper-container">
          <div className="services-bf-website-company-logo-section">
            <Link to="/" className="services-bf-website-logo-link">
              <img 
                src="/images/logo.png" 
                alt="Les Services BF Logo" 
                className="services-bf-website-logo-image"
              />
            </Link>
          </div>
          <nav className="services-bf-website-main-navigation-menu">
            <Link to="/" className="services-bf-website-nav-menu-link services-bf-website-nav-link-active-state">{t('nav.accueil')}</Link>
            <Link to="/services" className="services-bf-website-nav-menu-link">{t('nav.services')}</Link>
            <Link to="/servicesBF" className="services-bf-website-nav-menu-link">{t('nav.aPropos')}</Link>
            <Link to="/beforeandafter" className="services-bf-website-nav-menu-link">{t('nav.realisations')}</Link>
            <Link to="/contact" className="services-bf-website-nav-menu-link">{t('nav.contact')}</Link>
            <Link to="/contact" className="main-submission-button">
              <span className="button-text">{t('nav.soumission')}</span>
            </Link>
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
          <source src="/BG_video/Bghero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="services-bf-website-hero-background-overlay"></div>

        <div className="services-bf-website-hero-content-wrapper-container">
          <div className="services-bf-website-hero-text-content-area">
            <h2 className="services-bf-website-hero-blue-subtitle-text">
              {t('hero.subtitle')}
            </h2>
            <h1 className="services-bf-website-hero-main-title-heading">
              {t('hero.title')}
            </h1>
            <Link to="/contact" className="services-bf-website-hero-cta-button-primary">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* New Section - Property Types */}
      <section className="property-types-section">
        <div className="property-types-content">
          <div className="property-dot"></div>
          <h2 className="property-types-title">
            {t('propertyTypes.title')}
          </h2>
        </div>
      </section>


      {/* Services Section */}
      <section className="services-bf-website-services-showcase-section">
        <div className="services-bf-website-services-content-wrapper-container">
          <span className="services-bf-website-services-blue-tag-label">{t('services.subtitle')}</span>
          <div className="services-bf-website-services-section-header-area">
            <h2 className="services-bf-website-services-main-section-title">
              {t('services.title')}
            </h2>
            <Link to="/services" className="services-bf-website-services-view-more-button">{t('services.viewMore')}</Link>
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
                  <img src={service.mainImage || service.image || "/placeholder.svg"} alt={service.title} />
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
            <span className="testimonials-blue-tag">{t('testimonials.subtitle')}</span>
            <h2 className="testimonials-title">
              {t('testimonials.title')}
            </h2>
          </div>

          <div className="testimonials-carousel">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              className="testimonials-swiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: '.right-arrow',
                prevEl: '.left-arrow',
              }}
              autoplay={false}
              allowTouchMove={true}
              touchRatio={0.8}
              resistance={true}
              resistanceRatio={0.85}
              touchStartPreventDefault={false}
              shortSwipes={true}
              longSwipes={true}
              longSwipesRatio={0.5}
              longSwipesMs={300}
              followFinger={true}
              breakpoints={{
                640: { 
                  slidesPerView: 1, 
                  spaceBetween: 20,
                  centeredSlides: true,
                  loop: true,
                  autoplay: false,
                  allowTouchMove: true,
                  touchRatio: 0.3,
                  resistance: true,
                  resistanceRatio: 0.5,
                  shortSwipes: false,
                  longSwipes: true,
                  longSwipesRatio: 0.8,
                  longSwipesMs: 800,
                  followFinger: false,
                  touchStartPreventDefault: true,
                  touchMoveStopPropagation: true
                },
                768: { 
                  slidesPerView: 2, 
                  spaceBetween: 30,
                  centeredSlides: true,
                  loop: true,
                  autoplay: false,
                  allowTouchMove: true,
                  touchRatio: 0.3,
                  resistance: true,
                  resistanceRatio: 0.5,
                  shortSwipes: false,
                  longSwipes: true,
                  longSwipesRatio: 0.8,
                  longSwipesMs: 800,
                  followFinger: false,
                  touchStartPreventDefault: true,
                  touchMoveStopPropagation: true
                },
                1024: { 
                  slidesPerView: 3, 
                  spaceBetween: 30,
                  centeredSlides: true,
                  loop: true,
                  autoplay: false,
                  allowTouchMove: true,
                  touchRatio: 0.8,
                  resistance: true,
                  resistanceRatio: 0.85,
                  shortSwipes: true,
                  longSwipes: true,
                  longSwipesRatio: 0.5,
                  longSwipesMs: 300,
                  followFinger: true
                },
              }}
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

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-wrapper" onClick={e => e.stopPropagation()}>
            <p className="modal-subtitle">{t('modal.subtitle')}</p>
            <div className="modal-gallery">
              <img src={selectedService.mainImage} className="large-img" alt="main" />

              <div
                className="hide-on-mobile"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  maxHeight: '400px',
                  overflowY: 'auto',
                  alignItems: 'flex-start',
                }}
              >
                {selectedService.galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`gallery-${index + 1}`}
                    style={{ width: '200px', height: '120px', objectFit: 'cover',borderRadius:5 }}
                  />
                ))}
              </div>
            </div>

            <h2 className="modal-title">{selectedService.title}</h2>
            <p className="modal-description">{selectedService.longDescription}</p>

            <div className="modal-actions">
              <button className="btn-outline" onClick={() => setSelectedService(null)}>{t('modal.back')}</button>
              <button className="btn-filled" onClick={() => {
                setSelectedService(null);
                navigate('/contact');
              }}>{t('modal.submission')}</button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
