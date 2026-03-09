import { useEffect, useRef } from 'react'
import { asset } from '../../utils/asset'
import './MaxyFront.css'

export default function MaxyFront() {
  const frontProcessImageRef = useRef(null)
  
  const solution = {
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
  }

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

    if (frontProcessImageRef.current) {
      frontProcessImageRef.current.classList.remove('animate-in')
      observer.observe(frontProcessImageRef.current)
    }

    return () => {
      if (frontProcessImageRef.current) {
        observer.unobserve(frontProcessImageRef.current)
      }
    }
  }, [])

  return (
    <main>
      <section className="solution-page-section">
        <div className="container">
          {/* 소개 섹션 - 이미지와 텍스트 좌우 배치 */}
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
                {solution.introTitle}
              </h2>
              <h3 className="solution-intro-subtitle-main">
                {solution.heroTitle}
              </h3>
              <h4 className="solution-intro-name">
                {solution.heroDescription}
              </h4>
              <p 
                className="solution-intro-desc"
                dangerouslySetInnerHTML={{ __html: solution.introSubtitle }}
              />
            </div>
          </div>

          {/* FEATURE 섹션들 */}
          <div className="solution-features">
            <div className="solution-features-grid maxy-front-features">
              {solution.features.map((feature, index) => (
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

            {/* 배너 — 퓨처스와 프로세스 이미지 사이, 사업분야 스타일 */}
            <section
              className="maxy-front-banner"
              style={{
                backgroundImage: `url("${asset('assets/images/reference/maxy/solution-banner_bg01.jpg')}")`,
              }}
            >
              <div className="container maxy-front-banner-inner">
                <p className="maxy-front-banner-headline">측정할 수 없으면 개선할 수 없습니다.</p>
                <p className="maxy-front-banner-headline">다양한 웹 환경의 성능을 측정하고 고객 한사람의 불편도 추적할 수 있습니다.</p>
                <p className="maxy-front-banner-desc">기업의 핵심 서비스 성능이 개별 고객에게 미치는 영향력은 결국 브랜드 이미지와 직결됩니다.</p>
                <p className="maxy-front-banner-desc">전 구간 세션리플레이와 Core Web Vitals 기준의 고객 체감 성능 만족도 측정을 통해 안정적인 서비스 성능을 유지하십시오.</p>
              </div>
            </section>

            <div 
              ref={frontProcessImageRef}
              className="solution-process-image maxy-front-process"
            >
              <img src={asset('assets/images/solution-process_img05.png')} alt="MAXY Front Process" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

