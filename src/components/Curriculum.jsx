import { motion } from 'framer-motion'
import salesmasteryImg from '../assests/salesmastery.png'
import lapi2Img from '../assests/lapi2.png'
import lapi1Img from '../assests/lapi1.png'
import noteGif from '../assests/note.gif'

const modules = [
  { days: '1-4', title: 'Mindset Shift', desc: 'Forge a winning mindset to set the stage for success in the world of sales.' },
  { days: '5-8', title: 'Understanding Human Psychology', desc: 'Dive deep into the psychology of your audience, mastering the art of persuasion.' },
  { days: '9-10', title: 'Capturing Attention and Building Authority', desc: 'Learn to grab attention instantly and establish yourself as an authoritative figure in sales.' },
  { days: '11', title: 'Mastering Cold Approaching', desc: 'Unlock the secrets to confidently approach potential clients and initiate meaningful conversations.' },
  { days: '12-15', title: 'Uncovering Interest, Needs, and Pain Points', desc: 'Explore techniques to identify and address the unique interests, needs, and pain points of your prospects.' },
  { days: '16-17', title: 'Being the Solution to Their Problem', desc: `Craft compelling solutions that resonate with your audience's desires and aspirations.` },
  { days: '18-19', title: 'The Art of Closing', desc: 'Master the fine art of closing deals with confidence and finesse.' },
  { days: '20-21', title: 'Payment Details and Follow-Up Strategies', desc: 'Navigate the crucial final days, understanding payment processes, and implementing effective follow-up strategies for sustained success.' },
]

export default function Curriculum() {
  return (
    <section
      id="course"
      className="section-dark"
      style={{
        position: 'relative',
        padding: '72px 0',
        overflow: 'hidden',
      }}
    >
      {/* Blurred, faded background image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '120vh',
        backgroundImage: `url(${salesmasteryImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.75,
        filter: 'blur(1px)',
        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        zIndex: 0,
      }} />

      {/* Background glow overlay */}
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
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-raleway)',
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '56px',
              letterSpacing: '-1px',
              marginBottom: '16px',
            }}
          >
            Your Journey to
            <span style={{ color: '#FF6229' }}> Sales <br /> Mastery</span> Unveiled
          </h2>

          <p style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '28px',
            color: 'rgba(255,244,228,0.8)',
            maxWidth: '557px',
            margin: '0 auto',
          }}>
            Embark on this comprehensive 21-day journey, where each day is strategically crafted to elevate your sales skills, from mindset transformation to mastering the art of closing and beyond. Your path to sales mastery starts here.
          </p>
        </motion.div>

        {/* Top 2 Modules (Day 1-4, Day 5-8) */}
        <div style={{ display: 'flex', gap: '25vw', width: '80vw', margin: '0 auto 194px auto', justifyContent: 'center' }}>
          {modules.slice(0, 2).map((mod, index) => {
            const isFirst = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  flex: 1,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  maxWidth: '320px',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Connecting SVG Line (Horizontal) */}
                {isFirst && (
                  <>
                    <svg 
                      style={{
                        position: 'absolute',
                        top: '65px', 
                        left: '100px', 
                        width: 'calc(100% - 100px + 25.3vw)', 
                        height: '8px',
                        overflow: 'visible',
                        zIndex: -1,
                      }}
                    >
                      <line 
                        x1="0" 
                        y1="0" 
                        x2="100%" 
                        y2="0" 
                        stroke="#FF6229" 
                        strokeWidth="8" 
                      />
                    </svg>

                    {/* Connecting Vertical Line (From middle of horizontal line to next section) */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '60px',
                        left: 'calc(50% + 50px + 14vw)',
                        width: '8px',
                        height: 'calc(100% - 60px + 195px)',
                        backgroundColor: '#FF6229',
                        zIndex: -1,
                      }}
                    />
                  </>
                )}

                {/* Image top */}
                <div style={{ width: isFirst ? '250px' : '150px', borderRadius: '8px', overflow: 'hidden', marginBottom: '8px' }}>
                  <img 
                    src={isFirst ? lapi1Img : noteGif} 
                    alt={`Module ${mod.days}`} 
                    style={{ width: '100%', display: 'block', objectFit: 'cover' }} 
                  />
                </div>
                
                {/* Day Badge */}
                <div style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  color: '#FF6229',
                  fontWeight: 700,
                  fontSize: '18px',
                  width: 'fit-content',
                  textAlign: 'center',
                }}>
                  Day {mod.days}
                </div>
                
                {/* Title & Desc */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{
                    fontFamily: 'var(--font-raleway)',
                    fontWeight: 600,
                    fontSize: '30px',
                    color: '#FFFFFF',
                  }}>
                    {mod.title || "Title to be added"}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-raleway)',
                    fontWeight: 500,
                    fontSize: '13px',
                    lineHeight: '24px',
                    color: 'rgba(255,255,255,0.7)',
                  }}>
                    {mod.desc || "Description to be added..."}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Modules List (Day 9-10 onwards) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '60vw', margin: '0 auto', position: 'relative' }}>
          
          {/* Rotated background for the lower section */}
          <div style={{
            position: 'absolute',
            top: '-10vh',
            bottom: '-10vh',
            left: '-20vw',
            right: '-20vw',
            zIndex: -2,
            overflow: 'hidden',
            pointerEvents: 'none',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10vh, black calc(100% - 10vh), transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10vh, black calc(100% - 10vh), transparent 100%)',
          }}>
            <div style={{
               width: '100%',
               height: '100%',
               backgroundImage: `url(${salesmasteryImg})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               transform: 'scale(1.5) rotate(90deg)',
               opacity: 0.2,
               filter: 'blur(20px)',
            }} />
          </div>

          {/* Connecting Curved Line (Left Side Bracket) */}
          <div 
            style={{
              position: 'absolute',
              top: '155px', // Centers on the first module's left edge
              bottom: '155px', // Centers on the last module's left edge
              left: '-80px', // Stretches left by 60px
              width: '80px', 
              borderLeft: '8px solid #FF6229',
              borderTop: '8px solid #FF6229',
              borderBottom: '8px solid #FF6229',
              borderTopLeftRadius: '32px',
              borderBottomLeftRadius: '32px',
              zIndex: -1,
            }}
          />

          {modules.slice(2).map((mod, index) => {
            const absoluteIndex = index + 2;

            return (
              <motion.div
                key={absoluteIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{
                  display: 'flex',
                  gap: '80px',
                  padding: '24px',
                  background: '#000000',
                  border: 'none',
                  borderRadius: '16px',
                  alignItems: 'flex-start',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Special Layout (Index >= 2) */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'flex-start' }}>
                  <p style={{
                    color: '#FF6229',
                    fontWeight: 700,
                    fontSize: '18px',
                    fontFamily: 'var(--font-raleway)'
                  }}>
                    Day {mod.days}
                  </p>
                  <p style={{
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '30px',
                    fontFamily: 'var(--font-raleway)'
                  }}>
                    {mod.title || "Title to be added"}
                  </p>
                  <p style={{
                    color: '#FFFFFF',
                    fontWeight: 500,
                    fontSize: '13px',
                    lineHeight: '1.4',
                    fontFamily: 'var(--font-raleway)'
                  }}>
                    {mod.desc || "Description to be added..."}
                  </p>
                </div>

                <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={lapi2Img} alt="Laptop" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
