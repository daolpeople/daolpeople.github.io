/**
 * 정적 콘텐츠 데이터
 * 
 * 웹사이트 전반에서 사용되는 정적 데이터를 관리하는 파일
 * - 솔루션 카드, 회사 연혁, 고객사 로고, 뉴스 소식 등의 데이터를 포함
 */

/**
 * 다올피플 차별점 데이터
 * 메인페이지의 "WHY 다올피플?" 섹션에 표시되는 차별점/신뢰 포인트 데이터
 * 각 항목은 아이콘, 제목, 설명으로 구성됨
 */
export const whyDaolItems = [
  {
    icon: '✓',
    title: 'AX 컨설팅 & IT 서비스',
    description: ['AX의 시작부터 완성까지,', '비즈니스에 지능을 더합니다.'],
  },
  {
    icon: '✓',
    title: '차별화된 AX 솔루션 제공',
    description: [
      '비용은 줄이고, 가장 현실적인 맞춤형', 'AX솔루션을 제공합니다.',
    ],
  },
  {
    icon: '✓',
    title: '실무 중심 프로젝트 수행',
    description: ['현장에서 검증된 경험으로', '실무 전문가들이 처음부터 끝까지 책임집니다.'],
  },
  {
    icon: '✓',
    title: '안정적인 운영과 유지보수',
    description: ['서비스 중단 없는', '안정적인 시스템 환경을 제공합니다.'],
  },
  {
    icon: '✓',
    title: '신뢰를 바탕으로 한 협업',
    description: ['기술에 신뢰를, 협업에 가치를 담습니다.', '함께 만드는 혁신, 끝까지 책임지는 파트너쉽'],
  },

]

/**
 * 솔루션 카드 섹션 데이터
 * 메인페이지의 "전문 IT 서비스 기업" 섹션에 표시되는 카드 데이터
 * 각 카드는 제목, 설명 텍스트, 이미지로 구성됨
 */
export const solutionCards = [
  {
    title: '고객가치를 실현하는 기업',
    text: [
      '기술적 전문성과 실행력을 바탕으로',
      '고객의 경쟁력을 높이고 지속적인 성장을 지원합니다.',
      '다올피플은 고객의 성공을 최우선 가치로 생각합니다.',
    ],
    image: 'assets/images/Gemini_Generated_Image_95jcn295jcn295jc.png',
  },
  {
    title: '사회적 책임을 실천하는 기업',
    text: [
      '기업의 성장은 사회와 함께해야 한다는 믿음으로',
      '창출된 가치를 사회에 환원하며',
      '더 나은 미래를 만들어가는 데 기여합니다.',
    ],
    image: 'assets/images/Gemini_Generated_Image_95jcn295jcn295jcc.png',
  },
  {
    title: '사람이 중심이 되는 기업',
    text: [
      '공정한 보상과 합리적인 평가를 통해',
      '구성원이 전문성과 열정을 마음껏 펼칠 수 있는',
      '일하기 좋은 조직 문화를 만들어갑니다.',
    ],
    image: 'assets/images/Gemini_Generated_Image_95jcn295jcn295jcccc.png',
  },
]

/**
 * 회사 연혁 데이터
 * 연혁 페이지에 표시되는 연도별 주요 이력 데이터
 * 각 연도별로 해당 연도의 주요 프로젝트 및 이벤트 목록을 포함
 */
