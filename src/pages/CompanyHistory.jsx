import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import { historyData } from '../data/content'

export default function CompanyHistory() {
  const ranges = useMemo(
    () => [
      { id: '2021-now', label: '2021년 ~ 현재', years: ['2025', '2024', '2023', '2022', '2021'] },
      { id: '2018-2020', label: '2018년 ~ 2020년', years: ['2020', '2019', '2018'] },
    ],
    [],
  )
  const [activeRange, setActiveRange] = useState(ranges[0].id)
  const activeYears = ranges.find((range) => range.id === activeRange)?.years ?? []
  const filteredHistory = historyData.filter((item) => activeYears.includes(item.year))

  return (
    <main>
      <section className="section history-section">
        <div className="container">
          <PageHero
            title="주요 연혁"
            description="다올피플의 성장 과정을 연도별로 정리했습니다."
            image="assets/images/Gemini_Generated_Image_szsq4bszsq4bszsq.png"
          />
          <p className="history-note">
            주요 프로젝트, 운영 성과, 파트너십 확장 내용을 중심으로 정리해
            다올피플이 걸어온 변화와 성장을 한눈에 볼 수 있도록 구성했습니다.
          </p>
          <div className="history-tabs" role="tablist" aria-label="연혁 기간 선택">
            {ranges.map((range) => (
              <button
                key={range.id}
                type="button"
                className={`history-tab${activeRange === range.id ? ' is-active' : ''}`}
                onClick={() => setActiveRange(range.id)}
                role="tab"
                aria-selected={activeRange === range.id}
              >
                {range.label}
              </button>
            ))}
          </div>
          <div className="history-listing">
            {filteredHistory.map((item, index) => (
              <div
                key={item.year}
                className={`history-year-group ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
              >
                <div className="history-card">
                  <div className={`history-card-inner ${index % 2 === 0 ? 'history-card-inner--left' : ''}`}>
                    <div className="history-year">{item.year}</div>
                    <ul className="history-items">
                      {item.items.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {filteredHistory.length === 0 && (
              <div className="history-empty">해당 기간 데이터 준비 중입니다.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

