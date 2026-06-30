import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import StarField from './StarField.jsx'
import GridOverlay from './GridOverlay.jsx'
import { FaPlay } from 'react-icons/fa'
import heroVideo from '../assests/hero_video.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="section-dark"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '40px',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <StarField count={100} />
      <GridOverlay />

      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '1500px',
          height: '750px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#FF6229',
          opacity: 0.25,
          filter: 'blur(120px)',
          borderRadius: '800px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-main" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Limited Seats Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255, 98, 41, 0.1)',
            border: '1px solid rgba(255, 98, 41, 0.3)',
            borderRadius: '10px',
            padding: '8px 18px 8px 10px',
            marginBottom: '24px',
            color: '#ffffff',
            fontFamily: 'var(--font-raleway, sans-serif)',
            fontWeight: 600,
            fontSize: '16px',
          }}>
            <span>⚡</span> Limited Seats
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: 'var(--font-raleway, sans-serif)',
            fontWeight: 700,
            fontSize: '67px',
            lineHeight: '1.1',
            letterSpacing: '-1px',
            color: '#FFFFFF',
            marginBottom: '24px',
          }}>
            Guarantee your first sales job and{' '}
            <span style={{ color: '#FF6229' }}>start earning</span>
            {' '}hard earned cash in{' '}
            <span style={{ color: '#FF6229' }}>21 days.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-raleway, sans-serif)',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '26px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '48px',
            maxWidth: '700px',
          }}>
            Discover Elite Sales Strategies, Transform Your Mindset, and <br /> Make Every Moment Count in Your Path to Sales Mastery!
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '64px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}>
            {[
              { num: '+200', text: 'Active users' },
              { num: '+10,000$', text: 'Avg. profit p/m client' },
              { num: '+1,200,000$', text: 'Total capital' }
            ].map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-raleway, sans-serif)',
                  fontWeight: 700,
                  fontSize: '32px',
                  color: '#FFFFFF',
                  marginBottom: '4px'
                }}>
                  {stat.num}
                </span>
                <span style={{
                  fontFamily: 'var(--font-raleway, sans-serif)',
                  fontWeight: 300,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '1px'
                }}>
                  {stat.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <a href="#enroll" className="hero-cta-btn" style={{ color: "#ffffff" }}>
              Join the challenge now &rarr;
            </a>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FF6229',
              }}>
                <FaPlay style={{ color: '#050614', fontSize: '18px', marginLeft: '4px' }} />
              </div>
              <span style={{
                fontFamily: 'var(--font-raleway, sans-serif)',
                fontWeight: 600,
                fontSize: '15px',
                color: '#FF6229',
              }}>
                Watch Demo
              </span>
            </div>
          </div>
          
        </motion.div>
      </div>

      <style>{`
        .hero-cta-btn {
          font-family: var(--font-raleway, sans-serif);
          font-weight: 700;
          font-size: 16px;
          padding: 16px 36px;
          border-radius: 50px;
          background: #FF6229;
          color: #050614;
          text-decoration: none;
          box-shadow: 0 0 25px rgba(255, 98, 41, 0.4);
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .hero-cta-btn:hover {
          background: #050614;
          color: #FF6229 !important;
          border: 1px solid #FF6229;
          box-shadow: 0 0 35px rgba(255, 98, 41, 0.8);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          #home h1 {
            font-size: 40px !important;
            line-height: 48px !important;
          }
        }
        @media (max-width: 480px) {
          #home h1 {
            font-size: 32px !important;
            line-height: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
