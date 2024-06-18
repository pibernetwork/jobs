import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';
import ExperienceItem from './expericence-item';

export default function Experiences() {
  const { labels, experiences, lang } = useResumeContext();

  return (
    <Section title={labels.experience[lang]}>
      <div className="divide-y">
        {experiences.map((entry) => (
          <ExperienceItem key={entry.title[lang]} entry={entry} />
        ))}
      </div>
    </Section>
  );
}
