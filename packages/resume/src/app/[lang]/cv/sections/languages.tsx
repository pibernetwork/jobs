import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Languages() {
  const { labels, languages } = useResumeContext();

  return (
    <Section title={labels.language}>
      <ul>
        {languages.map((language) => {
          return (
            <li key={language.title} className="text-xs">
              {language.title} - {language.quality}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
