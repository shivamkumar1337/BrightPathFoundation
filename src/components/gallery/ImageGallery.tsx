// components/gallery/ImageGallery.tsx
import React, { useState } from 'react';
import ImageModal from './ImageModal';
import type { GalleryImage } from '../../types/database';

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryName = (cat: string) => {
    const categoryNames: { [key: string]: string } = {
      'education': 'Education',
      'disaster-relief': 'Disaster Relief',
      'sports': 'Sports',
      'food-distribution': 'Food Distribution',
      'events': 'Events',
      'team': 'Team',
      'general': 'General'
    };
    return categoryNames[cat] || cat;
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📷</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Images Found</h3>
        <p className="text-gray-600">
          {category === 'all' 
            ? "No images available at the moment. Check back soon!"
            : `No images found in the ${getCategoryName(category)} category.`
          }
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <h4 className="text-xl font-semibold text-gray-900">
          {category === 'all' ? 'All Photos' : `${getCategoryName(category)} Photos`}
        </h4>
        <span className="text-gray-600">
          {images.length} photo{images.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => openModal(image, index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.thumbnail_url || image.image_url}
                alt={image.alt_text || image.title || 'Gallery image'}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/placeholder/400/300";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {image.is_featured && (
                <div className="absolute top-2 right-2">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                {image.title || 'Untitled'}
              </h3>
              {image.description && (
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{image.description}</p>
              )}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {image.location || 'Unknown'}
                </span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {image.taken_date ? formatDate(image.taken_date) : formatDate(image.created_at)}
                </span>
              </div>
              {image.tags && image.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {image.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {image.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{image.tags.length - 2}
                    </span>
                  )}
                </div>
              )}
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