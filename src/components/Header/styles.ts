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
    margin: 0 16px;

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

    .menu-mobile {
      display: none;

      span {
        width: 22px;
        height: 2px;
        background-color: #FFB902;
        border-radius: 100px;

      }

      .menu-mobile-options {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 32px;

        a {
          color: #FFFFFF;
          font-size: 6vh;
          text-decoration: none;
        }

        p {
          position: absolute;
          top: 16px;
          right: 16px;
        }
      }
    }

    @media (max-width: 768px) {
      .menu-desktop {
        display: none;
      }

      .menu-mobile {
        display: flex;
        flex-direction: column;
        row-gap: 3px;
        width: 16px;
      }
    }
  }
`