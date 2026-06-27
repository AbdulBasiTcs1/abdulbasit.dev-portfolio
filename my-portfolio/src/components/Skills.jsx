import { skills } from '../data/portfolio';

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="sectionLabel">Skills</p>
      <h2>Technologies I work with</h2>

      <div className="skillsGrid">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
