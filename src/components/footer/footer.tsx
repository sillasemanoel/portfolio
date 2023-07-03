import { BsLinkedin, BsGithub } from 'react-icons/bs'

import { FooterStyle } from './footerStyle'

export default function Footer() {
  return (
    <FooterStyle>
      <div className='limit'>
        <h3>Copyright © 2023. All rights are reserved</h3>
        <div className="socials">
          <a
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sillas-emanoel-656478218/">
            <BsLinkedin fontSize='21px' />
          </a>
          <a
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sillasemanoel">
            <BsGithub fontSize='22px' />
          </a>
        </div>
      </div>
    </FooterStyle>
  )
}
