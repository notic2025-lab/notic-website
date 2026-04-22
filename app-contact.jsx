// Contact page
const { useState: useStateC } = React;

function ContactHeroLarge({ lang }) {
  return (
    <section className="hero" id="top" style={{ minHeight: "auto", paddingBottom: 40 }}>
      <div className="hero-topline">
        <div className="mono">N—05 / CONTACT</div>
        <div className="hero-topline-mid">
          <a href="index.html" className="mono">← INDEX</a>
        </div>
        <div className="mono">{lang === "jp" ? "お問い合わせ" : "CONTACT"}</div>
      </div>
      <div className="hero-main" style={{ paddingBottom: 24 }}>
        <h1 className="hero-headline contact-headline">
          <span className="line" data-reveal>{lang === "jp" ? "お気づきのことを、" : "Tell us what"}</span>
          <span className="line" data-reveal>
            <span className="accent">{lang === "jp" ? "聞かせてください" : "you've noticed"}</span>
            <span className="dot" />
          </span>
        </h1>
        <aside className="hero-side" data-reveal>
          <div className="mono hero-side-label">
            {lang === "jp" ? "お問い合わせ窓口" : "GET IN TOUCH"}
          </div>
          <p className="hero-side-body">
            {lang === "jp"
              ? "プロジェクトのご相談、ご依頼、取材など、\nどうぞお気軽にご連絡ください。\n通常3営業日以内にご返信いたします。"
              : "Project inquiries, briefs, press — we'd love to hear from you.\nWe typically reply within three business days."}
          </p>
        </aside>
      </div>
    </section>
  );
}

