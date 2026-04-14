import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { asset } from '../utils/asset'

export default function Header() {
  const location = useLocation()
  const [openSubmenu, setOpenSubmenu] = useState(null) // 'company' | 'solution' | 'mobile' | null

  useEffect(() => {
    setOpenSubmenu(null)
  }, [location.pathname])

  return (
    <header id="header" className="site-header">
      <div className="container inner">
        <div className="header-left">
          <Link className="logo" to="/">
            <img className="logo-img" src={asset('assets/images/daol_log.6c01c216.png')} alt="다올피플" />
          </Link>
        </div>
        <nav className="site-nav" role="navigation">
          <ul className="menu">
            <li
              className={`menu-item${openSubmenu === 'company' ? ' is-open' : ''}`}
              onMouseEnter={() => setOpenSubmenu('company')}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <span className="menu-link">COMPANY</span>
              <ul className="submenu">
                <li><Link to="/company/history">연혁</Link></li>
                <li><Link to="/company/clients">고객사</Link></li>
                <li><Link to="/company/location">오시는 길</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="/business">사업분야</Link>
            </li>
            <li
              className={`menu-item${openSubmenu === 'solution' ? ' is-open' : ''}`}
              onMouseEnter={() => setOpenSubmenu('solution')}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <span className="menu-link">AX 솔루션</span>
              <ul className="submenu">
                <li><Link to="/solution/datasense">DATA Sense</Link></li>
                <li><Link to="/solution/axi-paas">AX iPaaS</Link></li>
                <li><Link to="/solution/argus">ARGUS</Link></li>
              </ul>
            </li>
            <li
              className={`menu-item${openSubmenu === 'mobile' ? ' is-open' : ''}`}
              onMouseEnter={() => setOpenSubmenu('mobile')}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <span className="menu-link">Mobile 솔루션</span>
              <ul className="submenu">
                <li><Link to="/solution/maxy-front">MAXY Web</Link></li>
                <li><Link to="/solution/maxy-mobile">MAXY Mobile</Link></li>
                <li><Link to="/solution/miaps-hybrid">MiAPS Hybrid</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="/contact">CONTACT</Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="/news">다올소식</Link>
            </li>
          </ul>
        </nav>
        <div className="header-right" aria-hidden="true" />
      </div>
    </header>
  )
}

