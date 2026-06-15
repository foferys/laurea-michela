import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  Clock3,
  ExternalLink,
  GraduationCap,
  Heart,
  Home,
  Map,
  MapPin,
  MessageCircle,
  PartyPopper,
  School,
  Sparkles,
} from "lucide-react";

const MAP_PARTY = "https://maps.app.goo.gl/7oEevBpML35yiLyo6";
const MAP_UNICAL =
  "https://www.google.com/maps/search/?api=1&query=Università+della+Calabria+Cubo+30A";
const WHATSAPP =
  "https://wa.me/393403746481?text=Ciao%20Michela%2C%20ti%20confermo%20che%20sar%C3%B2%20presente%20alla%20tua%20laurea%20per%20festeggiare%20insieme";

const navItems = [
  { id: "laurea", label: "Laurea", icon: GraduationCap },
  { id: "festa", label: "Festa", icon: PartyPopper },
  { id: "home", label: "Home", icon: Heart },
  { id: "info", label: "Info", icon: CalendarDays },
  { id: "conferma", label: "Conferma", icon: MessageCircle },
];

function Flourish({ icon: Icon = Sparkles }) {
  return (
    <div className="flourish" aria-hidden="true">
      <span />
      <Icon size={15} strokeWidth={1.5} />
      <span />
    </div>
  );
}

function PageTitle({ children, icon }) {
  return (
    <header className="page-title">
      <h2>{children}</h2>
      <Flourish icon={icon} />
    </header>
  );
}

function DateCard({ icon: Icon, eyebrow, value, note }) {
  return (
    <article className="date-card">
      <Icon size={28} strokeWidth={1.4} />
      <span>{eyebrow}</span>
      <strong>{value}</strong>
      {note && <small>{note}</small>}
    </article>
  );
}

