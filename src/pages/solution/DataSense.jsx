import { useEffect, useRef } from 'react'
import { asset } from '../../utils/asset'
import './DataSense.css'

export default function DataSense() {
  const solution = {
    name: 'DATA Sence',
    heroTitle: '데이터 분석 및 인사이트 솔루션',
    heroDescription: 'DATA Sence',
    introTitle: '데이터, 이제 <span class="datasence-title-highlight">DATA Sense로</span><br />쉽고 스마트하게 활용하세요!',
    introSubtitle: '복잡하고 방대한 데이터, 어떻게 활용해야 할지 막막하셨나요?<br />Data Sense는 누구나 데이터를 쉽게 이해하고<br />가치 있는 인사이트를 얻을 수 있도록 도와주는<br />올인원 데이터 분석 솔루션입니다.',
    introDetail: '흩어져 있는 데이터를 한곳에 모아 분석하고, 이해하기 쉬운 형태로 시각화하여 보여주는 지능형 플랫폼입니다.<br />마치 데이터 전문가가 옆에서 분석해주는 것처럼, 비즈니스에 필요한 핵심 정보를 빠르고 정확하게 제공합니다.',
    features: [
      {
        title: '쉽고 직관적인 분석',
        description: '복잡한 코드나 쿼리 없이 클릭 몇 번과 드래그 앤 드롭 방식의 직관적인 인터페이스만으로, 코딩 지식이 없어도 누구나 웹 서핑하듯 실시간으로 데이터를 탐색하고 분석할 수 있습니다.',
        items: [],
      },
      {
        title: '똑똑한 AI 인사이트',
        description: '인공지능이 데이터 속 숨겨진 패턴과 트렌드를 자동으로 발견하고, 중요한 변화를 빠르게 감지하며 개인화된 인사이트와 예측 분석을 제공합니다.',
        items: [],
      },
      {
        title: '자동화된 리포팅',
        description: '인공지능이 데이터 속 숨겨진 패턴과 트렌드를 자동으로 발견하고, 중요한 변화를 빠르게 감지하며 예측 분석과 트렌드 확인, 개인화된 인사이트까지 제공하여 누구나 데이터를 스마트하게 이해하고 활용할 수 있습니다.',
        items: [],
      },
    ],
    suitableFor: [
      {
        title: '데이터 기반의 의사결정',
        desc: '데이터 기반의 합리적인 의사결정을 내리고 싶은 경영진 및 관리자',
        icon: 'chart',
      },
      {
        title: '업무 효율성 증대',
        desc: '반복적인 데이터 취합 및 보고서 작성 업무를 줄이고 핵심 업무에 집중하고 싶은 실무자',
        icon: 'report',
      },
      {
        title: '가치 발견',
        desc: '데이터 분석 전문 지식은 없지만 데이터에서 가치를 발견하고 싶은 모든 분',
        icon: 'discover',
      },
    ],
    senseTargetTypes: [
      {
        typeLabel: 'FEATURE 1',
        title: '쉽고 직관적인 분석',
        icon: '📊',
        colorTheme: 'blue',
        quote: '복잡한 코드 없이, 클릭 몇 번으로 데이터를 탐색하세요',
        targetItems: [
          '복잡한 쿼리와 도구 때문에 데이터 분석이 어렵다',
          '전문가가 아니면 인사이트를 얻기 힘들다',
        ],
        solutionItems: [
          '클릭·드래그만으로 직관적인 데이터 분석',
          '실시간 데이터 탐색 및 시각화',
        ],
        value: '비전문가도 전문가처럼 데이터 활용',
      },
      {
        typeLabel: 'FEATURE 2',
        title: '똑똑한 AI 인사이트',
        icon: '🤖',
        colorTheme: 'purple',
        quote: 'AI가 숨겨진 패턴과 트렌드를 자동으로 발견합니다',
        targetItems: [
          '데이터 속 패턴을 찾기 어렵다',
          '중요한 변화를 놓치기 쉽다',
        ],
        solutionItems: [
          'AI가 패턴·트렌드 자동 발견',
          '개인화된 인사이트와 예측 분석',
        ],
        value: '숨은 인사이트 발굴',
      },
      {
        typeLabel: 'FEATURE 3',
        title: '자동화된 리포팅',
        icon: '📋',
        colorTheme: 'green',
        quote: '반복 보고는 줄이고, 핵심 업무에 집중하세요',
        targetItems: [
          '리포팅에 시간이 많이 든다',
          '반복적인 데이터 취합이 부담이다',
        ],
        solutionItems: [
          '자동화된 리포팅 및 대시보드',
          '핵심 업무에 집중',
        ],
        value: '업무 효율 극대화',
      },
    ],
    benefits: [
      { title: '업무 효율성 증대', desc: '반복적인 수작업 프로세스를 지능형 자동화로 전환하여 업무 시간을 단축하고 핵심 전략에 집중하게 합니다.' },
      { title: '비용 절감', desc: '전문 인력이나 고가의 솔루션 없이도 수준 높은 분석이 가능하여 기업의 데이터 운영 비용을 획기적으로 낮춥니다.' },
      { title: '신속한 의사결정', desc: '실시간 통합 시각화 데이터를 제공하여 시장 변화에 즉각 대응하고, 데이터 기반의 정밀한 판단을 지원합니다.' },
      { title: '새로운 기회 발견', desc: '데이터 속 숨겨진 패턴을 포착하여 비즈니스 확장을 위한 최적의 인사이트와 성장 동력을 발굴합니다.' },
    ],
    ctaTitle: '지금 바로 Data Sense를 경험해보세요!<br />데이터가 보여주는 새로운 세상을 만날 준비가 되셨나요?',
    ctaDesc: '무료 체험을 통해 Data Sense의 강력한 기능을 직접 확인해보세요.<br />데이터에서 가치를 발견하고 비즈니스를 성장시키는 여정을 시작하세요.',
  }

  return (
    <main>
      <section className="solution-page-section">
        <div className="container">
          {/* DATA Sence 특별 레이아웃 */}
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
                dangerouslySetInnerHTML={{ __html: solution.introTitle }}
              />
              <p 
                className="solution-intro-desc"
                dangerouslySetInnerHTML={{ __html: solution.introSubtitle }}
              />
            </div>
          </div>

          {/* Data Sense란? 섹션 - 이미지 바로 아래 */}
          {solution.introDetail && (
            <div className="datasense-intro-detail">
              <h3 className="datasense-section-title">Data Sense란?</h3>
              <p 
                className="solution-intro-desc"
                dangerouslySetInnerHTML={{ __html: solution.introDetail }}
              />
            </div>
          )}

          {/* FEATURE 섹션 — 사업분야 "이런 고민" 카드 스타일 (배경 이미지 없음) */}
          <div className="solution-features">
            <div className="datasense-target-section">
              <h2 className="datasense-target-section-title">Data Sense, 왜 특별할까요?</h2>
              <p className="datasense-target-section-lead">이런 고민, 다올피플이 해결해 드립니다.</p>
              <div className="datasense-target-types-grid">
                {solution.senseTargetTypes.map((item, index) => (
                  <article key={index} className={`datasense-target-type-card datasense-target-type-card--${item.colorTheme}`}>
                    <div className="datasense-target-type-icon">{item.icon}</div>
                    <span className="datasense-target-type-label">{item.typeLabel}</span>
                    <h3 className="datasense-target-type-title">{item.title}</h3>
                    <p className="datasense-target-type-quote">"{item.quote}"</p>
                    <p className="datasense-target-type-problem-label">이런 고민 있으신가요?</p>
                    <div className="datasense-target-type-problem-box">
                      {item.targetItems.map((t, i) => (
                        <span key={i}>{t}</span>
                      ))}
                    </div>
                    <p className="datasense-target-type-solution-label">Data Sense 솔루션</p>
                    <ul className="datasense-target-type-solution-list">
                      {item.solutionItems.map((s, i) => (
                        <li key={i}><span className="datasense-target-type-check">✓</span> {s}</li>
                      ))}
                    </ul>
                    <div className="datasense-target-type-value-badge">{item.value}</div>
                  </article>
                ))}
              </div>
            </div>

            {/* Data Sense, 왜 특별할까요? 카드 밑 이미지 */}
            <div className="datasense-features-image">
              <img
                src={asset('assets/images/reference/datasence/data-9.png')}
                alt="Data Sense 특별한 기능"
                className="datasense-features-image-img"
              />
            </div>

            {/* 추천 대상 섹션 — 3열 카드 (아이콘·제목·설명) */}
            {solution.suitableFor && solution.suitableFor.length > 0 && (
              <div className="datasense-suitable">
                <h3 className="datasense-section-title">이런 분들에게 추천합니다!</h3>
                <div className="datasense-suitable-grid">
                  {solution.suitableFor.map((item, index) => (
                    <article key={index} className="datasense-suitable-card">
                      <div className="datasense-suitable-card-icon">
                        {item.icon === 'chart' && (
                          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <rect x="6" y="26" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <rect x="19" y="18" width="10" height="22" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <rect x="32" y="10" width="10" height="30" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="40" cy="40" r="5" stroke="currentColor" strokeWidth="2"/>
                            <path d="M38 38l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                        {item.icon === 'report' && (
                          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M10 6h28v36H10V6z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M16 14h16M16 22h12M16 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="38" cy="38" r="6" stroke="currentColor" strokeWidth="2"/>
                            <path d="M36 36l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="34" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        )}
                        {item.icon === 'discover' && (
                          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <circle cx="24" cy="22" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M30 28l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M18 26l4-4 3 2 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <h4 className="datasense-suitable-card-title">{item.title}</h4>
                      <p className="datasense-suitable-card-desc">{item.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* 도입 효과 섹션 */}
            {solution.benefits && (
              <div className="datasense-benefits">
                <h3 className="datasense-section-title">Data Sense 도입 효과</h3>
                <div className="datasense-benefits-grid">
                  {solution.benefits.map((benefit, index) => (
                    <article key={index} className="datasense-benefit-card">
                      <div className="datasense-benefit-card-content">
                        <h4 className="datasense-benefit-title">{benefit.title}</h4>
                        <p className="datasense-benefit-desc">{benefit.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA 섹션 - DATA Sence — 배경: public/assets/images/reference/datasence/data-03.png 또는 data-3.png */}
      <section className="solution-cta-section datasence-cta-section">
        <div
          className="solution-cta datasence-cta"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25)), url("${asset('assets/images/reference/datasence/data-3.png')}")`,
          }}
        >
          <div className="container">
            <h2 
              className="solution-cta-title"
              dangerouslySetInnerHTML={{ __html: solution.ctaTitle }}
            />
            <p 
              className="solution-cta-desc"
              dangerouslySetInnerHTML={{ __html: solution.ctaDesc }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

