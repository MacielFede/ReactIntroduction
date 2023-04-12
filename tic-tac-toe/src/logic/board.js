import { WINNING_COMB } from '../utils'

export const checkWinner = realBoard => {
  for (const comb of WINNING_COMB) {
    const [a, b, c] = comb
    if (
      realBoard[a] && // there's something in the index a
      realBoard[a] === realBoard[b] && // The index b contains the same as the index a
      realBoard[a] === realBoard[c] // The index c contains the same as the index a
    ) {
      return realBoard[a]
    }
  }

  if (realBoard.every(square => square !== null)) return false // If there's no more moves posible, there's a tie

  return null
}
