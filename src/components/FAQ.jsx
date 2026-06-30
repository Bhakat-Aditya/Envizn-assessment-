import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import forWhomImg from '../assests/faqimg.png'
import logoImg from '../assests/logo.png'

const faqItems = [
  {
    question: 'What makes Sales Mastery different from other sales courses?',
    answer: '',
  },
  {
    question: 'How does the 21-day challenge work?',
    answer: '',
  },
  {
    question: 'Is there a guarantee for job placement?',
    answer: '',
  },
  {
    question: 'What if I have no prior sales experience?',
    answer: '',
  },
  {
    question: 'Can I join Sales Mastery if I\'m not located in the Netherlands?',
    answer: '',
  },
  {
    question: 'How do I get started with Sales Mastery?',
    answer: '',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="section-dark"
      style={{
        position: 'relative',
        padding: '80px 0 100px',
        background: 'var(--color-dark-base)',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Blurred, faded background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${forWhomImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'scale(1.4)',
        opacity: 0.15,
        filter: 'blur(2px)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        zIndex: 0,
      }} />
      {/* Central Orange Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle 1500px at center, rgba(255, 98, 41, 0.28) 0%, rgba(255, 98, 41, 0) 100%)',
        zIndex: 1,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
      }} />
      <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <h2 className="faq-heading" style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '56px',
            letterSpacing: '-1px',
            color: '#FFFFFF',
            marginBottom: '16px',
          }}>
            Frequently Asked <span style={{ color: '#FF6229' }}>Questions</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 500,
            fontSize: '15px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Discover In-Depth Answers to Your Queries About Sales Mastery
          </p>
        </motion.div>

        <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="faq-item"
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="faq-question-text" style={{fontSize:"18px"}}>{item.question}</span>
                <img 
                  src={logoImg} 
                  alt="Toggle" 
                  className={`faq-icon ${openIndex === i ? 'open' : ''}`} 
                  style={{ width: '24px', height: 'auto', objectFit: 'contain' }}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .faq-heading {
            font-size: 36px !important;
            line-height: 42px !important;
          }
          .faq-question-text {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
