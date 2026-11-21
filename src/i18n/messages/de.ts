// The website's words in German, translated from en.ts (see its header comment).
// Terms follow the Emploist app's German: Stelle, Bewerbung, Bewerbende, Phase,
// Inbox, Match, KI-Credit, Tarif, Karriereseite, Admin, Einstellungen, Abrechnung.
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("de");

/** "14 Tage", "1 Tag": a number of days, in the nominative or accusative. */
const days = (n: number) => `${f.number(n)} ${f.plural(n, { one: "Tag", other: "Tage" })}`;

/** "1.000 Credits", "1 Credit". */
const credits = (n: number) => `${f.number(n)} ${f.plural(n, { one: "Credit", other: "Credits" })}`;

/** "1.000 KI-Credits", "1 KI-Credit". */
const aiCredits = (n: number) => `${f.number(n)} ${f.plural(n, { one: "KI-Credit", other: "KI-Credits" })}`;

const de: Messages = {
  site: {
    title: "Emploist: Bewerbermanagement mit KI und Karriereseite",
    description: (p) =>
      `Recruiting-Software mit Karriereseite und KI, die jede Bewerbung anhand Ihrer Stellenbeschreibung bewertet. ${f.usd(p.priceUsd)} im Monat für das ganze Team, ${days(p.trialDays)} kostenlos.`,
    imageAlt: "Emploist: Ihre besten Bewerbungen zuerst",
    skipToContent: "Zum Inhalt springen",
    home: "Emploist-Startseite",
    blogFeedTitle: "Emploist-Blog",
    blogFeedDescription: "Anleitungen und Neuigkeiten vom Emploist-Team.",
    monthlyOffer: (p) =>
      `${days(p.trialDays)} kostenlos, danach ${f.usd(p.priceUsd)} pro Monat für das ganze Team.`,
    yearlyOffer: (p) =>
      `${days(p.trialDays)} kostenlos, danach ${f.usd(p.yearlyPriceUsd)} pro Jahr für das ganze Team.`,
  },

  nav: {
    main: "Hauptnavigation",
    features: "Funktionen",
    careersPage: "Karriereseite",
    aiAssistants: "KI-Assistenten",
    /** The last item in the Features menu, after the feature sections. */
    moreFeatures: "Weitere Funktionen",
    pricing: "Preise",
    faq: "FAQ",
    blog: "Blog",
    signIn: "Anmelden",
    startFreeTrial: "Kostenlos testen",
    menu: "Menü",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "Sprache",
  },

  footer: {
    tagline:
      "Bewerbermanagement mit Karriereseite und KI-Bewertung für Teams, die die richtigen Leute einstellen wollen, ohne sich mit Routinearbeit aufzuhalten.",
    product: "Produkt",
    resources: "Ressourcen",
    account: "Konto",
    legal: "Rechtliches",
    rssFeed: "RSS-Feed",
    support: "Support",
    // Soft hyphens (\u00AD) mark where these long compounds break when
    // they don't fit, as in the footer's and the menu's narrow columns.
    terms: "Nutzungs\u00ADbedingungen",
    privacy: "Datenschutz\u00ADerklärung",
    copyright: (year) => `© ${year} Emploist. Alle Rechte vorbehalten.`,
    questions: "Fragen?",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "Jetzt kostenlos testen",
  },

  hero: {
    eyebrow: "Bewerbermanagement mit KI-Bewertung",
    title: "Ihre besten Bewerbungen zuerst.",
    lead: "Emploist bietet Ihnen eine Karriereseite, eine einfache Recruiting-Pipeline und KI, die jede Bewerbung anhand Ihrer Stellenbeschreibung bewertet. Ihr Team verbringt weniger Zeit mit Sortieren und mehr Zeit mit den Menschen, die passen.",
    seeHowItWorks: "So funktioniert es",
    note: (p) => `${days(p.trialDays)} kostenlos, danach ${f.usd(p.priceUsd)} pro Monat. Keine Kosten pro Teammitglied.`,
    screenshotAlt:
      "Die Bewerbungen für die Stelle Senior Product Designer in Emploist, sortiert nach bestem Match: 91 %, 88 %, 86 % und so weiter, jeweils mit Name, E-Mail-Adresse und Anzahl der Kommentare.",
  },

  howItWorks: {
    eyebrow: "So funktioniert es",
    title: "Von der Anzeige bis zur Einstellung – an einem Ort.",
    steps: [
      {
        title: "Stelle veröffentlichen",
        text: "Schreiben Sie die Beschreibung, wählen Sie die Fragen, die beantwortet werden sollen, und veröffentlichen Sie die Stelle auf Ihrer Karriereseite.",
      },
      {
        title: "Bewerbungen gehen ein",
        text: "Interessierte finden die Stelle auf Ihrer Karriereseite und bewerben sich in wenigen Minuten. Ein Konto ist nicht nötig.",
      },
      {
        title: "KI bewertet jede Bewerbung",
        text: "Jede Bewerbung erhält einen Match-Score für die Stelle, mit einer Aufschlüsselung, die Ihr Team nachvollziehen kann.",
      },
      {
        title: "Bewerbende voranbringen",
        text: "Sichten und kommentieren Sie Bewerbungen und verschieben Sie Bewerbende durch Ihre Phasen. Bei jedem Schritt werden E-Mails versendet.",
      },
    ],
  },

  ranking: {
    eyebrow: "KI-Bewertung",
    title: "Ein Match-Score, den Sie wirklich verstehen.",
    lead: "Jede Bewerbung wird anhand der Stelle bewertet, sobald sie eingeht. Statt einer rätselhaften Zahl sehen Sie, wie alle Bewerbenden bei dem abschneiden, worauf es für die Rolle ankommt.",
    points: [
      {
        title: "Klar aufgeschlüsselt.",
        text: "Fähigkeiten, Erfahrung, passende Seniorität und Qualifikationen werden einzeln bewertet. So sehen Sie genau, wo jemand heraussticht.",
      },
      {
        title: "Mehr als ein Lebenslauf.",
        text: "Auch die Antworten auf die Fragen in Ihrem Bewerbungsformular fließen mit ein.",
      },
      {
        title: "Fair und einheitlich.",
        text: "Alle Bewerbenden für eine Stelle werden auf dieselbe Weise und nach denselben Kriterien bewertet.",
      },
      {
        title: "Sie entscheiden.",
        text: "Der Match-Score soll Ihre Sichtung unterstützen, nicht ersetzen. Wenn Sie eine Stelle ändern, können Sie ihre Bewerbungen neu bewerten.",
      },
    ],
    screenshotAlt:
      "Ein Match von 91 % für eine bewerbende Person in Emploist, aufgeschlüsselt nach Fähigkeiten (93), Erfahrung (88), passender Seniorität (95) und Qualifikationen (85), jeweils mit einer kurzen Erklärung.",
    caption: (p) =>
      `Jede Bewertung verbraucht einen KI-Credit. Ihr Tarif enthält jeden Monat ${credits(p.credits)}.`,
  },

  careersPage: {
    eyebrow: "Karriereseite",
    title: "Ihre Karriereseite, ab dem ersten Tag startklar.",
    lead: "Jedes Unternehmen erhält eine schnelle, professionelle Karriereseite mit dem eigenen Logo und der eigenen Farbe. Neue Stellen erscheinen, sobald Sie sie veröffentlichen, und Bewerbungen landen direkt in der Inbox der Stelle.",
    screenshotAlt:
      "Die Karriereseite von Northwind Labs: ein Header mit dem Logo des Unternehmens, eine kurze Einleitung und die offenen Stellen, nach Abteilung gruppiert, mit Filtern für Abteilung und Standort.",
    mobileScreenshotAlt:
      "Eine Stellenseite auf einem Smartphone: Senior Product Designer in Berlin, hybrid und in Vollzeit, mit der Schaltfläche „Apply for this job“ und der Stellenbeschreibung.",
    facts: [
      {
        title: "Ihre Adresse oder Ihre Domain",
        text: "Starten Sie unter yourcompany.emploist.com und verbinden Sie dann eine eigene Domain, z. B. careers.yourcompany.com.",
      },
      {
        title: "Übersichtlich",
        text: "Offene Stellen sind nach Abteilung gruppiert, und Bewerbende können sie nach Abteilung und Standort filtern.",
      },
      {
        title: "Schnell auf jedem Bildschirm",
        text: "Die Seiten laden schnell und sehen überall gut aus, vom Smartphone bis zum Breitbildmonitor.",
      },
      {
        title: "Bewerbung in Minuten",
        text: "Keine Konten, keine Passwörter. Bewerbende füllen Ihr Formular aus, hängen ihren Lebenslauf an, und fertig.",
      },
      {
        title: "Transparent beim Thema KI",
        text: "Ihre Seite weist Bewerbende darauf hin, wenn KI bei der Sichtung ihrer Bewerbung hilft.",
      },
      {
        title: "Vor Spam geschützt",
        text: "Ein integrierter Schutz hält Spam aus Ihrer Inbox fern, damit Sie nur echte Bewerbende sehen.",
      },
    ],
  },

  designInCode: {
    eyebrow: "Design per Code",
    title: "Genau im Look Ihrer Website.",
    lead: "Das Standarddesign sieht schon mit Ihrem Logo und Ihrer Farbe gut aus. Wenn Sie mehr wollen: Alle Seiten Ihres Karrierebereichs bestehen aus HTML, CSS und Liquid-Templates, die Sie ändern können.",
    points: [
      "Bearbeiten Sie den Code direkt in Emploist, mit Live-Vorschau in Desktop- und Mobilgröße.",
      "Oder laden Sie den Code herunter, ändern Sie ihn in Ihrem eigenen Editor oder mit einem KI-Assistenten und sehen Sie sich die Vorschau mit einem einzigen Befehl auf Ihrem Computer an.",
      "Fehler werden vor dem Speichern erkannt, sodass Bewerbende immer eine funktionierende Seite sehen.",
    ],
    screenshotAlt:
      "Der Code-Editor für die Karriereseite in Emploist: links das Layout-Template mit Syntaxhervorhebung, rechts eine Live-Vorschau der Karriereseite.",
  },

  formsAndTeam: {
    label: "Bewerbungsformulare und Teamarbeit",
    forms: {
      eyebrow: "Bewerbungs\u00ADformulare",
      title: "Fragen Sie, worauf es bei jeder Stelle ankommt.",
      text: "Erstellen Sie für jede Stelle ein Formular mit kurzen und langen Antworten, Ja-oder-Nein-Fragen, Einfach- und Mehrfachauswahl, Dropdowns, Skalen und Checkboxen, und ziehen Sie alles in die gewünschte Reihenfolge.",
      screenshotAlt:
        "Ein Bewerbungsformular in Emploist: vollständiger Name, E-Mail und Lebenslauf, dann eine Telefonnummer, ein Link zum Portfolio, eine Einfachauswahl zu den Jahren an Berufserfahrung und eine Mehrfachauswahl zu Tools.",
    },
    team: {
      eyebrow: "Teamarbeit",
      title: "Gemeinsam entscheiden.",
      text: "Kommentieren Sie jede Bewerbung und holen Sie per @Erwähnung die Meinung von Teammitgliedern ein. Laden Sie Ihr ganzes Team ohne Aufpreis ein.",
      screenshotAlt:
        "Kommentare von drei Teammitgliedern zu einer Bewerbung und ein neuer Kommentar, der Priya Shah erwähnt, ausgewählt aus einer Liste von Teammitgliedern.",
    },
  },

  stagesAndEmails: {
    eyebrow: "Phasen und E-Mails",
    title: "Bewerbende automatisch auf dem Laufenden halten.",
    lead: "Jede Stelle hat ihre eigenen Phasen. Verschieben Sie eine bewerbende Person in die nächste, und die E-Mail dieser Phase wird automatisch versendet – einmal geschrieben und trotzdem für alle persönlich.",
    points: [
      "Starten Sie mit vorgefertigten Phasen und benennen Sie sie dann um, ändern Sie ihre Reihenfolge oder fügen Sie eigene hinzu, passend zu jeder Rolle.",
      "Jede Phase enthält eine vorgefertigte E-Mail. Personalisieren Sie sie mit Details wie Vorname und Stellentitel und prüfen Sie sie in einer Live-Vorschau.",
      "Jemanden versehentlich verschoben? Machen Sie es rückgängig, und die E-Mail wird nicht gesendet.",
      "E-Mails verwenden das Layout und das Logo Ihres Unternehmens, und Antworten gehen an die Adresse Ihrer Wahl.",
    ],
    editorScreenshotAlt:
      "Die E-Mail für die Phase „Interviewing“ in Emploist. Betreff und Nachricht verwenden Variablen für den Vornamen der bewerbenden Person, den Stellentitel und den Unternehmensnamen.",
    previewScreenshotAlt:
      "Die fertige E-Mail, wie sie bei Sam ankommt, einer bewerbenden Person: oben Northwind Labs, eine persönliche Einladung zum Vorstellungsgespräch für die Stelle Senior Product Designer und ein Link zu den offenen Stellen.",
  },

  aiAssistants: {
    eyebrow: "KI-Assistenten",
    title: "Recruiting per KI-Assistent steuern.",
    lead: "Verbinden Sie Claude, ChatGPT oder einen anderen Assistenten, der MCP unterstützt, und verwalten Sie Ihre Stellen und Bewerbenden, indem Sie einfach fragen.",
    points: [
      {
        title: "Fragen Sie nach Ihren Bewerbenden.",
        text: "Finden Sie die besten Matches für eine Stelle, verschaffen Sie sich einen Überblick über neue Bewerbungen oder lassen Sie sich die Antworten einer Person kurz zusammenfassen.",
      },
      {
        title: "Erledigen Sie Aufgaben.",
        text: "Erstellen und veröffentlichen Sie Stellen, verschieben Sie Bewerbende zwischen Phasen und schreiben Sie Kommentare, direkt im Chat.",
      },
      {
        title: "Behalten Sie die Kontrolle.",
        text: "Ihr Assistent erhält genau die Zugriffsrechte, die Sie haben, und nicht mehr. Sie können ihn jederzeit trennen, und er stoppt sofort.",
      },
    ],
    worksWith: "Funktioniert mit",
    otherClients: "beliebten KI-Assistenten",
    chat: {
      label: "Ein Beispielchat mit einem KI-Assistenten, der mit Emploist verbunden ist",
      assistant: "Ihr KI-Assistent",
      /** After "Emploist", hidden on phones: "Emploist connected". */
      connected: "verbunden",
      /** Read out before a tool's name: "Used Emploist list_applications". */
      used: "Verwendet",
      question: "Welche Bewerbenden für die Stelle Senior Product Designer passen am besten?",
      answerIntro: "Das sind die drei besten Matches in der Inbox:",
      /** A match on the list, e.g. "91% match"; the word is hidden on phones. */
      match: (percent) => ({ value: f.percent(percent), label: "Match" }),
      answerOutro: "Diego liegt bei Seniorität und Fähigkeiten vorn. Soll ich jemanden in die nächste Phase verschieben?",
      request: "Verschiebe Diego nach „Phone screen“.",
      done: "Erledigt. Diego ist jetzt in „Phone screen“, und die E-Mail dieser Phase wird in 2 Minuten versendet. Falls Sie es sich anders überlegen, kann ich das bis dahin rückgängig machen.",
      placeholder: "Fragen Sie nach Ihren Stellen und Bewerbenden",
    },
    caption: "Jede Person verbindet ihren eigenen Assistenten in wenigen Schritten.",
  },

  details: {
    eyebrow: "Und noch mehr",
    title: "Die Details, die Recruiting leichter machen.",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "Jederzeit exportieren",
        text: "Laden Sie die Bewerbungen einer Stelle als Tabelle herunter, mit allen Lebensläufen in derselben ZIP-Datei.",
      },
      {
        title: "Lebensläufe direkt zur Hand",
        text: "PDF- und Word-Lebensläufe öffnen sich direkt in Emploist, neben der Bewerbung. Kein Download nötig.",
      },
      {
        title: "Unbegrenzt viele Stellen",
        text: "Veröffentlichen Sie so viele Stellen, wie Sie brauchen, und finden Sie jede davon in Sekunden per Suche und Filter.",
      },
      {
        title: "Stellen duplizieren",
        text: "Sie besetzen eine ähnliche Rolle? Kopieren Sie Details, Formular, Phasen und E-Mails einer Stelle mit einem Klick.",
      },
      {
        title: "Keine Passwörter",
        text: "Melden Sie sich mit Google, Microsoft oder einem Einmalcode an, den Sie per E-Mail erhalten.",
      },
      {
        title: "Standardmäßig privat",
        text: "Lebensläufe werden privat gespeichert, und nur Personen aus Ihrem Team können sie öffnen.",
      },
      {
        title: "Benachrichtigungen, die zählen",
        text: "Sie werden benachrichtigt, wenn jemand Sie erwähnt oder eine Bewerbung kommentiert, die Sie kommentiert haben.",
      },
      {
        title: "Hell und dunkel",
        text: "Emploist folgt dem Farbschema Ihres Systems, oder Sie wählen selbst, was Ihnen besser gefällt.",
      },
    ],
  },

  pricing: {
    eyebrow: "Preise",
    title: "Ein Tarif, alles inklusive.",
    lead: "Keine Funktionsstufen und keine Kosten pro Teammitglied. Ein Preis, monatlich oder jährlich bezahlt, gilt für Ihr ganzes Unternehmen, egal wie viele Personen Sie einladen.",
    creditTitle: "Was ist ein KI-Credit?",
    creditText: (p) =>
      `Die Bewertung einer Bewerbung verbraucht einen Credit. Ihr Tarif enthält ${credits(p.credits)} pro Monat oder ${credits(p.yearlyCredits)} im Voraus bei jährlicher Zahlung, und Sie können jederzeit Credits nachkaufen.`,
    billing: "Abrechnungsintervall",
    monthly: "Monatlich",
    yearly: "Jährlich",
    save: (percent) => `${f.percent(percent)} sparen`,
    perMonth: "pro Monat",
    perYear: "pro Jahr",
    monthlyCredits: (n) => `${aiCredits(n)} pro Monat`,
    yearlyCredits: (n) => `${aiCredits(n)} im Voraus`,
    startTrial: (n) => `${days(n)} kostenlos testen`,
    included: [
      "Unbegrenzt viele Stellen",
      "Ihr ganzes Team, ohne Kosten pro Teammitglied",
      "Eine Karriereseite unter Ihrer eigenen Domain",
      "Volle Kontrolle über den Code Ihrer Karriereseite",
      "Bewerbungsformulare und Recruiting-Phasen",
      "Automatische E-Mails an Bewerbende, in Ihrem eigenen Layout",
      "Kommentare, Erwähnungen und Benachrichtigungen",
      "Bewerbungen jederzeit exportieren",
    ],
    /** HTML. */
    trial: (p) =>
      `<strong>Der kostenlose Testzeitraum</strong> gibt Ihnen ${days(p.trialDays)} und ${aiCredits(p.trialCredits)}, um alles auszuprobieren. Ihnen wird erst etwas berechnet, wenn er endet, und Sie können jederzeit kündigen.`,
    moreCredits: "Brauchen Sie mehr Credits?",
    packsNote: "Kaufen Sie ein Paket, wann immer Sie möchten. Pakete verfallen nie.",
    packsCaption: "Credit-Pakete und ihre Preise",
    creditsColumn: "Credits",
    priceColumn: "Preis",
    packCredits: (n) => credits(n),
  },

  faq: {
    eyebrow: "FAQ",
    title: "Fragen und Antworten.",
    /** HTML. `email` is a link to the support address. */
    intro: (email) => `Sie finden nicht, was Sie suchen? Schreiben Sie uns an ${email}, und wir melden uns bei Ihnen.`,
    items: (p) => [
      {
        question: "Wie funktioniert der kostenlose Testzeitraum?",
        answer: `Sie erhalten ${days(p.trialDays)} mit allen Funktionen und ${aiCredits(p.trialCredits)}, um Emploist mit echten Bewerbungen auszuprobieren. Ihnen wird erst etwas berechnet, wenn der Testzeitraum endet, und Sie können vorher jederzeit kündigen.`,
      },
      {
        question: "Was ist ein KI-Credit?",
        answer: `Die Bewertung einer Bewerbung verbraucht einen Credit. Ihr Tarif enthält ${credits(p.credits)} pro Monat oder ${credits(p.yearlyCredits)} im Voraus bei jährlicher Zahlung. Wenn Sie mehr brauchen, gibt es Pakete ab ${credits(p.firstPack.credits)} für ${f.usd(p.firstPack.priceUsd)}, und diese verfallen nie.`,
      },
      {
        question: "Können wir jährlich zahlen?",
        answer: `Ja. Bei jährlicher Zahlung kostet Emploist ${f.usd(p.yearlyPriceUsd)} pro Jahr, ${f.percent(p.yearlySavingsPercent)} weniger als bei monatlicher Zahlung, mit ${aiCredits(p.yearlyCredits)} im Voraus. Auch hier beginnen Sie mit demselben ${f.number(p.trialDays)}-tägigen kostenlosen Testzeitraum. Wenn Sie monatlich zahlen, können Sie jederzeit unter „Abrechnung“ auf jährlich umstellen und zahlen dann für das Jahr, abzüglich der ungenutzten Tage Ihres aktuellen Monats.`,
      },
      {
        question: "Was passiert, wenn unsere Credits aufgebraucht sind?",
        answer:
          "Es geht nichts verloren. Bewerbungen gehen weiterhin ein, und Sie können jederzeit weitere Credits kaufen, um sie zu bewerten.",
      },
      {
        question: "Wie bewertet die KI eine Bewerbung?",
        answer:
          "Sie liest jeden Lebenslauf und die Antworten auf Ihre Fragen und vergleicht sie mit der ausgeschriebenen Stelle. Fähigkeiten, Erfahrung, passende Seniorität und Qualifikationen werden einzeln bewertet und dann zu einem Match zusammengeführt. So sehen Sie, wie jede Platzierung zustande kommt.",
      },
      {
        question: "Können wir die KI-Bewertung deaktivieren?",
        answer: "Ja. Ein Admin kann die KI-Funktionen in den Einstellungen für Ihr ganzes Unternehmen aktivieren oder deaktivieren.",
      },
      {
        question: "Können wir eine eigene Domain für die Karriereseite verwenden?",
        answer:
          "Ja. Ihre Karriereseite startet unter yourcompany.emploist.com, und Sie können in wenigen Schritten eine Domain wie careers.yourcompany.com verbinden, HTTPS inklusive.",
      },
      {
        question: "Brauchen Bewerbende ein Konto, um sich zu bewerben?",
        answer:
          "Nein. Bewerbende füllen das Formular auf Ihrer Karriereseite aus und hängen ihren Lebenslauf an. Das dauert nur ein paar Minuten.",
      },
      {
        question: "Wer in unserem Team kann Emploist nutzen?",
        answer:
          "Alle, die Sie einladen, ohne Aufpreis. Admins verwalten außerdem die Abrechnung, die Karriereseite und die Unternehmenseinstellungen.",
      },
      {
        question: "Welche Sprachen unterstützt Emploist?",
        answer:
          "Sie können Emploist auf Englisch, Französisch, Deutsch, Spanisch, Italienisch, Japanisch, Koreanisch, Polnisch, Türkisch und Indonesisch nutzen, und alle in Ihrem Team wählen ihre eigene Sprache. Karriereseiten und die E-Mails an Bewerbende sind anfangs auf Englisch, und Sie können sie in jeder Sprache neu formulieren.",
      },
      {
        question: "Können wir unsere Daten mitnehmen?",
        answer:
          "Ja. Exportieren Sie die Bewerbungen jeder Stelle als Tabelle mit allen Bewerbungen und Antworten, zusammen mit allen Lebensläufen.",
      },
      {
        question: "Können wir Emploist über Claude oder ChatGPT nutzen?",
        answer:
          "Ja. Alle in Ihrem Team können Claude, ChatGPT, Grok, Gemini, Copilot oder einen anderen Assistenten verbinden, der MCP unterstützt, und Stellen und Bewerbungen im Chat verwalten. Das ist in Ihrem Tarif enthalten. Wenn Sie eine Bewerbung über einen Assistenten bewerten lassen, verbraucht das einen KI-Credit, genau wie in Emploist.",
      },
      {
        question: "Was kann ein KI-Assistent in Emploist tun?",
        answer:
          "Er kann Stellen, Phasen und Bewerbungsformulare ansehen und ändern, Bewerbungen und Lebensläufe lesen, Bewerbende zwischen Phasen verschieben und kommentieren. Er handelt als die Person, die ihn verbunden hat, mit deren Rolle. Abrechnung, Teammitglieder und das Löschen Ihres Unternehmens oder Kontos sind nicht enthalten. Sie können Ihren Assistenten jederzeit trennen, und ein Admin kann Assistenten in den Einstellungen für das ganze Unternehmen deaktivieren.",
      },
      {
        question: "Können wir jederzeit kündigen?",
        answer:
          "Ja. Kündigen Sie, wann immer Sie möchten. Ihr Tarif läuft bis zum Ende des bezahlten Zeitraums weiter, und auch danach können Sie noch alles ansehen und exportieren.",
      },
    ],
  },

  callToAction: {
    title: "Ihre besten Bewerbenden – schon diese Woche.",
    text: (p) =>
      `Testen Sie Emploist ${days(p.trialDays)} kostenlos. Die Einrichtung dauert nur wenige Minuten, und Ihre Karriereseite ist bereit, sobald Sie es sind.`,
    talkToUs: "Schreiben Sie uns",
  },

  notFound: {
    title: "Seite nicht gefunden",
    description: "Diese Seite existiert nicht.",
    heading: "Diese Seite existiert nicht.",
    text: "Vielleicht wurde sie verschoben, oder der Link enthält einen Tippfehler. Wir bringen Sie zurück auf den richtigen Weg.",
    home: "Zur Startseite",
    blog: "Zum Blog",
  },

  blog: {
    title: "Blog",
    description:
      "Anleitungen zu Recruiting, Karriereseiten und Bewerbermanagement sowie Produktneuigkeiten vom Emploist-Team.",
    heading: "Notizen zu gutem Recruiting.",
    emptyTitle: "Die ersten Beiträge sind in Arbeit.",
    /** HTML. */
    emptyText: (link) =>
      `Wir schreiben Anleitungen zum Recruiting und dazu, wie Sie das Beste aus Emploist herausholen. Folgen Sie uns über den ${link("RSS-Feed")}, oder starten Sie in der Zwischenzeit Ihren kostenlosen Testzeitraum.`,
    minutesToRead: (minutes) => `${f.number(minutes)} Min. Lesezeit`,
    draft: "Entwurf",
    readPost: "Beitrag lesen",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "Auf Englisch",
    updated: (date) => `Aktualisiert am ${date}`,
    home: "Startseite",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "Brotkrumennavigation",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Emploist testen",
    ctaTitle: "Ihre besten Bewerbungen zuerst.",
    ctaText: (p) =>
      `Testen Sie Emploist ${days(p.trialDays)} kostenlos, danach ${f.usd(p.priceUsd)} pro Monat für Ihr ganzes Team.`,
    defaultAuthor: "Das Emploist-Team",
  },

  listedOn: {
    title: "Gelistet auf",
    description:
      "In diesen Softwareverzeichnissen finden Sie Emploist, das Bewerbermanagementsystem mit Karriereseite, Recruiting-Pipeline und KI-Bewertung.",
    heading: "Hier finden Sie Emploist.",
    lead: "Die Verzeichnisse, in denen Emploist gelistet ist.",
  },

  legal: {
    lastUpdated: (date) => `Zuletzt aktualisiert am ${date}`,
    contents: "Inhalt",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link) =>
        `Dies ist eine Übersetzung unserer Nutzungsbedingungen, die wir Ihnen als Service zur Verfügung stellen. Die ${link("englische Fassung")} ist rechtlich verbindlich und maßgeblich, wenn die beiden voneinander abweichen.`,
      privacy: (link) =>
        `Dies ist eine Übersetzung unserer Datenschutzerklärung, die wir Ihnen als Service zur Verfügung stellen. Weicht sie von der ${link("englischen Fassung")} ab, ist die englische Fassung maßgeblich, soweit gesetzlich zulässig.`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date, link) =>
      `Die englische Fassung wurde am ${date} aktualisiert, nachdem diese Übersetzung erstellt wurde. ${link("Aktuelle englische Fassung lesen")}.`,
  },
};

export default de;
