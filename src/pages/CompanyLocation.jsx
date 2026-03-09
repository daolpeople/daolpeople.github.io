import PageHero from '../components/PageHero'
import './CompanyLocation.css'

export default function CompanyLocation() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <PageHero
            title="오시는 길"
            description="오시는 길과 연락처 정보를 제공합니다."
            image="assets/images/Gemini_Generated_Image_szsq4bszsq4bszsq.png"
          />
          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.9051353473697!2d127.13909578769764!3d37.60439160639973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb0b3e63f19db%3A0xfb2c7573eb1e2f4c!2z6rK96riw64-EIOq1rOumrOyLnCDqsbTsm5DrjIDroZwzNOuyiOq4uCA5!5e0!3m2!1sko!2skr!4v1769062774126!5m2!1sko!2skr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="다올피플 위치"
          ></iframe>
          <div className="info-list">
            <div>경기도 구리시 건원대로34번길 9 세신리빙프라자 604호</div>
            <div>dopp@dopp.co.kr</div>
          </div>
        </div>
      </section>
    </main>
  )
}

