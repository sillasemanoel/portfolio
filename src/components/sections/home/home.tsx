// Dependencies
import { BsLinkedin, BsGithub } from "react-icons/bs";
// Styles
import { HomeStyle } from "./style";
// Images
import hand from "../../../../public/images/emojis/emojiHi.png";

type GreetProps = {
  classTitle: string;
  title: string;
  hand: string;
  description: string;
  stack: string;
};

export default function Home(props: GreetProps) {
  return (
    <HomeStyle id="home">
      <div className="container">
        <div className="main">
          <div>
            <h1 className={props.classTitle}>{props.title}</h1>
            <img src={hand} className={props.hand} />
            <p>{props.description}</p>
            <span>
              <a
                title="Linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/sillas-emanoel-656478218/"
              >
                <BsLinkedin />
              </a>
              <a
                title="GitHub"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/sillasemanoel"
              >
                <BsGithub />
              </a>
            </span>
          </div>
          <div className="hero"></div>
        </div>
        <div className="skills">
          <p>{props.stack}</p>
          <div>
            <ul>
              <li title="HTML5">
                <img
                  src="https://img.icons8.com/?size=512&id=20909&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="CSS3">
                <img
                  src="https://img.icons8.com/?size=512&id=21278&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="JavaScript">
                <img
                  src="https://img.icons8.com/?size=512&id=108784&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="JQuery">
                <img
                  src="https://img.icons8.com/?size=512&id=HKNzD81eiiSc&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="TypeScript">
                <img
                  src="https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="React">
                <img
                  src="https://img.icons8.com/?size=512&id=asWSSTBrDlTW&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="NodeJS">
                <img
                  src="https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="Styled Components">
                <img
                  src="https://img.icons8.com/?size=512&id=ttxR7mXaDvqS&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="Tailwind CSS">
                <img
                  src="https://img.icons8.com/?size=512&id=4PiNHtUJVbLs&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="SCSS/SASS">
                <img
                  src="https://img.icons8.com/?size=48&id=vEiU8UeAmv0x&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="MySQL">
                <img
                  src="https://img.icons8.com/?size=80&id=rgPSE6nAB766&format=png"
                  alt="skill-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HomeStyle>
  );
}
