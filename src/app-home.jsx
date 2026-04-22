// NOTIC — app entry (home)
const { useEffect: useEffectApp, useState: useStateApp } = React;

function Tweaks({ accent, setAccent, lang, setLang }) {
  const [open, setOpen] = useStateApp(false);
  const [available, setAvailable] = useStateApp(false);

  useEffectApp(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") { setAvailable(true); setOpen(true); }
      if (e.data.type === "__deactivate_edit_mode") { setAvailable(false); setOpen(false); }
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  if (!available || !open) return null;

  const pick = (next) => {
    setAccent(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { accent: next } }, "*");
  };
  const pickLang = (next) => {
    setLang(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { lang: next } }, "*");
  };

  return (
    <div className="tweaks">
      <div className="tweaks-title">
        <span>Tweaks</span>
        <span className="tweaks-close" onClick={() => setOpen(false)}>×</span>
      </div>
      <div className="tweaks-row">
        <span>Accent</span>
        <span className="tweaks-swatches">
          {Object.entries(ACCENTS).map(([k, v]) => (
            <button
              key={k}
              className={`swatch ${accent === k ? "is-on" : ""}`}
              style={{ background: v }}
              onClick={() => pick(k)}
              aria-label={k}
            />
          ))}
        </span>
      </div>
      <div className="tweaks-row">
        <span>Language</span>
        <span>
          <button className={`lang-btn ${lang === "jp" ? "is-on" : ""}`} onClick={() => pickLang("jp")}>JP</button>
          <span style={{ opacity: 0.3, margin: "0 6px" }}>/</span>
          <button className={`lang-btn ${lang === "en" ? "is-on" : ""}`} onClick={() => pickLang("en")}>EN</button>
        </span>
      </div>
    </div>
  );
}

function App() {
  const DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "blue",
    "lang": "en"
  }/*EDITMODE-END*/;
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent(DEFAULTS.accent);
  useReveal();

  // initialize lang from defaults on first mount if localStorage empty
  useEffectApp(() => {
    try {
      if (!localStorage.getItem("notic.lang")) setLang(DEFAULTS.lang);
    } catch {}
  }, []);

  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <Hero lang={lang} />
        <Marquee items={CONTENT.ticker[lang]} />
        <AboutSection lang={lang} />
        <ServicesSection lang={lang} />
        <ProductsSection lang={lang} />
        <WorkSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <Tweaks accent={accent} setAccent={setAccent} lang={lang} setLang={setLang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
