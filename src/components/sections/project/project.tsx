import { ProjectStyle } from './projectStyle'

import { BsGithub } from 'react-icons/bs'
import { MdOpenInNew } from 'react-icons/md'

export default function Project() {
  return (
    <ProjectStyle id='project'>
      <div className="container">
        <p title="Portfolio">Portfolio</p>
        <h3>Each project is a unique piece of development 🧩</h3>
        <div className="grid">
          <div className="project">
            <div className="img"></div>
            <div className="text">
              <div>
                <h3>Technical Assistance 👨‍🔧</h3>
                <p>A technical assistance site, which allows the user to create up to 5 profiles, the profile can register, consult, delete and change the order of service. The customer can track the status of his service order through his device.</p>
              </div>
              <div>
                <div className="stack">
                  <p>React</p>
                  <p>Styled Components</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/sillasemanoel/technical-assistance"
                    rel="noreferrer">
                    Code
                    <BsGithub fontSize="22px" />
                  </a>
                  <a
                    // target="_blank"
                    href="#/underDevelopment"
                    rel="noreferrer">
                    Live Demo
                    <MdOpenInNew fontSize="22px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectStyle>
  )
}
