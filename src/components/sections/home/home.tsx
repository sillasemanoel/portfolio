import { BsLinkedin, BsGithub } from 'react-icons/bs'

import { HomeStyle } from './homeStyle'

import hand from '../../../assets/images/emojis/emojiHi.png'

export default function Home() {
  return (
    <HomeStyle id="home">
      <div className="container">
        <div className="main">
          <div>
            <h1>Front-End React Developer</h1>
            <img
              src={hand} />
            <p>Hi, I'm Sillas Emanoel. A passionate Front-end React Developer based in Ereré, Ceará, Brazil. 📍</p>
            <span>
              <a
                title="Linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/sillas-emanoel-656478218/">
                <BsLinkedin />
              </a>
              <a
                title="GitHub"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/sillasemanoel">
                <BsGithub />
              </a>
            </span>
          </div>
          <div className="hero"></div>
        </div>
        <div className="skills">
          <p>Tech Stack</p>
          <div>
            <ul>
              <li title="HTML5">
                <img
                  src="https://camo.githubusercontent.com/33f54c5fb023c9f00409205bdff733ee1940fa5318284cf6571fa4fd65854898/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d323039303926666f726d61743d706e67"
                  alt="skill-icon" />
              </li>
              <li title="CSS3">
                <img
                  src="https://camo.githubusercontent.com/b722729b9b69f44544fb564e27f957f4af5596eadc3cbf515d2d7c72a72d80fa/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d323132373826666f726d61743d706e67"
                  alt="skill-icon" />
              </li>
              <li title="Java Script">
                <img
                  src="https://camo.githubusercontent.com/bbe10a2b23032223ef35c46e88882eda1a00b3ceb58d54431923e38be17d4753/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d31303837383426666f726d61743d706e67"
                  alt="skill-icon" />
              </li>
              <li title="React">
                <img
                  src="https://camo.githubusercontent.com/c0b7c00c7845b50c0079350412bacf0a1f11db545ad67130beefdcd3cfb3b410/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d6173575353544272446c545726666f726d61743d706e67"
                  alt="skill-icon" />
              </li>
              <li title="TypeScript">
                <img
                  src="https://camo.githubusercontent.com/1f04b096f2a476c3dd565d9434df9e4ae8fc424ee2ffe61fc42c1ba72e83bca4/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d754a4d366651597144615a4b26666f726d61743d706e67"
                  alt="skill-icon" />
              </li>
              <li title="Styled Components">
                <img
                  src="https://camo.githubusercontent.com/a0ec0b5ed2d24d4bb431f98a1b6327e5efc9ed40a579619f462abe3e3099030d/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d74747852376d58614476715326666f726d61743d706e67"
                  alt="skill-icon" />
              </li>
              <li title="Tailwind CSS">
                <img
                  src="https://camo.githubusercontent.com/3084daaa4f3127f9fd04c9a7ad3b0e473191d11e40b52cf037d455455a52eed4/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d3450694e4874554a56624c7326666f726d61743d706e67"
                  alt="skill-icon" />
              </li>
              <li title="SCSS">
                <img
                  src="https://camo.githubusercontent.com/e178195a8a6c6a158edf13f7a452039b7d8e675024acc5168d661c2a298b7eba/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3531322669643d76456955385565416d76307826666f726d61743d706e67"
                  alt="skill-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HomeStyle>
  )
}
