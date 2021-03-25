import { useContext } from 'react'

import { CountdownContext } from '../../../contexts/CountdownContext'

import { Button, Img, TimeLeft, TimeFinished, TimeLeftBar } from './styles'

export const StarCycleButton: React.FC = () => {
  const { startCountdown } = useContext(CountdownContext)

  return (
    <Button onClick={startCountdown}>
      Iniciar ciclo
      <Img src="/icons/start-cycle.svg" alt="Start cycle" />
    </Button>
  )
}

export const QuitCycleButton: React.FC = () => {
  const { resetCountdown, timeLeft } = useContext(CountdownContext)

  return (
    <Button isActive onClick={resetCountdown}>
      Abandonar ciclo
      <Img src="/icons/quit-cycle.svg" alt="Quit cycle" />
      <TimeLeftBar>
        <TimeLeft style={{ width: `${timeLeft}%` }} />
      </TimeLeftBar>
    </Button>
  )
}

export const FinishedCycleButton: React.FC = () => (
  <Button disabled>
    Ciclo encerrado
    <Img src="/icons/finished-cycle.svg" alt="Finished cycle" />
    <TimeFinished />
  </Button>
)
