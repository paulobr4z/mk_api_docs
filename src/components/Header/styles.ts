import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #000000;
  z-index: 99;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 40px;
      color: #FFFFFF;
      font-family: 'Roboto Condensed';

      a {
        cursor: pointer;
        color: #FFFFFF;
        text-decoration: none;
      }

      li {
        list-style-type: none;
        font-weight: bold;
      }
    }
  }
`