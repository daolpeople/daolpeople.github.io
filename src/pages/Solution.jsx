import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { asset } from '../utils/asset'
import './Solution.css'

export default function Solution() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab')
  const initialTab = tabParam ? parseInt(tabParam, 10) : 0
  const [activeSolution, setActiveSolution] = useState(initialTab)
  const [sliderPosition, setSliderPosition] = useState(0)
  const [miapsSliderPosition, setMiapsSliderPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMiapsPaused, setIsMiapsPaused] = useState(false)
  const processImageRef = useRef(null)
  const frontProcessImageRef = useRef(null)
  const hybridProcessImageRef = useRef(null)
  const sliderRef = useRef(null)
  const miapsSliderRef = useRef(null)
  
  // MAXY Mobile 슬라이드 이미지 목록 (무한 스크롤을 위해 2배로 복제)
  const maxySlideImages = [
    'assets/images/reference/maxy/reference-thumbnail-047.png',
    'assets/images/reference/maxy/reference-thumbnail-048.png',
    'assets/images/reference/maxy/reference-thumbnail-049.png',
    'assets/images/reference/maxy/reference-thumbnail-051.png',
    'assets/images/reference/maxy/reference-thumbnail-053.png',
    'assets/images/reference/maxy/reference-thumbnail-054.png',
    'assets/images/reference/maxy/reference-thumbnail-055.png',
    'assets/images/reference/maxy/reference-thumbnail-059.png',
    'assets/images/reference/maxy/reference-thumbnail-062.png',
    'assets/images/reference/maxy/reference-thumbnail-066.png',
    'assets/images/reference/maxy/reference-thumbnail-072.png',
    'assets/images/reference/maxy/reference-thumbnail-074.png',
  ]
  
  // MiAPS Hybrid 슬라이드 이미지 목록
  const miapsSlideImages = [
    'assets/images/reference/miaps/reference-thumbnail-050.png',
    'assets/images/reference/miaps/reference-thumbnail-052.png',
    'assets/images/reference/miaps/reference-thumbnail-056.png',
    'assets/images/reference/miaps/reference-thumbnail-058.png',
    'assets/images/reference/miaps/reference-thumbnail-060.png',
    'assets/images/reference/miaps/reference-thumbnail-061.png',
    'assets/images/reference/miaps/reference-thumbnail-063.png',
    'assets/images/reference/miaps/reference-thumbnail-064.png',
    'assets/images/reference/miaps/reference-thumbnail-078.png',
    'assets/images/reference/miaps/reference-thumbnail-079.png',
    'assets/images/reference/miaps/reference-thumbnail-081.png',
    'assets/images/reference/miaps/reference-thumbnail-082.png',
    'assets/images/reference/miaps/reference-thumbnail-083.png',
    'assets/images/reference/miaps/reference-thumbnail-084.png',
    'assets/images/reference/miaps/reference-thumbnail-086.png',
    'assets/images/reference/miaps/reference-thumbnail-088.png',
    'assets/images/reference/miaps/reference-thumbnail-090.png',
    'assets/images/reference/miaps/reference-thumbnail-091.png',
    'assets/images/reference/miaps/reference-thumbnail-092.png',
    'assets/images/reference/miaps/reference-thumbnail-093.png',
    'assets/images/reference/miaps/reference-thumbnail-094.png',
    'assets/images/reference/miaps/reference-thumbnail-099.png',
    'assets/images/reference/miaps/reference-thumbnail-100.png',
    'assets/images/reference/miaps/reference-thumbnail-101.png',
    'assets/images/reference/miaps/reference-thumbnail-102.png',
    'assets/images/reference/miaps/reference-thumbnail-103.png',
    'assets/images/reference/miaps/reference-thumbnail-105.png',
    'assets/images/reference/miaps/reference-thumbnail-106.png',
    'assets/images/reference/miaps/reference-thumbnail-108.png',
    'assets/images/reference/miaps/reference-thumbnail-109.png',
    'assets/images/reference/miaps/reference-thumbnail-110.png',
    'assets/images/reference/miaps/reference-thumbnail-112.png',
    'assets/images/reference/miaps/reference-thumbnail-113.png',
    'assets/images/reference/miaps/reference-thumbnail-114.png',
    'assets/images/reference/miaps/reference-thumbnail-115.png',
    'assets/images/reference/miaps/reference-thumbnail-117.png',
    'assets/images/reference/miaps/reference-thumbnail-118.png',
    'assets/images/reference/miaps/reference-thumbnail-119.png',
    'assets/images/reference/miaps/reference-thumbnail-121.png',
    'assets/images/reference/miaps/reference-thumbnail-123.png',
    'assets/images/reference/miaps/reference-thumbnail-124.png',
    'assets/images/reference/miaps/reference-thumbnail-125.png',
    'assets/images/reference/miaps/reference-thumbnail-127.png',
    'assets/images/reference/miaps/reference-thumbnail-128.png',
    'assets/images/reference/miaps/reference-thumbnail-129.png',
    'assets/images/reference/miaps/reference-thumbnail-132.png',
    'assets/images/reference/miaps/reference-thumbnail-133.png',
    'assets/images/reference/miaps/reference-thumbnail-134.png',
  ]
  
  // MAXY Mobile 무한 스크롤 슬라이드
  useEffect(() => {
    if (activeSolution === 2 && !isPaused) {
      const interval = setInterval(() => {
        setSliderPosition((prev) => {
          const itemWidth = 320 // 각 아이템 너비(280px) + gap(40px)
          const maxScroll = itemWidth * maxySlideImages.length
          const newPosition = prev + 0.5
          
          // 무한 루프: 첫 번째 세트가 끝나면 두 번째 세트로, 두 번째 세트가 끝나면 처음으로 리셋
          if (newPosition >= maxScroll) {
            // transition 없이 즉시 처음으로 리셋 (사용자가 알아채지 못하도록)
            setTimeout(() => {
              setSliderPosition(0)
            }, 0)
            return 0
          }
          return newPosition
        })
      }, 16) // 60fps를 위한 간격
      return () => clearInterval(interval)
    }
  }, [activeSolution, isPaused, maxySlideImages.length])
  
  // MiAPS Hybrid 무한 스크롤 슬라이드
  useEffect(() => {
    if (activeSolution === 3 && !isMiapsPaused) {
      const interval = setInterval(() => {
        setMiapsSliderPosition((prev) => {
          const itemWidth = 320 // 각 아이템 너비(280px) + gap(40px)
          const maxScroll = itemWidth * miapsSlideImages.length
          const newPosition = prev + 1 // 속도 증가: 0.5 -> 1
          
          // 무한 루프: 첫 번째 세트가 끝나면 두 번째 세트로, 두 번째 세트가 끝나면 처음으로 리셋
          if (newPosition >= maxScroll) {
            // transition 없이 즉시 처음으로 리셋 (사용자가 알아채지 못하도록)
            setTimeout(() => {
              setMiapsSliderPosition(0)
            }, 0)
            return 0
          }
          return newPosition
        })
      }, 16) // 60fps를 위한 간격
      return () => clearInterval(interval)
    }
  }, [activeSolution, isMiapsPaused, miapsSlideImages.length])

  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam !== null) {
      const tab = parseInt(tabParam, 10)
      if (!isNaN(tab) && tab >= 0) {
        setActiveSolution(tab)
      }
    }
  }, [searchParams])

  // 스크롤 애니메이션을 위한 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const refs = [processImageRef.current, frontProcessImageRef.current, hybridProcessImageRef.current].filter(Boolean)
    
    refs.forEach((ref) => {
      // 탭 변경 시 애니메이션 클래스 초기화
      ref.classList.remove('animate-in')
      observer.observe(ref)
    })

    return () => {
      refs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [activeSolution])

  const solutions = [
    {
      id: 0,
      name: 'DATA Sence',
      heroTitle: '데이터 분석 및 인사이트 솔루션',
      heroDescription: 'DATA Sence',
      introTitle: '데이터, 이제 <span class="datasence-title-highlight">DATA Sense</span>로<br />쉽고 스마트하게 활용하세요!',
      introSubtitle: '복잡하고 방대한 데이터, 어떻게 활용해야 할지 막막하셨나요?<br />Data Sense는 누구나 데이터를 쉽게 이해하고<br />가치 있는 인사이트를 얻을 수 있도록 도와주는<br />올인원 데이터 분석 솔루션입니다.',
      introDetail: '흩어져 있는 데이터를 한곳에 모아 분석하고, 이해하기 쉬운 형태로 시각화하여 보여주는 지능형 플랫폼입니다.<br />마치 데이터 전문가가 옆에서 분석해주는 것처럼, 비즈니스에 필요한 핵심 정보를 빠르고 정확하게 제공합니다.',
      features: [
        {
          title: '쉽고 직관적인 분석',
          icon: '🔍',
          description: '복잡한 코드나 쿼리 없이, 클릭 몇 번으로 데이터를 탐색하고 분석할 수 있습니다. 마치 웹 서핑하듯 간편하게 원하는 정보를 찾아보세요.',
          items: [
            '드래그 앤 드롭 방식의 직관적인 인터페이스',
            '코딩 지식 없이도 누구나 사용 가능',
            '실시간 데이터 탐색 및 분석',
          ],
        },
        {
          title: '똑똑한 AI 인사이트',
          icon: '🤖',
          description: '인공지능이 데이터 속 숨겨진 패턴과 트렌드를 자동으로 발견하여 알려줍니다. 놓치기 쉬운 중요한 변화를 먼저 감지하고 대응하세요.',
          items: [
            'AI 기반 자동 패턴 분석',
            '예측 분석 및 트렌드 감지',
            '개인화된 인사이트 추천',
          ],
        },
        {
          title: '자동화된 리포팅',
          icon: '📈',
          description: '매번 반복되는 보고서 작성, 이제 Data Sense에게 맡기세요. 최신 데이터를 반영한 보고서가 자동으로 생성되어 업무 효율을 높여줍니다.',
          items: [
            '스케줄 기반 자동 리포트 생성',
            '다양한 리포트 템플릿 제공',
            '실시간 대시보드 및 시각화',
          ],
        },
      ],
      suitableFor: [
        '데이터 기반의 합리적인 의사결정을 내리고 싶은 경영진 및 관리자',
        '반복적인 데이터 취합 및 보고서 작성 업무를 줄이고 핵심 업무에 집중하고 싶은 실무자',
        '데이터 분석 전문 지식은 없지만 데이터에서 가치를 발견하고 싶은 모든 분',
      ],
      benefits: [
        {
          title: '업무 효율성 증대',
          desc: '수작업 데이터 처리 시간 단축 및 자동화',
        },
        {
          title: '비용 절감',
          desc: '데이터 분석 전문가 없이도 수준 높은 분석 가능',
        },
        {
          title: '신속한 의사결정',
          desc: '실시간 데이터 기반의 빠르고 정확한 판단 지원',
        },
        {
          title: '새로운 기회 발견',
          desc: '숨겨진 데이터 인사이트를 통한 비즈니스 성장 기회 포착',
        },
      ],
      ctaTitle: '지금 바로 Data Sense를 경험해보세요!<br />데이터가 보여주는 새로운 세상을 만날 준비가 되셨나요?',
      ctaDesc: '무료 체험을 통해 Data Sense의 강력한 기능을 직접 확인해보세요.<br />데이터에서 가치를 발견하고 비즈니스를 성장시키는 여정을 시작하세요.',
    },
    {
      id: 1,
      name: 'MAXY Front',
      heroTitle: '프론트 모니터링 솔루션',
      heroDescription: 'MAXY Front',
      introTitle: '다양한 웹 환경의 전구간을 모니터링하는 방식',
      introSubtitle: '모든 프론트 구간의 개별 고객 성능 만족도를<br />측정하여 사용성과 성능 저하 발생 시<br />고객 환경 기준에서의 원인을 추적할 수<br />있도록 지원합니다.',
      features: [
        {
          title: 'FEATURE 1',
          image: 'assets/images/maxy2.png',
          items: [
            'DAU, CCU, 고객 별 체류시간 등 서비스 이용과 관련된 각종 통계 데이트 측정',
            '페이지 로딩 시간, 서버 응답 시간 등 성능 분석을 위한 데이터 측정 및 프로파일 제공',
            'AJAX, Script Error 등 서비스 장애 발생에 대한 대상 고객 기반 원인 분석 지원',
          ],
        },
        {
          title: 'FEATURE 2',
          image: 'assets/images/maxy3.png',
          items: [
            '병목 현상, 느린 구간에 대한 성능 저하 원인 분석 지원',
            '장애 발생 시 해결을 위한 다양한 디버깅용 데이터 및 가이드 제공',
            '실시간 상태와 성능 분석을 위한 데이터 기반의 분석용 보고서 제공',
          ],
        },
        {
          title: 'FEATURE 3',
          image: 'assets/images/maxy4.png',
          items: [
            '전 구간 고객 행위 재연을 위한 세션 리플레이 제공 (100% 지원)',
            '고객 별 주요 서비스 이용 행위 추적 및 다양한 행위 분석 필터 지원',
            '성능 이슈, 사용성 저하, 장애 대응에 효과적인 100% 실제 고객 상황 재연',
          ],
        },
      ],
      ctaTitle: '측정할 수 없으면 개선할 수 없습니다.<br />다양한 웹 환경의 성능을 측정하고 고객 한사람의 불편도 추적할 수 있습니다.',
      ctaDesc: '기업의 핵심 서비스 성능이 개별 고객에게 미치는 영향력은 결국 브랜드 이미지와 직결됩니다.<br />전 구간 세션리플레이와 Core Web Vitals 기준의 고객 체감 성능 만족도 측정을 통해 안정적인 서비스 성능을 유지하십시오.',
    },
    {
      id: 2,
      name: 'MAXY Mobile',
      heroTitle: '모바일 앱 모니터링 솔루션',
      heroDescription: 'MAXY Mobile',
      introTitle: '모바일 앱 서비스의 성능과 사용성을 측정하는 방식',
      introSubtitle: '고객 모바일 서비스 경험 개선 및 안정적인 제공을 위해서는 무엇보다 앱의 성능과 사용성이<br />측정되어야 하며 측정을 통해 수집되어 분석된 데이터는 서비스 개선을 위한 핵심 지표가 됩니다',
      features: [
        {
          title: 'FEATURE 1',
          image: 'assets/images/solution-feature_img01.png',
          items: [
            '다양한 모바일 디바이스 별 성능 모니터링 및 문제 원인 추적 및 분석',
            '각종 모니터링 분석 지표를 활용한 대상 모바일 서비스의 사용자 만족도, 성능 향상효과 제공',
            '사용자 정의 대시보드가 가능한 다양한 모니터링 콤포넌트 제공',
          ],
        },
        {
          title: 'FEATURE 2',
          image: 'assets/images/solution-feature_img02.png',
          items: [
            '모바일 서비스 이용 고객 별 다양한 환경에서의 문제 원인 추적 및 분석',
            '고객 별 행위분석을 통한 사용자 중심의 모바일 서비스 운영 가이드제시',
            '1 : 1 맞춤형 고객 서비스를 위한 사용자 행위 추적 (UBA)기능 제공',
          ],
        },
        {
          title: 'FEATURE 3',
          image: 'assets/images/solution-feature_img03.png',
          items: [
            '모바일 앱 서비스의 Total Performance 모니터링',
            '앱의 사용성 및 성능 저하를 일으키는 요소의 원인 추적 및 분석',
            '실시간 Error, Crash 관제 및 원인 추적을 통한 안정적인 서비스 환경 지원',
          ],
        },
      ],
      ctaTitle: '안정적인 모바일서비스 환경이 필요한 기업들은<br />이미 MAXY를 사용하고 있습니다.',
      ctaDesc: 'MAXY의 안정적인 모니터링 기술은 귀사의 모바일 앱 서비스에는 영향을 끼치지 않습니다.<br />안정적이고 다양한 모니터링 경험을 원하시면 지금 바로 MAXY를 검토하십시오.',
    },
    {
      id: 3,
      name: 'MiAPS Hybrid',
      heroTitle: '하이브리드 플랫폼 솔루션',
      heroDescription: 'MiAPS Hybrid',
      introTitle: '클라우드와 온프레미스를 통합한 하이브리드 플랫폼',
      introSubtitle: '유연한 인프라 구축을 통해<br />기업의 다양한 요구사항을<br />효율적으로 지원합니다.',
      features: [
        {
          title: 'FEATURE 1',
          image: 'assets/images/solution-feature_img04.png',
          items: [
            'OSMU (One Source Multi-Use) 하나의 웹소스로 Android, iOS 동시지원',
            '모바일 운영체제 (Android, iOS)별 Native 플랫폼 제공',
            'DB, Web Service, SAP, RESTful 등 다양한 기간계 시스템 연계 모듈 제공',
          ],
        },
        {
          title: 'FEATURE 2',
          image: 'assets/images/solution-feature_img05.png',
          items: [
            'End to End 데이터 압축 암호화 통신지원(AES 256)을 통한 보안성 확보',
            '전자정부 표준 프레임워크 호환성 인증 및 웹 표준, 접근성 준수',
            '플랫폼과 리소스 간 독립적인 Architecture 제공을 통한 확장성 제시',
          ],
        },
        {
          title: 'FEATURE 3',
          image: 'assets/images/solution-feature_img06.png',
          items: [
            'Resource 자동 업데이트 지원으로 모바일 웹의 성능향상 지원',
            'GIS/GPS, QR-Code, SQLite, Camera, Call, SMS 등 다양한 Native 기능 지원',
            'Admin 기능을 통해 안정적인 서비스를 위한 모바일 통합 운영 환경 지원',
          ],
        },
      ],
      ctaTitle: '하이브리드 환경에서 최적의 인프라를 구축하세요.<br />MiAPS Hybrid와 함께 유연하고 안정적인 IT 환경을 만들어가세요.',
      ctaDesc: '기업의 다양한 요구사항에 맞춘 하이브리드 플랫폼으로<br />효율적이고 안전한 IT 인프라를 제공합니다.',
    },
    {
      id: 4,
      name: 'AX iPaaS',
      heroTitle: 'AX iPaaS',
      heroDescription: '통합 플랫폼 솔루션',
      introTitle: '기업의 시스템 통합을 위한 통합 플랫폼',
      introSubtitle: '다양한 시스템과 애플리케이션을<br />효율적으로 연결하고 통합하여<br />비즈니스 프로세스를 최적화합니다.',
      features: [
        {
          title: 'FEATURE 1',
          items: [
            '다양한 시스템과 애플리케이션 간의 실시간 데이터 연동 및 동기화',
            'RESTful API, SOAP, Database 등 다양한 프로토콜 및 데이터 소스 지원',
            '데이터 변환 및 매핑을 통한 시스템 간 호환성 확보',
          ],
        },
        {
          title: 'FEATURE 2',
          items: [
            '드래그 앤 드롭 방식의 직관적인 통합 프로세스 설계',
            '실시간 모니터링 및 로그 분석을 통한 통합 상태 관리',
            '에러 처리 및 재시도 메커니즘을 통한 안정적인 데이터 전송 보장',
          ],
        },
        {
          title: 'FEATURE 3',
          items: [
            '확장 가능한 아키텍처로 기업 성장에 따른 시스템 확장 지원',
            '보안 인증 및 권한 관리 기능을 통한 안전한 데이터 통합',
            '클라우드 및 온프레미스 환경 모두 지원',
          ],
        },
      ],
      ctaTitle: '효율적인 시스템 통합으로 비즈니스 가치를 극대화하세요.<br />AX iPaaS와 함께 더 스마트한 기업을 만들어가세요.',
      ctaDesc: '복잡한 시스템 환경에서도 간단하고 안정적인 통합을 제공합니다.<br />기업의 디지털 전환을 위한 강력한 파트너가 되겠습니다.',
    },
  ]

  const currentSolution = solutions[activeSolution]

  return (
    <main>
      <section className="solution-page-section">
        <div className="container">
          {/* 솔루션 탭 버튼 */}
          <div className="solution-tabs">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                className={`solution-tab ${activeSolution === solution.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSolution(solution.id)
                  setSearchParams({ tab: solution.id.toString() })
                }}
              >
                {solution.name}
              </button>
            ))}
          </div>

          {/* 솔루션 제목 - 모든 탭에서 제거 */}

          {/* 소개 섹션 - 이미지와 텍스트 좌우 배치 (MAXY Front, MAXY Mobile) */}
          {activeSolution === 1 && (
            <div className="solution-intro-hero maxy-front-hero">
              <div className="solution-intro-hero-image maxy-front-image">
                <div className="solution-image-stack maxy-front-stack">
                  <img src={asset('assets/images/maxy1-1.jpg')} alt="MAXY Front" className="stack-image stack-1" />
                  <img src={asset('assets/images/maxy1.png')} alt="MAXY Front" className="stack-image stack-2" />
                  <img src={asset('assets/images/maxy1-2.png')} alt="MAXY Front" className="stack-image stack-3" />
                </div>
              </div>
              <div className="solution-intro-hero-content maxy-front-content text-right">
                <h2 className="solution-intro-title">
                  {currentSolution.introTitle}
                </h2>
                <h3 className="solution-intro-subtitle-main">
                  {currentSolution.heroTitle}
                </h3>
                <h4 className="solution-intro-name">
                  {currentSolution.heroDescription}
                </h4>
                <p 
                  className="solution-intro-desc"
                  dangerouslySetInnerHTML={{ __html: currentSolution.introSubtitle }}
                />
              </div>
            </div>
          )}
          {activeSolution === 2 && (
            <div className="solution-intro-hero maxy-mobile-hero">
              <div className="solution-intro-hero-image maxy-mobile-image">
                <div className="solution-image-stack maxy-mobile-stack">
                  <img src={asset('assets/images/maxymobile.png')} alt="MAXY Mobile" className="stack-image stack-1 stack-single" />
                </div>
              </div>
              <div className="solution-intro-hero-content maxy-mobile-content text-right">
                <h2 className="solution-intro-title">
                  {currentSolution.introTitle}
                </h2>
                <h3 className="solution-intro-subtitle-main">
                  {currentSolution.heroTitle}
                </h3>
                <h4 className="solution-intro-name">
                  {currentSolution.heroDescription}
                </h4>
                <p 
                  className="solution-intro-desc"
                  dangerouslySetInnerHTML={{ __html: currentSolution.introSubtitle }}
                />
              </div>
            </div>
          )}

          {/* DATA Sence 특별 레이아웃 */}
          {activeSolution === 0 && (
            <div className="solution-intro-hero datasence-hero">
              <div className="solution-intro-hero-image datasence-image">
                <img 
                  src={asset('assets/images/reference/datasence/Gemini_Generated_Image_123n95123n95123n.png')} 
                  alt="DATA Sence" 
                  className="datasence-main-image"
                />
              </div>
              <div className="solution-intro-hero-content datasence-content text-right">
                <h2 
                  className="solution-intro-title"
                  dangerouslySetInnerHTML={{ __html: currentSolution.introTitle }}
                />
                <p 
                  className="solution-intro-desc"
                  dangerouslySetInnerHTML={{ __html: currentSolution.introSubtitle }}
                />
              </div>
            </div>
          )}

          {/* Data Sense란? 섹션 - 이미지 바로 아래 */}
          {activeSolution === 0 && currentSolution.introDetail && (
            <div className="datasense-intro-detail">
              <h3 className="datasense-section-title">💡 Data Sense란?</h3>
              <p 
                className="solution-intro-desc"
                dangerouslySetInnerHTML={{ __html: currentSolution.introDetail }}
              />
            </div>
          )}

          {/* MiAPS Hybrid 특별 레이아웃 */}
          {activeSolution === 3 && (
            <div className="solution-intro-hero miap-hybrid-hero">
              <div className="solution-intro-hero-image miap-hybrid-image">
                <div className="solution-image-stack miap-hybrid-stack">
                  <img src={asset('assets/images/solution-visual_img02-1.jpg')} alt="MiAPS Hybrid" className="stack-image stack-1" />
                  <img src={asset('assets/images/solution-visual_img02-2.png')} alt="MiAPS Hybrid" className="stack-image stack-2" />
                </div>
              </div>
              <div className="solution-intro-hero-content miap-hybrid-content text-right">
                <h2 className="solution-intro-title">
                  모바일 앱을 안정적으로 개발하고 통합운영 할 수있는
                </h2>
                <h3 className="solution-intro-subtitle-main">
                  모바일 통합 플랫폼
                </h3>
                <h4 className="solution-intro-name">
                  MiAPS Hybrid
                </h4>
                <p className="solution-intro-desc">
                  전사 표준화된 모바일 환경 구축으로 모바일 업무 개발, 유지보수 및 통합운영이 용이합니다.<br />엔터프라이즈 모바일의 운영요소(사용자, App, Device, 보안정책)들을 통합적으로 제어하고<br />관리하여 모바일 시스템 운영/유지보수의 효율성과 편의성이 크게 향상됩니다.
                </p>
              </div>
            </div>
          )}

          {/* AX iPaaS 및 기타 솔루션의 경우 기존 스타일 */}
          {activeSolution !== 0 && activeSolution !== 1 && activeSolution !== 2 && activeSolution !== 3 && (
            <div className="solution-intro">
              <h2 className="solution-intro-title">
                {currentSolution.introTitle}
              </h2>
              <h3 className="solution-intro-subtitle-main">
                {currentSolution.heroTitle}
              </h3>
              <h4 className="solution-intro-name">
                {currentSolution.heroDescription}
              </h4>
              <p 
                className="solution-intro-desc"
                dangerouslySetInnerHTML={{ __html: currentSolution.introSubtitle }}
              />
            </div>
          )}

          {/* FEATURE 섹션들 */}
          <div className="solution-features">
            {/* MAXY Front의 경우 카드 그리드 */}
            {activeSolution === 1 && (
              <>
                <div className="solution-features-grid maxy-front-features">
                  {currentSolution.features.map((feature, index) => (
                    <div key={index} className="solution-feature-card maxy-front-card">
                      {feature.image && (
                        <div className="solution-feature-card-image">
                          <img src={asset(feature.image)} alt={feature.title} />
                        </div>
                      )}
                      <h3 className="solution-feature-card-title">
                        {feature.title}
                      </h3>
                      <ul className="solution-feature-card-list">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div 
                  ref={frontProcessImageRef}
                  className="solution-process-image maxy-front-process"
                >
                  <img src={asset('assets/images/solution-process_img05.png')} alt="MAXY Front Process" />
                </div>
              </>
            )}
            {/* MAXY Mobile의 경우 카드 그리드 */}
            {activeSolution === 2 && (
              <>
                <div className="solution-features-grid maxy-mobile-features">
                  {currentSolution.features.map((feature, index) => (
                    <div key={index} className="solution-feature-card maxy-mobile-card">
                      {feature.image && (
                        <div className="solution-feature-card-image">
                          <img src={asset(feature.image)} alt={feature.title} />
                        </div>
                      )}
                      <h3 className="solution-feature-card-title">
                        {feature.title}
                      </h3>
                      <ul className="solution-feature-card-list">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div 
                  ref={processImageRef}
                  className="solution-process-image maxy-mobile-process"
                >
                  <img src={asset('assets/images/solution-process_img01.png')} alt="MAXY Mobile Process" />
                </div>
                
                {/* MAXY Mobile 로고 슬라이드 (thinkm.co.kr 스타일) */}
                <div 
                  className="maxy-mobile-logo-slider"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="maxy-mobile-logo-slider-wrapper">
                    <div 
                      ref={sliderRef}
                      className="maxy-mobile-logo-slider-track"
                      style={{ transform: `translateX(-${sliderPosition}px)` }}
                    >
                      {/* 원본 이미지들 */}
                      {maxySlideImages.map((image, index) => (
                        <div key={`original-${index}`} className="maxy-mobile-logo-item">
                          <img src={asset(image)} alt={`MAXY Mobile 고객사 ${index + 1}`} />
                        </div>
                      ))}
                      {/* 무한 스크롤을 위한 복제 */}
                      {maxySlideImages.map((image, index) => (
                        <div key={`clone-${index}`} className="maxy-mobile-logo-item">
                          <img src={asset(image)} alt={`MAXY Mobile 고객사 ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* DATA Sence 특별 레이아웃 */}
            {activeSolution === 0 && (
              <>
                <div className="solution-features-header">
                  <h2 className="solution-features-title">🚀 Data Sense, 왜 특별할까요?</h2>
                  <p className="solution-features-subtitle">비전문가도 전문가처럼 데이터를 활용할 수 있도록 강력하면서도 쉬운 기능을 제공합니다.</p>
                </div>
                <div className="solution-features-grid datasense-features">
                  {currentSolution.features.map((feature, index) => (
                    <div key={index} className="solution-feature-card datasense-feature-card">
                      <div className="datasense-feature-icon">{feature.icon}</div>
                      <h3 className="solution-feature-card-title datasense-feature-title">
                        {feature.title}
                      </h3>
                      <p className="datasense-feature-desc">{feature.description}</p>
                      <ul className="solution-feature-card-list">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 추천 대상 섹션 */}
                {currentSolution.suitableFor && (
                  <div className="datasense-suitable">
                    <h3 className="datasense-section-title">🎯 이런 분들에게 추천합니다!</h3>
                    <ul className="datasense-suitable-list">
                      {currentSolution.suitableFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 도입 효과 섹션 */}
                {currentSolution.benefits && (
                  <div className="datasense-benefits">
                    <h3 className="datasense-section-title">✨ Data Sense 도입 효과</h3>
                    <div className="datasense-benefits-grid">
                      {currentSolution.benefits.map((benefit, index) => (
                        <div key={index} className="datasense-benefit-card">
                          <h4 className="datasense-benefit-title">{benefit.title}</h4>
                          <p className="datasense-benefit-desc">{benefit.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            
            {/* MiAPS Hybrid의 경우 카드 그리드 */}
            {activeSolution === 3 && (
              <>
                <div className="solution-features-grid miap-hybrid-features">
                  {currentSolution.features.map((feature, index) => (
                    <div key={index} className="solution-feature-card miap-hybrid-card">
                      {feature.image && (
                        <div className="solution-feature-card-image">
                          <img src={asset(feature.image)} alt={feature.title} />
                        </div>
                      )}
                      <h3 className="solution-feature-card-title">
                        {feature.title}
                      </h3>
                      <ul className="solution-feature-card-list">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* AX iPaaS 및 기타 솔루션의 경우 기존 스타일 */}
            {activeSolution !== 0 && activeSolution !== 1 && activeSolution !== 2 && activeSolution !== 3 && currentSolution.features.map((feature, index) => (
              <div key={index} className="solution-feature">
                <h3 className="solution-feature-title">
                  {feature.title}
                </h3>
                <ul className="solution-feature-list">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA 섹션 및 프로세스 이미지 - MiAPS Hybrid */}
          {activeSolution === 3 && (
            <>
              <section className="solution-cta-section miap-hybrid-cta-section">
                <div className="solution-cta miap-hybrid-cta">
                  <div className="miap-hybrid-cta-content">
                    <h2 
                      className="solution-cta-title"
                      dangerouslySetInnerHTML={{ __html: currentSolution.ctaTitle }}
                    />
                    <p 
                      className="solution-cta-desc miap-hybrid-cta-desc"
                      dangerouslySetInnerHTML={{ __html: currentSolution.ctaDesc }}
                    />
                  </div>
                </div>
              </section>
              <div 
                ref={hybridProcessImageRef}
                className="solution-process-image miap-hybrid-process"
              >
                <img src={asset('assets/images/solution-process_img02.png')} alt="MiAPS Hybrid Process" />
              </div>
              
              {/* MiAPS Hybrid 로고 슬라이드 (thinkm.co.kr 스타일) */}
              <div 
                className="maxy-mobile-logo-slider miap-hybrid-logo-slider"
                onMouseEnter={() => setIsMiapsPaused(true)}
                onMouseLeave={() => setIsMiapsPaused(false)}
              >
                <div className="maxy-mobile-logo-slider-wrapper">
                  <div 
                    ref={miapsSliderRef}
                    className="maxy-mobile-logo-slider-track"
                    style={{ transform: `translateX(-${miapsSliderPosition}px)` }}
                  >
                    {/* 원본 이미지들 */}
                    {miapsSlideImages.map((image, index) => (
                      <div key={`original-${index}`} className="maxy-mobile-logo-item">
                        <img src={asset(image)} alt={`MiAPS Hybrid 고객사 ${index + 1}`} />
                      </div>
                    ))}
                    {/* 무한 스크롤을 위한 복제 */}
                    {miapsSlideImages.map((image, index) => (
                      <div key={`clone-${index}`} className="maxy-mobile-logo-item">
                        <img src={asset(image)} alt={`MiAPS Hybrid 고객사 ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA 섹션 - MAXY Mobile */}
      {activeSolution === 2 && (
        <section className="solution-cta-section">
          <div className="solution-cta">
            <div className="container">
              <h2 
                className="solution-cta-title"
                dangerouslySetInnerHTML={{ __html: currentSolution.ctaTitle }}
              />
              <p 
                className="solution-cta-desc"
                dangerouslySetInnerHTML={{ __html: currentSolution.ctaDesc }}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA 섹션 - DATA Sence */}
      {activeSolution === 0 && (
        <section className="solution-cta-section datasence-cta-section">
          <div className="solution-cta datasence-cta">
            <div className="container">
              <h2 
                className="solution-cta-title"
                dangerouslySetInnerHTML={{ __html: currentSolution.ctaTitle }}
              />
              <p 
                className="solution-cta-desc"
                dangerouslySetInnerHTML={{ __html: currentSolution.ctaDesc }}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA 섹션 - 기타 솔루션의 경우 기존 위치 */}
      {activeSolution !== 0 && activeSolution !== 1 && activeSolution !== 2 && activeSolution !== 3 && (
        <section className="solution-cta-section">
          <div className="solution-cta">
            <div className="container">
              <h2 
                className="solution-cta-title"
                dangerouslySetInnerHTML={{ __html: currentSolution.ctaTitle }}
              />
              <p 
                className="solution-cta-desc"
                dangerouslySetInnerHTML={{ __html: currentSolution.ctaDesc }}
              />
            </div>
          </div>
        </section>
      )}

    </main>
  )
}


