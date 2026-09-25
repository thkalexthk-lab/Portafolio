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
              Desarrollo de aplicaciones web, automatizacion y proyectos creativos que convinan tecnologia y creatividad
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

        </main>  
    </div>
          
  )
}

export default App