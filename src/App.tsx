import "./App.css"
import personaje from "./assets/personaje.png"

import runshadowImg from "./assets/projects/runshadow.png"
import hossImg from "./assets/projects/hoss.png"
import portafolioImg from "./assets/projects/portafolio.png"


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa"

import {
  SiTypescript,
  SiFastapi,
  SiLua,
} from "react-icons/si"


function App(){
  return(
    <div className="Portafolio">
      <header className="navbar-wrapper">
        <div className="navbar">
          <a href="#inicio" className="logo">
            <span>JZ</span>
            <p>Jesus Zayas</p>
          </a>

          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
          className="github-button"
          href="https://github.com/thkalexthk-lab"
          target="_blank"
          rel="noreferrer"
          >
            GitHub ↗
          </a>

        </div>
      </header>


      <main>

        <section id="inicio" className="hero">
          <div className="hero-content">
            <span className="hero-label">
              DESARROLLADOR DE SOFTWARE
            </span>
            <h1>
              Construyendo
              <br />
              Ideas <span>En Codigo</span>
            </h1>
            <p>
              Desarrollo de aplicaciones web, automatizacion y proyectos creativos que combinan tecnologia y creatividad
            </p>
            <div className="hero-buttons">
              <a
              href="#proyectos"
              className="primary-button"
              >
                Ver proyectos
              </a>
              <a 
              href="#contacto"
              className="secondary-button"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow"></div>
            
            <img
            src={personaje}
            alt="Ilustracion"
            className="hero-character"
            />
          </div>
        </section>

        <section id="proyectos" className="projects-section">

  <div className="section-header">
    <div>
      <span className="section-number">01</span>
      <h2>Proyectos</h2>
    </div>

    <p>
      Algunas cosas que he construido.
    </p>
  </div>

  <div className="projects-grid">

    <article className="project-card">

      <div className="project-image">
        <img
        src={runshadowImg}
        alt="Captura de proyecto RunShadow"
        />
      </div>

      <div className="project-content">

        <h3>RunShadow</h3>

        <p>
          Videojuego 2D desarrollado utilizando Lua
          y LÖVE2D en curso.
        </p>

        <div className="project-footer">

          <div className="project-tags">
            <span>Lua</span>
            <span>LÖVE2D</span>
            <span>Videojuegos</span>
          </div>

          <a 
          href="https://github.com/thkalexthk-lab/runshadow"
          target="_blank"
          rel="noreferrer"
          aria-label="Ver RunShadow en GitHUb" 
          >
            ↗
          </a>

        </div>

      </div>

    </article>


    <article className="project-card">

      <div className="project-image">
        <img
        src={hossImg}
        alt="Captura de proyecto Hoss"
        />
      </div>

      <div className="project-content">

        <h3>HOSS</h3>

        <p>
          Sistema web de gestión desarrollado con
          Python y FastAPI.
        </p>

        <div className="project-footer">

          <div className="project-tags">
            <span>Python</span>
            <span>FastAPI</span>
            <span>Web</span>
          </div>

          <a 
          
          href="https://github.com/sistemashoss-bit/KnowledgeBaseHoss"
          target="_blank"
          rel="noreferrer"
          aria-label="Ver proyecto Hoss" 
          >
            ↗
          </a>

        </div>

      </div>

    </article>


    <article className="project-card">

      <div className="project-image">
        <img
        src={portafolioImg}
        alt="Captura de mi portafolio"
        />
      </div>

      <div className="project-content">

        <h3>Portafolio</h3>

        <p>
          Portafolio personal desarrollado con
          React y TypeScript.
        </p>

        <div className="project-footer">

          <div className="project-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
          </div>

          <a 
          
          href="https://github.com/thkalexthk-lab/Portafolio"
          target="_blank"
          rel="noreferrer"
          aria-label="Ver proyecto portafolio"
          
          >
            ↗
          </a>

        </div>

      </div>

    </article>

  </div>

        </section>


        <section id="tecnologias" className="technologies-section">

  <div className="section-header">
    <div>
      <span className="section-number">02</span>
      <h2>Tecnologías</h2>
    </div>

    <p>Herramientas que utilizo para desarrollar.</p>
  </div>

  <div className="technologies-grid">

    <div className="technology-card">
      <FaHtml5 className="technology-logo" />
      <p>HTML</p>
    </div>

    <div className="technology-card">
      <FaCss3Alt className="technology-logo" />
      <p>CSS</p>
    </div>

    <div className="technology-card">
     <FaJs className="technology-logo" />
      <p>JavaScript</p>
    </div>

    <div className="technology-card">
      <SiTypescript className="technology-logo" />
      <p>TypeScript</p>
    </div>

    <div className="technology-card">
      <FaReact className="technology-logo" />
      <p>React</p>
    </div>

    <div className="technology-card">
      <FaPython className="technology-logo" />
      <p>Python</p>
    </div>

    <div className="technology-card">
      <SiFastapi className="technology-logo" />
      <p>FastAPI</p>
    </div>

    <div className="technology-card">
      <SiLua className="technology-logo" />
      <p>Lua</p>
    </div>

    <div className="technology-card">
      <FaGitAlt className="technology-logo" />
      <p>Git</p>
    </div>

    <div className="technology-card">
      <FaLinux className="technology-logo" />
      <p>Linux</p>
    </div>



  </div>

</section>

<section id="experiencia" className="experience-section">

  <div className="section-header">
    <div>
      <span className="section-number">03</span>
      <h2>Experiencia</h2>
    </div>

    <p>Mi trayectoria y experiencia en desarrollo.</p>
  </div>

  <div className="experience-timeline">

    <article className="experience-item">

      <div className="experience-dot"></div>

      <div className="experience-date">
        2026 — Actualidad
      </div>

      <div className="experience-content">

        <h3>Desarrollador de Software</h3>

        <span>Proyectos personales</span>

        <p>
          Desarrollo de aplicaciones web, APIs y proyectos
          de software utilizando tecnologías como React,
          TypeScript, Python y Git.
        </p>

      </div>

    </article>


    <article className="experience-item">

      <div className="experience-dot"></div>

      <div className="experience-date">
        2026
      </div>

      <div className="experience-content">

        <h3>Desarrollo de videojuegos</h3>

        <span>RunShadow</span>

        <p>
          Desarrollo de un videojuego 2D utilizando Lua y
          LÖVE2D, trabajando con animaciones, escenarios,
          sprites y mecánicas de juego.
        </p>

      </div>

    </article>

  </div>

</section>


<section id="contacto" className="contact-section">

  <div className="contact-content">
    <span className="section-number">04</span>

    <h2>

      ¿Tienes una idea?
      <br />
      <span>Hablemos.</span>
    </h2>

    <p>
      Estoy abierto a colaborar en nuevos proyectos, desarrollar
      nuevas ideas y conocer nuevas oportunidades.
    </p>

    <div className="contact-buttons">
      <a
      href="mailto:alexd9990@outlook.com"
      className="primary-button"
      >
        Enviar correo
      </a>

      <a
      href="https://github.com/thkalexthk-lab"
      target="blank"
      rel="noreferrer"
      className="secondary-button"
      >
        GitHub ↗
      </a>
    </div>
  </div>
</section>

        </main>  

        <footer className="footer">
          <div className="footer-logo">
            <span>JZ</span>
            <p>Jesus Zayas</p>
          </div>
          <p>
            Desarrolladorcon React + TypeScript
          </p>
          <p>
            © 2026
          </p>
        </footer>
    </div>
          
  )
}

export default App
