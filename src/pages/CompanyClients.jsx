import PageHero from '../components/PageHero'
import { clientLogos } from '../data/content'
import { asset } from '../utils/asset'
import './CompanyClients.css'

export default function CompanyClients() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <PageHero
            title="고객사"
            description="주요 고객사와 함께 성장해 왔습니다."
            image="assets/images/Gemini_Generated_Image_szsq4bszsq4bszsq.png"
          />
          <div className="client-message">
            <p>고객과 함께 도전하며 새로운 가능성을 열어갑니다.</p>
            <p>변화하는 환경 속에서도 고객의 성공을 최우선으로</p>
            <p>혁신과 신뢰를 이어가는 파트너가 되겠습니다</p>
          </div>
          <div className="client-grid">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="client-card">
                <img className="client-logo" src={asset(logo.file)} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

