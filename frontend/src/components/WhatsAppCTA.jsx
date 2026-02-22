import React from "react";
import "../styles/WhatsAppCTA.css";

const WHATSAPP_URL =
  "https://wa.me/40XXXXXXXXX?text=Buna%2C%20vreau%20o%20programare%20%F0%9F%92%85";

export default function WhatsAppCTA() {
  return (
    <a className="wa-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <span className="wa-dot" />
      WhatsApp
    </a>
  );
}