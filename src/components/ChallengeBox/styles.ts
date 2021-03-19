import styled from 'styled-components'

export const Container = styled('div')`
  height: 100%;

  background: ${({ theme: { colors } }) => colors.dark};
  border-radius: 5px;
  box-shadow: ${({ theme: { effects } }) => effects.shadow};
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`