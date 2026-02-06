import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';
import ExperienceCard from './experience-card';

export default function Experiences() {
  const { labels, experiences, lang } = useResumeContext();

  return (
    <Section title={labels.experience[lang]}>
      <div className="divide-y">
        {experiences.map((entry) => (
          <ExperienceCard key={`${entry.company}-${entry.title[lang]}`} entry={entry} />
        ))}
      </div>
    </Section>
  );
}
