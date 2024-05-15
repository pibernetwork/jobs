import { useResumeContext } from '../context/useResumeContext';
import Section from './section';

export default function Summary() {
  const { labels, summary } = useResumeContext();

  return (
    <Section title={labels.summary}>
      <p>{summary}</p>
    </Section>
  );
}
