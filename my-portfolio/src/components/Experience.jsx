import { BriefcaseBusiness } from 'lucide-react';
import { experience } from '../data/portfolio';

function Experience() {
  return (
    <section id="experience" className="section">
      <p className="sectionLabel">Experience</p>
      <h2>My development journey</h2>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timelineItem" key={`${item.year}-${item.title}`}>
            <div className="timelineIcon">
              <BriefcaseBusiness size={20} />
            </div>

            <div className="timelineContent">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
