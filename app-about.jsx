// About page
const { useEffect: useEffA, useState: useStateA } = React;

function AboutHeroLarge({ lang }) {
  const t = CONTENT.tagline[lang];
  const philo = CONTENT.philosophy[lang];
  return (
    <section className="hero" id="top" style={{ minHeight: "auto", paddingBottom: 80 }}>
      <div className="hero-topline">
        <div className="mono">N—01 / ABOUT NOTIC</div>
        <div className="hero-topline-mid">
          <a href="index.html" className="mono">← INDEX</a>
        </div>
        <div className="mono">{lang === "jp" ? "会社概要" : "ABOUT"}</div>
      </div>

      <div className="hero-main" style={{ paddingBottom: 24 }}>
        <h1 className="hero-headline">
          {philo.split("\n").map((l, i) => (
            <span key={i} className="line" data-reveal>
              {i === 1 ? <><span className="accent">{l.replace("。","")}</span>。</> : l}
            </span>
          ))}
        </h1>
        <aside className="hero-side" data-reveal>
          <div className="mono hero-side-label">{lang === "jp" ? "理念" : "PRINCIPLE"}</div>
          <p className="hero-side-body">{t}</p>
        </aside>
      </div>
    </section>
  );
}

function PhilosophyCols({ lang }) {
  const items = lang === "jp" ? [
    { num: "01", head: "気づく", body: "違和感、不便、まだ言語化されていない感覚。クライアントと社会のなかにある「気づき」を起点にする。" },
    { num: "02", head: "つくる", body: "手を動かし、素材と向き合うことで、発想は精度を得る。スケッチではなく、プロトタイプを通して思考する。" },
    { num: "03", head: "届ける", body: "単発の制作で終わらせず、プロダクト・導入・運用のかたちに落としこむ。実装まで伴走する。" },
  ] : [
    { num: "01", head: "Notice", body: "Friction, inconvenience, the unarticulated. We begin from what clients and society haven't yet put into words." },
    { num: "02", head: "Create", body: "Ideas sharpen when the hand is involved. We think through prototypes rather than sketches." },
    { num: "03", head: "Deliver", body: "Nothing ends as a one-off. We follow the work all the way to product, deployment, and operation." },
  ];
  return (
    <section className="section">
      <SectionHead
        eyebrow={lang === "jp" ? "N—02 / APPROACH" : "N—02 / APPROACH"}
        title={lang === "jp" ? "3つの動詞。" : "Three verbs."}
      />
      <div className="philo-cols">
        {items.map(it => (
          <article className="philo-col" key={it.num} data-reveal>
            <div className="mono">{it.num}</div>
            <h3 className="philo-head serif">{it.head}</h3>
            <p className="philo-body">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Capabilities({ lang }) {
  const items = lang === "jp" ? [
    "3Dプリンティング (FDM / SLA / SLS)",
    "コンピューテーショナル設計",
    "Grasshopper / Rhino",
    "Blender / Houdini",
    "Unity / Unreal",
    "TouchDesigner",
    "機械学習 / 生成AI",
    "画像処理 / データ可視化",
    "量産設計支援",
    "素材研究",
    "撮影・ビジュアル制作",
    "ワークショップ運営",
  ] : [
    "3D Printing (FDM / SLA / SLS)",
    "Computational design",
    "Grasshopper / Rhino",
    "Blender / Houdini",
    "Unity / Unreal",
    "TouchDesigner",
    "ML / Generative AI",
    "Image pipelines / Data viz",
    "Design for manufacturing",
    "Material research",
    "Photography / Visual production",
    "Workshop facilitation",
  ];
  return (
    <section className="section">
      <SectionHead eyebrow="N—03 / CAPABILITIES" title={lang === "jp" ? "技術領域" : "Capabilities"} />
      <div className="cap-grid">
        {items.map((it, i) => (
          <div className="cap-item" key={i} data-reveal>
            <span className="mono" style={{ color: "var(--muted)", marginRight: 12 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {it}
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline({ lang }) {
  const items = lang === "jp" ? [
    { y: "2022", t: "NOTIC設立" },
    { y: "2023", t: "Art Panel 初導入" },
    { y: "2024", t: "Q-CUBE ローンチ / SDGs Products 開始" },
    { y: "2025", t: "大手製造業との協業 / 展示会出展" },
    { y: "2026", t: "Q-CUBE 新モデル発表" },
  ] : [
    { y: "2022", t: "NOTIC founded" },
    { y: "2023", t: "Art Panel first engagement" },
    { y: "2024", t: "Q-CUBE launched / SDGs Products initiated" },
    { y: "2025", t: "Collaborations with major manufacturers / Exhibition" },
    { y: "2026", t: "Q-CUBE new model announced" },
  ];
  return (
    <section className="section">
      <SectionHead eyebrow="N—04 / HISTORY" title={lang === "jp" ? "これまで" : "Timeline"} />
      <div className="timeline container">
        {items.map((it, i) => (
          <div className="timeline-row" key={it.y} data-reveal>
            <div className="serif timeline-y">{it.y}</div>
            <div className="timeline-t">{it.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppAbout() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();
  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <AboutHeroLarge lang={lang} />
        <PhilosophyCols lang={lang} />
        <Capabilities lang={lang} />
        <Timeline lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppAbout />);
