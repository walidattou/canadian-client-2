import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import '../css/servicesbf.css';
import '../css/main.css';

export default function ServicesBF() {
  const navigate = useNavigate();

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
            <Link to="/" className="services-bf-website-nav-menu-link">ACCUEIL</Link>
            <Link to="/services" className="services-bf-website-nav-menu-link">SERVICES</Link>
            <Link to="/servicesBF" className="services-bf-website-nav-menu-link services-bf-website-nav-link-active-state">À PROPOS</Link>
            <Link to="/beforeandafter" className="services-bf-website-nav-menu-link">NOS RÉALISATIONS</Link>
            <Link to="/contact" className="services-bf-website-nav-menu-link">CONTACT</Link>
            <Link to="/contact" className="main-submission-button">
              <span className="button-text">SOUMISSION</span>
    
            </Link>
          </nav>
        </div>
      </header>

      {/* À Propos Section */}
      <div className="services-container">
        <section className="about-section">
          <div className="container">
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
                    Depuis plusieurs années, notre équipe offre un service d'entretien extérieur professionnel et sans compromis.
                    Résultat : des clients satisfaits, des immeubles impeccables et une réputation bâtie sur l'excellence à travers l'Estrie et le Centre du Québec.
                  </p>
                </div>
                
                {/* Two small images */}
                <div className="small-images">
                  <div className="image-placeholder small">
                    <img src="/windowcleaning/windowCleaning.JPG" alt="Professional window cleaning service" />
                  </div>
                  <div className="image-placeholder small">
                    <img src="/outside/Exteruir.jpg" alt="Professional exterior cleaning service" />
                  </div>
                </div>
              </div>

              {/* Right Column - One large image */}
              <div className="right-column">
                <div className="image-placeholder large">
                  <img
                    src="/images/Bigphoto.jpg"
                    alt="Professional cleaning services showcase"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Notre Approche Section */}
        <section className="approach-section">
          <div className="container">
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
                Notre équipe passionnée intervient avec soin et professionnalisme, en choisissant les meilleures méthodes
                pour préserver la beauté et la longévité de votre propriété.
              </p>
              <p>
                Tout au long de notre collaboration, nous restons à votre écoute et disponibles pour vous accompagner, avec transparence et réactivité afin de vous
                garantir un service fiable et parfaitement adapté à vos attentes.
              </p>
            </div>
          </div>
        </section>

        {/* Nos Valeurs Section */}
        <section className="values-section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">NOS VALEURS</span>
            </div>
            <h2 className="values-title">NOS VALEURS DANS VOS PROJETS</h2>

            <div className="values-grid">
              <div className="value-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3>EXCELLENCE</h3>
                <p>
                  Nous nous engageons à fournir un service irréprochable, alliant savoir-faire technique et souci du détail, pour des résultats toujours à la hauteur de vos attentes.
                </p>
                <div className="card-decoration"></div>
              </div>

              <div className="value-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  La confiance de nos clients est essentielle. Nous respectons nos engagements, intervenons ponctuellement et assurons un suivi constant pour votre entière tranquillité.
                </p>
                <div className="card-decoration"></div>
              </div>

              <div className="value-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2ZM21 9V7L15 4L12 5.5L9 4L3 7V9L9 6L12 7.5L15 6L21 9ZM12 8C13.1046 8 14 8.89543 14 10V22H10V10C10 8.89543 10.8954 8 12 8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3>PROXIMITÉ</h3>
                <p>
                  À l'écoute et disponibles, nous construisons une relation de partenariat durable avec chacun de nos clients, en adaptant nos services à leurs besoins spécifiques.
                </p>
                <div className="card-decoration"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}