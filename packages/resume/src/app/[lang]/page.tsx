import { Metadata } from 'next';
import { metadata } from './cv/data/data';
import { Locale } from './cv/data/languages';
import Resume from './cv/resume';

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
    title: metadata.title[lang],
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <Resume lang={lang} />;
}
