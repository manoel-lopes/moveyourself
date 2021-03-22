import { useContext } from 'react'

import { CountdownContext } from '../../../contexts/CountdownContext'

import { Container } from './styles'

export const Clock: React.FC = () => {
  const { minutes, seconds } = useContext(CountdownContext)

  const covertTimeToString = (time: number) => String(time).padStart(2, '0')

  const [minuteLeft, minuteRight] = covertTimeToString(minutes).split('')
  const [secondLeft, secondRight] = covertTimeToString(seconds).split('')

  return (
    <Container>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </Container>
  )
}
