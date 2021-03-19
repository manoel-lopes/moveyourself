import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px){
  html{
    font-size: 93.75%
  }
}

@media(max-width: 720px){
  html{
    font-size: 87.5%
  }
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}

body, h1, button, textarea, button {
  font: 400 1rem Inter, sans-serif;
  font-weight: 500;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`
export default GlobalStyle
