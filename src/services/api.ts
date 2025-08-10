import { supabase } from '../lib/supabase'
import type { Content, Project, TeamMember, GalleryImage, ContactMessage } from '../types/database'

// Content API
export const contentAPI = {
  // Get content by type
  async getContentByType(type: string): Promise<Content | null> {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('type', type)
      .eq('status', 'published')
      .single()

    if (error) {
      console.error('Error fetching content:', error)
      return null
    }
    return data
  },

  // Get all content
  async getAllContent(): Promise<Content[]> {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('status', 'published')
      .order('sort_order', { ascending: true })

    if (error) {
      console.error('Error fetching all content:', error)
      return []
    }
    return data || []
  }
}

// Projects API
export const projectsAPI = {
  // Get featured projects
  async getFeaturedProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(4)

    if (error) {
      console.error('Error fetching featured projects:', error)
      return []
    }
    return data || []
  },

  // Get all projects
  async getAllProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects:', error)
      return []
    }
    return data || []
  },

  // Get projects by category
  async getProjectsByCategory(category: string): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects by category:', error)
      return []
    }
    return data || []
  },

  // Get single project by slug
  async getProjectBySlug(slug: string): Promise<Project | null> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      console.error('Error fetching project:', error)
      return null
    }
    return data
  },

  // Get related projects (same category, excluding current project)
  async getRelatedProjects(category: string, excludeId: string, limit: number = 3): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .neq('id', excludeId)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) {
      console.error('Error fetching related projects:', error)
      return []
    }
    return data || []
  },

  // Get projects by status
  async getProjectsByStatus(status: string): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('status', status)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects by status:', error)
      return []
    }
    return data || []
  },

  // Get projects with filters
  async getProjectsWithFilters(filters: {
    category?: string
    status?: string
    location?: string
    limit?: number
    offset?: number
  }): Promise<Project[]> {
    let query = supabase
      .from('projects')
      .select('*')

    if (filters.category) {
      query = query.eq('category', filters.category)
    }

    if (filters.status) {
      query = query.eq('status', filters.status)
    }

    if (filters.location) {
      query = query.ilike('location', `%${filters.location}%`)
    }

    query = query.order('created_at', { ascending: false })

    if (filters.limit) {
      query = query.limit(filters.limit)
    }

    if (filters.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching projects with filters:', error)
      return []
    }
    return data || []
  },

  // Search projects
  async searchProjects(searchTerm: string): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,location.ilike.%${searchTerm}%`)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error searching projects:', error)
      return []
    }
    return data || []
  }
}

// Team API
export const teamAPI = {
  // Get all active team members
  async getTeamMembers(): Promise<TeamMember[]> {
    const { data, error } = await supabase
      .from('team')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    if (error) {
      console.error('Error fetching team members:', error)
      return []
    }
    return data || []
  }
}

// Gallery API
export const galleryAPI = {
  // Get all gallery images
  async getAllImages(): Promise<GalleryImage[]> {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error) {
      console.error('Error fetching gallery images:', error)
      return []
    }
    return data || []
  },

  // Get images by category
  async getImagesByCategory(category: string): Promise<GalleryImage[]> {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('category', category)
      .order('sort_order', { ascending: true })

    if (error) {
      console.error('Error fetching images by category:', error)
      return []
    }
    return data || []
  },

  // Get featured images
  async getFeaturedImages(): Promise<GalleryImage[]> {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('is_featured', true)
      .order('sort_order', { ascending: true })

    if (error) {
      console.error('Error fetching featured images:', error)
      return []
    }
    return data || []
  }
}

// Contact API
export const contactAPI = {
  // Submit contact form
  async submitContactForm(formData: ContactMessage) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([formData])
      .select()

    if (error) {
      console.error('Error submitting contact form:', error)
      throw error
    }
    return data
  }
}