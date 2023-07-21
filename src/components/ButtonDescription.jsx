import './ButtonDescription.css'

const ButtonDescription = ({ name, percentage, modeSelected }) => {
  return (
    <div className='buttonDescription'>
      <button onClick={modeSelected}>{name}</button>
      <p>Porcentagem de Bombas: {percentage}</p>
    </div>
  )
}

export default ButtonDescription