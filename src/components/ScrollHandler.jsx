import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToId } from '../utils/scroll'

export default function ScrollHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo
    if (scrollTarget) {
      requestAnimationFrame(() => {
        scrollToId(scrollTarget)
        navigate(location.pathname, { replace: true, state: {} })
      })
    }
  }, [location, navigate])

  useEffect(() => {
    if (location.state?.scrollTo) return
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }, [location.pathname, location.search, location.hash, location.state])

  useEffect(() => {
    const header = document.getElementById('header')
    const onScroll = () => {
      if (!header) return
      header.classList.toggle('header-scrolled', window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}

