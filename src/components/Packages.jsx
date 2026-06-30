import { motion } from 'framer-motion';
import packimg from '../assests/packimg.png';
import parti from '../assests/parti.jpg';

const benefits = [
  "21-Day Challenge Access",
  "Elite Training by Rebien Ghazali",
  "Free Call to Join",
  "Community Support",
  "Bonus: 1-on-1 Coaching Session",
  "Enhanced Job Placement Opportunities",
  "Commission Tracking Features",
  "Airtable CRM System Integration",
  "30-Day Post-Challenge Mentorship",
  "VIP Networking Opportunities"
];

export default function Packages() {
  return (
    <section
      id="packages"
      style={{
        position: 'relative',
        padding: '120px 0',
        background: 'var(--color-dark-base)',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${packimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(8px)',
        transform: 'scale(1.05)',
        zIndex: 0,
        pointerEvents: 'none',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: -720,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${parti})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.6,
        mixBlendMode: 'screen',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      {/* Central Orange Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle 1000px at center, rgba(255, 98, 41, 0.41) 0%, rgba(255, 98, 41, 0) 100%)',
        zIndex: 1,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
      }} />
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 className="packages-heading" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '48px',
            fontWeight: 800,
            lineHeight: '1.2',
            letterSpacing: '-1px',
            marginBottom: '16px',
            color: '#FFFFFF'
          }}>
            <span style={{ color: '#FF6229' }}>Tailored Packages</span> to Elevate <br /> Your Sales Journey
          </h2>
          <p style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 500,
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            Explore Exclusive Sales Mastery Packages for Every Aspiring Sales Professional
          </p>
        </motion.div>

        {/* Glassmorphism Box */}
        <motion.div
          className="packages-glass-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(38px)',
            WebkitBackdropFilter: 'blur(38px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            gap: '64px',
            flexWrap: 'wrap',
            alignItems: 'center',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          {/* Left Column (Pricing) */}
          <div className="packages-price-col" style={{
            flex: '1 1 350px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 32px',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'var(--font-raleway)',
              fontSize: '20px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              Elite
            </p>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '12px' }}>
              <span className="packages-price-text" style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '84px',
                fontWeight: 800,
                lineHeight: '1',
                color: '#FFFFFF'
              }}>
                $500
              </span>
              <span style={{
                position: 'relative',
                display: 'inline-block',
                fontFamily: 'var(--font-raleway)',
                fontSize: '24px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.4)',
                marginLeft: '12px',
                marginTop: '12px'
              }}>
                $999
                <span style={{
                  position: 'absolute',
                  left: '-10%',
                  top: '50%',
                  width: '120%',
                  height: '2px',
                  background: 'rgba(255,255,255,0.6)',
                  transform: 'rotate(-20deg)',
                  pointerEvents: 'none'
                }} />
              </span>
            </div>

            <p style={{
              fontFamily: 'var(--font-raleway)',
              fontSize: '16px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '40px'
            }}>
              One time, 50% off
            </p>

            <button className="packages-btn" style={{
              background: '#FF6229',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '50px',
              padding: '10px 0px',
              fontSize: '18px',
              fontWeight: 500,
              fontFamily: 'var(--font-raleway)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              width: '50%',
              justifyContent: 'center'
            }}>
              Apply to join <span>&rarr;</span>
            </button>
          </div>

          {/* Right Column (Benefits) */}
          <div style={{ flex: '2 1 400px' }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {benefits.map((benefit, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  fontFamily: 'var(--font-raleway)',
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.5',
                  fontWeight: 500
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <circle cx="12" cy="12" r="10" fill="rgba(255,98,41,0.15)" stroke="#ffffff" strokeWidth="1.5" />
                    <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .packages-heading {
            fontSize: 36px !important;
          }
          .packages-glass-box {
            padding: 24px !important;
            gap: 32px !important;
          }
          .packages-price-col {
            padding: 24px 16px !important;
          }
          .packages-price-text {
            fontSize: 60px !important;
          }
          .packages-btn {
            width: 80% !important;
          }
        }
      `}</style>
    </section>
  )
}
