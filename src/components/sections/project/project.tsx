import ProjectsOnTheGrid from '../../@minorComponents/project/project'

import { ProjectStyle } from './style'

import technicalAssistance from '../../../../public/images//projects/technicalAssistance.png'
import taskify from '../../../../public/images//projects/taskify.png'

type GreetProps = {
  title: string
  description: string
  gridOneTitle: string
  gridOneText: string
  gridTwoTitle: string
  gridTwoText: string
}

export default function Project(props: GreetProps) {
  return (
    <ProjectStyle id='project'>
      <div className='container'>
        <p title='Portfolio' className='title'>{props.title}</p>
        <h3 className='description'>{props.description}</h3>
        <div className='grid'>
          <ProjectsOnTheGrid
            photo={technicalAssistance}
            projectsOnTheGridTitle={props.gridOneTitle}
            projectsOnTheGridText={props.gridOneText}
            code='https://github.com/sillasemanoel/technical_assistance'
            liveDemo='https://technical-assistance-mocha.vercel.app/' />
          <ProjectsOnTheGrid
            photo={taskify}
            projectsOnTheGridTitle={props.gridTwoTitle}
            projectsOnTheGridText={props.gridTwoText}
            code='https://github.com/sillasemanoel/taskify'
            liveDemo='https://taskify-psi.vercel.app/' />
        </div>
      </div>
    </ProjectStyle >
  )
}
