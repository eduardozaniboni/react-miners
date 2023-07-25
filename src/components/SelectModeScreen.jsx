import ButtonDescription from './ButtonDescription'
import './SelectModeScreen.css'

const SelectMode = ({ modes, modeSelected }) => {
  return (
    <div className='select'>
      <div>
        <h1>Selecione o Modo de Jogo</h1>
        <p>Ao selecionar um dos modos de jogo abaixo, ele irá influenciar na quantidade de bombas que será gerada aleatoriamente no campo.</p>
      </div>
      <div className='buttonDesc'>
        {modes.map((mode) => (
          <ButtonDescription
            key={mode.id}
            name={mode.name}
            percentage={mode.percentage}
            modeSelected={() => modeSelected(mode.id, mode.name, mode.percentage)}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectMode