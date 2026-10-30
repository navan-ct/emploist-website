// The website's words in Spanish, translated from en.ts (the source). Neutral
// Spanish for Spain and Latin America, with tú, matching the app's words:
// vacante (job), candidatura (application), candidato (applicant), página de
// empleo (careers page), etapa (stage), afinidad (match), evaluar (rank).
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("es");

/** "1 día", "14 días", "1.000.000 de días". */
const dayCount = (count: number) =>
  `${f.number(count)} ${f.plural(count, { one: "día", many: "de días", other: "días" })}`;

/** "1 crédito", "1000 créditos", "1.000.000 de créditos". */
const creditCount = (count: number) =>
  `${f.number(count)} ${f.plural(count, { one: "crédito", many: "de créditos", other: "créditos" })}`;

const es: Messages = {
  site: {
    title: "Emploist: ATS con evaluación por IA y página de empleo",
    description: (p) =>
      `Publica vacantes en tu página de empleo y la IA evaluará cada candidatura según el puesto. ${f.usd(p.priceUsd)} al mes para todo tu equipo, con prueba gratuita de ${dayCount(p.trialDays)}.`,
    imageAlt: "Emploist: tus mejores candidatos, primero",
    skipToContent: "Ir al contenido",
    home: "Inicio de Emploist",
    blogFeedTitle: "Blog de Emploist",
    blogFeedDescription: "Guías y novedades del equipo de Emploist.",
    monthlyOffer: (p) =>
      `Prueba gratuita de ${dayCount(p.trialDays)} y, después, ${f.usd(p.priceUsd)} al mes para todo el equipo.`,
    yearlyOffer: (p) =>
      `Prueba gratuita de ${dayCount(p.trialDays)} y, después, ${f.usd(p.yearlyPriceUsd)} al año para todo el equipo.`,
  },

  nav: {
    main: "Principal",
    features: "Funciones",
    careersPage: "Página de empleo",
    aiAssistants: "Asistentes de IA",
    pricing: "Precios",
    faq: "FAQ",
    blog: "Blog",
    signIn: "Iniciar sesión",
    startFreeTrial: "Prueba gratis",
    menu: "Menú",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "Idioma",
  },

  footer: {
    tagline:
      "Seguimiento de candidatos con página de empleo y evaluación con IA, para equipos que quieren contratar bien sin perder tiempo en tareas repetitivas.",
    product: "Producto",
    resources: "Recursos",
    account: "Cuenta",
    legal: "Legal",
    rssFeed: "Feed RSS",
    support: "Ayuda",
    terms: "Términos del servicio",
    privacy: "Política de privacidad",
    copyright: (year) => `© ${year} Emploist. Todos los derechos reservados.`,
    questions: "¿Tienes preguntas?",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "Empieza tu prueba gratuita",
  },

  hero: {
    eyebrow: "Seguimiento de candidatos con evaluación por IA",
    title: "Tus mejores candidatos, primero.",
    lead: "Emploist te ofrece una página de empleo, un proceso de selección sencillo y una IA que evalúa cada candidatura según la descripción del puesto. Tu equipo dedica menos tiempo a filtrar y más a las personas que encajan.",
    seeHowItWorks: "Ver cómo funciona",
    note: (p) => `${dayCount(p.trialDays)} gratis y luego ${f.usd(p.priceUsd)} al mes. Sin cargos por usuario.`,
    screenshotAlt:
      "Las candidaturas a una vacante de Senior Product Designer en Emploist, ordenadas por mayor afinidad: 91 %, 88 %, 86 %, etc., con el nombre, el correo y el número de comentarios de cada candidato.",
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "De la vacante a la contratación, en un solo lugar.",
    steps: [
      {
        title: "Publica una vacante",
        text: "Escribe la descripción, elige las preguntas que quieres que respondan y publícala en tu página de empleo.",
      },
      {
        title: "Llegan las candidaturas",
        text: "Los candidatos encuentran la vacante en tu página de empleo y envían su candidatura en un par de minutos. Sin necesidad de crear una cuenta.",
      },
      {
        title: "La IA evalúa cada candidatura",
        text: "Cada candidatura recibe una puntuación de afinidad con la vacante, con un desglose que tu equipo puede leer.",
      },
      {
        title: "Haz avanzar a los candidatos",
        text: "Revisa, comenta y mueve a los candidatos por tus etapas. En cada paso se envían correos.",
      },
    ],
  },

  ranking: {
    eyebrow: "Evaluación con IA",
    title: "Una puntuación de afinidad que de verdad se entiende.",
    lead: "Cada candidatura se evalúa según la vacante en cuanto llega. En lugar de un número misterioso, ves cómo encaja cada candidato en lo que importa para el puesto.",
    points: [
      {
        title: "Un desglose claro.",
        text: "Habilidades, experiencia, nivel profesional y titulaciones se puntúan por separado, para que veas exactamente en qué destaca cada persona.",
      },
      {
        title: "Más que un currículum.",
        text: "Las respuestas a las preguntas de tu formulario de candidatura también se tienen en cuenta.",
      },
      {
        title: "Justa y coherente.",
        text: "Todos los candidatos a una vacante se evalúan de la misma forma, con los mismos criterios.",
      },
      {
        title: "Tú tienes el control.",
        text: "La afinidad está para orientar tu revisión, no para sustituirla. Si actualizas una vacante, puedes volver a evaluar a sus candidatos.",
      },
    ],
    screenshotAlt:
      "La afinidad del 91 % de un candidato en Emploist, desglosada en habilidades (93), experiencia (88), nivel profesional (95) y titulaciones (85), cada una con una breve explicación.",
    caption: (p) => `Cada evaluación usa un crédito de IA. Tu plan incluye ${f.number(p.credits)} cada mes.`,
  },

  careersPage: {
    eyebrow: "Página de empleo",
    title: "Una página de empleo lista desde el primer día.",
    lead: "Cada empresa recibe una página de empleo rápida y cuidada, con su logo y su color. Las nuevas vacantes aparecen en cuanto las publicas, y las candidaturas llegan directamente a la bandeja de entrada de cada vacante.",
    screenshotAlt:
      "La página de empleo de Northwind Labs: un encabezado con el logo de la empresa, una breve introducción y las vacantes abiertas agrupadas por departamento, con filtros por departamento y ubicación.",
    mobileScreenshotAlt:
      "La página de una vacante en un teléfono: Senior Product Designer en Berlin, híbrida y a tiempo completo, con un botón “Apply for this job” y la descripción del puesto.",
    facts: [
      {
        title: "Tu dirección o tu dominio",
        text: "Empieza en yourcompany.emploist.com y, después, conecta tu propio dominio, como careers.yourcompany.com.",
      },
      {
        title: "Fácil de explorar",
        text: "Las vacantes abiertas se agrupan por departamento, y los candidatos pueden filtrarlas por departamento y ubicación.",
      },
      {
        title: "Rápida en cualquier pantalla",
        text: "Las páginas cargan rápido y se ven muy bien en todas partes, desde el teléfono hasta los monitores más anchos.",
      },
      {
        title: "Candidaturas en minutos",
        text: "Sin cuentas ni contraseñas. Los candidatos completan tu formulario, adjuntan su currículum y listo.",
      },
      {
        title: "Transparente con la IA",
        text: "Tu página avisa a los candidatos cuando la IA ayuda a revisar su candidatura.",
      },
      {
        title: "Protegida contra el spam",
        text: "La protección integrada mantiene el spam fuera de tu bandeja de entrada, para que solo veas candidatos reales.",
      },
    ],
  },

  designInCode: {
    eyebrow: "Diseño con código",
    title: "Haz que se vea igual que tu sitio web.",
    lead: "El diseño predeterminado queda bien solo con tu logo y tu color. Cuando quieras más, cada página de tu sitio de empleo es HTML, CSS y plantillas Liquid que puedes cambiar.",
    points: [
      "Edita directamente en Emploist, con una vista previa en directo en tamaño escritorio y móvil.",
      "O descarga el código, cámbialo en tu propio editor o con un asistente de IA, y revisa la vista previa en tu dispositivo con un solo comando.",
      "Los errores se detectan antes de guardar, así que los candidatos siempre ven una página que funciona.",
    ],
    screenshotAlt:
      "El editor de código de la página de empleo en Emploist: la plantilla base con resaltado de sintaxis a la izquierda y una vista previa en directo de la página de empleo a la derecha.",
  },

  formsAndTeam: {
    label: "Formularios de candidatura y trabajo en equipo",
    forms: {
      eyebrow: "Formularios de candidatura",
      title: "Pregunta lo que importa en cada puesto.",
      text: "Crea un formulario para cada vacante con respuestas cortas y largas, preguntas de sí o no, opciones, listas desplegables, escalas y casillas de verificación, y ordénalo todo con solo arrastrar.",
      screenshotAlt:
        "Un formulario de candidatura en Emploist: nombre completo, correo electrónico y currículum; después, un número de teléfono, un enlace al portafolio, una pregunta de opción única sobre los años de experiencia y una pregunta de opción múltiple sobre herramientas.",
    },
    team: {
      eyebrow: "Trabajo en equipo",
      title: "Decide con tu equipo.",
      text: "Comenta cualquier candidatura y @menciona a un compañero para conocer su opinión. Invita a todo tu equipo sin cargo adicional.",
      screenshotAlt:
        "Comentarios de tres compañeros en una candidatura y un nuevo comentario que menciona a Priya Shah, elegida de una lista de compañeros.",
    },
  },

  stagesAndEmails: {
    eyebrow: "Etapas y correos",
    title: "Mantén informados a los candidatos, automáticamente.",
    lead: "Cada vacante tiene sus propias etapas. Mueve a un candidato a la siguiente y el correo de esa etapa se envía solo: lo escribes una vez y llega personalizado a cada persona.",
    points: [
      "Empieza con etapas listas para usar y, después, cámbiales el nombre, reordénalas y añade las tuyas para adaptarlas a cada puesto.",
      "Cada etapa incluye un correo listo para usar. Personalízalo con datos como el nombre y el título del puesto, y revísalo en una vista previa en directo.",
      "¿Moviste a alguien por error? Deshazlo y el correo no se enviará.",
      "Los correos usan la plantilla y el logo de tu empresa, y las respuestas llegan a la dirección que elijas.",
    ],
    editorScreenshotAlt:
      "El correo de la etapa “Interviewing” en Emploist. El asunto y el mensaje usan variables para el nombre del candidato, el título del puesto y el nombre de la empresa.",
    previewScreenshotAlt:
      "El correo final, tal como lo recibe un candidato llamado Sam: Northwind Labs en la parte superior, una invitación personal a una entrevista para el puesto de Senior Product Designer y un enlace a las vacantes abiertas.",
  },

  aiAssistants: {
    eyebrow: "Asistentes de IA",
    title: "Gestiona la selección desde tu asistente de IA.",
    lead: "Conecta Claude, ChatGPT u otro asistente compatible con MCP, y trabaja con tus vacantes y candidatos con solo pedirlo.",
    points: [
      {
        title: "Pregunta por tus candidatos.",
        text: "Encuentra a los que mejor encajan en una vacante, ponte al día con las nuevas candidaturas u obtén un resumen rápido de las respuestas de alguien.",
      },
      {
        title: "Pasa a la acción.",
        text: "Crea y publica vacantes, mueve candidatos entre etapas y deja comentarios, directamente desde el chat.",
      },
      {
        title: "Mantén el control.",
        text: "Conecta tu asistente con el mismo acceso que tienes tú, y nada más. Desconéctalo en cualquier momento y deja de funcionar al instante.",
      },
    ],
    worksWith: "Funciona con",
    otherClients: "y otros clientes MCP",
    chat: {
      label: "Un ejemplo de chat con un asistente de IA conectado a Emploist",
      assistant: "Tu asistente de IA",
      /** After "Emploist", hidden on phones: "Emploist conectado". */
      connected: "conectado",
      /** Read out before a tool's name: "Se usó Emploist list_applications". */
      used: "Se usó",
      question: "¿Qué candidatos a la vacante de Senior Product Designer encajan mejor?",
      answerIntro: "En la bandeja de entrada, estos son los tres que mejor encajan:",
      /** A match on the list, e.g. "91 % afín" (as in the app); the word is hidden on phones. */
      match: (percent) => ({ value: f.percent(percent), label: "afín" }),
      answerOutro: "Diego destaca en nivel profesional y habilidades. ¿Quieres que mueva a alguien a la siguiente etapa?",
      request: "Mueve a Diego a Phone screen.",
      done: "Listo. Diego ya está en Phone screen y el correo de esa etapa se enviará en 2 minutos. Puedo deshacerlo antes si cambias de opinión.",
      placeholder: "Pregunta por tus vacantes y candidatos",
    },
    caption: "Cada persona conecta su propio asistente en unos pocos pasos.",
  },

  details: {
    eyebrow: "Y más",
    title: "Los detalles que facilitan la contratación.",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "Exporta cuando quieras",
        text: "Descarga las candidaturas de una vacante en una hoja de cálculo, con todos los currículums en el mismo archivo ZIP.",
      },
      {
        title: "Currículums a la vista",
        text: "Los currículums en PDF y Word se abren dentro de Emploist, junto a la candidatura. Sin descargar nada.",
      },
      {
        title: "Vacantes ilimitadas",
        text: "Publica todas las vacantes que necesites y encuentra cualquiera en segundos con la búsqueda y los filtros.",
      },
      {
        title: "Duplica una vacante",
        text: "¿Buscas a alguien para un puesto similar? Copia los detalles, el formulario, las etapas y los correos de una vacante con un solo clic.",
      },
      {
        title: "Sin contraseñas",
        text: "Inicia sesión con Google, Microsoft o un código de un solo uso que te enviamos por correo.",
      },
      {
        title: "Privado por defecto",
        text: "Los currículums se guardan de forma privada y solo las personas de tu equipo pueden abrirlos.",
      },
      {
        title: "Notificaciones que importan",
        text: "Recibe una notificación cuando alguien te mencione o comente en una candidatura en la que hayas comentado.",
      },
      {
        title: "Claro y oscuro",
        text: "Emploist sigue el tema de tu sistema, o puedes elegir el que prefieras.",
      },
    ],
  },

  pricing: {
    eyebrow: "Precios",
    title: "Un solo plan con todo incluido.",
    lead: "Sin niveles de funciones ni cargos por usuario. Un único precio, con pago mensual o anual, cubre a toda tu empresa, sin importar cuántas personas invites.",
    creditTitle: "¿Qué es un crédito de IA?",
    creditText: (p) =>
      `Evaluar una candidatura usa un crédito. Tu plan incluye ${f.number(p.credits)} cada mes, o ${f.number(p.yearlyCredits)} por adelantado si pagas anualmente, y puedes comprar más en cualquier momento.`,
    billing: "Facturación",
    monthly: "Mensual",
    yearly: "Anual",
    save: (percent) => `Ahorra un ${f.percent(percent)}`,
    perMonth: "al mes",
    perYear: "al año",
    monthlyCredits: (credits) => `${creditCount(credits)} de IA cada mes`,
    yearlyCredits: (credits) => `${creditCount(credits)} de IA por adelantado`,
    startTrial: (days) => `Pruébalo gratis ${dayCount(days)}`,
    included: [
      "Vacantes ilimitadas",
      "Todo tu equipo, sin cargos por usuario",
      "Una página de empleo en tu propio dominio",
      "Control total del código de tu página de empleo",
      "Formularios de candidatura y etapas de selección",
      "Correos automáticos a los candidatos, con tu propia plantilla",
      "Comentarios, menciones y notificaciones",
      "Exporta tus candidaturas cuando quieras",
    ],
    /** HTML. */
    trial: (p) =>
      `<strong>La prueba gratuita</strong> te da ${dayCount(p.trialDays)} y ${creditCount(p.trialCredits)} de IA para probarlo todo. No se te cobrará nada hasta que termine y puedes cancelar en cualquier momento.`,
    moreCredits: "¿Necesitas más créditos?",
    packsNote: "Compra un paquete cuando quieras. Los paquetes no caducan.",
    packsCaption: "Paquetes de créditos y sus precios",
    creditsColumn: "Créditos",
    priceColumn: "Precio",
    packCredits: (credits) => creditCount(credits),
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Tus preguntas, respondidas.",
    /** HTML. `email` is a link to the support address. */
    intro: (email) => `¿No encuentras lo que buscas? Escríbenos a ${email} y te responderemos.`,
    items: (p) => [
      {
        question: "¿Cómo funciona la prueba gratuita?",
        answer: `Tienes ${dayCount(p.trialDays)} con todas las funciones y ${creditCount(p.trialCredits)} de IA para probarlo con candidaturas reales. No se te cobrará nada hasta que termine la prueba y puedes cancelar en cualquier momento antes de esa fecha.`,
      },
      {
        question: "¿Qué es un crédito de IA?",
        answer: `Evaluar una candidatura usa un crédito. Tu plan incluye ${creditCount(p.credits)} cada mes, o ${f.number(p.yearlyCredits)} por adelantado si pagas anualmente. Si necesitas más, hay paquetes desde ${creditCount(p.firstPack.credits)} por ${f.usd(p.firstPack.priceUsd)}, y no caducan.`,
      },
      {
        question: "¿Podemos pagar anualmente?",
        answer: `Sí. El plan anual cuesta ${f.usd(p.yearlyPriceUsd)} al año, un ${f.percent(p.yearlySavingsPercent)} menos que pagar mensualmente, con ${creditCount(p.yearlyCredits)} de IA por adelantado. Empieza con la misma prueba gratuita de ${dayCount(p.trialDays)}. Si tienes el plan mensual, puedes cambiar al anual en cualquier momento desde Facturación, y pagas el año menos los días no usados de tu mes actual.`,
      },
      {
        question: "¿Qué pasa si nos quedamos sin créditos?",
        answer:
          "No se pierde nada. Las candidaturas siguen llegando y puedes comprar más créditos en cualquier momento para evaluarlas.",
      },
      {
        question: "¿Cómo puntúa la IA una candidatura?",
        answer:
          "Lee cada currículum y las respuestas a tus preguntas, y los compara con la vacante que publicaste. Habilidades, experiencia, nivel profesional y titulaciones se puntúan por separado y luego se combinan en una única puntuación de afinidad, para que veas por qué cada candidato ocupa su posición.",
      },
      {
        question: "¿Podemos desactivar la evaluación con IA?",
        answer: "Sí. Un administrador puede activar o desactivar las funciones de IA para toda la empresa en Configuración.",
      },
      {
        question: "¿Podemos usar nuestro propio dominio para la página de empleo?",
        answer:
          "Sí. Tu página de empleo empieza en yourcompany.emploist.com, y puedes conectar un dominio como careers.yourcompany.com en unos pocos pasos, con HTTPS incluido.",
      },
      {
        question: "¿Los candidatos necesitan una cuenta para enviar su candidatura?",
        answer:
          "No. Los candidatos completan el formulario de tu página de empleo y adjuntan su currículum. Les lleva un par de minutos.",
      },
      {
        question: "¿Quién de nuestro equipo puede usar Emploist?",
        answer:
          "Todas las personas que invites, sin cargo adicional. Además, los administradores gestionan la facturación, la página de empleo y la configuración de la empresa.",
      },
      {
        question: "¿En qué idiomas está disponible Emploist?",
        answer:
          "Puedes usar Emploist en inglés, francés, alemán, español, italiano, japonés, coreano, polaco, turco e indonesio, y cada persona de tu equipo elige el suyo. Las páginas de empleo y los correos que reciben los candidatos están en inglés de forma predeterminada, y puedes reescribirlos en cualquier idioma.",
      },
      {
        question: "¿Podemos llevarnos nuestros datos?",
        answer:
          "Sí. Exporta las candidaturas de cualquier vacante como una hoja de cálculo con todas las candidaturas y respuestas, junto con cada currículum.",
      },
      {
        question: "¿Podemos usar Emploist desde Claude o ChatGPT?",
        answer:
          "Sí. Cualquier persona de tu equipo puede conectar Claude, ChatGPT, Claude Code, Cursor, VS Code u otro asistente compatible con MCP, y gestionar vacantes y candidaturas chateando. Está incluido en tu plan. Evaluar una candidatura desde un asistente usa un crédito de IA, igual que en Emploist.",
      },
      {
        question: "¿Qué puede hacer un asistente de IA en Emploist?",
        answer:
          "Puede ver y cambiar vacantes, etapas y formularios de candidatura, leer candidaturas y currículums, mover candidatos entre etapas y comentar. Actúa como la persona que lo conectó, con su rol. La facturación, los miembros del equipo y la eliminación de tu empresa o tu cuenta no están incluidos. Puedes desconectar tu asistente en cualquier momento, y un administrador puede desactivar los asistentes para toda la empresa en Configuración.",
      },
      {
        question: "¿Podemos cancelar en cualquier momento?",
        answer:
          "Sí. Cancela cuando quieras y tu plan seguirá funcionando hasta el final del periodo que hayas pagado. Después, podrás seguir viendo y exportando todo.",
      },
    ],
  },

  callToAction: {
    title: "Conoce a tus mejores candidatos esta semana.",
    text: (p) =>
      `Prueba Emploist gratis durante ${dayCount(p.trialDays)}. La configuración lleva unos minutos y tu página de empleo estará lista en cuanto tú lo estés.`,
    talkToUs: "Habla con nosotros",
  },

  notFound: {
    title: "Página no encontrada",
    description: "Esta página no existe.",
    heading: "Esta página no existe.",
    text: "Puede que se haya movido o que el enlace tenga un error tipográfico. Te ayudamos a encontrar el camino.",
    home: "Ir a la página de inicio",
    blog: "Leer el blog",
  },

  blog: {
    title: "Blog",
    description:
      "Guías sobre selección de personal, páginas de empleo y seguimiento de candidatos, y novedades del producto de la mano del equipo de Emploist.",
    heading: "Ideas para contratar bien.",
    emptyTitle: "Los primeros artículos están en camino.",
    /** HTML. */
    emptyText: (link) =>
      `Estamos escribiendo guías sobre selección de personal y sobre cómo aprovechar Emploist al máximo. Síguenos a través del ${link("feed RSS")} o, mientras tanto, empieza tu prueba gratuita.`,
    minutesToRead: (minutes) => `${minutes} min de lectura`,
    draft: "Borrador",
    readPost: "Leer el artículo",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "En inglés",
    updated: (date) => `Actualizado el ${date}`,
    home: "Inicio",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "Ruta de navegación",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Prueba Emploist",
    ctaTitle: "Tus mejores candidatos, primero.",
    ctaText: (p) =>
      `Prueba Emploist gratis durante ${dayCount(p.trialDays)} y, después, paga ${f.usd(p.priceUsd)} al mes por todo tu equipo.`,
    defaultAuthor: "El equipo de Emploist",
  },

  legal: {
    lastUpdated: (date) => `Última actualización: ${date}`,
    contents: "Índice",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link) =>
        `Esta es una traducción de nuestros Términos del servicio, que ofrecemos para tu comodidad. La ${link("versión en inglés")} es legalmente vinculante y se aplica en caso de que ambas difieran.`,
      privacy: (link) =>
        `Esta es una traducción de nuestra Política de privacidad, que ofrecemos para tu comodidad. Si difiere de la ${link("versión en inglés")}, se aplica la versión en inglés, en la medida en que lo permita la ley.`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date, link) =>
      `La versión en inglés se actualizó el ${date}, después de que se hiciera esta traducción. ${link("Lee la versión actual en inglés")}.`,
  },
};

export default es;
