// Configurare contact și mesaje
export const config = {
  whatsapp: {
    number: '0752120428',
    countryCode: '40',
    defaultMessage: 'Bună! Aș vrea să programez o ședință de manichiură. 💅'
  },
  social: {
    instagram: 'https://www.instagram.com/oanaienasescu.nailartist?igsh=aHcxOWx5cDJvZDNw'
  },
  location: {
    city: 'Timișoara',
    displayText: 'Timișoara, România'
  }
};

// Helper pentru link WhatsApp
export const getWhatsAppLink = (customMessage = null) => {
  const message = customMessage || config.whatsapp.defaultMessage;
  const phone = config.whatsapp.countryCode + config.whatsapp.number.replace(/^0/, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
