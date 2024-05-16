import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Education() {
  const { labels, educations } = useResumeContext();

  return (
    <Section title={labels.education}>
      <div className="divide-y">
        {educations.map((education) => (
          <div key={education.title}>
            <h3>{education.title}</h3>
            <p>
              {education.university} - {education.location}
            </p>
            <p>
              {education.start} to {education.end}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
