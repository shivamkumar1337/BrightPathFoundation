import { useState, useEffect } from 'react'
import { projectsAPI } from '../services/api'
import type { Project } from '../types/database'

export const useFeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const data = await projectsAPI.getFeaturedProjects()
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}

export const useAllProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const data = await projectsAPI.getAllProjects()
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}

export const useProject = (slug: string | undefined) => {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) {
      setError('No project slug provided')
      setLoading(false)
      return
    }

    const fetchProject = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await projectsAPI.getProjectBySlug(slug)
        setProject(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch project')
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [slug])

  return { project, loading, error }
}

export const useRelatedProjects = (category: string, currentProjectId: string) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRelatedProjects = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await projectsAPI.getRelatedProjects(category, currentProjectId)
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch related projects')
      } finally {
        setLoading(false)
      }
    }

    fetchRelatedProjects()
  }, [category, currentProjectId])

  return { projects, loading, error }
}

export const useProjectsByCategory = (category: string) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjectsByCategory = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await projectsAPI.getProjectsByCategory(category)
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects')
      } finally {
        setLoading(false)
      }
    }

    fetchProjectsByCategory()
  }, [category])

  return { projects, loading, error }
}