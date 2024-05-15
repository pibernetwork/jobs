export type Titles = string[];

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

export interface LanguageOrFramework {
  title: string;
  age: number;
}

export interface Library {
  name: string;
  current: boolean;
}

export interface Tools {
  title: string;
  libraries: Library[];
}
