import CalendarIcon from '../icons/calendar-icon';

export default function Duration({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  return (
    <p className="flex items-center text-xs">
      <span className="mr-1 inline">
        <CalendarIcon />
      </span>{' '}
      {start} to {end}
    </p>
  );
}
