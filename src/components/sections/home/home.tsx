import { BsLinkedin, BsGithub } from 'react-icons/bs'

import { HomeStyle } from './style'

import hand from '../../../../public/images/emojis/emojiHi.png'

type GreetProps = {
  classTitle: string
  title: string
  hand: string
  description: string
  stack: string
}

export default function Home(props: GreetProps) {
  return (
    <HomeStyle id='home'>
      <div className='container'>
        <div className='main'>
          <div>
            <h1 className={props.classTitle}>{props.title}</h1>
            <img src={hand} className={props.hand} />
            <p>{props.description}</p>
            <span>
              <a
                title='Linkedin'
                rel='noreferrer'
                target='_blank'
                href='https://www.linkedin.com/in/sillas-emanoel-656478218/'>
                <BsLinkedin />
              </a>
              <a
                title='GitHub'
                rel='noreferrer'
                target='_blank'
                href='https://github.com/sillasemanoel'>
                <BsGithub />
              </a>
            </span>
          </div>
          <div className='hero'></div>
        </div>
        <div className='skills'>
          <p>{props.stack}</p>
          <div>
            <ul>
              <li title='HTML5'>
                <img
                  src='https://img.icons8.com/?size=512&id=20909&format=png'
                  alt='skill-icon' />
              </li>
              <li title='CSS3'>
                <img
                  src='https://img.icons8.com/?size=512&id=21278&format=png'
                  alt='skill-icon' />
              </li>
              <li title='Java Script'>
                <img
                  src='https://img.icons8.com/?size=512&id=108784&format=png'
                  alt='skill-icon' />
              </li>
              <li title='React'>
                <img
                  src='https://img.icons8.com/?size=512&id=asWSSTBrDlTW&format=png'
                  alt='skill-icon' />
              </li>
              <li title='TypeScript'>
                <img
                  src='https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png'
                  alt='skill-icon' />
              </li>
              <li title='Styled Components'>
                <img
                  src='https://img.icons8.com/?size=512&id=ttxR7mXaDvqS&format=png'
                  alt='skill-icon' />
              </li>
              <li title='Tailwind CSS'>
                <img
                  src='https://img.icons8.com/?size=512&id=4PiNHtUJVbLs&format=png'
                  alt='skill-icon' />
              </li>
              <li title='SCSS'>
                <img
                  src='https://camo.githubusercontent.com/e178195a8a6c6a158edf13f7a452039b7d8e675024acc5168d661c2a298b7eba/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d76456955385565416d76307826666f726d61743d706e67'
                  alt='skill-icon' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HomeStyle>
  )
}
