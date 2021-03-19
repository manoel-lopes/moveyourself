import styled, { DefaultTheme } from 'styled-components'

export const Container = styled('div')`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: ${({ theme: { colors } }) => colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.dark};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme: { colors } }) => colors.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`

export const SucceededButton = styled('button')`
  all: unset;

  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: ${({ theme: { colors } }) => colors.text};

  font-size: 1.05rem;
  font-weight: 600;

  transition: filter 0.2s;

  background: ${({ theme: { colors } }) => colors.green};

  :hover {
    filter: brightness(0.9);
  }
`

export const FailedButton = styled(SucceededButton)`
  background: ${({ theme: { colors } }) => colors.red};
`
