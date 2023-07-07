import { useState } from 'react'

import Nav from './components/nav/nav'
import Home from './components/sections/home/home'
import About from './components/sections/about/about'
import Project from './components/sections/project/project'
import Contact from './components/sections/contact/contact'
import Footer from './components/footer/footer'

function App() {

  const [translation, setTranslation] = useState(false);

  return (
    <>
      <Nav
        home={`${translation ? 'Herói' : 'Home'}`}
        about={`${translation ? 'Sobre' : 'About'}`}
        projects={`${translation ? 'Projetos' : 'Projects'}`}
        contact={`${translation ? 'Contato' : 'Contact'}`}>
        <div className="translate_switch">
          <button onClick={() => { setTranslation(!translation) }}>
            <input type="checkbox" />
          </button>
          <p>en / pt</p>
        </div>
      </Nav>
      <Home
        classTitle={`${translation ? 'marginBottomTranslate' : ''}`}
        title={`${translation ?
          'Desenvolvedor Front-End React' :
          'Front-End React Developer'}`}
        hand={`${translation ? 'pt_hand' : ''}`}
        description={`${translation ?
          'Olá, sou Sillas Emanoel. Um apaixonado Desenvolvedor Front-end React baseado em Ereré, Ceará, Brasil.📍' :
          "Hi, I'm Sillas Emanoel.A passionate Front-end React Developer based in Ereré, Ceará, Brazil.📍"}`}
        stack={`${translation ? 'Tecnologias' : 'Tech Stack'}`} />
      <About
        title={`${translation ? 'Sobre Mim' : 'About me'}`}
        caption={`${translation ?
          'Um Desenvolvedor Front-end dedicado baseado em Ereré, Ceará, Brasil 📍' :
          'A dedicated Front-end Developer based in Ereré, Ceará, Brazil 📍'}`}
        text={`${translation ?
          'Como Desenvolvedor Front-End, possuo um impressionante arsenal de habilidades em HTML, CSS, JavaScript, React, TypeScript, Styled Components, Tailwind e SCSS. Sou excelente em projetar e manter sites responsivos que oferecem uma experiência de usuário tranquila. Minha experiência reside na criação de interfaces dinâmicas e envolventes por meio da escrita de código limpo e otimizado e da utilização de ferramentas e técnicas de desenvolvimento de ponta. Também sou um jogador de equipe que prospera em colaborar com equipes multifuncionais para produzir excelentes aplicativos da web.' :
          'As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, TypeScript, Styled Components, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.'}`} />
      <Project
        title={`${translation ? 'Portfólio' : 'Portfolio'}`}
        caption={`${translation ?
          'Cada projeto é uma peça única de desenvolvimento 🧩' :
          'Each project is a unique piece of development 🧩'}`}
        gridOneTitle={`${translation ?
          'Assistência Técnica 👨‍🔧' :
          'Technical Assistance 👨‍🔧'}`}
        gridOneText={`${translation ?
          'Um site de assistência técnica, que permite ao usuário criar até 5 perfis, o perfil pode cadastrar, consultar, deletar e alterar a ordem de atendimento. O cliente pode acompanhar o status de sua ordem de serviço por meio de seu dispositivo.' :
          'A technical assistance site, which allows the user to create up to 5 profiles, the profile can register, consult, delete and change the order of service. The customer can track the status of his service order through his device.'}`} />
      <Contact
        title={`${translation ? 'Contato' : 'Contact'}`}
        caption={`${translation ?
          'Não seja tímido! Bata-me! 👇' :
          "Don't be shy! Hit me up! 👇"}`}
        locationTitle={`${translation ? 'Localização' : 'Location'}`}
        locationText={`${translation ? 'Ereré, Ceará, Brasil' : 'Ereré, Ceará, Brazil'}`}
        mailTitle={`${translation ? 'E-mail' : 'Mail'}`} />
      <Footer rights={`${translation ?
        'Copyright © 2023. Todos os direitos reservados' :
        'Copyright © 2023. All rights are reserved'}`} />
    </>
  )
}

export default App
