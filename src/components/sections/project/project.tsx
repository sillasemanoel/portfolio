// Components
import { ProjectStyle } from "./style";

type GreetProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Project(props: GreetProps) {
  return (
    <ProjectStyle id="project">
      <div className="container">
        <p title="Portfolio" className="title">
          {props.title}
        </p>
        <h3 className="description">{props.description}</h3>
        <div className="grid">{props.children}</div>
      </div>
    </ProjectStyle>
  );
}
