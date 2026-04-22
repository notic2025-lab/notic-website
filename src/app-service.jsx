// Service detail page
const { useEffect: useEffS, useMemo: useMemoS } = React;

function getServiceIdFromURL() {
  try {
    const s = new URLSearchParams(window.location.search).get("s");
    return s || "3d-printing";
  } catch {
    return "3d-printing";
  }
}

function ServiceHero({ lang, service, idx, total }) {
  return (
    <section className="hero service-hero" id="top" style={{ minHeight: "auto", paddingBottom: 40 }}>
      <div className="hero-topline">
        <div className="mono">N—02 / TECHNOLOGY</div>
        <div className="hero-topline-mid">
          <a href="index.html#technology" className="mono">← INDEX</a>
        </div>
        <div className="mono">{String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
      </div>

      <div className="hero-main product-hero-main">
        <div className="product-hero-headline-wrap">
          <div className="mono product-hero-kicker" data-reveal>{service.num}</div>
          <h1 className="product-hero-headline serif" data-reveal>
            {service.title}
          </h1>
          <p className="product-hero-tagline serif" data-reveal>
            {(service.detail?.tagline || "").split("\n").map((l, i) => (
              <span key={i} className="line" style={{ display: "block" }}>{l}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceLead({ lang, service }) {
  return (
    <section className="section product-lead-section">
      <div className="product-lead container">
        <div className="mono product-lead-label" data-reveal>
          {lang === "jp" ? "CONCEPT" : "CONCEPT"}
        </div>
        <p className="product-lead-body serif" data-reveal>
          {service.detail?.lead}
        </p>
      </div>
    </section>
  );
}

function ServiceSections({ lang, service }) {
  const sections = service.detail?.sections || [];
  return (
    <section className="section product-sections">
      <div className="container">
        {sections.map((s, i) => (
          <div className="product-section-row" key={i} data-reveal>
            <div className="mono product-section-num">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="product-section-head serif">{s.h}</h3>
            <div className="product-section-body">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceSpecs({ lang, service }) {
  const specs = service.detail?.specs || [];
  return (
    <section className="section product-specs-section">
      <div className="container">
        <div className="mono product-specs-label" data-reveal>
          {lang === "jp" ? "概要" : "OVERVIEW"}
        </div>
        <div className="product-specs-grid">
          {specs.map((s, i) => (
            <div className="product-spec" key={i} data-reveal>
              <div className="mono product-spec-k">{s.k}</div>
              <div className="product-spec-v">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRelated({ lang, current }) {
  const d = CONTENT.services[lang];
  const others = d.items.filter((x) => x.id !== current.id);
  return (
    <section className="section product-related-section">
      <div className="container">
        <div className="mono product-related-label" data-reveal>
          {lang === "jp" ? "他のサービス" : "OTHER SERVICES"}
        </div>
        <div className="service-related-list">
          {others.map((it) => (
            <a className="service-related-row" key={it.id} href={`services.html?s=${it.id}`} data-reveal>
              <div className="mono service-related-num">{it.num}</div>
              <h4 className="service-related-title serif">{it.title}</h4>
              <p className="service-related-body">{it.body}</p>
              <div className="service-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCTA({ lang }) {
  const d = CONTENT.contact[lang];
  return (
    <section className="section product-cta-section">
      <div className="container product-cta" data-reveal>
        <div className="mono product-cta-eyebrow">{lang === "jp" ? "CONTACT" : "CONTACT"}</div>
        <h2 className="product-cta-title serif">
          {lang === "jp" ? "気になったことがあれば、\nお気軽にご相談ください。" : "Got something on your mind?\nTell us."}
        </h2>
        <div className="product-cta-actions">
          <a className="contact-email" href={`mailto:${d.email}`}>{d.email} <span>↗</span></a>
          <a className="contact-btn" href="contact.html">{d.cta}</a>
        </div>
      </div>
    </section>
  );
}

function AppService() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();

  const id = useMemoS(() => getServiceIdFromURL(), []);
  const items = CONTENT.services[lang].items;
  const idx = Math.max(0, items.findIndex((x) => x.id === id));
  const service = items[idx] || items[0];

  useEffS(() => {
    document.title = `${service.title} — NOTIC`;
  }, [service.title]);

  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <ServiceHero lang={lang} service={service} idx={idx} total={items.length} />
        <ServiceLead lang={lang} service={service} />
        <ServiceSections lang={lang} service={service} />
        <ServiceSpecs lang={lang} service={service} />
        <ServiceRelated lang={lang} current={service} />
        <ServiceCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppService />);
