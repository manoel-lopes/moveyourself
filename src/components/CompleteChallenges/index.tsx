import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import { Container } from './styles'

export const CompleteChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengeContext)

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}
