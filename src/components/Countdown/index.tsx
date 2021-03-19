import { useContext } from 'react'

import { CountdownContext } from '../../contexts/CountdownContext'

import { CountdownClock } from './CountdownClock'

import {
  FinishedCycleButton,
  QuitCycleButton,
  StarCycleButton
} from './CountdownButtons'

export const Countdown: React.FC = () => {
  const { hasFinished, isActive } = useContext(CountdownContext)

  return (
    <div>
      <CountdownClock />

      {hasFinished ? (
        <FinishedCycleButton />
      ) : (
        <>{isActive ? <QuitCycleButton /> : <StarCycleButton />}</>
      )}
    </div>
  )
}
