"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Phone, Facebook, ChevronDown, ChevronLeft, ChevronRight, Send, Sparkles, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import "../css/BeforeAfterSlider.css";
import "../css/main.css";

const BeforeAfterSlider = ({ beforeImage, afterImage, label }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="before-after-container"
      style={{ userSelect: 'none' }}
    >
      {/* Before Image */}
      <div className="before-image-container">
        <img 
          src={beforeImage}
          alt="Before" 
          className="before-image"
          onError={(e) => {
            console.error('Image failed to load:', beforeImage);
            e.target.style.display = 'none';
          }}
        />
        <div className="before-label">
          Avant
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="after-image-container"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage}
          alt="After" 
          className="after-image"
          onError={(e) => {
            console.error('Image failed to load:', afterImage);
            e.target.style.display = 'none';
          }}
        />
        <div className="after-label">
          Après
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Slider Line */}
        <div className="slider-line"></div>
        
        {/* Slider Button */}
        <div className="slider-button">
          <div className="slider-arrows">
            <ChevronLeft size={12} className="slider-arrow" />
            <ChevronRight size={12} className="slider-arrow" />
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="hover-overlay"></div>
    </div>
  );
};

const BeforeAfterCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    { id: 1, beforeImage: "/beforeafter/im1after.JPG", afterImage: "/beforeafter/im1before.JPG" },
    { id: 2, beforeImage: "/beforeafter/im2before.JPG", afterImage: "/beforeafter/im2after.JPG" },
    { id: 3, beforeImage: "/beforeafter/im3before.jpg", afterImage: "/beforeafter/im3after.jpg" },
    { id: 4, beforeImage: "/beforeafter/im4before.JPG", afterImage: "/beforeafter/im4after.JPG" },
    { id: 5, beforeImage: "/beforeafter/im5before.JPG", afterImage: "/beforeafter/im5after.JPG" },
    { id: 6, beforeImage: "/beforeafter/im6before.jpg", afterImage: "/beforeafter/im6after.jpg" },
    { id: 7, beforeImage: "/beforeafter/im7before.JPG", afterImage: "/beforeafter/im7after.JPG" },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="before-after-page-container">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>

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
            <Link to="/" className="services-bf-website-nav-menu-link">ACCUEIL</Link>
            <Link to="/services" className="services-bf-website-nav-menu-link">SERVICES</Link>
            <Link to="/servicesBF" className="services-bf-website-nav-menu-link">À PROPOS</Link>
            <Link to="/beforeandafter" className="services-bf-website-nav-menu-link services-bf-website-nav-link-active-state">NOS RÉALISATIONS</Link>
            <Link to="/contact" className="services-bf-website-nav-menu-link">CONTACT</Link>
            <Link to="/contact" className="main-submission-button">
              <span className="button-text">SOUMISSION</span>
              
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Header Section */}
        <div className="header-section">
          <div className="badge-container">
            <Sparkles className="badge-icon" size={20} />
            <span className="badge-text">Nos Réalisations</span>
          </div>
          
          <h1 className="main-title">
            Transformations
            <span className="title-highlight">
              Spectaculaires
            </span>
          </h1>
          
          <p className="main-description">
            Découvrez la différence qu'un nettoyage professionnel peut faire pour vos immeubles
          </p>
          
          <div className="features-container">
            <div className="feature-item">
              <Eye className="feature-icon" size={20} />
              <span className="feature-text">Glissez pour comparer</span>
            </div>
            <div className="feature-item">
              <Star className="star-icon" size={20} />
              <span className="feature-text">Résultats garantis</span>
            </div>
          </div>
        </div>

        {/* Mobile Carousel Layout */}
        {isMobile && (
          <MobileCarousel slides={slides} />
        )}

        {/* Desktop Carousel Layout */}
        {!isMobile && (
          <DesktopCarousel slides={slides} />
        )}

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-container">
            <h3 className="cta-title">
              Impressionné par nos résultats ?
            </h3>
            <p className="cta-description">
              Obtenez une soumission gratuite pour votre prochain projet d'entretien extérieur
            </p>
            <Link to="/contact" className="cta-button">
              <Send size={20} />
              Demander une soumission
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile carousel component
const MobileCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(slides.length - 1, prev + 1));
  };

  return (
    <>
      {/* Mobile Carousel Content */}
      <div className="mobile-carousel-container">
        {/* Current Slide */}
        <div className="mobile-slide-container">
          <BeforeAfterSlider
            beforeImage={slides[currentIndex].beforeImage}
            afterImage={slides[currentIndex].afterImage}
            label={`Comparison ${slides[currentIndex].id}`}
          />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-navigation">
        <button 
          onClick={goToPrevious} 
          disabled={currentIndex === 0}
          className="mobile-bottom-nav-button"
        >
          <ChevronLeft size={16} />
        </button>
        
        <div className="mobile-dots-container">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`mobile-dot ${index === currentIndex ? 'mobile-active-dot' : 'mobile-inactive-dot'}`}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNext}
          disabled={currentIndex >= slides.length - 1}
          className="mobile-bottom-nav-button"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </>
  );
};

// Separate component for desktop carousel
const DesktopCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(slides.length - 3, prev + 1));
  };

  const getVisibleSlides = () => {
    return slides.slice(currentIndex, currentIndex + 3);
  };

  return (
    <>
      {/* Carousel Content */}
      <div className="carousel-container">
        {/* Left Arrow */}
        <button 
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="nav-button nav-button-left"
        >
          <ChevronLeft size={24} className="nav-icon" />
        </button>

        {/* Slider Cards Container */}
        <div className="slider-cards-container">
          {getVisibleSlides().map((slide, index) => (
            <div 
              key={`slide-${slide.id}`}
              className={`slider-card ${index === 1 ? 'active-card' : 'inactive-card'}`}
            >
              <BeforeAfterSlider
                beforeImage={slide.beforeImage}
                afterImage={slide.afterImage}
                label={`Comparison ${slide.id}`}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={goToNext} 
          disabled={currentIndex >= slides.length - 3}
          className="nav-button nav-button-right"
        >
          <ChevronRight size={24} className="nav-icon" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-navigation">
        <button 
          onClick={goToPrevious} 
          disabled={currentIndex === 0}
          className="bottom-nav-button"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="dots-container">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index >= currentIndex && index < currentIndex + 3 ? 'active-dot' : 'inactive-dot'}`}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNext} 
          disabled={currentIndex >= slides.length - 3}
          className="bottom-nav-button"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
};

export default BeforeAfterCarousel;
