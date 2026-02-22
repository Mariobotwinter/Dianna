import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, Instagram, MapPin } from 'lucide-react';
import { getWhatsAppLink, config } from '../config';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <span className="section-label">Hai să vorbim</span>
              <h2 className="section-title">Programează-te acum</h2>
              <p className="section-description">
                Scrie-mi pe WhatsApp și îți confirm rapid o programare.<br />
                Răspund prompt și îți ofer toate detaliile de care ai nevoie.
              </p>
              
              <Button 
                onClick={() => window.open(getWhatsAppLink(), '_blank')}
                className="contact-cta"
                size="lg"
              >
                <MessageCircle size={22} />
                Scrie pe WhatsApp
              </Button>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <h3 className="info-title">Locație</h3>
                  <p className="info-text">{config.location.displayText}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Instagram size={24} />
                </div>
                <div className="info-content">
                  <h3 className="info-title">Instagram</h3>
                  <a 
                    href={config.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    @oanaienasescu.nailartist
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <MessageCircle size={24} />
                </div>
                <div className="info-content">
                  <h3 className="info-title">WhatsApp</h3>
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    {config.whatsapp.number}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-logo">Oana Ienășescu</span>
              <span className="footer-tagline">Premium Nail Artist · Timișoara</span>
            </div>
            
            <div className="footer-links">
              <a 
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>© {currentYear} Oana Ienășescu Nail Artist. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
