import clsx from 'clsx';
import { Metadata } from 'next';
import Section from './components/section';
import { languageOrFramework, personal, tools } from './data';
import { Locale, getDictionary } from './dictionaries';

type Props = {
  params: {
    lang: Locale;
  };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const intl = await getDictionary(lang);

  return {
    title: intl.metadata.title,
  };
}

export default async function Page({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);

  const {
    titles,
    labels,
    summary,
    experience,
    educations,
    achievements,
    books,
    languages,
  } = intl;

  const personalLinks = [
    {
      title: personal.email,
      link: `mailto:${personal.email}`,
    },
    {
      title: 'Linkedin',
      link: personal.linkedin,
    },
    {
      title: 'Github',
      link: personal.github,
    },
    // {
    //   title: 'Instagram',
    //   link: personal.instagram,
    // },
    // {
    //   title: 'Facebook',
    //   link: personal.facebook,
    // },
    {
      title: `${personal.location.city} - ${personal.location.state} - ${personal.location.country}`,
      link: personal.location.maps,
    },
  ];

  return (
    <div>
      <div className="m-1 h-[297mm] max-h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg print:m-0 print:h-screen print:w-screen print:rounded-none print:shadow-none mx-auto">
        <p className="text-center text-lg">{labels.title}</p>
        <h1 className="text-2xl text-center uppercase font-bold">
          {personal.name}
        </h1>

        <ul className="flex divide-x justify-center m-2">
          {titles.map((title) => {
            return (
              <li key={title} className="px-2 text-xl">
                {title}
              </li>
            );
          })}
        </ul>

        <ul className="flex divide-x justify-center mx-2 my-4 flew-wrap">
          {personalLinks.map(({ title, link }) => {
            return (
              <li key={title} className="px-2">
                <a href={link}>{title}</a>
              </li>
            );
          })}
        </ul>
        <div className="grid grid-cols-[3fr,2fr]">
          <div className="p-1">
            <Section title={labels.summary}>
              <p>{summary}</p>
            </Section>
            <div className="m-2">
              <h2 className="text-xl">{labels.experience}</h2>
              <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="divide-y">
                {experience.map((entry) => (
                  <div key={entry.company} className="m-2">
                    <h3 className="text-lg">{entry.title}</h3>
                    <p className="text-base">
                      {entry.company} - {entry.start} to {entry.end} - Remote
                    </p>
                    <ul className="list-disc list-inside">
                      {entry.responsabilities.map((responsability) => (
                        <li key={responsability} className="text-sm">
                          {responsability}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}{' '}
              </div>
            </div>
            <div>
              <h2 className="text-xl">{labels.education}</h2>
              <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="divide-y">
                {educations.map((education) => (
                  <div key={education.title}>
                    <h3>{education.title}</h3>
                    <p>
                      {education.university} - {education.location}
                    </p>
                    <p>
                      {education.start} to {education.end}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl">{labels.language}</h2>
              <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div>
                <ul>
                  {languages.map((language) => {
                    return (
                      <li key={language.title}>
                        {language.title} - {language.quality}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="p-1">
            <div>
              <h2 className="text-xl">{labels.achievements}</h2>
              <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <ul className="list-disc list-inside">
                {achievements.map((achievement) => (
                  <li key={achievement} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl">{labels.skill}</h2>
              <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3>Language and frameworks</h3>
              <ul>
                {languageOrFramework.map((skill) => (
                  <li key={skill.title}>
                    {skill.title} - {skill.age}+ years
                  </li>
                ))}
              </ul>
              <h3>Tools</h3>

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
                              'text-gray-400 line-through': !library.current,
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

              <h3>Books</h3>
              <ul>
                {books.map((book) => (
                  <li key={book}>{book}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="print:hidden my-4">
          <a href="/en/cv" className="p-4 bg-red-400">
            English
          </a>
          <a href="/pt/cv" className="p-4 bg-yellow-400">
            Português
          </a>
        </div>
      </div>
    </div>
  );
}
