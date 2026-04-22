// NOTIC — bilingual copy + data
const CONTENT = {
  brand: "NOTIC",
  tagline: {
    jp: "気づき、つくる。",
    en: "Notice, and create.",
  },
  philosophy: {
    jp: "課題に気づき、\nつくることで解決する。",
    en: "Notice the problem.\nSolve it by making.",
  },

  nav: {
    jp: [
      { id: "about", label: "About", num: "01" },
      { id: "technology", label: "Technology", num: "02" },
      { id: "services", label: "Services", num: "03" },
      { id: "work", label: "Works", num: "04" },
      { id: "contact", label: "Contact", num: "05" },
    ],
    en: [
      { id: "about", label: "About", num: "01" },
      { id: "technology", label: "Technology", num: "02" },
      { id: "services", label: "Services", num: "03" },
      { id: "work", label: "Works", num: "04" },
      { id: "contact", label: "Contact", num: "05" },
    ],
  },

  ticker: {
    jp: [
      "NEWS — 2026.04 — Q-CUBE 新モデル発表",
      "EXHIBITION — 2026.03 — Art Panel 展示会",
      "PARTNERSHIP — 2026.02 — 新規クライアント2社導入",
      "RELEASE — 2026.01 — SDGs Products ラインナップ拡充",
    ],
    en: [
      "NEWS — 2026.04 — Q-CUBE new model announced",
      "EXHIBITION — 2026.03 — Art Panel showcase",
      "PARTNERSHIP — 2026.02 — Two new client engagements",
      "RELEASE — 2026.01 — SDGs Products lineup expanded",
    ],
  },

  about: {
    jp: {
      eyebrow: "N—01 / ABOUT",
      title: "つくることで、\n社会に気づきを。",
      body:
        "NOTICは、滋賀県に拠点を置くクリエイティブチームです。\nコンピューテーショナルデザインと3Dプリンティングを主軸に、\n顧客の課題解決から、チーム発信で新たな価値を探るプロジェクトまでを手掛けています。\n\n理念は「notice and create」\n— 社会や顧客の中にある小さな違和感に気づき、つくることでかたちにする。\n\n私たちは、手を動かすことで思考を進める組織です。",
    },
    en: {
      eyebrow: "N—01 / ABOUT",
      title: "Through making,\nawareness to society.",
      body:
        "NOTIC is a creative team based in Shiga, Japan.\nCentered on computational design and 3D printing,\nwe work on everything from solving client challenges to projects that explore new value of our own making.\n\nOur principle is \"notice and create\"\n— we sense the small frictions within society and our clients, and give them form by making.\n\nWe are a team that thinks by making.",
    },
  },

  services: {
    jp: {
      eyebrow: "N—02 / TECHNOLOGY",
      title: "わたしたちにできること",
      items: [
        {
          id: "3d-printing",
          num: "S—01", title: "3D Printing",
          body: "デザインから造形、生産まで、短期間での伴走が可能。\n素材・精度・用途に応じた最適なプロセスを設計します。",
          detail: {
            tagline: "デザインから生産まで、\nひとつのチームで。",
            lead: "アイデアの段階から造形、検証、量産まで、3Dプリンティングを軸に短いサイクルで伴走します。\n素材・精度・用途に応じてプロセスを組み立て、つくりながら最適解を見つけていきます。",
            sections: [
              { h: "対応領域", body: "・コンセプトモデル・プロトタイプ\n・最終製品としての小ロット量産\n・空間装飾・什器・ノベルティ\n・メーカーや設計事務所との共同開発" },
              { h: "扱う素材", body: "・PLA / PETG / TPU / ABS\n・再生樹脂（リサイクルPLA・PETG 等）\n・透明・光拡散素材\n・特殊素材は要件に応じて選定" },
              { h: "プロセス", body: "01 ヒアリング・要件整理\n02 設計・データ作成\n03 試作・素材検証\n04 本制作・仕上げ・納品" },
            ],
            specs: [
              { k: "造形方式", v: "FDM 中心 / 他方式は要相談" },
              { k: "造形サイズ", v: "最大 約 W400 × D400 × H500mm" },
              { k: "ロット", v: "1点〜小ロット量産" },
              { k: "納期", v: "ご相談より最短数日〜" },
            ],
          },
        },
        {
          id: "computational-design",
          num: "S—02", title: "Computational Design / Engineering",
          body: "パラメトリックデザインとエンジニアリングを組み合わせ、\n従来設計では得られない形状と機能を実現します。",
          detail: {
            tagline: "計算でかたちを\n引き出す。",
            lead: "パラメトリックデザインとエンジニアリング思考を組み合わせ、要件と制約から最適な形状・構造を導き出します。\n意匠と機能の両立、数量バリエーションへの対応、再現性のある設計プロセスをご提供します。",
            sections: [
              { h: "対応領域", body: "・パラメトリックモデリング（Grasshopper 等）\n・構造・流体・熱の検証を踏まえた形状設計\n・大量バリエーションのジェネレーティブ生成\n・3Dプリント前提の設計最適化" },
              { h: "活用例", body: "・建築ファサード・インテリアパネルの意匠設計\n・プロダクト形状の最適化（軽量化・剛性確保）\n・1点ずつ異なるカスタムノベルティの自動生成" },
              { h: "プロセス", body: "01 要件・制約のヒアリング\n02 アルゴリズム設計\n03 検証・パラメータチューニング\n04 出力データ納品 or 製造まで一貫対応" },
            ],
            specs: [
              { k: "ツール", v: "Rhino / Grasshopper / Blender 他" },
              { k: "成果物", v: "3Dデータ / 図面 / 製造データ" },
              { k: "対応", v: "設計のみ〜製造まで一貫対応" },
              { k: "納期", v: "ご相談より約2〜6週間" },
            ],
          },
        },
        {
          id: "visualization",
          num: "S—03", title: "Visualization",
          body: "内観・外観パースをはじめとしたデザインのビジュアライズ、\nAIを活用した新しい表現手法の提案・導入まで。",
          detail: {
            tagline: "「まだ無いもの」を、\n見えるかたちに。",
            lead: "建築・空間・プロダクトの設計データから、伝わるビジュアルを制作します。\n従来のレンダリング表現に加え、AIを活用した新しい表現手法の提案・導入も行います。",
            sections: [
              { h: "対応領域", body: "・内観・外観パース（建築・店舗・住宅）\n・プロダクトCG・ライフスタイルカット\n・アニメーション・ウォークスルー\n・AI画像生成を活用した表現開発" },
              { h: "活用シーン", body: "・コンペ・プレゼンテーション資料\n・販促・SNS・Web向けビジュアル\n・施主・クライアント向け合意形成資料\n・新規事業・コンセプト検討フェーズの可視化" },
              { h: "プロセス", body: "01 ヒアリング・参考イメージ共有\n02 構図・ライティング案の提示\n03 ドラフト → フィードバック → 仕上げ\n04 納品（静止画・動画・各種解像度）" },
            ],
            specs: [
              { k: "ツール", v: "Blender / V-Ray / Twinmotion / 各種AIツール" },
              { k: "成果物", v: "静止画 / 動画 / 360°ビュー" },
              { k: "対応", v: "1カット〜シリーズ制作" },
              { k: "納期", v: "ご相談より約1〜4週間" },
            ],
          },
        },
      ],
    },
    en: {
      eyebrow: "N—02 / TECHNOLOGY",
      title: "What we do",
      items: [
        {
          id: "3d-printing",
          num: "S—01", title: "3D Printing",
          body: "End-to-end support from design to fabrication and production, on tight timelines.\nWe tailor the process to material, precision, and intended use.",
          detail: {
            tagline: "From design to delivery,\none team.",
            lead: "We move with you from idea to fabrication, validation, and small-batch production — built around 3D printing. We tune the process to material, precision, and intended use, and find the right answer by making.",
            sections: [
              { h: "What we cover", body: "- Concept models and prototypes\n- Small-batch production as final product\n- Spatial decor, fixtures, and novelties\n- Co-development with manufacturers and design firms" },
              { h: "Materials", body: "- PLA / PETG / TPU / ABS\n- Recycled polymers (rPLA, rPETG, etc.)\n- Transparent and light-diffusing materials\n- Specialty materials selected per project" },
              { h: "Process", body: "01 Briefing and scoping\n02 Design and data preparation\n03 Prototyping and material checks\n04 Final fabrication, finishing, and delivery" },
            ],
            specs: [
              { k: "Method", v: "FDM primarily; others on request" },
              { k: "Build size", v: "Up to ~W400 × D400 × H500mm" },
              { k: "Scale", v: "One-off to small-batch" },
              { k: "Lead time", v: "From a few days" },
            ],
          },
        },
        {
          id: "computational-design",
          num: "S—02", title: "Computational Design / Engineering",
          body: "Combining parametric design with engineering,\nwe realize forms and functions beyond conventional design.",
          detail: {
            tagline: "Letting computation\ndraw out the form.",
            lead: "We combine parametric design with engineering thinking to derive optimal forms and structures from requirements and constraints — balancing aesthetics and function, supporting variation at scale, and giving you a reproducible design process.",
            sections: [
              { h: "What we cover", body: "- Parametric modeling (Grasshopper, etc.)\n- Form-finding informed by structural, fluid, and thermal checks\n- Generative variation at scale\n- Design optimization assuming 3D-printed output" },
              { h: "Applications", body: "- Facades and interior panels for architecture\n- Product form optimization (weight, stiffness)\n- Custom novelties where every piece is different" },
              { h: "Process", body: "01 Requirements and constraints\n02 Algorithm design\n03 Validation and parameter tuning\n04 Data delivery, or end-to-end through manufacturing" },
            ],
            specs: [
              { k: "Tools", v: "Rhino / Grasshopper / Blender, etc." },
              { k: "Deliverables", v: "3D data / drawings / production data" },
              { k: "Scope", v: "Design only, or end-to-end" },
              { k: "Lead time", v: "2–6 weeks" },
            ],
          },
        },
        {
          id: "visualization",
          num: "S—03", title: "Visualization",
          body: "From interior and exterior renderings that bring designs to life,\nto the proposal and integration of AI-driven visualization methods.",
          detail: {
            tagline: "Make the unbuilt\nvisible.",
            lead: "We turn design data for architecture, spaces, and products into visuals that communicate. Alongside traditional rendering, we propose and integrate new AI-driven visualization methods.",
            sections: [
              { h: "What we cover", body: "- Interior and exterior renderings (architecture, retail, residential)\n- Product CG and lifestyle imagery\n- Animation and walkthroughs\n- Visual development with AI image generation" },
              { h: "Where it fits", body: "- Competitions and presentations\n- Sales, social, and web visuals\n- Alignment material for clients and stakeholders\n- Visualization for early-stage business and concept work" },
              { h: "Process", body: "01 Briefing and reference sharing\n02 Composition and lighting proposals\n03 Draft → feedback → final\n04 Delivery (stills, video, multiple resolutions)" },
            ],
            specs: [
              { k: "Tools", v: "Blender / V-Ray / Twinmotion / various AI tools" },
              { k: "Deliverables", v: "Stills / video / 360° views" },
              { k: "Scope", v: "Single shot to a full series" },
              { k: "Lead time", v: "1–4 weeks" },
            ],
          },
        },
      ],
    },
  },

  products: {
    jp: {
      eyebrow: "N—03 / SERVICES",
      title: "わたしたちがつくっているもの",
      items: [
        {
          id: "q-cube",
          num: "P—01", name: "Q-CUBE", type: "サービス", year: "2026–",
          body: "空間に調和するQRオブジェ。\n自発的な読み取りを促し、\n口コミ獲得・HP閲覧・SNSフォロワー獲得に貢献する。",
          color: "accent", image: "assets/q-cube.jpg",
          detail: {
            tagline: "空間に溶け込む、\n自発的に読み取られるQR。",
            lead: "Q-CUBEは、インテリアとして空間に馴染むQRオブジェです。\n店舗・ホテル・イベント会場などの空間に自然に置かれ、訪れた人の興味を引き、自発的なQR読み取りへと導きます。",
            sections: [
              { h: "特徴", body: "・空間に調和する立体造形\n・自発的な読み取りを促す存在感\n・素材・カラー・ロゴはフルカスタム可能" },
              { h: "期待できる効果", body: "・店舗・施設での口コミ獲得\n・公式サイト・SNSフォロワー数の向上\n・オフライン→オンラインへの自然な導線設計" },
              { h: "導入プロセス", body: "01 ヒアリング（設置場所・目的・遷移先URL）\n02 デザイン提案（造形・カラー・サイズ）\n03 造形・検証・納品" },
            ],
            specs: [
              { k: "素材", v: "PLA / PETG / 再生樹脂（選択可）" },
              { k: "サイズ", v: "W80〜W300mm(カスタム対応)" },
              { k: "納期", v: "ご相談より最短2週間" },
              { k: "対応", v: "小ロット〜量産" },
            ],
          },
        },
        {
          id: "art-panel",
          num: "P—02", name: "Art Panel", type: "空間装飾", year: "2026–",
          body: "見る方向によって光の輪がうつろうインテリアウィール。\n空間に彩を添える手助けを、完全オーダーメイドで対応。",
          color: "ink", image: "assets/art-panel.jpg",
          detail: {
            tagline: "光のうつろいが、\n空間に物語をつくる。",
            lead: "Art Panelは、見る角度や光の当たり方で表情が変わる3Dプリント製のインテリアパネルです。\nホテル・店舗・ブライダル会場など、空間に「特別感」を添える完全オーダーメイドの装飾として制作します。",
            sections: [
              { h: "特徴", body: "・コンピュテーショナルデザインによる緻密なパターン\n・光と影でうつろう視覚体験\n・完全オーダーメイド（サイズ・パターン・色）" },
              { h: "活用シーン", body: "・ホテル・旅館のロビー、客室\n・レストラン・カフェ・ブライダル会場\n・ショップのファサード、ディスプレイ" },
              { h: "制作プロセス", body: "01 空間ヒアリング・コンセプト設計\n02 パラメトリックデザインによる造形検討\n03 試作・レビュー\n04 本制作・設置" },
            ],
            specs: [
              { k: "素材", v: "PLA / PETG / アクリル複合" },
              { k: "サイズ", v: "最大 W1200 × H1200mm / 連結可" },
              { k: "納期", v: "ご相談より約4〜8週間" },
              { k: "対応", v: "完全オーダーメイド" },
            ],
          },
        },
        {
          id: "sdgs",
          num: "P—03", name: "SDGs Products", type: "プロダクト", year: "2026–",
          body: "再生素材を用いた製品ライン。\n環境負荷と表現力の両立を探る。",
          color: "bg2", image: "assets/sdgs.jpg",
          detail: {
            tagline: "つくることが、\n環境への気づきになる。",
            lead: "SDGs Productsは、再生素材を主体にした3Dプリントプロダクトのラインです。\n環境負荷を抑えつつ、意匠性・機能性を両立させるための素材・形状・プロセスを継続的に研究しています。",
            sections: [
              { h: "取り組み", body: "・リサイクルPLA・再生PETGなどの再生素材活用\n・造形廃材の再利用プロセス\n・形状最適化による材料使用量の削減" },
              { h: "対応領域", body: "・企業ノベルティ・ブランドプロダクト\n・ホテル・店舗のアメニティ、什器\n・教育・啓発イベント用のプロトタイプ" },
              { h: "進め方", body: "01 課題・想いのヒアリング\n02 素材・構造・意匠の提案\n03 試作・改良\n04 小ロット量産・納品" },
            ],
            specs: [
              { k: "素材", v: "再生PLA / 再生PETG / 他素材検証中" },
              { k: "ロット", v: "1点〜小ロット量産" },
              { k: "納期", v: "ご相談より約3〜6週間" },
              { k: "対応", v: "OEM / 共同開発も可" },
            ],
          },
        },
      ],
    },
    en: {
      eyebrow: "N—03 / SERVICES",
      title: "What we make",
      items: [
        {
          id: "q-cube",
          num: "P—01", name: "Q-CUBE", type: "Service", year: "2026–",
          body: "A QR object that lives in the space.\nInvites a spontaneous scan,\nturning attention into reviews, visits, and followers.",
          color: "accent", image: "assets/q-cube.jpg",
          detail: {
            tagline: "A QR object that belongs\nin the room.",
            lead: "Q-CUBE is a sculptural QR object that sits naturally inside a space — shops, hotels, venues, events — and invites visitors to scan of their own accord.",
            sections: [
              { h: "Highlights", body: "- Sculptural form that fits the interior\n- Presence that invites spontaneous scans\n- Fully customizable material, color, and logo" },
              { h: "What it enables", body: "- Word-of-mouth for stores and venues\n- Traffic to your website and social accounts\n- A calm bridge from the physical space into your digital world" },
              { h: "Process", body: "01 Briefing — location, purpose, target URL\n02 Proposal — form, color, size\n03 Fabrication, review, delivery" },
            ],
            specs: [
              { k: "Material", v: "PLA / PETG / recycled polymers" },
              { k: "Size", v: "W80–W300mm (custom available)" },
              { k: "Lead time", v: "From 2 weeks" },
              { k: "Scale", v: "Small batch to production" },
            ],
          },
        },
        {
          id: "art-panel",
          num: "P—02", name: "Art Panel", type: "Spatial", year: "2026–",
          body: "An interior panel where rings of light shift as you move.\nFully bespoke to the space.",
          color: "ink", image: "assets/art-panel.jpg",
          detail: {
            tagline: "Light that moves\nthrough the room.",
            lead: "Art Panel is a 3D-printed interior panel whose surface shifts with viewing angle and light. We build each one bespoke for hotels, restaurants, shops, and wedding venues that want to carry a distinct atmosphere.",
            sections: [
              { h: "Highlights", body: "- Precise patterns through computational design\n- Visuals that move with light and shadow\n- Fully bespoke size, pattern, and color" },
              { h: "Where it fits", body: "- Hotel and ryokan lobbies and rooms\n- Restaurants, cafes, and wedding venues\n- Shop facades and display fixtures" },
              { h: "Process", body: "01 Briefing and concept\n02 Parametric design exploration\n03 Prototyping and review\n04 Fabrication and installation" },
            ],
            specs: [
              { k: "Material", v: "PLA / PETG / acrylic composite" },
              { k: "Size", v: "Up to W1200 × H1200mm, modular" },
              { k: "Lead time", v: "4–8 weeks" },
              { k: "Scope", v: "Fully bespoke" },
            ],
          },
        },
        {
          id: "sdgs",
          num: "P—03", name: "SDGs Products", type: "Product", year: "2026–",
          body: "A product line built around recycled materials —\nbalancing footprint and expression.",
          color: "bg2", image: "assets/sdgs.jpg",
          detail: {
            tagline: "Making itself becomes\nan act of awareness.",
            lead: "SDGs Products is a 3D-printed product line grounded in recycled materials. We keep exploring materials, forms, and processes that lower impact while keeping design and function sharp.",
            sections: [
              { h: "What we work on", body: "- Recycled PLA and PETG, among others\n- Re-use of print waste\n- Form optimization to reduce material use" },
              { h: "Where it fits", body: "- Corporate novelties and branded goods\n- Hotel and store amenities and fixtures\n- Prototypes for educational and awareness events" },
              { h: "Process", body: "01 Briefing — the problem and the intent\n02 Proposal — material, structure, and look\n03 Prototyping and refinement\n04 Small-batch production and delivery" },
            ],
            specs: [
              { k: "Material", v: "Recycled PLA / PETG / others in testing" },
              { k: "Scale", v: "One-off to small-batch" },
              { k: "Lead time", v: "3–6 weeks" },
              { k: "Scope", v: "OEM and co-development available" },
            ],
          },
        },
      ],
    },
  },

  work: {
    jp: {
      eyebrow: "N—04 / WORKS",
      title: "わたしたちが手がけたもの",
      items: [
        {
          id: "hospitality-k",
          num: "01", client: "宿泊 K社", sector: "Hospitality", year: "2025", tag: "Art Panel",
          desc: "ドラゴンクエストコンセプトハウスの幻想アートパネル。",
          detail: {
            overview: "宿泊施設K社が企画するドラゴンクエスト・コンセプトハウスに、\n世界観を象徴する幻想的なアートパネルを制作・設置しました。",
            role: "コンセプト設計 / パターンデザイン / 3Dプリント制作 / 設置",
            body: "世界観を象徴する光と陰影の表現を、\nコンピュテーショナルデザインで起こし、3Dプリントで造形。\n空間に入った瞬間に物語が立ち上がる、\nインテリア一体型のアートパネルとして仕上げました。",
          },
        },
        {
          id: "institution-r",
          num: "02", client: "教育機関 R", sector: "Education", year: "2025", tag: "Installation",
          desc: "学園祭の周年インスタレーションの制作。",
          detail: {
            overview: "教育機関Rの周年学園祭における、\nシンボリックなインスタレーションの企画・制作を担当しました。",
            role: "コンセプト開発 / 造形設計 / 3Dプリント / 設営",
            body: "来場者の記憶に残る「体験の中心」を置くことを目的に、\n大型の造形物を3Dプリントで制作。\n短期間・設置可能な分割構造で、\n現場での組み立てまで一貫して担当しました。",
          },
        },
        {
          id: "sports-f",
          num: "03", client: "スポーツ F様", sector: "Product", year: "2026", tag: "Order Made",
          desc: "サッカーのオリジナル作戦版の駒のオーダーメイド。",
          detail: {
            overview: "サッカー指導者F様のオリジナル作戦ボード用に、\nチームを表現する駒をオーダーメイドで制作しました。",
            role: "ヒアリング / 形状設計 / 3Dプリント制作",
            body: "チームカラー・役割ごとに識別しやすく、\n手に馴染むサイズ感と視認性を両立。\n小ロット・複数バリエーションに柔軟に対応し、\n現場でそのまま使える仕上げで納品しました。",
          },
        },
        {
          id: "creator-y",
          num: "04", client: "クリエイター Y様", sector: "Creator", year: "2026", tag: "Product",
          desc: "展示会出展におけるノベルティ制作。",
          detail: {
            overview: "クリエイターY様の展示会出展に合わせたノベルティを、\n少量多品種で制作しました。",
            role: "形状提案 / 素材選定 / 3Dプリント制作 / 仕上げ",
            body: "作家性を損なわず、量産感を避けるため、\n1点ごとに微差のある形状をジェネレーティブに設計。\n会場で手に取ってもらえるサイズと質感に調整し、\n配布・販売どちらにも対応できるかたちで仕上げました。",
          },
        },
        {
          id: "interior-o",
          num: "05", client: "インテリア・雑貨 O社", sector: "Interior", year: "2026", tag: "Q-CUBE",
          desc: "Q-CUBEのギフト向け店頭販売。",
          detail: {
            overview: "インテリア・雑貨を取り扱うO社にて、\n当社プロダクト「Q-CUBE」のギフト向け店頭販売を開始しました。",
            role: "商品企画調整 / パッケージ設計 / 小ロット生産",
            body: "ギフト用途に合わせて配色・サイズ・パッケージを再設計。\nQR先の体験までを商品価値に含める設計で、\n贈る側・受け取る側、双方にとって意味のあるプロダクトに仕上げました。",
          },
        },
        {
          id: "cafe-i",
          num: "06", client: "珈琲焙煎所 I社", sector: "Cafe", year: "2025", tag: "Prototyping",
          desc: "オリジナルコーヒードリッパー企画におけるプロトタイピング。",
          detail: {
            overview: "珈琲焙煎所I社のオリジナルコーヒードリッパー開発に、\nプロトタイピングパートナーとして参画しました。",
            role: "形状検討 / 試作品制作 / 抽出検証サポート",
            body: "リブ形状・注ぎ口・全体バランスなどを、\n短いサイクルで何度も3Dプリントして検証。\nつくる → 淹れる → 調整する、を高速で回すことで、\n商品化に向けた確度を段階的に高めていきました。",
          },
        },
      ],
    },
    en: {
      eyebrow: "N—04 / WORKS",
      title: "What we have made",
      items: [
        {
          id: "hospitality-k",
          num: "01", client: "Hospitality K", sector: "Hospitality", year: "2025", tag: "Art Panel",
          desc: "Fantasy art panels for a Dragon Quest concept house.",
          detail: {
            overview: "For K's Dragon Quest concept house, we designed and installed fantasy art panels that carry the world of the IP into the physical space.",
            role: "Concept / pattern design / 3D-printed fabrication / installation",
            body: "The visual language of light and shadow was developed through computational design and realized in 3D print. The result is an interior-integrated art panel where the story rises up the moment guests step in.",
          },
        },
        {
          id: "institution-r",
          num: "02", client: "Institution R", sector: "Education", year: "2025", tag: "Installation",
          desc: "Anniversary installation for a university festival.",
          detail: {
            overview: "A symbolic installation for Institution R's anniversary festival, scoped and produced end-to-end.",
            role: "Concept development / form design / 3D printing / on-site setup",
            body: "The goal was to give guests a clear experiential center. We produced a large-scale 3D-printed piece built from sections so it could be transported quickly and assembled on site — and handled the setup ourselves.",
          },
        },
        {
          id: "sports-f",
          num: "03", client: "Sports F", sector: "Product", year: "2026", tag: "Order Made",
          desc: "Custom-made pieces for an original soccer tactics board.",
          detail: {
            overview: "Bespoke pieces for F's original soccer tactics board, designed to represent their team.",
            role: "Briefing / form design / 3D-printed fabrication",
            body: "Pieces were easy to identify by color and role, sized to feel comfortable in the hand, and finished to a level where the coach could use them straight out of the box. Small-batch variation was handled flexibly.",
          },
        },
        {
          id: "creator-y",
          num: "04", client: "Creator Y", sector: "Creator", year: "2026", tag: "Product",
          desc: "Novelty production for an exhibition.",
          detail: {
            overview: "Novelties for Creator Y's exhibition, produced in a small-batch but varied run.",
            role: "Form proposal / material selection / 3D-printed fabrication / finishing",
            body: "To preserve the artist's signature while avoiding a mass-produced feel, each piece was generated with subtle variation. Size and finish were tuned for the venue, and the run worked both as give-aways and for sale.",
          },
        },
        {
          id: "interior-o",
          num: "05", client: "Interior & Lifestyle O", sector: "Interior", year: "2026", tag: "Q-CUBE",
          desc: "In-store retail of Q-CUBE as gift items.",
          detail: {
            overview: "Q-CUBE began retail at Interior & Lifestyle store O, repositioned as a gift item.",
            role: "Product adaptation / packaging / small-batch production",
            body: "Colors, sizes, and packaging were redesigned for gifting. The scan destination is part of the gift — the product carries meaning for both the giver and the recipient.",
          },
        },
        {
          id: "cafe-i",
          num: "06", client: "Coffee roaster I", sector: "Cafe", year: "2025", tag: "Prototyping",
          desc: "Prototyping for an original coffee dripper project.",
          detail: {
            overview: "Prototyping partner for roaster I's original coffee dripper.",
            role: "Form exploration / prototype fabrication / brewing validation support",
            body: "Rib geometry, spout shape, and overall balance were iterated in short cycles through 3D printing. Make → brew → adjust — keeping the loop tight let us steadily close in on a shape ready for product.",
          },
        },
      ],
    },
  },

  contact: {
    jp: {
      eyebrow: "N—05 / CONTACT",
      title: "お気づきのことを、\n聞かせてください。",
      body: "課題・構想・雑談、いずれも歓迎します。",
      email: "contact.notic2026@gmail.com",
      cta: "お問い合わせ →",
    },
    en: {
      eyebrow: "N—05 / CONTACT",
      title: "Tell us what\nyou've noticed.",
      body: "Briefs, ideas, or a quick conversation — all welcome.",
      email: "contact.notic2026@gmail.com",
      cta: "Get in touch →",
    },
  },

  footer: {
    jp: {
      copy: "© 2026 NOTIC",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/notice_and_create?igsh=MWV4ajhseGxmejdscg%3D%3D&utm_source=qr" },
        { label: "X (Twitter)", href: "#" },
        { label: "Behance", href: "#" },
      ],
    },
    en: {
      copy: "© 2026 NOTIC",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/notice_and_create?igsh=MWV4ajhseGxmejdscg%3D%3D&utm_source=qr" },
        { label: "X (Twitter)", href: "#" },
        { label: "Behance", href: "#" },
      ],
    },
  },
};

window.CONTENT = CONTENT;
