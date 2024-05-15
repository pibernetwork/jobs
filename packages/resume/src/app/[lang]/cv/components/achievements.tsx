import { useResumeContext } from '../context/useResumeContext';
import Section from './section';

export default function Achievements() {
  const { labels, achievements } = useResumeContext();

  return (
    <Section title={labels.achievements}>
      <ul className="list-disc list-inside">
        {achievements.map((achievement) => (
          <li key={achievement} className="text-sm">
            {achievement}
          </li>
        ))}
      </ul>
    </Section>
  );
}
