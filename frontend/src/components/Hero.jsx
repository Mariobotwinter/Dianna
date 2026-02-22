import React from "react";
import "../styles/Hero.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2000&q=80";

const WHATSAPP_URL =
  "https://wa.me/40XXXXXXXXX?text=Buna%2C%20vreau%20o%20programare%20%F0%9F%92%85";

export default function Hero() {
  return (
    <section
      className="hero"
      id="top"
      style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">DIANNA • NAIL ARTIST • URICANI</span>

          <h1 className="hero-title">
            Unghii <span>premium</span>,<br />
            look curat și feminin
          </h1>

          <p className="hero-desc">
            Construcție cu gel, tips reutilizabili și design modern.
            Programări rapide pe WhatsApp.
          </p>

          <div className="hero-actions">
            <a className="hero-btn primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Programează-te
            </a>

            <button
              className="hero-btn ghost"
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
    </section>
  );
}