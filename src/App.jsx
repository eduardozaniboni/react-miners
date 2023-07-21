import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: 'startWindow' },
  { id: 2, name: 'gameWindow' },
  { id: 3, name: 'endWindow' }
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const endGame = () => {
    setGameStage(stages[2].name)
  }

  const resetGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === 'startWindow' && <StartScreen startGame={startGame} />}
      {gameStage === 'gameWindow' && <Game endGame={endGame} />}
      {gameStage === 'endWindow' && <GameOver resetGame={resetGame} />}
    </div>
  )
}

export default App
