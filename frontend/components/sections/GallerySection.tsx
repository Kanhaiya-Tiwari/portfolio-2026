'use client';
import { motion } from 'framer-motion';
import ImageGallery from '../ImageGallery';

const galleryImages = [
  { src: '/images/certificates/c1.jpeg', alt: 'Certificate 1' },
  { src: '/images/certificates/c2.jpeg', alt: 'Certificate 2' },
  { src: '/images/certificates/c3.jpeg', alt: 'Certificate 3' },
  { src: '/images/certificates/c4.jpeg', alt: 'Certificate 4' },
  { src: '/images/certificates/c5.jpeg', alt: 'Certificate 5' },
  { src: '/images/certificates/c6.jpeg', alt: 'Certificate 6' },
  { src: '/images/certificates/i1.jpeg', alt: 'Experience 1' },
  { src: '/images/certificates/i2.jpeg', alt: 'Experience 2' },
  { src: '/images/certificates/i3.jpeg', alt: 'Experience 3' },
  { src: '/images/certificates/i4.jpeg', alt: 'Experience 4' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding relative">
      <div className="container-xl">
        <div className="text-center mb-16">
          <span className="section-label mb-4">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proof of <span className="text-[#07CB6C]">Work & Certifications</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* We use the original ImageGallery component, but wrapped in motion */}
          <div className="glass-card rounded-[2rem] p-8 border border-[#07CB6C]/20">
            <ImageGallery images={galleryImages} columns={4} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
