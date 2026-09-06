"use client";

import { useState } from "react";

const services = [
  ["🔑", "Dorabianie kluczy", "Precyzyjnie wykonany zapasowy klucz do Twojego auta."],
  ["📡", "Programowanie kluczy", "Kodowanie kluczy tradycyjnych, Smart Key i kart."],
  ["🛠", "Naprawa pilotów", "Naprawa obudów, przycisków, elektroniki i baterii."],
  ["🚗", "Drugi klucz do auta", "Zapas, który daje spokój przed utratą jedynego klucza."],
  ["🔒", "Immobilizery", "Diagnostyka, programowanie i rozwiązania po utracie kluczy."],
 ["📞", "Konsultacja", "Bezpłatna — podaj markę, model i rocznik samochodu oraz opisz, czego potrzebujesz. Sprawdzimy możliwość wykonania usługi i przedstawimy orientacyjną cenę."],
];

const brands = [
  { name: "BMW", icon: "bmw", color: "0066B1" }, { name: "Audi", icon: "audi", color: "BB0A30" }, { name: "Volkswagen", icon: "volkswagen", color: "001E50" }, { name: "Toyota", icon: "toyota", color: "EB0A1E" }, { name: "Honda", icon: "honda", color: "E40521" }, { name: "Volvo", icon: "volvo", color: "003057" }, { name: "Nissan", icon: "nissan", color: "C3002F" }, { name: "Mini", icon: "mini", color: "111111" }, { name: "Hyundai", icon: "hyundai", color: "002C5F" }, { name: "Kia", icon: "kia", color: "05141F" }, { name: "Porsche", icon: "porsche", color: "D5001C" }, { name: "Fiat", icon: "fiat", color: "A5212B" }, { name: "Land Rover", icon: "landrover", color: "005A2B" }, { name: "Mercedes-Benz", icon: "mercedes", color: "00ADEF" }, { name: "Peugeot", icon: "peugeot", color: "003DA5" }, { name: "Jaguar", icon: "jaguar", color: "006B54" }, { name: "Mazda", icon: "mazda", color: "101820" }, { name: "Subaru", icon: "subaru", color: "013C74" }, { name: "Infiniti", icon: "infiniti", color: "222222" }, { name: "Lexus", icon: "lexus", color: "111111" }, { name: "Suzuki", icon: "suzuki", color: "E30613" }, { name: "Mitsubishi", icon: "mitsubishi", color: "E60012" }, { name: "Jeep", icon: "jeep", color: "566A39" }, { name: "Dodge", icon: "dodge", color: "C8102E" }, { name: "Chevrolet", icon: "chevrolet", color: "D1A700" }, { name: "Ford", icon: "ford", color: "003478" }, { name: "Tesla", icon: "tesla", color: "CC0000" }, { name: "Cadillac", icon: "cadillac", color: "A49A7C" }, { name: "GMC", icon: "gmc", color: "C41230" }, { name: "Genesis", icon: "genesis", color: "111111" },
];
const faqs = [
  ["Ile kosztuje dorobienie klucza?", "Cena zależy od marki, rocznika i rodzaju klucza. Wyślij nam zdjęcie lub zadzwoń — przygotujemy bezpłatną, konkretną wycenę."],
  ["Jak długo trwa wykonanie usługi?", "Wiele usług realizujemy podczas jednej wizyty. Dokładny czas potwierdzimy po identyfikacji auta i klucza."],
  ["Czy trzeba mieć wszystkie klucze?", "Nie zawsze. Pomagamy zarówno przy dorobieniu drugiego klucza, jak i po utracie kompletu."],
  ["Czy programujecie Smart Key?", "Tak, obsługujemy kluczyki bezkluczykowe i systemy Smart Key dla wielu marek."],
  ["Czy dojeżdżacie?", "Zakres dojazdu ustalamy indywidualnie — skontaktuj się z nami i podaj lokalizację."],
  ["Czy wystawiacie fakturę?", "Tak, możliwość wystawienia dokumentu potwierdzimy podczas wyceny."],
];

