import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 32px 16px;
  background-color: #040405;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
`