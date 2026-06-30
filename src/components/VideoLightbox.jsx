import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroVideo from '../assests/hero_video.png'

export default function VideoLightbox() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section
      id="video-lightbox"
      style={{
        position: 'relative',
        padding: '0 0 80px',
        background: 'transparent',
        marginTop: '-40px', // Pull it up slightly to blend with the hero
      }}
    >
      <div className="container-main">
        {/* Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          onClick={() => setIsOpen(true)}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1040px',
            margin: '0 auto',
            cursor: 'pointer',
          }}
        >
          <div style={{
            borderRadius: '24px 24px 0 0',
            border: '1px solid rgba(255,255,255,0.1)',
            borderBottom: 'none',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(255,98,41,0.15)',
            maskImage: 'linear-gradient(to bottom, black 15%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 25%, transparent 90%)',
            overflow: 'hidden'
          }}>
            <img 
              src={heroVideo} 
              alt="Video Thumbnail Preview" 
              style={{ width: '100%', display: 'block', objectFit: 'cover' }} 
            />
          </div>

          {/* Play Button Overlay */}
          <div style={{
            position: 'absolute',
            top: '40%', // Lifted up slightly because the bottom fades out
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 4,
          }}>
            <div className="play-btn-outer large">
              <div className="play-btn-inner">
                <div className="play-icon" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative' }}
            >
              <button
                className="lightbox-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close lightbox"
              >
                ✕
              </button>
              <div className="lightbox-content" style={{ padding: 0, overflow: 'hidden', background: '#050614' }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative'
                }}>
                  <img 
                    src={heroVideo} 
                    alt="Lightbox Video Content" 
                    style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 4,
                  }}>
                    <div className="play-btn-outer large">
                      <div className="play-btn-inner">
                        <div className="play-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
