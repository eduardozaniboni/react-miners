import './StartScreen.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className='startScreen'>
      <h1>React Miners</h1>
      <p>Clique aqui para iniciar o miners!</p>
      <button onClick={startGame}>Começar Jogo!</button>
    </div>
  )
}

export default StartScreen