import { Metadata } from 'next';
import { Locale, getDictionary } from './cv/dictionaries';
import Resume from './cv/resume';

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

export default function Page({ params: { lang } }: Props) {
  return <Resume lang={lang} />;
}
