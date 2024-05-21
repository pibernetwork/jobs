import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Methodology() {
  const { labels, methodology } = useResumeContext();

  return (
    <Section title={labels.methodology}>
      {methodology.map((book) => (
        <div key={book} className="text-sm p-1">
          {book}
        </div>
      ))}
    </Section>
  );
}
