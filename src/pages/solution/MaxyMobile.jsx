import { useState, useEffect, useRef } from 'react'
import { asset } from '../../utils/asset'
import { maxySlideImages } from './solutionData'
import './MaxyMobile.css'

export default function MaxyMobile() {
  const [sliderPosition, setSliderPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const processImageRef = useRef(null)
  const sliderRef = useRef(null)
  
  const solution = {
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
  }

  // MAXY Mobile 무한 스크롤 슬라이드
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setSliderPosition((prev) => {
          const itemWidth = 320 // 각 아이템 너비(280px) + gap(40px)
          const maxScroll = itemWidth * maxySlideImages.length
          const newPosition = prev + 0.5
          
          if (newPosition >= maxScroll) {
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
  }, [isPaused])

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

    if (processImageRef.current) {
      processImageRef.current.classList.remove('animate-in')
      observer.observe(processImageRef.current)
    }

    return () => {
      if (processImageRef.current) {
        observer.unobserve(processImageRef.current)
      }
    }
  }, [])

  return (
    <main>
      <section className="solution-page-section">
        <div className="container">
          {/* 소개 섹션 */}
          <div className="solution-intro-hero maxy-mobile-hero">
            <div className="solution-intro-hero-image maxy-mobile-image">
              <div className="solution-image-stack maxy-mobile-stack">
                <img src={asset('assets/images/maxymobile.png')} alt="MAXY Mobile" className="stack-image stack-1 stack-single" />
              </div>
            </div>
            <div className="solution-intro-hero-content maxy-mobile-content text-right">
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
            <div className="solution-features-grid maxy-mobile-features">
              {solution.features.map((feature, index) => (
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

            {/* 퓨처스와 프로세스 이미지 사이 배너 — 맥시프론트와 동일 스타일 */}
            <section
              className="maxy-mobile-banner"
              style={{
                backgroundImage: `url("${asset('assets/images/reference/maxy/solution-banner_bg01.jpg')}")`,
              }}
            >
              <div className="container maxy-mobile-banner-inner">
                <p className="maxy-mobile-banner-headline">안정적인 모바일서비스 환경이 필요한 기업들은</p>
                <p className="maxy-mobile-banner-headline">이미 MAXY를 사용하고 있습니다.</p>
                <p className="maxy-mobile-banner-desc">MAXY의 안정적인 모니터링 기술은 귀사의 모바일 앱 서비스에는 영향을 끼치지 않습니다.</p>
                <p className="maxy-mobile-banner-desc">안정적이고 다양한 모니터링 경험을 원하시면 지금 바로 MAXY를 검토하십시오.</p>
              </div>
            </section>

            <div 
              ref={processImageRef}
              className="solution-process-image maxy-mobile-process"
            >
              <img src={asset('assets/images/solution-process_img01.png')} alt="MAXY Mobile Process" />
            </div>
            
            {/* MAXY Mobile 로고 슬라이드 */}
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
          </div>
        </div>
      </section>
    </main>
  )
}

