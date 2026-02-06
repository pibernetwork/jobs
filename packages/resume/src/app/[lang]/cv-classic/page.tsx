import { Metadata } from 'next';
import { metadata } from './data/data';
import { getDictionary, Locale } from './data/languages';
import Resume from './resume';

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${metadata.title[lang]} (Classic)`,
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <Resume lang={lang} achievements={dict.achievements} />;
}
