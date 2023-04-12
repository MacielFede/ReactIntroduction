export const Square = ({ children, updateBoard, index, isSelected }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const clickHandler = () => {
    updateBoard(index)
  }

  return (
    <div onClick={clickHandler} className={className}>
      {children}
    </div>
  )
}
