// Dependencies
import { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'
// Components
import TranslateSwitch from '../@minorComponents/translateSwitch/translateSwitch'
// Styles
import { NavStyle, MobileNavStyle } from './style'

type GreetProps = {
  home: string
  about: string
  projects: string
  contact: string
  onClickTranslate: () => void
}

export default function Nav(props: GreetProps) {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <NavStyle>
        <h3>Sillas.dev</h3>
        <ul>
          <li>
            <a href='#home'>{props.home}</a>
          </li>
          <li>
            <a href='#about'>{props.about}</a>
          </li>
          <li>
            <a href='#project'>{props.projects}</a>
          </li>
          <li>
            <a href='#contact'>{props.contact}</a>
          </li>
          <li>
            <TranslateSwitch onClickTranslate={props.onClickTranslate} />
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
              <a href='#home' onClick={() => { setToggle(!toggle) }}>{props.home}</a>
            </li>
            <li>
              <a href='#about' onClick={() => { setToggle(!toggle) }}>{props.about}</a>
            </li>
            <li>
              <a href='#project' onClick={() => { setToggle(!toggle) }}>{props.projects}</a>
            </li>
            <li>
              <a href='#contact' onClick={() => { setToggle(!toggle) }}>{props.contact}</a>
            </li>
          </ul>
        </div>
      </MobileNavStyle>
    </>
  )
}
