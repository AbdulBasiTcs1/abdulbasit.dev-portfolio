import { ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../data/portfolio';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroContent">
        <p className="badge">Available for freelance work</p>

        <h1>
          Hi, I’m <span>{profile.name}</span>
          <br />
          {profile.role}
        </h1>

        <p className="heroText">
          I build modern, responsive, and user-friendly web applications using React,
          JavaScript, and full-stack technologies.
        </p>

        <div className="heroActions">
          <a href="#projects" className="btn primary">
            View Projects <ArrowUpRight size={18} />
          </a>

          <a href="/resume.pdf" className="btn secondary" download>
            Download CV <Download size={18} />
          </a>
        </div>
      </div>

      <div className="heroCard">
        <div className="profileCircle">
          {profile.name
            .split(' ')
            .map((word) => word[0])
            .join('')}
        </div>

        <div className="floatingTag tagOne">React</div>
        <div className="floatingTag tagTwo">Node.js</div>
        <div className="floatingTag tagThree">MongoDB</div>
      </div>
    </section>
  );
}

export default Hero;
