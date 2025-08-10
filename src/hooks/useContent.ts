import { useState, useEffect } from 'react'
import { contentAPI } from '../services/api'
import type { Content } from '../types/database'

export const useContent = (type: string) => {
  const [content, setContent] = useState<Content | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        const data = await contentAPI.getContentByType(type)
        setContent(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [type])

  return { content, loading, error }
}