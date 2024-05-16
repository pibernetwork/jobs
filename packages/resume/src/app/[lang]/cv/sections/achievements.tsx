import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Achievements() {
  const { labels, achievements } = useResumeContext();

  return (
    <Section title={labels.achievements}>
      <ul className="">
        {achievements.map((achievement) => (
          <li key={achievement} className="text-xs">
            - {achievement}
          </li>
        ))}
      </ul>
    </Section>
  );
}
