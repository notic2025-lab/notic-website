// Product detail page
const { useEffect: useEffP, useMemo: useMemoP } = React;

function getProductIdFromURL() {
  try {
    const p = new URLSearchParams(window.location.search).get("p");
    return p || "q-cube";
  } catch {
    return "q-cube";
  }
}

function ProductHero({ lang, product, idx, total }) {
  const numLabel = `N—03 / SERVICES`;
  return (
    <section className="hero product-hero" id="top" style={{ minHeight: "auto", paddingBottom: 40 }}>
      <div className="hero-topline">
        <div className="mono">{numLabel}</div>
        <div className="hero-topline-mid">
          <a href="index.html#services" className="mono">← INDEX</a>
        </div>
        <div className="mono">{String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
      </div>

      <div className="hero-main product-hero-main">
        <div className="product-hero-headline-wrap">
          <div className="mono product-hero-kicker" data-reveal>{product.num} · {product.type} · {product.year}</div>
          <h1 className="product-hero-headline serif" data-reveal>
            {product.name}
          </h1>
          <p className="product-hero-tagline serif" data-reveal>
            {(product.detail?.tagline || "").split("\n").map((l, i) => (
              <span key={i} className="line" style={{ display: "block" }}>{l}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductCover({ product }) {
  return (
    <section className="section product-cover-section">
      <div className="product-cover container">
        <Placeholder
          label={`${product.num} — ${product.name}`}
          ratio="16/9"
          tone={product.color || "bg2"}
          image={product.image}
          alt={product.name}
        />
      </div>
    </section>
  );
}

function ProductLead({ lang, product }) {
  return (
    <section className="section product-lead-section">
      <div className="product-lead container">
        <div className="mono product-lead-label" data-reveal>
          {lang === "jp" ? "CONCEPT" : "CONCEPT"}
        </div>
        <p className="product-lead-body serif" data-reveal>
          {product.detail?.lead}
        </p>
      </div>
    </section>
  );
}

function ProductSections({ lang, product }) {
  const sections = product.detail?.sections || [];
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

function ProductSpecs({ lang, product }) {
  const specs = product.detail?.specs || [];
  return (
    <section className="section product-specs-section">
      <div className="container">
        <div className="mono product-specs-label" data-reveal>
          {lang === "jp" ? "仕様" : "SPECS"}
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

function ProductRelated({ lang, current }) {
  const d = CONTENT.products[lang];
  const others = d.items.filter((x) => x.id !== current.id);
  return (
    <section className="section product-related-section">
      <div className="container">
        <div className="mono product-related-label" data-reveal>
          {lang === "jp" ? "他のサービス" : "OTHER SERVICES"}
        </div>
        <div className="product-related-grid">
          {others.map((it) => (
            <a className="product-related-card" key={it.id} href={`products.html?p=${it.id}`} data-reveal>
              <Placeholder
                label={it.name}
                ratio="16/9"
                tone={it.color}
                image={it.image}
                alt={it.name}
              />
              <div className="product-related-body">
                <div className="mono product-related-meta">
                  <span>{it.num}</span>
                  <span>{it.type}</span>
                </div>
                <h4 className="product-related-name serif">{it.name}</h4>
                <div className="product-related-more mono">
                  <span>{lang === "jp" ? "詳しく見る" : "READ MORE"}</span>
                  <span className="service-arrow">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCTA({ lang }) {
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

function AppProduct() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();

  const id = useMemoP(() => getProductIdFromURL(), []);
  const items = CONTENT.products[lang].items;
  const idx = Math.max(0, items.findIndex((x) => x.id === id));
  const product = items[idx] || items[0];

  useEffP(() => {
    document.title = `${product.name} — NOTIC`;
  }, [product.name]);

  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <ProductHero lang={lang} product={product} idx={idx} total={items.length} />
        <ProductCover product={product} />
        <ProductLead lang={lang} product={product} />
        <ProductSections lang={lang} product={product} />
        <ProductSpecs lang={lang} product={product} />
        <ProductRelated lang={lang} current={product} />
        <ProductCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppProduct />);
