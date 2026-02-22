import React from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1610992015732-2449b0d4e9a0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae84?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600185366000-561376f7d6f3?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <section className="gallery" id="galerie">
      <div className="container">
        <div className="gallery-head">
          <span className="gallery-label">GALERIE</span>
          <h2 className="gallery-title">Lucrări recente</h2>
          <p className="gallery-sub">Alege vibe-ul care te reprezintă.</p>
        </div>

        <div className="gallery-grid">
          {images.map((src, idx) => (
            <a className="gallery-item" key={idx} href={src} target="_blank" rel="noreferrer">
              <img src={src} alt={`Lucrare ${idx + 1}`} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}