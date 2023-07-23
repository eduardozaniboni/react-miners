import './Game.css'

const Game = ({ verifyBomb, squares, difficulty }) => {
  return (
    <div className='container'>
      <h1>Dificuldade: {difficulty}</h1>
      <div className='bombSquares'>
        {squares.map((value, index) => (
          <button
            key={index}
            className='square'
            onClick={verifyBomb}
          >
            <span className='item'>{value}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Game