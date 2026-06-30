import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { Link } from 'react-scroll'
import CountUp from 'react-countup'
import './Hero.css'

const stats = [
  { value: 5000, suffix: '+', label: 'Projects Completed' },
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 3000, suffix: '+', label: 'Areas Served' },
]

const contacts = [
  { name: 'Rangaswamy GB', number: '918884842088' },
  { name: 'Dinesh', number: '918884842388' },
]

function StatItem({ stat }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="hero-stat">
      <div className="hero-stat-value">
        {inView ? (
          <CountUp end={stat.value} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        <span className="hero-stat-accent">{stat.suffix}</span>
      </div>
      <div className="hero-stat-label">{stat.label}</div>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const callRef = useRef(null)
  const whatsappRef = useRef(null)

  const [callDropdownOpen, setCallDropdownOpen] = useState(false)
  const [whatsappDropdownOpen, setWhatsappDropdownOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    const handler = (e) => {
      if (callRef.current && !callRef.current.contains(e.target)) {
        setCallDropdownOpen(false)
      }
      if (whatsappRef.current && !whatsappRef.current.contains(e.target)) {
        setWhatsappDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <section id="home" ref={heroRef} className="hero-section" aria-label="Hero">
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="hero-bg-img"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/images/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </motion.div>

      <motion.div className="hero-content" style={{ opacity: fadeOut }}>
        <div className="container">
          <div className="hero-inner">

            <motion.div
              className="hero-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="hero-label-dot" />
              Trusted Across Karnataka Since 2022
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Diamond
              <span className="hero-title-accent">Precast</span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Premium Precast Compound Walls &amp; Concrete Structures
            </motion.p>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              Serving Karnataka with Quality, Strength and Timely Delivery
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginTop: '24px' }}
            >
              {/* Call Now Dropdown */}
              <div ref={callRef} style={{ position: 'relative' }}>
                <button
                  className="hero-btn hero-btn-call"
                  onClick={() => {
                    setCallDropdownOpen(prev => !prev)
                    setWhatsappDropdownOpen(false)
                  }}
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    background: '#E87722',
                    color: '#0D1F5C',
                    fontWeight: 700,
                    padding: '14px 28px',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(244,163,0,0.38)',
                  }}
                >
                  <Phone size={18} />
                  Call Now
                  <ChevronDown
                    size={16}
                    style={{
                      transition: 'transform 0.25s',
                      transform: callDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <AnimatePresence>
                  {callDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 10px)',
                        left: 0,
                        background: '#0D1F5C',
                        border: '1px solid rgba(232,119,34,0.35)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                        minWidth: '200px',
                        zIndex: 100,
                      }}
                    >
                      {contacts.map((contact, i) => (
                        <a
                          key={`call-${contact.number}`}
                          href={`tel:+${contact.number}`}
                          onClick={() => setCallDropdownOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '13px 18px',
                            color: '#FFF',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            borderBottom: i < contacts.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,119,34,0.2)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <Phone size={14} style={{ color: '#E87722' }} />
                          {contact.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* WhatsApp Dropdown */}
              <div ref={whatsappRef} style={{ position: 'relative' }}>
                <button
                  className="hero-btn hero-btn-wa"
                  onClick={() => {
                    setWhatsappDropdownOpen(prev => !prev)
                    setCallDropdownOpen(false)
                  }}
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    background: '#25D366',
                    color: '#FFF',
                    fontWeight: 700,
                    padding: '14px 28px',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                  }}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                  <ChevronDown
                    size={16}
                    style={{
                      transition: 'transform 0.25s',
                      transform: whatsappDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <AnimatePresence>
                  {whatsappDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 10px)',
                        left: 0,
                        background: '#0D1F5C',
                        border: '1px solid rgba(232,119,34,0.35)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                        minWidth: '200px',
                        zIndex: 100,
                      }}
                    >
                      {contacts.map((contact, i) => (
                        <a
                          key={`wa-${contact.number}`}
                          href={`https://wa.me/${contact.number}?text=Hi%20Diamond%20Precast%2C%20I%20am%20interested%20in%20your%20precast%20services.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setWhatsappDropdownOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '13px 18px',
                            color: '#FFF',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            borderBottom: i < contacts.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(37, 211, 102, 0.2)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <MessageCircle size={14} style={{ color: '#25D366' }} />
                          {contact.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} />
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <Link to="about" smooth duration={700} offset={-80} aria-label="Scroll to About">
          <motion.div
            className="hero-scroll-icon"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}