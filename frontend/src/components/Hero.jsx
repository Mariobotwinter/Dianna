import React, { useState } from "react";
import "../styles/Hero.css";

const WHATSAPP_URL =
  "https://wa.me/40XXXXXXXXX?text=Buna%2C%20vreau%20o%20programare%20%F0%9F%92%85";

// LINK DIRECT (safe) - se termină practic în imagine (Unsplash CDN)
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero" id="top">
      {/* FULL BLEED IMAGE */}
      <div className="hero-media" aria-hidden="true">
        {!imgError ? (
          <img
            className="hero-media-img"
            src={HERO_IMAGE}
            alt=""
            loading="eager"
            onError={() => setImgError(true)}
          />
        ) : (
          // fallback dacă nu merge imaginea (să nu mai fie gol)
          <div
            className="hero-media-img"
            style={{
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(900px 600px at 20% 20%, rgba(255,123,184,0.22), transparent 55%), linear-gradient(180deg, rgba(10,6,14,0.85), rgba(10,6,14,0.98))",
            }}
          />
        )}
        <div className="hero-overlay" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-label">DIANNA • NAIL ARTIST • URICANI</span>

            <h1 className="hero-title">
              Unghii <span className="hero-title-accent">premium</span>, look curat și feminin
            </h1>

            <p className="hero-description">
              Construcție cu gel, tips reutilizabili și design modern. Programări rapide pe WhatsApp.
            </p>

            <div className="hero-cta">
              <a className="cta-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Programează-te
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