// ModalService.jsx
import React from 'react';
import "../css/ModalService.css";

const ModalService = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper" onClick={e => e.stopPropagation()}>
        <p className="modal-subtitle">/ NOS SERVICES</p>

        <div className="modal-gallery">
          <img src={selectedService.image} className="large-img" alt="main" />
              <div className="small-images"style={{ display: 'flex', flexDirection: 'column' , flexWrap: 'nowrap' }}>
                <img src={service.image} alt="small1" />
                <img src={service.image} alt="small2" />
          </div>
        </div>


        <h2 className="modal-title">{service.title}</h2>
        <p className="modal-description">
          Le lavage de vitres présente plusieurs avantages. Tout d’abord, cela améliore
          l’apparence générale de votre maison ou de votre entreprise en rendant vos fenêtres
          propres et transparentes. Cela permet également à plus de lumière naturelle de
          pénétrer à l’intérieur, ce qui crée une atmosphère plus lumineuse et agréable...
        </p>

        <div className="modal-actions">
          <button className="btn-outline" onClick={onClose}>Retour</button>
          <button className="btn-filled">Soumission</button>
        </div>
      </div>
    </div>
  );
};

export default ModalService;
