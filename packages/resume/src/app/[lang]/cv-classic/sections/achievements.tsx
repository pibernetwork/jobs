import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Achievements() {
  const { labels, achievements, lang } = useResumeContext();

  return (
    <Section title={labels.achievements[lang]}>
      <div className="divide-y">
        {achievements.map(({ title, description }) => (
          <div key={title} className="text-xs p-1">
            - <span className="font-bold">{title}</span>: {description}
          </div>
        ))}
      </div>
    </Section>
  );
}
