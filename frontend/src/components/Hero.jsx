import React from "react";
import "../styles/Hero.css";

const WHATSAPP_URL =
  "https://wa.me/40XXXXXXXXX?text=Buna%20Oana%2C%20vreau%20o%20programare%20%F0%9F%92%85";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1920&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img
          className="hero-media-img"
          src={HERO_IMAGE}
          alt="Unghii premium elegante"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-label">Nail Artist • Ploiești</span>

            <h1 className="hero-title">
              Unghii <span className="hero-title-accent">premium</span>, look curat și feminin
            </h1>

            <p className="hero-description">
              Programări rapide pe WhatsApp. Lucrez cu atenție la detalii, igienă și finish elegant.
            </p>

            <div className="hero-cta">
              <a
                className="cta-primary whatsapp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Programează-te pe WhatsApp
              </a>

              <button
                className="cta-secondary"
                type="button"
                onClick={() => {
                  const el = document.getElementById("galerie");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Vezi lucrările
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
}