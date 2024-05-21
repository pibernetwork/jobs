import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Languages() {
  const { labels, languages } = useResumeContext();

  return (
    <Section title={labels.language}>
      {languages.map((language) => {
        return (
          <div key={language.title} className="text-xs p-1">
            {language.title} - {language.quality}
          </div>
        );
      })}
    </Section>
  );
}
