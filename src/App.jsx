import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Lenis from 'lenis'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import VideoLightbox from './components/VideoLightbox.jsx'
import ForWhom from './components/ForWhom.jsx'
import SuccessStories from './components/SuccessStories.jsx'
import Curriculum from './components/Curriculum.jsx'
import SalesKing from './components/SalesKing.jsx'
import Packages from './components/Packages.jsx'
import Winner from './components/Winner.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Helmet>
        <title>Envizn | 21-Day Sales Mastery Challenge</title>
        <meta name="description" content="Guarantee your first sales job and start earning hard-earned cash in 21 days. Sales Mastery course by Rebien Ghazali." />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <VideoLightbox />
        <ForWhom />
        <SuccessStories />
        <Curriculum />
        <SalesKing />
        <Packages />
        <Winner />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
