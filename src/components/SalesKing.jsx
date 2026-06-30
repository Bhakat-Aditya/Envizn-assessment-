import { motion } from 'framer-motion';
import heroGuyImg from '../assests/heroguy.jpg';
import comp1Img from '../assests/comp1.png';
import comp2Img from '../assests/comp2.png';
import comp4Img from '../assests/comp4.png';
import compViceImg from '../assests/comp_vice.png';

export default function SalesKing() {
  return (
    <section
      id="salesking"
      style={{
        position: 'relative',
        padding: '120px 0',
        background: 'var(--color-dark-base)',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: '1.2',
            letterSpacing: '-1px',
            marginBottom: '16px',
            color: '#FFFFFF'
          }}>
            Meet
            <span style={{ color: '#FF6229' }}> Rebien Ghazali</span>👋
          </h2>
          <p style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 500,
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Discover the Sales King Behind Sales Mastery
          </p>
        </motion.div>

        {/* Two Columns */}
        <div style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ flex: 1, minWidth: '300px' }}
          >
            <div style={{
              fontFamily: 'var(--font-raleway)',
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.85)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              marginBottom: '64px'
            }}>
              <p>
                Rebien Ghazali, often hailed as the "Sales King," is a renowned figure in the world of sales and entrepreneurship. With a proven track record of success and an unparalleled passion for empowering others, Rebien is the driving force behind Sales Mastery.
              </p>
              <p>
                Rebien's commitment to your success goes beyond the 21-day challenge. As your mentor, he will personally guide you through the intricacies of sales, providing mentorship, inspiration, and a roadmap to help you excel in your career.
              </p>
            </div>

            {/* Companies row */}
            <div>
              <p style={{
                fontFamily: 'var(--font-raleway)',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 600
              }}>
                Bekend van:
              </p>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
                <img src={compViceImg} alt="Company 1" style={{ height: '30px', opacity: 0.7, filter: '' }} />
                <img src={comp2Img} alt="Company 2" style={{ height: '30px', opacity: 0.7, filter: '' }} />
                <img src={comp1Img} alt="Company 3" style={{ height: '30px', opacity: 0.7, filter: '' }} />
                <img src={comp4Img} alt="Company 4" style={{ height: '30px', opacity: 0.7, filter: 'invert(1)' }} />
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(255,98,41,0.15)',
              border: '1px solid rgba(255,98,41,0.2)',
              maxWidth: '400px',
              width: '100%'
            }}>
              <img
                src={heroGuyImg}
                alt="Sales King"
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  transform: 'scale(2.5)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
