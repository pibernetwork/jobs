'use client';

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
import Education from './sections/education';
import Experiences from './sections/experiences';
import Header from './sections/header';
import Languages from './sections/languages';
import Methodology from './sections/methodology';
import Skills from './sections/skills';
import Summary from './sections/summary';

export default function Resume() {
  return (
    <ResumeContext.Provider
      value={{
        lang: 'en',
        personal,
        titles,
        labels,
        summary,
        experiences,
        education,
        methodology,
        languages,
        technologies,
      }}
    >
      <div>
        <div className="m-4 w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg print:m-0  print:rounded-none print:shadow-none mx-auto overflow-y-hidden">
          <Header />
          <Summary />
          <Experiences />
          <Skills />
          <Methodology />
          <Education />
          <Languages />
        </div>

      </div>
    </ResumeContext.Provider>
  );
}
