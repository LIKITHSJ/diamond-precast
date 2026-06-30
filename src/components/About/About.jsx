import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Award, CheckCircle } from 'lucide-react'

const pillars = [
  {
    icon: <Target size={22} />,
    title: 'Our Mission',
    text: 'To supply good material and quality products to people, ensuring customer satisfaction, on time workmanship and best service.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Our Vision',
    text: 'To be Karnataka\'s most trusted precast construction partner, expanding quality infrastructure access to every corner of the state.',
  },
  {
    icon: <Award size={22} />,
    title: 'Our Quality Promise',
    text: 'Every element we produce is manufactured in controlled factory conditions and tested per IS 456:2000 before it ever leaves our yard.',
  },
]

const highlights = [
  'Government approved certifications',
  'M-25 & M-30 grade quality standards on every batch',
  '60% faster installation than conventional masonry',
  'End-to-end project delivery from factory to finish',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-white)' }} aria-label="About Diamond Precast">
      <div className="container" ref={ref}>
        <div className="about-grid">
          {/* Image column */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="about-image-wrap">
              {/* REPLACE IMAGE: Company team / factory / site overview photo */}
              <img
                src="public/images/board.jpeg"
                alt="Diamond Precast factory and team"
                className="about-img"
                loading="lazy"
              />
              {/* Floating badge */}
              <div className="about-badge">
                <div className="about-badge-number">8+</div>
                <div className="about-badge-label">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="section-label">About Us</div>
            <h2 className="section-title">
              Karnataka's Premier<br />Precast Specialists
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Founded in 2022, Diamond Precast has grown into Karnataka's most recognised name in precast compound walls and structural concrete elements. With 8+ years of hands-on experience, we combine engineering precision with site-ready reliability.
            </p>
            <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, marginBottom: '32px' }}>
              Our state-of-the-art manufacturing facility at Thimmasandra, Tarahunase, Chikkajala Hobli, Bengaluru North produces precast elements under strict quality controls, ensuring that every wall panel, slab and column that leaves our yard meets and exceeds the structural requirements your project demands.
            </p>

            {/* Highlights */}
            <ul className="about-highlights">
              {highlights.map(h => (
                <li key={h} className="about-highlight-item">
                  <CheckCircle size={18} color="var(--color-accent)" strokeWidth={2.5} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Pillars */}
            <div className="about-pillars">
              {pillars.map(p => (
                <div key={p.title} className="about-pillar">
                  <div className="pillar-icon">{p.icon}</div>
                  <div>
                    <div className="pillar-title">{p.title}</div>
                    <p className="pillar-text">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-image-col { position: relative; }
        .about-image-wrap {
          position: relative;
          border-radius: 24px;
          overflow: visible;
        }
        .about-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: var(--shadow-xl);
        }
        .about-badge {
          position: absolute;
          bottom: -24px;
          right: -24px;
          background: var(--color-accent);
          color: var(--color-primary);
          border-radius: 20px;
          padding: 20px 24px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(244,163,0,0.4);
        }
        .about-badge-number {
          font-family: 'Playfair Display', serif;
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1;
        }
        .about-badge-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
          white-space: nowrap;
        }
        .about-highlights {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 24px;
          margin-bottom: 40px;
        }
        .about-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--color-dark-text);
          line-height: 1.5;
        }
        .about-highlight-item svg { flex-shrink: 0; margin-top: 2px; }
        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .about-pillar {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: var(--color-light-gray);
          border-radius: 16px;
          transition: box-shadow 0.2s;
        }
        .about-pillar:hover { box-shadow: var(--shadow-md); }
        .pillar-icon {
          width: 44px;
          height: 44px;
          background: var(--color-primary);
          color: var(--color-accent);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .pillar-title {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.9375rem;
          margin-bottom: 4px;
        }
        .pillar-text {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-image-col { order: -1; }
          .about-img { height: 380px; }
          .about-badge { right: 16px; bottom: -16px; }
        }
        @media (max-width: 600px) {
          .about-highlights { grid-template-columns: 1fr; }
          .about-img { height: 280px; }
        }
      `}</style>
    </section>
  )
}