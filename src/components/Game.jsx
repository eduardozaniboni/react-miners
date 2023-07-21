const Game = ({ endGame }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={endGame}>Fim de Jogo!</button>
    </div>
  )
}

export default Game