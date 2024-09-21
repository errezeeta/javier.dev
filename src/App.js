
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
          <p>Telematics Engineer | UX Engineer | Data Visualization Specialist</p>
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
              <h3>Project 1</h3>
              <p>Brief description of your project.</p>
              <a href="https://github.com/your-profile/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Brief description of another project.</p>
              <a href="https://github.com/your-profile/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
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
