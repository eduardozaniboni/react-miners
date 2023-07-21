const GameOver = ({ resetGame }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={resetGame}>Recomeçar Jogo!</button>
    </div>
  )
}

export default GameOver