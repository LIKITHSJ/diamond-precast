import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "products", label: "Products" },
  { to: "process", label: "Process" },
  { to: "gallery", label: "Gallery" },
  { to: "owners", label: "Owners" },
  { to: "contact", label: "Contact" },
];

const callContacts = [
  { name: "Rangaswamy GB", number: "+918884842088" },
  { name: "Dinesh", number: "+918884842388" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);
  const callRef = useRef(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (callRef.current && !callRef.current.contains(e.target)) {
        setCallDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={600}
          className="navbar-logo"
          aria-label="Diamond Precast Home"
        >
          <img
            src="/images/logo.png"
            alt="Diamond Precast Logo"
            style={{ height: 40, width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-80}
              spy={true}
              activeClass="nav-link-active"
              onSetActive={() => setActiveSection(link.to)}
              className={`nav-link ${
                activeSection === link.to ? "nav-link-active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call Button with Dropdown */}
        <div ref={callRef} style={{ position: "relative" }}>
          <button
            className="navbar-cta"
            onClick={() => setCallDropdownOpen((prev) => !prev)}
            aria-label="Call Diamond Precast"
            aria-expanded={callDropdownOpen}
            style={{ cursor: "pointer" }}
          >
            <Phone size={16} />
            <span>Call Now</span>
            <ChevronDown
              size={14}
              style={{
                transition: "transform 0.25s",
                transform: callDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
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
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  background: "#0D1F5C",
                  border: "1px solid rgba(232,119,34,0.35)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
                  minWidth: "180px",
                  zIndex: 1100,
                }}
              >
                {callContacts.map((contact, i) => (
                  <a
                    key={contact.number}
                    href={`tel:${contact.number}`}
                    onClick={() => setCallDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 16px",
                      color: "#E87722",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      borderBottom:
                        i < callContacts.length - 1
                          ? "1px solid rgba(232,119,34,0.15)"
                          : "none",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(232,119,34,0.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <Phone size={14} />
                    {contact.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            role="navigation"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="nav-link-active"
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Call Contacts */}
            <div className="mobile-menu-cta" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {callContacts.map((contact) => (
                <a
                  key={contact.number}
                  href={`tel:${contact.number}`}
                  className="btn-primary"
                  aria-label={`Call ${contact.name}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}
                >
                  <Phone size={16} />
                  <span>{contact.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
