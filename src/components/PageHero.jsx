import { asset } from '../utils/asset'

export default function PageHero({ title, description, image }) {
  return (
    <div
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(15, 23, 42, 0.55), rgba(37, 99, 235, 0.35)), url("${asset(image)}")`,
      }}
    >
      <div className="page-hero-content">
        <div className="section-title">{title}</div>
        <div className="section-desc">{description}</div>
      </div>
    </div>
  )
}

