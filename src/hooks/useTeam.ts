import { useState, useEffect } from 'react'
import { teamAPI } from '../services/api'
import type { TeamMember } from '../types/database'

export const useTeam = () => {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true)
        const data = await teamAPI.getTeamMembers()
        setTeam(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchTeam()
  }, [])

  return { team, loading, error }
}