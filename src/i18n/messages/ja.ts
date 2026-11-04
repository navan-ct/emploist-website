// The website's words in Japanese, translated from en.ts (the source), with
// the same shape. See en.ts for how functions, HTML strings, and lists work.
// Terms follow the Emploist app's Japanese translation.
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("ja");

const ja: Messages = {
  site: {
    title: "Emploist：AI評価と採用ページを備えた採用管理システム",
    description: (p) =>
      `自社の採用ページで求人を公開し、応募を集め、AIが求人内容に照らしてすべての応募者を評価する採用管理システム（ATS）。チーム全員で月額${f.usd(p.priceUsd)}、${p.trialDays}日間の無料トライアル付きです。`,
    imageAlt: "Emploist：最適な応募者を、真っ先に確認",
    skipToContent: "本文へスキップ",
    home: "Emploistのホーム",
    blogFeedTitle: "Emploistブログ",
    blogFeedDescription: "Emploistチームによるガイドとお知らせです。",
    monthlyOffer: (p) =>
      `${p.trialDays}日間の無料トライアルの後は、チーム全員で月額${f.usd(p.priceUsd)}です。`,
    yearlyOffer: (p) =>
      `${p.trialDays}日間の無料トライアルの後は、チーム全員で年額${f.usd(p.yearlyPriceUsd)}です。`,
  },

  nav: {
    main: "メイン",
    features: "機能",
    careersPage: "採用ページ",
    aiAssistants: "AIアシスタント",
    pricing: "料金",
    faq: "よくある質問",
    blog: "ブログ",
    signIn: "ログイン",
    startFreeTrial: "無料トライアル",
    menu: "メニュー",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "言語",
  },

  footer: {
    tagline:
      "採用ページとAI評価を備えた採用管理システムです。雑務に追われず、よい採用をしたいチームのためにつくりました。",
    product: "製品",
    resources: "リソース",
    account: "アカウント",
    legal: "法的情報",
    rssFeed: "RSSフィード",
    support: "サポート",
    terms: "利用規約",
    privacy: "プライバシーポリシー",
    copyright: (year) => `© ${year} Emploist. All rights reserved.`,
    questions: "お問い合わせ：",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "無料トライアルを開始",
  },

  hero: {
    eyebrow: "AIで応募者を評価する採用管理",
    title: "最適な応募者を、真っ先に。",
    lead: "Emploistなら、採用ページ、シンプルな選考フロー、そして求人内容に照らしてすべての応募を評価するAIがそろいます。チームは応募の仕分けにかける時間を減らし、自社に合う人と向き合う時間を増やせます。",
    seeHowItWorks: "使い方を見る",
    note: (p) =>
      `${p.trialDays}日間は無料、その後は月額${f.usd(p.priceUsd)}です。ユーザー単位の料金はかかりません。`,
    screenshotAlt:
      "EmploistのSenior Product Designerの求人の応募一覧。マッチ度の高い順に91%、88%、86%…と並び、各応募者の名前、メールアドレス、コメント数が表示されています。",
  },

  howItWorks: {
    eyebrow: "使い方",
    title: "求人の公開から採用まで、これひとつで。",
    steps: [
      {
        title: "求人を公開",
        text: "職務内容を書き、回答してほしい質問を選んで、採用ページに公開します。",
      },
      {
        title: "求職者が応募",
        text: "求職者は採用ページで求人を見つけ、数分で応募できます。アカウントは不要です。",
      },
      {
        title: "AIがすべての応募を評価",
        text: "応募ごとに求人とのマッチ度が付き、チームの誰が見てもわかる内訳も表示されます。",
      },
      {
        title: "選考を進める",
        text: "応募者を確認してコメントし、選考ステップを進めます。ステップごとにメールが送信されます。",
      },
    ],
  },

  ranking: {
    eyebrow: "AI評価",
    title: "理由までわかるマッチ度。",
    lead: "応募は届いた時点で、求人に照らして評価されます。正体のわからない数字ではなく、その職務で大切なポイントごとに、各応募者がどれだけ合っているかがわかります。",
    points: [
      {
        title: "明確な内訳。",
        text: "スキル、経験、レベルの適合度、資格をそれぞれ評価するので、応募者のどこが際立っているのかを正確に把握できます。",
      },
      {
        title: "履歴書だけではありません。",
        text: "応募フォームの質問への回答も、評価の材料になります。",
      },
      {
        title: "公平で一貫した評価。",
        text: "同じ求人の応募者は全員、同じ基準で同じように評価されます。",
      },
      {
        title: "決めるのはあなたです。",
        text: "マッチ度は確認作業の手がかりであって、その代わりではありません。求人を更新したときは、応募者を再評価することもできます。",
      },
    ],
    screenshotAlt:
      "Emploistで表示した、ある応募者のマッチ度91%の内訳。スキル（93）、経験（88）、レベルの適合度（95）、資格（85）の各項目に短い説明が付いています。",
    caption: (p) =>
      `応募を1件評価するごとに、AIクレジットを1つ使用します。プランには毎月${f.number(p.credits)}クレジットが含まれます。`,
  },

  careersPage: {
    eyebrow: "採用ページ",
    title: "初日から使える採用ページ。",
    lead: "どの会社にも、ロゴとカラーを反映した、表示が速く洗練された採用ページが用意されます。新しい求人は公開した瞬間に掲載され、応募はその求人のインボックスに直接届きます。",
    screenshotAlt:
      "Northwind Labsの採用ページ。会社のロゴ入りのヘッダー、短い紹介文、部署ごとにまとめられた募集中の求人と、部署・勤務地のフィルターが表示されています。",
    mobileScreenshotAlt:
      "スマートフォンで表示した求人ページ。Berlin勤務、ハイブリッド・フルタイムのSenior Product Designerの求人で、「Apply for this job」ボタンと職務内容が表示されています。",
    facts: [
      {
        title: "専用URLも、独自ドメインも",
        text: "まずはyourcompany.emploist.comで公開し、その後careers.yourcompany.comのような独自ドメインを接続できます。",
      },
      {
        title: "見やすい求人一覧",
        text: "募集中の求人は部署ごとにまとめられ、求職者は部署や勤務地で絞り込めます。",
      },
      {
        title: "どの画面でも高速",
        text: "スマートフォンからワイドモニターまで、どの画面でもすばやく表示され、きれいに見えます。",
      },
      {
        title: "応募は数分で完了",
        text: "アカウントもパスワードも不要です。求職者はフォームに入力し、履歴書を添付するだけで応募できます。",
      },
      {
        title: "AIの利用を明示",
        text: "AIが応募の確認を支援している場合は、そのことを採用ページで求職者に伝えます。",
      },
      {
        title: "スパム対策",
        text: "組み込みの対策機能がスパムをインボックスに入れないため、実際の応募者だけを確認できます。",
      },
    ],
  },

  designInCode: {
    eyebrow: "コードでデザイン",
    title: "自社サイトとまったく同じ見た目に。",
    lead: "デフォルトのデザインは、ロゴとカラーを設定するだけで見栄えよく仕上がります。さらにこだわりたいときは、採用サイトのすべてのページを、HTML、CSS、Liquidテンプレートで自由に変更できます。",
    points: [
      "Emploist上で直接編集でき、デスクトップとスマートフォンのサイズでライブプレビューを確認できます。",
      "または、コードをダウンロードして、お使いのエディターやAIアシスタントで変更し、コマンド1つでパソコン上でプレビューすることもできます。",
      "ミスは保存前に検出されるため、求職者には常に正しく動作するページが表示されます。",
    ],
    screenshotAlt:
      "Emploistの採用ページのコードエディター。左側にシンタックスハイライト付きのレイアウトテンプレート、右側に採用ページのライブプレビューが表示されています。",
  },

  formsAndTeam: {
    label: "応募フォームとチームでの連携",
    forms: {
      eyebrow: "応募フォーム",
      title: "職種ごとに、聞くべきことを。",
      text: "短文回答、長文回答、はい／いいえ、単一選択・複数選択、プルダウン、均等目盛、チェックボックスを使って求人ごとにフォームを作成し、ドラッグして好きな順番に並べられます。",
      screenshotAlt:
        "Emploistの応募フォーム。氏名、メールアドレス、履歴書に続いて、電話番号、ポートフォリオのリンク、経験年数を尋ねる単一選択の質問、使用ツールを尋ねる複数選択の質問が並んでいます。",
    },
    team: {
      eyebrow: "チームでの連携",
      title: "チームで決める。",
      text: "どの応募にもコメントでき、@メンションでチームメンバーに意見を求められます。チーム全員を追加料金なしで招待できます。",
      screenshotAlt:
        "3人のチームメンバーが応募に付けたコメントと、チームメンバーの一覧から選んだPriya Shahをメンションしている新しいコメント。",
    },
  },

  stagesAndEmails: {
    eyebrow: "選考ステップとメール",
    title: "応募者への連絡を、自動で。",
    lead: "求人ごとに独自の選考ステップを設定できます。応募者を次のステップに移動すると、そのステップのメールが自動で送信されます。一度書くだけで、一人ひとりに合わせた内容で届きます。",
    points: [
      "用意された選考ステップから始めて、職種に合わせて名前の変更や並べ替え、独自のステップの追加ができます。",
      "各選考ステップには、すぐに使えるメールが用意されています。ファーストネームや職種名などの情報で内容をパーソナライズし、ライブプレビューで確認できます。",
      "誤って移動してしまっても、元に戻せばメールは送信されません。",
      "メールは会社のレイアウトとロゴで送信され、返信は指定したアドレスに届きます。",
    ],
    editorScreenshotAlt:
      "Emploistの「Interviewing」選考ステップのメール。件名と本文に、応募者のファーストネーム、職種名、会社名の変数が使われています。",
    previewScreenshotAlt:
      "Samという応募者が受け取る、完成したメール。上部にNorthwind Labs、Senior Product Designerの面接への個別の案内、募集中の求人へのリンクが表示されています。",
  },

  aiAssistants: {
    eyebrow: "AIアシスタント",
    title: "AIアシスタントから採用を管理。",
    lead: "Claude、ChatGPTなど、MCPに対応したアシスタントを接続すれば、話しかけるだけで求人や応募者を操作できます。",
    points: [
      {
        title: "応募者について質問。",
        text: "求人に最もマッチする応募者を探したり、新着の応募を確認したり、回答をすばやく要約したりできます。",
      },
      {
        title: "そのまま作業を実行。",
        text: "求人の作成と公開、選考ステップ間での応募者の移動、コメントの投稿を、チャットから直接行えます。",
      },
      {
        title: "主導権はあなたに。",
        text: "アシスタントには、あなたと同じ権限だけを与えて接続します。接続はいつでも解除でき、解除するとすぐに停止します。",
      },
    ],
    worksWith: "対応アシスタント",
    otherClients: "その他のMCPクライアント",
    chat: {
      label: "Emploistに接続したAIアシスタントとのチャットの例",
      assistant: "あなたのAIアシスタント",
      /** After "Emploist", hidden on phones: "Emploist connected". */
      connected: "接続済み",
      /** Read out before a tool's name: "Used Emploist list_applications". */
      used: "使用：",
      question: "Senior Product Designerの求人で、最もマッチしている応募者は誰ですか？",
      answerIntro: "インボックスでマッチ度が高い上位3名はこちらです。",
      /** A match on the list, e.g. "91% match"; the word is hidden on phones. */
      match: (percent) => ({ value: f.percent(percent), label: "マッチ" }),
      answerOutro: "Diegoはレベルの適合度とスキルで上回っています。誰かを次の選考ステップに進めますか？",
      request: "Diegoを「Phone screen」に移動してください。",
      done: "完了しました。Diegoは「Phone screen」に移動し、このステップのメールは2分後に送信されます。気が変わった場合は、それまでに元に戻せます。",
      placeholder: "求人や応募者について質問してください",
    },
    caption: "各メンバーが、自分のアシスタントを数ステップで接続できます。",
  },

  details: {
    eyebrow: "ほかにも",
    title: "採用をもっとスムーズにする、細かな工夫。",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "いつでもエクスポート",
        text: "求人の応募をスプレッドシートとしてダウンロードでき、すべての履歴書も同じZIPファイルにまとめられます。",
      },
      {
        title: "履歴書をその場で表示",
        text: "PDFやWordの履歴書は、Emploist内で応募の横に表示されます。ダウンロードは不要です。",
      },
      {
        title: "求人数は無制限",
        text: "必要なだけ求人を掲載でき、検索とフィルターでどの求人もすぐに見つかります。",
      },
      {
        title: "求人を複製",
        text: "似た職種を採用するときは、求人の詳細、フォーム、選考ステップ、メールをワンクリックでコピーできます。",
      },
      {
        title: "パスワード不要",
        text: "Google、Microsoft、またはメールに届くワンタイムコードでログインできます。",
      },
      {
        title: "デフォルトで非公開",
        text: "履歴書は非公開で保存され、開けるのはチームのメンバーだけです。",
      },
      {
        title: "必要な通知だけ",
        text: "誰かにメンションされたときや、コメントした応募に返信があったときに通知が届きます。",
      },
      {
        title: "ライト／ダークモード",
        text: "Emploistはシステムのテーマに合わせて表示されます。好きなテーマを選ぶこともできます。",
      },
    ],
  },

  pricing: {
    eyebrow: "料金",
    title: "すべて込みの、ひとつのプラン。",
    lead: "機能ごとのプラン分けも、ユーザー単位の料金もありません。月払いでも年払いでも料金はひとつで、何人招待しても会社全体で利用できます。",
    creditTitle: "AIクレジットとは？",
    creditText: (p) =>
      `応募を1件評価するごとに、1クレジットを使用します。プランには毎月${f.number(p.credits)}クレジット（年払いの場合は${f.number(p.yearlyCredits)}クレジットを最初に一括で）が含まれ、いつでも追加購入できます。`,
    billing: "お支払い周期",
    monthly: "月払い",
    yearly: "年払い",
    save: (percent) => `${f.percent(percent)}お得`,
    perMonth: "/月",
    perYear: "/年",
    monthlyCredits: (credits) => `毎月${f.number(credits)}のAIクレジット`,
    yearlyCredits: (credits) => `${f.number(credits)}のAIクレジットを最初に一括付与`,
    startTrial: (days) => `${days}日間の無料トライアルを開始`,
    included: [
      "求人数は無制限",
      "チーム全員で利用可能、ユーザー単位の料金なし",
      "独自ドメインでの採用ページ",
      "採用ページのコードを自由に編集",
      "応募フォームと選考ステップ",
      "自社のレイアウトで送る、応募者への自動メール",
      "コメント、メンション、通知",
      "応募をいつでもエクスポート",
    ],
    /** HTML. */
    trial: (p) =>
      `<strong>無料トライアル</strong>では、${p.trialDays}日間と${f.number(p.trialCredits)}のAIクレジットで、すべての機能をお試しいただけます。トライアルが終了するまで請求は発生せず、いつでもキャンセルできます。`,
    moreCredits: "クレジットが足りないときは？",
    packsNote: "クレジットパックはいつでも購入でき、有効期限はありません。",
    packsCaption: "クレジットパックと価格",
    creditsColumn: "クレジット",
    priceColumn: "価格",
    packCredits: (credits) => `${f.number(credits)}クレジット`,
  },

  faq: {
    eyebrow: "よくある質問",
    title: "気になる点に、お答えします。",
    /** HTML. `email` is a link to the support address. */
    intro: (email) =>
      `お探しの情報が見つからない場合は、${email}までメールでお問い合わせください。折り返しご連絡します。`,
    items: (p) => [
      {
        question: "無料トライアルはどのようなしくみですか？",
        answer: `${p.trialDays}日間すべての機能をご利用いただけ、実際の応募で試せる${f.number(p.trialCredits)}のAIクレジットも付いています。トライアルが終了するまで請求は発生せず、それまではいつでもキャンセルできます。`,
      },
      {
        question: "AIクレジットとは何ですか？",
        answer: `応募を1件評価するごとに、1クレジットを使用します。プランには毎月${f.number(p.credits)}クレジット、年払いの場合は${f.number(p.yearlyCredits)}クレジットが最初に一括で含まれます。さらに必要な場合は、${f.number(p.firstPack.credits)}クレジットで${f.usd(p.firstPack.priceUsd)}のパックからご購入いただけます。パックに有効期限はありません。`,
      },
      {
        question: "年払いはできますか？",
        answer: `はい。年払いは年額${f.usd(p.yearlyPriceUsd)}で、月払いより${f.percent(p.yearlySavingsPercent)}安く、${f.number(p.yearlyCredits)}のAIクレジットが最初に一括で付与されます。月払いと同じく、${p.trialDays}日間の無料トライアルから始まります。月払いをご利用中の場合は、「お支払い」からいつでも年払いに切り替えられます。その際は、1年分の料金から今月の未使用日数分を差し引いた金額をお支払いいただきます。`,
      },
      {
        question: "クレジットがなくなったらどうなりますか？",
        answer:
          "何も失われません。応募は引き続き届き、いつでもクレジットを追加購入して評価できます。",
      },
      {
        question: "AIはどのように応募を評価するのですか？",
        answer:
          "各履歴書と質問への回答を読み、公開した求人と照らし合わせます。スキル、経験、レベルの適合度、資格をそれぞれ評価してから1つのマッチ度にまとめるので、その応募者がなぜその順位なのかがわかります。",
      },
      {
        question: "AI評価はオフにできますか？",
        answer: "はい。管理者は「設定」で、会社全体のAI機能をオンまたはオフにできます。",
      },
      {
        question: "採用ページに独自ドメインを使えますか？",
        answer:
          "はい。採用ページはまずyourcompany.emploist.comで公開され、数ステップでcareers.yourcompany.comのようなドメインを接続できます。HTTPSにも対応しています。",
      },
      {
        question: "応募するのに、求職者のアカウントは必要ですか？",
        answer:
          "いいえ。求職者は採用ページのフォームに入力し、履歴書を添付するだけです。数分で完了します。",
      },
      {
        question: "チームの誰がEmploistを使えますか？",
        answer:
          "招待したメンバー全員が、追加料金なしで使えます。管理者は、さらにお支払い、採用ページ、会社の設定も管理できます。",
      },
      {
        question: "Emploistはどの言語に対応していますか？",
        answer:
          "Emploistは英語、フランス語、ドイツ語、スペイン語、イタリア語、日本語、韓国語、ポーランド語、トルコ語、インドネシア語で利用でき、チームの各メンバーが自分の言語を選べます。採用ページと応募者に届くメールは最初は英語ですが、どの言語にも書き換えられます。",
      },
      {
        question: "データを持ち出すことはできますか？",
        answer:
          "はい。どの求人の応募も、すべての応募と回答をまとめたスプレッドシートとして、各履歴書と一緒にエクスポートできます。",
      },
      {
        question: "ClaudeやChatGPTからEmploistを使えますか？",
        answer:
          "はい。チームの誰もが、Claude、ChatGPT、Claude Code、Cursor、VS Code、またはMCPに対応したその他のアシスタントを接続して、チャットで求人や応募を管理できます。この機能はプランに含まれています。アシスタントから応募を評価する場合も、Emploist上と同じくAIクレジットを1つ使用します。",
      },
      {
        question: "AIアシスタントはEmploistで何ができますか？",
        answer:
          "求人、選考ステップ、応募フォームの表示と変更、応募と履歴書の閲覧、選考ステップ間での応募者の移動、コメントができます。アシスタントは接続した人として、その人の役割で動作します。お支払い、チームメンバー、会社やアカウントの削除は含まれません。アシスタントの接続はいつでも解除でき、管理者は「設定」で会社全体のアシスタントをオフにできます。",
      },
      {
        question: "いつでもキャンセルできますか？",
        answer:
          "はい。いつでもキャンセルでき、プランはお支払い済みの期間が終わるまで引き続き利用できます。その後も、すべてのデータを閲覧してエクスポートできます。",
      },
    ],
  },

  callToAction: {
    title: "今週、最適な応募者に出会いましょう。",
    text: (p) =>
      `Emploistを${p.trialDays}日間無料でお試しください。設定は数分で完了し、準備が整いしだい採用ページを使い始められます。`,
    talkToUs: "お問い合わせ",
  },

  notFound: {
    title: "ページが見つかりません",
    description: "このページは存在しません。",
    heading: "このページは存在しません。",
    text: "ページが移動したか、リンクに誤りがある可能性があります。下のリンクからお進みください。",
    home: "トップページへ",
    blog: "ブログを読む",
  },

  blog: {
    title: "ブログ",
    description:
      "採用、採用ページ、採用管理に関するガイドと、Emploistチームからの製品アップデートをお届けします。",
    heading: "よい採用のためのノート。",
    emptyTitle: "最初の記事を準備中です。",
    /** HTML. */
    emptyText: (link) =>
      `採用やEmploistの活用方法に関するガイドを執筆中です。${link("RSSフィード")}で最新情報を受け取るか、その間に無料トライアルをお試しください。`,
    minutesToRead: (minutes) => `${minutes}分で読めます`,
    draft: "下書き",
    readPost: "記事を読む",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "英語版",
    updated: (date) => `${date}更新`,
    home: "ホーム",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "パンくずリスト",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Emploistを試す",
    ctaTitle: "最適な応募者を、真っ先に。",
    ctaText: (p) =>
      `Emploistを${p.trialDays}日間無料でお試しください。その後はチーム全員で月額${f.usd(p.priceUsd)}です。`,
    defaultAuthor: "Emploistチーム",
  },

  listedOn: {
    title: "掲載サイト",
    description:
      "採用ページとAI評価を備えた採用管理システム「Emploist」を掲載しているソフトウェアディレクトリの一覧です。",
    heading: "Emploistの掲載先。",
    lead: "Emploistを掲載しているディレクトリの一覧です。",
  },

  legal: {
    lastUpdated: (date) => `最終更新日：${date}`,
    contents: "目次",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link) =>
        `本書は、便宜のために提供する利用規約の翻訳です。法的拘束力を有するのは${link("英語版")}であり、両者に相違がある場合は英語版が適用されます。`,
      privacy: (link) =>
        `本書は、便宜のために提供するプライバシーポリシーの翻訳です。${link("英語版")}との間に相違がある場合は、法律で認められる範囲において、英語版が適用されます。`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date, link) =>
      `英語版は、この翻訳の作成後の${date}に更新されました。${link("最新の英語版をお読みください")}。`,
  },
};

export default ja;
