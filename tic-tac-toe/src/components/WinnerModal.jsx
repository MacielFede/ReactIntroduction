import { Square } from './Square.jsx'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? "There's a tie!" : 'The winner is:'

  return (
    <section className='winner'>
      <div className='text'>
        <h2> {winnerText}</h2>

        <header className='win'>{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Restart game.</button>
        </footer>
      </div>
    </section>
  )
}
