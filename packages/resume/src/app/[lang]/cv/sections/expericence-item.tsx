import Duration from '../components/duration';
import Location from '../components/location';
import { useResumeContext } from '../context/useResumeContext';
import { I18NExperience } from '../types';

export default function ExperienceItem({
  entry: {
    company,
    title,
    start,
    end,
    achievements,
    location,
    description,
    skills,
  },
}: {
  entry: I18NExperience;
}) {
  const { lang, labels } = useResumeContext();

  return (
    <div key={company} className="my-1 p-3 flex flex-col">
      <h3 className="text-lg font-bold leading-tight text-center mb-1">
        {title[lang]}
      </h3>
      <div className="flex justify-between">
        <Location name={company} location={location[lang]} />
        <Duration start={start[lang]} end={end[lang]} />
      </div>
      <div className="text-xs my-1">{description[lang]}</div>
      <div className="text-xs my-1">
        {labels.skill[lang]}: {skills.join(`, `)}.
      </div>
      {achievements.map((achievements) => (
        <div key={achievements[lang]} className="text-xs">
          - {achievements[lang]}
        </div>
      ))}
    </div>
  );
}
