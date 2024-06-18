import { useResumeContext } from '../context/useResumeContext';

export default function Header() {
  const { personal, titles, lang } = useResumeContext();

  const personalLinks = [
    {
      title: personal.phone[lang].label,
      link: `tel:${personal.phone[lang].value}`,
    },
    {
      title: personal.email,
      link: `mailto:${personal.email}`,
    },
    {
      title: 'Linkedin',
      link: personal.linkedin,
    },
    {
      title: 'Github',
      link: personal.github,
    },

    {
      title: `${personal.location.label[lang]}`,
      link: personal.location.maps,
    },
  ];

  return (
    <>
      <h1 className="text-xl text-center uppercase font-bold">
        {personal.name}
      </h1>

      <ul className="flex divide-x justify-center">
        {titles.map((title) => {
          return (
            <li key={title[lang]} className="px-2 text-lg">
              {title[lang]}
            </li>
          );
        })}
      </ul>

      <ul className="flex divide-x justify-center flew-wrap">
        {personalLinks.map(({ title, link }) => {
          return (
            <li key={title} className="px-2 text-base">
              <a href={link}>{title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
