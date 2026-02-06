import { useResumeContext } from '../context/useResumeContext';
import CalendarIcon from '../icons/calendar-icon';

export default function Duration({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  const { labels, lang } = useResumeContext();

  return (
    <p className="flex items-center text-xs">
      <span className="mr-1 inline">
        <CalendarIcon />
      </span>{' '}
      {start} {labels.to[lang]} {end}
    </p>
  );
}
