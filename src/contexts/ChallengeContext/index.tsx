import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'

import challenges from '../../data/challenges.json'
import { LevelUpModal } from '../../components/LevelUpModal'

import notifications from '../../public/notification.mp3'

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type OwnProps = {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
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
  closeLevelModal: () => void
}

export const ChallengeContext = createContext({} as OwnData)

export const ChallengeProvider: React.FC<OwnProps> = props => {
  const [level, setLevel] = useState(props.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    props.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengeCompleted] = useState(
    props.challengesCompleted ?? 0
  )

  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge

    setActiveChallenge(challenge)

    new Audio(notifications).play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  const resetChallenge = () => setActiveChallenge(null)

  const closeLevelModal = () => setIsLevelUpModalOpen(false)

  const completeChallenge = () => {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToTheNextLevel) {
      finalExperience -= experienceToTheNextLevel
      levelUp()
      setIsLevelUpModalOpen(true)
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
        completeChallenge,
        closeLevelModal
      }}
    >
      {props.children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}
