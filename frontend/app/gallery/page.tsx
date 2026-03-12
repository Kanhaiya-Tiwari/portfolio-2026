'use client';

import OutputBlock from '../../components/OutputBlock';
import ImageGallery from '../../components/ImageGallery';
import { Image as ImageIcon, Award, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    title: 'Amazon Web Services Solutions Architect - Associate',
    issuer: 'Udemy',
    issued: 'Dec 2025',
    link: 'https://ude.my/UC-4d5e52bc-5ab4-4165-9b3d-164b53f583d0',
    color: '#ff8800',
  },
  {
    title: 'DevOps',
    issuer: 'Tutedude',
    issued: 'Dec 2025',
    link: null,
    color: '#00bfff',
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    issued: 'Aug 2025',
    link: 'https://credly.com/badges/a3026eab-10d3-4b9b-84c3-06269298290f/linked_in_profile',
    color: '#00ff00',
  },
  {
    title: 'Deloitte Australia - Cyber Job Simulation',
    issuer: 'Forage',
    issued: 'Jul 2025',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_nuyXj8CjCLkHmEuhX_1752981202221_completion_certificate.pdf',
    color: '#ff5555',
  },
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    issued: '',
    link: null,
    color: '#ff00ff',
  },
];

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
                {'>'} MEDIA GALLERY
              </h2>
              <p className="text-terminalGray text-lg animate-flicker font-medium">
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
              <ImageIcon size={20} />
              All ({allImages.length})
            </button>
            <button
              onClick={() => setSelectedCategory('certificates')}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'certificates' ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: selectedCategory === 'certificates' ? '#00ff00' : '#888888' }}
            >
              <Award size={20} />
              Certificates ({certificates.length})
            </button>
            <button
              onClick={() => setSelectedCategory('internship')}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'internship' ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: selectedCategory === 'internship' ? '#00ff00' : '#888888' }}
            >
              <Briefcase size={20} />
              Internship ({internshipCertificates.length})
            </button>
            <button
              onClick={() => setSelectedCategory('academic')}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'academic' ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: selectedCategory === 'academic' ? '#00ff00' : '#888888' }}
            >
              <GraduationCap size={20} />
              Academic ({academicResults.length})
            </button>
          </div>

          {/* View Mode Controls */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setViewMode(2)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 font-bold ${
                viewMode === 2 ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: viewMode === 2 ? '#00ff00' : '#888888' }}
            >
              2 Columns
            </button>
            <button
              onClick={() => setViewMode(3)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 font-bold ${
                viewMode === 3 ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: viewMode === 3 ? '#00ff00' : '#888888' }}
            >
              3 Columns
            </button>
            <button
              onClick={() => setViewMode(4)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 font-bold ${
                viewMode === 4 ? 'border-terminalGreen bg-terminalGreen/20' : 'border-terminalGray'
              }`}
              style={{ color: viewMode === 4 ? '#00ff00' : '#888888' }}
            >
              4 Columns
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#00bfff' }}>
            {'>'} CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border-2 clickable transition-all duration-300 hover:scale-[1.01]"
                style={{
                  borderColor: cert.color,
                  backgroundColor: 'rgba(0, 0, 0, 0.45)',
                  boxShadow: `0 0 10px ${cert.color}40`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-bold" style={{ color: cert.color }}>
                      {cert.issuer}{cert.issued ? ` • ${cert.issued}` : ''}
                    </div>
                    <div className="text-terminalGray text-base font-medium">
                      {cert.title}
                    </div>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold clickable"
                      style={{ color: cert.color }}
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ImageGallery images={getCurrentImages()} columns={viewMode} />

        <div className="mt-8 p-4 rounded-lg border-2" style={{ borderColor: '#00bfff', backgroundColor: 'rgba(0, 191, 255, 0.05)' }}>
          <p className="text-terminalGray text-base font-normal">
            <span className="text-terminalGreen font-bold">{'$'}</span> Tip: Images ko click karke fullscreen mode me dekh sakte hain. 
            Arrow keys se navigate kar sakte hain.
          </p>
        </div>
      </div>
    </OutputBlock>
  );
}

