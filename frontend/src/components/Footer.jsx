import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-name">Dianna</div>
            <div className="footer-sub">Nail Artist • Uricani</div>
          </div>

          <div className="footer-info">
            <div className="footer-line">
              <span>Programări:</span> <strong>WhatsApp</strong>
            </div>
            <div className="footer-line">
              <span>Locație:</span> <strong>Uricani</strong>
            </div>
            <div className="footer-line">
              <span>Instagram:</span> <strong>@dianna_nailartist</strong>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dianna • All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}