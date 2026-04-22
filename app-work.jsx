// Work detail page
const { useEffect: useEffW, useMemo: useMemoW } = React;

function getWorkIdFromURL() {
  try {
    return new URLSearchParams(window.location.search).get("w") || "";
  } catch {
    return "";
  }
}

// ----- single-work detail components -----
function WorkDetailHero({ lang, item, idx, total }) {
  return (
    <section className="hero work-detail-hero" id="top" style={{ minHeight: "auto", paddingBottom: 40 }}>
      <div className="hero-topline">
        <div className="mono">N—04 / WORKS</div>
        <div className="hero-topline-mid">
          <a href="work.html" className="mono">← WORK INDEX</a>
        </div>
        <div className="mono">{String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
      </div>

      <div className="hero-main product-hero-main">
        <div className="product-hero-headline-wrap">
          <div className="mono product-hero-kicker" data-reveal>{item.num} · {item.sector} · {item.year}</div>
          <h1 className="product-hero-headline serif" data-reveal>
            {item.client}
          </h1>
          <p className="product-hero-tagline serif" data-reveal>
            {item.desc}
          </p>
          <div className="work-detail-tags" data-reveal>
            <span className="work-tag">{item.tag}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkDetailCover({ item }) {
  return (
    <section className="section product-cover-section">
      <div className="product-cover container">
        <Placeholder
          label={`${item.num} — ${item.client}`}
          ratio="16/9"
          tone="bg2"
          image={item.image}
          alt={item.client}
        />
      </div>
    </section>
  );
}

function WorkDetailOverview({ lang, item }) {
  const d = item.detail || {};
  return (
    <section className="section product-lead-section">
      <div className="product-lead container">
        <div className="mono product-lead-label" data-reveal>
          {lang === "jp" ? "概要" : "OVERVIEW"}
        </div>
        <p className="product-lead-body serif" data-reveal>
          {d.overview}
        </p>
      </div>
    </section>
  );
}

function WorkDetailMeta({ lang, item }) {
  const d = item.detail || {};
  const rows = [
    { k: lang === "jp" ? "クライアント" : "Client", v: item.client },
    { k: lang === "jp" ? "業界" : "Sector", v: item.sector },
    { k: lang === "jp" ? "年" : "Year", v: item.year },
    { k: lang === "jp" ? "担当" : "Role", v: d.role || item.tag },
  ];
  return (
    <section className="section product-specs-section">
      <div className="container">
        <div className="mono product-specs-label" data-reveal>
          {lang === "jp" ? "プロジェクト情報" : "PROJECT INFO"}
        </div>
        <div className="product-specs-grid">
          {rows.map((r, i) => (
            <div className="product-spec" key={i} data-reveal>
              <div className="mono product-spec-k">{r.k}</div>
              <div className="product-spec-v">{r.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkDetailBody({ lang, item }) {
  const d = item.detail || {};
  if (!d.body) return null;
  return (
    <section className="section product-sections">
      <div className="container">
        <div className="product-section-row" data-reveal>
          <div className="mono product-section-num">01</div>
          <h3 className="product-section-head serif">
            {lang === "jp" ? "取り組み" : "What we did"}
          </h3>
          <div className="product-section-body">{d.body}</div>
        </div>
      </div>
    </section>
  );
}

function WorkDetailRelated({ lang, current }) {
  const d = CONTENT.work[lang];
  const others = d.items.filter((x) => x.id !== current.id).slice(0, 3);
  return (
    <section className="section product-related-section">
      <div className="container">
        <div className="mono product-related-label" data-reveal>
          {lang === "jp" ? "他のプロジェクト" : "OTHER PROJECTS"}
        </div>
        <div className="product-related-grid work-related-grid">
          {others.map((it) => (
            <a className="product-related-card" key={it.id} href={`work.html?w=${it.id}`} data-reveal>
              <Placeholder
                label={it.client}
                ratio="16/9"
                tone="bg2"
                image={it.image}
                alt={it.client}
              />
              <div className="product-related-body">
                <div className="mono product-related-meta">
                  <span>{it.num}</span>
                  <span>{it.sector} · {it.year}</span>
                </div>
                <h4 className="product-related-name serif">{it.client}</h4>
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

function WorkDetailCTA({ lang }) {
  const d = CONTENT.contact[lang];
  return (
    <section className="section product-cta-section">
      <div className="container product-cta" data-reveal>
        <div className="mono product-cta-eyebrow">{lang === "jp" ? "CONTACT" : "CONTACT"}</div>
        <h2 className="product-cta-title serif">
          {lang === "jp" ? "似たようなプロジェクトを\nご検討中ですか?" : "Have a similar project\nin mind?"}
        </h2>
        <div className="product-cta-actions">
          <a className="contact-email" href={`mailto:${d.email}`}>{d.email} <span>↗</span></a>
          <a className="contact-btn" href="contact.html">{d.cta}</a>
        </div>
      </div>
    </section>
  );
}

// ----- work index (original) -----
function WorkHeroLarge({ lang }) {
  return (
    <section className="hero" id="top" style={{ minHeight: "auto", paddingBottom: 60 }}>
      <div className="hero-topline">
        <div className="mono">N—04 / WORKS</div>
        <div className="hero-topline-mid">
          <a href="index.html" className="mono">← INDEX</a>
        </div>
        <div className="mono">{lang === "jp" ? "導入実績" : "ENGAGEMENTS"}</div>
      </div>
      <div className="hero-main" style={{ paddingBottom: 24 }}>
        <h1 className="hero-headline">
          <span className="line" data-reveal>{lang === "jp" ? "つくった" : "What we've"}</span>
          <span className="line" data-reveal>
            <span className="accent">{lang === "jp" ? "もの" : "made"}</span>。
          </span>
        </h1>
        <aside className="hero-side" data-reveal>
          <div className="mono hero-side-label">{lang === "jp" ? "実績一覧" : "SELECTED WORK"}</div>
          <p className="hero-side-body">
            {lang === "jp"
              ? "製造・建築・広告・公共・教育の分野で、プロトタイプから量産、ビジュアル制作まで担当しています。"
              : "From prototyping to small-batch production and visuals — across manufacturing, architecture, advertising, public, and education."}
          </p>
        </aside>
      </div>
    </section>
  );
}

function WorkCase({ idx, item, lang }) {
  const tones = ["ink", "bg2", "accent", "bg2", "ink", "bg2"];
  return (
    <a className="work-case is-link" href={`work.html?w=${item.id}`} data-reveal>
      <div className="work-case-media">
        <Placeholder
          label={`${item.num} / ${item.tag}`}
          ratio="16/9"
          tone={tones[idx % tones.length]}
          image={item.image}
          alt={item.client}
        />
      </div>
      <div className="work-case-meta">
        <div className="work-case-num mono">{item.num} · {item.year}</div>
        <div className="work-case-tag"><span className="work-tag">{item.tag}</span></div>
      </div>
      <h3 className="work-case-client serif">{item.client}</h3>
      <p className="work-case-desc">{item.desc}</p>
      <div className="work-case-sector mono">{item.sector}</div>
    </a>
  );
}

function WorkGrid({ lang }) {
  const d = CONTENT.work[lang];
  return (
    <section className="section">
      <div className="work-grid">
        {d.items.map((it, i) => (
          <WorkCase key={it.num} idx={i} item={it} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function WorkStats({ lang }) {
  const items = lang === "jp" ? [
    { n: "10+", l: "導入プロジェクト" },
    { n: "6", l: "業界" },
    { n: "3", l: "主要技術領域" },
    { n: "2026", l: "創業" },
  ] : [
    { n: "10+", l: "Delivered projects" },
    { n: "6", l: "Industries" },
    { n: "3", l: "Core disciplines" },
    { n: "2026", l: "Founded" },
  ];
  return (
    <section className="section">
      <div className="stats-grid">
        {items.map((it, i) => (
          <div className="stat" key={i} data-reveal>
            <div className="stat-n serif">{it.n}</div>
            <div className="mono stat-l">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppWork() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();

  const id = useMemoW(() => getWorkIdFromURL(), []);
  const items = CONTENT.work[lang].items;
  const idx = id ? items.findIndex((x) => x.id === id) : -1;
  const item = idx >= 0 ? items[idx] : null;

  useEffW(() => {
    if (item) document.title = `${item.client} — NOTIC`;
  }, [item && item.client]);

  if (item) {
    return (
      <>
        <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
        <main>
          <WorkDetailHero lang={lang} item={item} idx={idx} total={items.length} />
          <WorkDetailCover item={item} />
          <WorkDetailOverview lang={lang} item={item} />
          <WorkDetailMeta lang={lang} item={item} />
          <WorkDetailBody lang={lang} item={item} />
          <WorkDetailRelated lang={lang} current={item} />
          <WorkDetailCTA lang={lang} />
        </main>
        <Footer lang={lang} />
      </>
    );
  }

  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <WorkHeroLarge lang={lang} />
        <Marquee items={CONTENT.ticker[lang]} />
        <WorkStats lang={lang} />
        <WorkGrid lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppWork />);
