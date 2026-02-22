import React from "react";
import "../styles/Services.css";

export default function Services() {
  const items = [
    { title: "Construcție cu gel", desc: "Rezistență, formă corectă, apex frumos, finisaj premium." },
    { title: "Întreținere", desc: "Refacere aspect + echilibrare pentru un look fresh, fără compromis." },
    { title: "Tips reutilizabili", desc: "Rapid, curat, ideal pentru lungimi controlate și confort." },
    { title: "Design / French / Babyboomer", desc: "Design fin, elegant sau modern – în funcție de stilul tău." },
  ];

  return (
    <section className="services" id="servicii">
      <div className="container">
        <div className="services-head">
          <span className="services-label">CE OFER</span>
          <h2 className="services-title">Servicii premium</h2>
          <p className="services-sub">
            Fiecare set este făcut cu atenție la detalii, igienă și produse bune.
          </p>
        </div>

        <div className="services-list">
          {items.map((s, idx) => (
            <div className="services-row" key={idx}>
              <div className="services-index">{String(idx + 1).padStart(2, "0")}</div>
              <div className="services-body">
                <div className="services-row-title">{s.title}</div>
                <div className="services-row-desc">{s.desc}</div>
              </div>
              <div className="services-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}