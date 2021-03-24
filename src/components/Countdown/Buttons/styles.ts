import styled, { DefaultTheme } from 'styled-components'

type OwnProps = {
  isActive?: boolean
  theme: DefaultTheme
}

const height = '5px'

export const Button = styled('button')`
  outline-color: ${({ theme: { colors } }) => colors.text};
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  border-color: none;

  position: relative;

  background: ${({ isActive, theme: { colors } }: OwnProps) =>
    !isActive ? colors.blue : colors.dark};

  color: ${({ theme: { colors } }) => colors.text};

  font-size: 1.5rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :not(:disabled):hover {
    background: ${({ isActive, theme: { colors } }: OwnProps) =>
      !isActive ? colors.blueDark : colors.red};
  }

  :focus {
    outline: #fff solid 2px;
  }

  :disabled {
    background: ${({ theme: { colors } }) => colors.dark};
    color: ${({ theme: { colors } }) => colors.text};
    cursor: not-allowed;
  }
`
export const Img = styled('img')`
  width: 1.6rem;
  height: 1.6rem;

  padding-left: 4px;
`
export const TimeLeft = styled('div')`
  bottom: 0;
  left: 0;
  position: absolute;
  height: ${height};
  border-radius: 0 0 4px 4px;
  background: ${({ theme: { colors } }) => colors.green};
`
export const TimeLeftBar = styled(TimeLeft)`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.grayLine};
`
export const TimeFinished = styled(TimeLeft)`
  width: 100%;
`