export const historyData = [
  {
    year: '2025',
    items: [
      '2025.09  부릉 라이더스 운영 정산 대시보드 개발',
      '2025.07  대한항공 탄소배출관리 시스템(ETS-OMS) 구축',
      '2025.06  한진 데이터 분석 플랫폼 유지보수',
      '2025.05  삼성웰스토리 EHS 시스템 구축',
      '2025.05  한진 택배 수지관리 방식 변경 시스템 구축',
      '2025.04  캐논코리아 eWM 모바일 시스템 구축',
      '2025.01  한진 원클릭 시스템 유지보수',
    ],
  },
  {
    year: '2024',
    items: [
      '2024.12  한진택배 수지배부 시스템 개선',
      '2024.09  대한항공 RSES 시스템 개발',
      '2024.06  한진 원클릭 시스템 운영',
      '2024.01  한진 원클릭Pro 시스템 2차 개발',
      '2024.01  현대오토에버 유럽 Online Sales System 유지보수',
      '2024.01  LX판토스 WM / TM 모바일 시스템 유지보수',
    ],
  },
  {
    year: '2023',
    items: [
      '2023.09  LF POS 시스템 개선',
      '2023.08  한진 원클릭Pro 시스템 개발',
      '2023.06  한진 체적관리/협력사관리 시스템 개선',
      '2023.01  현대오토에버 유럽 Online Sales System 유지보수',
      '2023.01  LX판토스 WM / TM 모바일 시스템 유지보수',
    ],
  },
  {
    year: '2022',
    items: [
      '2022.04  CJ푸드빌 뚜레쥬르 브랜드App 구축',
      '2022.03  CJ대한통운 Next WMS 모바일 구축',
      '2022.02  삼성닷컴 쇼핑몰 유지보수',
      '2022.02  현대오토에버 유럽 Online Sales System 구축',
      '2022.02  현대오토에버 유럽 DIH / IDM 시스템 유지보수',
      '2022.01  LX판토스 TMS 모바일 시스템 구축',
    ],
  },
  {
    year: '2021',
    items: [
      '2021.12  LX판토스 글로벌 템플릿 시스템 구축',
      '2021.12  빅솔론 WEBASP 시스템 구축',
      '2021.11  한진 화주포탈 시스템 구축',
      '2021.08  LG 물류공상평 물류/배송 모바일 시스템 구축',
      '2021.08  한진 계약정산 시스템 구축',
      '2021.06  IR큐더스 주주배당 시스템 구축',
      '2021.05  HME IDM for CTB(통합계정관리 시스템 유지보수)',
      '2021.05  GS리테일 MD 계약 및 자동정산 시스템 고도화',
      '2021.04  HME Online Sales System Mockup',
      '2021.04  ebay 옥션 주문번호 변경 개발',
      '2021.03  GS리테일 유통기한 임박상품 판매시스템 개발',
      '2021.01  홈플러스 Smart Delivery System App 유지보수',
    ],
  },
  {
    year: '2020',
    items: [
      '2020.11  홈플러스 배송App 시스템 유지보수',
      '2020.11  홈플러스 제휴사이트 시스템 유지보수',
      '2020.05  홈플러스 네이버 장보기 연동 개발',
      '2020.04  ㈜다올피플로 상호변경',
      '2020.01  세스코 현장경영 관련 시스템 유지보수',
    ],
  },
  {
    year: '2019',
    items: [
      '2019.10  쿠쿠전자 영업관리시스템 개발',
      '2019.04  세스코 FS ACT 모바일 앱 시스템 개발',
      '2019.01  세스코 현장경영 관련 시스템 유지보수',
    ],
  },
  {
    year: '2018',
    items: [
      '2018.12  홈플러스 EOS 대상 시스템 업그레이드',
      '2018.10  한국후지쯔 BGF채권관리 BPM 추가 개발',
      '2018.08  동진산업 Groupware Solutions 유지보수',
      '2018.05  SPC HappyTaster Sensory DB 구축',
      '2018.03  SPC B2B 배송시스템 유지보수',
      '2018.03  SPC 맥분DB분석 시스템 유지보수',
      '2018.03  SPC 점포이력관리 시스템 유지보수',
      '2018.03  ㈜엘앤이케이솔루션 법인 설립',
    ],
  },
]

/**
 * 고객사 로고 데이터
 * 고객사 페이지에 표시되는 협력사/고객사 로고 이미지 데이터
 * 각 로고는 회사명과 이미지 파일 경로로 구성됨
 */
export const clientLogos = [
  { name: '한진', file: 'assets/images/hanjin.png' },
  { name: '현대오토에버', file: 'assets/images/autoEver.png' },
  { name: 'LX', file: 'assets/images/LXLogo.png' },
  { name: 'CJ푸드빌', file: 'assets/images/cjFoodVill.jpg' },
  { name: '홈플러스', file: 'assets/images/homeplus.jpg' },
  { name: '세스코', file: 'assets/images/cesco.jpg' },
  { name: 'GS', file: 'assets/images/GS.jpg' },
]

