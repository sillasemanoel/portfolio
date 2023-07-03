import { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'

import { NavStyle, MobileNavStyle } from './navStyle'

export default function Nav() {

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavStyle>
        <h3>Sillas.dev</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <CgMenuRight onClick={() => { setToggle(!toggle) }} />
          </li>
        </ul>
      </NavStyle>
      <MobileNavStyle>
        <div className={`${toggle ? 'open_menu' : 'closed_menu'}`}>
          <CgClose onClick={() => { setToggle(!toggle) }} />
          <ul>
            <li>
              <a href="#home" onClick={() => { setToggle(!toggle) }}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => { setToggle(!toggle) }}>About</a>
            </li>
            <li>
              <a href="#project" onClick={() => { setToggle(!toggle) }}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => { setToggle(!toggle) }}>Contact</a>
            </li>
          </ul>
        </div>
      </MobileNavStyle>
    </>
  )
}
