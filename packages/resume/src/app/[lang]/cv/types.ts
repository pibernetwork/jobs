import { ReactElement, SVGProps } from 'react';

type I18N<T> = {

  en: T;
};

export type I18NString = I18N<string>;

export type I18NPhone = I18N<{ label: string; value: string }>;

export type Titles = I18NString[];

export interface Metadata {
  title: I18NString;
}

export interface Labels {
  years: I18NString;
  title: I18NString;
  summary: I18NString;
  experience: I18NString;
  education: I18NString;
  achievements: I18NString;
  skill: I18NString;
  language: I18NString;
  technology: I18NString;
  tools: I18NString;
  methodology: I18NString;
  to: I18NString;
}

export interface Personal {
  name: string;
  email: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  github: string;
  phone: I18NPhone;
  location: {
    label: I18NString;
    maps: string;
  };
}

export interface I18NExperience {
  company: string;
  title: I18NString;
  skills: string[];
  start: I18NString;
  end: I18NString;
  location: I18NString;
  description: I18NString;
  achievements: I18NString[];
}

export interface College {
  title: string;
  start: string;
  end: string;
  university: string;
  location: string;
}

export type Education = I18N<College>;

export interface TechnologyGroup {
  title: I18NString;
  skills: Technology[];
}

export interface Technology {
  title: string;
  age: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

export interface Language {
  title: I18NString;
  quality: I18NString;
}

export interface Library {
  name: string;
  current: boolean;
}

export type Methodology = I18NString[];

export interface Resume {
  lang: keyof I18NString;
  personal: Personal;
  labels: Labels;
  titles: Titles;
  summary: I18NString;
  experiences: I18NExperience[];
  methodology: I18NString[];
  technologies: TechnologyGroup[];
  education: Education;
  languages: Language[];
}
