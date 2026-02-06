import Section from '../components/section';
import { useResumeContext } from '../context/useResumeContext';

export default function Summary() {
  const { labels, summary, lang } = useResumeContext();

  return (
    <Section title={labels.summary[lang]}>
      <p className="text-xs px-2 pt-1">{summary[lang]}</p>
    </Section>
  );
}
