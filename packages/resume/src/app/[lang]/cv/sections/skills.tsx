import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Skills() {
  const { labels, technology, tools, methodology } = useResumeContext();

  return (
    <Section title={labels.skill}>
      <>
        <ul>
          {technology.map(({ title, age, Icon }) => (
            <li key={title} className="text-sm flex items-center">
              <span className="mr-1" title={title}>
                {Icon && <Icon />}
              </span>
              {title} - {age}+ {labels.years.toLocaleLowerCase()}
            </li>
          ))}
        </ul>
      </>
    </Section>
  );
}
