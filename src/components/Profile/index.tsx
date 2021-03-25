import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'
import { Container } from './styles'

export const Profile: React.FC = () => {
  const { level } = useContext(ChallengeContext)

  return (
    <Container>
      <img src="https://github.com/manoel-lopes.png" alt="Manoel Lopes" />
      <div>
        <strong>Manoel Lopes</strong>
        <p>
          <img src="/icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}
