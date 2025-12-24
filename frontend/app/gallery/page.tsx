'use client';

import OutputBlock from '../../components/OutputBlock';
import ImageGallery from '../../components/ImageGallery';
import { Image as ImageIcon, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';

// Certificates
const certificates = [
  { src: '/images/certificates/c1.jpeg', alt: 'Certificate 1', title: 'Certificate 1' },
  { src: '/images/certificates/c2.jpeg', alt: 'Certificate 2', title: 'Certificate 2' },
  { src: '/images/certificates/c3.jpeg', alt: 'Certificate 3', title: 'Certificate 3' },
  { src: '/images/certificates/c4.jpeg', alt: 'Certificate 4', title: 'Certificate 4' },
  { src: '/images/certificates/c5.jpeg', alt: 'Certificate 5', title: 'Certificate 5' },
  { src: '/images/certificates/c6.jpeg', alt: 'Certificate 6', title: 'Certificate 6' },
];

// Internship Certificates
const internshipCertificates = [
  { src: '/images/certificates/i1.jpeg', alt: 'Internship Certificate 1', title: 'Internship Certificate 1' },
  { src: '/images/certificates/i2.jpeg', alt: 'Internship Certificate 2', title: 'Internship Certificate 2' },
  { src: '/images/certificates/i3.jpeg', alt: 'Internship Certificate 3', title: 'Internship Certificate 3' },
  { src: '/images/certificates/i4.jpeg', alt: 'Internship Certificate 4', title: 'Internship Certificate 4' },
];

// Academic Results
const academicResults = [
  { src: '/images/certificates/10th.jpeg', alt: '10th Standard Result', title: '10th Standard Result' },
  { src: '/images/certificates/12th.jpeg', alt: '12th Standard Result', title: '12th Standard Result' },
];

// All images combined
const allImages = [...certificates, ...internshipCertificates, ...academicResults];

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<2 | 3 | 4>(3);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'certificates' | 'internship' | 'academic'>('all');

  const getCurrentImages = () => {
    switch (selectedCategory) {
      case 'certificates':
        return certificates;
      case 'internship':
        return internshipCertificates;
      case 'academic':
        return academicResults;
      default:
        return allImages;
    }
  };

  return (
    <OutputBlock>
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <ImageIcon size={48} style={{ color: '#00ff00' }} />
            <div>
              <h2 className="text-3xl font-bold mb-2 animate-glow" style={{ 
                color: '#00ff00',
                textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
              }}>
                {'>'} IMAGE GALLERY
              </h2>
              <p className="text-terminalGray text-sm animate-flicker">
                $ Loading gallery images... [COMPLETE]
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'all' ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: selectedCategory === 'all' ? '#00ff00' : '#888888' }}
            >
              <ImageIcon size={18} />
              All ({allImages.length})
            </button>
            <button
              onClick={() => setSelectedCategory('certificates')}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'certificates' ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: selectedCategory === 'certificates' ? '#00ff00' : '#888888' }}
            >
              <Award size={18} />
              Certificates ({certificates.length})
            </button>
            <button
              onClick={() => setSelectedCategory('internship')}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'internship' ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: selectedCategory === 'internship' ? '#00ff00' : '#888888' }}
            >
              <Briefcase size={18} />
              Internship ({internshipCertificates.length})
            </button>
            <button
              onClick={() => setSelectedCategory('academic')}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'academic' ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: selectedCategory === 'academic' ? '#00ff00' : '#888888' }}
            >
              <GraduationCap size={18} />
              Academic ({academicResults.length})
            </button>
          </div>

          {/* View Mode Controls */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setViewMode(2)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                viewMode === 2 ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: viewMode === 2 ? '#00ff00' : '#888888' }}
            >
              2 Columns
            </button>
            <button
              onClick={() => setViewMode(3)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                viewMode === 3 ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: viewMode === 3 ? '#00ff00' : '#888888' }}
            >
              3 Columns
            </button>
            <button
              onClick={() => setViewMode(4)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                viewMode === 4 ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: viewMode === 4 ? '#00ff00' : '#888888' }}
            >
              4 Columns
            </button>
          </div>
        </div>

        <ImageGallery images={getCurrentImages()} columns={viewMode} />

        <div className="mt-8 p-4 rounded-lg border-2" style={{ borderColor: '#00bfff', backgroundColor: 'rgba(0, 191, 255, 0.05)' }}>
          <p className="text-terminalGray text-sm">
            <span className="text-terminalGreen font-bold">{'$'}</span> Tip: Images ko click karke fullscreen mode me dekh sakte hain. 
            Arrow keys se navigate kar sakte hain.
          </p>
        </div>
      </div>
    </OutputBlock>
  );
}

