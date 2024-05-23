import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Methodology() {
  const { labels, methodology } = useResumeContext();

  return (
    <Section title={labels.methodology}>
      <div className="p-1">
        {methodology.map((book) => (
          <p key={book} className="text-xs">
            - {book}
          </p>
        ))}
      </div>
    </Section>
  );
}
