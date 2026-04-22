// Shared primitives for NOTIC
const { useEffect, useRef, useState, useMemo } = React;

// ---------- Reveal on scroll ----------
function useReveal() {
  useEffect(() => {
    let raf = 0;
    const reveal = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const els = document.querySelectorAll("[data-reveal]:not(.is-in)");
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh - 20 && r.bottom > 0) {
          // Force reflow so the transition commits from the initial opacity:0 state.
          void el.offsetHeight;
          requestAnimationFrame(() => {
            requestAnimationFrame(() => el.classList.add("is-in"));
          });
        }
      });
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; reveal(); });
    };

    reveal();
    const r1 = requestAnimationFrame(reveal);
    const t1 = setTimeout(reveal, 80);
    const t2 = setTimeout(reveal, 250);
    const t3 = setTimeout(reveal, 600);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(r1);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

// ---------- Language ----------
function useLang() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("notic.lang") || "jp"; } catch { return "jp"; }
  });
  useEffect(() => {
    try { localStorage.setItem("notic.lang", lang); } catch {}
    document.documentElement.lang = lang === "jp" ? "ja" : "en";
  }, [lang]);
  return [lang, setLang];
}

// ---------- Accent ----------
const ACCENTS = {
  red:   "oklch(0.62 0.19 28)",
  blue:  "oklch(0.55 0.18 255)",
  green: "oklch(0.58 0.15 150)",
};
function useAccent(initial = "red") {
  const [accent, setAccent] = useState(initial);
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", ACCENTS[accent] || ACCENTS.red);
  }, [accent]);
  return [accent, setAccent];
}

// ---------- Nav ----------
function TopBar({ lang, setLang, accent, setAccent }) {
  const items = CONTENT.nav[lang];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="topbar-inner container">
        <a href="index.html" className="brand-mark" aria-label="NOTIC home">
          <img src="assets/notic-logo.png" alt="NOTIC" className="brand-logo" />
        </a>

        <nav className="topnav">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="topnav-link"
            >
              <span className="mono nav-num">{it.num}</span>
              <span>{it.label}</span>
            </a>
          ))}
        </nav>

        <div className="topbar-end">
          <div className="lang-switch" role="group" aria-label="language">
            <button
              className={`lang-btn ${lang === "jp" ? "is-on" : ""}`}
              onClick={() => setLang("jp")}
              aria-pressed={lang === "jp"}
            >JP</button>
            <span className="lang-sep">/</span>
            <button
              className={`lang-btn ${lang === "en" ? "is-on" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ---------- Marquee ----------
function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-label="news ticker">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" />
            <span className="mono">{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- Placeholder image block ----------
function Placeholder({ label, ratio = "4/3", tone = "bg2", accent = false, image, alt }) {
  const bgMap = {
    bg2: "var(--bg-2)",
    ink: "var(--ink)",
    accent: "var(--accent)",
  };
  const inkMap = { bg2: "var(--ink)", ink: "var(--bg)", accent: "var(--accent-ink)" };
  const stripe = tone === "ink"
    ? "rgba(255,255,255,0.04)"
    : tone === "accent"
      ? "rgba(255,255,255,0.08)"
      : "rgba(17,17,17,0.04)";

  if (image) {
    return (
      <div
        className="ph ph-image"
        style={{ aspectRatio: ratio, background: "var(--bg-2)", overflow: "hidden" }}
      >
        <img
          src={image}
          alt={alt || label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    );
  }

  return (
    <div
      className="ph"
      style={{
        aspectRatio: ratio,
        background: `repeating-linear-gradient(135deg, ${bgMap[tone]} 0 14px, ${stripe} 14px 15px)`,
        color: inkMap[tone],
      }}
    >
      <div className="ph-label mono">{label}</div>
      <div className="ph-corner mono">[ image ]</div>
    </div>
  );
}

// ---------- Section heading ----------
function SectionHead({ eyebrow, title, id, size }) {
  return (
    <div className="section-head container" id={id}>
      <div className="section-eyebrow mono" data-reveal>{eyebrow}</div>
      <h2 className={`section-title serif ${size === "large" ? "is-large" : ""}`} data-reveal>
        {title.split("\n").map((l, i) => <span key={i} className="line">{l}</span>)}
      </h2>
    </div>
  );
}

Object.assign(window, { useReveal, useLang, useAccent, ACCENTS, TopBar, Marquee, Placeholder, SectionHead });
