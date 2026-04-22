// Home page sections
const { useEffect: useEffect2, useState: useState2 } = React;

// ---------- Hero ----------
function Hero({ lang }) {
  const t = CONTENT.tagline[lang];
  const sideLabel = lang === "jp" ? "N—00 / INTRODUCTION" : "N—00 / INTRODUCTION";
  const sideBody = lang === "jp"
    ? (
        <>
          NOTICは<br />
          「問題に気づき、つくることで解決する」<br />
          を理念に活動するクリエイティブチームです。
        </>
      )
    : (
        <>
          NOTIC is a creative studio —<br />
          running from noticing to making,<br />
          grounded in 3D printing and<br />
          computational design.
        </>
      );

  // headline is the same for both languages
  const headline = (
    <>
      <span className="line" data-reveal>Notice,</span>
      <span className="line" data-reveal>
        and <span className="accent">create</span><span className="dot" />
      </span>
    </>
  );

  return (
    <section className="hero" id="top">
      <div className="hero-topline">
        <div className="mono">CREATIVE STUDIO — EST. 2026</div>
        <div className="hero-topline-mid">
          <span className="mono">SHIGA</span>
          <span className="mono">JP</span>
        </div>
        <div className="mono">INDEX — 00</div>
      </div>

      <div className="hero-main">
        <h1 className="hero-headline">{headline}</h1>
        <aside className="hero-side" data-reveal>
          <div className="mono hero-side-label">{sideLabel}</div>
          <p className="hero-side-body">{sideBody}</p>
        </aside>
      </div>

      <div className="hero-bottom">
        <a href="#about" className="hero-scroll mono">
          <span>{lang === "jp" ? "スクロール" : "SCROLL"}</span>
          <span className="hero-scroll-arrow" />
        </a>
        <div className="mono" style={{ color: "var(--muted)" }}>—</div>
        <div className="hero-locale mono">
          {lang === "jp" ? "滋賀 / SHIGA 34.98°N 135.96°E" : "SHIGA 34.98°N 135.96°E"}
        </div>
      </div>
    </section>
  );
}

// ---------- About ----------
function AboutSection({ lang }) {
  const d = CONTENT.about[lang];
  return (
    <section className="section" id="about">
      <SectionHead eyebrow={d.eyebrow} title={d.title} size="large" />
      <div className="about-body">
        <div className="about-copy" data-reveal>{d.body}</div>
        <div className="about-meta mono" data-reveal>
          <div>EST.</div>
          <div style={{ color: "var(--ink)", marginTop: 4 }}>2026</div>
          <div style={{ marginTop: 18 }}>BASED</div>
          <div style={{ color: "var(--ink)", marginTop: 4 }}>SHIGA</div>
        </div>
      </div>
    </section>
  );
}

// ---------- Services ----------
function ServicesSection({ lang }) {
  const d = CONTENT.services[lang];
  return (
    <section className="section" id="technology">
      <SectionHead eyebrow={d.eyebrow} title={d.title} />
      <div className="services-list">
        {d.items.map((it) => (
          <a
            className="service-row is-link"
            key={it.num}
            href={`services.html?s=${it.id}`}
            data-reveal
          >
            <div className="mono service-num">{it.num}</div>
            <h3 className="service-title">{it.title}</h3>
            <p className="service-body">{it.body}</p>
            <div className="service-arrow">→</div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ---------- Products ----------
function ProductsSection({ lang }) {
  const d = CONTENT.products[lang];
  const classes = ["p1", "p2", "p3"];
  const ratios = ["16/9", "16/9", "16/9"];
  return (
    <section className="section" id="services">
      <SectionHead eyebrow={d.eyebrow} title={d.title} />
      <div className="products">
        {d.items.map((it, i) => (
          <a
            className={`product-card ${classes[i]} is-link`}
            key={it.num}
            href={`products.html?p=${it.id}`}
            data-reveal
          >
            <Placeholder label={`${it.num} — ${it.name}`} ratio={ratios[i]} tone={it.color} image={it.image} alt={it.name} />
            <div>
              <div className="product-meta mono">
                <span>{it.num}</span>
                <span>{it.type} · {it.year}</span>
              </div>
              <h3 className="product-name">{it.name}</h3>
              <p className="product-body">{it.body}</p>
              <div className="product-more mono">
                <span>{lang === "jp" ? "詳しく見る" : "READ MORE"}</span>
                <span className="service-arrow">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ---------- Work ----------
function WorkSection({ lang }) {
  const d = CONTENT.work[lang];
  return (
    <section className="section" id="work">
      <SectionHead eyebrow={d.eyebrow} title={d.title} />
      <div className="work-grid">
        {d.items.map((it) => (
          <a href={`work.html?w=${it.id}`} className="work-card" key={it.num} data-reveal>
            <Placeholder
              label={`${it.num} — ${it.client}`}
              ratio="16/9"
              tone="bg2"
              image={it.image}
              alt={it.client}
            />
            <div className="work-card-body">
              <div className="work-card-meta mono">
                <span>{it.num}</span>
                <span>{it.sector} · {it.year}</span>
              </div>
              <h3 className="work-card-client">{it.client}</h3>
              <p className="work-card-desc">{it.desc}</p>
              <div className="work-card-foot">
                <span className="work-tag">{it.tag}</span>
                <span className="service-arrow">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ---------- Contact ----------
function ContactSection({ lang }) {
  const d = CONTENT.contact[lang];
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="mono contact-eyebrow" data-reveal>{d.eyebrow}</div>
        <h2 className="contact-title" data-reveal>
          {d.title.split("\n").map((l, i) => (
            <span key={i} className="line" style={{ display: "block" }}>{l}</span>
          ))}
        </h2>
        <p className="contact-body" data-reveal>{d.body}</p>
        <div className="contact-cta" data-reveal>
          <a className="contact-email" href={`mailto:${d.email}`}>
            {d.email} <span>↗</span>
          </a>
          <a className="contact-btn" href="contact.html">{d.cta}</a>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer({ lang }) {
  const d = CONTENT.footer[lang];
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          {d.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href && l.href !== "#" ? "_blank" : undefined}
              rel={l.href && l.href !== "#" ? "noopener noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="footer-copy">{d.copy}</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, AboutSection, ServicesSection, ProductsSection, WorkSection, ContactSection, Footer });
