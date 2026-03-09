import { asset } from '../../utils/asset'
import './AxiPaaS.css'

const successStories = [
  { sector: 'Logistics', client: 'HMM(현대상선)', desc: '챗봇 시스템 및 메인 시스템 연동' },
  { sector: 'E-Commerce', client: '쇼핑엔티', desc: '일 평균 1,000만 건 이상의 대용량 API 중계' },
  { sector: 'Manufacturing', client: '현대자동차', desc: '지능형 고객센터(AICC) 레거시 시스템 연동' },
  { sector: 'Public/Finance', client: '국민연금공단, 우리은행 등', desc: '검증된 안정성' },
  { sector: 'Public', client: '한국서부발전', desc: '대외 연계 트래픽 단일화 및 정부 표준 가이드 준수' },
  { sector: 'Public', client: '국민연금공단', desc: '차세대 지능형 플랫폼 오픈 API 통합 관리' },
]

export default function AxiPaaS() {
  return (
    <main className="axipaas-page">
      {/* 1. Hero — 흰 배경, 문구 강조 */}
      <section className="axipaas-hero">
        <div className="container axipaas-hero-inner">
          <p className="axipaas-hero-label">AX iPaaS</p>
          <h1
            className="axipaas-hero-title"
            dangerouslySetInnerHTML={{ __html: 'AX 시대를 위한 지능형 통합 플랫폼<br /><span class="axipaas-hero-title-accent">iPaaS</span>' }}
          />
          <p className="axipaas-hero-desc">
            No-Code Stream API & Kafka Event-Driven<br />
            성공적인 AI 혁신(AX)을 위한 초연결 하이브리드 통합 플랫폼
          </p>
        </div>
      </section>

      {/* 2. Why iPaaS? — ipaas-03, ipaas-02, ipaas-04 이미지 */}
      <section className="axipaas-why">
        <div className="container">
          <div className="axipaas-why-image-wrap">
            <img
              src={asset('assets/images/reference/ipaas/ipaas-03.png')}
              alt="iPaaS 통합 플랫폼"
              className="axipaas-why-image"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = asset('assets/images/reference/ipaas/ipaas-03.jpg')
              }}
            />
            <div className="axipaas-why-image-pair">
              <img
                src={asset('assets/images/reference/ipaas/ipaas-02.png')}
                alt="iPaaS 아키텍처"
                className="axipaas-why-image axipaas-why-image-02"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = asset('assets/images/reference/ipaas/ipaas-02.jpg')
                }}
              />
              <img
                src={asset('assets/images/reference/ipaas/ipaas-04.png')}
                alt="iPaaS 플랫폼"
                className="axipaas-why-image"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = asset('assets/images/reference/ipaas/ipaas-04.jpg')
                }}
              />
            </div>
            <img
              src={asset('assets/images/reference/ipaas/ipaas-05.png')}
              alt="iPaaS 플랫폼"
              className="axipaas-why-image axipaas-why-image-05"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = asset('assets/images/reference/ipaas/ipaas-05.jpg')
              }}
            />
          </div>
        </div>
      </section>

      {/* ipaas-01 이미지 — 구축 사례 위 */}
      <section className="axipaas-image-section">
        <div className="container">
          <div className="axipaas-image-wrap">
            <img
              src={asset('assets/images/reference/ipaas/ipaas-01.png')}
              alt="AX iPaaS 통합 플랫폼"
              className="axipaas-image-img"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = asset('assets/images/reference/ipaas/ipaas-01.jpg')
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. Success Stories */}
      <section className="axipaas-stories">
        <div className="container">
          <h2 className="axipaas-section-title">구축 사례</h2>
          <div className="axipaas-stories-grid">
            {successStories.map((s, i) => (
              <div key={i} className="axipaas-story-card">
                <span className="axipaas-story-sector">{s.sector}</span>
                <h4 className="axipaas-story-client">{s.client}</h4>
                <p className="axipaas-story-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
