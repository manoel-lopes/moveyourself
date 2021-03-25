import { Container } from './styles'

export const ChallengeNotActive: React.FC = () => {
  return (
    <Container>
      <strong>Encerre um ciclo para receber um desafio</strong>
      <p>
        <img src="/icons/level-up.svg" alt="Level Up" />
        Complete um desafio para subir de level
      </p>
    </Container>
  )
}
