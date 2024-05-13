export type Titles = string[];

export interface Personal {
  email: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  location: {
    city: string;
    state: string;
    maps: string;
  };
}
