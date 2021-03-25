import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'
import { Container, Header } from './styles'

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelModal } = useContext(ChallengeContext)

  return (
    <Container>
      <div>
        <Header url="/icons/close.svg">{level}</Header>
        <strong>Parabéns</strong>
        <p>Você alcançou um level novo!</p>

        <button type="button" onClick={closeLevelModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </Container>
  )
}
