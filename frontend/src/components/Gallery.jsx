import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="galerie" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Lucrările Mele</h2>
          <p className="section-description">
            Fiecare set de unghii este o mică operă de artă, creată cu pasiune și atenție la detalii.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-view-text">Vezi detalii</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <p>✨ Imaginile sunt actualizate constant cu cele mai recente lucrări</p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button 
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
