import body from '../../../assets/icons/body.svg'
import eye from '../../../assets/icons/eye.svg'

import { Container, SucceededButton, FailedButton } from './styles'

type OwnProps = {
  type: 'body' | 'eye'
  description: string
  amount: number
  resetChallenge: () => void
  completeChallenge: () => void
}

export const ChallengeActive: React.FC<OwnProps> = ({
  amount,
  description,
  type,
  resetChallenge,
  completeChallenge
}) => {
  return (
    <Container>
      <header>Ganhe {amount} px</header>

      <main>
        <img src={type === 'body' ? body : eye} />
        <strong>Novo desafio</strong>
        <p>{description}</p>
      </main>

      <footer>
        <SucceededButton onClick={completeChallenge}>
          Completei
        </SucceededButton>

        <FailedButton onClick={resetChallenge}>
          Falhei
        </FailedButton>
      </footer>
    </Container>
  )
}
