import React from "react";
import "../styles/WhatsAppCTA.css";

/* DM DIRECT INSTAGRAM */
const INSTAGRAM_DM = "https://ig.me/m/dianna_nailartist";

export default function WhatsAppCTA() {
  return (
    <a
      className="ig-float"
      href={INSTAGRAM_DM}
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram DM"
    >
      <span className="ig-dot" />
      Programează-te
    </a>
  );
}