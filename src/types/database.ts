// Database types for Supabase tables
export interface Content {
  id: string
  type: string
  title?: string
  subtitle?: string
  content?: string
  metadata?: any
  status: string
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  slug?: string
  category: 'education' | 'disaster-relief' | 'sports' | 'food-distribution'
  description?: string
  content_body?: string
  featured_image?: string
  gallery_images?: string[]
  location?: string
  start_date?: string
  end_date?: string
  budget?: number
  beneficiaries: number
  impact_metrics?: any
  status: 'planning' | 'active' | 'completed' | 'on-hold'
  is_featured: boolean
  tags?: string[]
  created_at: string
  updated_at: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio?: string
  photo_url?: string
  social_links?: any
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface GalleryImage {
  id: string
  title?: string
  description?: string
  image_url: string
  thumbnail_url?: string
  alt_text?: string
  category: string
  location?: string
  taken_date?: string
  tags?: string[]
  is_featured: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  subject?: string
  message: string
  is_read?: boolean
  created_at?: string
}