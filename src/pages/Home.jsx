import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../utils/asset'
import { newsItems, solutionCards, whyDaolItems } from '../data/content'

export default function Home() {
  const whyDaolRef = useRef(null)
  const [whyDaolVisible, setWhyDaolVisible] = useState(false)

  useEffect(() => {
    const el = whyDaolRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWhyDaolVisible(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  const heroStyle = {
    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.1)), url("${asset('assets/images/dopp-main-6.jpg')}")`,
  }
  const ctaStyle = {
    backgroundImage: `linear-gradient(120deg, rgba(15, 23, 42, 0.55), rgba(37, 99, 235, 0.35)), url("${asset('assets/images/Gemini_Generated_Image_szsq4bszsq4bszsq.png')}")`,
  }

  const latestNewsItems = [...newsItems]
    .sort((a, b) => {
      const toDate = (value) => new Date(value.replace(/\s/g, '').replace(/\./g, '-'))
      return toDate(b.date) - toDate(a.date)
    })
    .slice(0, 4)

  return (
    <main>
      <section className="hero" id="hero" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <p className="hero-service">AX로 진화하는 IT 컨설팅 · 시스템 구축 · 운영</p>
            <p className="hero-subtitle">비즈니스 전반을 책임지는</p>
            <h1 className="hero-headline">통합 IT 서비스 기업, 다올피플</h1>
          </div>
        </div>
      </section>

      <section className="section solution-section">
        <div className="container">
          <div className="section-title">AX기반 고객 가치 중심의 IT 서비스</div>
          <div className="section-desc">
            <strong>가장 현실적인 AX솔루션.</strong>
            <br />
            데이터를 가치로, 기술을 성과로.
            <br />
            전략부터 운영까지, 완벽한 AX전환.
            <br />
            다올피플과 만드는 지능형 비즈니스의 시작
          </div>
          <div className="grid cols-3">
            {solutionCards.map((card) => (
              <div key={card.title} className="card">
                <img className="card-media" src={asset(card.image)} alt={card.title} />
                <h3>{card.title}</h3>
                {Array.isArray(card.text) ? (
                  card.text.map((line, index) => <p key={index}>{line}</p>)
                ) : (
                  <p>{card.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={whyDaolRef} className={`section alt why-daol-section${whyDaolVisible ? ' is-visible' : ''}`}>
        <div className="container">
          <div className="section-title">다올피플이 선택받는 이유</div>
          <div className="why-daol-grid">
            {whyDaolItems.map((item, index) => (
              <div key={index} className="why-daol-item">
                <div className="why-daol-icon">{item.icon}</div>
                <h3 className="why-daol-title">{item.title}</h3>
                <div className="why-daol-description">
                  {item.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="partner" className="section home-news">
        <div className="container">
          <div className="section-title">다올소식</div>
          <div className="section-desc">다올피플의 주요 소식과 다양한 활동, 새로운 변화를 전해드립니다.</div>
          <div className="news-card-grid">
            {latestNewsItems.map((item) => (
              <a
                key={item.url}
                className="news-card"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="news-card-tag">{item.tag}</span>
                <span className="news-card-title">{item.title}</span>
                <span className="news-card-date">{item.date}</span>
              </a>
            ))}
          </div>
          <Link className="news-more" to="/news">다올소식 전체보기 →</Link>
        </div>
      </section>

      <section className="cta-section" style={ctaStyle}>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">다올피플과 함께 AX 기반의 스마트한 비즈니스 경험을 완성하세요.</h2>
            <p className="cta-desc">컨설팅부터 시스템 통합, 유지보수까지 비즈니스에 필요한 모든 IT를 제공합니다.</p>
            <Link className="btn is-light" to="/contact">
              문의하기 바로가기
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

