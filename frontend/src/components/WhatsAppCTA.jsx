import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config';
import '../styles/WhatsAppCTA.css';

const WhatsAppCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-floating ${isVisible ? 'visible' : ''}`}
      aria-label="Contact pe WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">Scrie-mi pe WhatsApp</span>
    </a>
  );
};

export default WhatsAppCTA;
