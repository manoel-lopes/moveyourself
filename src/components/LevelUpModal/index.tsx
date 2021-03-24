import { useContext } from 'react'

import close from '../../public/icons/close.svg'
import levelup from '../../public/icons/levelup.svg'

import { ChallengeContext } from '../../contexts/ChallengeContext'
import { Container, Header } from './styles'

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelModal } = useContext(ChallengeContext)

  return (
    <Container>
      <div>
        <Header url={levelup}>{level}</Header>
        <strong>Parabéns</strong>
        <p>Você alcançou um level novo!</p>

        <button type="button" onClick={closeLevelModal}>
          <img src={close} alt="Fechar Modal" />
        </button>
      </div>
    </Container>
  )
}
