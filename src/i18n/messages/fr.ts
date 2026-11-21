// The website's words in French. See en.ts for how this file works.
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("fr");

const fr: Messages = {
  site: {
    title: "Emploist : logiciel de recrutement avec IA et page carrière",
    description: (p) =>
      `Publiez vos offres sur votre page carrière et laissez l’IA classer chaque candidat selon l’offre. ${f.usd(p.priceUsd)} par mois pour toute l’équipe, ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour d’essai gratuit", many: "de jours d’essai gratuit", other: "jours d’essai gratuit" })}.`,
    imageAlt: "Emploist : vos meilleurs candidats, en premier",
    skipToContent: "Aller au contenu",
    home: "Accueil Emploist",
    blogFeedTitle: "Blog Emploist",
    blogFeedDescription: "Guides et nouveautés de l’équipe Emploist.",
    monthlyOffer: (p) =>
      `Essai gratuit de ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour", many: "de jours", other: "jours" })}, puis ${f.usd(p.priceUsd)} par mois pour toute l’équipe.`,
    yearlyOffer: (p) =>
      `Essai gratuit de ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour", many: "de jours", other: "jours" })}, puis ${f.usd(p.yearlyPriceUsd)} par an pour toute l’équipe.`,
  },

  nav: {
    main: "Principale",
    features: "Fonctionnalités",
    careersPage: "Page carrière",
    aiAssistants: "Assistants IA",
    mcp: "MCP",
    /** The last item in the Features menu, after the feature sections. */
    moreFeatures: "Autres fonctionnalités",
    pricing: "Tarifs",
    faq: "FAQ",
    blog: "Blog",
    docs: "Docs",
    signIn: "Se connecter",
    startFreeTrial: "Essai gratuit",
    menu: "Menu",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "Langue",
  },

  footer: {
    tagline:
      "Un logiciel de recrutement avec page carrière et évaluation par IA, pour les équipes qui veulent bien recruter, sans les tâches fastidieuses.",
    product: "Produit",
    resources: "Ressources",
    account: "Compte",
    legal: "Juridique",
    rssFeed: "Flux RSS",
    support: "Assistance",
    llmsTxt: "llms.txt",
    terms: "Conditions d’utilisation",
    privacy: "Politique de confidentialité",
    copyright: (year) => `© ${year} Emploist. Tous droits réservés.`,
    questions: "Des questions ?",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "Démarrer l’essai gratuit",
  },

  hero: {
    eyebrow: "Suivi des candidatures, classées par l’IA",
    title: "Voyez vos meilleures candidatures sans filtres manuels ni ATS complexe",
    lead: "Emploist vous offre une page carrière, un processus de recrutement simple et une IA qui évalue chaque candidature au regard de votre offre. Votre équipe passe moins de temps à trier, et plus de temps avec les bons profils.",
    cta: "Classez vos candidatures",
    seeHowItWorks: "Voir comment ça marche",
    note: (p) =>
      `${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour gratuit", many: "de jours gratuits", other: "jours gratuits" })}, puis ${f.usd(p.priceUsd)} par mois. Sans frais par utilisateur.`,
    screenshotAlt:
      "Les candidatures à une offre de Senior Product Designer dans Emploist, triées par meilleure compatibilité : 91 %, 88 %, 86 %, etc., avec le nom, l’e-mail et le nombre de commentaires de chaque candidat.",
  },

  howItWorks: {
    eyebrow: "Comment ça marche",
    title: "De l’offre à l’embauche, au même endroit.",
    steps: [
      {
        title: "Publiez une offre",
        text: "Rédigez la description, choisissez les questions à poser aux candidats et publiez l’offre sur votre page carrière.",
      },
      {
        title: "Les candidats postulent",
        text: "Ils trouvent l’offre sur votre page carrière et postulent en deux ou trois minutes. Aucun compte n’est nécessaire.",
      },
      {
        title: "L’IA évalue chaque candidature",
        text: "Chaque candidature reçoit un score de compatibilité avec l’offre, et une analyse détaillée, facile à lire pour votre équipe.",
      },
      {
        title: "Faites avancer les candidats",
        text: "Examinez, commentez et faites passer les candidats d’une étape à l’autre. Un e-mail part à chaque étape.",
      },
    ],
  },

  ranking: {
    eyebrow: "Évaluation par IA",
    title: "Un score de compatibilité vraiment lisible.",
    lead: "Chaque candidature est évaluée au regard de l’offre dès son arrivée. Au lieu d’un chiffre mystérieux, vous voyez comment chaque candidat se situe sur les critères qui comptent pour le poste.",
    points: [
      {
        title: "Une analyse claire.",
        text: "Les compétences, l’expérience, la séniorité et les qualifications reçoivent chacune un score : vous voyez exactement où une personne se démarque.",
      },
      {
        title: "Plus qu’un CV.",
        text: "Les réponses aux questions de votre formulaire de candidature sont aussi prises en compte.",
      },
      {
        title: "Équitable et cohérent.",
        text: "Tous les candidats à une même offre sont évalués de la même façon, selon les mêmes critères.",
      },
      {
        title: "Vous gardez la main.",
        text: "La compatibilité est là pour guider votre examen, pas pour le remplacer. Modifiez une offre, et vous pouvez réévaluer ses candidatures.",
      },
    ],
    screenshotAlt:
      "La compatibilité de 91 % d’un candidat dans Emploist, détaillée en compétences (93), expérience (88), séniorité (95) et qualifications (85), chacune avec une courte explication.",
    caption: (p) =>
      `Chaque évaluation utilise un crédit IA. Votre forfait en inclut ${f.number(p.credits)} chaque mois.`,
  },

  careersPage: {
    eyebrow: "Page carrière",
    title: "Une page carrière prête dès le premier jour.",
    lead: "Chaque entreprise dispose d’une page carrière rapide et soignée, à son logo et à sa couleur. Les nouvelles offres y apparaissent dès que vous les publiez, et les candidatures arrivent directement dans la boîte de réception de l’offre.",
    screenshotAlt:
      "La page carrière de Fieldnote Labs : un en-tête avec le logo de l’entreprise, une courte présentation et les postes ouverts regroupés par département, avec des filtres par département et par lieu.",
    mobileScreenshotAlt:
      "Une page d’offre sur un téléphone : Senior Product Designer à Berlin, en hybride et à temps plein, avec un bouton « Apply for this job » et la description du poste.",
    facts: [
      {
        title: "Votre adresse ou votre domaine",
        text: "Commencez avec yourcompany.emploist.com, puis connectez votre propre domaine, comme careers.yourcompany.com.",
      },
      {
        title: "Facile à parcourir",
        text: "Les postes ouverts sont regroupés par département, et les candidats peuvent les filtrer par département et par lieu.",
      },
      {
        title: "Rapide sur tous les écrans",
        text: "Les pages se chargent vite et s’affichent parfaitement partout, du téléphone au grand écran.",
      },
      {
        title: "Postuler en quelques minutes",
        text: "Ni compte ni mot de passe. Les candidats remplissent votre formulaire, joignent leur CV, et c’est terminé.",
      },
      {
        title: "Transparence sur l’IA",
        text: "Votre page indique aux candidats lorsque l’IA aide à examiner leur candidature.",
      },
      {
        title: "Protection contre le spam",
        text: "Une protection intégrée tient le spam à l’écart de votre boîte de réception : vous ne voyez que de vrais candidats.",
      },
    ],
  },

  designInCode: {
    eyebrow: "Design par le code",
    title: "Exactement à l’image de votre site web.",
    lead: "Le design par défaut fait déjà bonne impression avec simplement votre logo et votre couleur. Pour aller plus loin, chaque page de votre site carrière est faite de HTML, de CSS et de modèles Liquid que vous pouvez modifier.",
    points: [
      "Modifiez le code directement dans Emploist, avec un aperçu en direct aux formats ordinateur et mobile.",
      "Ou téléchargez le code, modifiez-le dans votre propre éditeur ou avec un assistant IA, et prévisualisez-le sur votre ordinateur en une seule commande.",
      "Les erreurs sont détectées avant l’enregistrement : les candidats voient toujours une page qui fonctionne.",
    ],
    screenshotAlt:
      "L’éditeur de code de la page carrière dans Emploist : le modèle de mise en page avec coloration syntaxique à gauche, et un aperçu en direct de la page carrière à droite.",
  },

  formsAndTeam: {
    label: "Formulaires de candidature et travail en équipe",
    forms: {
      eyebrow: "Formulaires de candidature",
      title: "Demandez ce qui compte pour chaque poste.",
      text: "Créez un formulaire pour chaque offre avec des réponses courtes et longues, des questions oui ou non, des choix, des listes déroulantes, des échelles et des cases à cocher, puis faites-les glisser dans l’ordre de votre choix.",
      screenshotAlt:
        "Un formulaire de candidature dans Emploist : nom complet, e-mail et CV, puis un numéro de téléphone, un lien vers un portfolio, une question à choix unique sur les années d’expérience et une question à choix multiples sur les outils.",
    },
    team: {
      eyebrow: "Travail en équipe",
      title: "Décidez ensemble.",
      text: "Commentez n’importe quelle candidature et @mentionnez un collègue pour avoir son avis. Invitez toute votre équipe sans frais supplémentaires.",
      screenshotAlt:
        "Les commentaires de trois collègues sur une candidature, et un nouveau commentaire qui mentionne Priya Shah, choisie dans une liste de collègues.",
    },
  },

  stagesAndEmails: {
    eyebrow: "Étapes et e-mails",
    title: "Tenez les candidats informés, automatiquement.",
    lead: "Chaque offre a ses propres étapes. Faites passer un candidat à l’étape suivante, et l’e-mail de cette étape part tout seul : rédigé une seule fois, personnalisé pour chacun.",
    points: [
      "Partez d’étapes prêtes à l’emploi, puis renommez-les, réorganisez-les et ajoutez les vôtres pour les adapter à chaque poste.",
      "Chaque étape est fournie avec un e-mail prêt à l’emploi. Personnalisez-le avec des informations comme le prénom et l’intitulé du poste, et vérifiez-le dans un aperçu en direct.",
      "Vous avez déplacé quelqu’un par erreur ? Annulez, et l’e-mail ne part pas.",
      "Les e-mails reprennent la mise en page et le logo de votre entreprise, et les réponses arrivent à l’adresse de votre choix.",
    ],
    editorScreenshotAlt:
      "L’e-mail de l’étape « Interviewing » dans Emploist. L’objet et le message utilisent des variables pour le prénom du candidat, l’intitulé du poste et le nom de l’entreprise.",
    previewScreenshotAlt:
      "L’e-mail final, tel que le reçoit un candidat prénommé Sam : Fieldnote Labs en haut, une invitation personnelle à un entretien pour le poste de Senior Product Designer et un lien vers les postes ouverts.",
  },

  aiAssistants: {
    eyebrow: "Assistants IA",
    title: "Gérez vos recrutements depuis votre assistant IA.",
    lead: "Connectez Claude, ChatGPT ou un autre assistant compatible MCP, et travaillez sur vos offres et vos candidats simplement en le lui demandant.",
    points: [
      {
        title: "Interrogez-le sur vos candidats.",
        text: "Trouvez les candidats les plus compatibles avec une offre, faites le point sur les nouvelles candidatures ou obtenez un résumé rapide des réponses d’un candidat.",
      },
      {
        title: "Passez à l’action.",
        text: "Créez et publiez des offres, déplacez des candidats d’une étape à l’autre et laissez des commentaires, directement depuis la discussion.",
      },
      {
        title: "Gardez le contrôle.",
        text: "Connectez votre assistant avec les mêmes accès que vous, et rien de plus. Déconnectez-le à tout moment, et il s’arrête immédiatement.",
      },
    ],
    worksWith: "Compatible avec",
    otherClients: "les assistants IA populaires",
    chat: {
      label: "Exemple de discussion avec un assistant IA connecté à Emploist",
      assistant: "Votre assistant IA",
      /** After "Emploist", hidden on phones: "Emploist connected". */
      connected: "connecté",
      /** Read out before a tool's name: "Used Emploist list_applications". */
      used: "Outil utilisé :",
      question: "Quels candidats au poste de Senior Product Designer correspondent le mieux ?",
      answerIntro: "Voici les trois candidats les plus compatibles dans la boîte de réception :",
      /** A match on the list, e.g. "91% match"; the word is hidden on phones. */
      match: (percent) => ({ value: f.percent(percent), label: "de compatibilité" }),
      answerOutro: "Diego est en tête pour la séniorité et les compétences. Voulez-vous que je fasse avancer l’un d’eux ?",
      request: "Déplace Diego vers Phone screen.",
      done: "C’est fait. Diego est maintenant à l’étape Phone screen, et l’e-mail de cette étape part dans 2 minutes. Je peux annuler d’ici là si vous changez d’avis.",
      placeholder: "Posez une question sur vos offres et vos candidats",
    },
    caption: "Chacun connecte son propre assistant en quelques étapes.",
  },

  /** The /mcp/ landing page. */
  mcp: {
    description:
      "Connectez Claude, ChatGPT et d’autres assistants IA à Emploist avec MCP. Posez des questions sur les candidatures, changez d’étape et créez des offres depuis le chat, avec vos propres droits.",
    eyebrow: "MCP",
    heading: "Recrutez depuis le chat que vous utilisez déjà.",
    lead: "MCP relie Emploist à Claude, ChatGPT et d’autres assistants. Vous posez la question en clair. L’assistant travaille dans Emploist, sous votre compte.",
    whatTitle: "Qu’est-ce que MCP ?",
    whatLead:
      "MCP signifie Model Context Protocol. C’est une façon ouverte pour un assistant IA d’utiliser une autre application en toute sécurité.",
    whatPoints: [
      {
        title: "Un connecteur, pas un nouveau produit.",
        text: "Emploist conserve vos offres et candidatures. MCP est le moyen pour votre assistant d’y accéder.",
      },
      {
        title: "Une seule adresse serveur.",
        text: "Le serveur MCP hébergé d’Emploist est à mcp.emploist.com. Vous collez cette adresse dans Claude, ChatGPT ou un autre client compatible MCP.",
      },
      {
        title: "Inclus dans votre forfait.",
        text: "Chacun dans votre équipe peut connecter son propre assistant. Classer une candidature depuis le chat consomme le même crédit IA que dans Emploist.",
      },
    ],
    howTitle: "Comment ça marche",
    howSteps: [
      {
        title: "Vous connectez une fois.",
        text: "Ouvrez MCP dans Emploist, choisissez votre assistant et suivez les étapes. Connectez-vous à Emploist quand on vous le demande. Aucune clé API à copier.",
      },
      {
        title: "Vous demandez dans le chat.",
        text: "Mentionnez Emploist, puis demandez qui correspond à un poste, faites passer quelqu’un à l’étape suivante, laissez un commentaire ou rédigez une offre.",
      },
      {
        title: "Emploist fait le travail.",
        text: "L’assistant appelle les outils Emploist sous votre connexion. Les actions d’écriture demandent une confirmation avant d’être enregistrées.",
      },
    ],
    canDoTitle: "Ce que vous pouvez demander",
    canDo: [
      "Quels candidats pour Senior Product Designer correspondent le mieux ?",
      "Passe Priya à Entretien téléphonique et dis-moi quand l’e-mail d’étape part.",
      "Résume les nouvelles candidatures d’aujourd’hui.",
      "Rédige une offre Support client pour Berlin et montre-moi le formulaire avant publication.",
      "Laisse un commentaire sur la candidature de Sara pour Priya.",
    ],
    connectTitle: "Connecter un assistant",
    connectLead: "La page MCP d’Emploist a un onglet pour chaque client. L’URL du serveur est la même partout :",
    serverUrl: "https://mcp.emploist.com",
    connectClients: [
      {
        name: "Claude",
        text: "Dans Claude, ouvrez Personnaliser → Connecteurs, ajoutez un connecteur personnalisé, collez l’URL et connectez-vous à Emploist.",
      },
      {
        name: "ChatGPT",
        text: "Dans ChatGPT sur le web, ouvrez Plugins, ajoutez un serveur MCP personnalisé, collez l’URL, créez le plugin, puis mentionnez-le avec @.",
      },
      {
        name: "Autres clients",
        text: "Cursor, VS Code, Claude Code et d’autres clients MCP utilisent la même URL. La page MCP d’Emploist détaille les étapes pour chacun.",
      },
    ],
    controlTitle: "Vous gardez le contrôle",
    controlPoints: [
      {
        title: "Votre rôle, rien de plus.",
        text: "L’assistant ne peut faire que ce que vous pouvez déjà faire dans Emploist. Facturation, invitations d’équipe et suppression de l’entreprise restent hors de portée.",
      },
      {
        title: "Confirmation pour les écritures.",
        text: "Faire avancer un candidat ou créer une offre demande d’abord une confirmation. Refusez tout ce qui paraît incorrect.",
      },
      {
        title: "Déconnexion à tout moment.",
        text: "Sur la page MCP, déconnectez un assistant et il s’arrête. Les admins peuvent aussi désactiver MCP pour toute l’entreprise.",
      },
    ],
    worksWith: "Compatible avec",
    guidesTitle: "Guides",
    guidesLead: "Configuration pas à pas et exemples.",
    guideClaude: "Gérer le recrutement depuis Claude avec MCP",
    guideChatgpt: "Meilleurs plugins ChatGPT pour les responsables RH",
    guideDocs: "Connecter un assistant IA",
    cta: "Connectez votre assistant IA",
    copySetup: "Copier la config MCP",
    copiedSetup: "Copié",
    setupCopy: (u: { mcpDocs: string; serverUrl: string }) =>
      `Emploist est un logiciel de suivi des candidatures. Ce texte indique à un assistant IA comment se connecter au serveur MCP d’Emploist et ce qu’il peut faire après connexion.

Connecte le serveur MCP d’Emploist pour gérer le recrutement depuis ce chat.

Docs MCP : ${u.mcpDocs}
URL du serveur : ${u.serverUrl}
Authentification : OAuth (se connecter avec Emploist quand demandé)

Après connexion, aide pour les offres et candidatures dans Emploist : lister et classer les candidatures, déplacer les personnes entre les étapes, laisser des commentaires, et créer ou publier des offres. Travaille uniquement avec mes droits Emploist. Confirme avant toute action d’écriture.
`,
  },

  details: {
    eyebrow: "Et plus encore",
    title: "Les détails qui facilitent le recrutement.",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "Export à tout moment",
        text: "Téléchargez les candidatures d’une offre sous forme de tableur, avec tous les CV dans le même fichier ZIP.",
      },
      {
        title: "Les CV à portée de main",
        text: "Les CV PDF et Word s’ouvrent dans Emploist, à côté de la candidature. Rien à télécharger.",
      },
      {
        title: "Offres illimitées",
        text: "Publiez autant d’offres que nécessaire, et retrouvez-les en quelques secondes grâce à la recherche et aux filtres.",
      },
      {
        title: "Dupliquez une offre",
        text: "Vous recrutez pour un poste similaire ? Copiez les informations, le formulaire, les étapes et les e-mails d’une offre en un clic.",
      },
      {
        title: "Sans mot de passe",
        text: "Connectez-vous avec Google, Microsoft ou un code à usage unique envoyé par e-mail.",
      },
      {
        title: "Privé par défaut",
        text: "Les CV sont stockés de façon privée, et seuls les membres de votre équipe peuvent les ouvrir.",
      },
      {
        title: "Des notifications utiles",
        text: "Recevez une notification quand quelqu’un vous mentionne ou commente une candidature que vous avez commentée.",
      },
      {
        title: "Clair ou sombre",
        text: "Emploist suit le thème de votre système, ou vous pouvez choisir celui qui vous plaît.",
      },
    ],
  },

  pricing: {
    eyebrow: "Tarifs",
    title: "Un seul forfait, tout compris.",
    lead: "Pas de formules à plusieurs niveaux ni de frais par utilisateur. Un prix unique, payé au mois ou à l’année, couvre toute votre entreprise, quel que soit le nombre de personnes que vous invitez.",
    creditTitle: "Qu’est-ce qu’un crédit IA ?",
    creditText: (p) =>
      `Évaluer une candidature utilise un crédit. Votre forfait en inclut ${f.number(p.credits)} chaque mois, ou ${f.number(p.yearlyCredits)} ${f.plural(p.yearlyCredits, { one: "versé", other: "versés" })} en une fois si vous payez à l’année, et vous pouvez en acheter d’autres à tout moment.`,
    billing: "Facturation",
    monthly: "Mensuel",
    yearly: "Annuel",
    save: (percent) => `Économisez ${f.percent(percent)}`,
    perMonth: "par mois",
    perYear: "par an",
    monthlyCredits: (credits) =>
      `${f.number(credits)} ${f.plural(credits, { one: "crédit IA", many: "de crédits IA", other: "crédits IA" })} par mois`,
    yearlyCredits: (credits) =>
      `${f.number(credits)} ${f.plural(credits, { one: "crédit IA versé", many: "de crédits IA versés", other: "crédits IA versés" })} en une fois`,
    startTrial: (days) =>
      `Essai gratuit de ${f.number(days)} ${f.plural(days, { one: "jour", many: "de jours", other: "jours" })}`,
    included: [
      "Offres illimitées",
      "Toute votre équipe, sans frais par utilisateur",
      "Une page carrière sur votre propre domaine",
      "Le contrôle total du code de votre page carrière",
      "Formulaires de candidature et étapes de recrutement",
      "E-mails automatiques aux candidats, dans votre propre mise en page",
      "Commentaires, mentions et notifications",
      "Export de vos candidatures à tout moment",
    ],
    /** HTML. */
    trial: (p) =>
      `<strong>L’essai gratuit</strong> vous offre ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour", many: "de jours", other: "jours" })} et ${f.number(p.trialCredits)} ${f.plural(p.trialCredits, { one: "crédit IA", many: "de crédits IA", other: "crédits IA" })} pour tout essayer. Rien ne vous est facturé avant sa fin, et vous pouvez résilier à tout moment.`,
    moreCredits: "Besoin de plus de crédits ?",
    packsNote: "Achetez un pack quand vous le souhaitez. Les packs n’expirent jamais.",
    packsCaption: "Packs de crédits et leurs prix",
    creditsColumn: "Crédits",
    priceColumn: "Prix",
    packCredits: (credits) =>
      `${f.number(credits)} ${f.plural(credits, { one: "crédit", many: "de crédits", other: "crédits" })}`,
  },

  faq: {
    eyebrow: "FAQ",
    title: "Vos questions, nos réponses.",
    /** HTML. `email` is a link to the support address. */
    intro: (email) => `Vous ne trouvez pas ce que vous cherchez ? Écrivez-nous à ${email} et nous vous répondrons.`,
    items: (p) => [
      {
        question: "Comment fonctionne l’essai gratuit ?",
        answer: `Vous disposez de ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour", many: "de jours", other: "jours" })} avec toutes les fonctionnalités, et de ${f.number(p.trialCredits)} ${f.plural(p.trialCredits, { one: "crédit IA", many: "de crédits IA", other: "crédits IA" })} pour essayer Emploist sur de vraies candidatures. Rien ne vous est facturé avant la fin de l’essai, et vous pouvez résilier à tout moment d’ici là.`,
      },
      {
        question: "Qu’est-ce qu’un crédit IA ?",
        answer: `Évaluer une candidature utilise un crédit. Votre forfait inclut ${f.number(p.credits)} ${f.plural(p.credits, { one: "crédit", many: "de crédits", other: "crédits" })} chaque mois, ou ${f.number(p.yearlyCredits)} ${f.plural(p.yearlyCredits, { one: "versé", other: "versés" })} en une fois si vous payez à l’année. S’il vous en faut plus, les packs commencent à ${f.number(p.firstPack.credits)} ${f.plural(p.firstPack.credits, { one: "crédit", many: "de crédits", other: "crédits" })} pour ${f.usd(p.firstPack.priceUsd)}, et ils n’expirent jamais.`,
      },
      {
        question: "Peut-on payer à l’année ?",
        answer: `Oui. Le forfait annuel coûte ${f.usd(p.yearlyPriceUsd)} par an, soit ${f.percent(p.yearlySavingsPercent)} de moins qu’en payant au mois, avec ${f.number(p.yearlyCredits)} ${f.plural(p.yearlyCredits, { one: "crédit IA versé", many: "de crédits IA versés", other: "crédits IA versés" })} en une fois. Il commence par le même essai gratuit de ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour", many: "de jours", other: "jours" })}. Si vous payez au mois, vous pouvez passer à l’annuel à tout moment dans Facturation : vous payez alors l’année, déduction faite des jours non utilisés de votre mois en cours.`,
      },
      {
        question: "Que se passe-t-il si nous n’avons plus de crédits ?",
        answer:
          "Rien n’est perdu. Les candidatures continuent d’arriver, et vous pouvez acheter des crédits à tout moment pour les évaluer.",
      },
      {
        question: "Comment l’IA évalue-t-elle une candidature ?",
        answer:
          "Elle lit chaque CV et les réponses à vos questions, puis les compare à l’offre que vous avez publiée. Les compétences, l’expérience, la séniorité et les qualifications reçoivent chacune un score, puis ces scores sont combinés en un score de compatibilité unique : vous voyez ainsi pourquoi chaque candidat occupe sa place dans le classement.",
      },
      {
        question: "Peut-on désactiver l’évaluation par IA ?",
        answer:
          "Oui. Un administrateur peut activer ou désactiver les fonctionnalités IA pour toute votre entreprise dans Paramètres.",
      },
      {
        question: "Peut-on utiliser notre propre domaine pour la page carrière ?",
        answer:
          "Oui. Votre page carrière est d’abord accessible à l’adresse yourcompany.emploist.com, et vous pouvez connecter un domaine comme careers.yourcompany.com en quelques étapes, HTTPS inclus.",
      },
      {
        question: "Les candidats ont-ils besoin d’un compte pour postuler ?",
        answer:
          "Non. Les candidats remplissent le formulaire sur votre page carrière et joignent leur CV. Cela prend deux ou trois minutes.",
      },
      {
        question: "Qui, dans notre équipe, peut utiliser Emploist ?",
        answer:
          "Toutes les personnes que vous invitez, sans frais supplémentaires. Les administrateurs gèrent en plus la facturation, la page carrière et les paramètres de l’entreprise.",
      },
      {
        question: "Dans quelles langues Emploist est-il disponible ?",
        answer:
          "Vous pouvez utiliser Emploist en anglais, français, allemand, espagnol, italien, japonais, coréen, polonais, turc et indonésien, et chaque membre de votre équipe choisit sa langue. Les pages carrière et les e-mails envoyés aux candidats sont en anglais au départ, et vous pouvez les réécrire dans n’importe quelle langue.",
      },
      {
        question: "Peut-on récupérer nos données ?",
        answer:
          "Oui. Exportez les candidatures de n’importe quelle offre sous forme de tableur regroupant chaque candidature et chaque réponse, accompagné de tous les CV.",
      },
      {
        question: "Peut-on utiliser Emploist depuis Claude ou ChatGPT ?",
        answer:
          "Oui. Chaque membre de votre équipe peut connecter Claude, ChatGPT, Grok, Gemini, Copilot ou un autre assistant compatible MCP, et gérer les offres et les candidatures en discutant. C’est inclus dans votre forfait. Évaluer une candidature depuis un assistant utilise un crédit IA, comme dans Emploist.",
      },
      {
        question: "Que peut faire un assistant IA dans Emploist ?",
        answer:
          "Il peut consulter et modifier les offres, les étapes et les formulaires de candidature, lire les candidatures et les CV, déplacer les candidats d’une étape à l’autre et commenter. Il agit au nom de la personne qui l’a connecté, avec son rôle. La facturation, les membres de l’équipe et la suppression de votre entreprise ou de votre compte ne sont pas inclus. Vous pouvez déconnecter votre assistant à tout moment, et un administrateur peut désactiver les assistants pour toute l’entreprise dans Paramètres.",
      },
      {
        question: "Peut-on résilier à tout moment ?",
        answer:
          "Oui. Résiliez quand vous le souhaitez : votre forfait reste actif jusqu’à la fin de la période payée. Vous pouvez ensuite toujours tout consulter et tout exporter.",
      },
    ],
  },

  callToAction: {
    title: "Rencontrez vos meilleurs candidats dès cette semaine.",
    text: (p) =>
      `Essayez Emploist gratuitement pendant ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour", many: "de jours", other: "jours" })}. La configuration prend quelques minutes, et votre page carrière est prête dès que vous l’êtes.`,
    talkToUs: "Nous contacter",
  },

  notFound: {
    title: "Page introuvable",
    description: "Cette page n’existe pas.",
    heading: "Cette page n’existe pas.",
    text: "Elle a peut-être été déplacée, ou le lien contient une faute de frappe. Voici de quoi retrouver votre chemin.",
    home: "Aller à l’accueil",
    blog: "Lire le blog",
  },

  docs: {
    title: "Documentation Emploist",
    lead: "Suivez ces docs officiels pour avancer dans Emploist.",
    copyMarkdown: "Copier le markdown",
    copied: "Copié",
    discussWith: "Discuter avec",
    discussPrompt: (title, url) =>
      `Aide-moi avec ce guide Emploist : « ${title} ». Lis ${url} et réponds à mes questions.`,
  },

  blog: {
    title: "Blog",
    description:
      "Des guides sur le recrutement, les pages carrière et le suivi des candidatures, ainsi que les nouveautés de l’équipe Emploist.",
    heading: "Nos notes pour bien recruter.",
    emptyTitle: "Les premiers articles arrivent bientôt.",
    /** HTML. */
    emptyText: (link) =>
      `Nous rédigeons des guides sur le recrutement et sur la meilleure façon de tirer parti d’Emploist. Suivez nos publications grâce au ${link("flux RSS")}, ou démarrez votre essai gratuit en attendant.`,
    minutesToRead: (minutes) => `${minutes} min de lecture`,
    draft: "Brouillon",
    readPost: "Lire l’article",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "En anglais",
    updated: (date) => `Mis à jour le ${date}`,
    home: "Accueil",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "Fil d’Ariane",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Essayer Emploist",
    ctaTitle: "Vos meilleurs candidats, en premier.",
    ctaText: (p) =>
      `Essayez Emploist gratuitement pendant ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "jour", many: "de jours", other: "jours" })}, puis ${f.usd(p.priceUsd)} par mois pour toute votre équipe.`,
    defaultAuthor: "L’équipe Emploist",
    writtenBy: (name) => `Écrit par ${name}`,
  },

  listedOn: {
    title: "Référencé sur",
    description:
      "Les annuaires de logiciels qui référencent Emploist, le logiciel de recrutement avec page carrière, suivi des candidatures et évaluation par IA.",
    heading: "Retrouvez Emploist sur le web.",
    lead: "Les annuaires où Emploist est référencé.",
  },

  legal: {
    lastUpdated: (date) => `Dernière mise à jour : ${date}`,
    contents: "Sommaire",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link) =>
        `Ceci est une traduction de nos Conditions d’utilisation, fournie pour votre commodité. La ${link("version anglaise")} est juridiquement contraignante et s’applique en cas de divergence entre les deux.`,
      privacy: (link) =>
        `Ceci est une traduction de notre Politique de confidentialité, fournie pour votre commodité. En cas de divergence avec la ${link("version anglaise")}, c’est la version anglaise qui s’applique, dans la mesure permise par la loi.`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date, link) =>
      `La version anglaise a été mise à jour le ${date}, après la réalisation de cette traduction. ${link("Lire la version anglaise actuelle")}.`,
  },
};

export default fr;
