import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMove = event => {
      // We get the curser position, from the event pointerMove.
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // This is executed when the dependencies change (before executing the above code), and when the component is disassembled
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <>
      <div
        style={{
          display: `${enabled ? 'block' : 'none'}`,
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Unfollow' : 'Follow'} curser
      </button>
    </>
  )
}

export default App
