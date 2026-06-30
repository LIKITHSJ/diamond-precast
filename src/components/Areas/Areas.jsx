import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, ChevronDown } from 'lucide-react'
import { areas } from '../../data/areas'

const contacts = [
  { name: 'Rangaswamy GB', number: '918884842088' },
  { name: 'Dinesh', number: '918884842388' },
]

export default function Areas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const callRef = useRef(null)
  const [callOpen, setCallOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (callRef.current && !callRef.current.contains(e.target)) setCallOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <section id="areas" className="section-padding areas-section" aria-label="Areas We Serve">
      <div className="container">
        <motion.div
          ref={ref}
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Service Coverage</div>
          <h2 className="section-title">
            We Deliver to<br />25+ Locations Across<br />South India
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our fleet of specialised transport vehicles and site crews are deployed across Karnataka, and expanding into Tamil Nadu and Andhra Pradesh.
          </p>
        </motion.div>

        <motion.div
          className="areas-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {areas.map((area, i) => (
            <motion.div
              key={area.id}
              className="area-chip"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              aria-label={`${area.name}, ${area.state}`}
            >
              <MapPin size={14} color="var(--color-accent)" strokeWidth={2.5} />
              <span className="area-name">{area.name}</span>
              <span className="area-state">{area.state !== 'Karnataka' ? area.state : ''}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="areas-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>Don't see your area? We may still be able to serve you.</p>

          <div ref={callRef} style={{ position: 'relative' }}>
            <button
              className="btn-primary"
              onClick={() => setCallOpen(prev => !prev)}
              style={{ cursor: 'pointer', border: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
              aria-expanded={callOpen}
            >
              <MapPin size={16} />
              Check Availability
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 0.25s',
                  transform: callOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            <AnimatePresence>
              {callOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
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
                      key={`areas-call-${contact.number}`}
                      href={`tel:+${contact.number}`}
                      onClick={() => setCallOpen(false)}
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
        </motion.div>
      </div>

      <style>{`
        .areas-section { background: var(--color-light-gray); }
        .section-label { justify-content: center; }
        .section-label::before { display: none; }
        .areas-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 56px;
        }
        .area-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 18px;
          background: var(--color-white);
          border: 1.5px solid #e5e7eb;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-primary);
          box-shadow: var(--shadow-sm);
          transition: all 0.25s ease;
          cursor: default;
        }
        .area-chip:hover {
          background: var(--color-primary);
          color: var(--color-white);
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .area-chip:hover svg { color: var(--color-accent); }
        .area-state {
          font-size: 0.7rem;
          font-weight: 500;
          color: #9ca3af;
          margin-left: 2px;
        }
        .area-chip:hover .area-state { color: rgba(255,255,255,0.6); }
        .areas-cta {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .areas-cta p {
          font-size: 1rem;
          color: #6b7280;
        }
      `}</style>
    </section>
  )
}