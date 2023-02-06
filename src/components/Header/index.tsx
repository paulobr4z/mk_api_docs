import { HeaderContainer } from "./styles";

import logo from '../../assets/images/logo.svg'
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <div className="wrapper">
        <img src={logo} alt="mk api logo" />
        <ul className="menu-desktop">
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
        <div className="menu-mobile"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          <div className="menu-mobile-options"
            style={{display: `${isOpen ? 'flex' : 'none'}`}}
          >
            <p onClick={() => setIsOpen(!isOpen)}>close</p>   
            <a href="#">HOME</a>
            <a href="#documentation">DOCS</a>
            <a href="https://github.com/paulobr4z/mk_api" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}