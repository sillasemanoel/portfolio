import { ContactStyle } from './contactStyle'

import { FaMapMarkedAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export default function Contact() {
  return (
    <ContactStyle id="contact">
      <div className="container">
        <p>Contact</p>
        <h3>Don't be shy! Hit me up! 👇</h3>
        <div className="icons">
          <div>
            <span>
              <FaMapMarkedAlt fontSize="35px" />
            </span>
            <div className="info">
              <h3>Location</h3>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Erer%C3%AA,+Erer%C3%A9+-+CE,+63470-000/@-6.0322566,-38.3498299,18z/data=!4m6!3m5!1s0x7bb49a291a02059:0x362deec2e903edec!8m2!3d-6.0320398!4d-38.3494151!16s%2Fg%2F1yy3vl9mt?entry=ttu"
                rel="noreferrer">
                Ereré, Ceará, Brazil
              </a>
            </div>
          </div>
          <div>
            <span>
              <IoMdMail fontSize="35px" />
            </span>
            <div className="info">
              <h3>Mail</h3>
              <a href="mailto:sillasemanoel116@gmail.com">sillasemanoel116@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  )
}
