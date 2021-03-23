import { useContext } from 'react'

import { CountdownContext } from '../../contexts/CountdownContext'
import { ChallengeContext } from '../../contexts/ChallengeContext'

import { ChallengeNotActive } from './ChallengeNotActive'
import { ChallengeActive } from './ChallengeActive'

import { Container } from './styles'

export const ChallengeBox: React.FC = () => {
  const { 
    activeChallenge,
    resetChallenge,
    completeChallenge } = useContext(ChallengeContext)

  const { resetCountdown } = useContext(CountdownContext)

  const handleChallengeSucceeded = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive
          amount={activeChallenge.amount}
          description={activeChallenge.description}
          type={activeChallenge.type}
          handleChallengeSucceeded={handleChallengeSucceeded}
          handleChallengeFailed={handleChallengeFailed}
        />
      ) : (
        <ChallengeNotActive />
      )}
    </Container>
  )
}
