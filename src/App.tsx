import "./App.css"
import personaje from "./assets/personaje.png"


function App(){
  return(
    <div className="Portafolio">
      <header className="navbar">
        <div className="logo">
          <span>JZ</span>
          <p>Jesus Alejandro Zayas Guerra</p>
        </div>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologia">Tecnologia</a>
          <a href="#experiencia">Experiencia</a>
        </nav>
        <a
        className="github-button"
        href="#"
        >
          Github
        </a>
      </header>


      <main>

        <section id="Inicio" className="hero">
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
        <span>RUNSHADOW</span>
      </div>

      <div className="project-content">

        <h3>RunShadow</h3>

        <p>
          Videojuego 2D desarrollado utilizando Lua
          y LÖVE2D.
        </p>

        <div className="project-footer">

          <div className="project-tags">
            <span>Lua</span>
            <span>LÖVE2D</span>
            <span>Videojuegos</span>
          </div>

          <a href="#" aria-label="Ver proyecto RunShadow">
            ↗
          </a>

        </div>

      </div>

    </article>


    <article className="project-card">

      <div className="project-image">
        <span>HOSS</span>
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

          <a href="#" aria-label="Ver proyecto HOSS">
            
          </a>

        </div>

      </div>

    </article>


    <article className="project-card">

      <div className="project-image">
        <span>PORTAFOLIO</span>
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

          <a href="#" aria-label="Ver proyecto Portafolio">
            
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
      <span className="technology-icon">HTML</span>
      <p>HTML</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">CSS</span>
      <p>CSS</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">JS</span>
      <p>JavaScript</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">TS</span>
      <p>TypeScript</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">⚛</span>
      <p>React</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">PY</span>
      <p>Python</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">API</span>
      <p>FastAPI</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">Lua</span>
      <p>Lua</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">Git</span>
      <p>Git</p>
    </div>

    <div className="technology-card">
      <span className="technology-icon">Linux</span>
      <p>Linux</p>
    </div>

  </div>

</section>


        </main>  
    </div>
          
  )
}

export default App