import { AboutStyle } from './aboutStyle'

import work from '../../../assets/images/photographys/work.png'
import emojiWork from '../../../assets/images/emojis/emojiWork.png'
import developer from '../../../assets/images/svg/developer.svg'

type GreetProps = {
  title: string
  caption: string
  text: string
}

export default function About(props: GreetProps) {
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
          <h3 title="About me">{props.title}</h3>
          <h4>{props.caption}</h4>
          <p>{props.text}</p>
        </div>
      </div>
    </AboutStyle>
  )
}