function ContactInfo({ lang }) {
  const d = CONTENT.contact[lang];
  const blocks = lang === "jp" ? [
    { label: "EMAIL", value: d.email, href: `mailto:${d.email}` },
    { label: "BASED", value: "滋賀県 / SHIGA, JAPAN" },
    { label: "HOURS", value: "平日 10:00 – 18:00 (JST)" },
  ] : [
    { label: "EMAIL", value: d.email, href: `mailto:${d.email}` },
    { label: "BASED", value: "Shiga, Japan" },
    { label: "HOURS", value: "Mon–Fri 10:00 – 18:00 JST" },
  ];
  return (
    <section className="section contact-info-section">
      <div className="contact-info-grid">
        {blocks.map((b) => (
          <div className="contact-info-block" key={b.label} data-reveal>
            <div className="mono contact-info-label">{b.label}</div>
            {b.href ? (
              <a href={b.href} className="contact-info-value">{b.value}</a>
            ) : (
              <div className="contact-info-value">{b.value}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactForm({ lang }) {
  const t = lang === "jp" ? {
    eyebrow: "N—05 / FORM",
    title: "お問い合わせフォーム",
    lead: "以下のフォームに必要事項をご記入のうえ、送信してください。",
    required: "必須",
    optional: "任意",
    name: "お名前",
    company: "会社名・団体名",
    email: "メールアドレス",
    phone: "電話番号",
    type: "お問い合わせ種別",
    types: [
      "ご依頼・ご相談",
      "パートナーシップ",
      "取材・メディア",
      "採用・求人",
      "その他",
    ],
    subject: "件名",
    message: "お問い合わせ内容",
    privacy: "プライバシーポリシーに同意します。",
    privacyLink: "プライバシーポリシー",
    submit: "送信する →",
    note: "※ ご入力いただいた情報は、お問い合わせへの回答以外の目的では使用いたしません。",
    mailFallback: "メールで直接送る場合：",
    thanksTitle: "送信ありがとうございました。",
    thanksBody: "ご入力いただいた内容を確認のうえ、通常3営業日以内にご返信いたします。",
  } : {
    eyebrow: "N—05 / FORM",
    title: "Contact form",
    lead: "Fill in the fields below and we'll get back to you.",
    required: "Required",
    optional: "Optional",
    name: "Name",
    company: "Company / Organization",
    email: "Email",
    phone: "Phone",
    type: "Inquiry type",
    types: [
      "Project inquiry",
      "Partnership",
      "Press / Media",
      "Careers",
      "Other",
    ],
    subject: "Subject",
    message: "Message",
    privacy: "I agree to the privacy policy.",
    privacyLink: "Privacy policy",
    submit: "Send →",
    note: "* Your information will be used only to respond to this inquiry.",
    mailFallback: "Or email us directly:",
    thanksTitle: "Thank you for reaching out.",
    thanksBody: "We'll review your message and typically reply within three business days.",
  };
  const d = CONTENT.contact[lang];

  const [state, setState] = useStateC({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: t.types[0],
    subject: "",
    message: "",
    agree: false,
  });
  const [sent, setSent] = useStateC(false);

  const set = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState((s) => ({ ...s, [k]: v }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Compose mailto fallback with form content.
    const subject = encodeURIComponent(
      `[${state.type}] ${state.subject || (lang === "jp" ? "お問い合わせ" : "Inquiry")}`
    );
    const bodyLines = lang === "jp" ? [
      `お名前: ${state.name}`,
      `会社名: ${state.company}`,
      `メール: ${state.email}`,
      `電話: ${state.phone}`,
      `種別: ${state.type}`,
      ``,
      `--- お問い合わせ内容 ---`,
      state.message,
    ] : [
      `Name: ${state.name}`,
      `Company: ${state.company}`,
      `Email: ${state.email}`,
      `Phone: ${state.phone}`,
      `Type: ${state.type}`,
      ``,
      `--- Message ---`,
      state.message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${d.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <section className="section contact-form-section">
        <div className="contact-form-wrap">
          <div className="contact-thanks" data-reveal>
            <div className="mono contact-form-eyebrow">{t.eyebrow}</div>
            <h2 className="contact-form-title serif">{t.thanksTitle}</h2>
            <p className="contact-form-lead">{t.thanksBody}</p>
            <div className="contact-thanks-mail mono">
              {t.mailFallback}{" "}
              <a href={`mailto:${d.email}`}>{d.email}</a>
            </div>
            <a className="contact-btn" href="index.html" style={{ marginTop: 24 }}>
              {lang === "jp" ? "トップに戻る →" : "Back to top →"}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section contact-form-section" id="form">
      <div className="contact-form-wrap">
        <div className="contact-form-head" data-reveal>
          <div className="mono contact-form-eyebrow">{t.eyebrow}</div>
          <h2 className="contact-form-title serif">{t.title}</h2>
          <p className="contact-form-lead">{t.lead}</p>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="form-row" data-reveal>
            <label className="form-label">
              <span className="form-label-text">{t.name}</span>
              <span className="form-badge is-req">{t.required}</span>
            </label>
            <input
              className="form-input"
              type="text"
              required
              value={state.name}
              onChange={set("name")}
              placeholder={lang === "jp" ? "山田 太郎" : "Jane Doe"}
            />
          </div>

          <div className="form-row" data-reveal>
            <label className="form-label">
              <span className="form-label-text">{t.company}</span>
              <span className="form-badge is-opt">{t.optional}</span>
            </label>
            <input
              className="form-input"
              type="text"
              value={state.company}
              onChange={set("company")}
              placeholder={lang === "jp" ? "株式会社〇〇" : "Your company"}
            />
          </div>

          <div className="form-row" data-reveal>
            <label className="form-label">
              <span className="form-label-text">{t.email}</span>
              <span className="form-badge is-req">{t.required}</span>
            </label>
            <input
              className="form-input"
              type="email"
              required
              value={state.email}
              onChange={set("email")}
              placeholder="name@example.com"
            />
          </div>

          <div className="form-row" data-reveal>
            <label className="form-label">
              <span className="form-label-text">{t.phone}</span>
              <span className="form-badge is-opt">{t.optional}</span>
            </label>
            <input
              className="form-input"
              type="tel"
              value={state.phone}
              onChange={set("phone")}
              placeholder="000-0000-0000"
            />
          </div>

          <div className="form-row" data-reveal>
            <label className="form-label">
              <span className="form-label-text">{t.type}</span>
              <span className="form-badge is-req">{t.required}</span>
            </label>
            <div className="form-select-wrap">
              <select
                className="form-input form-select"
                required
                value={state.type}
                onChange={set("type")}
              >
                {t.types.map((ty) => <option key={ty} value={ty}>{ty}</option>)}
              </select>
              <span className="form-select-arrow">▾</span>
            </div>
          </div>

          <div className="form-row" data-reveal>
            <label className="form-label">
              <span className="form-label-text">{t.subject}</span>
              <span className="form-badge is-opt">{t.optional}</span>
            </label>
            <input
              className="form-input"
              type="text"
              value={state.subject}
              onChange={set("subject")}
              placeholder={lang === "jp" ? "プロジェクトのご相談" : "Project inquiry"}
            />
          </div>

          <div className="form-row" data-reveal>
            <label className="form-label">
              <span className="form-label-text">{t.message}</span>
              <span className="form-badge is-req">{t.required}</span>
            </label>
            <textarea
              className="form-input form-textarea"
              required
              rows={8}
              value={state.message}
              onChange={set("message")}
              placeholder={lang === "jp" ? "ご相談内容、背景、ご希望のスケジュールなど" : "Context, scope, timeline…"}
            />
          </div>

          <div className="form-privacy" data-reveal>
            <label className="form-check">
              <input
                type="checkbox"
                required
                checked={state.agree}
                onChange={set("agree")}
              />
              <span>
                <a href="#" className="form-privacy-link">{t.privacyLink}</a>
                {lang === "jp" ? "に同意します。" : " — I agree."}
              </span>
            </label>
          </div>

          <div className="form-note mono" data-reveal>{t.note}</div>

          <div className="form-submit" data-reveal>
            <button
              className="contact-btn form-submit-btn"
              type="submit"
              disabled={!state.agree}
            >
              {t.submit}
            </button>
            <div className="form-mail-fallback mono">
              {t.mailFallback}{" "}
              <a href={`mailto:${d.email}`}>{d.email}</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function AppContact() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();
  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <ContactHeroLarge lang={lang} />
        <ContactInfo lang={lang} />
        <ContactForm lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppContact />);
