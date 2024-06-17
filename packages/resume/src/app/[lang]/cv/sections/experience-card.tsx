import Duration from '../components/duration';
import Location from '../components/location';
import { useResumeContext } from '../context/useResumeContext';
import { I18NExperience } from '../types';

export default function ExperienceCard({
  entry: { company, title, start, end, responsabilities, location },
}: {
  entry: I18NExperience;
}) {
  const { lang } = useResumeContext();

  return (
    <div key={company} className="my-1 p-1">
      <h3 className="text-lg font-bold leading-tight">{title[lang]}</h3>
      <Location name={company} location={location[lang]} />
      <Duration start={start[lang]} end={end[lang]} />

      {responsabilities.map((responsability) => (
        <div key={responsability[lang]} className="text-xs">
          - {responsability[lang]}
        </div>
      ))}
    </div>
  );
}
