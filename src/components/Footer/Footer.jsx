import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowUp } from 'lucide-react'

const quickLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About Us' },
  { to: 'products', label: 'Products' },
  { to: 'process', label: 'Process' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'owners', label: 'Our Team' },
  { to: 'contact', label: 'Contact' },
]

const productLinks = [
  'Ready Made Compound Wall',
  'M25 Grade Slab',
  'M30 Grade Column',
]

const socialLinks = [
  
  { icon: Instagram, href: 'https://www.instagram.com/diamond_precast_/', label: 'Instagram' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand col */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img
                  src="/images/logo.png"
                  alt="Diamond Precast Logo"
                  style={{ height: 50, width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <p className="footer-brand-desc">
                Karnataka's most trusted precast compound wall and concrete structure specialists. 8+ years of delivering strength, quality and timely completion.
              </p>
              <div className="footer-socials">
                {socialLinks.map(s => {
                  const Icon = s.icon
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={s.label}>
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <div className="footer-heading">Quick Links</div>
              <ul className="footer-links">
                {quickLinks.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} smooth duration={600} offset={-80} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <div className="footer-heading">Our Products</div>
              <ul className="footer-links">
                {productLinks.map(p => (
                  <li key={p}>
                    <Link to="products" smooth duration={600} offset={-80} className="footer-link">
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="footer-heading">Get in Touch</div>
              <div className="footer-contacts">
                <a href="tel:+918884842088" className="footer-contact-row" aria-label="Call us">
                  <Phone size={14} color="var(--color-accent)" />
                  <span>+91 88848 42088</span>
                </a>
                <a href="https://wa.me/918884842088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-row"
                  aria-label="WhatsApp us"
                >
                  <MessageCircle size={14} color="var(--color-accent)" />
                  <span>WhatsApp Us</span>
                </a>
                <a href="mailto:diamondprecast96@gmail.com" className="footer-contact-row" aria-label="Email us">
                  <Mail size={14} color="var(--color-accent)" />
                  <span>diamondprecast96@gmail.com</span>
                </a>
                <div className="footer-contact-row">
                  <MapPin size={14} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  <span>Thimmasandra, Tarahunase, Chikkajala Hobli, Bengaluru North – 562157, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} Diamond Precast. All rights reserved. | Serving Karnataka Since 2022
            </p>
            <button
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #060f18;
        }
        .footer-main { padding: 80px 0 48px; }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 48px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .footer-brand-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .social-link {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          transition: all 0.25s;
        }
        .social-link:hover {
          background: var(--color-accent);
          color: var(--color-primary);
          border-color: var(--color-accent);
        }
        .footer-heading {
          font-size: 0.8125rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-accent);
          margin-bottom: 20px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.55);
          cursor: pointer;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--color-accent); }
        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.55);
          transition: color 0.2s;
          line-height: 1.5;
        }
        a.footer-contact-row:hover { color: var(--color-accent); }
        .footer-contact-row svg { margin-top: 2px; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 20px 0;
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
        }
        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          background: rgba(244,163,0,0.12);
          border: 1px solid rgba(244,163,0,0.2);
          border-radius: 50px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-accent);
          transition: all 0.25s;
        }
        .back-to-top:hover {
          background: var(--color-accent);
          color: var(--color-primary);
          border-color: var(--color-accent);
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 580px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-main { padding: 56px 0 32px; }
        }
      `}</style>
    </footer>
  )
}