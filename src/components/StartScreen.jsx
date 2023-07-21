import './StartScreen.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className='startScreen'>
      <h1>React Miners</h1>
      <h2>Clique aqui para iniciar o miners!</h2>
      <button onClick={startGame}>Começar Jogo!</button>
    </div>
  )
}

export default StartScreen