import { Container, SucceededButton, FailedButton } from './styles'

type OwnProps = {
  type: 'body' | 'eye'
  description: string
  amount: number
  handleChallengeSucceeded: () => void
  handleChallengeFailed: () => void
}

export const ChallengeActive: React.FC<OwnProps> = ({
  amount,
  description,
  type,
  handleChallengeSucceeded,
  handleChallengeFailed
}) => {
  return (
    <Container>
      <header>Ganhe {amount} px</header>

      <main>
        <img src={`/icons/${type}.svg`} />
        <strong>Novo desafio</strong>
        <p>{description}</p>
      </main>

      <footer>
        <SucceededButton onClick={handleChallengeSucceeded}>
          Completei
        </SucceededButton>

        <FailedButton onClick={handleChallengeFailed}>Falhei</FailedButton>
      </footer>
    </Container>
  )
}
