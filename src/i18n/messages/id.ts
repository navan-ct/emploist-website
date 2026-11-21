// The website's words in Indonesian, translated from en.ts (the source), with
// the same shape. The terms follow the Emploist app's Indonesian translation.
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("id");

const id: Messages = {
  site: {
    title: "Emploist: ATS dengan penilaian AI dan halaman karier",
    description: (p) =>
      `Pasang lowongan di halaman karier Anda dan lihat setiap lamaran dinilai AI sesuai deskripsi lowongan. ${f.usd(p.priceUsd)}/bulan untuk seluruh tim, uji coba gratis ${p.trialDays} hari.`,
    imageAlt: "Emploist: lihat pelamar terbaik Anda lebih dulu",
    skipToContent: "Langsung ke konten",
    home: "Beranda Emploist",
    blogFeedTitle: "Blog Emploist",
    blogFeedDescription: "Panduan dan kabar terbaru dari tim Emploist.",
    monthlyOffer: (p) =>
      `Uji coba gratis ${p.trialDays} hari, lalu ${f.usd(p.priceUsd)} per bulan untuk seluruh tim.`,
    yearlyOffer: (p) =>
      `Uji coba gratis ${p.trialDays} hari, lalu ${f.usd(p.yearlyPriceUsd)} per tahun untuk seluruh tim.`,
  },

  nav: {
    main: "Utama",
    features: "Fitur",
    careersPage: "Halaman karier",
    aiAssistants: "Asisten AI",
    /** The last item in the Features menu, after the feature sections. */
    moreFeatures: "Fitur lainnya",
    pricing: "Harga",
    faq: "FAQ",
    blog: "Blog",
    signIn: "Masuk",
    startFreeTrial: "Mulai uji coba gratis",
    menu: "Menu",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "Bahasa",
  },

  footer: {
    tagline:
      "Aplikasi rekrutmen dengan halaman karier dan penilaian AI, untuk tim yang ingin merekrut dengan baik tanpa repot urusan administratif.",
    product: "Produk",
    resources: "Sumber daya",
    account: "Akun",
    legal: "Legal",
    rssFeed: "Feed RSS",
    support: "Bantuan",
    terms: "Ketentuan Layanan",
    privacy: "Kebijakan Privasi",
    copyright: (year) => `© ${year} Emploist. Hak cipta dilindungi undang-undang.`,
    questions: "Ada pertanyaan?",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "Mulai uji coba gratis Anda",
  },

  hero: {
    eyebrow: "Aplikasi rekrutmen dengan penilaian AI",
    title: "Lihat pelamar terbaik Anda lebih dulu.",
    lead: "Emploist memberi Anda halaman karier, alur rekrutmen yang sederhana, dan AI yang menilai setiap lamaran berdasarkan deskripsi lowongan Anda. Tim Anda tak perlu lama memilah, dan punya lebih banyak waktu untuk orang-orang yang cocok.",
    seeHowItWorks: "Lihat cara kerjanya",
    note: (p) => `${p.trialDays} hari gratis, lalu ${f.usd(p.priceUsd)} per bulan. Tanpa biaya per pengguna.`,
    screenshotAlt:
      "Lamaran untuk lowongan Senior Product Designer di Emploist, diurutkan dari yang paling cocok: 91%, 88%, 86%, dan seterusnya, dengan nama, email, dan jumlah komentar setiap pelamar.",
  },

  howItWorks: {
    eyebrow: "Cara kerjanya",
    title: "Dari lowongan hingga karyawan baru, di satu tempat.",
    steps: [
      {
        title: "Pasang lowongan",
        text: "Tulis deskripsinya, pilih pertanyaan yang ingin Anda ajukan, lalu publikasikan di halaman karier Anda.",
      },
      {
        title: "Kandidat melamar",
        text: "Orang-orang menemukan lowongan di halaman karier Anda dan melamar dalam beberapa menit. Tanpa perlu membuat akun.",
      },
      {
        title: "AI menilai setiap lamaran",
        text: "Setiap lamaran mendapat skor kecocokan terhadap lowongannya, dengan rincian yang mudah dipahami tim Anda.",
      },
      {
        title: "Majukan kandidat",
        text: "Tinjau, beri komentar, dan pindahkan pelamar melalui tahapan Anda. Email dikirim di setiap langkah.",
      },
    ],
  },

  ranking: {
    eyebrow: "Penilaian AI",
    title: "Skor kecocokan yang benar-benar bisa dipahami.",
    lead: "Setiap lamaran dinilai terhadap lowongannya begitu masuk. Alih-alih angka misterius, Anda bisa melihat seberapa sesuai setiap pelamar dalam hal-hal yang penting untuk posisi tersebut.",
    points: [
      {
        title: "Rincian yang jelas.",
        text: "Keterampilan, pengalaman, kesesuaian senioritas, dan kualifikasi masing-masing dinilai, sehingga Anda bisa melihat dengan tepat di mana keunggulan seseorang.",
      },
      {
        title: "Lebih dari sekadar CV.",
        text: "Jawaban atas pertanyaan di formulir lamaran Anda juga ikut diperhitungkan.",
      },
      {
        title: "Adil dan konsisten.",
        text: "Setiap pelamar untuk satu lowongan dinilai dengan cara yang sama, berdasarkan kriteria yang sama.",
      },
      {
        title: "Keputusan tetap di tangan Anda.",
        text: "Skor kecocokan ada untuk memandu tinjauan Anda, bukan menggantikannya. Jika Anda memperbarui lowongan, Anda dapat menilai ulang pelamarnya.",
      },
    ],
    screenshotAlt:
      "Skor kecocokan 91% seorang pelamar di Emploist, dirinci menjadi keterampilan (93), pengalaman (88), kesesuaian senioritas (95), dan kualifikasi (85), masing-masing dengan penjelasan singkat.",
    caption: (p) =>
      `Setiap penilaian menggunakan satu kredit AI. Paket Anda mencakup ${f.number(p.credits)} kredit setiap bulan.`,
  },

  careersPage: {
    eyebrow: "Halaman karier",
    title: "Halaman karier yang siap sejak hari pertama.",
    lead: "Setiap perusahaan mendapat halaman karier yang cepat dan apik, lengkap dengan logo dan warnanya. Lowongan baru muncul begitu Anda memublikasikannya, dan lamaran langsung tiba di kotak masuk lowongan tersebut.",
    screenshotAlt:
      "Halaman karier Northwind Labs: header dengan logo perusahaan, perkenalan singkat, dan lowongan yang dibuka, dikelompokkan per departemen, dengan filter departemen dan lokasi.",
    mobileScreenshotAlt:
      "Halaman lowongan di ponsel: Senior Product Designer di Berlin, hibrida dan penuh waktu, dengan tombol “Apply for this job” dan deskripsi lowongan.",
    facts: [
      {
        title: "Alamat Anda, atau domain sendiri",
        text: "Mulai di yourcompany.emploist.com, lalu hubungkan domain Anda sendiri, seperti careers.yourcompany.com.",
      },
      {
        title: "Mudah dijelajahi",
        text: "Lowongan yang dibuka dikelompokkan per departemen, dan kandidat dapat menyaringnya berdasarkan departemen dan lokasi.",
      },
      {
        title: "Cepat di semua layar",
        text: "Halaman dimuat dengan cepat dan tampil apik di mana saja, dari ponsel hingga monitor lebar.",
      },
      {
        title: "Melamar hanya butuh beberapa menit",
        text: "Tanpa akun atau kata sandi. Kandidat cukup mengisi formulir Anda, melampirkan CV, dan selesai.",
      },
      {
        title: "Transparan soal AI",
        text: "Halaman Anda memberi tahu kandidat saat AI membantu meninjau lamaran mereka.",
      },
      {
        title: "Terlindung dari spam",
        text: "Perlindungan bawaan menjaga kotak masuk Anda dari spam, sehingga Anda hanya melihat pelamar sungguhan.",
      },
    ],
  },

  designInCode: {
    eyebrow: "Desain lewat kode",
    title: "Tampil persis seperti situs web Anda.",
    lead: "Desain bawaannya sudah tampak bagus hanya dengan logo dan warna Anda. Jika Anda ingin lebih, setiap halaman situs karier Anda berupa template HTML, CSS, dan Liquid yang bisa Anda ubah.",
    points: [
      "Edit di dalam Emploist, dengan pratinjau langsung dalam ukuran desktop dan ponsel.",
      "Atau unduh kodenya, ubah di editor Anda sendiri atau dengan asisten AI, lalu lihat pratinjaunya di komputer Anda dengan satu perintah.",
      "Kesalahan terdeteksi sebelum Anda menyimpan, sehingga kandidat selalu melihat halaman yang berfungsi.",
    ],
    screenshotAlt:
      "Editor kode halaman karier di Emploist: template tata letak dengan penyorotan sintaksis di sebelah kiri, dan pratinjau langsung halaman karier di sebelah kanan.",
  },

  formsAndTeam: {
    label: "Formulir lamaran dan kerja tim",
    forms: {
      eyebrow: "Formulir lamaran",
      title: "Tanyakan yang penting untuk setiap posisi.",
      text: "Buat formulir untuk setiap lowongan dengan jawaban singkat dan panjang, pertanyaan ya atau tidak, pilihan, dropdown, skala, dan kotak centang, lalu seret semuanya ke urutan yang Anda inginkan.",
      screenshotAlt:
        "Formulir lamaran di Emploist: nama lengkap, email, dan CV, lalu nomor telepon, tautan portofolio, pertanyaan pilihan tunggal tentang lama pengalaman, dan pertanyaan beberapa pilihan tentang alat kerja.",
    },
    team: {
      eyebrow: "Kerja tim",
      title: "Putuskan bersama.",
      text: "Beri komentar di lamaran mana pun dan sebut rekan tim dengan @ untuk meminta pendapatnya. Undang seluruh tim Anda tanpa biaya tambahan.",
      screenshotAlt:
        "Komentar dari tiga rekan tim pada sebuah lamaran, dan komentar baru yang menyebut Priya Shah, yang dipilih dari daftar rekan tim.",
    },
  },

  stagesAndEmails: {
    eyebrow: "Tahapan dan email",
    title: "Kabari kandidat secara otomatis.",
    lead: "Setiap lowongan punya tahapannya sendiri. Pindahkan pelamar ke tahap berikutnya, dan email tahap itu terkirim dengan sendirinya: cukup ditulis sekali, tetap terasa personal bagi setiap orang.",
    points: [
      "Mulai dengan tahapan siap pakai, lalu ganti nama, ubah urutan, dan tambahkan tahap Anda sendiri sesuai kebutuhan setiap posisi.",
      "Setiap tahap dilengkapi email siap pakai. Personalisasikan dengan detail seperti nama depan dan judul lowongan, lalu periksa hasilnya di pratinjau langsung.",
      "Salah memindahkan seseorang? Urungkan, dan emailnya tidak akan terkirim.",
      "Email menggunakan tata letak dan logo perusahaan Anda, dan balasannya dikirim ke alamat yang Anda pilih.",
    ],
    editorScreenshotAlt:
      "Email untuk tahap “Interviewing” di Emploist. Subjek dan pesannya menggunakan variabel untuk nama depan pelamar, judul lowongan, dan nama perusahaan.",
    previewScreenshotAlt:
      "Hasil akhir emailnya, seperti yang diterima pelamar bernama Sam: Northwind Labs di bagian atas, undangan wawancara yang personal untuk posisi Senior Product Designer, dan tautan ke lowongan yang dibuka.",
  },

  aiAssistants: {
    eyebrow: "Asisten AI",
    title: "Kelola rekrutmen dari asisten AI Anda.",
    lead: "Hubungkan Claude, ChatGPT, atau asisten lain yang mendukung MCP, lalu kelola lowongan dan pelamar Anda cukup dengan bertanya.",
    points: [
      {
        title: "Tanyakan tentang pelamar Anda.",
        text: "Temukan pelamar yang paling cocok untuk suatu lowongan, lihat lamaran baru yang masuk, atau dapatkan ringkasan singkat jawaban seseorang.",
      },
      {
        title: "Selesaikan pekerjaan.",
        text: "Buat dan publikasikan lowongan, pindahkan pelamar antartahap, dan beri komentar, langsung dari chat.",
      },
      {
        title: "Kendali tetap di tangan Anda.",
        text: "Hubungkan asisten Anda dengan akses yang sama seperti Anda, tidak lebih. Putuskan koneksinya kapan saja, dan asisten langsung berhenti.",
      },
    ],
    worksWith: "Kompatibel dengan",
    otherClients: "asisten AI populer",
    chat: {
      label: "Contoh chat dengan asisten AI yang terhubung ke Emploist",
      assistant: "Asisten AI Anda",
      /** After "Emploist", hidden on phones: "Emploist connected". */
      connected: "terhubung",
      /** Read out before a tool's name: "Used Emploist list_applications". */
      used: "Menggunakan",
      question: "Pelamar mana untuk lowongan Senior Product Designer yang paling cocok?",
      answerIntro: "Berikut tiga pelamar yang paling cocok di kotak masuk:",
      /** A match on the list, e.g. "91% match"; the word is hidden on phones. */
      match: (percent) => ({ value: f.percent(percent), label: "cocok" }),
      answerOutro: "Diego unggul dalam kesesuaian senioritas dan keterampilan. Perlu saya pindahkan seseorang ke tahap berikutnya?",
      request: "Pindahkan Diego ke tahap Phone screen.",
      done: "Selesai. Diego sekarang ada di tahap Phone screen, dan email tahap itu akan terkirim dalam 2 menit. Saya bisa mengurungkannya sebelum itu jika Anda berubah pikiran.",
      placeholder: "Tanyakan tentang lowongan dan pelamar Anda",
    },
    caption: "Setiap orang menghubungkan asistennya sendiri dalam beberapa langkah.",
  },

  details: {
    eyebrow: "Dan masih banyak lagi",
    title: "Detail yang membuat rekrutmen lebih lancar.",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "Ekspor kapan saja",
        text: "Unduh lamaran sebuah lowongan sebagai spreadsheet, beserta semua CV dalam file ZIP yang sama.",
      },
      {
        title: "CV langsung terlihat",
        text: "CV dalam format PDF dan Word terbuka di dalam Emploist, di samping lamarannya. Tak perlu mengunduh apa pun.",
      },
      {
        title: "Lowongan tanpa batas",
        text: "Pasang lowongan sebanyak yang Anda perlukan, dan temukan lowongan mana pun dalam hitungan detik dengan pencarian dan filter.",
      },
      {
        title: "Duplikat lowongan",
        text: "Merekrut untuk posisi serupa? Salin detail, formulir, tahapan, dan email sebuah lowongan dengan sekali klik.",
      },
      {
        title: "Tanpa kata sandi",
        text: "Masuk dengan Google, Microsoft, atau kode sekali pakai yang dikirim ke email Anda.",
      },
      {
        title: "Privat secara bawaan",
        text: "CV disimpan secara privat, dan hanya anggota tim Anda yang dapat membukanya.",
      },
      {
        title: "Notifikasi yang penting",
        text: "Dapatkan notifikasi saat seseorang menyebut Anda atau membalas di lamaran yang pernah Anda komentari.",
      },
      {
        title: "Terang dan gelap",
        text: "Emploist mengikuti tema sistem Anda, atau Anda bisa memilih tema yang Anda suka.",
      },
    ],
  },

  pricing: {
    eyebrow: "Harga",
    title: "Satu paket, sudah termasuk semuanya.",
    lead: "Tanpa tingkatan fitur dan tanpa biaya per pengguna. Satu harga, dibayar bulanan atau tahunan, sudah mencakup seluruh perusahaan Anda, berapa pun jumlah orang yang Anda undang.",
    creditTitle: "Apa itu kredit AI?",
    creditText: (p) =>
      `Menilai satu lamaran menggunakan satu kredit. Paket Anda mencakup ${f.number(p.credits)} kredit setiap bulan, atau ${f.number(p.yearlyCredits)} kredit di awal jika Anda membayar tahunan, dan Anda dapat menambah kredit kapan saja.`,
    billing: "Periode penagihan",
    monthly: "Bulanan",
    yearly: "Tahunan",
    save: (percent) => `Hemat ${f.percent(percent)}`,
    perMonth: "per bulan",
    perYear: "per tahun",
    monthlyCredits: (credits) => `${f.number(credits)} kredit AI setiap bulan`,
    yearlyCredits: (credits) => `${f.number(credits)} kredit AI di awal`,
    startTrial: (days) => `Mulai uji coba gratis ${days} hari`,
    included: [
      "Lowongan tanpa batas",
      "Seluruh tim Anda, tanpa biaya per pengguna",
      "Halaman karier di domain Anda sendiri",
      "Kendali penuh atas kode halaman karier Anda",
      "Formulir lamaran dan tahapan rekrutmen",
      "Email otomatis ke kandidat, dengan tata letak Anda sendiri",
      "Komentar, sebutan, dan notifikasi",
      "Ekspor lamaran Anda kapan saja",
    ],
    /** HTML. */
    trial: (p) =>
      `<strong>Uji coba gratis</strong> memberi Anda ${p.trialDays} hari dan ${f.number(p.trialCredits)} kredit AI untuk mencoba semuanya. Anda tidak akan dikenai biaya hingga uji coba berakhir, dan Anda dapat membatalkannya kapan saja.`,
    moreCredits: "Butuh lebih banyak kredit?",
    packsNote: "Beli paket kredit kapan pun Anda mau. Paket kredit tidak pernah kedaluwarsa.",
    packsCaption: "Paket kredit dan harganya",
    creditsColumn: "Kredit",
    priceColumn: "Harga",
    packCredits: (credits) => `${f.number(credits)} kredit`,
  },

  faq: {
    eyebrow: "FAQ",
    title: "Jawaban atas pertanyaan Anda.",
    /** HTML. `email` is a link to the support address. */
    intro: (email) => `Tidak menemukan yang Anda cari? Kirim email ke ${email}, dan kami akan membalas Anda.`,
    items: (p) => [
      {
        question: "Bagaimana cara kerja uji coba gratis?",
        answer: `Anda mendapatkan ${p.trialDays} hari dengan semua fitur dan ${f.number(p.trialCredits)} kredit AI untuk mencobanya pada lamaran sungguhan. Anda tidak akan dikenai biaya hingga uji coba berakhir, dan Anda dapat membatalkannya kapan saja sebelum itu.`,
      },
      {
        question: "Apa itu kredit AI?",
        answer: `Menilai satu lamaran menggunakan satu kredit. Paket Anda mencakup ${f.number(p.credits)} kredit setiap bulan, atau ${f.number(p.yearlyCredits)} kredit di awal jika Anda membayar tahunan. Jika butuh lebih banyak, paket kredit mulai dari ${f.number(p.firstPack.credits)} kredit seharga ${f.usd(p.firstPack.priceUsd)}, dan tidak pernah kedaluwarsa.`,
      },
      {
        question: "Bisakah kami membayar tahunan?",
        answer: `Bisa. Paket tahunan seharga ${f.usd(p.yearlyPriceUsd)} per tahun, ${f.percent(p.yearlySavingsPercent)} lebih murah daripada membayar bulanan, dengan ${f.number(p.yearlyCredits)} kredit AI di awal. Paket ini juga dimulai dengan uji coba gratis ${p.trialDays} hari yang sama. Jika Anda berlangganan bulanan, Anda dapat beralih ke tahunan kapan saja di Penagihan, dan Anda membayar untuk setahun, dikurangi sisa hari yang belum terpakai di bulan berjalan.`,
      },
      {
        question: "Apa yang terjadi jika kredit kami habis?",
        answer:
          "Tidak ada yang hilang. Lamaran tetap masuk, dan Anda dapat membeli kredit lagi kapan saja untuk menilainya.",
      },
      {
        question: "Bagaimana AI menilai sebuah lamaran?",
        answer:
          "AI membaca setiap CV dan jawaban atas pertanyaan Anda, lalu membandingkannya dengan lowongan yang Anda pasang. Keterampilan, pengalaman, kesesuaian senioritas, dan kualifikasi masing-masing dinilai, lalu digabungkan menjadi satu skor kecocokan, sehingga Anda bisa melihat alasan di balik peringkat seseorang.",
      },
      {
        question: "Bisakah kami menonaktifkan penilaian AI?",
        answer: "Bisa. Admin dapat mengaktifkan atau menonaktifkan fitur AI untuk seluruh perusahaan Anda di Pengaturan.",
      },
      {
        question: "Bisakah kami menggunakan domain sendiri untuk halaman karier?",
        answer:
          "Bisa. Halaman karier Anda dimulai di yourcompany.emploist.com, dan Anda dapat menghubungkan domain seperti careers.yourcompany.com dalam beberapa langkah, sudah termasuk HTTPS.",
      },
      {
        question: "Apakah kandidat perlu membuat akun untuk melamar?",
        answer:
          "Tidak. Kandidat mengisi formulir di halaman karier Anda dan melampirkan CV mereka. Hanya butuh beberapa menit.",
      },
      {
        question: "Siapa saja di tim kami yang dapat menggunakan Emploist?",
        answer:
          "Semua orang yang Anda undang, tanpa biaya tambahan. Admin juga mengelola penagihan, halaman karier, dan pengaturan perusahaan.",
      },
      {
        question: "Bahasa apa saja yang didukung Emploist?",
        answer:
          "Anda dapat menggunakan Emploist dalam bahasa Inggris, Prancis, Jerman, Spanyol, Italia, Jepang, Korea, Polandia, Turki, dan Indonesia. Setiap orang di tim Anda memilih bahasanya sendiri. Halaman karier dan email yang diterima pelamar awalnya berbahasa Inggris, dan Anda dapat menulis ulang keduanya dalam bahasa apa pun.",
      },
      {
        question: "Bisakah kami membawa serta data kami?",
        answer:
          "Bisa. Ekspor lamaran dari lowongan mana pun sebagai spreadsheet berisi setiap lamaran dan jawaban, beserta setiap CV.",
      },
      {
        question: "Bisakah kami menggunakan Emploist dari Claude atau ChatGPT?",
        answer:
          "Bisa. Siapa pun di tim Anda dapat menghubungkan Claude, ChatGPT, Grok, Gemini, Copilot, atau asisten lain yang mendukung MCP, lalu mengelola lowongan dan lamaran lewat chat. Fitur ini sudah termasuk dalam paket Anda. Menilai lamaran dari asisten menggunakan satu kredit AI, sama seperti di Emploist.",
      },
      {
        question: "Apa saja yang dapat dilakukan asisten AI di Emploist?",
        answer:
          "Asisten dapat melihat dan mengubah lowongan, tahapan, dan formulir lamaran, membaca lamaran dan CV, memindahkan pelamar antartahap, serta memberi komentar. Asisten bekerja sebagai orang yang menghubungkannya, dengan peran orang tersebut. Penagihan, anggota tim, dan penghapusan perusahaan atau akun Anda tidak termasuk. Anda dapat memutuskan koneksi asisten kapan saja, dan admin dapat menonaktifkan asisten untuk seluruh perusahaan di Pengaturan.",
      },
      {
        question: "Bisakah kami membatalkan kapan saja?",
        answer:
          "Bisa. Batalkan kapan pun Anda mau, dan paket Anda tetap aktif hingga akhir periode yang sudah Anda bayar. Setelah itu, Anda tetap dapat melihat dan mengekspor semuanya.",
      },
    ],
  },

  callToAction: {
    title: "Temui pelamar terbaik Anda minggu ini.",
    text: (p) =>
      `Coba Emploist gratis selama ${p.trialDays} hari. Penyiapannya hanya beberapa menit, dan halaman karier Anda siap begitu Anda siap.`,
    talkToUs: "Hubungi kami",
  },

  notFound: {
    title: "Halaman tidak ditemukan",
    description: "Halaman ini tidak ada.",
    heading: "Halaman ini tidak ada.",
    text: "Mungkin halaman ini sudah dipindahkan, atau tautannya salah ketik. Mari kembali ke jalur yang benar.",
    home: "Ke halaman beranda",
    blog: "Baca blog",
  },

  blog: {
    title: "Blog",
    description:
      "Panduan seputar rekrutmen, halaman karier, dan ATS, serta kabar terbaru produk dari tim Emploist.",
    heading: "Catatan untuk merekrut dengan baik.",
    emptyTitle: "Artikel pertama segera hadir.",
    /** HTML. */
    emptyText: (link) =>
      `Kami sedang menulis panduan tentang rekrutmen dan cara memaksimalkan Emploist. Ikuti kabarnya lewat ${link("feed RSS")}, atau mulai uji coba gratis Anda sambil menunggu.`,
    minutesToRead: (minutes) => `${minutes} menit baca`,
    draft: "Draf",
    readPost: "Baca artikel",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "Dalam bahasa Inggris",
    updated: (date) => `Diperbarui ${date}`,
    home: "Beranda",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "Jejak navigasi",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Coba Emploist",
    ctaTitle: "Lihat pelamar terbaik Anda lebih dulu.",
    ctaText: (p) =>
      `Coba Emploist gratis selama ${p.trialDays} hari, lalu ${f.usd(p.priceUsd)} per bulan untuk seluruh tim Anda.`,
    defaultAuthor: "Tim Emploist",
  },

  listedOn: {
    title: "Tercantum di",
    description:
      "Direktori perangkat lunak yang mencantumkan Emploist, ATS dengan halaman karier, alur rekrutmen, dan penilaian AI.",
    heading: "Temukan Emploist di web.",
    lead: "Direktori yang mencantumkan Emploist.",
  },

  legal: {
    lastUpdated: (date) => `Terakhir diperbarui ${date}`,
    contents: "Daftar isi",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link) =>
        `Ini adalah terjemahan Ketentuan Layanan kami, yang disediakan untuk kemudahan Anda. ${link("Versi bahasa Inggris")} mengikat secara hukum dan berlaku jika terdapat perbedaan di antara keduanya.`,
      privacy: (link) =>
        `Ini adalah terjemahan Kebijakan Privasi kami, yang disediakan untuk kemudahan Anda. Jika terdapat perbedaan dengan ${link("versi bahasa Inggris")}, versi bahasa Inggris yang berlaku, sejauh diizinkan oleh hukum.`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date, link) =>
      `Versi bahasa Inggris diperbarui pada ${date}, setelah terjemahan ini dibuat. ${link("Baca versi bahasa Inggris terbaru")}.`,
  },
};

export default id;
