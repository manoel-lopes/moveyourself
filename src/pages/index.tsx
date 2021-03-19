import { CompleteChallenges } from '../components/CompleteChallenges'
import { ExperienceBar } from '../components/ExperienceBar'
import { ChallengeBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import { Profile } from '../components/Profile'

import { CountdownProvider } from '../contexts/CountdownContext'

import { Container } from '../styles/pages/Container'

const Home = () => {
  return (
    <Container>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </Container>
  )
}

export default Home
