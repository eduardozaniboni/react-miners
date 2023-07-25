import './Game.css'

const Game = ({ verifyBomb, squares, difficulty }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container'>
      <h1>Dificuldade: {difficulty}</h1>
      <div className='bombSquares'>
        {squares.map((value, index) => (
          <button
            key={index}
            className='square'
            onClick={() => {
              verifyBomb(value, index)
            }}
          >
            <span className='item'>{value}</span>
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='valueForm'>
        <input className='valueInput' type="text" name="value" id="value" />
        <button>Jogar!</button>
      </form>
    </div>
  )
}

export default Game