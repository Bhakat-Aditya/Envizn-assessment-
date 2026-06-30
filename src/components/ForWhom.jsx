import { motion } from 'framer-motion'
import StarField from './StarField.jsx'
import GridOverlay from './GridOverlay.jsx'

import forWhomImg from '../assests/forwhom.png'
import ai1 from '../assests/ai1.png'
import ai2 from '../assests/ai2.png'
import ai3 from '../assests/ai3.png'
import ai4 from '../assests/ai4.png'
import ai5 from '../assests/ai5.png'
import ai6 from '../assests/ai6.png'

import fc1 from '../assests/fc1.gif'
import fc2 from '../assests/fc2.gif'
import fc3 from '../assests/fc3.gif'

const featureCards = [
  {
    icon: fc1,
    title: 'Exclusive Access to Elite Training by Rebien Ghazali',
    description: 'Immerse yourself in top-notch training curated by Rebien Ghazali, the Sales King himself. Gain insights, techniques, and proven strategies that guarantee success in the competitive world of sales.',
  },
  {
    icon: fc2,
    title: 'Secure your future with a guaranteed, High-income sales job.',
    description: 'Upon course completion, land a high-paying sales job at a prestigious Dutch agency. We don\'t just train; we ensure your success by providing real job opportunities in your desired field.',
  },
  {
    icon: fc3,
    title: 'Stay Motivated and Connected through our Community.',
    description: 'Foster a sense of community, Join forces with like-minded individuals, share experiences, and receive ongoing support to guarantee your success.',
  },
]

const avatarFloats = [
  { top: '39px', left: '49%', size: 130, img: ai2 },
  { top: '55px', left: '95%', size: 100, img: ai3 },
  { top: '170px', left: '69%', size: 138, img: ai1 },
  { top: '229px', left: '41%', size: 115, img: ai4 },
  { top: '228px', left: '105%', size: 118, img: ai5 },
  { top: '342px', left: '69%', size: 118, img: ai6 },
]

export default function ForWhom() {
  return (
    <section
      className="section-dark"
      style={{
        position: 'relative',
        padding: '72px 0',
        overflow: 'hidden',
      }}
    >
      <StarField count={50} />

      {/* Blurred, faded background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${forWhomImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.75,
        filter: 'blur(1px)',
        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        zIndex: 0,
      }} />

      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '100%',
          height: '1500px',
          left: '0',
          top: '5%',
          background: 'radial-gradient(ellipse at top center, rgba(255,98,41,0.5) 0%, rgba(255,98,41,0.15) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'screen',
        }}
      />

      <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top section - Text + Image */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ flex: '1 1 480px', maxWidth: '516px' }}
          >
            <h2 style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 700,
            fontSize: '38px',
            lineHeight: '45px',
            letterSpacing: '-1px',
            color: '#FFFFFF',
            marginBottom: '16px',
            maxWidth: '600px',
            margin: '0 auto 16px',
            textAlign: "start"
          }}>
            Revolutionise Your Approach to Cold Calling and Get Closer to Your{' '}
            <span style={{ color: '#FF6229' }}> Dream Career and Financial Freedom!</span>
          </h2>

            <p style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '28px',
            color: 'rgba(255,255,255,0.84)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            textAlign:"start"
          }}>
            Embark on a transformative 21 day journey and discover the <br /> secrets to effective communication.
          </p>

            <a href="#enroll" className="glow-btn glow-btn-lg">
              Book a Free Call →
            </a>
          </motion.div>

          {/* Right Image - Person with floating avatars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              flex: '1 1 400px',
              maxWidth: '592px',
              position: 'relative',
              height: '500px',
            }}
            className="forwhom-image"
          >
            {/* Floating avatars */}
            {avatarFloats.map((av, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: av.top,
                  left: av.left,
                  width: `${av.size}px`,
                  height: `${av.size}px`,
                  borderRadius: '50%',
                  backgroundImage: `url(${av.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  animation: `float${(i % 3) + 1} ${5 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
                  zIndex: 2,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Feature Cards Row */}
        <div style={{
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          {featureCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card glass-card-border"
              style={{
                flex: '1 1 280px',
                maxWidth: '324px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                minHeight: '350px',
              }}
            >
              {/* Icon */}
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(255,98,41,0.1) 0%, rgba(255,98,41,0.02) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  style={{ width: '48px', height: '48px', objectFit: 'contain', display: 'block' }} 
                />
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <h3
                  className="gradient-text-card"
                  style={{
                    fontFamily: 'var(--font-raleway)',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '28px',
                  }}
                >
                  {card.title}
                </h3>

                <div className="radial-divider" />

                <p style={{
                  fontFamily: 'var(--font-raleway)',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(255,255,255,0.84)',
                }}>
                  {card.description}
                </p>

                <div className="radial-divider" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .forwhom-image { display: none !important; }
        }
        @media (max-width: 768px) {
          #forwhom h2 { font-size: 32px !important; line-height: 40px !important; }
        }
      `}</style>
    </section>
  )
}
