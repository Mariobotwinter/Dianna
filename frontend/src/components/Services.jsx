import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { services } from '../data/services';
import { getWhatsAppLink } from '../config';
import '../styles/Services.css';

const Services = () => {
  return (
    <section id="servicii" className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Ce ofer</span>
          <h2 className="section-title">Servicii Premium</h2>
          <p className="section-description">
            De la manichiură clasică la design-uri personalizate sofisticate.<br />
            Fiecare serviciu este realizat cu atenție la detalii și produse premium.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-divider"></div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p className="cta-text">
            Tarife personalizate în funcție de complexitatea lucrării
          </p>
          <Button 
            onClick={() => window.open(getWhatsAppLink('Bună! Aș dori să aflu mai multe despre servicii și tarife. 💅'), '_blank')}
            className="services-cta-button"
            size="lg"
          >
            <MessageCircle size={20} />
            Întreabă pe WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
