import { BsGithub } from 'react-icons/bs'
import { MdOpenInNew } from 'react-icons/md'

import { ProjectsOnTheGridStyle } from './style'

type GreetProps = {
  photo: string
  projectsOnTheGridTitle: string
  projectsOnTheGridText: string
  code: string
  liveDemo: string
}

export default function ProjectsOnTheGrid(props: GreetProps) {
  return (
    <ProjectsOnTheGridStyle>
      <div style={{ backgroundImage: `url(${props.photo})` }} className='img'></div>
      <div className='text'>
        <div>
          <h3>{props.projectsOnTheGridTitle}</h3>
          <p>{props.projectsOnTheGridText}</p>
        </div>
        <div>
          <div className='stack'>
            <p>React</p>
            <p>Styled Components</p>
          </div>
          <div className='links'>
            <a
              target='_blank'
              href={props.code}
              rel='noreferrer'>
              Code
              <BsGithub fontSize='22px' />
            </a>
            <a
              target='_blank'
              href={props.liveDemo}
              rel='noreferrer'>
              Live Demo
              <MdOpenInNew fontSize='22px' />
            </a>
          </div>
        </div>
      </div>
    </ProjectsOnTheGridStyle >
  )
}
