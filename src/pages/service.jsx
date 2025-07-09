import React, { useState } from 'react';
import '../css/service.css';
import '../css/ModalService.css'; // 👈 make sure this contains modal styles

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
        id: 1,
        title: "LAVAGE DE VITRES",
        shortDescription: "Service de nettoyage professionnel pour vos vitres et surfaces vitrées",
        longDescription: "Le lavage de vitres présente plusieurs avantages. Tout d’abord, cela améliore l’apparence générale de votre maison ou de votre entreprise en rendant vos fenêtres propres et transparentes. Cela permet également à plus de lumière naturelle de pénétrer à l’intérieur, ce qui crée une atmosphère plus lumineuse et agréable. De plus, le lavage régulier des fenêtres peut prolonger leur durée de vie en éliminant la saleté, la poussière et les contaminants qui pourraient les endommager. Enfin, cela peut également contribuer à maintenir la qualité de l’isolation thermique de vos fenêtres. Donc, en résumé, le lavage de vitres offre à la fois des avantages esthétiques et pratiques !",
        image: "./src/images/im.jpg"
    },
    {
        id: 2,
        title: "NETTOYAGE EXTÉRIEUR",
        shortDescription: "Nettoyage complet des façades et surfaces extérieures de votre propriété",
        longDescription: "Le nettoyage extérieur présente de nombreux avantages ! On utilise des produits spéciaux et de l’eau à basse pression pour nettoyer les surfaces extérieures de votre maison, comme les revêtements , les toitures et les moisissures. Les avantages incluent un nettoyage en douceur, une meilleure préservation des matériaux et une élimination efficace des saletés. C'est une excellente option pour garder votre maison propre et en bon état !",
        image: "./src/images/im.jpg"
    },
    {
        id: 3,
        title: "ENTRETIEN DE GOUTTIÈRES",
        shortDescription: "Maintenance et nettoyage professionnel de vos systèmes de gouttières",
        longDescription: "L'entretien des gouttières est important pour plusieurs raisons. Tout d'abord, les gouttières jouent un rôle essentiel dans la gestion des eaux pluviales en les dirigeant loin de votre maison. Lorsque les gouttières sont obstruées par des feuilles, des débris ou des nids d'oiseaux, l'eau peut déborder et causer des dommages aux fondations, aux murs et aux sous-sols de votre maison. En nettoyant régulièrement vos gouttières, vous pouvez prévenir ces problèmes et maintenir l'intégrité de votre maison. De plus, l'entretien des gouttières peut également contribuer à prolonger leur durée de vie en évitant l'accumulation de débris qui pourrait les endommager. Donc, pour protéger votre maison et préserver vos gouttières, il est important de les entretenir régulièrement !",
        image: "./src/images/im.jpg"
    },
    {
        id: 4,
        title: "LAVAGE À PRESSION",
        shortDescription: "Service de nettoyage haute pression pour terrasses, allées et façades",
        longDescription: "Le lavage à pression est une méthode de nettoyage qui utilise de l'eau sous pression pour enlever la saleté, les taches et les dépôts tenaces sur différentes surfaces. On utilise généralement un appareil spécialisé, comme un nettoyeur haute pression, pour projeter un jet d'eau puissant sur la surface à nettoyer. Cela permet d'éliminer efficacement la saleté sans avoir à frotter intensément. C'est une méthode pratique et efficace pour nettoyer les terrasses, le béton, le pavé uni et d'autres surfaces extérieures.",
        image: "./src/images/im.jpg"
    }
    ];


  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <p className="services-subtitle">NOS SERVICES</p>
          <h2 className="services-title">
            Valorisez vos extérieurs avec<br />
            Les Services BF
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
                <img src={service.image || "/placeholder.svg"} alt={service.title} />
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
            <p className="modal-subtitle">/ NOS SERVICES</p>
            <div className="modal-gallery">
              <img src={selectedService.image} className="large-img" alt="main" />
              <div className="small-images">
                <img src={selectedService.image} alt="small1" />
                <img src={selectedService.image} alt="small2" />
              </div>
            </div>

            <h2 className="modal-title">{selectedService.title}</h2>
            <p className="modal-description">{selectedService.longDescription}</p>

            <div className="modal-actions">
              <button className="btn-outline" onClick={() => setSelectedService(null)}>Retour</button>
              <button className="btn-filled">Soumission</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
