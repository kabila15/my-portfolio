import "./index.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaReact, FaServer, FaDatabase, FaTools } from "react-icons/fa";

function App() {
  const form = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_9tqlekv",
      "template_bhziczh",
      form.current,
      "8uo1lyZM9gOo6Q6yo"
    )
    .then(
      () => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
      },
     (error) => {
  console.log(error);
  console.log(error.text);
  console.log(error.status);
  alert("Failed to send message ❌");
}
    );
};
  return (
    <>
  
      {/* Navbar */}
<nav className="navbar">

  {/* Hamburger Button */}
  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

  <div className="logo">MY PORTFOLIO</div>

  <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

    <li>
      <a href="#home" onClick={() => setMenuOpen(false)}>
        Home
      </a>
    </li>

    <li>
      <a href="#about" onClick={() => setMenuOpen(false)}>
        About
      </a>
    </li>

    <li>
      <a href="#skills" onClick={() => setMenuOpen(false)}>
        Skills
      </a>
    </li>

    <li>
      <a href="#projects" onClick={() => setMenuOpen(false)}>
        Projects
      </a>
    </li>

    <li>
      <a href="#internship" onClick={() => setMenuOpen(false)}>
        Internship
      </a>
    </li>

    <li>
      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>
    </li>

  </ul>

</nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-left">

          <h3>Hello, I'm</h3>

          <h1>Kabila</h1>
          <h2>Aspiring Web Developer | Frontend Developer</h2>

<p>
  Passionate about building responsive and user-friendly
  web applications using HTML, CSS, JavaScript and React.js.
  I enjoy creating modern interfaces and continuously improving
  my web development skills.
</p>
          <div className="hero-buttons">
           <a
  href="/MYRESUME.pdf"
  download
>
  <button className="btn">
    Download Resume
  </button>
</a>
            <a href="#projects">
  <button className="btn-outline">
    View Projects
  </button>
</a>
          </div>

        </div>

        <div className="hero-right">

          <div className="profile-circle">
            <img
              src="kabila.jpeg"
              alt="Profile"
            />
          </div>

        </div>

      </section>
      {/* About Section */}

<section id="about" className="about">

  <h2 className="section-title">About Me</h2>

  <div className="about-container">

    <div className="about-card">

      <h3>Who Am I?</h3>
<p>
  I'm Kabila, an aspiring Web Developer and Frontend Developer
  with a passion for creating modern, responsive, and
  user-friendly web applications.
</p>

<p>
  I have hands-on experience with HTML, CSS, JavaScript,
  and React.js, along with basic knowledge of Java, Python,
  PHP, and MySQL. I enjoy building practical projects and
  continuously improving my development skills.
</p>
   
    </div>

    <div className="about-stats">

      <div className="stat-card">
        <h1>2+</h1>
        <p>Projects</p>
      </div>

      <div className="stat-card">
        <h1>2+</h1>
        <p>Internship</p>
      </div>

      <div className="stat-card">
        <h1>8+</h1>
        <p>Technologies</p>
      </div>

      <div className="stat-card">
        <h1>100%</h1>
        <p>Learning</p>
      </div>

    </div>

  </div>

</section>

{/* Skills */}
<section id="skills" className="skills">

  <h2 className="section-title">My Skills</h2>

  <div className="skills-grid">

    <div className="skill-box">
      <h3><FaReact /> Frontend</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>
    </div>

    <div className="skill-box">
     <h3><FaServer /> Backend</h3>
      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>PHP</li>
      </ul>
    </div>

    <div className="skill-box">
     <h3><FaDatabase /> Database</h3>
      <ul>
        <li>MySQL</li>
      </ul>
    </div>

    <div className="skill-box">
     <h3><FaTools /> Tools</h3>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>VS Code</li>
      </ul>
    </div>

  </div>

</section>
{/* Projects */}

<section id="projects" className="projects">

  <h2 className="section-title">My Projects</h2>

  <div className="projects-container">

    <div className="project-card">
    <div className="project-content">

        <h3>Coffee Shop Website</h3>
        <p>A responsive coffee shop website with a modern and attractive user interface.
It allows users to browse products and manage items through a shopping cart.
Designed with smooth navigation and a user-friendly experience.</p>

<div className="project-buttons">

  <button
    className="project-btn"
    onClick={() =>
      window.open(
        "https://kabila15.github.io/Coffee-Shop/",
        "_blank"
      )
    }
  >
    Live Demo
  </button>

  <button
    className="github-btn"
    onClick={() =>
      window.open(
        "https://github.com/kabila15/Coffee-Shop",
        "_blank"
      )
    }
  >
    GitHub
  </button>

</div>


      </div>

    </div>


    <div className="project-card">


      <div className="project-content">

        <h3>Smart AI Hospital Management System</h3>

        <p>
        A smart hospital management system for online appointments and patient management.
It includes an AI symptom checker, doctor scheduling, and real-time queue tracking.
Patients receive appointment details and updates through automated WhatsApp notifications.
        </p>
        <div className="project-buttons">
          <button className="project-btn"
            onClick={() =>
      window.open(
        "https://smartaihms.free.je/Smart-AI-Hospital-Management-System-main/?i=1",
        "_blank"
      )
    }>
      Live Demo</button>
          <button className="github-btn"
           onClick={() =>
      window.open(
        "https://github.com/kabila15/Smart-AI-Hospital-Management-System",
        "_blank"
      )
    }>GitHub</button>
        </div>


      </div>

    </div>


  </div>

</section>
{/* Internship Section */}

<section id="internship" className="internship">

  <h2 className="section-title">Internship</h2>

  <div className="internship-container">

    {/* Internship 1 */}

    <div className="internship-card">

      <h3>Zoho Marketplace Intern</h3>

      <h4>Zoho Corporation</h4>

      <p className="duration">Duration: 1 Month</p>

      <ul>
        <li>Developed a Zoho Marketplace Extension.</li>

        <li>
          Integrated Zoho CRM with other Zoho applications using
          Sigma.
        </li>

        <li>
          Worked with Zoho CRM APIs to exchange data between
          applications.
        </li>

        <li>
          Learned CRM workflows, business automation, and extension
          deployment.
        </li>

      </ul>

    </div>

    {/* Internship 2 */}

    <div className="internship-card">

      <h3>Web Development Intern</h3>

      <h4>Media Wave</h4>

      <p className="duration">Duration: 1 Month</p>

      <ul>
        <li>
          Developed responsive web pages using HTML, CSS and
          JavaScript.
        </li>

        <li>
          Improved UI design and mobile responsiveness.
        </li>

        <li>
          Learned real-time project workflow and debugging
          techniques.
        </li>

        <li>
          Collaborated with the team to build and enhance web
          applications.
        </li>

      </ul>

    </div>

  </div>

</section>
{/* Contact */}

<section id="contact" className="contact">

  <h2 className="section-title">Contact Me</h2>

  <div className="contact-container">

    <div className="contact-info">

      <h3>Let's Connect </h3>

      <p>
        I'm always interested in learning, collaborating,
        and discussing new opportunities.
      </p>

      <p><strong>Email:</strong> vkabila88@gmail.com</p>
      <p><strong>Phone:</strong> +91 6369843994</p>
      <p><strong>Location:</strong> Tenkasi,Tamil Nadu</p>

    </div>

    <form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
>
<input
  type="text"
  name="user_name"
  placeholder="Your Name"
  required
/>
 <input
  type="email"
  name="user_email"
  placeholder="Your Email"
  required
/>     
<textarea
  rows="6"
  name="message"
  placeholder="Write your message..."
  required
></textarea>

      <button type="submit" className="btn">
        Send Message
      </button>

    </form>

  </div>

</section>

{/* Footer */}

<footer className="footer">

  <h2>Kabila</h2>

  <p>
    Thanks for visiting my portfolio ❤️
  </p>

  <div className="social-links">

      <a
      href="https://github.com/kabila15"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
<a
  href="https://www.linkedin.com/in/kabila15"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>


  </div>

  <p className="copyright">
    © 2026 Kabila | All Rights Reserved.
  </p>

</footer>
    </>
  );
}

export default App;