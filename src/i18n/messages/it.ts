// The website's words in Italian. Same shape as en.ts, the source: see its
// header for how functions, HTML strings, and lists work.
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("it");

const it: Messages = {
  site: {
    title: "Emploist: selezione del personale con IA e pagina carriere",
    description: (p) =>
      `Pubblica le posizioni sulla tua pagina carriere e lascia che l'IA valuti ogni candidatura. ${f.usd(p.priceUsd)} al mese per tutto il team, prova gratuita di ${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno`, many: `${f.number(p.trialDays)} di giorni`, other: `${f.number(p.trialDays)} giorni` })}.`,
    imageAlt: "Emploist: inizia dai candidati migliori",
    skipToContent: "Vai al contenuto",
    home: "Home page di Emploist",
    blogFeedTitle: "Blog di Emploist",
    blogFeedDescription: "Guide e novità dal team di Emploist.",
    monthlyOffer: (p) =>
      `Prova gratuita di ${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno`, many: `${f.number(p.trialDays)} di giorni`, other: `${f.number(p.trialDays)} giorni` })}, poi ${f.usd(p.priceUsd)} al mese per tutto il team.`,
    yearlyOffer: (p) =>
      `Prova gratuita di ${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno`, many: `${f.number(p.trialDays)} di giorni`, other: `${f.number(p.trialDays)} giorni` })}, poi ${f.usd(p.yearlyPriceUsd)} all'anno per tutto il team.`,
  },

  nav: {
    main: "Principale",
    features: "Funzionalità",
    careersPage: "Pagina carriere",
    aiAssistants: "Assistenti IA",
    /** The last item in the Features menu, after the feature sections. */
    moreFeatures: "Altre funzionalità",
    pricing: "Prezzi",
    faq: "FAQ",
    blog: "Blog",
    signIn: "Accedi",
    startFreeTrial: "Prova gratis",
    menu: "Menu",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "Lingua",
  },

  footer: {
    tagline:
      "Selezione del personale con pagina carriere e valutazione IA, per i team che vogliono assumere bene senza perdersi in attività ripetitive.",
    product: "Prodotto",
    resources: "Risorse",
    account: "Account",
    legal: "Note legali",
    rssFeed: "Feed RSS",
    support: "Assistenza",
    terms: "Termini di servizio",
    privacy: "Informativa sulla privacy",
    copyright: (year) => `© ${year} Emploist. Tutti i diritti riservati.`,
    questions: "Domande?",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "Inizia la prova gratuita",
  },

  hero: {
    eyebrow: "Gestione candidature con valutazione IA",
    title: "Inizia dai candidati migliori.",
    lead: "Emploist ti offre una pagina carriere, un processo di selezione semplice e un'IA che valuta ogni candidatura rispetto alla descrizione della posizione. Il tuo team passa meno tempo a smistare candidature e più tempo con le persone giuste.",
    seeHowItWorks: "Scopri come funziona",
    note: (p) =>
      `${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno gratis`, many: `${f.number(p.trialDays)} di giorni gratis`, other: `${f.number(p.trialDays)} giorni gratis` })}, poi ${f.usd(p.priceUsd)} al mese. Nessun costo per utente.`,
    screenshotAlt:
      "Le candidature per la posizione Senior Product Designer in Emploist, ordinate per maggiore affinità: 91%, 88%, 86% e così via, con nome, email e numero di commenti di ogni candidato.",
  },

  howItWorks: {
    eyebrow: "Come funziona",
    title: "Dall'annuncio all'assunzione, in un unico posto.",
    steps: [
      {
        title: "Pubblica una posizione",
        text: "Scrivi la descrizione, scegli le domande a cui vuoi una risposta e pubblicala sulla tua pagina carriere.",
      },
      {
        title: "Arrivano le candidature",
        text: "Le persone trovano la posizione sulla tua pagina carriere e si candidano in un paio di minuti. Senza bisogno di un account.",
      },
      {
        title: "L'IA valuta ogni candidatura",
        text: "Ogni candidatura riceve un punteggio di affinità con la posizione, scomposto in voci che il tuo team può leggere.",
      },
      {
        title: "Fai avanzare i candidati",
        text: "Esamina, commenta e sposta i candidati tra le tue fasi. A ogni passaggio partono le email.",
      },
    ],
  },

  ranking: {
    eyebrow: "Valutazione IA",
    title: "Un punteggio di affinità finalmente chiaro.",
    lead: "Ogni candidatura viene valutata rispetto alla posizione non appena arriva. Al posto di un numero misterioso, vedi come si colloca ogni candidato sugli aspetti che contano per il ruolo.",
    points: [
      {
        title: "Punteggi chiari, voce per voce.",
        text: "Competenze, esperienza, seniority e qualifiche ricevono ciascuna un punteggio, così vedi esattamente in cosa spicca una persona.",
      },
      {
        title: "Non solo il CV.",
        text: "Anche le risposte alle domande del modulo di candidatura entrano nella valutazione.",
      },
      {
        title: "Equo e coerente.",
        text: "Tutti i candidati a una posizione vengono valutati allo stesso modo, in base agli stessi criteri.",
      },
      {
        title: "Decidi sempre tu.",
        text: "L'affinità serve a guidare il tuo esame delle candidature, non a sostituirlo. Se aggiorni una posizione, puoi valutarne di nuovo i candidati.",
      },
    ],
    screenshotAlt:
      "L'affinità del 91% di un candidato in Emploist, suddivisa in competenze (93), esperienza (88), seniority (95) e qualifiche (85), ciascuna con una breve spiegazione.",
    caption: (p) => `Ogni valutazione usa un credito IA. Il tuo piano ne include ${f.number(p.credits)} ogni mese.`,
  },

  careersPage: {
    eyebrow: "Pagina carriere",
    title: "Una pagina carriere pronta dal primo giorno.",
    lead: "Ogni azienda ha una pagina carriere veloce e curata, con il proprio logo e il proprio colore. Le nuove posizioni compaiono non appena le pubblichi e le candidature finiscono direttamente nella posta in arrivo della posizione.",
    screenshotAlt:
      "La pagina carriere di Northwind Labs: un'intestazione con il logo dell'azienda, una breve introduzione e le posizioni aperte raggruppate per reparto, con filtri per reparto e sede.",
    mobileScreenshotAlt:
      "La pagina di una posizione su smartphone: Senior Product Designer, Berlin, in modalità ibrida e a tempo pieno, con il pulsante “Apply for this job” e la descrizione della posizione.",
    facts: [
      {
        title: "Il tuo indirizzo o il tuo dominio",
        text: "Parti da yourcompany.emploist.com, poi collega un dominio tutto tuo, come careers.yourcompany.com.",
      },
      {
        title: "Facile da consultare",
        text: "Le posizioni aperte sono raggruppate per reparto e i candidati possono filtrarle per reparto e sede.",
      },
      {
        title: "Veloce su ogni schermo",
        text: "Le pagine si caricano in fretta e sono perfette ovunque, dagli smartphone ai monitor più ampi.",
      },
      {
        title: "Ci si candida in pochi minuti",
        text: "Niente account né password. I candidati compilano il tuo modulo, allegano il CV e il gioco è fatto.",
      },
      {
        title: "Trasparente sull'IA",
        text: "La tua pagina informa i candidati quando l'IA aiuta a esaminare la loro candidatura.",
      },
      {
        title: "Protetta dallo spam",
        text: "La protezione integrata tiene lo spam fuori dalla tua posta in arrivo, così vedi solo candidati reali.",
      },
    ],
  },

  designInCode: {
    eyebrow: "Design con il codice",
    title: "Rendila identica al tuo sito web.",
    lead: "Al design predefinito bastano il tuo logo e il tuo colore per fare bella figura. Quando vuoi di più, ogni pagina del tuo sito carriere è fatta di template HTML, CSS e Liquid che puoi modificare.",
    points: [
      "Modifica direttamente in Emploist, con un'anteprima dal vivo in formato desktop e smartphone.",
      "Oppure scarica il codice, modificalo nel tuo editor o con un assistente IA e visualizza l'anteprima sul tuo computer con un solo comando.",
      "Gli errori vengono individuati prima del salvataggio, così i candidati vedono sempre una pagina funzionante.",
    ],
    screenshotAlt:
      "L'editor del codice della pagina carriere in Emploist: il template del layout con l'evidenziazione della sintassi a sinistra e un'anteprima dal vivo della pagina carriere a destra.",
  },

  formsAndTeam: {
    label: "Moduli di candidatura e lavoro di squadra",
    forms: {
      eyebrow: "Moduli di candidatura",
      title: "Chiedi ciò che conta per ogni ruolo.",
      text: "Crea un modulo per ogni posizione con risposte brevi e lunghe, domande sì o no, scelte, elenchi a discesa, scale e caselle di controllo, poi trascina le domande nell'ordine che preferisci.",
      screenshotAlt:
        "Un modulo di candidatura in Emploist: nome e cognome, email e CV, poi un numero di telefono, un link al portfolio, una domanda a scelta singola sugli anni di esperienza e una domanda a scelta multipla sugli strumenti.",
    },
    team: {
      eyebrow: "Lavoro di squadra",
      title: "Decidi insieme al tuo team.",
      text: "Commenta qualsiasi candidatura e @menziona un collega per avere la sua opinione. Invita tutto il tuo team senza costi aggiuntivi.",
      screenshotAlt:
        "I commenti di tre colleghi su una candidatura e un nuovo commento che menziona Priya Shah, scelta da un elenco di colleghi.",
    },
  },

  stagesAndEmails: {
    eyebrow: "Fasi ed email",
    title: "Tieni aggiornati i candidati, in automatico.",
    lead: "Ogni posizione ha le sue fasi. Sposta un candidato alla fase successiva e l'email di quella fase parte da sola: scritta una volta, personale per ognuno.",
    points: [
      "Parti da fasi già pronte, poi rinominale, riordinale e aggiungine di tue per adattarle a ogni ruolo.",
      "Ogni fase include un'email già pronta. Personalizzala con dettagli come il nome del candidato e il titolo della posizione e controllala in un'anteprima dal vivo.",
      "Hai spostato qualcuno per errore? Annulla lo spostamento e l'email non viene inviata.",
      "Le email usano il layout e il logo della tua azienda e le risposte arrivano all'indirizzo che scegli tu.",
    ],
    editorScreenshotAlt:
      "L'email della fase “Interviewing” in Emploist. L'oggetto e il messaggio usano variabili per il nome del candidato, il titolo della posizione e il nome dell'azienda.",
    previewScreenshotAlt:
      "L'email finita, come la riceve un candidato di nome Sam: Northwind Labs in alto, un invito personale a un colloquio per il ruolo di Senior Product Designer e un link alle posizioni aperte.",
  },

  aiAssistants: {
    eyebrow: "Assistenti IA",
    title: "Gestisci la selezione dal tuo assistente IA.",
    lead: "Connetti Claude, ChatGPT o un altro assistente compatibile con MCP e lavora sulle tue posizioni e sui tuoi candidati semplicemente chiedendo.",
    points: [
      {
        title: "Fai domande sui tuoi candidati.",
        text: "Trova i candidati più adatti a una posizione, mettiti al passo con le nuove candidature o ottieni un rapido riepilogo delle risposte di qualcuno.",
      },
      {
        title: "Porta a termine il lavoro.",
        text: "Crea e pubblica posizioni, sposta i candidati tra le fasi e lascia commenti, direttamente dalla chat.",
      },
      {
        title: "Il controllo resta a te.",
        text: "Connetti il tuo assistente con i tuoi stessi permessi, niente di più. Disconnettilo quando vuoi e si ferma subito.",
      },
    ],
    worksWith: "Funziona con",
    otherClients: "gli assistenti IA più diffusi",
    chat: {
      label: "Un esempio di chat con un assistente IA connesso a Emploist",
      assistant: "Il tuo assistente IA",
      /** After "Emploist", hidden on phones: "Emploist connesso". */
      connected: "connesso",
      /** Read out before a tool's name: "Ha usato Emploist list_applications". */
      used: "Ha usato",
      question: "Quali candidati per la posizione di Senior Product Designer sono i più adatti?",
      answerIntro: "Ecco i tre candidati più adatti nella posta in arrivo:",
      /** A match on the list, e.g. "91% affine"; the word is hidden on phones. */
      match: (percent) => ({ value: f.percent(percent), label: "affine" }),
      answerOutro: "Diego è in testa per seniority e competenze. Vuoi che faccia avanzare qualcuno?",
      request: "Sposta Diego in Phone screen.",
      done: "Fatto. Ora Diego è in Phone screen e l'email di quella fase partirà tra 2 minuti. Se cambi idea, posso annullare lo spostamento prima di allora.",
      placeholder: "Fai una domanda su posizioni e candidati",
    },
    caption: "Ognuno connette il proprio assistente in pochi passaggi.",
  },

  details: {
    eyebrow: "E non solo",
    title: "I dettagli che semplificano la selezione.",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "Esporta quando vuoi",
        text: "Scarica le candidature di una posizione come foglio di calcolo, con tutti i CV nello stesso file ZIP.",
      },
      {
        title: "I CV, a portata di mano",
        text: "I CV in PDF e Word si aprono direttamente in Emploist, accanto alla candidatura. Niente da scaricare.",
      },
      {
        title: "Posizioni illimitate",
        text: "Pubblica tutte le posizioni che ti servono e ritrovale in pochi secondi con ricerca e filtri.",
      },
      {
        title: "Duplica una posizione",
        text: "Cerchi qualcuno per un ruolo simile? Copia dettagli, modulo, fasi ed email di una posizione con un clic.",
      },
      {
        title: "Niente password",
        text: "Accedi con Google, Microsoft o un codice monouso inviato alla tua email.",
      },
      {
        title: "Privacy di serie",
        text: "I CV sono archiviati in modo privato e solo le persone del tuo team possono aprirli.",
      },
      {
        title: "Notifiche che contano",
        text: "Ricevi una notifica quando qualcuno ti menziona o risponde in una candidatura che hai commentato.",
      },
      {
        title: "Chiaro e scuro",
        text: "Emploist segue il tema del tuo sistema, oppure puoi scegliere quello che preferisci.",
      },
    ],
  },

  pricing: {
    eyebrow: "Prezzi",
    title: "Un solo piano, con tutto incluso.",
    lead: "Nessun piano a livelli e nessun costo per utente. Un unico prezzo, con pagamento mensile o annuale, copre tutta la tua azienda, indipendentemente da quante persone inviti.",
    creditTitle: "Cos'è un credito IA?",
    creditText: (p) =>
      `Ogni candidatura valutata usa un credito. Il tuo piano ne include ${f.number(p.credits)} ogni mese, oppure ${f.number(p.yearlyCredits)} subito se paghi annualmente, e puoi acquistarne altri quando vuoi.`,
    billing: "Fatturazione",
    monthly: "Mensile",
    yearly: "Annuale",
    save: (percent) => `Risparmia ${f.percent(percent)}`,
    perMonth: "al mese",
    perYear: "all'anno",
    monthlyCredits: (credits) =>
      f.plural(credits, {
        one: `${f.number(credits)} credito IA ogni mese`,
        many: `${f.number(credits)} di crediti IA ogni mese`,
        other: `${f.number(credits)} crediti IA ogni mese`,
      }),
    yearlyCredits: (credits) =>
      f.plural(credits, {
        one: `${f.number(credits)} credito IA subito disponibile`,
        many: `${f.number(credits)} di crediti IA subito disponibili`,
        other: `${f.number(credits)} crediti IA subito disponibili`,
      }),
    startTrial: (days) =>
      `Inizia la prova gratuita di ${f.plural(days, { one: `${f.number(days)} giorno`, many: `${f.number(days)} di giorni`, other: `${f.number(days)} giorni` })}`,
    included: [
      "Posizioni illimitate",
      "Tutto il team, senza costi per utente",
      "Una pagina carriere sul tuo dominio",
      "Pieno controllo del codice della pagina carriere",
      "Moduli di candidatura e fasi di selezione",
      "Email automatiche ai candidati, con il tuo layout",
      "Commenti, menzioni e notifiche",
      "Esportazione delle candidature quando vuoi",
    ],
    /** HTML. */
    trial: (p) =>
      `<strong>La prova gratuita</strong> ti offre ${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno`, many: `${f.number(p.trialDays)} di giorni`, other: `${f.number(p.trialDays)} giorni` })} e ${f.plural(p.trialCredits, { one: `${f.number(p.trialCredits)} credito IA`, many: `${f.number(p.trialCredits)} di crediti IA`, other: `${f.number(p.trialCredits)} crediti IA` })} per provare tutto. Non ti verrà addebitato nulla fino alla fine della prova e puoi disdire in qualsiasi momento.`,
    moreCredits: "Ti servono altri crediti?",
    packsNote: "Acquista un pacchetto quando vuoi. I pacchetti non scadono mai.",
    packsCaption: "Pacchetti di crediti e relativi prezzi",
    creditsColumn: "Crediti",
    priceColumn: "Prezzo",
    packCredits: (credits) =>
      f.plural(credits, {
        one: `${f.number(credits)} credito`,
        many: `${f.number(credits)} di crediti`,
        other: `${f.number(credits)} crediti`,
      }),
  },

  faq: {
    eyebrow: "FAQ",
    title: "Le risposte alle tue domande.",
    /** HTML. `email` is a link to the support address. */
    intro: (email) => `Non trovi quello che cerchi? Scrivici a ${email} e ti risponderemo.`,
    items: (p) => [
      {
        question: "Come funziona la prova gratuita?",
        answer: `Hai ${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno`, many: `${f.number(p.trialDays)} di giorni`, other: `${f.number(p.trialDays)} giorni` })} con tutte le funzionalità e ${f.plural(p.trialCredits, { one: `${f.number(p.trialCredits)} credito IA`, many: `${f.number(p.trialCredits)} di crediti IA`, other: `${f.number(p.trialCredits)} crediti IA` })} per provare Emploist su candidature reali. Non ti verrà addebitato nulla fino alla fine della prova e puoi disdire in qualsiasi momento prima di allora.`,
      },
      {
        question: "Cos'è un credito IA?",
        answer: `Ogni candidatura valutata usa un credito. Il tuo piano include ${f.plural(p.credits, { one: `${f.number(p.credits)} credito`, many: `${f.number(p.credits)} di crediti`, other: `${f.number(p.credits)} crediti` })} ogni mese, oppure ${f.number(p.yearlyCredits)} subito se paghi annualmente. Se te ne servono di più, i pacchetti partono da ${f.plural(p.firstPack.credits, { one: `${f.number(p.firstPack.credits)} credito`, many: `${f.number(p.firstPack.credits)} di crediti`, other: `${f.number(p.firstPack.credits)} crediti` })} per ${f.usd(p.firstPack.priceUsd)} e non scadono mai.`,
      },
      {
        question: "Possiamo pagare annualmente?",
        answer: `Sì. Il piano annuale costa ${f.usd(p.yearlyPriceUsd)} all'anno, il ${f.percent(p.yearlySavingsPercent)} in meno rispetto al pagamento mensile, con ${f.plural(p.yearlyCredits, { one: `${f.number(p.yearlyCredits)} credito IA subito disponibile`, many: `${f.number(p.yearlyCredits)} di crediti IA subito disponibili`, other: `${f.number(p.yearlyCredits)} crediti IA subito disponibili` })}. Inizia con la stessa prova gratuita di ${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno`, many: `${f.number(p.trialDays)} di giorni`, other: `${f.number(p.trialDays)} giorni` })}. Se hai il piano mensile, puoi passare a quello annuale in qualsiasi momento dalla pagina Fatturazione: paghi l'anno meno i giorni non utilizzati del mese in corso.`,
      },
      {
        question: "Cosa succede se finiamo i crediti?",
        answer:
          "Non si perde nulla. Le candidature continuano ad arrivare e puoi acquistare altri crediti in qualsiasi momento per valutarle.",
      },
      {
        question: "Come fa l'IA a valutare una candidatura?",
        answer:
          "Legge ogni CV e le risposte alle tue domande, poi li confronta con la posizione che hai pubblicato. Competenze, esperienza, seniority e qualifiche ricevono ciascuna un punteggio e vengono poi combinate in un unico punteggio di affinità, così capisci perché una persona si trova più in alto o più in basso in classifica.",
      },
      {
        question: "Possiamo disattivare la valutazione IA?",
        answer: "Sì. Un amministratore può attivare o disattivare le funzionalità IA per tutta l'azienda nelle Impostazioni.",
      },
      {
        question: "Possiamo usare il nostro dominio per la pagina carriere?",
        answer:
          "Sì. La tua pagina carriere parte da yourcompany.emploist.com e puoi collegare un dominio come careers.yourcompany.com in pochi passaggi, con HTTPS incluso.",
      },
      {
        question: "I candidati devono creare un account per candidarsi?",
        answer:
          "No. I candidati compilano il modulo sulla tua pagina carriere e allegano il CV. Bastano un paio di minuti.",
      },
      {
        question: "Chi nel nostro team può usare Emploist?",
        answer:
          "Tutte le persone che inviti, senza costi aggiuntivi. Gli amministratori gestiscono anche la fatturazione, la pagina carriere e le impostazioni dell'azienda.",
      },
      {
        question: "In quali lingue è disponibile Emploist?",
        answer:
          "Puoi usare Emploist in inglese, francese, tedesco, spagnolo, italiano, giapponese, coreano, polacco, turco e indonesiano, e ognuno nel tuo team sceglie la propria lingua. Le pagine carriere e le email che ricevono i candidati sono inizialmente in inglese e puoi riscriverle in qualsiasi lingua.",
      },
      {
        question: "Possiamo portare via i nostri dati?",
        answer:
          "Sì. Esporta le candidature di qualsiasi posizione in un foglio di calcolo con tutte le candidature e le risposte, insieme a ogni CV.",
      },
      {
        question: "Possiamo usare Emploist da Claude o ChatGPT?",
        answer:
          "Sì. Chiunque nel tuo team può connettere Claude, ChatGPT, Claude Code, Cursor, VS Code o un altro assistente compatibile con MCP e gestire posizioni e candidature in chat. È incluso nel tuo piano. Ogni candidatura valutata da un assistente usa un credito IA, proprio come in Emploist.",
      },
      {
        question: "Cosa può fare un assistente IA in Emploist?",
        answer:
          "Può vedere e modificare posizioni, fasi e moduli di candidatura, leggere candidature e CV, spostare i candidati tra le fasi e commentare. Agisce come la persona che lo ha connesso, con il suo ruolo. Fatturazione, membri del team ed eliminazione dell'azienda o dell'account non sono inclusi. Puoi disconnettere il tuo assistente quando vuoi e un amministratore può disattivare gli assistenti per tutta l'azienda nelle Impostazioni.",
      },
      {
        question: "Possiamo disdire in qualsiasi momento?",
        answer:
          "Sì. Disdici quando vuoi e il tuo piano resta attivo fino alla fine del periodo già pagato. Anche dopo puoi vedere ed esportare tutto.",
      },
    ],
  },

  callToAction: {
    title: "Conosci i candidati migliori già questa settimana.",
    text: (p) =>
      `Prova Emploist gratis per ${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno`, many: `${f.number(p.trialDays)} di giorni`, other: `${f.number(p.trialDays)} giorni` })}. La configurazione richiede pochi minuti e la tua pagina carriere è pronta non appena lo sei tu.`,
    talkToUs: "Contattaci",
  },

  notFound: {
    title: "Pagina non trovata",
    description: "Questa pagina non esiste.",
    heading: "Questa pagina non esiste.",
    text: "Potrebbe essere stata spostata, oppure il link potrebbe contenere un errore di battitura. Ti rimettiamo sulla strada giusta.",
    home: "Vai alla home page",
    blog: "Leggi il blog",
  },

  blog: {
    title: "Blog",
    description:
      "Guide sulla selezione del personale, sulle pagine carriere e sulla gestione delle candidature, oltre alle novità di prodotto dal team di Emploist.",
    heading: "Appunti per assumere bene.",
    emptyTitle: "I primi articoli sono in arrivo.",
    /** HTML. */
    emptyText: (link) =>
      `Stiamo scrivendo guide sulla selezione del personale e su come sfruttare al meglio Emploist. Seguici tramite il ${link("feed RSS")} oppure, nel frattempo, inizia la prova gratuita.`,
    minutesToRead: (minutes) => `${f.number(minutes)} min di lettura`,
    draft: "Bozza",
    readPost: "Leggi l'articolo",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "In inglese",
    updated: (date) => `Aggiornato il ${date}`,
    home: "Home",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "Percorso di navigazione",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Prova Emploist",
    ctaTitle: "Inizia dai candidati migliori.",
    ctaText: (p) =>
      `Prova Emploist gratis per ${f.plural(p.trialDays, { one: `${f.number(p.trialDays)} giorno`, many: `${f.number(p.trialDays)} di giorni`, other: `${f.number(p.trialDays)} giorni` })}, poi ${f.usd(p.priceUsd)} al mese per tutto il team.`,
    defaultAuthor: "Il team di Emploist",
  },

  listedOn: {
    title: "Presente su",
    description:
      "Le directory di software in cui è presente Emploist, la piattaforma per la selezione del personale con pagina carriere e valutazione IA.",
    heading: "Trova Emploist sul web.",
    lead: "Le directory in cui è presente Emploist.",
  },

  legal: {
    lastUpdated: (date) => `Ultimo aggiornamento: ${date}`,
    contents: "Indice",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link) =>
        `Questa è una traduzione dei nostri Termini di servizio, fornita per comodità. La ${link("versione inglese")} è giuridicamente vincolante e si applica in caso di differenze tra le due.`,
      privacy: (link) =>
        `Questa è una traduzione della nostra Informativa sulla privacy, fornita per comodità. In caso di differenze rispetto alla ${link("versione inglese")}, si applica la versione inglese, nei limiti consentiti dalla legge.`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date, link) =>
      `La versione inglese è stata aggiornata il ${date}, dopo la realizzazione di questa traduzione. ${link("Leggi la versione inglese attuale")}.`,
  },
};

export default it;
