import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/main.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page non trouvée</h2>
        <p className="not-found-description">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="not-found-actions">
          <button 
            className="primary-button"
            onClick={() => navigate('/')}
          >
            Retour à l'accueil
          </button>
          <button 
            className="secondary-button"
            onClick={() => navigate(-1)}
          >
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 