import styled from 'styled-components'

export const Container = styled('div')`
  background: #48494b;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background: ${({ theme: { colors } }) => colors.dark};
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: ${({ theme: { effects } }) => effects.shadow};
    text-align: center;
    position: relative;

    strong {
      font-size: 2.25rem;
      color: ${({ theme: { colors } }) => colors.title};
    }

    p {
      font-size: 1.25rem;
      color: ${({ theme: { colors } }) => colors.text};
      margin-top: 0.25rem;
    }

    button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      background: transparent;
      border: 0;
    }
  }
`
export const Header = styled('header')`
  font-size: 8.75rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.blue};
  background: ${({ url }: { url: string }) => `url(${url}) no-repeat center `};
  background-size: contain;
`
