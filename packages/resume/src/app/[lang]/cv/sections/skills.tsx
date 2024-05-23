import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Skills() {
  const { labels, technologies } = useResumeContext();

  return (
    <Section title={labels.skill}>
      <div className="p-1">
        {technologies.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="text-xs font-bold">{title}</h3>
            <ul className="flex flex-wrap gap-2 p-2">
              {skills.map(({ title, age, Icon }) => (
                <li key={title} className="text-xs flex items-center underline">
                  <span className="mr-1" title={title}>
                    {Icon && <Icon />}
                  </span>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
