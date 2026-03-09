import { useState } from 'react'
import PageHero from '../components/PageHero'
import { newsItems } from '../data/content'
import { asset } from '../utils/asset'
import './NewsPage.css'

export default function NewsPage() {
  const sortedNewsItems = [...newsItems].sort((a, b) => {
    const toDate = (value) => new Date(value.replace(/\s/g, '').replace(/\./g, '-'))
    return toDate(b.date) - toDate(a.date)
  })

  const [displayCount, setDisplayCount] = useState(6)
  const itemsToShow = sortedNewsItems.slice(0, displayCount)
  const hasMore = displayCount < sortedNewsItems.length

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6)
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <PageHero
            title="다올소식"
            description="다올피플의 주요 소식을 모았습니다."
            image="assets/images/dopp-news.png"
          />

          <div className="news-list">
            {itemsToShow.map((item) => {
              const thumbSrc = item.thumb.startsWith('http') ? item.thumb : asset(item.thumb)
              return (
              <a key={item.url} className="news-item" href={item.url} target="_blank" rel="noreferrer">
                <img className="news-thumb" src={thumbSrc} alt="다올소식 썸네일" />
                <span className="news-tag">{item.tag}</span>
                <span className="news-title">{item.title}</span>
                <span className="news-date">{item.date}</span>
              </a>
            )})}
          </div>
 
          {hasMore && (
            <button className="news-more-btn" type="button" onClick={handleLoadMore}>더보기</button>
          )}
        </div>
      </section>
    </main>
  )
}

