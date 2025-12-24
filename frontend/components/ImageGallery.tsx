'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4`}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer clickable overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: '#00ff00',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
            onClick={() => setSelectedImage(idx)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px #00ff00, 0 0 40px #00ff00';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.3)';
            }}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-terminalGreen text-sm font-bold">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full border-2 border-terminalGreen text-terminalGreen hover:bg-terminalGreen hover:text-black transition-all duration-300"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full border-2 border-terminalGreen text-terminalGreen hover:bg-terminalGreen hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full border-2 border-terminalGreen text-terminalGreen hover:bg-terminalGreen hover:text-black transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative w-full h-[80vh] rounded-lg border-2 border-terminalGreen overflow-hidden" style={{
              boxShadow: '0 0 30px #00ff00, 0 0 60px #00ff00',
            }}>
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            
            {images[selectedImage].title && (
              <p className="text-center text-terminalGreen mt-4 text-xl font-bold">
                {images[selectedImage].title}
              </p>
            )}
            
            <p className="text-center text-terminalGray mt-2 text-sm">
              {selectedImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

