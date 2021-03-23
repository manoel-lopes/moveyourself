import styled from 'styled-components'

export const Container = styled('div')`
  display: flex;

  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.title};

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${({ theme: { colors } }) => colors.dark};
    box-shadow: ${({ theme: { effects } }) => effects.shadow};
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
      margin: 0;
    }

    span:first-child {
      border-right: 1px solid ${({ theme: { colors } }) => colors.background};
    }

    span:last-child {
      border-left: 1px solid ${({ theme: { colors } }) => colors.background};
    }
  }

  span {
    font-size: 6.35rem;
    margin: 0 0.05rem;
  }
`