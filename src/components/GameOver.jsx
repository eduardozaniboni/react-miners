import './GameOver.css'

const GameOver = ({ resetGame, score }) => {
  return (
    <div className='resetScreen'>
      <h1>Fim de Jogo!</h1>
      <h2>A sua pontuação foi: <span>100</span></h2>
      <button onClick={resetGame}>Recomeçar Jogo!</button>
    </div>
  )
}

export default GameOver