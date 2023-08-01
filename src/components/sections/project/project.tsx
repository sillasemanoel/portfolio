// Dependencies
import ProjectsOnTheGrid from '../../@minorComponents/project/project'
// Components
import { ProjectStyle } from './style'
// Images
import taskify from '../../../../public/images//projects/taskify.png'

type GreetProps = {
  title: string
  description: string
  gridOneTitle: string
  gridOneText: string
}

export default function Project(props: GreetProps) {
  return (
    <ProjectStyle id='project'>
      <div className='container'>
        <p title='Portfolio' className='title'>{props.title}</p>
        <h3 className='description'>{props.description}</h3>
        <div className='grid'>
          <ProjectsOnTheGrid
            photo={taskify}
            projectsOnTheGridTitle={props.gridOneTitle}
            projectsOnTheGridText={props.gridOneText}
            code='https://github.com/sillasemanoel/taskify'
            liveDemo='https://taskify-psi.vercel.app/' />
        </div>
      </div>
    </ProjectStyle >
  )
}
