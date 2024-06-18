import Duration from '../components/duration';
import Location from '../components/location';
import { useResumeContext } from '../context/useResumeContext';
import { I18NExperience } from '../types';

export default function ExperienceItem({
  entry: { company, title, start, end, achievements, location, description },
}: {
  entry: I18NExperience;
}) {
  const { lang } = useResumeContext();

  return (
    <div key={company} className="my-1 p-1">
      <h3 className="text-lg font-bold leading-tight">{title[lang]}</h3>
      <Location name={company} location={location[lang]} />
      <Duration start={start[lang]} end={end[lang]} />
      <div className="text-xs my-1">{description[lang]}</div>
      {achievements.map((achievements) => (
        <div key={achievements[lang]} className="text-xs">
          - {achievements[lang]}
        </div>
      ))}
    </div>
  );
}
