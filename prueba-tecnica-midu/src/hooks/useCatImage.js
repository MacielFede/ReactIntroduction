import { useEffect, useState } from 'react'
const CAT_PREFIX_URL = 'https://cataas.com'

export function useCatImage ({ factFrase }) {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (!factFrase) return

    const firstWords = factFrase.split(' ', 2).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWords}?json=true`)
      .then(res => res.json())
      .then(image => {
        const { url } = image
        setImageUrl(CAT_PREFIX_URL + url)
      })
  }, [factFrase])
  return { imageUrl }
}
