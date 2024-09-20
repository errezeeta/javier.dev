
import './App.css';
import React, {useEffect} from 'react';


function App() {
    // Añadir el efecto parallax en el movimiento del ratón
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

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="profile-photo">
            <img src={`https://errezeeta.github.io/web/portait.JPG`} alt="That's me :)" />
          </div>

          <h1>Hi! I'm Javier Ramírez</h1>
          <p>Telematics Engineer | UX Engineer | Data Visualization Specialist</p>
          <br></br>
          <a href="#projects" className="cta-button">See My Projects</a>
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
