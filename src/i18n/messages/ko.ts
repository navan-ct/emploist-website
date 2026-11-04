// The website's words in Korean, translated from en.ts (the source), with the
// same shape. Written in 해요체, with the Emploist app's terms.
import { formatters } from "../format";
import type { Messages } from "./en";

const f = formatters("ko");

const ko: Messages = {
  site: {
    title: "Emploist: AI로 지원자를 평가하는 채용 관리 시스템",
    description: (p) =>
      `자체 채용 페이지에 공고를 올리고 지원서를 받으면, AI가 직무 설명을 기준으로 모든 지원자를 평가해요. 팀 전체 월 ${f.usd(p.priceUsd)}, ${p.trialDays}일 무료 체험을 제공해요.`,
    imageAlt: "Emploist: 가장 잘 맞는 지원자부터 만나 보세요",
    skipToContent: "본문으로 건너뛰기",
    home: "Emploist 홈",
    blogFeedTitle: "Emploist 블로그",
    blogFeedDescription: "Emploist 팀이 전하는 가이드와 소식이에요.",
    monthlyOffer: (p) =>
      `${p.trialDays}일 무료 체험 후, 팀 전체가 월 ${f.usd(p.priceUsd)}에 이용할 수 있어요.`,
    yearlyOffer: (p) =>
      `${p.trialDays}일 무료 체험 후, 팀 전체가 연 ${f.usd(p.yearlyPriceUsd)}에 이용할 수 있어요.`,
  },

  nav: {
    main: "메인",
    features: "기능",
    careersPage: "채용 페이지",
    aiAssistants: "AI 어시스턴트",
    pricing: "요금제",
    faq: "FAQ",
    blog: "블로그",
    signIn: "로그인",
    startFreeTrial: "무료 체험 시작",
    menu: "메뉴",
  },

  language: {
    label: "언어",
  },

  footer: {
    tagline:
      "채용 페이지와 AI 평가를 갖춘 채용 관리 시스템. 번거로운 일은 줄이고 좋은 인재를 뽑고 싶은 팀을 위해 만들었어요.",
    product: "제품",
    resources: "리소스",
    account: "계정",
    legal: "약관 및 정책",
    rssFeed: "RSS 피드",
    support: "고객 지원",
    terms: "서비스 이용약관",
    privacy: "개인정보 처리방침",
    copyright: (year) => `© ${year} Emploist. All rights reserved.`,
    questions: "궁금한 점이 있나요?",
  },

  cta: {
    startYourFreeTrial: "무료 체험 시작하기",
  },

  hero: {
    eyebrow: "AI가 순위를 매겨 주는 채용 관리",
    title: "가장 잘 맞는 지원자부터 만나 보세요.",
    lead: "Emploist는 채용 페이지와 간편한 채용 파이프라인, 그리고 직무 설명을 기준으로 모든 지원서를 평가하는 AI를 제공해요. 지원서를 분류하는 시간은 줄이고, 잘 맞는 사람에게 더 많은 시간을 쓸 수 있어요.",
    seeHowItWorks: "작동 방식 보기",
    note: (p) => `${p.trialDays}일 무료 체험 후 월 ${f.usd(p.priceUsd)}. 사용자당 요금은 없어요.`,
    screenshotAlt:
      "Emploist에서 본 Senior Product Designer 채용 공고의 지원서 목록. 적합도가 높은 순으로 91%, 88%, 86% 등으로 정렬되어 있고, 지원자마다 이름, 이메일, 댓글 수가 표시돼요.",
  },

  howItWorks: {
    eyebrow: "작동 방식",
    title: "공고 게시부터 채용까지, 한곳에서.",
    steps: [
      {
        title: "채용 공고 게시",
        text: "직무 설명을 작성하고, 지원자에게 물어볼 질문을 고른 다음, 채용 페이지에 게시하세요.",
      },
      {
        title: "지원 접수",
        text: "지원자는 채용 페이지에서 공고를 찾아 몇 분 만에 지원해요. 계정은 필요 없어요.",
      },
      {
        title: "AI가 모든 지원서를 평가",
        text: "모든 지원서가 채용 공고를 기준으로 적합도 점수를 받아요. 팀이 쉽게 이해할 수 있는 항목별 분석도 함께 제공돼요.",
      },
      {
        title: "다음 단계로 이동",
        text: "지원서를 검토하고, 댓글을 남기고, 지원자를 다음 전형 단계로 옮기세요. 단계마다 이메일이 발송돼요.",
      },
    ],
  },

  ranking: {
    eyebrow: "AI 평가",
    title: "한눈에 이해되는 적합도 점수.",
    lead: "모든 지원서는 들어오는 즉시 채용 공고를 기준으로 평가돼요. 의미를 알 수 없는 숫자 하나 대신, 이 직무에 중요한 기준마다 지원자가 얼마나 부합하는지 확인할 수 있어요.",
    points: [
      {
        title: "명확한 항목별 점수.",
        text: "기술, 직무 경험, 경력 수준, 자격 요건을 각각 평가하므로, 지원자의 강점이 정확히 어디에 있는지 알 수 있어요.",
      },
      {
        title: "이력서 그 이상.",
        text: "지원서 양식의 질문에 대한 답변도 함께 반영돼요.",
      },
      {
        title: "공정하고 일관되게.",
        text: "한 채용 공고의 모든 지원자를 같은 기준으로, 같은 방식으로 평가해요.",
      },
      {
        title: "결정은 언제나 직접.",
        text: "적합도는 검토를 돕는 참고 자료일 뿐, 검토를 대신하지 않아요. 채용 공고를 수정하면 지원자를 다시 평가할 수도 있어요.",
      },
    ],
    screenshotAlt:
      "Emploist에서 본 한 지원자의 적합도 91%. 기술(93), 직무 경험(88), 경력 수준(95), 자격 요건(85)으로 나뉘어 있고, 항목마다 짧은 설명이 붙어 있어요.",
    caption: (p) =>
      `지원서 하나를 평가할 때마다 AI 크레딧 1개를 사용해요. 요금제에는 매월 크레딧 ${f.number(p.credits)}개가 포함돼요.`,
  },

  careersPage: {
    eyebrow: "채용 페이지",
    title: "첫날부터 바로 쓰는 채용 페이지.",
    lead: "모든 회사에 로고와 대표 색상이 적용된 빠르고 세련된 채용 페이지가 제공돼요. 새 채용 공고는 게시하는 즉시 페이지에 나타나고, 지원서는 해당 채용 공고의 받은편지함으로 바로 들어와요.",
    screenshotAlt:
      "Northwind Labs의 채용 페이지. 회사 로고가 있는 헤더와 짧은 소개, 그리고 부서별로 묶인 채용 중인 포지션 목록과 부서 및 근무지 필터가 보여요.",
    mobileScreenshotAlt:
      "휴대폰에서 본 채용 공고 페이지. Berlin 근무, 하이브리드, 정규직인 Senior Product Designer 공고로, “Apply for this job” 버튼과 직무 설명이 있어요.",
    facts: [
      {
        title: "기본 주소 또는 자체 도메인",
        text: "yourcompany.emploist.com 주소로 시작하고, 원할 때 careers.yourcompany.com 같은 자체 도메인을 연결하세요.",
      },
      {
        title: "찾아보기 쉬운 구성",
        text: "채용 중인 포지션은 부서별로 묶여 있고, 지원자는 부서와 근무지로 필터링할 수 있어요.",
      },
      {
        title: "어떤 화면에서도 빠르게",
        text: "휴대폰부터 와이드 모니터까지, 어디서나 빠르게 로드되고 보기 좋게 표시돼요.",
      },
      {
        title: "몇 분이면 끝나는 지원",
        text: "계정도 비밀번호도 필요 없어요. 지원자는 양식을 작성하고 이력서를 첨부하면 끝이에요.",
      },
      {
        title: "AI 사용을 투명하게",
        text: "AI가 지원서 검토를 도울 때는 채용 페이지에서 지원자에게 알려요.",
      },
      {
        title: "스팸 차단",
        text: "기본 제공되는 보호 기능이 스팸을 걸러 주므로, 받은편지함에서는 실제 지원자만 보게 돼요.",
      },
    ],
  },

  designInCode: {
    eyebrow: "코드로 디자인",
    title: "회사 웹사이트와 똑같이 꾸며 보세요.",
    lead: "기본 디자인은 로고와 색상만으로도 충분히 보기 좋아요. 더 손보고 싶다면, 채용 사이트의 모든 페이지가 직접 수정할 수 있는 HTML, CSS, Liquid 템플릿으로 되어 있어요.",
    points: [
      "Emploist에서 바로 편집하고, 데스크톱과 휴대폰 크기의 실시간 미리보기로 확인하세요.",
      "또는 코드를 다운로드해 원하는 편집기나 AI 어시스턴트로 수정하고, 명령어 하나로 내 컴퓨터에서 미리 볼 수 있어요.",
      "저장하기 전에 오류를 잡아내므로, 지원자는 항상 제대로 작동하는 페이지를 보게 돼요.",
    ],
    screenshotAlt:
      "Emploist의 채용 페이지 코드 편집기. 왼쪽에는 구문 강조가 적용된 레이아웃 템플릿이, 오른쪽에는 채용 페이지의 실시간 미리보기가 있어요.",
  },

  formsAndTeam: {
    label: "지원서 양식과 협업",
    forms: {
      eyebrow: "지원서 양식",
      title: "직무마다 꼭 필요한 질문을.",
      text: "채용 공고마다 단답형, 장문형, 예/아니요, 선택형, 드롭다운, 선형 배율 질문과 체크박스로 양식을 만들고, 원하는 순서대로 드래그해 배치하세요.",
      screenshotAlt:
        "Emploist의 지원서 양식. 성명, 이메일, 이력서 다음에 전화번호, 포트폴리오 링크, 경력 연수를 묻는 단일 선택 질문, 사용하는 도구를 묻는 다중 선택 질문이 있어요.",
    },
    team: {
      eyebrow: "협업",
      title: "함께 결정하세요.",
      text: "지원서에 댓글을 달고 @멘션으로 팀원의 의견을 물어보세요. 팀 전체를 추가 비용 없이 초대할 수 있어요.",
      screenshotAlt:
        "팀원 세 명이 지원서에 남긴 댓글과, 팀원 목록에서 Priya Shah를 골라 멘션하는 새 댓글.",
    },
  },

  stagesAndEmails: {
    eyebrow: "전형 단계와 이메일",
    title: "지원자에게 진행 상황을 자동으로 알려요.",
    lead: "채용 공고마다 고유한 전형 단계가 있어요. 지원자를 다음 단계로 옮기면 그 단계의 이메일이 자동으로 발송돼요. 한 번만 작성해 두면 지원자마다 맞춤 이메일로 전달돼요.",
    points: [
      "기본 제공되는 단계로 시작한 다음, 직무에 맞게 이름을 바꾸고 순서를 조정하고 단계를 추가하세요.",
      "각 단계에는 미리 작성된 이메일이 준비되어 있어요. 이름이나 직무명 같은 정보로 개인화하고, 실시간 미리보기로 확인하세요.",
      "실수로 옮겼나요? 실행 취소하면 이메일이 발송되지 않아요.",
      "이메일에는 회사의 이메일 레이아웃과 로고가 적용되고, 회신은 지정한 주소로 전달돼요.",
    ],
    editorScreenshotAlt:
      "Emploist의 ‘Interviewing’ 단계 이메일. 제목과 본문에 지원자 이름, 직무명, 회사명 변수가 쓰여 있어요.",
    previewScreenshotAlt:
      "Sam이라는 지원자가 받은 완성된 이메일. 맨 위에 Northwind Labs가 있고, Senior Product Designer 포지션 면접에 초대하는 개인화된 메시지와 채용 중인 포지션 링크가 있어요.",
  },

  aiAssistants: {
    eyebrow: "AI 어시스턴트",
    title: "AI 어시스턴트로 채용을 관리하세요.",
    lead: "Claude, ChatGPT 또는 MCP를 지원하는 다른 어시스턴트를 연결하면, 물어보기만 해도 채용 공고와 지원자를 관리할 수 있어요.",
    points: [
      {
        title: "지원자에 대해 물어보세요.",
        text: "채용 공고에 가장 잘 맞는 지원자를 찾고, 새로 들어온 지원서를 확인하고, 지원자의 답변을 빠르게 요약해 보세요.",
      },
      {
        title: "할 일을 바로 처리하세요.",
        text: "채팅에서 바로 채용 공고를 만들어 게시하고, 지원자를 다른 단계로 옮기고, 댓글을 남기세요.",
      },
      {
        title: "통제권은 그대로.",
        text: "어시스턴트는 내가 가진 권한 그대로 연결되고, 그 이상은 할 수 없어요. 언제든 연결을 해제하면 바로 작동을 멈춰요.",
      },
    ],
    worksWith: "지원하는 어시스턴트",
    otherClients: "그 밖의 MCP 클라이언트",
    chat: {
      label: "Emploist에 연결된 AI 어시스턴트와의 채팅 예시",
      assistant: "내 AI 어시스턴트",
      connected: "연결됨",
      used: "사용한 도구:",
      question: "Senior Product Designer 공고에 가장 잘 맞는 지원자는 누구예요?",
      answerIntro: "받은편지함에서 가장 잘 맞는 지원자 세 명이에요.",
      match: (percent) => ({ value: f.percent(percent), label: "일치" }),
      answerOutro: "경력 수준과 기술 면에서는 Diego가 가장 앞서요. 다음 단계로 옮겨 드릴 지원자가 있을까요?",
      request: "Diego를 Phone screen 단계로 옮겨 주세요.",
      done: "완료했어요. Diego는 이제 ‘Phone screen’ 단계에 있고, 이 단계의 이메일은 2분 후에 발송돼요. 마음이 바뀌면 그 전에 실행 취소해 드릴 수 있어요.",
      placeholder: "채용 공고와 지원자에 대해 물어보세요",
    },
    caption: "팀원 각자가 몇 단계만 거치면 자신의 어시스턴트를 연결할 수 있어요.",
  },

  details: {
    eyebrow: "그 밖의 기능",
    title: "채용을 더 수월하게 만드는 디테일.",
    items: [
      {
        title: "언제든 내보내기",
        text: "채용 공고의 지원서를 스프레드시트로 다운로드하세요. 모든 이력서도 같은 ZIP 파일에 담겨요.",
      },
      {
        title: "이력서를 바로 확인",
        text: "PDF와 Word 이력서가 Emploist 안에서 지원서 옆에 바로 열려요. 다운로드할 필요가 없어요.",
      },
      {
        title: "무제한 채용 공고",
        text: "필요한 만큼 채용 공고를 게시하고, 검색과 필터로 원하는 공고를 몇 초 만에 찾으세요.",
      },
      {
        title: "채용 공고 복제",
        text: "비슷한 포지션을 채용하나요? 채용 공고의 상세 정보, 양식, 단계, 이메일을 클릭 한 번으로 복사하세요.",
      },
      {
        title: "비밀번호 없이",
        text: "Google이나 Microsoft 계정, 또는 이메일로 받은 일회용 코드로 로그인하세요.",
      },
      {
        title: "기본적으로 비공개",
        text: "이력서는 비공개로 저장되며, 팀원만 열어 볼 수 있어요.",
      },
      {
        title: "꼭 필요한 알림",
        text: "누군가 나를 멘션하거나, 내가 댓글을 단 지원서에 답글이 달리면 알림을 받아요.",
      },
      {
        title: "라이트 및 다크 모드",
        text: "Emploist는 시스템 테마를 따르고, 원하는 테마를 직접 고를 수도 있어요.",
      },
    ],
  },

  pricing: {
    eyebrow: "요금제",
    title: "모든 기능을 담은 단 하나의 요금제.",
    lead: "기능별 등급도, 사용자당 요금도 없어요. 월간 또는 연간으로 결제하는 하나의 요금으로, 몇 명을 초대하든 회사 전체가 이용할 수 있어요.",
    creditTitle: "AI 크레딧이란?",
    creditText: (p) =>
      `지원서 하나를 평가할 때마다 크레딧 1개를 사용해요. 요금제에는 매월 크레딧 ${f.number(p.credits)}개가 포함되며, 연간으로 결제하면 ${f.number(p.yearlyCredits)}개를 한 번에 받아요. 언제든 크레딧을 추가로 구매할 수도 있어요.`,
    billing: "결제 주기",
    monthly: "월간",
    yearly: "연간",
    save: (percent) => `${f.percent(percent)} 할인`,
    perMonth: "/월",
    perYear: "/년",
    monthlyCredits: (credits) => `매월 AI 크레딧 ${f.number(credits)}개`,
    yearlyCredits: (credits) => `AI 크레딧 ${f.number(credits)}개 일괄 제공`,
    startTrial: (days) => `${days}일 무료 체험 시작하기`,
    included: [
      "무제한 채용 공고",
      "팀 전체 이용, 사용자당 요금 없음",
      "자체 도메인으로 운영하는 채용 페이지",
      "채용 페이지 코드를 자유롭게 수정",
      "지원서 양식과 전형 단계",
      "회사 이메일 레이아웃으로 보내는 지원자 자동 이메일",
      "댓글, 멘션, 알림",
      "언제든 지원서 내보내기",
    ],
    trial: (p) =>
      `<strong>무료 체험</strong>에서는 ${p.trialDays}일 동안 AI 크레딧 ${f.number(p.trialCredits)}개로 모든 기능을 사용해 볼 수 있어요. 체험이 끝날 때까지 요금이 청구되지 않으며, 언제든 취소할 수 있어요.`,
    moreCredits: "크레딧이 더 필요한가요?",
    packsNote: "원할 때 언제든 크레딧 팩을 구매하세요. 크레딧 팩은 만료되지 않아요.",
    packsCaption: "크레딧 팩과 가격",
    creditsColumn: "크레딧",
    priceColumn: "가격",
    packCredits: (credits) => `크레딧 ${f.number(credits)}개`,
  },

  faq: {
    eyebrow: "자주 묻는 질문",
    title: "궁금한 점을 풀어 드려요.",
    intro: (email) => `찾는 내용이 없나요? ${email} 주소로 이메일을 보내 주시면 답변해 드릴게요.`,
    items: (p) => [
      {
        question: "무료 체험은 어떻게 진행되나요?",
        answer: `${p.trialDays}일 동안 모든 기능을 사용할 수 있고, 실제 지원서로 사용해 볼 수 있도록 AI 크레딧 ${f.number(p.trialCredits)}개가 제공돼요. 체험이 끝날 때까지 요금이 청구되지 않으며, 그 전에 언제든 취소할 수 있어요.`,
      },
      {
        question: "AI 크레딧이란 무엇인가요?",
        answer: `지원서 하나를 평가할 때마다 크레딧 1개를 사용해요. 요금제에는 매월 크레딧 ${f.number(p.credits)}개가 포함되며, 연간으로 결제하면 ${f.number(p.yearlyCredits)}개를 한 번에 받아요. 더 필요하면 크레딧 팩을 구매할 수 있어요. 크레딧 팩은 크레딧 ${f.number(p.firstPack.credits)}개에 ${f.usd(p.firstPack.priceUsd)}부터 시작하며, 만료되지 않아요.`,
      },
      {
        question: "연간으로 결제할 수 있나요?",
        answer: `네. 연간 결제는 1년에 ${f.usd(p.yearlyPriceUsd)}, 월간으로 결제할 때보다 ${f.percent(p.yearlySavingsPercent)} 저렴하고, AI 크레딧 ${f.number(p.yearlyCredits)}개를 한 번에 받아요. 연간 결제도 똑같이 ${p.trialDays}일 무료 체험으로 시작해요. 월간으로 이용 중이라면 언제든 결제 페이지에서 연간으로 전환할 수 있으며, 1년 요금에서 이번 달의 미사용 일수만큼을 뺀 금액을 결제해요.`,
      },
      {
        question: "크레딧을 다 쓰면 어떻게 되나요?",
        answer:
          "사라지는 건 없어요. 지원서는 계속 들어오고, 언제든 크레딧을 추가로 구매해 평가할 수 있어요.",
      },
      {
        question: "AI는 지원서를 어떻게 평가하나요?",
        answer:
          "각 이력서와 질문에 대한 답변을 읽고, 게시한 채용 공고와 비교해요. 기술, 직무 경험, 경력 수준, 자격 요건을 각각 평가한 다음 하나의 적합도로 종합하므로, 지원자가 왜 그 순위에 있는지 알 수 있어요.",
      },
      {
        question: "AI 평가를 끌 수 있나요?",
        answer: "네. 관리자가 설정에서 회사 전체의 AI 기능을 켜거나 끌 수 있어요.",
      },
      {
        question: "채용 페이지에 자체 도메인을 사용할 수 있나요?",
        answer:
          "네. 채용 페이지는 yourcompany.emploist.com 주소로 시작하며, 몇 단계만 거치면 careers.yourcompany.com 같은 도메인을 연결할 수 있어요. HTTPS도 포함돼요.",
      },
      {
        question: "지원자가 지원하려면 계정이 필요한가요?",
        answer:
          "아니요. 지원자는 채용 페이지에서 양식을 작성하고 이력서를 첨부하기만 하면 돼요. 몇 분이면 끝나요.",
      },
      {
        question: "팀에서 누가 Emploist를 사용할 수 있나요?",
        answer:
          "초대한 모든 사람이 추가 비용 없이 사용할 수 있어요. 관리자는 결제, 채용 페이지, 회사 설정도 관리해요.",
      },
      {
        question: "Emploist는 어떤 언어를 지원하나요?",
        answer:
          "Emploist는 영어, 프랑스어, 독일어, 스페인어, 이탈리아어, 일본어, 한국어, 폴란드어, 튀르키예어, 인도네시아어로 사용할 수 있으며, 팀원마다 원하는 언어를 선택할 수 있어요. 채용 페이지와 지원자가 받는 이메일은 처음에는 영어로 되어 있지만, 원하는 언어로 다시 작성할 수 있어요.",
      },
      {
        question: "데이터를 가지고 나갈 수 있나요?",
        answer:
          "네. 어떤 채용 공고든 지원서를 내보내면, 모든 지원서와 답변이 담긴 스프레드시트와 각 지원자의 이력서를 받을 수 있어요.",
      },
      {
        question: "Claude나 ChatGPT에서 Emploist를 사용할 수 있나요?",
        answer:
          "네. 팀원 누구나 Claude, ChatGPT, Claude Code, Cursor, VS Code 또는 MCP를 지원하는 다른 어시스턴트를 연결해, 채팅으로 채용 공고와 지원서를 관리할 수 있어요. 요금제에 포함되어 있어요. 어시스턴트에서 지원서를 평가해도 Emploist에서와 똑같이 AI 크레딧 1개를 사용해요.",
      },
      {
        question: "AI 어시스턴트는 Emploist에서 무엇을 할 수 있나요?",
        answer:
          "채용 공고, 단계, 지원서 양식을 보고 변경하고, 지원서와 이력서를 읽고, 지원자를 다른 단계로 옮기고, 댓글을 달 수 있어요. 어시스턴트는 연결한 사람의 역할로, 그 사람 대신 작업해요. 결제, 멤버 관리, 회사나 계정 삭제는 할 수 없어요. 어시스턴트 연결은 언제든 해제할 수 있으며, 관리자는 설정에서 회사 전체의 어시스턴트 사용을 끌 수 있어요.",
      },
      {
        question: "언제든 취소할 수 있나요?",
        answer:
          "네. 원할 때 언제든 취소할 수 있으며, 요금제는 이미 결제한 기간이 끝날 때까지 계속 이용할 수 있어요. 그 이후에도 모든 내용을 보고 내보낼 수 있어요.",
      },
    ],
  },

  callToAction: {
    title: "이번 주에 가장 잘 맞는 지원자를 만나 보세요.",
    text: (p) =>
      `${p.trialDays}일 동안 Emploist를 무료로 사용해 보세요. 설정은 몇 분이면 끝나고, 시작할 준비가 되면 채용 페이지도 바로 준비돼요.`,
    talkToUs: "문의하기",
  },

  notFound: {
    title: "페이지를 찾을 수 없어요",
    description: "존재하지 않는 페이지예요.",
    heading: "존재하지 않는 페이지예요.",
    text: "페이지가 이동했거나 링크에 오타가 있을 수 있어요. 원래 가려던 곳으로 안내해 드릴게요.",
    home: "홈으로 가기",
    blog: "블로그 읽기",
  },

  blog: {
    title: "블로그",
    description: "채용, 채용 페이지, 지원자 관리에 관한 가이드와 Emploist 팀의 제품 소식을 전해요.",
    heading: "좋은 채용을 위한 노트.",
    emptyTitle: "첫 글을 준비하고 있어요.",
    emptyText: (link) =>
      `채용에 관한 가이드와 Emploist를 제대로 활용하는 방법을 쓰고 있어요. ${link("RSS 피드")}를 구독하거나, 그동안 무료 체험을 시작해 보세요.`,
    minutesToRead: (minutes) => `읽는 데 ${minutes}분`,
    draft: "초안",
    readPost: "글 읽기",
    inEnglish: "영문",
    updated: (date) => `${date} 업데이트`,
    home: "홈",
    breadcrumb: "탐색 경로",
    tryEmploist: "Emploist 사용해 보기",
    ctaTitle: "가장 잘 맞는 지원자부터 만나 보세요.",
    ctaText: (p) =>
      `${p.trialDays}일 동안 Emploist를 무료로 사용해 보세요. 이후에는 팀 전체가 월 ${f.usd(p.priceUsd)}에 이용할 수 있어요.`,
    defaultAuthor: "Emploist 팀",
  },

  listedOn: {
    title: "소개된 곳",
    description: "채용 페이지와 AI 평가를 갖춘 채용 관리 시스템, Emploist가 소개된 소프트웨어 디렉터리예요.",
    heading: "웹에서 Emploist를 찾아보세요.",
    lead: "Emploist가 소개된 디렉터리예요.",
  },

  legal: {
    lastUpdated: (date) => `최종 업데이트: ${date}`,
    contents: "목차",
    translationNotice: {
      terms: (link) =>
        `이 문서는 편의를 위해 제공하는 서비스 이용약관의 번역본이에요. ${link("영어 원문")}이 법적 구속력을 가지며, 두 문서의 내용이 다를 경우 영어 원문이 적용돼요.`,
      privacy: (link) =>
        `이 문서는 편의를 위해 제공하는 개인정보 처리방침의 번역본이에요. 이 번역본이 ${link("영어 원문")}과 다를 경우, 법이 허용하는 범위에서 영어 원문이 적용돼요.`,
    },
    outdated: (date, link) =>
      `영어 원문은 이 번역본이 작성된 이후인 ${date}에 업데이트되었어요. ${link("현재 영어 원문")}을 확인해 보세요.`,
  },
};

export default ko;
