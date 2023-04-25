import { getRandomFact } from '../services/facts'
import { useEffect, useState } from 'react'

export function useCatFact () {
  const [factFrase, setFactFrase] = useState(null)
  const refreshFact = () => {
    getRandomFact().then(newFact => setFactFrase(newFact))
  }

  useEffect(refreshFact, [])
  return { factFrase, refreshFact }
}
