import Duration from '../components/duration';
import Location from '../components/location';
import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Education() {
  const { labels, educations } = useResumeContext();

  return (
    <Section title={labels.education}>
      <div className="divide-y">
        {educations.map(({ title, university, location, start, end }) => (
          <div key={title}>
            <h3 className="text-sm font-bold leading-tight">{title}</h3>
            <Location name={university} location={location} />
            <Duration start={start} end={end} />
          </div>
        ))}
      </div>
    </Section>
  );
}
