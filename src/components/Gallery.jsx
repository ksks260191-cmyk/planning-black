import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: 'smooth'
      });
    }
  };

  // List of all campaign images
  const galleryImages = [
    'IMG-20251026-WA0004.jpg',
    'IMG-20251026-WA0005.jpg',
    'IMG-20251026-WA0006.jpg',
    'IMG-20251026-WA0007.jpg',
    'IMG-20251026-WA0008.jpg',
    'IMG-20251026-WA0009.jpg',
    'IMG-20251026-WA0010.jpg',
    'IMG-20251026-WA0011.jpg',
    'IMG-20251026-WA0012.jpg',
    'IMG-20251026-WA0013.jpg',
    'IMG-20251026-WA0014.jpg',
    'IMG-20251026-WA0015.jpg',
    'IMG-20251026-WA0016.jpg',
    'IMG-20251026-WA0017.jpg',
    'IMG-20251026-WA0018.jpg',
    'IMG-20251026-WA0019.jpg',
    'IMG-20251026-WA0020.jpg',
    'IMG-20251026-WA0021.jpg',
    'IMG-20251026-WA0022.jpg',
    'IMG-20251026-WA0023.jpg',
    'IMG-20251026-WA0024.jpg',
    'WhatsApp Image 2025-10-26 at 20.28.21_4c2595b9.jpg',
    'WhatsApp Image 2025-10-26 at 20.28.22_addc6214.jpg',
    'WhatsApp Image 2025-10-26 at 20.28.22_d549074b.jpg',
    'WhatsApp Image 2025-10-26 at 20.28.29_0bbd0011.jpg',
    'WhatsApp Image 2025-10-26 at 20.28.30_d3af309a.jpg'
  ];

  const openLightbox = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  React.useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, currentIndex]);



  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Campaign</span> <span className="text-white">Gallery</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Explore our successful campaigns, events, and projects. Each image tells a story of excellence, innovation, and successful partnerships with our clients.
          </p>
        </motion.div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg flex-shrink-0"
                style={{ minWidth: '280px', width: '280px' }}
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={`/campain/${image}`}
                  alt={`Campaign ${index + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">View Image</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl max-h-full">
              <img
                src={`/campain/${selectedImage}`}
                alt="Campaign"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close Button */}
              <Button
                onClick={closeLightbox}
                size="icon"
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white border-none"
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-none"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;