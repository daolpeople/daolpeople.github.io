import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../utils/asset'
import './Business.css'

const services = [
  {
    icon: '📋',
    title: 'AX 컨설팅',
    items: [
      'IT 로드맵 및 고도화 전략 수립',
      '업무 프로세스 및 환경 분석',
      '지속 가능한 시스템 구조 설계',
    ],
    summary: '단기 성과보다 미래를 설계합니다.',
  },
  {
    icon: '🔧',
    title: '시스템 구축·통합',
    items: [
      '웹·모바일·업무 시스템 맞춤 개발',
      '기존 시스템 연계 및 데이터 통합',
      '사용자 중심의 UI/UX 설계',
    ],
    summary: '복잡함을 단순함으로 바꿉니다.',
  },
  {
    icon: '📦',
    title: '솔루션 패키징',
    items: [
      'ERP·그룹웨어 등 핵심 솔루션 공급',
      '레거시 시스템 & 외부 API 통합',
      '비즈니스 대응형 유연한 확장 설계',
    ],
    summary: '완벽한 AX 패키징을 실현합니다.',
  },
  {
    icon: '⚙️',
    title: '운영 및 유지보수',
    items: [
      '장애 대응 및 실시간 모니터링',
      '기능 개선 및 성능 최적화',
      '체계적인 기술 지원 프로세스',
    ],
    summary: '구축보다 중요한 것은 안정성입니다.',
  },
]

const targetTypes = [
  {
    typeLabel: 'TYPE 1',
    title: '전략적 AX 설계',
    icon: '🔍',
    colorTheme: 'blue',
    quote: '막연한 아이디어를 현실로, 운영 효율 극대화',
    targetItems: [
      'IT 로드맵 부재로 앞날이 막막한 기업',
      '시스템 비효율로 비용 절감이 절실한 기업',
    ],
    solutionItems: [
      '인프라 진단 및 맞춤형 로드맵 수립',
      '데이터 통합 체계 구축',
    ],
    value: '비즈니스 데이터의 지능화',
  },
  {
    typeLabel: 'TYPE 2',
    title: '지능형 시스템 구축',
    icon: '⚙️',
    colorTheme: 'purple',
    quote: '복잡한 시스템 통합, 품질 중심의 스마트 패키징',
    targetItems: [
      '파편화된 시스템 통합이 시급한 기업',
      '고품질 맞춤형 웹·모바일 구축이 필요한 기업',
    ],
    solutionItems: [
      'AI 모델 기반 예측 알고리즘 도입',
      '표준 API 연계 환경 구축',
    ],
    value: '유연하고 확장 가능한 AX 생태계 완성',
  },
  {
    typeLabel: 'TYPE 3',
    title: '경험 혁신 및 지속 지원',
    icon: '🛡️',
    colorTheme: 'green',
    quote: '전문적인 사후 관리, 중단 없는 비즈니스 성장',
    targetItems: [
      '유지보수 전문 파트너가 필요한 기업',
      '신속한 시스템 개선을 원하는 기업',
    ],
    solutionItems: [
      'AI 장애 예측 및 실시간 모니터링',
      '통합 대시보드 기반 운영',
    ],
    value: '신뢰 기반의 지속 가능한 파트너십',
  },
  {
    typeLabel: 'SPECIAL',
    title: 'AX 토탈 솔루션',
    icon: '⭐',
    colorTheme: 'gold',
    quote: '컨설팅부터 운영까지, 성공을 위한 최단 경로',
    targetItems: [
      '이커머스 등 특정 분야 비즈니스',
      '전 과정을 한 번에 해결하고 싶은 기업',
    ],
    solutionItems: [
      '비즈니스 진단 → 전략 설계',
      '스마트 구축 → 운영 전 과정 통합 지원',
    ],
    value: '올인원 패키지를 통한 비즈니스 성공 가속화',
  },
]

