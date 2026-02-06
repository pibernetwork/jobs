import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Methodology() {
  const { labels, methodology, lang } = useResumeContext();

  return (
    <Section title={labels.methodology[lang]}>
      <div className="p-1">
        {methodology.map((book) => (
          <p key={book[lang]} className="text-xs">
            - {book[lang]}
          </p>
        ))}
      </div>
    </Section>
  );
}
