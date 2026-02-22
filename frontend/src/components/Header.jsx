import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 86;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  const items = [
    { id: "servicii", label: "Servicii" },
    { id: "galerie", label: "Galerie" },
    { id: "recenzii", label: "Recenzii" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-row">
        <button
          className="brand"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <span className="brand-name">Dianna</span>
          <span className="brand-sub">Nail Artist • Uricani</span>
        </button>

        <nav className="nav-desktop" aria-label="Primary">
          {items.map((i) => (
            <button key={i.id} className="nav-link" onClick={() => scrollTo(i.id)}>
              {i.label}
            </button>
          ))}
        </nav>

        <button
          className="nav-mobile-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        <div className="nav-mobile-inner">
          {items.map((i) => (
            <button key={i.id} className="nav-mobile-link" onClick={() => scrollTo(i.id)}>
              {i.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}