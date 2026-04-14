import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import SolutionLayout from './components/SolutionLayout'
import Home from './pages/Home'
import CompanyHistory from './pages/CompanyHistory'
import CompanyClients from './pages/CompanyClients'
import CompanyLocation from './pages/CompanyLocation'
import NewsPage from './pages/NewsPage'
import Contact from './pages/Contact'
import Business from './pages/Business'
import DataSense from './pages/solution/DataSense'
import MaxyFront from './pages/solution/MaxyFront'
import MaxyMobile from './pages/solution/MaxyMobile'
import MiapsHybrid from './pages/solution/MiapsHybrid'
import AxiPaaS from './pages/solution/AxiPaaS'
import Argus from './pages/solution/Argus'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/history" element={<CompanyHistory />} />
          <Route path="/company/clients" element={<CompanyClients />} />
          <Route path="/company/location" element={<CompanyLocation />} />
          <Route path="/business" element={<Business />} />
          <Route path="/solution" element={<SolutionLayout />}>
            <Route path="datasense" element={<DataSense />} />
            <Route path="maxy-front" element={<MaxyFront />} />
            <Route path="maxy-mobile" element={<MaxyMobile />} />
            <Route path="miaps-hybrid" element={<MiapsHybrid />} />
            <Route path="axi-paas" element={<AxiPaaS />} />
            <Route path="argus" element={<Argus />} />
          </Route>
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
