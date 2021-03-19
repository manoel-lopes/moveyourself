import arrowLevelUp from '../../../assets/icons/arrow-level-up.svg'

import { Container } from './styles'

export const ChallengeNotActive: React.FC = () => {
  return (
    <Container>
      <strong>Encerre um ciclo para receber um desafio</strong>
      <p>
        <img src={arrowLevelUp} alt="Level Up" />
        Complete um desafio para elevar seu nível
      </p>
    </Container>
  )
}
