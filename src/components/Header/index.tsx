import { HeaderContainer } from "./styles";

import logo from '../../assets/images/logo.svg'


export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <img src={logo} alt="mk api logo" />
        <ul>
          <li>HOME</li>
          <li>DOCS</li>
          <li>ABOUT</li>
        </ul>
      </div>
    </HeaderContainer>
  )
}