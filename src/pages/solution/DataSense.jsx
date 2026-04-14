import { asset } from '../../utils/asset'
import './DataSense.css'

export default function DataSense() {
  const solution = {
    name: 'DATA Sence',
    heroTitle: '데이터 분석 및 인사이트 솔루션',
    heroDescription: 'DATA Sence',
    introTitle: '데이터, 이제 <span class="datasence-title-highlight">DATA Sense로</span><br />쉽고 스마트하게 활용하세요!',
    introSubtitle:
      '복잡한 데이터 활용의 막막함,<br />DATA Sense의 시각화 기술로 해결하세요.<br />데이터의 논리적 연결을 통해 누구나 쉽게 신뢰할 수 있는 <span class="datasence-intro-subtitle-nobreak">비즈니스 인사이트</span>를 완성합니다.',
    introDetail:
      '단순히 데이터를 쌓는 것을 넘어, 데이터 프로파일링부터<br />비즈니스 가치 사슬(Value Chain)까지 통합 관리하는 지능형 플랫폼입니다.<br /><br />"데이터는 비즈니스의 언어"라는 철학 아래,<br />복잡한 데이터 구조를 시각화하고 품질을 자동 관리하여<br />신뢰할 수 있는 의사결정 기반을 제공합니다.',
    suitableFor: [
      {
        title: '데이터 자산화가 필요한 경영진 및 CDO',
        coreTarget: '데이터는 많은데, 신뢰할 수 있는 지표가 부족하다면?',
        detailHtml:
          '전사 데이터의 품질 상태를 정량적으로 파악하고, 비즈니스 밸류 체인과 연계된 <strong class="datasense-suitable-keyword">데이터 중심의 의사결정</strong> 체계를 구축하고 싶은 관리자',
      },
      {
        title: '시스템 통합 및 이관을 앞둔 IT 실무자',
        coreTarget: '차세대 프로젝트나 DB 통합 시 데이터 정제가 고민이라면?',
        detailHtml:
          '수작업 데이터 분석 시간을 줄이고, 한글 깨짐·코드 불일치 등 기술 결함을 사전에 탐지하여 <strong class="datasense-suitable-keyword">프로젝트 리스크를 최소화</strong>하고 싶은 실무자',
      },
      {
        title: '거버넌스 체계를 정립하려는 아키텍트',
        coreTarget: '현행 ERD가 없고 데이터 계보 파악이 막막하다면?',
        detailHtml:
          '데이터 값 기반의 <strong class="datasense-suitable-keyword">논리 관계를 자동으로 시각화</strong>하고, 업무 프로세스와 시스템 간의 영향도를 한눈에 관리하고 싶은 데이터 아키텍트',
      },
    ],
    senseTargetTypes: [
      {
        typeLabel: 'FEATURE 1',
        title: '지능형 데이터 프로파일링',
        colorTheme: 'blue',
        quote: '눈에 보이지 않는 기술적 결함까지 AI가 전수 조사합니다.',
        targetItems: [
          '데이터 이관 후 한글 깨짐이나 인코딩 오류가 반복됨',
          '결측치, 중복 데이터 파악 등 수작업 분석에 과도한 시간 소요',
        ],
        solutionItems: [
          '유니코드, 미완성 한글 등 정밀 기술 결함 자동 탐지',
          '속성별 유일성·무결성 등 품질 점수(DQ Scoring) 제공',
        ],
        value: '데이터 정제 비용 30% 절감',
      },
      {
        typeLabel: 'FEATURE 2',
        title: '논리적 관계 분석 (Dynamic ERD)',
        colorTheme: 'purple',
        quote: '컬럼명이 달라도 실제 데이터 패턴을 분석해 연결합니다.',
        targetItems: [
          'ERD가 현행화되지 않아 데이터 간 연관 관계 파악이 불가능함',
          '특정 테이블 변경 시 하위 시스템에 미칠 영향도 분석이 어려움',
        ],
        solutionItems: [
          '데이터 값(Value) 기반의 논리 다이어그램 자동 생성',
          '참조코드 비교를 통한 시스템 간 데이터 일관성 검증',
        ],
        value: '영향도 분석 및 데이터 계보 관리 최적화',
      },
      {
        typeLabel: 'FEATURE 3',
        title: '비즈니스 밸류 체인 매핑',
        colorTheme: 'green',
        quote: 'IT 시스템 아키텍처를 비즈니스 언어로 시각화합니다.',
        targetItems: [
          '복잡한 DB 구조가 실제 어떤 비즈니스 프로세스에 쓰이는지 모름',
          '데이터 분석 결과와 실제 비즈니스 목표 간의 간극 발생',
        ],
        solutionItems: [
          '산업별 Value Chain Activity와 마스터 데이터 간 관계 매핑',
          '비즈니스 관점의 상위 데이터 아키텍처 진단 및 정립',
        ],
        value: '비즈니스 중심 데이터 거버넌스 완성',
      },
    ],
    benefits: [
      {
        title: '분석 및 정제 비용 획기적 절감',
        desc:
          '수작업에 의존하던 데이터 프로파일링과 결함 탐지를 지능형 알고리즘으로 자동화하여, 데이터 분석 시간을 50% 이상 단축하고 운영 비용을 최소화합니다.',
      },
      {
        title: '데이터 기반 의사결정의 신뢰도 확보',
        desc:
          '한글 깨짐, 중복, 코드 불일치가 제거된 고품질 정제 데이터를 제공함으로써 AI 모델 및 BI 리포트의 정확도와 의사결정의 신뢰성을 극대화합니다.',
      },
      {
        title: 'IT 프로젝트 리스크 선제적 차단',
        desc:
          '시스템 통합 및 이관 시 발생할 수 있는 데이터 정합성 문제를 사전에 파악하여, 재작업(Rework) 비용을 방지하고 프로젝트 성공률을 높입니다.',
      },
      {
        title: ' 데이터 중심의 거버넌스 체계 정립',
        desc:
          '비즈니스 가치 사슬과 데이터 아키텍처를 유기적으로 연결하여, 데이터가 비즈니스 어디에 기여하는지 한눈에 파악할 수 있는 전사적 가시성을 제공합니다.',
      },
    ],
    ctaTitle: '지금 바로 Data Sense를 경험해보세요!<br />데이터가 보여주는 새로운 세상을 만날 준비가 되셨나요?',
    ctaDesc: 'Data Sense는 기업의 복잡한 데이터를 자산으로 바꾸는 가장 확실한 도구입니다.<br />지금 바로 전문가와 상담하여 귀사에 최적화된 데이터 거버넌스 체계를 확인하십시오.',
  }

  return (
    <main className="datasense-page">
      <section className="solution-page-section">
        <div className="container datasense-container">
          {/* DATA Sence 특별 레이아웃 */}
          <div className="solution-intro-hero datasence-hero">
            <div className="solution-intro-hero-image datasence-image">
              <img 
                src={asset('assets/images/reference/datasence/Gemini_Generated_Image_123n95123n95123n.png')} 
                alt="DATA Sence" 
                className="datasence-main-image"
              />
            </div>
            <div className="solution-intro-hero-content datasence-content datasence-content--center">
              <h2 
                className="solution-intro-title"
                dangerouslySetInnerHTML={{ __html: solution.introTitle }}
              />
              <p 
                className="solution-intro-desc datasence-intro-subtitle"
                dangerouslySetInnerHTML={{ __html: solution.introSubtitle }}
              />
            </div>
          </div>

          {/* Data Sense란? 섹션 - 이미지 바로 아래 */}
          {solution.introDetail && (
            <div className="datasense-intro-detail">
              <h3 className="datasense-section-title">Data Sense, 데이터의 흐름에서 비즈니스의 가치를 찾다</h3>
              <p 
                className="solution-intro-desc datasense-intro-detail-body"
                dangerouslySetInnerHTML={{ __html: solution.introDetail }}
              />
            </div>
          )}

          {/* FEATURE 섹션 — 사업분야 "이런 고민" 카드 스타일 (배경 이미지 없음) */}
          <div className="solution-features">
            <div className="datasense-target-section">
              <h2 className="datasense-target-section-title">Data Sense, 왜 특별할까요?</h2>
              <p className="datasense-target-section-lead">"단순한 시각화를 넘어, 데이터의 정합성과 비즈니스 연결성을 보장합니다."</p>
              <div className="datasense-target-types-grid">
                {solution.senseTargetTypes.map((item, index) => (
                  <article key={index} className={`datasense-target-type-card datasense-target-type-card--${item.colorTheme}`}>
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

            {/* Data Sense 핵심 역량 — ERD 배경 위에 카드 (파랑/보라/초록 톤) */}
            <div
              className="datasense-main-features-wrap"
              style={{ '--erd-bg-url': `url("${asset('assets/images/reference/datasence/data-9.png')}")` }}
            >
              <div className="datasense-main-features-bg" aria-hidden="true" />
              <div className="datasense-main-features">
                <div className="datasense-main-features-divider" />
                <h3 className="datasense-main-features-title">Data Sense 핵심 역량</h3>
                <p className="datasense-main-features-lead">
                  단순한 데이터 수집을 넘어, 비즈니스 가치를 창출하는 3대 핵심 기술
                </p>
                <div className="datasense-main-features-grid">
                  <article className="datasense-main-feature-card datasense-main-feature-card--blue">
                    <h4 className="datasense-main-feature-card-title">지능형 데이터 프로파일링</h4>
                    <ul className="datasense-main-feature-card-list">
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>결측치 · 유니크 값 · 형식 준수율 자동 산출</span>
                      </li>
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>
                          유니코드 및 미완성 한글 등{' '}
                          <strong className="datasense-main-feature-card-keyword">기술 결함 탐지</strong>
                        </span>
                      </li>
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>데이터 값 기반의 심층 통계 및 품질 리포트 제공</span>
                      </li>
                    </ul>
                  </article>
                  <article className="datasense-main-feature-card datasense-main-feature-card--purple">
                    <h4 className="datasense-main-feature-card-title">데이터 관계 시각화</h4>
                    <ul className="datasense-main-feature-card-list">
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>운영 시스템 기반 실시간 ERD 생성 및 확인</span>
                      </li>
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>
                          컬럼명이 달라도{' '}
                          <strong className="datasense-main-feature-card-keyword">값 중심의 논리 다이어그램</strong>
                          {' '}작성
                        </span>
                      </li>
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>참조코드 비교를 통한 시스템 간 데이터 정합성 검증</span>
                      </li>
                    </ul>
                  </article>
                  <article className="datasense-main-feature-card datasense-main-feature-card--green">
                    <h4 className="datasense-main-feature-card-title">비즈니스 가치 사슬 매핑</h4>
                    <ul className="datasense-main-feature-card-list">
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>
                          산업별 주요 및 지원 활동(Value Chain) 프로세스 정의
                        </span>
                      </li>
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>
                          업무-시스템-파일 간 상관관계 매핑 및{' '}
                          <strong className="datasense-main-feature-card-keyword">영향도 분석</strong>
                        </span>
                      </li>
                      <li>
                        <span className="datasense-main-feature-card-li-check" aria-hidden>✓</span>
                        <span>데이터 기반의 상위 전사 아키텍처(EA) 정립 지원</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </div>

            {/* 추천 대상 섹션 — 질문형 문구 + 본문 + 키워드 강조 (아이콘 없음) */}
            {solution.suitableFor && solution.suitableFor.length > 0 && (
              <div className="datasense-suitable">
                <h3 className="datasense-section-title">"신뢰할 수 있는 데이터 체계, 이런 고민에서 시작됩니다"</h3>
                <div className="datasense-suitable-grid">
                  {solution.suitableFor.map((item, index) => (
                    <article key={index} className="datasense-suitable-card">
                      <h4 className="datasense-suitable-card-title">{item.title}</h4>
                      <p className="datasense-suitable-card-hook">
                        <span className="datasense-suitable-card-hook-quote">“{item.coreTarget}”</span>
                      </p>
                      <div className="datasense-suitable-card-detail">
                        <p
                          className="datasense-suitable-card-desc"
                          dangerouslySetInnerHTML={{ __html: item.detailHtml }}
                        />
                      </div>
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
          <div className="container datasense-container">
            <h2 
              className="solution-cta-title"
              dangerouslySetInnerHTML={{ __html: solution.ctaTitle }}
            />
            <p 
              className="solution-cta-desc"
              dangerouslySetInnerHTML={{ __html: solution.ctaDesc }}
            />
            <hr className="datasence-cta-contact-rule" aria-hidden="true" />
            <div className="datasence-cta-contact">
              <div className="datasence-cta-contact-label">[도입 및 기술 컨설팅 문의]</div>
              <div className="datasence-cta-contact-line">
                대표컨설턴트 : 강신길 부사장(sgkang@dopp.co.kr) / 연구소장 이우석(wslee@dopp.co.kr)
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

