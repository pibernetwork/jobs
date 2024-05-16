import Duration from '../components/duration';
import Location from '../components/location';
import { Experience } from '../types';

export default function ExperienceCard({
  entry: { company, title, start, end, responsabilities, location },
}: {
  entry: Experience;
}) {
  return (
    <div key={company} className="my-1">
      <h3 className="text-lg font-bold leading-tight">{title}</h3>
      <Location name={company} location={location} />
      <Duration start={start} end={end} />
      <ul className="">
        {responsabilities.map((responsability) => (
          <li key={responsability} className="text-xs">
            - {responsability}
          </li>
        ))}
      </ul>
    </div>
  );
}
