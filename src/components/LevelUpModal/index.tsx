import { useContext } from 'react'

import close from '../../assets/icons/close.svg'
import levelup from '../../assets/icons/levelup.svg'

import { ChallengeContext } from '../../contexts/ChallengeContext'
import { Container, Header } from './styles'

export const LevelUpModal: React.FC = () => {
  const { level } = useContext(ChallengeContext)

  return (
    <Container>
      <div>
        <Header url={levelup}>{level}</Header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>

        <button type="button">
          <img src={close} alt="Fechar Modal" />
        </button>
      </div>
    </Container>
  )
}
