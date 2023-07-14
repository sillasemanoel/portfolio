import { HiDocumentText } from 'react-icons/hi'

import { DownloadButtonStyle } from './style'

type GreetProps = {
  curriculumTitle: string
  curriculumDownload: string
}

export default function DownloadButton(props: GreetProps) {
  const handleDownload = () => {
    const filename = 'Currículo - Sillas Emanoel Pessoa França.pdf'
    const link = document.createElement('a')
    link.href = '../../../../public/docs/curriculo.pdf'
    link.download = filename
    link.click()
  }

  return (
    <DownloadButtonStyle>
      <span>
        <HiDocumentText fontSize='35px' />
      </span>
      <div className='info'>
        <h3>{props.curriculumTitle}</h3>
        <button onClick={handleDownload}>{props.curriculumDownload}</button>
      </div>
    </DownloadButtonStyle>
  )
}
