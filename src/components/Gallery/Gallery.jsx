import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { ZoomIn } from 'lucide-react'
import { galleryImages } from '../../data/gallery'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="section-padding gallery-section" aria-label="Project Gallery">
      <div className="container">
        <motion.div
          ref={ref}
          style={{ textAlign: 'center', marginBottom: '48px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Project Gallery</div>
          <h2 className="section-title">Our Work Speaks<br />For Itself</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
            Browse completed projects from across Karnataka — compound walls, slabs, columns, labour rooms and more.
          </p>
        </motion.div>

        <PhotoProvider
          speed={() => 300}
          easing={type => type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'}
        >
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <PhotoView src={img.src}>
                  <div className="gallery-thumb-wrap" role="button" tabIndex={0} aria-label="View image">
                    <img
                      src={img.thumb}
                      alt=""
                      className="gallery-thumb"
                      loading="lazy"
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-zoom-icon">
                        <ZoomIn size={22} color="white" />
                      </div>
                    </div>
                  </div>
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>

      <style>{`
        .gallery-section { background: var(--color-white); }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .gallery-item {
          width: 100%;
        }
        .gallery-thumb-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          display: block;
          aspect-ratio: 4 / 3;
        }
        .gallery-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 16px;
          transition: transform 0.4s ease;
        }
        .gallery-thumb-wrap:hover .gallery-thumb { transform: scale(1.04); }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13,27,42,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 16px;
        }
        .gallery-thumb-wrap:hover .gallery-overlay { opacity: 1; }
        .gallery-zoom-icon {
          width: 52px;
          height: 52px;
          border: 2px solid rgba(255,255,255,0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .gallery-thumb-wrap:hover .gallery-zoom-icon { transform: scale(1.1); }
        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}