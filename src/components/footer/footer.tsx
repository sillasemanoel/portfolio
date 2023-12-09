// Dependencies
import { BsLinkedin, BsGithub } from "react-icons/bs";
// Styles
import { FooterStyle } from "./style";

type GreetProps = {
  rights: string;
};

export default function Footer(props: GreetProps) {
  return (
    <FooterStyle>
      <div className="limit">
        <h3>{props.rights}</h3>
        <div className="socials">
          <a
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sillas-emanoel-656478218/"
          >
            <BsLinkedin fontSize="21px" />
          </a>
          <a
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sillasemanoel"
          >
            <BsGithub fontSize="22px" />
          </a>
        </div>
      </div>
    </FooterStyle>
  );
}
