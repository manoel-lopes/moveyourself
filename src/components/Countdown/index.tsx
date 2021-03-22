import { useContext } from 'react'

import { CountdownContext } from '../../contexts/CountdownContext'

import { Clock } from './Clock'

import {
  FinishedCycleButton,
  QuitCycleButton,
  StarCycleButton
} from './Buttons'

export const Countdown: React.FC = () => {
  const { hasFinished, isActive } = useContext(CountdownContext)

  return (
    <div>
      <Clock />

      {hasFinished ? (
        <FinishedCycleButton />
      ) : (
        <>{isActive ? <QuitCycleButton /> : <StarCycleButton />}</>
      )}
    </div>
  )
}
