import React, { useState } from 'react';
import "../css/ContactForm.css";

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
  };

  return (
    <div className="contact-container">
      {/* Main Content */}
      <div className="main-content">
        <div className="form-section">
          <h2 className="form-title"></h2>
          
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Row 1: Nom and Prenom */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prenom</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  placeholder="Prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Row 2: E-mail and Telephone */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="ex: +1..."
                  value={formData.telephone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Row 3: Adresse and Ville */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="adresse">Adresse</label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  placeholder="Adresse"
                  value={formData.adresse}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ville">Ville</label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  placeholder="Ville"
                  value={formData.ville}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Row 4: Code Postal and Ville */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="codePostal">Code Postal</label>
                <input
                  type="text"
                  id="codePostal"
                  name="codePostal"
                  placeholder="Code Postal"
                  value={formData.codePostal}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ville2">Ville</label>
                <input
                  type="text"
                  id="ville2"
                  name="ville2"
                  placeholder="Ville"
                  value={formData.ville2}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Row 5: Services and Services Choisis */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="services">Services</label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                >
                  <option value="">Choisir Services</option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  <option value="service3">Service 3</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="servicesChoisis">Services Choisis</label>
                <input
                  type="text"
                  id="servicesChoisis"
                  name="servicesChoisis"
                  placeholder="Services Choisis"
                  value={formData.servicesChoisis}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Soumettre
            </button>
          </form>
        </div>

        {/* Blue Diagonal Background */}
        <div className="blue-diagonal"></div>
      </div>
    </div>
  );
};

export default ContactForm;
