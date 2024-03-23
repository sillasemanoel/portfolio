// Dependencies
import { useState } from "react";
// Components
import Nav from "./components/nav/nav";
import Home from "./components/sections/home/home";
import About from "./components/sections/about/about";
import Project from "./components/sections/project/project";
import ProjectsOnTheGrid from "./components/@minorComponents/grid/grid";
import Contact from "./components/sections/contact/contact";
import Footer from "./components/footer/footer";
// Images
import supportwise from "../public/images/projects/supportwise.png";
import taskify from "../public/images/projects/taskify.png";
import devlinks from "../public/images/projects/devlinks.png";

function App() {
  const [translation, setTranslation] = useState(false);

  return (
    <>
      <Nav
        home={`${translation ? "Herói" : "Home"}`}
        about={`${translation ? "Sobre" : "About"}`}
        projects={`${translation ? "Projetos" : "Projects"}`}
        contact={`${translation ? "Contato" : "Contact"}`}
        onClickTranslate={() => {
          setTranslation(!translation);
        }}
      />
      <Home
        classTitle={`${translation ? "marginBottomTranslate" : ""}`}
        title={`${
          translation ? "Desenvolvedor Front-End JS" : "Front-End JS Developer"
        }`}
        hand={`${translation ? "pt_hand" : ""}`}
        description={`${
          translation
            ? "Olá, sou Sillas Emanoel. Um apaixonado Desenvolvedor Front-End JavaScript baseado em Ereré, Ceará, Brasil.📍"
            : "Hi, I'm Sillas Emanoel. A passionate Front-End JavaScript Developer based in Ereré, Ceará, Brazil.📍"
        }`}
        stack={`${translation ? "Tecnologias" : "Tech Stack"}`}
      />
      <About
        title={`${translation ? "Sobre Mim" : "About me"}`}
        caption={`${
          translation
            ? "Um Desenvolvedor Front-End dedicado baseado em Ereré, Ceará, Brasil 📍"
            : "A dedicated Front-End Developer based in Ereré, Ceará, Brazil 📍"
        }`}
        text={`${
          translation
            ? "Como Desenvolvedor Front-End, possuo um impressionante arsenal de habilidades em HTML, CSS, JavaScript, JQuery, TypeScript, React, NodeJS, Styled Components, Tailwind CSS, SCSS/SASS e MySQL. Sou excelente em projetar e manter sites responsivos que oferecem uma experiência de usuário tranquila. Minha experiência reside na criação de interfaces dinâmicas e envolventes por meio da escrita de código limpo e otimizado e da utilização de ferramentas e técnicas de desenvolvimento de ponta. Também sou um jogador de equipe que prospera em colaborar com equipes multifuncionais para produzir excelentes aplicativos da web."
            : "As a Front-End Developer, I have an impressive arsenal of skills in HTML, CSS, JavaScript, JQuery, TypeScript, React, NodeJS, Styled Components, Tailwind CSS, SCSS/SASS and MySQL. I excel at designing and maintaining responsive websites that deliver a user-friendly experience quiet. My expertise lies in creating dynamic and engaging interfaces by writing clean, optimized code and utilizing cutting-edge development tools and techniques. I'm also a team player who thrives on collaborating with cross-functional teams to produce great web applications."
        }`}
      />
      <Project
        title={`${translation ? "PORTFÓLIO" : "PORTFOLIO"}`}
        description={`${
          translation
            ? "Cada projeto é uma peça única de desenvolvimento 🧩"
            : "Each project is a unique piece of development 🧩"
        }`}
      >
        <ProjectsOnTheGrid
          photo={supportwise}
          projectsOnTheGridTitle={`${
            translation
              ? "Ola, sou a Supportwise! ⚡"
              : "Hello, I'm Supportwise! ⚡"
          }`}
          projectsOnTheGridText={`${
            translation
              ? "Com o Supportwise, não se trata apenas de organizar. Agora, você pode fornecer o status de cada reparo de forma transparente. Desde a recepção do produto até a entrega final, tenha controle total e forneça atualizações em tempo real aos seus clientes."
              : "With Supportwise, it's not just about organizing. Now, you can provide the status of each repair transparently. From product receipt to final delivery, have full control and provide real-time updates to your customers."
          }`}
          stackOne="React"
          stackTwo="localStorage"
          code="https://github.com/sillasemanoel/supportwise"
          liveDemo="https://supportwise.vercel.app/"
        />
        <ProjectsOnTheGrid
          photo={taskify}
          projectsOnTheGridTitle={`${
            translation ? "Taskify 📝" : "Taskify 📝"
          }`}
          projectsOnTheGridText={`${
            translation
              ? "Taskify, sistema simples para criar, arquivar e excluir notas. Focado na praticidade, permite registrar e gerenciar anotações facilmente, ideal para lembrar tarefas e manter organização descomplicada."
              : "Taskify, simple system for creating, archiving and deleting notes. Focused on practicality, it allows you to easily record and manage notes, ideal for remembering tasks and maintaining uncomplicated organization."
          }`}
          stackOne="React"
          stackTwo="localStorage"
          code="https://github.com/sillasemanoel/taskify"
          liveDemo="https://taskify-psi.vercel.app"
        />
        <ProjectsOnTheGrid
          photo={devlinks}
          projectsOnTheGridTitle={`${
            translation ? "Devlinks 👆" : "Devlinks 👆"
          }`}
          projectsOnTheGridText={`${
            translation
              ? "Devlinks é a ferramenta ideal para centralizar todos os seus contatos online. Desenvolvido para praticidade, permite agrupar seus links essenciais em um único lugar, proporcionando uma experiência de navegação intuitiva."
              : "Devlinks is the ideal tool to centralize all your online contacts. Developed for convenience, it allows you to group your essential links in one place, providing an intuitive browsing experience."
          }`}
          stackOne="HTML"
          stackTwo="JavaScript"
          code="https://github.com/sillasemanoel/devlinks"
          liveDemo="https://devlinks-gules.vercel.app"
        />
      </Project>
      <Contact
        title={`${translation ? "Contato" : "Contact"}`}
        caption={`${
          translation
            ? "Não seja tímido! Bata-me! 👇"
            : "Don't be shy! Hit me up! 👇"
        }`}
        locationTitle={`${translation ? "Localização" : "Location"}`}
        locationText={`${
          translation ? "Ereré, Ceará, Brasil" : "Ereré, Ceará, Brazil"
        }`}
        mailTitle={`${translation ? "E-mail" : "Mail"}`}
        curriculumTitle={`${translation ? "Currículo" : "Curriculum"}`}
        curriculumDownload={`${translation ? "Baixar 🫶" : "Download 🫶"}`}
      />
      <Footer
        rights={`${
          translation
            ? "Copyright © 2023. Todos os direitos reservados"
            : "Copyright © 2023. All rights are reserved"
        }`}
      />
    </>
  );
}

export default App;
