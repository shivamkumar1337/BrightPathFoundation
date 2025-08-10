import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryImage {
  id: number;
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  category: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, category }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % images.length 
      : selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📷</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Images Found</h3>
        <p className="text-gray-600">
          {category === 'all' 
            ? "No images available at the moment."
            : `No images found in the ${category} category.`
          }
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => openModal(image, index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM10 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM10 10a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{image.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{image.location}</span>
                <span>{new Date(image.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeModal}
          onNext={() => navigateImage('next')}
          onPrev={() => navigateImage('prev')}
          currentIndex={selectedIndex + 1}
          totalImages={images.length}
        />
      )}
    </>
  );
};

export default ImageGallery;