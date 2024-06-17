import { Metadata } from 'next';
import { metadata } from './cv/data/data';
import { Locale } from './cv/data/languages';
import Resume from './cv/resume';

type Props = {
  params: {
    lang: Locale;
  };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  return {
    title: metadata.title[lang],
  };
}

export default function Page({ params: { lang } }: Props) {
  return <Resume lang={lang} />;
}