function ActionLink({ href, icon: Icon, children, secondary = false }) {
  return (
    <a
      className={`action-button${secondary ? " action-button--secondary" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={19} strokeWidth={1.6} />
      <span>{children}</span>
      <ExternalLink className="external-icon" size={14} />
    </a>
  );
}

function HomePage({ onNavigate, onCalendar }) {
  return (
    <section className="screen screen--home">
      <div className="home-art">
        <div className="home-art__shade" />
        <img
          className="home-decoration home-decoration--left"
          src="/assets/libri-fiori.webp"
          alt=""
          aria-hidden="true"
        />
        <img
          className="home-decoration home-decoration--right"
          src="/assets/infanzia.webp"
          alt=""
          aria-hidden="true"
        />
        <img
          className="home-graduate"
          src="/assets/michela-alloro.webp"
          alt="Michela di spalle con la corona d'alloro"
        />
        <div className="home-copy">
          <img
            className="home-emblem"
            src="/assets/tocco-alloro.webp"
            alt="Tocco di laurea con corona d'alloro"
          />
          <p className="overline">Dottoressa</p>
          <h1>Michela</h1>
          <p className="degree">
            magistrale a ciclo unico
            <span>in Scienze della Formazione Primaria</span>
          </p>
          <Flourish icon={Heart} />
          <p className="invitation">
            Ti invito a festeggiare
            <br />
            con me questo traguardo
          </p>
        </div>
      </div>

    
    </section>
  );
}

function GraduationPage() {
  return (
    <section className="screen content-screen">
      <div className="section-hero section-hero--graduation">
        <img
          className="section-object section-object--graduation"
          src="/assets/libri-laurea.webp"
          alt=""
          aria-hidden="true"
        />
        <img
          className="section-object section-object--didactic"
          src="/assets/didattica.webp"
          alt=""
          aria-hidden="true"
        />
        <PageTitle icon={GraduationCap}>La Laurea</PageTitle>
      </div>

      <div className="content-stack content-stack--raised">
        <div className="date-grid">
          <DateCard
            icon={CalendarDays}
            eyebrow="Data"
            value="29 Giugno"
            note="Lunedì 2026"
          />
          <DateCard
            icon={GraduationCap}
            eyebrow="Corso"
            value="Laurea"
            note="Magistrale a ciclo unico"
          />
        </div>

        <article className="detail-card detail-card--gold">
          <School size={30} strokeWidth={1.4} />
          <p className="card-label">Università della Calabria</p>
          <h3>Aula A</h3>
          <p>Cubo 30A · piano terra</p>
          <div className="degree-block">
            <span>Corso di laurea</span>
            <small>Magistrale a ciclo unico</small>
            <strong>in Scienze della Formazione Primaria</strong>
          </div>
        </article>

        <ActionLink href={MAP_UNICAL} icon={Map}>
          Apri la posizione
        </ActionLink>

        <p className="soft-note">
          <Sparkles size={17} />
          Porta con te un sorriso: sarà il dettaglio più bello della giornata.
        </p>
      </div>
    </section>
  );
}

function PartyPage() {
  return (
    <section className="screen content-screen">
      <div className="section-hero section-hero--party">
        <img
          className="section-object section-object--graduate"
          src="/assets/michela-alloro.webp"
          alt=""
          aria-hidden="true"
        />
        <PageTitle icon={PartyPopper}>La Festa</PageTitle>
      </div>

      <div className="content-stack content-stack--raised">
        <p className="intro-script">
          Dopo il traguardo, arriva il momento di brindare insieme.
        </p>

        <div className="date-grid">
          <DateCard
            icon={CalendarDays}
            eyebrow="Data"
            value="10 Luglio"
            note="Venerdì 2026"
          />
          <DateCard
            icon={Clock3}
            eyebrow="Orario"
            value="Ore 20:00"
            note="Cena e festa"
          />
        </div>

        <article className="detail-card">
          <MapPin size={30} strokeWidth={1.4} />
          <p className="card-label">Location</p>
          <h3>Ristorante Hotel Barbieri</h3>
          <p>Via Italo Barbieri, 30</p>
          <p>87042 Altomonte (CS)</p>
        </article>

        <ActionLink href={MAP_PARTY} icon={MapPin}>
          Apri in Google Maps
        </ActionLink>

        <div className="mini-banner">
          <PartyPopper size={22} />
          <p>
            Una serata di festa, buon cibo e persone care. Non vedo l&apos;ora
            di condividerla con te.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoPage({ onCalendar }) {
  return (
    <section className="screen content-screen">
      <PageTitle icon={CalendarDays}>Date da ricordare</PageTitle>

      <div className="content-stack">
        <article className="timeline-card">
          <div className="timeline-date">
            <span>GIU</span>
            <strong>25</strong>
          </div>
          <div>
            <p className="card-label">Conferma entro</p>
            <h3>25 giugno 2026</h3>
            <p>Fammi sapere se festeggerai con me.</p>
          </div>
        </article>

        <article className="timeline-card">
          <div className="timeline-date">
            <span>GIU</span>
            <strong>29</strong>
          </div>
          <div>
            <p className="card-label">La proclamazione</p>
            <h3>Università della Calabria</h3>
            <p>Aula A, Cubo 30A, piano terra.</p>
          </div>
        </article>

        <article className="timeline-card">
          <div className="timeline-date">
            <span>LUG</span>
            <strong>10</strong>
          </div>
          <div>
            <p className="card-label">La festa · ore 20:00</p>
            <h3>Ristorante Hotel Barbieri</h3>
            <p>Altomonte, provincia di Cosenza.</p>
          </div>
        </article>

        <button className="action-button" onClick={onCalendar}>
          <CalendarDays size={19} />
          <span>Salva gli eventi</span>
        </button>

        <article className="quote-card">
          <GraduationCap size={34} strokeWidth={1.2} />
          <blockquote>
            “Ogni traguardo è un nuovo punto di partenza.”
          </blockquote>
          <p>Grazie per essere parte di questo momento.</p>
        </article>
      </div>
    </section>
  );
}

function ConfirmationPage() {
  return (
    <section className="screen content-screen confirmation-screen">
      <PageTitle icon={MessageCircle}>Conferma</PageTitle>

      <div className="content-stack">
        <div className="confirmation-seal">
          <Check size={34} strokeWidth={1.5} />
        </div>
        <p className="intro-script">
          La tua presenza renderà questo traguardo ancora più speciale.
        </p>

        <article className="detail-card confirmation-card">
          <MessageCircle size={31} strokeWidth={1.4} />
          <p className="card-label">È gradita conferma entro</p>
          <h3>25 giugno 2026</h3>
          <p>
            Tocca il pulsante qui sotto: troverai già pronto il messaggio per
            Michela.
          </p>
          <ActionLink href={WHATSAPP} icon={MessageCircle}>
            Conferma su WhatsApp
          </ActionLink>
        </article>

        <p className="contact-line">
          <span>Michela</span>
          <a href="tel:+393403746481">+39 340 374 6481</a>
        </p>

        <div className="final-wish">
          <Heart size={18} fill="currentColor" />
          <span>Ti aspetto per festeggiare insieme!</span>
        </div>
      </div>
    </section>
  );
}

function createCalendarFile() {
  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Laurea Michela//IT",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:laurea-michela-20260629",
    "DTSTAMP:20260611T090000Z",
    "DTSTART;VALUE=DATE:20260629",
    "DTEND;VALUE=DATE:20260630",
    "SUMMARY:Laurea di Michela",
    "DESCRIPTION:Laurea in Scienze della Formazione Primaria - magistrale a ciclo unico. Aula A, Cubo 30A, piano terra.",
    "LOCATION:Università della Calabria, Aula A - Cubo 30A",
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:festa-michela-20260710",
    "DTSTAMP:20260611T090000Z",
    "DTSTART:20260710T180000Z",
    "DTEND:20260710T220000Z",
    "SUMMARY:Festa di laurea di Michela",
    "DESCRIPTION:Festa di laurea di Michela Masellis.",
    "LOCATION:Ristorante Hotel Barbieri, Via Italo Barbieri 30, Altomonte CS",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const url = URL.createObjectURL(
    new Blob([content], { type: "text/calendar;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "laurea-michela.ics";
  link.click();
  URL.revokeObjectURL(url);
}

export function App() {
  const initialPage = useMemo(() => {
    const hash = window.location.hash.replace("#", "");
    return navItems.some((item) => item.id === hash) ? hash : "home";
  }, []);
  const [activePage, setActivePage] = useState(initialPage);
  const [transitionKey, setTransitionKey] = useState(0);

  useEffect(() => {
    window.history.replaceState(null, "", `#${activePage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  function navigate(page) {
    if (page === activePage) return;
    setActivePage(page);
    setTransitionKey((value) => value + 1);
  }

  const pages = {
    home: <HomePage onNavigate={navigate} onCalendar={createCalendarFile} />,
    laurea: <GraduationPage />,
    festa: <PartyPage />,
    info: <InfoPage onCalendar={createCalendarFile} />,
    conferma: <ConfirmationPage />,
  };

  return (
    <div className="app-shell">
      <main className="app-frame">
        <div className="page-transition" key={transitionKey}>
          {pages[activePage]}
        </div>
      </main>

      <nav className="bottom-nav" aria-label="Navigazione principale">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={activePage === id ? "active" : ""}
            onClick={() => navigate(id)}
            aria-current={activePage === id ? "page" : undefined}
          >
            <span className="nav-icon">
              <Icon
                size={id === "home" ? 23 : 21}
                strokeWidth={activePage === id ? 1.8 : 1.45}
                fill={id === "home" && activePage === id ? "currentColor" : "none"}
              />
            </span>
            <small>{label}</small>
          </button>
        ))}
      </nav>
    </div>
  );
}
