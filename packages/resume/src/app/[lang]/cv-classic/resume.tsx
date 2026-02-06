'use client';

import Column from './components/column';
import { ResumeContext } from './context/resume.context';
import {
  education,
  experiences,
  labels,
  languages,
  methodology,
  personal,
  summary,
  technologies,
  titles,
} from './data/data';
import { Locale } from './data/languages';
import { Achievement } from './types';
import Achievements from './sections/achievements';
import Education from './sections/education';
import Experiences from './sections/experiences';
import Header from './sections/header';
import Languages from './sections/languages';
import Methodology from './sections/methodology';
import Skills from './sections/skills';
import Summary from './sections/summary';

interface ResumeProps {
  lang: Locale;
  intl: { achievements: Achievement[] };
}

export default function Resume({ lang, intl }: ResumeProps) {
  const { achievements } = intl;

  return (
    <ResumeContext.Provider
      value={{
        lang,
        personal,
        titles,
        labels,
        summary,
        experiences,
        education,
        achievements: achievements,
        methodology,
        languages,
        technologies,
      }}
    >
      <div>
        <div className="m-4 h-[297mm]  w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg print:m-0  print:rounded-none print:shadow-none mx-auto overflow-y-hidden">
          <Header />
          <div className="grid grid-cols-[5fr,3fr] divide-x">
            <Column>
              <Summary />
              <Experiences />
              <Education />
            </Column>
            <Column>
              <Achievements />
              <Skills />
              <Methodology />
              <Languages />
            </Column>
          </div>
        </div>
        <div className="print:hidden my-4">
          <a href="/en" className="p-4 bg-red-400">
            English
          </a>
          <a href="/pt" className="p-4 bg-yellow-400">
            Português
          </a>
        </div>
      </div>
    </ResumeContext.Provider>
  );
}
