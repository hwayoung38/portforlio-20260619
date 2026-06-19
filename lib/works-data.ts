export type WorkLink = {
  label: string;
  href: string;
};

export type Work = {
  slug: string;
  title: string;
  tagline: string;
  thumbnail: string;
  heroImage: string;
  year: string;
  role: string;
  description: string;
  links: WorkLink[];
  accentColor: string;
};

const LIME = "#CBFF57";
const PINK = "#FF7BB0";
const BLUE = "#6C8CFF";

export const WORKS: Work[] = [
  {
    slug: "galaxy-watch-ux",
    title: "Galaxy Watch UX",
    tagline: "웨어러블 OS의 시스템 UX 설계",
    thumbnail: "/1.jpg",
    heroImage: "/1.jpg",
    year: "2020 — Now",
    role: "Lead UX Designer",
    description:
      "Galaxy Watch의 핵심 사용자 흐름과 시스템 UX를 설계했습니다. 작은 화면에서도 일관된 경험을 제공하기 위해 알림, 헬스, 설정 등 주요 모듈의 정보 구조와 인터랙션 패턴을 정립했습니다. 워치·폰·버즈 간 유기적인 연결 경험을 중심으로 웨어러블 생태계 UX를 고도화하는 프로젝트입니다.",
    links: [],
    accentColor: LIME,
  },
  {
    slug: "bixby-interaction",
    title: "Bixby Interaction",
    tagline: "AI 음성 인터랙션 모델 설계",
    thumbnail: "/2.jpg",
    heroImage: "/2.jpg",
    year: "2017 — 2020",
    role: "UX Designer",
    description:
      "Bixby의 음성·터치 하이브리드 인터랙션 모델을 설계했습니다. 사용자 의도를 파악하고 자연스럽게 응답하는 대화형 UX 패턴을 정의하고, 다양한 디바이스에서 일관되게 적용할 수 있는 인터랙션 가이드라인을 수립했습니다. AI 시대의 새로운 UX 스탠다드를 탐구한 프로젝트입니다.",
    links: [],
    accentColor: PINK,
  },
  {
    slug: "comm-apps-ux",
    title: "Communication Apps UX",
    tagline: "연락처·메시지 서비스 UI/UX 개선",
    thumbnail: "/3.jpg",
    heroImage: "/3.jpg",
    year: "2010 — 2016",
    role: "UX Designer",
    description:
      "삼성 갤럭시의 연락처, 메시지, 통화 등 커뮤니케이션 앱의 UI/UX를 설계하고 개선했습니다. 대량의 연락처 관리, 빠른 검색, 직관적인 메시지 스레드 등 실사용 시나리오를 중심으로 사용성을 높였습니다. 모바일 UX의 기초를 다진 프로젝트입니다.",
    links: [],
    accentColor: BLUE,
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return WORKS.find((work) => work.slug === slug);
}
