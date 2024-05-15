export type Titles = string[];

export interface Labels {
  title: string;
  summary: string;
  experience: string;
  education: string;
  achievements: string;
  skill: string;
  language: string;
  technology: string;
  tools: string;
  books: string;
}

export interface Personal {
  name: string;
  email: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  github: string;
  location: {
    city: string;
    state: string;
    country: string;
    maps: string;
  };
}

export interface Experience {
  company: string;
  title: string;
  start: string;
  end: string;
  responsabilities: string[];
}

export interface Education {
  title: string;
  start: string;
  end: string;
  university: string;
  location: string;
}

export interface Technology {
  title: string;
  age: number;
}

export interface Language {
  title: string;
  quality: string;
}

export interface Library {
  name: string;
  current: boolean;
}

export interface Tools {
  title: string;
  libraries: Library[];
}

export interface Resume {
  personal: Personal;
  labels: Labels;
  titles: Titles;
  summary: string;
  experiences: Experience[];
  books: string[];
  technology: Technology[];
  tools: Tools[];
  educations: Education[];
  achievements: string[];
  languages: Language[];
}
