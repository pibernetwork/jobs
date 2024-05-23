import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Languages() {
  const { labels, languages } = useResumeContext();

  return (
    <Section title={labels.language}>
      <div className="p-1">
        {languages.map((language) => {
          return (
            <p key={language.title} className="text-xs">
              - {language.title} - {language.quality}
            </p>
          );
        })}
      </div>
    </Section>
  );
}
