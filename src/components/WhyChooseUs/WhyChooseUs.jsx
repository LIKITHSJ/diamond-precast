import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Users, DollarSign, Zap, Truck, Heart, Award, CheckSquare } from 'lucide-react'

const reasons = [
  { icon: Shield, title: 'Premium Materials', desc: 'We use only IS 456:2000 compliant cement, steel and aggregate. No shortcuts, ever.' },
  { icon: Users, title: 'Experienced Workers', desc: 'Our installation crews average 10+ years in precast construction across Karnataka.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Transparent quotes with no hidden extras. Factory-direct pricing saves you 20–30%.' },
  { icon: Zap, title: 'Fast Installation', desc: 'Precast construction is up to 60% faster than conventional masonry — your project finishes sooner.' },
  { icon: Truck, title: 'Modern Equipment', desc: 'Hydraulic cranes, laser levels and precision transport rigs for safe, accurate delivery and placement.' },
  { icon: Heart, title: 'Customer Satisfaction', desc: '5000+ happy clients across 3000+ areas. Our reputation is built on referrals and repeat business.' },
  { icon: Award, title: 'Quality Assurance', desc: 'Every element is factory-tested before dispatch. We issue a quality certificate with every project.' },
  { icon: CheckSquare, title: 'End-to-End Delivery', desc: 'One call covers everything — design, manufacturing, transport and full site installation.' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-choose-us" className="section-padding why-section" aria-label="Why Choose Diamond Precast">
      <div className="container">
        <div className="why-grid">
          {/* Left: sticky content */}
          <motion.div
            className="why-content"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            ref={ref}
          >
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Eight Reasons<br />Builders Trust<br />Diamond Precast
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>
              We didn't become Karnataka's most trusted precast partner by accident. Every commitment below is backed by 8+ years of on-site proof.
            </p>
            {/* REPLACE IMAGE: Site/team showcase photo for why-choose-us section */}
            <div className="why-image-wrap">
  <img
    src="/images/visitingcard.jpeg"
    alt="Diamond Precast quality construction work"
    className="why-img"
    loading="lazy"
  />
</div>
          </motion.div>

          {/* Right: reason cards */}
          <div className="why-cards">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div
                  key={r.title}
                  className="why-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="why-card-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="why-card-title">{r.title}</div>
                    <p className="why-card-desc">{r.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .why-section {
          background: var(--color-primary);
          position: relative;
          overflow: hidden;
        }
        .why-section::after {
          content: '';
          position: absolute;
          bottom: -300px;
          left: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(244,163,0,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 80px;
          align-items: start;
        }
        .why-content { position: sticky; top: 100px; }
        .why-image-wrap {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.4);
  background: #0a1730;
  display: flex;
  align-items: center;
  justify-content: center;
}
.why-img {
  width: 100%;
  height: 240px;
  object-fit: contain;
}
        }
        .why-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }
        .why-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .why-card {
          display: flex;
          gap: 14px;
          padding: 22px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
        }
        .why-card:hover {
          background: rgba(244,163,0,0.08);
          border-color: rgba(244,163,0,0.25);
          transform: translateY(-3px);
        }
        .why-card-icon {
          width: 44px;
          height: 44px;
          background: rgba(244,163,0,0.12);
          color: var(--color-accent);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .why-card-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 4px;
        }
        .why-card-desc {
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: 1fr; gap: 48px; }
          .why-content { position: static; }
          .why-img { height: 300px; }
        }
        @media (max-width: 580px) {
          .why-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}