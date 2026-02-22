import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Header.css";

const WHATSAPP_URL = "https://wa.me/40XXXXXXXXX?text=Buna%20Oana%2C%20vreau%20o%20programare%20%F0%9F%92%85"; // <-- SCHIMBĂ

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on ESC + click outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    const onMouseDown = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "servicii", label: "Servicii" },
    { id: "galerie", label: "Galerie" },
    { id: "recenzii", label: "Recenzii" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header ref={headerRef} className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="logo-text">Oana Ienășescu</span>
            <span className="logo-subtitle">Nail Artist</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Navigatie">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
                type="button"
              >
                {item.label}
              </button>
            ))}

            {/* WhatsApp CTA */}
            <a
              className="nav-link whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Programează-te
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Navigatie mobila">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="mobile-nav-link"
                type="button"
              >
                {item.label}
              </button>
            ))}

            <a
              className="mobile-nav-link whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programează-te pe WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;