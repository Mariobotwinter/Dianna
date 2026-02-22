# PRD - Website Nail Artist Oana Ienășescu

## Original Problem Statement
Construiește un website one-page (o singură pagină) pentru un nail artist din Timișoara.

**Cerințe critice:**
- NU pagini separate, doar smooth scroll navigation
- Design feminin, premium, cald (fără fundal alb)
- Toate programările pe WhatsApp (nu formular)
- NU afișa prețuri nicăieri
- Structură modulară în fișiere separate

## Architecture & Tech Stack
- **Frontend:** React + Vite
- **Styling:** CSS Custom Properties + Tailwind (shadcn/ui components)
- **Routing:** React Router (single page with scroll sections)
- **Fonts:** Cormorant Garamond (serif) + Montserrat (sans-serif)
- **Structure:** Component-based architecture

## Color Palette (Premium Feminine)
- **Primary Background:** Nude/Blush/Beige (#f5ebe0, #f9f5f1)
- **Accents:** Rose/Mauve (#e8b4c0, #dac4cd)
- **Highlights:** Burgundy (#9b6b7a) + Gold (#d4af37)
- **Text:** Dark Brown/Charcoal (#4a3933, #6b5b54)

## User Personas
1. **Target Client:** Femei 25-45 ani, Timișoara, caută manichiură premium
2. **Need:** Programare rapidă, vizualizare lucrări, informații servicii
3. **Action:** Contact prin WhatsApp pentru programare

## Implemented Features (21 Feb 2025)

### ✅ Header Component
- Fixed header cu blur backdrop
- Logo: "Oana Ienășescu - Nail Artist"
- Desktop navigation: Servicii, Galerie, Recenzii, Contact
- Mobile: Hamburger menu cu smooth transitions
- Scroll-triggered styling

### ✅ Hero Section
- Titlu: "Manichiură premium în Timișoara"
- 2 CTA buttons: WhatsApp + Vezi lucrările
- Gradient background cu pattern overlay
- Responsive layout (text + image placeholder)
- Smooth entrance animations

### ✅ Services Section
- Lista verticală elegantă (NU carduri)
- 6 servicii: Semipermanentă, Întărire gel, Design personalizat, etc.
- Divider lines între servicii
- CTA final: "Întreabă pe WhatsApp"
- Hover effects

### ✅ Gallery Section
- Grid 2 coloane (mobile) / 3 coloane (desktop)
- 6 imagini placeholder Unsplash
- Lightbox pentru vizualizare detalii
- Hover overlay cu "Vezi detalii"
- Image lazy loading

### ✅ Reviews Slider
- Carousel stânga-dreapta cu săgeți
- 5 recenzii cu rating 5 stele
- Autoplay lent (5s)
- Dots navigation
- Swipe support pe mobil
- Smooth transitions

### ✅ Contact/Footer Section
- CTA mare WhatsApp
- Contact info cards: Locație, Instagram, WhatsApp
- Footer cu brand + social links
- Copyright notice

### ✅ WhatsApp Floating Button
- Fixed bottom-right
- Apare la scroll > 300px
- Pulse animation
- Tooltip on hover
- Link direct WhatsApp cu mesaj predefinit

### ✅ Configuration Files
- `/app/frontend/src/config.js` - WhatsApp, Instagram, mesaje
- `/app/frontend/src/data/services.js` - Lista servicii
- `/app/frontend/src/data/reviews.js` - Testimoniale
- `/app/frontend/src/data/gallery.js` - Imagini galerie

### ✅ Design System
- Custom CSS variables în `theme.css`
- Global styles în `global.css`
- Component-specific CSS files
- Smooth animations: fadeIn, fadeInUp, slideIn
- Glass-morphism effects
- Premium shadows & borders

## File Structure Created
```
/app/frontend/src/
├── config.js
├── data/
│   ├── services.js
│   ├── reviews.js
│   └── gallery.js
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── ReviewsSlider.jsx
│   ├── WhatsAppCTA.jsx
│   └── Footer.jsx
├── pages/
│   └── Home.jsx
├── styles/
│   ├── theme.css
│   ├── global.css
│   ├── Header.css
│   ├── Hero.css
│   ├── Services.css
│   ├── Gallery.css
│   ├── ReviewsSlider.css
│   ├── WhatsAppCTA.css
│   └── Footer.css
├── App.js
├── App.css
└── index.css
```

## Completed P0 Features
- [x] One-page layout cu smooth scroll
- [x] Header cu navigation (desktop + mobile)
- [x] Hero section cu CTA-uri
- [x] Services list (elegant, fără carduri, fără prețuri)
- [x] Gallery grid cu lightbox
- [x] Reviews slider cu autoplay
- [x] Contact/Footer section
- [x] Floating WhatsApp button
- [x] Design premium feminin (nude/blush/rose palette)
- [x] Mobile-first responsive
- [x] Smooth animations
- [x] WhatsApp integration (click-to-chat)
- [x] Instagram link integration

## Next Action Items

### P1 - Content Personalization (Când Oana este gata)
- [ ] Înlocuire imagini placeholder cu fotografii reale ale lucrărilor
- [ ] Update recenzii cu testimoniale reale de la clienți
- [ ] Ajustare servicii și descrieri (dacă e nevoie)
- [ ] Optimizare imagini pentru performanță

### P2 - Enhancements (Opțional)
- [ ] Instagram feed integration (afișare ultimele postări)
- [ ] Google Maps embed pentru locație exactă
- [ ] SEO optimization (meta tags, og:image, etc.)
- [ ] Analytics integration (Google Analytics sau similar)
- [ ] Contact form pentru întrebări generale (opțional, pe lângă WhatsApp)
- [ ] Booking calendar visualization (disponibilități)
- [ ] Multi-language support (RO/EN)

## Business Goals
- **Primary:** Conversie maximă către WhatsApp (programări)
- **Secondary:** Showcase portfolio pentru creștere credibilitate
- **Tertiary:** Instagram followers growth

## Technical Notes
- Build success: 89.61 kB JS + 12.81 kB CSS (gzipped)
- Frontend running pe port 3000 (dev), mapată la preview URL
- Hot reload activat pentru development
- WhatsApp link format: `https://wa.me/40752120428?text=...`

## Contact Configuration
- **WhatsApp:** 0752120428
- **Instagram:** @oanaienasescu.nailartist
- **Locație:** Timișoara, România

---
**Status:** ✅ MVP Frontend Complete
**Date:** 21 Februarie 2025
