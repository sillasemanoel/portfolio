import { HiDocumentText } from 'react-icons/hi'

import { DownloadButtonStyle } from './style'

import pdf from '../../../assets/docs/Curriculum - Sillas Emanoel Pessoa França.pdf'

type GreetProps = {
  curriculumTitle: string
  curriculumDownload: string
}

export default function DownloadButton(props: GreetProps) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdf
    link.download = 'Curriculum - Sillas Emanoel Pessoa França.pdf'
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
