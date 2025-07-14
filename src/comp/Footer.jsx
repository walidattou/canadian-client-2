import "../css/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="company-info">
              <img src="./src/images/logo.png" alt="Les Services BF Logo" className="footer-logo" />
              <p className="company-description">
                Les Services BF est une entreprise spécialisée dans l'entretien extérieur d'immeuble résidentiel et
                commercial. Nous offrons une gamme complète de services. Notre objectif est de vous aider à maintenir
                votre propriété propre et en bon état tout au long de l'année!
              </p>
              <div className="social-icons">
        
                <a href="https://facebook.com" class="facebook-link" target="_blank" rel="noopener noreferrer">
                  <div class="facebook-icon-bubble">
                    <svg width="16" height="16" viewBox="0 0 320 512" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M279.14 288l14.22-92.66h-88.91V134.12c0-25.35 
                        12.42-50.06 52.24-50.06H293V6.26S259.5 
                        0 225.36 0c-73.22 0-121.08 44.38-121.08 
                        124.72v70.62H22.89V288h81.39v224h100.2V288z"/>
                    </svg>
                  </div>
                  <span class="facebook-label">Les Services BF</span>
                </a>




                <a href="mailto:lesservicesbf@gmail.com" class="email-link" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0086D1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 
                      20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6L12 11L4 6H20ZM4 
                      18V8L12 13L20 8V18H4Z"/>
                  </svg>
                  <span class="email-label">lesservicesbf@gmail.com</span>
                </a>




              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-columns">
              <div className="footer-column">
                <h3 className="column-title">Navigation</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Accueil</a>
                  </li>
                  <li>
                    <a href="#">A propos</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Realisations</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="column-title">Services</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">LAVAGE DE VITRES</a>
                  </li>
                  <li>
                    <a href="#">ENTRETIEN DE GOUTTIÈRES</a>
                  </li>
                  <li>
                    <a href="#">NETTOYAGE EXTÉRIEUR</a>
                  </li>
                  <li>
                    <a href="#">LAVAGE À PRESSION</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">Copyright © 2023 Lemonade | Design by TechTema</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#" className="footer-bottom-link">
              Terms of Use
            </a>
            <span className="separator">|</span>
            <a href="#" className="footer-bottom-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
