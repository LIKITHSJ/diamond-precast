import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight, ChevronDown } from 'lucide-react'

const contacts = [
  { name: 'Rangaswamy GB', number: '918884842088' },
  { name: 'Dinesh', number: '918884842388' },
]

const otherInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'diamondprecast96@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:diamondprecast96@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Thimmasandra, Tarahunase, Chikkajala Hobli, Bengaluru North – 562157, Karnataka',
    sub: 'Factory & Office',
    href: 'https://maps.google.com/?q=Diamond+Precast+Bengaluru',
  },
]

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'By Appointment' },
]

function ContactDropdownCard({ icon: Icon, label, sub, type }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        className="contact-card"
        onClick={() => setOpen(prev => !prev)}
        style={{ width: '100%', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.05)', textAlign: 'left' }}
        aria-expanded={open}
      >
        <div className="contact-card-icon">
          <Icon size={22} />
        </div>
        <div className="contact-card-body">
          <div className="contact-card-label">{label}</div>
          <div className="contact-card-value">Rangaswamy GB &amp; Dinesh</div>
          <div className="contact-card-sub">{sub}</div>
        </div>
        <div className="contact-card-arrow">
          <ChevronDown size={16} style={{ transition: 'transform 0.25s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              background: '#0D1F5C',
              border: '1px solid rgba(232,119,34,0.35)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
              zIndex: 100,
            }}
          >
            {contacts.map((contact, i) => (
              <a
                key={`${type}-${contact.number}`}
                href={type === 'call' ? `tel:+${contact.number}` : `https://wa.me/${contact.number}?text=Hi%20Diamond%20Precast%2C%20I%20need%20a%20quote%20for%20precast%20services.`}
                target={type === 'whatsapp' ? '_blank' : undefined}
                rel={type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                onClick={() => setOpen(false)}
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
                onMouseEnter={e => e.currentTarget.style.background = type === 'call' ? 'rgba(232,119,34,0.2)' : 'rgba(37,211,102,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <Icon size={14} style={{ color: type === 'call' ? '#E87722' : '#25D366' }} />
                {contact.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const ctaCallRef = useRef(null)
  const ctaWaRef = useRef(null)
  const [ctaCallOpen, setCtaCallOpen] = useState(false)
  const [ctaWaOpen, setCtaWaOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (ctaCallRef.current && !ctaCallRef.current.contains(e.target)) setCtaCallOpen(false)
      if (ctaWaRef.current && !ctaWaRef.current.contains(e.target)) setCtaWaOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <section id="contact" className="section-padding contact-section" aria-label="Contact Diamond Precast">
      <div className="container">
        <motion.div
          ref={ref}
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--color-accent)' }}>Contact Us</div>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
            Get Your Free Quote<br />Today
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
            Tell us your project requirements and we'll give you an accurate quote within one business day. No obligations, no hidden charges.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="contact-cards">
              <ContactDropdownCard icon={Phone} label="Phone" sub="Mon–Sat, 8am–7pm" type="call" />
              <ContactDropdownCard icon={MessageCircle} label="WhatsApp" sub="Quick response guaranteed" type="whatsapp" />

              {otherInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-card" aria-label={`${info.label}: ${info.value}`}>
                    <div className="contact-card-icon">
                      <Icon size={22} />
                    </div>
                    <div className="contact-card-body">
                      <div className="contact-card-label">{info.label}</div>
                      <div className="contact-card-value">{info.value}</div>
                      <div className="contact-card-sub">{info.sub}</div>
                    </div>
                    <div className="contact-card-arrow">
                      <ArrowRight size={16} />
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="hours-box">
              <div className="hours-header">
                <Clock size={18} color="var(--color-accent)" />
                <span>Business Hours</span>
              </div>
              {hours.map(h => (
                <div key={h.day} className="hours-row">
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-map-col"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="map-wrap">
              <iframe
                title="Diamond Precast Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.946512251636!2d77.5859042!3d13.1657725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1f00743f6629%3A0x879dd96c59063389!2sDiamond%20precast%20compound%20wall!5e0!3m2!1sen!2sin!4v1782464079138!5m2!1sen!2sin"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Diamond Precast location on Google Maps"
              />
              <div className="map-info-chip">
                <MapPin size={14} color="var(--color-accent)" />
                <span>Diamond Precast, Bengaluru</span>
              </div>
            </div>

            <div className="cta-box">
              <h3 className="cta-title">Ready to start your project?</h3>
              <p className="cta-sub">Call or WhatsApp us right now for a same-day response and free site visit quote.</p>
              <div className="cta-buttons">
                {/* Call dropdown */}
                <div ref={ctaCallRef} style={{ position: 'relative' }}>
                  <button
                    className="btn-primary"
                    onClick={() => { setCtaCallOpen(p => !p); setCtaWaOpen(false) }}
                    style={{ cursor: 'pointer', border: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <Phone size={16} /> Call Now
                    <ChevronDown size={14} style={{ transition: 'transform 0.25s', transform: ctaCallOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <AnimatePresence>
                    {ctaCallOpen && (
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
                            key={`ctacall-${contact.number}`}
                            href={`tel:+${contact.number}`}
                            onClick={() => setCtaCallOpen(false)}
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

                {/* WhatsApp dropdown */}
                <div ref={ctaWaRef} style={{ position: 'relative' }}>
                  <button
                    onClick={() => { setCtaWaOpen(p => !p); setCtaCallOpen(false) }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 28px',
                      background: '#25D366',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      borderRadius: '50px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-label="WhatsApp Diamond Precast"
                  >
                    <MessageCircle size={16} /> WhatsApp
                    <ChevronDown size={14} style={{ transition: 'transform 0.25s', transform: ctaWaOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <AnimatePresence>
                    {ctaWaOpen && (
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
                            key={`ctawa-${contact.number}`}
                            href={`https://wa.me/${contact.number}?text=Hi%20Diamond%20Precast%2C%20I%20want%20a%20free%20quote%20for%20my%20project.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setCtaWaOpen(false)}
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
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.2)'}
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--color-primary);
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          top: -400px;
          right: -400px;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(244,163,0,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .section-label { justify-content: center; }
        .section-label::before { display: none; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          background: rgba(244,163,0,0.08);
          border-color: rgba(244,163,0,0.25);
        }
        .contact-card-icon {
          width: 48px;
          height: 48px;
          background: rgba(244,163,0,0.12);
          color: var(--color-accent);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-card-body { flex: 1; min-width: 0; }
        .contact-card-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 2px;
        }
        .contact-card-value {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 2px;
          word-break: break-word;
        }
        .contact-card-sub {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
        }
        .contact-card-arrow {
          color: rgba(255,255,255,0.3);
          transition: color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .contact-card:hover .contact-card-arrow {
          color: var(--color-accent);
        }
        .hours-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-md);
          padding: 24px;
        }
        .hours-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: var(--color-white);
          font-size: 0.9375rem;
          margin-bottom: 16px;
        }
        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .hours-row:last-child { border-bottom: none; }
        .hours-day { font-size: 0.8375rem; color: rgba(255,255,255,0.65); }
        .hours-time { font-size: 0.8375rem; font-weight: 600; color: var(--color-accent); }
        .map-wrap {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .map-iframe {
          width: 100%;
          height: 300px;
          border: none;
          display: block;
          filter: brightness(0.85);
        }
        .map-info-chip {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(13,27,42,0.9);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-white);
          white-space: nowrap;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .cta-box {
          background: rgba(244,163,0,0.08);
          border: 1px solid rgba(244,163,0,0.2);
          border-radius: var(--radius-lg);
          padding: 32px;
        }
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 8px;
        }
        .cta-sub {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
          margin-bottom: 24px;
        }
        .cta-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}