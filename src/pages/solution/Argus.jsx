import './Argus.css'

export default function Argus() {
  const solution = {
    name: 'ARGUS',
    heroTitleLine1: '기업용 AX의 완성',
    heroTitleLine2: 'ARGUS AI Hub Platform',
    heroTagline: '복잡한 업무 프로세스를 이해하는<br />지능형 AI 솔루션으로 귀사의 진정한 AX 전환을 실현하십시오.',
    introDetail: 'ARGUS는 대량의 문서 분석과 복잡한 데이터 처리에 특화된 기업 맞춤형 AI 허브 플랫폼입니다. 기존 생성형 AI의 한계인 \'환각 현상\'을 제거하고, 독보적인 하이브리드 보안 기술을 더해 비즈니스 현장에 즉시 투입 가능한 솔루션을 제공합니다.',
    /* 핵심 가치 3카드 — DataSense "왜 특별할까요?" 동일 레이아웃 */
    coreValueCards: [
      {
        icon: '🛡️',
        typeLabel: 'FEATURE 1',
        title: '환각 제로 & 군사급 보안',
        quote: '생성형 AI의 불안함을 완벽한 신뢰로 바꿉니다.',
        targetItems: ['AI 답변의 신뢰도를 믿기 어렵다 (환각 현상)', '기업 내부 정보 유출이 걱정된다'],
        solutionLabel: 'ARGUS 엔진 솔루션',
        solutionItems: ['3-AI 교차 검증으로 환각 원천 차단', '군사 수준 보안 체계 (TLS 1.3 + AES-256)'],
        value: '신뢰할 수 있는 비즈니스 AI',
        colorTheme: 'blue',
      },
      {
        icon: '⚖️',
        typeLabel: 'FEATURE 2',
        title: '스마트 하이브리드 전략',
        quote: '보안과 성능, 비용의 최적의 밸런스를 제공합니다.',
        targetItems: ['AI 도입 및 운영 비용이 부담스럽다', '성능을 좇으면 보안이, 보안을 좇으면 성능이 아쉽다'],
        solutionLabel: 'ARGUS 하이브리드 솔루션',
        solutionItems: ['스마트 라우터로 Private/Public AI 자동 배분', '타사 대비 TCO(총소유비용) 40% 절감'],
        value: '비용 효율적인 AI 운영 완성',
        colorTheme: 'purple',
      },
      {
        icon: '👨‍💻',
        typeLabel: 'FEATURE 3',
        title: '엔터프라이즈 AX의 완성',
        quote: '복잡한 업무를 스스로 처리하는 AI 직원을 채용하세요.',
        targetItems: ['대량의 문서와 복잡한 데이터 분석이 어렵다', 'AX(AI 전환)를 어디서부터 시작할지 모르겠다'],
        solutionLabel: 'ARGUS AX 솔루션',
        solutionItems: ['엔지니어링 도면 및 전문 문서 완벽 분석', 'HITL(인간 개입) 시스템으로 최종 의사결정 보조'],
        value: '성공적인 기업 AX 가속화',
        colorTheme: 'green',
      },
    ],
    hybrid: {
      title: '최적의 밸런스: 스마트 하이브리드(Hybrid) 전략',
      intro: '보안과 성능, 비용의 균형을 위해 ARGUS만의 이원화 운영 방식을 채택했습니다.',
      items: [
        { title: '스마트 라우터(Smart Router)', desc: '질문의 성격에 따라 민감 데이터는 내부 Private(보안) 엔진으로, 고난도 추론은 외부 Public(성능) 엔진으로 자동 배분합니다.' },
        { title: 'TCO 40% 절감', desc: '상용 API 의존도를 낮춰 도입 비용과 운영 비용을 타사 대비 획기적으로 낮췄습니다.' },
        { title: '벤더 종속성 탈피 (Lock-in Free)', desc: '특정 플랫폼에 얽매이지 않고 규제 환경에 따라 유연하게 대응할 수 있어 리스크를 분산합니다.' },
      ],
    },
    useCases: [
      { title: '엔지니어링/제조', desc: '복잡한 도면 및 설계 문서 분석 서비스' },
      { title: '전문직/금융', desc: '법률, 금융, 바이오 분야의 대량 문서 분석 및 대응 전략 수립' },
      { title: '경영 전략', desc: '기업의 해외 시장 진출 전략 수립 및 마케팅 실행 계획 분석' },
      { title: '기업 AX 전환', desc: '전사적 데이터 사전 정비부터 지능형 업무 환경 구축까지' },
    ],
    architecture: {
      title: '도입 및 운영 방식',
      lead: '기업의 규모와 보안 요구 수준에 따라 최적의 인프라를 제공합니다.',
      items: [
        { title: '전사 도입형', desc: 'GPU 기반의 sLLM 서버 구축을 통한 전사적 활용' },
        { title: '단위 업무형', desc: '고성능 장비(Mac Pro급)를 활용해 개인 PC처럼 독립적으로 사용' },
        { title: '즉각적인 도입', desc: '복잡한 과정 없이 1~2일 내 설치 및 즉시 사용 가능' },
      ],
    },
    comparison: {
      title: '플랫폼 특성 비교 (Summary)',
      columns: ['비교 항목', 'WAHK ARGUS ENGINE', '일반 생성형 AI', 'AI Agent (기본형)'],
      rows: [
        { label: '신뢰도', argus: '3-AI 상호 교차 검증', general: '환각 발생 가능성 높음', agent: '추론 검증 미비' },
        { label: '보안', argus: '폐쇄형/개방형 연동', general: '개방형 (유출 위험)', agent: '폐쇄형 위주 (성능 한계)' },
        { label: '비용', argus: 'TCO 40% 절감', general: '사용량 비례 고비용', agent: '구축 비용 부담' },
        { label: '의사결정', argus: 'HITL (인간 개입 체계)', general: '블랙박스형 답변', agent: '사후 통제 미흡' },
      ],
    },
    ctaTitle: '기업용 AI, ARGUS로 완성하세요.',
    ctaDesc: '환각은 지우고 보안은 높였습니다. 지금 바로 현장에 투입되어 비즈니스 성장을 가속하는 맞춤형 AI를 만나보세요.',
  }

  return (
    <main>
      <section className="solution-page-section argus-page">
        <div className="container">
          {/* Hero — 이미지 영역 없음, 문구만 가운데 정렬 (자료 수급 후 이미지 추가 예정) */}
          <div className="solution-intro-hero argus-hero argus-hero--text-only">
            <div className="solution-intro-hero-content argus-content">
              <h2 className="solution-intro-title argus-hero-title">
                <span className="argus-hero-line1">{solution.heroTitleLine1}</span>
                <span className="argus-hero-line2">{solution.heroTitleLine2}</span>
              </h2>
              <p className="solution-intro-desc argus-hero-tagline" dangerouslySetInnerHTML={{ __html: solution.heroTagline }} />
            </div>
          </div>

          {/* ARGUS란? */}
          <div className="argus-intro-detail">
            <h3 className="argus-section-title">ARGUS란?</h3>
            <p className="argus-intro-desc">{solution.introDetail}</p>
          </div>

          {/* ARGUS 핵심 가치 — DataSense "왜 특별할까요?" 동일 3카드 레이아웃 */}
          <div className="argus-core-value-section">
            <h2 className="argus-core-value-title">ARGUS AI Hub Platform 핵심 가치</h2>
            <div className="argus-core-value-grid">
              {solution.coreValueCards.map((item, index) => (
                <article key={index} className={`argus-core-value-card argus-core-value-card--${item.colorTheme}`}>
                  <div className="argus-core-value-icon">{item.icon}</div>
                  <span className="argus-core-value-label">{item.typeLabel}</span>
                  <h3 className="argus-core-value-card-title">{item.title}</h3>
                  <p className="argus-core-value-quote">"{item.quote}"</p>
                  <p className="argus-core-value-problem-label">이런 고민 있으신가요?</p>
                  <div className="argus-core-value-problem-box">
                    {item.targetItems.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                  <p className="argus-core-value-solution-label">{item.solutionLabel}</p>
                  <ul className="argus-core-value-solution-list">
                    {item.solutionItems.map((s, i) => (
                      <li key={i}><span className="argus-core-value-check">✓</span> {s}</li>
                    ))}
                  </ul>
                  <div className="argus-core-value-badge">{item.value}</div>
                </article>
              ))}
            </div>
          </div>

          {/* 최적의 밸런스: 스마트 하이브리드 전략 */}
          <div className="argus-hybrid-section">
            <h3 className="argus-section-title">{solution.hybrid.title}</h3>
            <p className="argus-hybrid-intro">{solution.hybrid.intro}</p>
            <div className="argus-hybrid-grid">
              {solution.hybrid.items.map((item, index) => (
                <article key={index} className="argus-hybrid-card">
                  <h4 className="argus-hybrid-card-title">{item.title}</h4>
                  <p className="argus-hybrid-card-desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          {/* 주요 적용 업무 (Use Cases) */}
          <div className="argus-use-cases-section">
            <h3 className="argus-section-title">주요 적용 업무</h3>
            <p className="argus-section-lead">Use Cases</p>
            <div className="argus-use-cases-grid">
              {solution.useCases.map((item, index) => (
                <article key={index} className="argus-use-case-card">
                  <h4 className="argus-use-case-title">{item.title}</h4>
                  <p className="argus-use-case-desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          {/* 도입 및 운영 방식 */}
          <div className="argus-architecture-section">
            <h3 className="argus-section-title">{solution.architecture.title}</h3>
            <p className="argus-section-lead">{solution.architecture.lead}</p>
            <div className="argus-architecture-grid">
              {solution.architecture.items.map((item, index) => (
                <article key={index} className="argus-architecture-card">
                  <h4 className="argus-architecture-title">{item.title}</h4>
                  <p className="argus-architecture-desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          {/* 플랫폼 특성 비교 테이블 (4열) */}
          <div className="argus-comparison-section">
            <h3 className="argus-section-title">{solution.comparison.title}</h3>
            <div className="argus-comparison-wrap">
              <table className="argus-comparison-table">
                <thead>
                  <tr>
                    {solution.comparison.columns.map((col, i) => (
                      <th key={i} className={i === 1 ? 'argus-th-argus' : ''}>
                        {i === 1 && <span className="argus-table-badge">Best Choice</span>}
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {solution.comparison.rows.map((row, index) => (
                    <tr key={index}>
                      <td className="argus-table-label">{row.label}</td>
                      <td
                        className="argus-table-argus"
                        data-label={solution.comparison.columns[1]}
                      >
                        <span className="argus-table-argus-cell">
                          {row.label === '비용' ? (
                            <span className="argus-table-highlight">{row.argus}</span>
                          ) : (
                            row.argus
                          )}
                        </span>
                      </td>
                      <td
                        className="argus-table-general"
                        data-label={solution.comparison.columns[2]}
                      >
                        <span className="argus-table-other-cell">{row.general}</span>
                      </td>
                      <td
                        className="argus-table-agent"
                        data-label={solution.comparison.columns[3]}
                      >
                        <span className="argus-table-other-cell">{row.agent}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="solution-cta-section argus-cta-section argus-page">
        <div className="solution-cta argus-cta">
          <div className="container">
            <h2 className="solution-cta-title">{solution.ctaTitle}</h2>
            <p className="solution-cta-desc">{solution.ctaDesc}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
