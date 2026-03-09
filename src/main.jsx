import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { asset } from './utils/asset'
import './index.css'
import App from './App.jsx'

// CTA 배경 이미지 경로 (base URL 포함) — solutionCommon.css .solution-cta 에서 사용
document.documentElement.style.setProperty(
  '--solution-cta-bg',
  `url("${asset('assets/images/dopp-bg-20.png')}")`
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
