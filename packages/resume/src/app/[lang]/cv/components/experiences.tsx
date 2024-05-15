import { useResumeContext } from '../context/useResumeContext';
import Section from './section';

export default function Experiences() {
  const { labels, experiences } = useResumeContext();

  return (
    <Section title={labels.experience}>
      <div className="divide-y">
        {experiences.map((entry) => (
          <div key={entry.company} className="m-2">
            <h3 className="text-lg">{entry.title}</h3>
            <p className="text-base">
              {entry.company} - {entry.start} to {entry.end} - Remote
            </p>
            <ul className="list-disc list-inside">
              {entry.responsabilities.map((responsability) => (
                <li key={responsability} className="text-sm">
                  {responsability}
                </li>
              ))}
            </ul>
          </div>
        ))}{' '}
      </div>
    </Section>
  );
}
