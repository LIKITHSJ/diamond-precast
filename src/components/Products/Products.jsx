import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, Phone, ChevronDown } from 'lucide-react'
import { products } from '../../data/products'

const contacts = [
  { name: 'Rangaswamy GB', number: '918884842088' },
  { name: 'Dinesh', number: '918884842388' },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const dropdownRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [callDropdownOpen, setCallDropdownOpen] = useState(false)

  useEffect(() => {
    const clickHandler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCallDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', clickHandler)
    return () => document.removeEventListener('mousedown', clickHandler)
  }, [])

  return (
    <motion.article
      ref={ref}
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      aria-label={product.title}
    >
      <div className="product-body">
        <div className="product-specs-tag">{product.specs}</div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-materials">
          <div className="materials-label">Materials Used</div>
          <ul className="materials-list">
            {product.materials.map(m => (
              <li key={m} className="material-item">
                <CheckCircle size={14} color="var(--color-accent)" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #f0f0f0',
            paddingTop: '12px',
            marginTop: 'auto',
            position: 'relative',
          }}
        >
          <a
            href={`https://wa.me/918884842088?text=Hi%20Diamond%20Precast%2C%20I%20want%20to%20enquire%20about%20your%20${encodeURIComponent(product.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="product-cta"
            style={{ borderTop: 'none', padding: '0' }}
            aria-label={`Enquire about ${product.title}`}
          >
            Enquire Now <ArrowRight size={16} />
          </a>

          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setCallDropdownOpen(prev => !prev)}
              style={{
                background: 'var(--color-accent, #E87722)',
                color: 'var(--color-primary, #0D1F5C)',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 14px',
                fontWeight: '700',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 6px rgba(232,119,34,0.2)',
              }}
            >
              <Phone size={13} />
              Call Now
              <ChevronDown
                size={12}
                style={{
                  transition: 'transform 0.2s',
                  transform: callDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            <AnimatePresence>
              {callDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    bottom: 'calc(100% + 8px)',
                    right: 0,
                    background: '#0D1F5C',
                    border: '1px solid rgba(232,119,34,0.3)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    minWidth: '170px',
                    zIndex: 50,
                  }}
                >
                  {contacts.map((contact, i) => (
                    <a
                      key={`prod-call-${contact.number}`}
                      href={`tel:+${contact.number}`}
                      onClick={() => setCallDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 14px',
                        color: '#FFF',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        borderBottom: i < contacts.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(232,119,34,0.2)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <Phone size={12} style={{ color: '#E87722' }} />
                      {contact.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" className="section-padding products-section" aria-label="Our Products">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Our Products</div>
          <h2 className="section-title">Precision-Engineered<br />Precast Solutions</h2>
          <p className="section-subtitle">
            Every product in our portfolio is factory-cast to exacting standards, tested for strength and delivered ready to install — saving you time and cost on site.
          </p>
        </motion.div>

        <div className="products-grid">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .products-section {
          background: var(--color-light-gray);
        }
        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .section-header .section-label {
          justify-content: center;
        }
        .section-header .section-label::before {
          display: none;
        }
        .section-header .section-subtitle {
          margin: 0 auto;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .product-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
        }
        .product-body {
          padding: 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .product-specs-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .product-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .product-desc {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .product-materials {
          margin-bottom: 24px;
          flex: 1;
        }
        .materials-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-primary);
          margin-bottom: 10px;
        }
        .materials-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .material-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8125rem;
          color: #374151;
        }
        .product-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-primary);
          padding: 12px 0;
          transition: color 0.2s, gap 0.2s;
        }
        .product-cta:hover { color: var(--color-accent); gap: 12px; }
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}