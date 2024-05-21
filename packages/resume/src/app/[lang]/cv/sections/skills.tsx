import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Skills() {
  const { labels, technology } = useResumeContext();

  return (
    <Section title={labels.skill}>
      <>
        <ul className="flex flex-wrap gap-2 p-2">
          {technology.map(({ title, age, Icon }) => (
            <li key={title} className="text-sm flex items-center underline">
              <span className="mr-1" title={title}>
                {Icon && <Icon />}
              </span>
              {title}
            </li>
          ))}
        </ul>
      </>
    </Section>
  );
}
