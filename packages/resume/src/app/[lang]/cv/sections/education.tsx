import Duration from '../components/duration';
import Location from '../components/location';
import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Education() {
  const { labels, education, lang } = useResumeContext();

  const collage = education[lang]!;

  return (
    <Section title={labels.education[lang]}>
      <div key={collage.title} className="p-2">
        <h3 className="text-sm font-bold leading-tight">{collage.title}</h3>
        <Location name={collage.university} location={collage.location} />
        <Duration start={collage.start} end={collage.end} />
      </div>
    </Section>
  );
}
