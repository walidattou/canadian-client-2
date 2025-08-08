import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, ChevronDown, Send, User, Building, Wrench, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import "../css/ContactForm.css";
import "../css/main.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
    ville2: '',
    services: '',
    servicesChoisis: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Formulaire soumis avec succès!');
  };

  return (
    <div className="contact-page-container">
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
            <Link to="/" className="services-bf-website-nav-menu-link">ACCUEIL</Link>
            <Link to="/services" className="services-bf-website-nav-menu-link">SERVICES</Link>
            <Link to="/servicesBF" className="services-bf-website-nav-menu-link">À PROPOS</Link>
            <Link to="/beforeandafter" className="services-bf-website-nav-menu-link">NOS RÉALISATIONS</Link>
            <Link to="/contact" className="services-bf-website-nav-menu-link services-bf-website-nav-link-active-state">CONTACT</Link>
            <Link to="/contact" className="main-submission-button">
              <span className="button-text">SOUMISSION</span>
        
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="contact-main-content">
        <div className="contact-background-elements">
          <div className="bg-element bg-element-1"></div>
          <div className="bg-element bg-element-2"></div>
        </div>

        <div className="contact-content-wrapper">
          <div className="contact-grid">
            
            {/* Left Side - Contact Info */}
            <div className="contact-info-section">
              <div className="contact-header">
                <h1 className="contact-title">
                  Contactez-nous
                  <span className="contact-subtitle">dès aujourd'hui</span>
                </h1>
                <p className="contact-description">
                  Obtenez une soumission gratuite pour vos services d'entretien extérieur d'immeubles.
                </p>
              </div>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon phone-icon-bg">
                    <Phone className="contact-icon" size={20} />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Téléphone</h3>
                    <p className="contact-card-text">+1 819-588-5224</p>
                    <p className="contact-card-subtext">Lun - Ven, 8h00 - 17h00</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon email-icon-bg">
                    <Mail className="contact-icon" size={20} />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Email</h3>
                    <p className="contact-card-text">lesservicesbf@gmail.com</p>
                    <p className="contact-card-subtext">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon location-icon-bg">
                    <MapPin className="contact-icon" size={20} />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Zone de service</h3>
                    <p className="contact-card-text">Estrie et Centre du Québec</p>
                    <p className="contact-card-subtext">Déplacements gratuits</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <div className="form-background-pattern"></div>
                
                <div className="form-content">
                  <div className="form-header">
                    <h2 className="form-title">Demande de soumission</h2>
                    <p className="form-subtitle">Remplissez le formulaire et nous vous contacterons rapidement</p>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                    {/* Personal Info Section */}
                    <div className="form-section">
                      <div className="section-header">
                        <User className="section-icon" size={20} />
                        <h3 className="section-title">Informations personnelles</h3>
                      </div>
                      
                      <div className="form-row">
                        <div className="form-group">
                          <input
                            type="text"
                            name="nom"
                            placeholder="Nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="prenom"
                            placeholder="Prénom"
                            value={formData.prenom}
                            onChange={handleInputChange}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <input
                          type="email"
                          name="email"
                          placeholder="Adresse email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                        <input
                          type="tel"
                          name="telephone"
                          placeholder="Téléphone (ex: +1 819-588-5224)"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Address Section */}
                    <div className="form-section">
                      <div className="section-header">
                        <Building className="section-icon" size={20} />
                        <h3 className="section-title">Adresse du projet</h3>
                      </div>
                      
                      <input
                        type="text"
                        name="adresse"
                        placeholder="Adresse complète"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        className="form-input full-width"
                      />

                      <div className="form-row three-columns">
                        <input
                          type="text"
                          name="ville"
                          placeholder="Ville"
                          value={formData.ville}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                        <input
                          type="text"
                          name="codePostal"
                          placeholder="Code postal"
                          value={formData.codePostal}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                        <input
                          type="text"
                          name="ville2"
                          placeholder="Province"
                          value={formData.ville2}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Services Section */}
                    <div className="form-section">
                      <div className="section-header">
                        <Wrench className="section-icon" size={20} />
                        <h3 className="section-title">Services requis</h3>
                      </div>
                      
                      <div className="form-row">
                        <div className="form-group select-group">
                          <select
                            name="services"
                            value={formData.services}
                            onChange={handleInputChange}
                            className="form-select"
                          >
                            <option value="">Sélectionnez un service</option>
                            <option value="lavage-vitres">LAVAGE DE VITRES</option>
                            <option value="nettoyage-exterieur">NETTOYAGE EXTÉRIEUR</option>
                            <option value="entretien-gouttieres">ENTRETIEN DE GOUTTIÈRES</option>
                            <option value="lavage-pression">LAVAGE À PRESSION</option>
                          </select>
                          <ChevronDown className="select-arrow" size={20} />
                        </div>
                        <input
                          type="text"
                          name="servicesChoisis"
                          placeholder="Services additionnels"
                          value={formData.servicesChoisis}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="submit-button"
                    >
                      <Send size={20} />
                      Envoyer ma demande
                    </button>
                  </form>

                  <div className="form-footer">
                    <p className="form-footer-text">
                      <strong>Réponse garantie sous 24h</strong> • Soumission gratuite • Sans engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
