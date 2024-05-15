import { useResumeContext } from '../context/useResumeContext';
import Section from './section';

export default function Languages() {
  const { labels, languages } = useResumeContext();

  return (
    <Section title={labels.language}>
      <ul>
        {languages.map((language) => {
          return (
            <li key={language.title}>
              {language.title} - {language.quality}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
