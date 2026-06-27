
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="sectionLabel">Contact</p>
      <h2>Let’s build something great together.</h2>

      <p>
        Have a project idea, collaboration, or freelance work? Feel free to reach out.
      </p>

      <div className="contactInfo">
        <a href={`mailto:${profile.email}`}>
          <Mail size={18} />
          {profile.email}
        </a>

        <span>
          <MapPin size={18} />
          {profile.location}
        </span>
      </div>

      <div className="socialLinks">
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github />
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact;
