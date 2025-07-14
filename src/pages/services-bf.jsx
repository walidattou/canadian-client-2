import '../css/servicesbf.css';

export default function ServicesBF() {
  return (
    <div className="services-container">
      {/* À Propos Section */}
      <section className="about-section">
        <div className="section-header">
          <span className="section-label">/ A PROPOS</span>
        </div>
        <h1 className="main-title">Les Services BF</h1>
        <p className="subtitle">
          Votre partenaire de confiance en entretien <span className="highlight">extérieur d'immeubles</span>
        </p>

        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Text content */}
            <div className="text-content">
              <p>
                Depuis plusieurs années, notre équipe offre un service d'entretien extérieur professionnel et une
                compétence fiable : des clients satisfaits, des immeubles impeccables et une réputation basée sur
                l'excellence à travers Paris et sa banlieue parisienne.
              </p>
            </div>
            
            {/* Two small images */}
            <div className="small-images">
              <div className="image-placeholder small"><img src="./src/images/im.jpg" alt="" /></div>
              <div className="image-placeholder small"><img src="./src/images/im.jpg" alt="" /></div>
            </div>
          </div>

          {/* Right Column - One large image */}
          <div className="right-column">
            <div className="image-placeholder large">
              <img
                src="./src/images/im.jpg"
                alt="Large preview"
                style={{
                  width: '100%',
                  height: '305px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Notre Approche Section */}
      <section className="approach-section">
        <div className="section-header">
          <span className="section-label">/ NOTRE APPROCHE</span>
        </div>
        <div className="approach-content">
          <p>
            Chez Les Services BF, nous savons combien il est important pour vous de confier l'entretien de votre
            immeuble à une équipe de confiance. C'est pourquoi nous prenons le temps d'écouter vos besoins et de vous
            offrir un service personnalisé, attentif et respectueux de votre propriété.
          </p>
          <p>
            Notre équipe possédant intervient avec soin et professionnalisme, en choisissant les meilleures méthodes
            pour préserver la beauté et la longévité de votre propriété. Tout au long de notre collaboration, nous
            restons à votre écoute et disponibles pour vous accompagner, avec transparence et réactivité afin de vous
            garantir un service fiable et parfaitement adapté à vos attentes.
          </p>
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="values-section">
        <div className="section-header">
          <span className="section-label">NOS VALEURS</span>
        </div>
        <h2 className="values-title">NOS VALEURS DANS VOS PROJETS</h2>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>EXCELLENCE</h3>
            <p>
              Nous nous engageons à fournir un service impeccable, allant au-delà. Nos techniques et outils de pointe,
              nos des attentes pour garantir des résultats optimaux.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>FIABILITÉ</h3>
            <p>
              La ponctualité et la constance sont au cœur de nos services. Nous respectons nos engagements et maintenons
              une communication transparente tout au long du processus pour vous offre tranquillité.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2ZM21 9V7L15 4L12 5.5L9 4L3 7V9L9 6L12 7.5L15 6L21 9ZM12 8C13.1046 8 14 8.89543 14 10V22H10V10C10 8.89543 10.8954 8 12 8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>PROXIMITÉ</h3>
            <p>
              Nous privilégions une relation de confiance avec nos clients et partenaires locaux avec chacun de nos
              clients en offrant un service personnalisé et des solutions sur mesure adaptées à leurs spécifiques.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}