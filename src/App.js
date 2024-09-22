
import './App.css';
import React, {useEffect, useState} from 'react';


function App() {
    const url = 'https://errezeeta.github.io/javier.dev/'; // URL para la foto

    // Estado para mostrar u ocultar la flecha
    const [showArrow, setShowArrow] = useState(true);

    // Función para manejar el scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false); // Oculta la flecha cuando se hace scroll hacia abajo
      } else {
        setShowArrow(true);  // Muestra la flecha si el scroll está al inicio
      }
    };

    const scrollToSection = () => {
      console.log("acruiv")
      const section = document.getElementById("about"); // Selecciona la siguiente sección
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Scroll suave hacia la sección
      }
    };  

    useEffect(() => {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const x = (clientX / window.innerWidth - 0.5) * 30; // Movimiento horizontal
        const y = (clientY / window.innerHeight - 0.5) * 30; // Movimiento vertical
  
        // Aplica transformación a los elementos del hero
        const heroElements = document.querySelectorAll(".hero h1, .hero p, .profile-photo img, .cta-button");
        heroElements.forEach((element) => {
          element.style.transform = `translate(${x}px, ${y}px)`;
        });
      };
  
      // Añadir el evento de mousemove
      window.addEventListener("mousemove", handleMouseMove);
  
      // Limpiar el evento cuando el componente se desmonta
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      // Limpieza del evento de scroll cuando el componente se desmonta
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="profile-photo">
            <img src={url + `portait.JPG`} alt="That's me :)" />
          </div>

          <h1>Hi! I'm Javier Ramírez</h1>
          <p>Telematics Engineer | Software Developer | Data Visualization Specialist</p>
          <br></br>
          <a href="#projects" className="cta-button">See My Projects</a>
        </div>

        <div className={`scroll-arrow ${!showArrow ? 'hidden' : ''}`} onClick={scrollToSection}>
          <span>▼</span>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a telematics engineer with two years of experience in frontend development, 
            focusing on libraries like D3.js for data visualization. My goal is to combine my passion for development 
            and user experience to create interactive and dynamic interfaces.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <h3>My University Thesis</h3>
              <br></br>
              <p>In my final university project, I collaborated on the Classpip project, a free open source gamification initiative where I made improvements and implemented a geocaching mode using geolocation, OpenStreetMaps APIs...</p>
              <div className="image-container">
                <img src={url+'images/classpip_demo1.gif'} alt={"Classpip"} />
              </div>

              <p>
                If you are more interested in my thesis, you can download the project report {" "}
                 <a href={url + 'assets/JRM_thesis.pdf'} target="_blank" rel="noopener noreferrer"  class='link'> 
                here
                </a>.
              </p>
              <br></br>
              <br></br>
              <a href="https://github.com/Angelfm98/classpip-dashboard/tree/branch_javi" className="cta-button">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>My work at IEEC</h3>
              <p>In my two years of work at the Institut d'Estudis Espacials de Catalunya I have been part of the Gaia4Sustainability project, in this project dedicated to the outreach of issues related to light pollution and the effects it produces in our lives. As part of G4S, I worked on the FreeDSM project, the development of a device capable of measuring the amount of irradiance of a location in an affordable and long-lasting way to compare it with the measurements obtained from the Gaia satellite and thus obtain the amount of light pollution. As part of this infrastructure I developed, for example, a model that would represent, at the desired time and place, the amount of irradiance received at that moment according to various astronomical parameters, in addition to implementing backends in flask, docker...</p>
              <div className="image-container">
                <img src={url+'images/gambons_demo.gif'} alt={"G4S model"} />
              </div>
              <br></br>
              <br></br>
              <a href="https://gaia4sustainability.eu/gaia-4-sustainability/" className="cta-button">Visit G4S</a><a href="https://gaia4sustainability.eu/gambons/" className="cta-button">Visit Irradiance Model</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact</h2>
          <p>If you're interested in collaborating or have any questions, feel free to reach out!</p>
          <br></br>
          <a href="mailto:jramirezsamc@gmail.com" className="cta-button">Send an Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Javier Ramírez. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
