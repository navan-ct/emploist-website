// The website's words in Turkish. Same shape as en.ts, the source; see its
// header comment for how functions, HTML strings, and lists work.
//
// Turkish puts nouns after a number in the singular ("14 gün", "1.000 kredi"),
// so no word needs a plural form. Suffixes never attach straight to a number,
// price, or date (which could change); they go on the word after it instead,
// e.g. "14 günlük", "1.000 krediden", "22 Ekim 2026 tarihinde".
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("tr");

const tr: Messages = {
  site: {
    title: "Emploist: Yapay zekâ destekli aday takip sistemi",
    description: (p) =>
      `Kariyer sayfanızda ilan yayınlayın, başvuruları toplayın, her adayın ilanınıza göre yapay zekâ puanını görün. Tüm ekip için ayda ${f.usd(p.priceUsd)}, ${p.trialDays} günlük ücretsiz deneme.`,
    imageAlt: "Emploist: En iyi adaylarınızı önce görün",
    skipToContent: "İçeriğe geç",
    home: "Emploist ana sayfası",
    blogFeedTitle: "Emploist blogu",
    blogFeedDescription: "Emploist ekibinden kılavuzlar ve güncellemeler.",
    monthlyOffer: (p) =>
      `${p.trialDays} günlük ücretsiz deneme, ardından tüm ekip için ayda ${f.usd(p.priceUsd)}.`,
    yearlyOffer: (p) =>
      `${p.trialDays} günlük ücretsiz deneme, ardından tüm ekip için yılda ${f.usd(p.yearlyPriceUsd)}.`,
  },

  nav: {
    main: "Ana menü",
    features: "Özellikler",
    careersPage: "Kariyer sayfası",
    aiAssistants: "Yapay zekâ asistanları",
    mcp: "MCP",
    /** The last item in the Features menu, after the feature sections. */
    moreFeatures: "Diğer özellikler",
    pricing: "Fiyatlar",
    faq: "SSS",
    blog: "Blog",
    docs: "Belgeler",
    signIn: "Giriş yap",
    startFreeTrial: "Ücretsiz deneyin",
    menu: "Menü",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "Dil",
  },

  footer: {
    tagline:
      "Kariyer sayfası ve yapay zekâ puanlaması sunan aday takip sistemi; angaryayla uğraşmadan doğru kişileri işe almak isteyen ekipler için.",
    product: "Ürün",
    resources: "Kaynaklar",
    account: "Hesap",
    legal: "Yasal",
    rssFeed: "RSS beslemesi",
    support: "Destek",
    llmsTxt: "llms.txt",
    terms: "Hizmet Şartları",
    privacy: "Gizlilik Politikası",
    copyright: (year) => `© ${year} Emploist. Tüm hakları saklıdır.`,
    questions: "Sorularınız mı var?",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "Ücretsiz denemenizi başlatın",
  },

  hero: {
    eyebrow: "Yapay zekâ puanlamalı aday takibi",
    title: "En iyi başvuruları, manuel filtreler ve karmaşık ATS olmadan görün",
    lead: "Emploist size bir kariyer sayfası, sade bir işe alım süreci ve her başvuruyu ilan açıklamanıza göre puanlayan bir yapay zekâ sunar. Ekibiniz başvuruları ayıklamaya daha az, pozisyona uygun kişilerle ilgilenmeye daha çok zaman ayırır.",
    cta: "Adaylarınızı sıralayın",
    seeHowItWorks: "Nasıl çalıştığını görün",
    note: (p) => `${p.trialDays} gün ücretsiz, ardından ayda ${f.usd(p.priceUsd)}. Kullanıcı başına ücret yok.`,
    screenshotAlt: `Emploist'te Senior Product Designer ilanına gelen başvurular, en iyi eşleşmeye göre sıralanmış: ${f.percent(91)}, ${f.percent(88)}, ${f.percent(86)} ve diğerleri; her adayın adı, e-postası ve yorum sayısıyla birlikte.`,
  },

  howItWorks: {
    eyebrow: "Nasıl çalışır",
    title: "İlandan işe alıma, her şey tek yerde.",
    steps: [
      {
        title: "İlan yayınlayın",
        text: "Açıklamayı yazın, yanıtlanmasını istediğiniz soruları seçin ve ilanı kariyer sayfanızda yayınlayın.",
      },
      {
        title: "Adaylar başvurur",
        text: "Adaylar ilanı kariyer sayfanızda bulur ve birkaç dakikada başvurur. Hesap açmaları gerekmez.",
      },
      {
        title: "Yapay zekâ her başvuruyu puanlar",
        text: "Her başvuru, ilana göre bir eşleşme puanı alır. Puanın dökümünü ekibiniz rahatça okuyabilir.",
      },
      {
        title: "Adayları ilerletin",
        text: "Adayları inceleyin, yorum yapın ve aşamalarınız arasında taşıyın. Her adımda adaylara e-posta gider.",
      },
    ],
  },

  ranking: {
    eyebrow: "Yapay zekâ puanlaması",
    title: "Gerçekten anlaşılır bir eşleşme puanı.",
    lead: "Her başvuru, gelir gelmez ilana göre puanlanır. Gizemli bir sayı yerine, her adayın pozisyon için önemli olan konularda ne durumda olduğunu görürsünüz.",
    points: [
      {
        title: "Net bir döküm.",
        text: "Beceriler, deneyim, kıdem uyumu ve yeterlilikler ayrı ayrı puanlanır; böylece birinin tam olarak nerede öne çıktığını görebilirsiniz.",
      },
      {
        title: "Özgeçmişten fazlası.",
        text: "Başvuru sorularınıza verilen yanıtlar da değerlendirmeye dahildir.",
      },
      {
        title: "Adil ve tutarlı.",
        text: "Bir ilana başvuran her aday aynı şekilde, aynı kriterlere göre puanlanır.",
      },
      {
        title: "Karar sizde.",
        text: "Eşleşme puanı incelemenize yol göstermek içindir, onun yerini almak için değil. Bir ilanı güncellediğinizde adaylarını yeniden puanlayabilirsiniz.",
      },
    ],
    screenshotAlt: `Emploist'te bir adayın ${f.percent(91)} eşleşmesi ve dökümü: beceriler (93), deneyim (88), kıdem uyumu (95) ve yeterlilikler (85); her biri kısa bir açıklamayla.`,
    caption: (p) =>
      `Her puanlama bir yapay zekâ kredisi kullanır. Planınız her ay ${f.number(p.credits)} kredi içerir.`,
  },

  careersPage: {
    eyebrow: "Kariyer sayfası",
    title: "İlk günden hazır bir kariyer sayfası.",
    lead: "Her şirket, kendi logosu ve rengiyle hızlı ve şık bir kariyer sayfasına sahip olur. Yeni ilanlar yayınladığınız anda görünür, başvurular da doğrudan ilanın gelen kutusuna düşer.",
    screenshotAlt:
      "Fieldnote Labs kariyer sayfası: şirketin logosunu içeren bir üst bilgi, kısa bir tanıtım ve departman ile konum filtreleriyle, departmana göre gruplanmış açık pozisyonlar.",
    mobileScreenshotAlt:
      "Telefonda bir ilan sayfası: Berlin'de hibrit ve tam zamanlı Senior Product Designer pozisyonu, “Apply for this job” düğmesi ve ilan açıklaması.",
    facts: [
      {
        title: "Kendi adresiniz veya alan adınız",
        text: "yourcompany.emploist.com ile başlayın, ardından careers.yourcompany.com gibi kendi alan adınızı bağlayın.",
      },
      {
        title: "Kolay gezinme",
        text: "Açık pozisyonlar departmana göre gruplanır, adaylar da bunları departmana ve konuma göre filtreleyebilir.",
      },
      {
        title: "Her ekranda hızlı",
        text: "Sayfalar hızla yüklenir ve telefondan geniş monitörlere kadar her yerde harika görünür.",
      },
      {
        title: "Başvurmak dakikalar sürer",
        text: "Hesap veya şifre yok. Adaylar formunuzu doldurur, özgeçmişlerini ekler ve hepsi bu.",
      },
      {
        title: "Yapay zekâ konusunda şeffaf",
        text: "Başvuruların incelenmesine yapay zekâ yardımcı olduğunda sayfanız bunu adaylara bildirir.",
      },
      {
        title: "Spama karşı korumalı",
        text: "Yerleşik koruma spamı gelen kutunuzdan uzak tutar, böylece yalnızca gerçek adayları görürsünüz.",
      },
    ],
  },

  designInCode: {
    eyebrow: "Kodla tasarım",
    title: "Web sitenizle birebir aynı görünsün.",
    lead: "Varsayılan tasarım, yalnızca logonuz ve renginizle bile iyi görünür. Daha fazlasını istediğinizde, kariyer sitenizin her sayfası değiştirebileceğiniz HTML, CSS ve Liquid şablonlarından oluşur.",
    points: [
      "Doğrudan Emploist'te, masaüstü ve telefon boyutlarında canlı önizlemeyle düzenleyin.",
      "Ya da kodu indirin, kendi düzenleyicinizde veya bir yapay zekâ asistanıyla değiştirin ve tek bir komutla bilgisayarınızda önizleyin.",
      "Hatalar siz kaydetmeden önce yakalanır, böylece adaylar her zaman çalışan bir sayfa görür.",
    ],
    screenshotAlt:
      "Emploist'teki kariyer sayfası kod düzenleyicisi: solda söz dizimi vurgulamalı düzen şablonu, sağda kariyer sayfasının canlı önizlemesi.",
  },

  formsAndTeam: {
    label: "Başvuru formları ve ekip çalışması",
    forms: {
      eyebrow: "Başvuru formları",
      title: "Her pozisyon için önemli olanı sorun.",
      text: "Her ilan için kısa ve uzun yanıtlar, evet veya hayır soruları, çoktan seçmeli sorular, açılır listeler, ölçekler ve onay kutularıyla bir form oluşturun; ardından hepsini sürükleyip istediğiniz sıraya dizin.",
      screenshotAlt:
        "Emploist'te bir başvuru formu: ad soyad, e-posta ve özgeçmiş; ardından telefon numarası, portfolyo bağlantısı, deneyim yılıyla ilgili tek seçimli bir soru ve kullanılan araçlarla ilgili çoklu seçimli bir soru.",
    },
    team: {
      eyebrow: "Ekip çalışması",
      title: "Birlikte karar verin.",
      text: "Herhangi bir başvuruya yorum yapın ve fikrini almak için bir ekip arkadaşınızdan @ ile bahsedin. Tüm ekibinizi ek ücret ödemeden davet edin.",
      screenshotAlt:
        "Üç ekip arkadaşının bir başvuruya yaptığı yorumlar ve ekip arkadaşları listesinden seçilen Priya Shah'tan bahseden yeni bir yorum.",
    },
  },

  stagesAndEmails: {
    eyebrow: "Aşamalar ve e-postalar",
    title: "Adayları otomatik olarak bilgilendirin.",
    lead: "Her ilanın kendi aşamaları vardır. Bir adayı sonraki aşamaya taşıdığınızda o aşamanın e-postası kendiliğinden gider. Bir kez yazarsınız, her aday kendine özel bir e-posta alır.",
    points: [
      "Hazır aşamalarla başlayın; ardından her pozisyona uyacak şekilde yeniden adlandırın, sıralayın ve kendi aşamalarınızı ekleyin.",
      "Her aşama hazır bir e-postayla gelir. E-postayı ad ve pozisyon adı gibi ayrıntılarla kişiselleştirin ve canlı önizlemede kontrol edin.",
      "Birini yanlışlıkla mı taşıdınız? Geri alın, e-posta gönderilmez.",
      "E-postalar şirketinizin şablonunu ve logosunu kullanır, yanıtlar da seçtiğiniz adrese gider.",
    ],
    editorScreenshotAlt:
      "Emploist'te “Interviewing” aşamasının e-postası. Konu ve mesajda adayın adı, pozisyon adı ve şirket adı için değişkenler kullanılıyor.",
    previewScreenshotAlt:
      "Sam adlı bir adaya ulaştığı hâliyle tamamlanmış e-posta: en üstte Fieldnote Labs, Senior Product Designer pozisyonu için kişisel bir mülakat daveti ve açık pozisyonlara giden bir bağlantı.",
  },

  aiAssistants: {
    eyebrow: "Yapay zekâ asistanları",
    title: "İşe alımı yapay zekâ asistanınızdan yönetin.",
    lead: "Claude, ChatGPT veya MCP destekleyen başka bir asistanı bağlayın; ilanlarınız ve adaylarınızla yalnızca sorarak çalışın.",
    points: [
      {
        title: "Adaylarınız hakkında soru sorun.",
        text: "Bir ilan için en iyi eşleşmeleri bulun, yeni başvurulardan haberdar olun veya birinin yanıtlarının kısa bir özetini alın.",
      },
      {
        title: "İşlerinizi halledin.",
        text: "İlan oluşturup yayınlayın, adayları aşamalar arasında taşıyın ve yorum bırakın; hepsi doğrudan sohbetten.",
      },
      {
        title: "Kontrol sizde kalsın.",
        text: "Asistanınız sizinle aynı erişime sahip olur, fazlasına değil. Bağlantısını istediğiniz zaman kesebilirsiniz; asistan hemen durur.",
      },
    ],
    worksWith: "Şunlarla çalışır",
    otherClients: "popüler yapay zekâ asistanları",
    chat: {
      label: "Emploist'e bağlı bir yapay zekâ asistanıyla örnek bir sohbet",
      assistant: "Yapay zekâ asistanınız",
      /** After "Emploist", hidden on phones: "Emploist connected". */
      connected: "bağlı",
      /** Read out before a tool's name: "Used Emploist list_applications". */
      used: "Kullanılan araç:",
      question: "Senior Product Designer ilanına en uygun adaylar kimler?",
      answerIntro: "Gelen kutusundaki en iyi üç eşleşme şunlar:",
      /** A match on the list, e.g. "91% match"; the word is hidden on phones. */
      match: (percent) => ({ value: f.percent(percent), label: "eşleşme" }),
      answerOutro: "Diego kıdem uyumu ve becerilerde önde. Birini sonraki aşamaya taşımamı ister misiniz?",
      request: "Diego'yu Phone screen aşamasına taşı.",
      done: "Tamam. Diego artık Phone screen aşamasında ve bu aşamanın e-postası 2 dakika sonra gönderilecek. Fikrinizi değiştirirseniz o zamana kadar geri alabilirim.",
      placeholder: "İlanlarınızı ve adaylarınızı sorun",
    },
    caption: "Herkes kendi asistanını birkaç adımda bağlar.",
  },

  /** The /mcp/ landing page. */
  mcp: {
    description:
      "Claude, ChatGPT ve diğer yapay zekâ asistanlarını MCP ile Emploist'e bağlayın. Adaylar hakkında sorun, aşamalar arasında taşıyın ve sohbetten ilan oluşturun; hepsi kendi yetkilerinizle.",
    eyebrow: "MCP",
    heading: "Zaten kullandığınız sohbetten işe alın.",
    lead: "MCP, Emploist'i Claude, ChatGPT ve diğer asistanlara bağlar. Siz kendi kelimelerinizle sorarsınız. Asistan Emploist'te sizin adınıza işi yapar.",
    whatTitle: "MCP nedir?",
    whatLead:
      "MCP, Model Context Protocol'ün kısaltmasıdır. Yapay zekâ asistanının başka bir uygulamayı güvenle kullanması için açık bir yoldur.",
    whatPoints: [
      {
        title: "Bir bağlayıcı, yeni bir ürün değil.",
        text: "İlanlarınız ve adaylarınız hâlâ Emploist'te durur. MCP, asistanınızın onlara ulaşma yoludur.",
      },
      {
        title: "Tek bir sunucu adresi.",
        text: "Emploist'in barındırılan MCP sunucusu mcp.emploist.com adresindedir. Bunu Claude, ChatGPT veya MCP destekleyen başka bir istemciye yapıştırırsınız.",
      },
      {
        title: "Planınıza dahil.",
        text: "Ekibinizdeki herkes kendi asistanını bağlayabilir. Sohbetten bir başvuruyu puanlamak, Emploist'te puanlamakla aynı yapay zekâ kredisini kullanır.",
      },
    ],
    howTitle: "Nasıl çalışır",
    howSteps: [
      {
        title: "Bir kez bağlanırsınız.",
        text: "Emploist'te MCP'yi açın, asistanınızı seçin ve adımlarını izleyin. İstendiğinde Emploist ile oturum açın. Kopyalanacak API anahtarı yok.",
      },
      {
        title: "Sohbette sorarsınız.",
        text: "Emploist'ten bahsedin; ardından kimin bir role uyduğunu sorun, birini sonraki aşamaya taşıyın, yorum bırakın veya bir ilan taslağı hazırlayın.",
      },
      {
        title: "Emploist işi yapar.",
        text: "Asistan, Emploist araçlarını sizin oturumunuz altında çağırır. Yazma işlemleri kalıcı olmadan önce onay ister.",
      },
    ],
    canDoTitle: "Neler sorabilirsiniz",
    canDo: [
      "Senior Product Designer ilanına en uygun adaylar kimler?",
      "Priya'yı Phone screen aşamasına taşı ve aşama e-postası gittiğinde haber ver.",
      "Bugünkü yeni başvuruları özetle.",
      "Berlin için bir Customer Support ilanı taslağı hazırla ve yayınlamadan önce formu göster.",
      "Sara'nın başvurusuna Priya için bir yorum bırak.",
    ],
    connectTitle: "Bir asistan bağlayın",
    connectLead: "Emploist'in MCP sayfasında her istemci için sekmeler vardır. Sunucu URL'si her yerde aynıdır:",
    serverUrl: "https://mcp.emploist.com",
    connectClients: [
      {
        name: "Claude",
        text: "Claude'da Customize → Connectors'ı açın, özel bir bağlayıcı ekleyin, URL'yi yapıştırın ve Emploist'te oturum açın.",
      },
      {
        name: "ChatGPT",
        text: "Web'de ChatGPT'de Plugins'i açın, özel bir MCP sunucusu ekleyin, URL'yi yapıştırın, eklentiyi oluşturun, ardından @ ile bahsedin.",
      },
      {
        name: "Diğer istemciler",
        text: "Cursor, VS Code, Claude Code ve diğer MCP istemcileri aynı URL'yi kullanır. Emploist'in MCP sayfası her biri için adımları listeler.",
      },
    ],
    controlTitle: "Kontrol sizde kalır",
    controlPoints: [
      {
        title: "Sizin rolünüz, fazlası değil.",
        text: "Asistan yalnızca Emploist'te zaten yapabildiklerinizi yapabilir. Faturalandırma, ekip davetleri ve şirketi silme erişimin dışındadır.",
      },
      {
        title: "Yazmalarda onay.",
        text: "Bir adayı taşımak veya ilan oluşturmak önce onay ister. Yanlış görünen her şeyi reddedin.",
      },
      {
        title: "İstediğiniz zaman bağlantıyı kesin.",
        text: "MCP sayfasında bir asistanın bağlantısını kesin, durur. Yöneticiler MCP'yi tüm şirket için de kapatabilir.",
      },
    ],
    worksWith: "Şunlarla çalışır",
    guidesTitle: "Kılavuzlar",
    guidesLead: "Adım adım kurulum ve örnekler.",
    guideClaude: "Claude ile MCP üzerinden işe alımı yönetmek",
    guideChatgpt: "İK yöneticileri için en iyi ChatGPT eklentileri",
    guideDocs: "Bir yapay zekâ asistanı bağlayın",
    cta: "Yapay zekâ asistanınızı bağlayın",
    copySetup: "MCP kurulumunu kopyala",
    copiedSetup: "Kopyalandı",
    /** Pasted into an AI chat. Keep facts (URL, OAuth) intact across locales. */
    setupCopy: (u: { mcpDocs: string; serverUrl: string }) =>
      `Emploist bir aday takip yazılımıdır. Bu dosya, bir yapay zekâ asistanına Emploist'in MCP sunucusuna nasıl bağlanacağını ve bağlandıktan sonra neler yapabileceğini anlatır.

Bu sohbetten işe alımı yönetebilmek için Emploist'in MCP sunucusunu bağlayın.

MCP Docs: ${u.mcpDocs}
Server URL: ${u.serverUrl}
Authentication: OAuth (istenince Emploist ile oturum açın)

Bağlandıktan sonra Emploist'te ilanlar ve adaylarla ilgili yardımcı olun: başvuruları listeleyin ve puanlayın, kişileri aşamalar arasında taşıyın, yorum bırakın, ilan oluşturun veya yayınlayın. Yalnızca benim Emploist yetkilerimle çalışın. Her yazma işleminden önce onay isteyin.
`,
  },

  details: {
    eyebrow: "Ve dahası",
    title: "İşe alımı kolaylaştıran ayrıntılar.",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "İstediğiniz zaman dışa aktarın",
        text: "Bir ilanın başvurularını elektronik tablo olarak, tüm özgeçmişlerle birlikte aynı ZIP dosyasında indirin.",
      },
      {
        title: "Özgeçmişler elinizin altında",
        text: "PDF ve Word özgeçmişler, Emploist içinde başvurunun hemen yanında açılır. Hiçbir şey indirmeniz gerekmez.",
      },
      {
        title: "Sınırsız ilan",
        text: "İhtiyacınız kadar ilan yayınlayın, arama ve filtrelerle herhangi birini saniyeler içinde bulun.",
      },
      {
        title: "İlanı çoğaltın",
        text: "Benzer bir pozisyon için mi işe alım yapıyorsunuz? Bir ilanın ayrıntılarını, formunu, aşamalarını ve e-postalarını tek tıkla kopyalayın.",
      },
      {
        title: "Şifre yok",
        text: "Google, Microsoft veya e-postanıza gönderilen tek kullanımlık bir kodla giriş yapın.",
      },
      {
        title: "Varsayılan olarak gizli",
        text: "Özgeçmişler gizli olarak saklanır ve yalnızca ekibinizdeki kişiler açabilir.",
      },
      {
        title: "Önemli bildirimler",
        text: "Biri sizden bahsettiğinde veya yorum yaptığınız bir başvuruya yanıt verdiğinde bildirim alın.",
      },
      {
        title: "Açık ve koyu",
        text: "Emploist sisteminizin temasını izler; dilerseniz istediğiniz temayı kendiniz de seçebilirsiniz.",
      },
    ],
  },

  pricing: {
    eyebrow: "Fiyatlar",
    title: "Her şeyi içeren tek bir plan.",
    lead: "Özelliklere göre ayrılmış paketler yok, kullanıcı başına ücret de yok. Aylık veya yıllık ödenen tek bir fiyat, kaç kişiyi davet ederseniz edin tüm şirketinizi kapsar.",
    creditTitle: "Yapay zekâ kredisi nedir?",
    creditText: (p) =>
      `Bir başvuruyu puanlamak bir kredi kullanır. Planınız her ay ${f.number(p.credits)} kredi, yıllık ödediğinizde ise tek seferde ${f.number(p.yearlyCredits)} kredi içerir; istediğiniz zaman ek kredi de alabilirsiniz.`,
    billing: "Faturalandırma dönemi",
    monthly: "Aylık",
    yearly: "Yıllık",
    save: (percent) => `${f.percent(percent)} tasarruf`,
    perMonth: "/ay",
    perYear: "/yıl",
    monthlyCredits: (credits) => `Her ay ${f.number(credits)} yapay zekâ kredisi`,
    yearlyCredits: (credits) => `Tek seferde ${f.number(credits)} yapay zekâ kredisi`,
    startTrial: (days) => `${days} günlük ücretsiz denemenizi başlatın`,
    included: [
      "Sınırsız ilan",
      "Tüm ekibiniz, kullanıcı başına ücret olmadan",
      "Kendi alan adınızda bir kariyer sayfası",
      "Kariyer sayfanızın kodu üzerinde tam kontrol",
      "Başvuru formları ve işe alım aşamaları",
      "Kendi şablonunuzla adaylara otomatik e-postalar",
      "Yorumlar, bahsetmeler ve bildirimler",
      "Başvurularınızı istediğiniz zaman dışa aktarma",
    ],
    /** HTML. */
    trial: (p) =>
      `<strong>Ücretsiz deneme</strong>, her şeyi denemeniz için size ${p.trialDays} gün ve ${f.number(p.trialCredits)} yapay zekâ kredisi verir. Deneme bitene kadar sizden ücret alınmaz ve istediğiniz zaman iptal edebilirsiniz.`,
    moreCredits: "Daha fazla krediye mi ihtiyacınız var?",
    packsNote: "İstediğiniz zaman paket satın alın. Paketlerin süresi hiçbir zaman dolmaz.",
    packsCaption: "Kredi paketleri ve fiyatları",
    creditsColumn: "Kredi",
    priceColumn: "Fiyat",
    packCredits: (credits) => `${f.number(credits)} kredi`,
  },

  faq: {
    eyebrow: "SSS",
    title: "Merak ettikleriniz.",
    /** HTML. `email` is a link to the support address. */
    intro: (email) => `Aradığınızı bulamadınız mı? ${email} adresine yazın, size geri dönelim.`,
    items: (p) => [
      {
        question: "Ücretsiz deneme nasıl işliyor?",
        answer: `${p.trialDays} gün boyunca tüm özellikleri kullanırsınız ve gerçek başvurular üzerinde denemeniz için ${f.number(p.trialCredits)} yapay zekâ kredisi alırsınız. Deneme bitene kadar sizden ücret alınmaz ve o zamana kadar istediğiniz zaman iptal edebilirsiniz.`,
      },
      {
        question: "Yapay zekâ kredisi nedir?",
        answer: `Bir başvuruyu puanlamak bir kredi kullanır. Planınız her ay ${f.number(p.credits)} kredi, yıllık ödediğinizde ise tek seferde ${f.number(p.yearlyCredits)} kredi içerir. Daha fazlasına ihtiyacınız olursa paketler ${f.usd(p.firstPack.priceUsd)} karşılığında ${f.number(p.firstPack.credits)} krediden başlar ve süreleri hiçbir zaman dolmaz.`,
      },
      {
        question: "Yıllık ödeme yapabilir miyiz?",
        answer: `Evet. Yıllık plan yılda ${f.usd(p.yearlyPriceUsd)} tutarındadır, yani aylık ödemekten ${f.percent(p.yearlySavingsPercent)} daha ucuzdur ve ${f.number(p.yearlyCredits)} yapay zekâ kredisi tek seferde verilir. Yıllık plan da aynı ${p.trialDays} günlük ücretsiz denemeyle başlar. Aylık plandaysanız istediğiniz zaman Faturalandırma sayfasından yıllık plana geçebilirsiniz; yıl için ödediğiniz tutardan mevcut ayınızın kullanılmayan günleri düşülür.`,
      },
      {
        question: "Kredimiz biterse ne olur?",
        answer:
          "Hiçbir şey kaybolmaz. Başvurular gelmeye devam eder ve bunları puanlamak için istediğiniz zaman daha fazla kredi satın alabilirsiniz.",
      },
      {
        question: "Yapay zekâ bir başvuruyu nasıl puanlıyor?",
        answer:
          "Her özgeçmişi ve sorularınıza verilen yanıtları okur, bunları yayınladığınız ilanla karşılaştırır. Beceriler, deneyim, kıdem uyumu ve yeterlilikler ayrı ayrı puanlanır, ardından tek bir eşleşme puanında birleştirilir; böylece bir adayın neden o sırada yer aldığını görebilirsiniz.",
      },
      {
        question: "Yapay zekâ puanlamasını kapatabilir miyiz?",
        answer: "Evet. Bir yönetici, yapay zekâ özelliklerini tüm şirketiniz için Ayarlar sayfasından açıp kapatabilir.",
      },
      {
        question: "Kariyer sayfası için kendi alan adımızı kullanabilir miyiz?",
        answer:
          "Evet. Kariyer sayfanız yourcompany.emploist.com adresinde başlar ve careers.yourcompany.com gibi bir alan adını, HTTPS dahil, birkaç adımda bağlayabilirsiniz.",
      },
      {
        question: "Adayların başvurmak için hesap açması gerekiyor mu?",
        answer:
          "Hayır. Adaylar kariyer sayfanızdaki formu doldurur ve özgeçmişlerini ekler. Bu birkaç dakika sürer.",
      },
      {
        question: "Ekibimizde kimler Emploist'i kullanabilir?",
        answer:
          "Davet ettiğiniz herkes, ek ücret olmadan. Yöneticiler ayrıca faturalandırmayı, kariyer sayfasını ve şirket ayarlarını yönetir.",
      },
      {
        question: "Emploist hangi dilleri destekliyor?",
        answer:
          "Emploist'i İngilizce, Fransızca, Almanca, İspanyolca, İtalyanca, Japonca, Korece, Lehçe, Türkçe ve Endonezce kullanabilirsiniz; ekibinizdeki herkes kendi dilini seçer. Kariyer sayfaları ve adaylara giden e-postalar başlangıçta İngilizcedir ve bunları istediğiniz dilde yeniden yazabilirsiniz.",
      },
      {
        question: "Verilerimizi yanımızda götürebilir miyiz?",
        answer:
          "Evet. Herhangi bir ilanın başvurularını, tüm başvuruları ve yanıtları içeren bir elektronik tablo olarak, her özgeçmişle birlikte dışa aktarın.",
      },
      {
        question: "Emploist'i Claude veya ChatGPT üzerinden kullanabilir miyiz?",
        answer:
          "Evet. Ekibinizdeki herkes Claude, ChatGPT, Grok, Gemini, Copilot veya MCP destekleyen başka bir asistanı bağlayabilir ve ilanları ve başvuruları sohbet ederek yönetebilir. Bu, planınıza dahildir. Bir asistan üzerinden başvuru puanlamak, tıpkı Emploist'te olduğu gibi bir yapay zekâ kredisi kullanır.",
      },
      {
        question: "Bir yapay zekâ asistanı Emploist'te neler yapabilir?",
        answer:
          "İlanları, aşamaları ve başvuru formlarını görüntüleyip değiştirebilir, başvuruları ve özgeçmişleri okuyabilir, adayları aşamalar arasında taşıyabilir ve yorum yapabilir. Asistan, onu bağlayan kişinin adına ve o kişinin rolüyle çalışır. Faturalandırma, ekip üyeleri ve şirketinizi ya da hesabınızı silme dahil değildir. Asistanınızın bağlantısını istediğiniz zaman kesebilirsiniz; bir yönetici de asistanları Ayarlar sayfasından tüm şirket için kapatabilir.",
      },
      {
        question: "İstediğimiz zaman iptal edebilir miyiz?",
        answer:
          "Evet. Dilediğiniz zaman iptal edin; planınız, ödemesini yaptığınız dönemin sonuna kadar çalışmaya devam eder. Sonrasında da her şeyi görebilir ve dışa aktarabilirsiniz.",
      },
    ],
  },

  callToAction: {
    title: "En iyi adaylarınızla bu hafta tanışın.",
    text: (p) =>
      `Emploist'i ${p.trialDays} gün ücretsiz deneyin. Kurulum birkaç dakika sürer ve siz hazır olduğunuz anda kariyer sayfanız da hazır olur.`,
    talkToUs: "Bize ulaşın",
  },

  notFound: {
    title: "Sayfa bulunamadı",
    description: "Bu sayfa mevcut değil.",
    heading: "Bu sayfa mevcut değil.",
    text: "Taşınmış olabilir ya da bağlantıda bir yazım hatası olabilir. Sizi doğru yere yönlendirelim.",
    home: "Ana sayfaya gidin",
    blog: "Blogu okuyun",
  },

  docs: {
    title: "Emploist belgeleri",
    lead: "Emploist’te işleri ilerletmek için bu resmi belgelere bakın.",
    copyMarkdown: "Markdown’ı kopyala",
    copied: "Kopyalandı",
    discussWith: "Şununla konuş",
    discussPrompt: (title, url) =>
      `Bu Emploist rehberinde bana yardım et: "${title}". ${url} adresini oku ve sorularımı yanıtla.`,
  },

  blog: {
    title: "Blog",
    description:
      "İşe alım, kariyer sayfaları ve aday takibi üzerine kılavuzlar ile Emploist ekibinden ürün güncellemeleri.",
    heading: "İyi işe alım üzerine notlar.",
    emptyTitle: "İlk yazılar yolda.",
    /** HTML. */
    emptyText: (link) =>
      `İşe alım ve Emploist'ten en iyi şekilde yararlanma üzerine kılavuzlar yazıyoruz. ${link("RSS beslemesi")} üzerinden bizi takip edin veya bu arada ücretsiz denemenizi başlatın.`,
    minutesToRead: (minutes) => `${minutes} dk okuma`,
    draft: "Taslak",
    readPost: "Yazıyı okuyun",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "İngilizce",
    updated: (date) => `Güncellendi: ${date}`,
    home: "Ana sayfa",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "İçerik haritası",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Emploist'i deneyin",
    ctaTitle: "En iyi adaylarınızı önce görün.",
    ctaText: (p) =>
      `Emploist'i ${p.trialDays} gün ücretsiz deneyin, ardından tüm ekibiniz için ayda ${f.usd(p.priceUsd)}.`,
    defaultAuthor: "Emploist ekibi",
    writtenBy: (name) => `Yazan: ${name}`,
  },

  listedOn: {
    title: "Listelendiğimiz yerler",
    description:
      "Kariyer sayfası ve yapay zekâ puanlaması sunan aday takip sistemi Emploist'in listelendiği yazılım dizinleri.",
    heading: "Emploist'i internette bulun.",
    lead: "Emploist'in listelendiği dizinler.",
  },

  legal: {
    lastUpdated: (date) => `Son güncelleme: ${date}`,
    contents: "İçindekiler",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link) =>
        `Bu metin, Hizmet Şartlarımızın kolaylık sağlamak amacıyla sunulan bir çevirisidir. ${link("İngilizce sürüm")} hukuken bağlayıcıdır ve iki metin arasında farklılık olması hâlinde İngilizce sürüm geçerlidir.`,
      privacy: (link) =>
        `Bu metin, Gizlilik Politikamızın kolaylık sağlamak amacıyla sunulan bir çevirisidir. Bu çeviri ile ${link("İngilizce sürüm")} arasında farklılık olması hâlinde, kanunun izin verdiği ölçüde İngilizce sürüm geçerlidir.`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date, link) =>
      `İngilizce sürüm, bu çeviri yapıldıktan sonra ${date} tarihinde güncellendi. ${link("Güncel İngilizce sürümü okuyun")}.`,
  },
};

export default tr;