function BrandLogo({ name, icon, color }: { name: string; icon: string; color: string }) {
  if (name === "Land Rover") return <svg className="brand-native-logo land-rover-logo" viewBox="0 0 90 42" aria-label="Land Rover"><ellipse cx="45" cy="21" rx="42" ry="18" fill="#005A2B" stroke="#D3B56A" strokeWidth="2"/><text x="45" y="25" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily="Arial">LAND ROVER</text></svg>;
  if (name === "Mercedes-Benz") return <svg className="brand-native-logo" viewBox="0 0 48 48" aria-label="Mercedes-Benz"><circle cx="24" cy="24" r="21" fill="none" stroke="#00ADEF" strokeWidth="2.4"/><path d="M24 7v29M24 7 10 32M24 7l14 25" fill="none" stroke="#00ADEF" strokeWidth="2.4" strokeLinejoin="round"/></svg>;
  if (name === "Lexus") return <svg className="brand-native-logo" viewBox="0 0 56 42" aria-label="Lexus"><ellipse cx="28" cy="21" rx="24" ry="15" fill="none" stroke="#111" strokeWidth="3"/><path d="M19 11v19h18" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (name === "Dodge") return <svg className="brand-native-logo" viewBox="0 0 70 42" aria-label="Dodge"><text x="2" y="27" fill="#202020" fontSize="18" fontWeight="800" fontStyle="italic" fontFamily="Arial">DODGE</text><path d="M56 10l9 22M62 10l5 16" stroke="#C8102E" strokeWidth="3"/></svg>;
  if (name === "GMC") return <svg className="brand-native-logo" viewBox="0 0 62 42" aria-label="GMC"><text x="1" y="28" fill="#C41230" stroke="#8A0C1F" strokeWidth=".7" fontSize="26" fontWeight="800" fontFamily="Arial">GMC</text></svg>;
  if (name === "Genesis") return <svg className="brand-native-logo genesis-logo" viewBox="0 0 90 42" aria-label="Genesis"><path d="M8 21 34 10l8 7H48l8-7 26 11-26 11-8-7h-6l-8 7z" fill="none" stroke="#111" strokeWidth="1.8"/><text x="45" y="24" textAnchor="middle" fill="#111" fontSize="8" fontWeight="800" fontFamily="Arial">GENESIS</text></svg>;
  return <img src={`https://cdn.simpleicons.org/${icon}/${color}`} alt={`Logo ${name}`} />;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
 
  const [callNotice, setCallNotice] = useState(false);
  
  function callNow() { setCallNotice(true); }

  return <main>
    <header className="topbar">
      <a className="logo" href="#start" aria-label="AutoKey Expert — strona główna"><span>AK</span><strong>AUTOKEY<br />EXPERT</strong></a>
      <nav aria-label="Główna nawigacja"><a href="#start">Start</a><a href="#uslugi">Usługi</a><a href="#marki">Marki</a><a href="#proces">Jak działamy</a><a href="#faq">FAQ</a><a href="#kontakt">Kontakt</a></nav>
      <a className="header-phone" href="tel:+48509737120">☎ <span>509 737 120</span></a>
    </header>

    <section id="start" className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-content container">
        <p className="eyebrow">SPECJALIŚCI OD KLUCZY SAMOCHODOWYCH</p>
        <h1>Programowanie i dorabianie <em>kluczy samochodowych</em></h1>
        <p className="hero-lead">Drugi klucz do auta <i>•</i> Programowanie immobilizerów <i>•</i> Naprawa pilotów <i>•</i> Diagnostyka</p>
        <div className="actions"><a className="button button-red" href="#kontakt">Bezpłatna wycena <b>→</b></a><button className="button button-dark" type="button" onClick={callNow}>☎ Zadzwoń teraz</button></div>{callNotice && <p className="call-notice" role="status">Zadzwoń pod numer: <strong>509737120</strong></p>}
      </div>
      <aside className="hero-card"><p>DOŚWIADCZENIE I TECHNOLOGIA</p><ul><li>✓ Ponad 50 marek</li><li>✓ Programowanie Smart Key</li><li>✓ Immobilizery</li><li>✓ Elektronika kluczy</li></ul><a href="tel:+48509737120">☎ 509 737 120</a></aside>
      <a className="scroll-cue" href="#uslugi">PRZEWIŃ <span>↓</span></a>
    </section>

    <section id="uslugi" className="section container"><p className="eyebrow red">CO ROBIMY</p><h2>Nasze <em>usługi</em></h2><p className="section-intro">Kompleksowa pomoc z kluczykami, pilotami i elektroniką samochodową — od pierwszej rozmowy po gotowe rozwiązanie.</p>
      <div className="service-grid">{services.map(([icon, title, description]) => <article className="service-card" key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{description}</p><a href="#kontakt">Dowiedz się więcej <b>→</b></a></article>)}</div>
    </section>

    <section id="marki" className="brands-section"><div className="container"><p className="eyebrow red">KOMPATYBILNOŚĆ</p><h2>Obsługiwane <em>marki</em></h2><p className="section-intro">Wybierz markę swojego samochodu. Każda pozycja jest gotowa do rozwinięcia o dedykowaną podstronę i ofertę.</p><div className="brand-grid">{brands.map((brand) => <a href={`/marki/${brand.name.toLowerCase().replace("volkswagen", "vw")}`} key={brand.name} className="brand-card"><BrandLogo {...brand} />{brand.name}<b>→</b></a>)}</div></div></section>

    <section className="trust-section"><div className="container"><p className="eyebrow">DLACZEGO AUTOKEY EXPERT</p><h2>Pomoc, której możesz <em>zaufać</em></h2><div className="trust-grid"><div><strong>50+</strong><span>obsługiwanych marek</span></div><div><strong>Smart</strong><span>nowoczesny sprzęt diagnostyczny</span></div><div><strong>24h</strong><span>kontakt i szybka odpowiedź</span></div><div><strong>100%</strong><span>indywidualnego podejścia</span></div></div></div></section>

    <section id="proces" className="section process container"><p className="eyebrow red">PROSTY PROCES</p><h2>Jak wygląda <em>usługa?</em></h2><div className="steps">{[["01", "☎", "Kontakt", "Zadzwoń lub wyślij formularz."], ["02", "✦", "Wycena", "Otrzymasz jasną informację."], ["03", "⌖", "Wizyta", "Umawiamy dogodny termin."], ["04", "✓", "Gotowe", "Odbierasz sprawny klucz."]].map((x, i) => <article key={x[0]}><span className="step-number">{x[0]}</span><span className="step-icon">{x[1]}</span><h3>{x[2]}</h3><p>{x[3]}</p>{i < 3 && <i className="step-line">→</i>}</article>)}</div></section>

    <section id="faq" className="faq-section"><div className="container faq-layout"><div><p className="eyebrow red">MASZ PYTANIE?</p><h2>Najczęściej zadawane <em>pytania</em></h2><p>Nie znalazłeś odpowiedzi? Zadzwoń — chętnie doradzimy.</p><a className="text-link" href="tel:+48509737120">☎ Porozmawiajmy <b>→</b></a></div><div className="faq-list">{faqs.map(([q, a], i) => <article className={openFaq === i ? "faq-item active" : "faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>{q}<span>{openFaq === i ? "−" : "+"}</span></button>{openFaq === i && <p>{a}</p>}</article>)}</div></div></section>

    <section id="kontakt" className="contact-section"><div className="container contact-grid"><div className="map-card"><iframe title="Mapa AutoKey Expert — Jędrzejów, ul. Krzywa 30A" src="https://www.google.com/maps?q=ul.%20Krzywa%2030A%2C%20J%C4%99drzej%C3%B3w&output=embed" loading="lazy" /><a className="map-overlay" href="https://www.google.com/maps/search/?api=1&query=ul.+Krzywa+30A%2C+J%C4%99drzej%C3%B3w" target="_blank" rel="noreferrer">⌖ Otwórz w Google Maps</a></div><div className="contact-form"><p className="eyebrow red">BEZPŁATNA WYCENA</p><h2>Powiedz, w czym <em>pomóc</em></h2><p className="contact-details"><a href="tel:+485097373120">☎ 509 737 120</a><span>ul. Krzywa 30A, Jędrzejów, świętokrzyskie</span></p> <form action="https://formspree.io/f/mrpzdjwn" method="POST"><label>Imię<input required name="name" placeholder="Jak mamy się do Ciebie zwracać?" /></label><label>Telefon<input required name="phone" type="tel" placeholder="Twój numer telefonu" /></label><label>Marka auta<input name="brand" placeholder="np. Audi A4, 2018" /></label><label>Problem<textarea required name="message" placeholder="Opisz krótko problem z kluczykiem..." rows={4} /></label>
<p className="form-privacy">
  Administratorem danych osobowych jest <strong>Kapeć.pl</strong>,
  ul. Krzywa 30A, 28-300 Jędrzejów, NIP 6561186502.
  Dane podane w formularzu są przetwarzane w celu obsługi zapytania,
  ustalenia możliwości wykonania usługi oraz kontaktu telefonicznego.
  Formularz jest obsługiwany technicznie przez Formspree.
  Dane mogą być przechowywane w systemie Formspree przez okres do 30 dni.
  {" "}
  <a href="/polityka-prywatnosci">
    Polityka prywatności
  </a>.
</p>
<button className="button button-red" type="submit">Wyślij zapytanie <b>→</b></button></form></div></div></section>

    <footer><div className="container footer-grid"><a className="logo" href="#start"><span>AK</span><strong>AUTOKEY<br />EXPERT</strong></a><div><p>Kontakt</p><a href="tel:+48509737120">509 737 120</a><a href="mailto:kontakt@autokeyexpert.pl">kontakt@autokeyexpert.pl</a></div><div><p>Godziny</p><span>Pon–Pt: 9:00–17:00</span><span>Sob: po umówieniu</span></div><div><p>Obszar działania</p><span>Jędrzejów i okolice</span><a href="/polityka-prywatnosci">Polityka prywatności</a><a href="/polityka-prywatnosci#cookies">Cookies</a></div></div><div className="footer-bottom container">© {new Date().getFullYear()} AutoKey Expert. Wszystkie prawa zastrzeżone.<span>Facebook &nbsp; Instagram</span></div></footer>
  </main>;
}
