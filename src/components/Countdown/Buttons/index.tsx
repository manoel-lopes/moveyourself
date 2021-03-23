import { useContext } from 'react'

import { CountdownContext } from '../../../contexts/CountdownContext'

import finishedCycle from '../../../assets/icons/finished-cycle.svg'
import startCycle from '../../../assets/icons/start-cycle.svg'
import quitCycle from  '../../../assets/icons/quit-cycle.svg'

import { Button, Img, TimeLeft, TimeFinished, TimeLeftBar } from './styles'

export const StarCycleButton: React.FC = () => {
  const { startCountdown } = useContext(CountdownContext)

  return (
    <Button onClick={startCountdown}>
      Iniciar ciclo
      <Img src={startCycle} alt="Start cycle" />
    </Button>
  )
}

export const QuitCycleButton: React.FC = () => {
  const { resetCountdown, timeLeft } = useContext(CountdownContext)

  return (
    <Button isActive onClick={resetCountdown}>
      Abandonar ciclo
      <Img src={quitCycle} alt="Quit cycle" />
      <TimeLeftBar>
        <TimeLeft style={{ width: `${timeLeft}%` }} />
      </TimeLeftBar>
    </Button>
  )
}

export const FinishedCycleButton: React.FC = () => (
  <Button disabled>
    Ciclo encerrado
    <Img src={finishedCycle} alt="Finished cycle" />
    <TimeFinished />
  </Button>
)