/**
 * 다올소식 데이터
 * 메인페이지와 다올소식 페이지에 표시되는 뉴스/소식 데이터
 * 각 항목은 URL, 썸네일 이미지, 태그(영상/언론보도), 제목, 날짜로 구성됨
 * 날짜는 정렬 기준으로 사용되며, 최신순으로 정렬됨
 */
export const newsItems = [
  {
    url: 'https://www.koreatimenews.com/mobile/article.html?no=1067768',
    thumb: 'assets/images/news/20260210인창동저소득주민나눔.jpg',
    tag: '언론보도',
    title: '설 명절 맞아 인창동 저소득 주민을 위한 따뜻한 나눔 실천, 구리중앙라이온스클럽 & (주)다올피플 엄동현 대표이사',
    date: '2026. 02. 10',
  },
  {
    url: 'https://m.blog.naver.com/2580press/224021592040',
    thumb: 'assets/images/news/20250925인창동행복지역아동센터.jpg',
    tag: '언론보도',
    title: '인창동 행복지역아동센터에 추석 선물 후원, 구리중앙라이온스클럽 & (주)다올피플 엄동현 대표이사',
    date: '2025. 09. 25',
  },
  {
    url: 'https://www.koreatimenews.com/news/article.html?no=941487',
    thumb: 'assets/images/news/20250923인창동나눔.jpg',
    tag: '언론보도',
    title: '추석 맞아 인창동에 따뜻한 나눔 실천, 구리중앙라이온스클럽 & (주)다올피플 엄동현 대표이사',
    date: '2025. 09. 23',
  },
  {
    url: 'https://blog.naver.com/2580press/223729073632',
    thumb: 'assets/images/news/다산2동라면후원.jpeg',
    tag: '언론보도',
    title: '다산2동 취약계층에 라면 후원, 구리중앙라이온스클럽 & (주)다올피플 엄동현 대표이사',
    date: '2025. 01. 17',
  },
  {
    url: 'https://www.gheadline.co.kr/news/article.html?no=399533',
    thumb: 'assets/images/news/동구동추석맞이물품전달.jpg',
    tag: '언론보도',
    title: '구리시 동구동에 추석맞이 후원물품 전달, 구리중앙라이온스클럽 & (주)다올피플 엄동현 대표이사',
    date: '2024. 09. 13',
  },
  {
    url: 'https://www.gninews.co.kr/news/article.html?no=549954',
    thumb: 'assets/images/news/다산2동특수분유.jpg',
    tag: '언론보도',
    title: '남양주시 다산2동 폭염 대비 경로당 어르신 위한 특수 분유 전달, 구리중앙라이온스클럽 & (주)다올피플 엄동현 대표이사',
    date: '2024. 08. 06',
  },
  {
    url: 'https://policetimes.co.kr/detail.php?number=149318&thread=23',
    thumb: 'assets/images/news/구리시립노인요양원.jpg',
    tag: '언론보도',
    title: '구리시립노인요양원에 2024년 설맞이 후원 구리중앙라이온스클럽 & (주)다올피플 엄동현 대표이사',
    date: '2024. 03. 06',
  },
  {
    url: 'https://www.youtube.com/watch?v=hEvPKEZbh-8',
    thumb: 'https://img.youtube.com/vi/hEvPKEZbh-8/hqdefault.jpg',
    tag: '영상',
    title: 'n년 사이에 10배 매출 성장한 유통IT 전문기업 (feat. (주)다올피플 엄동현 대표)',
    date: '2022. 12. 16',
  },
  {
    url: 'https://www.kmaeil.com/news/articleView.html?idxno=374612',
    thumb: 'assets/images/news/2022년 청년창업지원센터 입주기업 성과 공유회.jpg',
    tag: '언론보도',
    title: '구리시, ‘2022년 청년창업지원센터 입주기업 성과공유회’ 개최',
    date: '2022.11.21',
  },
  {
    url: 'https://www.youtube.com/watch?v=NggUxeIIPwA',
    thumb: 'https://img.youtube.com/vi/NggUxeIIPwA/hqdefault.jpg',
    tag: '영상',
    title:
      '"꾸준히 성장하는 유통 플랫폼" 마케팅·판매·물류·배송·고객 관리 유통 IT 서비스 개발 기업 다올피플 엄동현 대표 / 혁신성장코리아 / 한국경제TV',
    date: '2022. 9. 3',
  },
  {
    url: 'https://magazine.hankyung.com/job-joy/article/202209135971d',
    thumb: 'assets/images/news/유통 웹 모바일 시스템 구축하는 스타트업.jpg',
    tag: '언론보도',
    title: '[2022 광운대 스타트업 CEO] 유통 웹·모바일 시스템 구축하는 스타트업 ‘다올피플’',
    date: '2022. 09. 13',
  },
  {
    url: 'https://www.fnnews.com/news/202111070518248853',
    thumb: 'assets/images/news/구리시 청년창업 유망 스타트업.jpg',
    tag: '언론보도',
    title: '구리시 청년창업 유망 스타트업 ‘쑥쑥’…지원다채',
    date: '2021. 11. 7',
  },
  {
    url: 'https://www.kihoilbo.co.kr/news/articleView.html?idxno=1010913',
    thumb: 'assets/images/news/복지취약계층 후원금 인창동 행복센터에 전달.jpg',
    tag: '언론보도',
    title: '구리 다올피플, 복지취약계층 후원금 인창동 행복센터에 전달',
    date: '2023. 01. 02',
  },
]

