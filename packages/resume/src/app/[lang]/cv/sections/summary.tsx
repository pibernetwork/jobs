import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Summary() {
  const { labels, summary } = useResumeContext();

  return (
    <Section title={labels.summary}>
      <p className="text-xs">{summary}</p>
    </Section>
  );
}
