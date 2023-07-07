import { ProjectStyle } from './projectStyle'

import { BsGithub } from 'react-icons/bs'
import { MdOpenInNew } from 'react-icons/md'

type GreetProps = {
  title: string
  caption: string
  gridOneTitle: string
  gridOneText: string
}

export default function Project(props: GreetProps) {
  return (
    <ProjectStyle id='project'>
      <div className='container'>
        <p title='Portfolio'>{props.title}</p>
        <h3>{props.caption}</h3>
        <div className='grid'>
          <div className='project'>
            <div className='img'></div>
            <div className='text'>
              <div>
                <h3>{props.gridOneTitle}</h3>
                <p>{props.gridOneText}</p>
              </div>
              <div>
                <div className='stack'>
                  <p>React</p>
                  <p>Styled Components</p>
                </div>
                <div className='links'>
                  <a
                    target='_blank'
                    href='https://github.com/sillasemanoel/technical-assistance'
                    rel='noreferrer'>
                    Code
                    <BsGithub fontSize='22px' />
                  </a>
                  <a
                    // target='_blank'
                    href='#/underDevelopment'
                    rel='noreferrer'>
                    Live Demo
                    <MdOpenInNew fontSize='22px' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectStyle >
  )
}
