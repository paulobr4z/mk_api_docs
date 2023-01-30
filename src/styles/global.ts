import { createGlobalStyle } from 'styled-components'

import MKFont from '../assets/font/Mortal-Kombat-MK11.otf'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Mortal Kombat';
    src: local('Mortal Kombat'),
    url(${MKFont}) format('otf')
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  h1 {
    font-family: 'Mortal Kombat', sans-serif;
  }
`