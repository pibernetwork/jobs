import Duration from '../components/duration';
import Location from '../components/location';
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
            <Location
              name={education.university}
              location={education.location}
            />
            <Duration start={education.start} end={education.end} />
          </div>
        ))}
      </div>
    </Section>
  );
}
