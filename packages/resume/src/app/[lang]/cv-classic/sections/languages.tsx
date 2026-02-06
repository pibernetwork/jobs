import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Languages() {
  const { labels, languages, lang } = useResumeContext();

  return (
    <Section title={labels.language[lang]}>
      <div className="p-1">
        {languages.map((language) => {
          return (
            <p key={language.title[lang]} className="text-xs">
              - {language.title[lang]} - {language.quality[lang]}
            </p>
          );
        })}
      </div>
    </Section>
  );
}
