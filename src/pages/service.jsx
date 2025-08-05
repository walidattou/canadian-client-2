import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../css/service.css';
import '../css/ModalService.css';
import '../css/main.css';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
        id: 1,
        title: t('services.lavageVitres.title'),
        shortDescription: t('services.lavageVitres.description'),
        longDescription: t('services.lavageVitres.longDescription'),
        mainImage: "/windowcleaning/windowCleaning.JPG",
        galleryImages: [
            "/windowcleaning/windowCleaning2.JPG",
            "/windowcleaning/windowCleaning3.jpg"
        ]
    },
    {
        id: 2,
        title: t('services.nettoyageExterieur.title'),
        shortDescription: t('services.nettoyageExterieur.description'),
        longDescription: t('services.nettoyageExterieur.longDescription'),
        mainImage: "/outside/Exteruir.jpg",
        galleryImages: [
            "/outside/Exteruir2.jpg",
            "/outside/Exteruir3.jpg"
        ]
    },
    {
        id: 3,
        title: t('services.entretienGouttieres.title'),
        shortDescription: t('services.entretienGouttieres.description'),
        longDescription: t('services.entretienGouttieres.longDescription'),
        mainImage: "/garout/garoutier.jpg",
        galleryImages: [
            "/garout/garoutier2.jpg",
            "/garout/garoutier3.jpg"
        ]
    },
    {
        id: 4,
        title: t('services.lavagePression.title'),
        shortDescription: t('services.lavagePression.description'),
        longDescription: t('services.lavagePression.longDescription'),
        mainImage: "/presurewashing/pressure.jpg",
        galleryImages: [
            "/presurewashing/pressure2.jpg",
            "/presurewashing/pressure3.jpg"
        ]
    }
    ];

  return (
    <div className="services-section">
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
            <a href="#" className="social-icon facebook">f</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="services-bf-website-navigation-header-section">
        <div className="services-bf-website-header-content-wrapper-container">
          <div className="services-bf-website-company-logo-section">
            <Link to="/" className="services-bf-website-logo-link">
              <img 
                src="/src/images/logo.png" 
                alt="Les Services BF Logo" 
                className="services-bf-website-logo-image"
              />
            </Link>
          </div>
          <nav className="services-bf-website-main-navigation-menu">
            <Link to="/" className="services-bf-website-nav-menu-link">{t('nav.accueil')}</Link>
            <Link to="/services" className="services-bf-website-nav-menu-link services-bf-website-nav-link-active-state">{t('nav.services')}</Link>
            <Link to="/servicesBF" className="services-bf-website-nav-menu-link">{t('nav.aPropos')}</Link>
            <Link to="/beforeandafter" className="services-bf-website-nav-menu-link">{t('nav.realisations')}</Link>
            <Link to="/contact" className="services-bf-website-nav-menu-link">{t('nav.contact')}</Link>
            <Link to="/contact" className="main-submission-button">
              <span className="button-text">{t('nav.soumission')}</span>
             
            </Link>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="services-header">
          <p className="services-subtitle">{t('services.subtitle')}</p>
          <h2 className="services-title">
            {t('services.title')}
          </h2>
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
                    <path d="M6.4519 13.4994H22.1182" stroke="white" strokeWidth="2.23804" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.2847 5.66602L22.1178 13.4992L14.2847 21.3323" stroke="white" strokeWidth="2.23804" strokeLinecap="round" strokeLinejoin="round"/>
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
                  maxHeight: '400px',        // Set a reasonable max height
                  overflowY: 'auto',         // Scroll if images overflow
                  alignItems: 'flex-start',  // Optional: align left
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
};

export default ServicesSection;
