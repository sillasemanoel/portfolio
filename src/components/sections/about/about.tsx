import { AboutStyle } from './aboutStyle'

import work from '../../../assets/images/photographys/work.png'
import emojiWork from '../../../assets/images/emojis/emojiWork.png'
import developer from '../../../assets/images/svg/developer.svg'

export default function About() {
  return (
    <AboutStyle id="about">
      <div className="container">
        <div className="img">
          <img src={work} className="work" />
          <img src={emojiWork} className="emojiWork" />
          <span>
            <img src={developer} />
          </span>
        </div>
        <div className="text">
          <h3 title="About me">About me</h3>
          <h4>A dedicated Front-end Developer based in Ereré, Ceará, Brazil 📍</h4>
          <p>As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, TypeScript, Styled Components, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
        </div>
      </div>
    </AboutStyle>
  )
}
