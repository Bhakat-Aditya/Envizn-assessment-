import { useState, useEffect } from 'react'
import logo from '../assests/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
  ]

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '20px',
      pointerEvents: 'none'
    }}>
      <nav
        id="navbar"
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(5, 6, 20, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 98, 41, 0.2)',
          boxShadow: '0 4px 30px rgba(255, 98, 41, 0.1)',
          borderRadius: '50px',
          padding: '8px 12px 8px 24px',
          transition: 'all 0.3s ease',
          width: '90%',
          maxWidth: '1000px',
        }}
      >
        {/* Left Side: Logo and Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          
          {/* Logo and Brand */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src={logo} alt="Logo" style={{ width: '35px', height: '35px', objectFit: 'contain' }} />
            <span style={{
              fontFamily: 'var(--font-raleway, sans-serif)',
              fontWeight: 500,
              fontSize: '20px',
              color: '#FFFFFF',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}>
              Sales Mastery
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }} className="nav-links-desktop">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-raleway, sans-serif)',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => e.target.style.color = '#FF6229'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: CTA and Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* CTA Button with Glowing Animated Border */}
          <a 
            href="#enroll" 
            className="enroll-btn-wrapper nav-cta-desktop"
          >
            <div className="enroll-btn-inner">Enroll Now &gt;</div>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <span style={{
              width: '24px', height: '2px', background: '#FF6229', borderRadius: '2px',
              transition: 'all 0.3s',
              transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }} />
            <span style={{
              width: '24px', height: '2px', background: '#FF6229', borderRadius: '2px',
              transition: 'all 0.3s',
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              width: '24px', height: '2px', background: '#FF6229', borderRadius: '2px',
              transition: 'all 0.3s',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          position: 'absolute',
          top: '80px',
          left: '5%',
          right: '5%',
          display: mobileOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px',
          background: 'rgba(5, 6, 20, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 98, 41, 0.2)',
          borderRadius: '24px',
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--font-raleway, sans-serif)',
              fontWeight: 600,
              fontSize: '16px',
              color: 'rgba(255,255,255,0.9)',
              textDecoration: 'none',
              padding: '8px 0',
              textAlign: 'center'
            }}
          >
            {link.label}
          </a>
        ))}
        
        <a href="#enroll" className="enroll-btn-wrapper" style={{ marginTop: '16px', width: '100%' }}>
          <div className="enroll-btn-inner" style={{ width: '100%' }}>Enroll Now &gt;</div>
        </a>
      </div>

      <style>{`
        .enroll-btn-wrapper {
          position: relative;
          display: inline-flex;
          border-radius: 50px;
          padding: 2px;
          overflow: hidden;
          background: #000;
          text-decoration: none;
          box-shadow: 0 0 15px rgba(255, 98, 41, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .enroll-btn-wrapper::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150%;
          height: 300%;
          background: conic-gradient(transparent, transparent, transparent, #FF6229);
          transform: translate(-50%, -50%);
          animation: rotateGlow 2.5s linear infinite;
        }

        .enroll-btn-wrapper:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(255, 98, 41, 0.6);
        }

        .enroll-btn-inner {
          position: relative;
          z-index: 1;
          background: #050614;
          color: #FFFFFF;
          border-radius: 50px;
          padding: 10px 24px;
          font-family: var(--font-raleway, sans-serif);
          font-weight: 700;
          font-size: 15px;
          text-align: center;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes rotateGlow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          #navbar { padding: 12px 20px !important; }
        }
      `}</style>
    </div>
  )
}
