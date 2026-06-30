import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StarField from './StarField.jsx'
import GridOverlay from './GridOverlay.jsx'

import s1 from '../assests/s1.png'
import s2 from '../assests/s2.png'
import s3 from '../assests/s3.png'
import s4 from '../assests/s4.png'

const testimonials = [
  { id: 1, image: s1 },
  { id: 2, image: s2 },
  { id: 3, image: s3 },
  { id: 4, image: s4 },
]

export default function SuccessStories() {
  const [[activeIndex, direction], setSliderState] = useState([1, 0])

  const handlePrev = () => {
    setSliderState([activeIndex - 1, -1])
  }

  const handleNext = () => {
    setSliderState([activeIndex + 1, 1])
  }

  const getDisplayItems = () => {
    return [
      { absoluteIndex: activeIndex - 1, pos: -1 },
      { absoluteIndex: activeIndex, pos: 0 },
      { absoluteIndex: activeIndex + 1, pos: 1 }
    ];
  }

  return (
    <section
      id="testimonials"
      className="section-dark"
      style={{
        position: 'relative',
        padding: '72px 0',
        overflow: 'hidden',
      }}
    >

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            marginBottom: '48px',
            padding: '0 24px',
          }}
        >
          <h2 style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '56px',
            letterSpacing: '-1px',
            color: '#FF6229',
            marginBottom: '16px',
          }}>
            Success Stories 
            <span style={{ color: '#ffffff' }}> that <br /> Speak Volumes</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '28px',
            color: 'rgba(255,255,255,0.84)',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Hear from Participants who Transformed their Sales Careers with Sales Mastery
          </p>
        </motion.div>

        {/* Carousel */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '600px',
          width: '100%',
          overflow: 'hidden',
          padding: '0 24px',
        }}>
          <AnimatePresence initial={false} custom={direction}>
            {getDisplayItems().map(({ absoluteIndex, pos }) => {
              const itemIndex = ((absoluteIndex % testimonials.length) + testimonials.length) % testimonials.length;
              const item = testimonials[itemIndex];
              const isActive = pos === 0;
              const offsetPx = typeof window !== 'undefined' && window.innerWidth < 768 ? 260 : 380;

              return (
                <motion.div
                  key={absoluteIndex}
                  custom={direction}
                  initial={(dir) => ({
                    x: dir > 0 ? offsetPx * 2 : -offsetPx * 2,
                    scale: 0.8,
                    opacity: 0,
                    zIndex: 0
                  })}
                  animate={{
                    x: pos * offsetPx,
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.5,
                    zIndex: isActive ? 10 : 5,
                  }}
                  exit={(dir) => ({
                    x: dir > 0 ? -offsetPx * 2 : offsetPx * 2,
                    scale: 0.8,
                    opacity: 0,
                    zIndex: 0
                  })}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => {
                    if (pos === 1) handleNext();
                    if (pos === -1) handlePrev();
                  }}
                  style={{
                    position: 'absolute',
                    width: '340px',
                    height: '460px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    cursor: isActive ? 'default' : 'pointer',
                    boxShadow: isActive 
                      ? '0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,98,41,0.2)' 
                      : '0 10px 30px rgba(0,0,0,0.5)',
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={`Success Story ${item.id}`} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block' 
                    }} 
                  />

                  {/* Play button */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}>
                    <div className={`play-btn-outer ${isActive ? 'large' : ''}`}>
                      <div className="play-btn-inner">
                        <div className="play-icon" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '32px',
          marginTop: '40px',
          paddingLeft: '10%',
        }}>
          <button className="carousel-arrow" onClick={handlePrev} aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="carousel-arrow" onClick={handleNext} aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
