import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode
} from 'react'

import { ChallengeContext } from '../ChallengeContext'

type OwnData = {
  timeLeft: number
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

export const CountdownContext = createContext({} as OwnData)

export const CountdownProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const { startNewChallenge } = useContext(ChallengeContext)

  const initialTime = 0.1 * 60
  let timeout: NodeJS.Timeout
  const startPoint = 1.8

  const [time, setTime] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = () => {
    setIsActive(true)
    setTimeLeft(startPoint)
  }

  const resetCountdown = () => {
    clearTimeout(timeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(initialTime)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      timeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  useEffect(() => {
    const factor = 100 / initialTime
    let current = timeLeft + factor

    if (time > 0) {
      if (current > startPoint && current <= 100) {
        setTimeLeft(current)
      } else if (current <= startPoint) {
        setTimeLeft(startPoint)
      }
    }
  }, [time])

  return (
    <CountdownContext.Provider
      value={{
        timeLeft,
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
