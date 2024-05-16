import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Methodology() {
  const { labels, methodology } = useResumeContext();

  return (
    <Section title={labels.methodology}>
      <>
        <ul>
          {methodology.map((book) => (
            <li key={book} className="text-sm">
              {book}
            </li>
          ))}
        </ul>
      </>
    </Section>
  );
}
