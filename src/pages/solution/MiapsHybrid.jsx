import { useState, useEffect, useRef } from 'react'
import { asset } from '../../utils/asset'
import { miapsSlideImages } from './solutionData'
import './MiapsHybrid.css'

export default function MiapsHybrid() {
  const [miapsSliderPosition, setMiapsSliderPosition] = useState(0)
  const [isMiapsPaused, setIsMiapsPaused] = useState(false)
  const hybridProcessImageRef = useRef(null)
  const miapsSliderRef = useRef(null)
  
  const solution = {
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
  }

  // MiAPS Hybrid 무한 스크롤 슬라이드
  useEffect(() => {
    if (!isMiapsPaused) {
      const interval = setInterval(() => {
        setMiapsSliderPosition((prev) => {
          const itemWidth = 320
          const maxScroll = itemWidth * miapsSlideImages.length
          const newPosition = prev + 1
          
          if (newPosition >= maxScroll) {
            setTimeout(() => {
              setMiapsSliderPosition(0)
            }, 0)
            return 0
          }
          return newPosition
        })
      }, 16)
      return () => clearInterval(interval)
    }
  }, [isMiapsPaused])

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

    if (hybridProcessImageRef.current) {
      hybridProcessImageRef.current.classList.remove('animate-in')
      observer.observe(hybridProcessImageRef.current)
    }

    return () => {
      if (hybridProcessImageRef.current) {
        observer.unobserve(hybridProcessImageRef.current)
      }
    }
  }, [])

  return (
    <main>
      <section className="solution-page-section">
        <div className="container">
          {/* MiAPS Hybrid 특별 레이아웃 */}
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

          {/* FEATURE 섹션들 */}
          <div className="solution-features">
            <div className="solution-features-grid miap-hybrid-features">
              {solution.features.map((feature, index) => (
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
          </div>
        </div>
      </section>

      {/* 퓨처스와 프로세스 이미지 사이 배너 — 다른 솔루션 페이지와 동일 스타일 */}
      <section
        className="miap-hybrid-banner"
        style={{
          backgroundImage: `url("${asset('assets/images/reference/maxy/solution-banner_bg01.jpg')}")`,
        }}
      >
        <div className="container miap-hybrid-banner-inner">
          <p className="miap-hybrid-banner-headline">모바일서비스를 안정적으로 운영하는 기업들은</p>
          <p className="miap-hybrid-banner-headline">이미 MiAPS Hybrid를 사용하고 있습니다.</p>
          <p className="miap-hybrid-banner-desc">모바일 앱 개발, 배포, 운영, 유지보수 등 앱 Lifecycle의 전 과정에서 모바일 TCO를 대폭 절감할 수 있습니다. 기존 IT인력 (웹 개발자, 초급 개발자) 활용으로 전 사 IT역량을 확대할 수 있습니다. 모바일 서비스를 고려하신다면 MiAPS Hybrid를 도입하십시오.</p>
        </div>
      </section>
      <div className="container">
        <div 
          ref={hybridProcessImageRef}
          className="solution-process-image miap-hybrid-process"
        >
          <img src={asset('assets/images/solution-process_img02.png')} alt="MiAPS Hybrid Process" />
        </div>
      </div>
      
      {/* MiAPS Hybrid 로고 슬라이드 */}
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
    </main>
  )
}

