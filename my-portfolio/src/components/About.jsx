
import { Code2, Rocket } from 'lucide-react';

function About() {
  return (
    <section id="about" className="section about">
      <div>
        <p className="sectionLabel">About Me</p>
        <h2>Passionate developer focused on clean digital experiences.</h2>
      </div>

      <div className="aboutCards">
        <article>
          <Code2 />
          <h3>Frontend Development</h3>
          <p>
            I create responsive interfaces with React, modern CSS, and clean component
            architecture.
          </p>
        </article>

        <article>
          <Rocket />
          <h3>Full Stack Projects</h3>
          <p>
            I build MERN stack applications with REST APIs, databases, and scalable
            project structure.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