export default function Business() {
  const servicesRef = useRef(null)
  const [servicesVisible, setServicesVisible] = useState(false)

  useEffect(() => {
    const el = servicesRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setServicesVisible(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="business-page-v2">
      {/* 1단계: 히어로 — 흰 배경, 문구 강조 (iPaaS 스타일) */}
      <section className="business-hero-v2">
        <div className="container business-hero-v2-inner">
          <h1
            className="business-hero-v2-title"
            dangerouslySetInnerHTML={{ __html: '비즈니스 혁신을 위한 다올피플의<br />통합 <span class="business-hero-v2-title-accent">AX & IT</span> 솔루션' }}
          />
          <p className="business-hero-v2-desc">
            컨설팅부터 시스템 구축, 유지보수까지 AX 기반의 차별화된 기술 파트너십으로<br />
            비즈니스의 미래를 완성해 보세요
          </p>
        </div>
      </section>

      {/* 2단계: 사업 영역 — 메인페이지 카드 스타일 + 떨어지는 애니메이션 */}
      <section ref={servicesRef} className={`business-services-v2${servicesVisible ? ' is-visible' : ''}`}>
        <div className="container">
          <h2 className="business-section-title-v2">사업 영역</h2>
          <div className="business-services-grid-v2">
            {services.map((svc, index) => (
              <article key={index} className="business-card-v2">
                <div className="business-card-v2-icon">{svc.icon}</div>
                <h3 className="business-card-v2-title">{svc.title}</h3>
                <ul className="business-card-v2-list">
                  {svc.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="business-card-v2-summary">{svc.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 사업분야 ↔ AX Total Solution 사이 배너 — Deep Navy */}
      <section className="business-intro-v2">
        <div className="container">
          <p className="business-intro-v2-line1">"다올피플은 단순히 구축에 그치지 않습니다"</p>
          <p className="business-intro-v2-line2">이미 수많은 기업이 경험하고 있는 다올피플만의 차별화된 파트너십.</p>
        </div>
      </section>

      {/* 3단계: AX Total Solution — dopp-business-01 이미지 */}
      <section className="business-process-v2 business-ax-total">
        <div className="container">
          <h2 className="business-section-title-v2">AX Total Solution</h2>
          <p className="business-ax-total-tagline">단순한 시스템 구축을 넘어, 지능형 비즈니스 생태계를 설계합니다</p>
          <div className="business-ax-total-image-wrap">
            <img
              src={asset('assets/images/dopp-business-01.png')}
              alt="AX Total Solution"
              className="business-ax-total-image"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = asset('assets/images/dopp-business-01.jpg')
              }}
            />
          </div>
        </div>
      </section>

      {/* 4단계: 이런 고객에게 적합합니다 — TYPE 1~3 + SPECIAL */}
      <section className="business-target-v2">
        <div className="container">
          <h2 className="business-section-title-v2">"미래 비즈니스의 표준, 다올피플의 AX 통합 솔루션으로 시작하세요"</h2>
          <p className="business-target-v2-lead">이런 고민, 다올피플이 해결해 드립니다.</p>
          <div className="business-target-types-grid">
            {targetTypes.map((item, index) => (
              <article key={index} className={`business-target-type-card business-target-type-card--${item.colorTheme}`}>
                <div className="business-target-type-icon">{item.icon}</div>
                <span className="business-target-type-label">{item.typeLabel}</span>
                <h3 className="business-target-type-title">{item.title}</h3>
                <p className="business-target-type-quote">"{item.quote}"</p>
                <p className="business-target-type-problem-label">이런 고민 있으신가요?</p>
                <div className="business-target-type-problem-box">
                  {item.targetItems.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <p className="business-target-type-solution-label">다올피플의 AX 처방전</p>
                <ul className="business-target-type-solution-list">
                  {item.solutionItems.map((s, i) => (
                    <li key={i}><span className="business-target-type-check">✓</span> {s}</li>
                  ))}
                </ul>
                <div className="business-target-type-value-badge">{item.value}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="business-cta-v2">
        <div className="container">
          <div className="business-cta-inner-v2">
            <h2 className="business-cta-title-v2">IT 파트너를 찾고 계신가요?</h2>
            <p className="business-cta-desc-v2">다올피플은 단순한 시스템 도입을 넘어, 기업의 미래를 바꾸는 AX 생태계를 설계합니다.</p>
            <Link to="/contact" className="business-cta-btn-v2">문의하기</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
