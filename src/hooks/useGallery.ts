// hooks/useGallery.ts
import { useState, useEffect } from 'react';
import { galleryAPI } from '../services/api';
import type { GalleryImage } from '../types/database';

export const useGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await galleryAPI.getAllImages();
        console.log('Fetched gallery images:', data);
        setImages(data);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch gallery images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading, error };
};

export const useFeaturedImages = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await galleryAPI.getFeaturedImages();
        setImages(data);
      } catch (err) {
        console.error('Error fetching featured images:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch featured images');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedImages();
  }, []);

  return { images, loading, error };
};

export const useImagesByCategory = (category: string) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImagesByCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await galleryAPI.getImagesByCategory(category);
        setImages(data);
      } catch (err) {
        console.error('Error fetching images by category:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch images by category');
      } finally {
        setLoading(false);
      }
    };

    if (category && category !== 'all') {
      fetchImagesByCategory();
    }
  }, [category]);

  return { images, loading, error };
};

export const useGalleryWithFilters = (filters: {
  category?: string;
  location?: string;
  featured?: boolean;
  limit?: number;
}) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImagesWithFilters = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await galleryAPI.getImagesWithFilters(filters);
        setImages(data);
      } catch (err) {
        console.error('Error fetching images with filters:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImagesWithFilters();
  }, [filters.category, filters.location, filters.featured, filters.limit]);

  return { images, loading, error };
};