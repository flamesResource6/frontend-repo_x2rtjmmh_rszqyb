import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Marketplace from './components/Marketplace'
import SubmitForm from './components/SubmitForm'
import ActivityFeed from './components/ActivityFeed'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Marketplace />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.12),transparent)] pointer-events-none" />
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/submit" element={<SubmitForm />} />
          <Route path="/activity" element={<ActivityFeed />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
