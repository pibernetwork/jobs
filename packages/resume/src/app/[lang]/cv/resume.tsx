'use client';

import { use } from 'react';
import Achievements from './components/achievements';
import Education from './components/education';
import Experiences from './components/experiences';
import Header from './components/header';
import Languages from './components/languages';
import Skills from './components/skills';
import Summary from './components/summary';
import { ResumeContext } from './context/resume.context';
import { personal, technology, tools } from './data';
import { Locale, getDictionary } from './dictionaries';

export default function Resume({ lang }: { lang: Locale }) {
  const intl = use(getDictionary(lang));

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

  return (
    <ResumeContext.Provider
      value={{
        personal,
        titles,
        labels,
        summary,
        experiences: experience,
        educations,
        achievements: achievements,
        books,
        languages,
        technology,
        tools,
      }}
    >
      <div>
        <div className="m-1 h-[297mm] max-h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg print:m-0 print:h-screen print:w-screen print:rounded-none print:shadow-none mx-auto overflow-y-scroll">
          <Header />

          <div className="grid grid-cols-[3fr,2fr] divide-x">
            <div className="p-1">
              <Summary />
              <Experiences />
              <Education />
              <Languages />
            </div>
            <div className="p-1">
              <Achievements />
              <Skills />
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
    </ResumeContext.Provider>
  );
}
