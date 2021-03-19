import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(25%);

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme: { colors } }) => colors.title};
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        height: 1.2rem;
        width: 1rem;
        transform: translateY(15%);
        margin-right: 0.25rem;
      }
    }
  }
`
