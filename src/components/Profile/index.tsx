import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import arrowLevel from '../../assets/icons/arrow-level.svg'

import { Container } from './styles'

export const Profile: React.FC = () => {
  const { level } = useContext(ChallengeContext)

  return (
    <Container>
      <img src="https://github.com/manoel-lopes.png" alt="Manoel Lopes" />
      <div>
        <strong>Manoel Lopes</strong>
        <p>
          <img src={arrowLevel} alt="level" />
          Nível {level}
        </p>
      </div>
    </Container>
  )
}
