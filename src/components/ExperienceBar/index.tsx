import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import { Container, CurrentExperience } from './styles'

export const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToTheNextLevel } = useContext(
    ChallengeContext
  )

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToTheNextLevel

  return (
    <Container>
      <span>0 xp</span>
      <CurrentExperience>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </CurrentExperience>
      <span>{experienceToTheNextLevel} xp</span>
    </Container>
  )
}
