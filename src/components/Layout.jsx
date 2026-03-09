import Footer from './Footer'
import Header from './Header'
import ScrollHandler from './ScrollHandler'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ScrollHandler />
      {children}
      <Footer />
    </>
  )
}

