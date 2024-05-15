import clsx from 'clsx';
import { useResumeContext } from '../context/useResumeContext';
import Section from './section';

export default function Skills() {
  const { labels, technology, tools, books } = useResumeContext();

  return (
    <Section title={labels.skill}>
      <>
        <h3>{labels.technology}</h3>
        <ul>
          {technology.map((techSkill) => (
            <li key={techSkill.title} className="text-sm">
              {techSkill.title} - {techSkill.age}+ years
            </li>
          ))}
        </ul>
        <h3>{labels.tools}</h3>
        <div>
          {tools.map(({ title, libraries }) => {
            return (
              <div key={title}>
                <h4>{title}</h4>
                <ul>
                  {libraries.map((library) => (
                    <li
                      key={library.name}
                      className={clsx({
                        'text-gray-400 line-through text-sm': !library.current,
                      })}
                    >
                      {library.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <h3>{labels.books}</h3>
        <ul>
          {books.map((book) => (
            <li key={book} className="text-sm">
              {book}
            </li>
          ))}
        </ul>
      </>
    </Section>
  );
}
