import { createContext, useState, ReactNode, useEffect } from 'react'

import challenges from '../../data/challenges.json'
// import notifications from '../../assets/notifications.mp3'

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type OwnData = {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToTheNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
}

export const ChallengeContext = createContext({} as OwnData)

export const ChallengeProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengeCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge

    setActiveChallenge(challenge)
    
    // new Audio(notifications).play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valend ${challenge.amount}xp!`
      })
    }
  }

  const resetChallenge = () => setActiveChallenge(null)

  const completeChallenge = () => {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToTheNextLevel) {
      finalExperience -= experienceToTheNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengeCompleted(challengesCompleted + 1)
  }

  const experienceFactor = 4
  const experienceToTheNextLevel = Math.pow((level + 1) * experienceFactor, 2)

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToTheNextLevel,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
