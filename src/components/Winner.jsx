import React from 'react';
import { motion } from 'framer-motion';

// Imports for 1st column
import img1st1 from '../assests/1st1.png';
import img1st2 from '../assests/1st2.jpg';

// Imports for 2nd column
import img2nd1 from '../assests/2nd1.jpg';
import img2nd2 from '../assests/2nd2.png';

// Imports for 3rd column
import img3rd1 from '../assests/3ed1.jpg';
import img3rd2 from '../assests/3rd2.jpg';
import img3rd3 from '../assests/3rd3.png';

export default function Winner() {
  return (
    <section id="winner" style={{ position: 'relative', padding: '120px 0', background: 'var(--color-dark-base)', color: '#FFFFFF' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: '64px', position: 'relative', zIndex: 2 }}
      >
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontSize: '48px',
          fontWeight: 800,
          letterSpacing: '-1px',
          marginBottom: '16px',
          color: '#FFFFFF'
        }}>
          <span style={{ color: '#FF6229' }}>Join</span> the Winner Circle
        </h2>
        <p style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 500,
          fontSize: '18px',
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          Guarantee your first sale job and reveal the victory of earning <br /> within 21 days
        </p>
      </motion.div>

      {/* Grid Container */}
      <div style={{ position: 'relative', maxWidth: '1100px', height: '950px', overflow: 'hidden', margin: '0 auto', zIndex: 1, padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          width: '100%',
          alignItems: 'flex-start',
          gap: '24px'
        }}>
          {/* Column 1 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <img src={img1st1} alt="Winner 1-1" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: "20px" }} />
            <img src={img1st2} alt="Winner 1-2" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: "20px" }} />
          </div>
          {/* Column 2 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <img src={img2nd1} alt="Winner 2-1" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: "20px" }} />
            <img src={img2nd2} alt="Winner 2-2" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: "20px" }} />
          </div>
          {/* Column 3 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <img src={img3rd1} alt="Winner 3-1" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: "20px" }} />
            <img src={img3rd2} alt="Winner 3-2" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: "20px" }} />
            <img src={img3rd3} alt="Winner 3-3" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: "20px" }} />
          </div>
        </div>

        {/* Bottom Overlay for Fade/Blur & Button */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '10px',
        }}>
          {/* The blurred/gradient overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(to top, rgba(5, 6, 20, 1) 0%, rgba(5, 6, 20, 0.7) 40%, rgba(5, 6, 20, 0) 100%)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            maskImage: 'linear-gradient(to top, black 50%, transparent)',
            WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent)',
            pointerEvents: 'none',
          }} />

          {/* Button */}
          <button className="glow-btn glow-btn-lg" style={{ position: 'relative', zIndex: 10 }}>
            Join the challenge now <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  )
}
