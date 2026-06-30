import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, ArrowUp } from 'lucide-react'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  const [showWaMenu, setShowWaMenu] = useState(false)
  const [showCallMenu, setShowCallMenu] = useState(false)

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* WhatsApp button + popup */}
      <AnimatePresence>
        {showWaMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{ position: 'fixed', bottom: '90px', right: '94px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 900 }}
          >
            <a href="https://wa.me/918884842088?text=Hi%20Diamond%20Precast%2C%20I%20am%20interested%20in%20your%20precast%20services." target="_blank" rel="noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '8px 16px', borderRadius: '50px', fontWeight: 700, fontSize: '0.8rem', whiteSpace: 'nowrap', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <MessageCircle size={14} /> Rangaswamy GB
            </a>
            <a href="https://wa.me/918884842388?text=Hi%20Diamond%20Precast%2C%20I%20am%20interested%20in%20your%20precast%20services." target="_blank" rel="noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '8px 16px', borderRadius: '50px', fontWeight: 700, fontSize: '0.8rem', whiteSpace: 'nowrap', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <MessageCircle size={14} /> Dinesh
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => { setShowWaMenu(prev => !prev); setShowCallMenu(false) }}
        className="floating-wa"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="floating-pulse" />
      </motion.button>

      {/* Call button + popup */}
      <AnimatePresence>
        {showCallMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{ position: 'fixed', bottom: '90px', right: '24px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 900 }}
          >
            <a href="tel:+918884842088"
              style={{ background: '#0D1F5C', color: '#E87722', padding: '8px 16px', borderRadius: '50px', fontWeight: 700, fontSize: '0.8rem', whiteSpace: 'nowrap', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', border: '1px solid rgba(232,119,34,0.4)' }}>
              <Phone size={14} /> Rangaswamy GB
            </a>
            <a href="tel:+918884842388"
              style={{ background: '#0D1F5C', color: '#E87722', padding: '8px 16px', borderRadius: '50px', fontWeight: 700, fontSize: '0.8rem', whiteSpace: 'nowrap', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', border: '1px solid rgba(232,119,34,0.4)' }}>
              <Phone size={14} /> Dinesh
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => { setShowCallMenu(prev => !prev); setShowWaMenu(false) }}
        className="floating-call"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call Diamond Precast"
      >
        <Phone size={22} />
      </motion.button>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="floating-top"
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .floating-wa,
        .floating-call,
        .floating-top {
          position: fixed;
          z-index: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          transition: box-shadow 0.3s;
        }
        .floating-wa {
          bottom: 24px;
          right: 94px;
          width: 60px;
          height: 60px;
          background: #25D366;
          color: #fff;
          text-decoration: none;
        }
        .floating-wa:hover { box-shadow: 0 8px 32px rgba(37,211,102,0.5); }
        .floating-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid #25D366;
          animation: wa-pulse 2s infinite;
        }
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .floating-call {
          bottom: 24px;
          right: 24px;
          width: 52px;
          height: 52px;
          background: var(--color-primary);
          border: 2px solid rgba(232,119,34,0.4);
          color: #E87722;
          text-decoration: none;
        }
        .floating-call:hover { box-shadow: 0 8px 24px rgba(13,27,42,0.5); }
        .floating-top {
          bottom: 24px;
          right: 164px;
          width: 48px;
          height: 48px;
          background: var(--color-accent);
          color: var(--color-primary);
          border: none;
        }
        .floating-top:hover { box-shadow: 0 8px 24px rgba(244,163,0,0.45); }
        @media (max-width: 480px) {
          .floating-wa { bottom: 16px; right: 80px; width: 54px; height: 54px; }
          .floating-call { bottom: 16px; right: 16px; width: 46px; height: 46px; }
          .floating-top { bottom: 16px; right: 144px; width: 44px; height: 44px; }
        }
      `}</style>
    </>
  )
}