/**
 * 사업분야 핵심 영역 데이터
 * 사업분야 페이지의 "핵심 사업 영역" 섹션에 표시되는 카드 데이터
 */
export const businessAreas = [
  {
    icon: '📋',
    title: 'AX 컨설팅',
    items: [
      '비즈니스에 맞는 IT 전략 수립',
      '업무 프로세스 및 시스템 환경 분석',
      '신규 시스템 도입 및 고도화 컨설팅',
      'IT 방향성 및 기술 로드맵 제안',
    ],
    summary: '단기 성과보다 지속 가능한 구조를 설계합니다.',
  },
  {
    icon: '✨',
    title: '추가 영역',
    items: [
      '내용을 입력해 주세요.',
    ],
    summary: '요약 문구를 입력해 주세요.',
  },
  {
    icon: '🔧',
    title: '시스템 구축·통합',
    items: [
      '웹 · 모바일 · 업무 시스템 맞춤 구축',
      '기업 환경에 최적화된 시스템 설계 및 개발',
      '사용자 중심 UI/UX 고려',
      '안정성과 확장성을 고려한 구조 설계',
      '기존 시스템 연계 및 데이터 통합',
      '외부 솔루션·플랫폼 연동',
      '운영 효율을 높이는 통합 환경 구축',
    ],
    summary: '지금뿐 아니라 미래 확장까지 고려한 개발과, 복잡한 환경을 단순하고 효율적으로 만드는 통합을 지향합니다.',
  },
  {
    icon: '⚙️',
    title: '시스템 유지보수 & 운영',
    items: [
      '장애 대응 및 안정적인 시스템 운영',
      '기능 개선 및 성능 최적화',
      '지속적인 관리 및 기술 지원',
    ],
    summary: '구축보다 중요한 것은 안정적인 운영입니다.',
  },
]

/**
 * 업무 프로세스 데이터
 * 사업분야 페이지의 "업무 프로세스" 섹션에 표시되는 단계별 프로세스
 */
export const workProcess = [
  { step: '분석', description: '고객 요구사항 및 현황 분석' },
  { step: '기획', description: '시스템 기획 및 전략 수립' },
  { step: '설계', description: '아키텍처 및 상세 설계' },
  { step: '구축', description: '개발 및 시스템 구축' },
  { step: '테스트', description: '품질 검증 및 테스트' },
  { step: '운영 및 유지보수', description: '운영 및 지속적 지원' },
]

/**
 * 적합한 고객 유형 데이터
 * 사업분야 페이지의 "이런 고객에게 적합합니다" 섹션에 표시
 */
export const suitableCustomers = [
  '신규 시스템 도입을 고민 중인 기업',
  '기존 시스템의 노후화 또는 성능 개선이 필요한 기업',
  '외주 개발 이후 유지보수가 어려운 기업',
  'IT 전담 인력이 부족한 중소·중견 기업',
]

/**
 * 기술 & 운영 역량 데이터
 * 사업분야 페이지의 "기술 & 운영 역량" 섹션에 표시
 */
export const techCapabilities = [
  'Web / Mobile System',
  'Database & API 연동',
  'System Integration',
  '안정적인 장기 유지보수 경험',
  '고객 맞춤형 프로젝트 운영',
]

