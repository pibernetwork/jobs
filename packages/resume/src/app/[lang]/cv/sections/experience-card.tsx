import { Experience } from '../types';

export default function ExperienceCard({
  entry: { company, title, start, end, responsabilities, location },
}: {
  entry: Experience;
}) {
  return (
    <div key={company} className="my-1">
      <h3 className="text-lg font-bold leading-tight">{title}</h3>
      <p className="text-sm text-gray-600">
        {company} - {location}
      </p>
      <p className="text-xs">
        {start} to {end} - Remote
      </p>
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
