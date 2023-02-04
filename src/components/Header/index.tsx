import { HeaderContainer } from "./styles";

import logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <img src={logo} alt="mk api logo" />
        <ul>
          <a href="#">
            <li>HOME</li>
          </a>
          <a href="#documentation">
            <li>DOCS</li>
          </a>
          <a href="https://github.com/paulobr4z/mk_api" target="_blank" rel="noopener noreferrer">
            <li>GITHUB</li>
          </a>
        </ul>
      </div>
    </HeaderContainer>
  )
}