// The website's words in Polish. Same shape as en.ts (the source); see its
// header comment for how functions, HTML strings, and lists work.
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("pl");

const pl: Messages = {
  site: {
    title: "Emploist: system rekrutacyjny z oceną AI i stroną kariery",
    description: (p) =>
      `System ATS ze stroną kariery: publikuj oferty, zbieraj aplikacje, a AI oceni kandydatów pod kątem oferty. ${f.usd(p.priceUsd)} miesięcznie za cały zespół, ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })} za darmo.`,
    imageAlt: "Emploist: najlepszych kandydatów zobaczysz najpierw",
    skipToContent: "Przejdź do treści",
    home: "Strona główna Emploist",
    blogFeedTitle: "Blog Emploist",
    blogFeedDescription: "Poradniki i nowości od zespołu Emploist.",
    monthlyOffer: (p) =>
      `${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })} bezpłatnego okresu próbnego, potem ${f.usd(p.priceUsd)} miesięcznie za cały zespół.`,
    yearlyOffer: (p) =>
      `${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })} bezpłatnego okresu próbnego, potem ${f.usd(p.yearlyPriceUsd)} rocznie za cały zespół.`,
  },

  nav: {
    main: "Główna",
    features: "Funkcje",
    careersPage: "Strona kariery",
    aiAssistants: "Asystenci AI",
    mcp: "MCP",
    /** The last item in the Features menu, after the feature sections. */
    moreFeatures: "Więcej funkcji",
    pricing: "Cennik",
    faq: "FAQ",
    blog: "Blog",
    docs: "Dokumentacja",
    signIn: "Zaloguj się",
    startFreeTrial: "Wypróbuj za darmo",
    menu: "Menu",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "Język",
  },

  footer: {
    tagline:
      "System ATS ze stroną kariery i oceną AI dla zespołów, które chcą dobrze zatrudniać bez zbędnej, żmudnej pracy.",
    product: "Produkt",
    resources: "Zasoby",
    account: "Konto",
    legal: "Informacje prawne",
    rssFeed: "Kanał RSS",
    support: "Pomoc",
    llmsTxt: "llms.txt",
    terms: "Regulamin",
    privacy: "Polityka prywatności",
    copyright: (year) => `© ${year} Emploist. Wszelkie prawa zastrzeżone.`,
    questions: "Masz pytania?",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "Wypróbuj za darmo",
  },

  hero: {
    eyebrow: "System ATS z oceną AI",
    title: "Zobacz najlepsze aplikacje bez ręcznych filtrów i skomplikowanego ATS",
    lead: "Emploist daje Ci stronę kariery, prosty proces rekrutacji i AI, która ocenia każdą aplikację pod kątem opisu stanowiska. Twój zespół spędza mniej czasu na przesiewaniu aplikacji, a więcej z osobami, które naprawdę pasują.",
    cta: "Oceń swoich kandydatów",
    seeHowItWorks: "Zobacz, jak to działa",
    note: (p) =>
      `${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })} za darmo, potem ${f.usd(p.priceUsd)} miesięcznie. Bez opłat za użytkownika.`,
    screenshotAlt:
      "Aplikacje na stanowisko Senior Product Designer w Emploist, posortowane według najlepszego dopasowania: 91%, 88%, 86% i tak dalej, z imieniem i nazwiskiem, e-mailem oraz liczbą komentarzy przy każdym kandydacie.",
  },

  howItWorks: {
    eyebrow: "Jak to działa",
    title: "Od ogłoszenia do zatrudnienia w jednym miejscu.",
    steps: [
      {
        title: "Opublikuj ofertę",
        text: "Napisz opis, wybierz pytania, na które chcesz poznać odpowiedzi, i opublikuj ofertę na swojej stronie kariery.",
      },
      {
        title: "Kandydaci aplikują",
        text: "Kandydaci znajdują ofertę na Twojej stronie kariery i aplikują w kilka minut. Bez zakładania konta.",
      },
      {
        title: "AI ocenia każdą aplikację",
        text: "Każda aplikacja otrzymuje wynik dopasowania do oferty wraz z czytelnym rozbiciem dla Twojego zespołu.",
      },
      {
        title: "Przenoś kandydatów dalej",
        text: "Przeglądaj i komentuj aplikacje, a kandydatów przenoś między etapami. Na każdym kroku wychodzą e-maile.",
      },
    ],
  },

  ranking: {
    eyebrow: "Ocena AI",
    title: "Wynik dopasowania, który naprawdę rozumiesz.",
    lead: "Każda aplikacja jest oceniana pod kątem oferty, gdy tylko wpłynie. Zamiast tajemniczej liczby widzisz, jak każdy kandydat wypada w tym, co jest ważne na danym stanowisku.",
    points: [
      {
        title: "Czytelne rozbicie.",
        text: "Umiejętności, doświadczenie, dopasowanie poziomu i kwalifikacje są oceniane osobno, więc widzisz dokładnie, czym ktoś się wyróżnia.",
      },
      {
        title: "Więcej niż CV.",
        text: "Liczą się też odpowiedzi na pytania z Twojego formularza aplikacyjnego.",
      },
      {
        title: "Uczciwie i spójnie.",
        text: "Każdy kandydat na dane stanowisko jest oceniany w ten sam sposób, według tych samych kryteriów.",
      },
      {
        title: "Ty decydujesz.",
        text: "Dopasowanie ma Ci pomagać w przeglądaniu aplikacji, a nie Cię zastępować. Gdy zaktualizujesz ofertę, możesz ponownie ocenić jej kandydatów.",
      },
    ],
    screenshotAlt:
      "91% dopasowania kandydata w Emploist z rozbiciem na umiejętności (93), doświadczenie (88), dopasowanie poziomu (95) i kwalifikacje (85), każde z krótkim wyjaśnieniem.",
    caption: (p) =>
      `Każda ocena zużywa jeden kredyt AI. Twój plan obejmuje ${f.number(p.credits)} ${f.plural(p.credits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} co miesiąc.`,
  },

  careersPage: {
    eyebrow: "Strona kariery",
    title: "Strona kariery gotowa od pierwszego dnia.",
    lead: "Każda firma dostaje szybką, dopracowaną stronę kariery ze swoim logo i kolorem. Nowe oferty pojawiają się na niej, gdy tylko je opublikujesz, a aplikacje trafiają prosto do skrzynki odbiorczej oferty.",
    screenshotAlt:
      "Strona kariery Fieldnote Labs: nagłówek z logo firmy, krótkie wprowadzenie i otwarte stanowiska pogrupowane według działów, z filtrami działu i lokalizacji.",
    mobileScreenshotAlt:
      "Strona oferty na telefonie: Senior Product Designer, Berlin, praca hybrydowa na pełny etat, z przyciskiem „Apply for this job” i opisem stanowiska.",
    facts: [
      {
        title: "Twój adres lub Twoja domena",
        text: "Zacznij od adresu yourcompany.emploist.com, a potem połącz własną domenę, np. careers.yourcompany.com.",
      },
      {
        title: "Wygodne przeglądanie",
        text: "Otwarte stanowiska są pogrupowane według działów, a kandydaci mogą je filtrować według działu i lokalizacji.",
      },
      {
        title: "Szybka na każdym ekranie",
        text: "Strony wczytują się szybko i świetnie wyglądają wszędzie, od telefonów po szerokie monitory.",
      },
      {
        title: "Aplikowanie w kilka minut",
        text: "Bez kont i haseł. Kandydaci wypełniają Twój formularz, dołączają CV i gotowe.",
      },
      {
        title: "Przejrzystość w kwestii AI",
        text: "Twoja strona informuje kandydatów, gdy AI pomaga w przeglądaniu ich aplikacji.",
      },
      {
        title: "Ochrona przed spamem",
        text: "Wbudowana ochrona nie wpuszcza spamu do Twojej skrzynki odbiorczej, więc widzisz tylko prawdziwych kandydatów.",
      },
    ],
  },

  designInCode: {
    eyebrow: "Wygląd w kodzie",
    title: "Niech wygląda dokładnie jak Twoja witryna.",
    lead: "Domyślny wygląd prezentuje się dobrze już z samym logo i kolorem. Gdy chcesz czegoś więcej, każda podstrona Twojej strony kariery to HTML, CSS i szablony Liquid, które możesz zmieniać.",
    points: [
      "Edytuj kod bezpośrednio w Emploist, z podglądem na żywo w rozmiarze komputera i telefonu.",
      "Albo pobierz kod, zmień go we własnym edytorze lub z pomocą asystenta AI i wyświetl podgląd na swoim komputerze jednym poleceniem.",
      "Błędy są wychwytywane przed zapisaniem, więc kandydaci zawsze widzą działającą stronę.",
    ],
    screenshotAlt:
      "Edytor kodu strony kariery w Emploist: szablon układu z podświetlaniem składni po lewej i podgląd strony kariery na żywo po prawej.",
  },

  formsAndTeam: {
    label: "Formularze aplikacyjne i praca zespołowa",
    forms: {
      eyebrow: "Formularze aplikacyjne",
      title: "Pytaj o to, co ważne na danym stanowisku.",
      text: "Zbuduj formularz do każdej oferty z krótkimi i długimi odpowiedziami, pytaniami typu tak lub nie, pytaniami wyboru, listami rozwijanymi, skalami i polami wyboru, a potem ustaw ich kolejność, przeciągając je.",
      screenshotAlt:
        "Formularz aplikacyjny w Emploist: imię i nazwisko, e-mail i CV, a dalej numer telefonu, link do portfolio, pytanie jednokrotnego wyboru o lata doświadczenia i pytanie wielokrotnego wyboru o narzędzia.",
    },
    team: {
      eyebrow: "Praca zespołowa",
      title: "Decydujcie razem.",
      text: "Komentuj dowolną aplikację i oznacz członka zespołu przez @, aby poznać jego zdanie. Zaproś cały zespół bez dodatkowych kosztów.",
      screenshotAlt:
        "Komentarze trzech członków zespołu pod aplikacją i nowy komentarz z oznaczeniem Priyi Shah, wybranej z listy członków zespołu.",
    },
  },

  stagesAndEmails: {
    eyebrow: "Etapy i e-maile",
    title: "Kandydaci zawsze na bieżąco, automatycznie.",
    lead: "Każda oferta ma własne etapy. Przenieś kandydata do kolejnego, a e-mail tego etapu wyjdzie sam – napisany raz, a osobisty dla każdego.",
    points: [
      "Zacznij od gotowych etapów, a potem zmieniaj ich nazwy i kolejność oraz dodawaj własne, dopasowane do każdego stanowiska.",
      "Każdy etap ma gotowy e-mail. Personalizuj go szczegółami, takimi jak imię czy nazwa stanowiska, i sprawdzaj go w podglądzie na żywo.",
      "Przeniesiesz kogoś przez pomyłkę? Cofnij to, a e-mail nie zostanie wysłany.",
      "E-maile korzystają z szablonu i logo Twojej firmy, a odpowiedzi trafiają na wybrany przez Ciebie adres.",
    ],
    editorScreenshotAlt:
      "E-mail etapu „Interviewing” w Emploist. Temat i wiadomość zawierają zmienne: imię kandydata, nazwę stanowiska i nazwę firmy.",
    previewScreenshotAlt:
      "Gotowy e-mail w takiej postaci, w jakiej otrzymuje go kandydat o imieniu Sam: Fieldnote Labs na górze, osobiste zaproszenie na rozmowę na stanowisko Senior Product Designer i link do otwartych stanowisk.",
  },

  aiAssistants: {
    eyebrow: "Asystenci AI",
    title: "Zarządzaj rekrutacją w asystencie AI.",
    lead: "Połącz Claude, ChatGPT lub innego asystenta obsługującego MCP i pracuj z ofertami i kandydatami – wystarczy zapytać.",
    points: [
      {
        title: "Pytaj o kandydatów.",
        text: "Znajdź najlepiej dopasowanych kandydatów do oferty, sprawdź, jakie nowe aplikacje wpłynęły, albo poproś o krótkie podsumowanie czyichś odpowiedzi.",
      },
      {
        title: "Załatwiaj sprawy.",
        text: "Twórz i publikuj oferty, przenoś kandydatów między etapami i dodawaj komentarze – prosto z czatu.",
      },
      {
        title: "Zachowaj kontrolę.",
        text: "Połączony asystent ma taki sam dostęp jak Ty i nic ponadto. Odłącz go w dowolnym momencie, a od razu przestanie działać.",
      },
    ],
    worksWith: "Działa z",
    otherClients: "popularnymi asystentami AI",
    chat: {
      label: "Przykładowa rozmowa z asystentem AI połączonym z Emploist",
      assistant: "Twój asystent AI",
      /** After "Emploist", hidden on phones: "Emploist connected". */
      connected: "połączony",
      /** Read out before a tool's name: "Used Emploist list_applications". */
      used: "Użyto narzędzia",
      question: "Którzy kandydaci na stanowisko Senior Product Designer są najlepiej dopasowani?",
      answerIntro: "Oto trzy najlepiej dopasowane osoby w skrzynce odbiorczej:",
      /** A match on the list, e.g. "91% match"; the word is hidden on phones. */
      match: (percent) => ({ value: f.percent(percent), label: "dopasowania" }),
      answerOutro: "Diego prowadzi pod względem dopasowania poziomu i umiejętności. Mam kogoś przenieść dalej?",
      request: "Przenieś Diega do etapu „Phone screen”.",
      done: "Gotowe. Diego jest teraz na etapie „Phone screen”, a e-mail tego etapu wyjdzie za 2 minuty. Jeśli zmienisz zdanie, mogę to wcześniej cofnąć.",
      placeholder: "Zapytaj o oferty i kandydatów",
    },
    caption: "Każda osoba łączy własnego asystenta w kilku krokach.",
  },

  /** The /mcp/ landing page. */
  mcp: {
    description:
      "Połącz Claude, ChatGPT i innych asystentów AI z Emploist przez MCP. Pytaj o kandydatów, przenoś między etapami i twórz oferty z czatu, w granicach swoich uprawnień.",
    eyebrow: "MCP",
    heading: "Rekrutuj z czatu, którego już używasz.",
    lead: "MCP łączy Emploist z Claude, ChatGPT i innymi asystentami. Pytasz zwykłymi słowami. Asystent wykonuje pracę w Emploist jako Ty.",
    whatTitle: "Czym jest MCP?",
    whatLead:
      "MCP to skrót od Model Context Protocol. To otwarty sposób, w jaki asystent AI może bezpiecznie korzystać z innej aplikacji.",
    whatPoints: [
      {
        title: "Łącznik, nie nowy produkt.",
        text: "Oferty i kandydaci nadal są w Emploist. MCP to sposób, w jaki Twój asystent do nich dociera.",
      },
      {
        title: "Jeden adres serwera.",
        text: "Hostowany serwer MCP Emploist jest pod adresem mcp.emploist.com. Wklejasz go w Claude, ChatGPT lub innym kliencie obsługującym MCP.",
      },
      {
        title: "Wliczone w Twój plan.",
        text: "Każda osoba z zespołu może połączyć własnego asystenta. Ocena aplikacji z czatu zużywa ten sam kredyt AI co ocena w Emploist.",
      },
    ],
    howTitle: "Jak to działa",
    howSteps: [
      {
        title: "Łączysz raz.",
        text: "Otwórz MCP w Emploist, wybierz asystenta i wykonaj jego kroki. Zaloguj się do Emploist, gdy o to poprosi. Bez kopiowania kluczy API.",
      },
      {
        title: "Pytasz na czacie.",
        text: "Wspomnij Emploist, a potem zapytaj, kto pasuje na stanowisko, przenieś kogoś do kolejnego etapu, zostaw komentarz albo przygotuj szkic oferty.",
      },
      {
        title: "Emploist wykonuje pracę.",
        text: "Asystent wywołuje narzędzia Emploist na Twoim koncie. Operacje zapisu proszą o potwierdzenie, zanim wejdą w życie.",
      },
    ],
    canDoTitle: "O co możesz zapytać",
    canDo: [
      "Którzy kandydaci na stanowisko Senior Product Designer są najlepiej dopasowani?",
      "Przenieś Priyę do etapu „Phone screen” i daj znać, kiedy wyjdzie e-mail tego etapu.",
      "Podsumuj dzisiejsze nowe aplikacje.",
      "Przygotuj szkic oferty Customer Support w Berlinie i pokaż mi formularz przed publikacją.",
      "Zostaw komentarz przy aplikacji Sary dla Priyi.",
    ],
    connectTitle: "Połącz asystenta",
    connectLead: "Strona MCP w Emploist ma karty dla każdego klienta. Adres serwera jest wszędzie taki sam:",
    serverUrl: "https://mcp.emploist.com",
    connectClients: [
      {
        name: "Claude",
        text: "W Claude otwórz Customize → Connectors, dodaj własny łącznik, wklej adres URL i zaloguj się do Emploist.",
      },
      {
        name: "ChatGPT",
        text: "W ChatGPT w przeglądarce otwórz Plugins, dodaj własny serwer MCP, wklej adres URL, utwórz wtyczkę, a potem wspomnij ją przez @.",
      },
      {
        name: "Inne klienty",
        text: "Cursor, VS Code, Claude Code i inne klienty MCP używają tego samego adresu URL. Strona MCP w Emploist zawiera kroki dla każdego z nich.",
      },
    ],
    controlTitle: "Kontrola zostaje przy Tobie",
    controlPoints: [
      {
        title: "Twoja rola, nic więcej.",
        text: "Asystent może robić tylko to, co Ty już możesz w Emploist. Płatności, zaproszenia do zespołu i usuwanie firmy pozostają poza zasięgiem.",
      },
      {
        title: "Potwierdzenia przy zapisie.",
        text: "Przeniesienie kandydata lub utworzenie oferty najpierw prosi o potwierdzenie. Odrzuć wszystko, co wygląda nie tak.",
      },
      {
        title: "Odłącz kiedy chcesz.",
        text: "Na stronie MCP odłącz asystenta, a przestanie działać. Administratorzy mogą też wyłączyć MCP dla całej firmy.",
      },
    ],
    worksWith: "Działa z",
    guidesTitle: "Poradniki",
    guidesLead: "Konfiguracja krok po kroku i przykłady.",
    guideClaude: "Jak zarządzać rekrutacją z Claude przez MCP",
    guideChatgpt: "Najlepsze wtyczki ChatGPT dla menedżerów HR",
    guideDocs: "Połącz asystenta AI",
    cta: "Połącz asystenta AI",
    copySetup: "Kopiuj konfigurację MCP",
    copiedSetup: "Skopiowano",
    /** Pasted into an AI chat. Keep facts (URL, OAuth) intact across locales. */
    setupCopy: (u: { mcpDocs: string; serverUrl: string }) =>
      `Emploist to system ATS. Ten plik mówi asystentowi AI, jak połączyć się z serwerem MCP Emploist i co może robić po połączeniu.

Połącz serwer MCP Emploist, aby zarządzać rekrutacją z tej rozmowy.

MCP Docs: ${u.mcpDocs}
Server URL: ${u.serverUrl}
Authentication: OAuth (zaloguj się do Emploist, gdy zostaniesz o to poproszony)

Po połączeniu pomagaj przy ofertach i kandydatach w Emploist: listuj i oceniaj aplikacje, przenoś osoby między etapami, zostawiaj komentarze oraz twórz lub publikuj oferty. Pracuj wyłącznie w ramach moich uprawnień w Emploist. Potwierdzaj przed każdą operacją zapisu.
`,
  },

  details: {
    eyebrow: "To nie wszystko",
    title: "Szczegóły, które ułatwiają rekrutację.",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "Eksport w każdej chwili",
        text: "Pobierz aplikacje z oferty jako arkusz kalkulacyjny, ze wszystkimi CV w tym samym pliku ZIP.",
      },
      {
        title: "CV pod ręką",
        text: "CV w formacie PDF i Word otwierają się w Emploist, obok aplikacji. Nic nie trzeba pobierać.",
      },
      {
        title: "Bez limitu ofert",
        text: "Publikuj tyle ofert, ile potrzebujesz, i znajduj każdą z nich w kilka sekund dzięki wyszukiwarce i filtrom.",
      },
      {
        title: "Duplikowanie ofert",
        text: "Rekrutujesz na podobne stanowisko? Skopiuj szczegóły, formularz, etapy i e-maile oferty jednym kliknięciem.",
      },
      {
        title: "Bez haseł",
        text: "Zaloguj się przez Google lub Microsoft albo za pomocą jednorazowego kodu wysłanego e-mailem.",
      },
      {
        title: "Prywatność domyślnie",
        text: "CV są przechowywane prywatnie i mogą je otwierać tylko osoby z Twojego zespołu.",
      },
      {
        title: "Ważne powiadomienia",
        text: "Otrzymuj powiadomienia, gdy ktoś Cię oznaczy lub skomentuje aplikację, pod którą masz już komentarz.",
      },
      {
        title: "Jasny i ciemny motyw",
        text: "Emploist dopasowuje się do motywu systemu, ale możesz też wybrać ten, który lubisz.",
      },
    ],
  },

  pricing: {
    eyebrow: "Cennik",
    title: "Jeden plan, a w nim wszystko.",
    lead: "Bez podziału funkcji na plany i bez opłat za użytkownika. Jedna cena, płatna miesięcznie lub rocznie, obejmuje całą Twoją firmę, niezależnie od tego, ile osób zaprosisz.",
    creditTitle: "Czym jest kredyt AI?",
    creditText: (p) =>
      `Ocena jednej aplikacji zużywa jeden kredyt. Twój plan obejmuje ${f.number(p.credits)} ${f.plural(p.credits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} co miesiąc lub ${f.number(p.yearlyCredits)} ${f.plural(p.yearlyCredits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} z góry przy płatności rocznej, a kredyty możesz dokupić w każdej chwili.`,
    billing: "Okres rozliczeniowy",
    monthly: "Miesięcznie",
    yearly: "Rocznie",
    // "−17%": "Oszczędź 17%" is too wide for the billing toggle on a 375px phone.
    save: (percent) => `−${f.percent(percent)}`,
    perMonth: "miesięcznie",
    perYear: "rocznie",
    monthlyCredits: (credits) =>
      `${f.number(credits)} ${f.plural(credits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} AI co miesiąc`,
    yearlyCredits: (credits) =>
      `${f.number(credits)} ${f.plural(credits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} AI z góry`,
    startTrial: (days) =>
      `Wypróbuj ${f.number(days)} ${f.plural(days, { one: "dzień", few: "dni", many: "dni", other: "dnia" })} za darmo`,
    included: [
      "Nieograniczona liczba ofert pracy",
      "Cały zespół, bez opłat za użytkownika",
      "Strona kariery we własnej domenie",
      "Pełna kontrola nad kodem strony kariery",
      "Formularze aplikacyjne i etapy rekrutacji",
      "Automatyczne e-maile do kandydatów we własnym szablonie",
      "Komentarze, oznaczenia i powiadomienia",
      "Eksport aplikacji w każdej chwili",
    ],
    /** HTML. */
    trial: (p) =>
      `<strong>Bezpłatny okres próbny</strong> to ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })} i ${f.number(p.trialCredits)} ${f.plural(p.trialCredits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} AI na wypróbowanie wszystkiego. Opłata zostanie pobrana dopiero po jego zakończeniu, a zrezygnować możesz w każdej chwili.`,
    moreCredits: "Potrzebujesz więcej kredytów?",
    packsNote: "Kup pakiet, kiedy chcesz. Pakiety nigdy nie wygasają.",
    packsCaption: "Pakiety kredytów i ich ceny",
    creditsColumn: "Kredyty",
    priceColumn: "Cena",
    packCredits: (credits) =>
      `${f.number(credits)} ${f.plural(credits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })}`,
  },

  faq: {
    eyebrow: "FAQ",
    title: "Pytania i odpowiedzi.",
    /** HTML. `email` is a link to the support address. */
    intro: (email) =>
      `Nie widzisz odpowiedzi na swoje pytanie? Napisz do nas na adres ${email}, a odpowiemy.`,
    items: (p) => [
      {
        question: "Jak działa bezpłatny okres próbny?",
        answer: `Dostajesz ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })} dostępu do wszystkich funkcji, a do tego ${f.number(p.trialCredits)} ${f.plural(p.trialCredits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} AI, aby wypróbować Emploist na prawdziwych aplikacjach. Opłata zostanie pobrana dopiero po zakończeniu okresu próbnego, a do tego czasu możesz zrezygnować w każdej chwili.`,
      },
      {
        question: "Czym jest kredyt AI?",
        answer: `Ocena jednej aplikacji zużywa jeden kredyt. Twój plan obejmuje ${f.number(p.credits)} ${f.plural(p.credits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} co miesiąc lub ${f.number(p.yearlyCredits)} ${f.plural(p.yearlyCredits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} z góry przy płatności rocznej. Jeśli potrzebujesz więcej, pakiety zaczynają się od ${f.number(p.firstPack.credits)} ${f.plural(p.firstPack.credits, { one: "kredytu", few: "kredytów", many: "kredytów", other: "kredytu" })} za ${f.usd(p.firstPack.priceUsd)} i nigdy nie wygasają.`,
      },
      {
        question: "Czy możemy płacić rocznie?",
        answer: `Tak. Plan roczny kosztuje ${f.usd(p.yearlyPriceUsd)} rocznie, czyli ${f.percent(p.yearlySavingsPercent)} mniej niż przy płatności miesięcznej, i obejmuje ${f.number(p.yearlyCredits)} ${f.plural(p.yearlyCredits, { one: "kredyt", few: "kredyty", many: "kredytów", other: "kredytu" })} AI z góry. Zaczyna się od tego samego bezpłatnego okresu próbnego, który trwa ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })}. Jeśli płacisz miesięcznie, możesz w każdej chwili przełączyć się na plan roczny na stronie Płatności. Zapłacisz wtedy za rok, po odliczeniu niewykorzystanych dni bieżącego miesiąca.`,
      },
      {
        question: "Co się stanie, gdy skończą się kredyty?",
        answer:
          "Nic nie przepada. Aplikacje nadal wpływają, a żeby je ocenić, możesz w każdej chwili dokupić kredyty.",
      },
      {
        question: "Jak AI ocenia aplikację?",
        answer:
          "Czyta każde CV i odpowiedzi na Twoje pytania, a potem porównuje je z opublikowaną ofertą. Umiejętności, doświadczenie, dopasowanie poziomu i kwalifikacje są oceniane osobno, a następnie łączone w jeden wynik dopasowania, więc widzisz, dlaczego ktoś zajmuje takie, a nie inne miejsce.",
      },
      {
        question: "Czy możemy wyłączyć ocenę AI?",
        answer: "Tak. Administrator może włączyć lub wyłączyć funkcje AI dla całej firmy w Ustawieniach.",
      },
      {
        question: "Czy możemy użyć własnej domeny dla strony kariery?",
        answer:
          "Tak. Twoja strona kariery startuje pod adresem yourcompany.emploist.com, a w kilku krokach możesz połączyć domenę, np. careers.yourcompany.com, wraz z HTTPS.",
      },
      {
        question: "Czy kandydaci muszą mieć konto, aby aplikować?",
        answer:
          "Nie. Kandydaci wypełniają formularz na Twojej stronie kariery i dołączają CV. Zajmuje to kilka minut.",
      },
      {
        question: "Kto z naszego zespołu może korzystać z Emploist?",
        answer:
          "Każda zaproszona osoba, bez dodatkowych kosztów. Administratorzy zarządzają też płatnościami, stroną kariery i ustawieniami firmy.",
      },
      {
        question: "Jakie języki obsługuje Emploist?",
        answer:
          "Z Emploist możesz korzystać po angielsku, francusku, niemiecku, hiszpańsku, włosku, japońsku, koreańsku, polsku, turecku i indonezyjsku, a każda osoba w zespole wybiera własny język. Strony kariery i e-maile do kandydatów są początkowo po angielsku, ale możesz je napisać od nowa w dowolnym języku.",
      },
      {
        question: "Czy możemy zabrać swoje dane?",
        answer:
          "Tak. Wyeksportuj aplikacje z dowolnej oferty jako arkusz kalkulacyjny ze wszystkimi aplikacjami i odpowiedziami, razem z każdym CV.",
      },
      {
        question: "Czy możemy korzystać z Emploist w Claude lub ChatGPT?",
        answer:
          "Tak. Każda osoba z Twojego zespołu może połączyć Claude, ChatGPT, Grok, Gemini, Copilot lub innego asystenta obsługującego MCP i zarządzać ofertami oraz aplikacjami na czacie. Jest to wliczone w Twój plan. Ocena aplikacji z poziomu asystenta zużywa jeden kredyt AI, tak samo jak w Emploist.",
      },
      {
        question: "Co asystent AI może robić w Emploist?",
        answer:
          "Może przeglądać i zmieniać oferty, etapy i formularze aplikacyjne, czytać aplikacje i CV, przenosić kandydatów między etapami i dodawać komentarze. Działa jako osoba, która go połączyła, z jej rolą. Płatności, członkowie zespołu oraz usuwanie firmy lub konta nie są uwzględnione. Możesz odłączyć asystenta w każdej chwili, a administrator może wyłączyć asystentów dla całej firmy w Ustawieniach.",
      },
      {
        question: "Czy możemy zrezygnować w każdej chwili?",
        answer:
          "Tak. Możesz anulować plan, kiedy chcesz, a będzie on działać do końca opłaconego okresu. Później nadal możesz wszystko przeglądać i eksportować.",
      },
    ],
  },

  callToAction: {
    title: "Poznaj najlepszych kandydatów jeszcze w tym tygodniu.",
    text: (p) =>
      `Wypróbuj Emploist za darmo przez ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })}. Konfiguracja zajmuje kilka minut, a Twoja strona kariery będzie gotowa, kiedy tylko zechcesz.`,
    talkToUs: "Porozmawiaj z nami",
  },

  notFound: {
    title: "Nie znaleziono strony",
    description: "Ta strona nie istnieje.",
    heading: "Ta strona nie istnieje.",
    text: "Mogła zostać przeniesiona albo w linku jest literówka. Wróćmy na właściwe tory.",
    home: "Przejdź do strony głównej",
    blog: "Przejdź do bloga",
  },

  docs: {
    title: "Dokumentacja Emploist",
    lead: "Korzystaj z oficjalnych docs, aby działać w Emploist.",
    copyMarkdown: "Kopiuj markdown",
    copied: "Skopiowano",
    discussWith: "Omów z",
    discussPrompt: (title, url) =>
      `Pomóż mi z tym przewodnikiem Emploist: „${title}”. Przeczytaj ${url} i odpowiedz na moje pytania.`,
  },

  blog: {
    title: "Blog",
    description:
      "Poradniki o rekrutacji, stronach kariery i systemach ATS oraz nowości w produkcie od zespołu Emploist.",
    heading: "O dobrej rekrutacji.",
    emptyTitle: "Pierwsze wpisy są już w drodze.",
    /** HTML. */
    emptyText: (link) =>
      `Piszemy poradniki o rekrutacji i o tym, jak w pełni wykorzystać Emploist. Śledź nowe wpisy przez ${link("kanał RSS")} albo w międzyczasie rozpocznij bezpłatny okres próbny.`,
    minutesToRead: (minutes) =>
      `${f.number(minutes)} ${f.plural(minutes, { one: "minuta", few: "minuty", many: "minut", other: "minuty" })} czytania`,
    draft: "Szkic",
    readPost: "Przeczytaj wpis",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "Po angielsku",
    updated: (date) => `Zaktualizowano ${date}`,
    home: "Strona główna",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "Ścieżka nawigacyjna",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Wypróbuj Emploist",
    ctaTitle: "Najlepszych kandydatów zobaczysz najpierw.",
    ctaText: (p) =>
      `Wypróbuj Emploist za darmo przez ${f.number(p.trialDays)} ${f.plural(p.trialDays, { one: "dzień", few: "dni", many: "dni", other: "dnia" })}, a potem płać ${f.usd(p.priceUsd)} miesięcznie za cały zespół.`,
    defaultAuthor: "Zespół Emploist",
    writtenBy: (name) => `Napisane przez ${name}`,
  },

  listedOn: {
    title: "Katalogi",
    description:
      "Katalogi oprogramowania, w których znajdziesz Emploist, system ATS ze stroną kariery, procesem rekrutacji i oceną AI.",
    heading: "Znajdź Emploist w sieci.",
    lead: "Katalogi, w których znajdziesz Emploist.",
  },

  legal: {
    lastUpdated: (date) => `Ostatnia aktualizacja: ${date}`,
    contents: "Spis treści",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link) =>
        `To jest tłumaczenie naszego Regulaminu, udostępnione dla wygody. Prawnie wiążąca jest ${link("wersja angielska")}, która obowiązuje w razie rozbieżności między wersjami.`,
      privacy: (link) =>
        `To jest tłumaczenie naszej Polityki prywatności, udostępnione dla wygody. Jeśli tłumaczenie różni się od ${link("wersji angielskiej")}, obowiązuje wersja angielska, w zakresie, w jakim pozwala na to prawo.`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date, link) =>
      `Wersja angielska została zaktualizowana ${date}, po sporządzeniu tego tłumaczenia. ${link("Przeczytaj aktualną wersję angielską")}.`,
  },
};

export default pl;
