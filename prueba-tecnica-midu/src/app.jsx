import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { factFrase, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ factFrase })

  return (
    <>
      <h1>Kitties app</h1>
      <button onClick={refreshFact}>Get new fact and image.</button>
      {factFrase ? <p>{factFrase}</p> : ''}
      {imageUrl ? (
        <img
          src={`${imageUrl}`}
          alt={`Image extracted from a website using the first 2 words of the frase`}
        />
      ) : (
        ''
      )}
    </>
  )
}
