import styled from 'styled-components'

const height = '4px'

export const Container = styled('header')`
  display: flex;
  align-items: center;
  margin-bottom: 55px;

  span {
    font-size: 1rem;
  }
`

export const CurrentExperience = styled('div')`
  flex: 1;
  height: ${height};
  border-radius: 4px;
  background: ${({ theme: { colors } }) => colors.grayLine};
  margin: 0 1.5rem;
  position: relative;

  div {
    height: ${height};
    border-radius: 4px;
    background: ${({ theme: { colors } }) => colors.green};
  }

  span {
    position: absolute;
    top: 8px;
    transform: translateX(-50%);
  }
`
