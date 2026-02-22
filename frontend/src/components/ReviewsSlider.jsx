import React, { useMemo, useState } from "react";
import "../styles/ReviewsSlider.css";

export default function ReviewsSlider() {
  const reviews = useMemo(() => ([
    { name: "Andreea", text: "Super atentă la detalii. Am plecat cu un set foarte curat și elegant." },
    { name: "Bianca", text: "Igienă top, atmosferă calmă, iar forma a ieșit perfect." },
    { name: "Diana", text: "Rezistență foarte bună și design exact cum am vrut. Revin sigur." },
  ]), []);

  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);
  const next = () => setI((v) => (v + 1) % reviews.length);

  return (
    <section className="reviews" id="recenzii">
      <div className="container">
        <div className="reviews-head">
          <span className="reviews-label">RECENZII</span>
          <h2 className="reviews-title">Ce spun fetele</h2>
          <p className="reviews-sub">Feedback real, vibe bun, rezultate curate.</p>
        </div>

        <div className="reviews-box">
          <button className="reviews-nav" onClick={prev} aria-label="Previous">‹</button>

          <div className="review">
            <div className="review-text">“{reviews[i].text}”</div>
            <div className="review-name">— {reviews[i].name}</div>
          </div>

          <button className="reviews-nav" onClick={next} aria-label="Next">›</button>
        </div>

        <div className="reviews-dots" aria-hidden="true">
          {reviews.map((_, idx) => (
            <span key={idx} className={`dot ${idx === i ? "active" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}