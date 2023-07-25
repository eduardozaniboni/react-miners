// React
import { useState, useCallback, useEffect } from 'react'

// Styles
import './App.css'

// Components
import StartScreen from './components/StartScreen'
import SelectModeScreen from './components/SelectModeScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: 'startWindow' },
  { id: 2, name: 'selectWindow' },
  { id: 3, name: 'GameWindow' },
  { id: 4, name: 'endWindow' }
]

const modes = [
  { id: 1, name: 'Muito Fácil', percentage: 10 },
  { id: 2, name: 'Fácil', percentage: 20 },
  { id: 3, name: 'Médio', percentage: 30 },
  { id: 4, name: 'Difícil', percentage: 40 },
  { id: 5, name: 'Muito Difícil', percentage: 50 },
  { id: 6, name: 'Hiper Difícil', percentage: 60 },
  { id: 7, name: 'Mega Difícil', percentage: 70 },
  { id: 8, name: 'Omega Difícil', percentage: 80 },
  { id: 9, name: 'Impossível', percentage: 90 },
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [gameMode, setGameMode] = useState()
  const [difficulty, setDifficulty] = useState('')

  const [squares, setSquares] = useState([])
  const [clickedSquares, setClickedSquares] = useState([])
  const [scores, setScores] = useState(0)

  // generate a empty array
  const generateEmptyArray = () => {
    const emptyArray = Array.from({ length: 25 }, () => "")
    return emptyArray
  }

  // generate bombs positions
  const generateBombsPositions = (percentage) => {
    const numberOfBombs = Math.floor(((25 * percentage) / 100))
    return numberOfBombs
  }

  // insert random bombs
  const insertRandomBomb = (array, bombNumbers) => {
    const arrayLength = array.length
    const bombIndices = new Set()

    while (bombIndices.size < bombNumbers) {
      const randomIndex = Math.floor(Math.random() * arrayLength)
      bombIndices.add(randomIndex)
    }

    bombIndices.forEach(index => {
      array[index] = '💣'
    })

    return array
  }

  // starts the miners game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // select mode
  const modeSelected = (selectedMode, nameDifficulty, percentage) => {
    setGameMode(selectedMode)
    console.log(nameDifficulty)
    setDifficulty(nameDifficulty)

    const emptyArray = generateEmptyArray()
    const bombsPositions = generateBombsPositions(percentage)
    const arrayWithBombsInserteds = insertRandomBomb(emptyArray, bombsPositions)

    setSquares(arrayWithBombsInserteds)
    setGameStage(stages[2].name)
  }

  // process the miners
  const verifyBomb = (value, index) => {

    setClickedSquares([...clickedSquares, index])

    if (value === '💣') {
      console.log('você clicou na bomba');
      setGameStage(stages[3].name)
    }

    if (value !== '💣') {
      if (clickedSquares.includes(index)) {
        return alert('Não é possível selecionar o mesmo campo!')
      }
      console.log('você clicou fora da bomba')
      
      const baseMultiplier = 0.3
      const maxMultiplier = 5
      const multiplier = baseMultiplier + (maxMultiplier - baseMultiplier) * (gameMode - 1) / 8

      const points = 1
      const newScore = scores + points * multiplier
      console.log(newScore)

      setScores(newScore)

    }
  }

  // restarts the game
  const resetGame = () => {
    setClickedSquares([])
    setScores(0)
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === 'startWindow' &&
        <StartScreen
          startGame={startGame}
        />
      }

      {gameStage === 'selectWindow' &&
        <SelectModeScreen
          modes={modes}
          modeSelected={modeSelected}
        />
      }

      {gameStage === 'GameWindow' &&
        <Game
          difficulty={difficulty}
          verifyBomb={verifyBomb}
          squares={squares}
        />
      }

      {gameStage === 'endWindow' &&
        <GameOver
          resetGame={resetGame}
        />
      }
    </div>
  )
}

export default App
