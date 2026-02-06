import { Metadata } from 'next';
import { metadata } from './cv/data/data';
import Resume from './cv/resume';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: metadata.title.en,
  };
}

export default async function Page() {
  return <Resume />;
}
