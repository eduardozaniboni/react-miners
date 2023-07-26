import './Game.css'

const Game = ({ verifyBomb, squares, difficulty, scores }) => {

  return (
    <div className='container'>
      <h1>Dificuldade: {difficulty}</h1>
      <h2>Pontos: {scores}</h2>
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
      {/* <form onSubmit={handleSubmit} className='scoreForm'>
        <input
          className='scoreInput'
          type="number"
          name="score"
          required
          onChange={(e) => defineScore(e.target.value)}
          value={scores}
          autoComplete='false'
        />
        <button>Jogar!</button>
      </form> */}
    </div>
  )
}

export default Game