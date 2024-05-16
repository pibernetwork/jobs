import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';
import ExperienceCard from './experience-card';

export default function Experiences() {
  const { labels, experiences } = useResumeContext();

  return (
    <Section title={labels.experience}>
      <div className="divide-y">
        {experiences.map((entry) => (
          <ExperienceCard key={entry.title} entry={entry} />
        ))}
      </div>
    </Section>
  );
}
