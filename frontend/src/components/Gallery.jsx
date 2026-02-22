import React, { useMemo, useRef, useState } from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  // Pune aici ce vrei tu după. Momentan am pus poze random cu unghii (unsplash).
  const images = useMemo(
    () => [
      {
        title: "Lucrare 1",
        url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Lucrare 2",
        url: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Lucrare 3",
        url: "https://images.unsplash.com/photo-1520975958225-06e6c28f57b1?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Lucrare 4",
        url: "https://images.unsplash.com/photo-1527799820374-dcf8a9d7a8b3?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Lucrare 5",
        url: "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const clampIndex = (i) => {
    const max = images.length - 1;
    if (i < 0) return max;
    if (i > max) return 0;
    return i;
  };

  const goTo = (i) => setIndex(clampIndex(i));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Swipe (mobil)
  const pointer = useRef({ down: false, x: 0, dx: 0 });

  const onPointerDown = (e) => {
    pointer.current.down = true;
    pointer.current.x = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
    pointer.current.dx = 0;
  };

  const onPointerMove = (e) => {
    if (!pointer.current.down) return;
    const x = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
    pointer.current.dx = x - pointer.current.x;
  };

  const onPointerUp = () => {
    if (!pointer.current.down) return;
    pointer.current.down = false;

    const threshold = 50; // px
    if (pointer.current.dx > threshold) prev();
    else if (pointer.current.dx < -threshold) next();

    pointer.current.dx = 0;
  };

  return (
    <section className="gallery-section" id="galerie">
      <div className="container">
        <div className="gallery-header">
          <div className="gallery-kicker">GALERIE</div>
          <h2 className="gallery-title">Lucrări recente</h2>
          <p className="gallery-subtitle">Alege vibe-ul care te reprezintă.</p>
        </div>

        <div className="gallery-carousel">
          <button
            className="gallery-arrow left"
            type="button"
            onClick={prev}
            aria-label="Imaginea anterioară"
          >
            ‹
          </button>

          <div
            className="gallery-viewport"
            onMouseDown={onPointerDown}
            onMouseMove={onPointerMove}
            onMouseUp={onPointerUp}
            onMouseLeave={onPointerUp}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={onPointerUp}
            role="region"
            aria-label="Slider galerie"
          >
            <div
              ref={trackRef}
              className="gallery-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <figure className="gallery-slide" key={`${img.title}-${i}`}>
                  <img className="gallery-img" src={img.url} alt={img.title} loading="lazy" />
                  <figcaption className="gallery-caption">{img.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <button
            className="gallery-arrow right"
            type="button"
            onClick={next}
            aria-label="Imaginea următoare"
          >
            ›
          </button>
        </div>

        <div className="gallery-dots" aria-label="Indicator imagini">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`gallery-dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Mergi la imaginea ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}