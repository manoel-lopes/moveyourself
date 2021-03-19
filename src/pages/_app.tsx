import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import { ChallengeProvider } from '../contexts/ChallengeContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChallengeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChallengeProvider>
    </ThemeProvider>
  )
}

export default MyApp
