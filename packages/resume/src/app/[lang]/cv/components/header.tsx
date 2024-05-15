import { useResumeContext } from '../context/useResumeContext';

export default function Header() {
  const { labels, personal, titles } = useResumeContext();

  const personalLinks = [
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
    // {
    //   title: 'Instagram',
    //   link: personal.instagram,
    // },
    // {
    //   title: 'Facebook',
    //   link: personal.facebook,
    // },
    {
      title: `${personal.location.city} - ${personal.location.state} - ${personal.location.country}`,
      link: personal.location.maps,
    },
  ];

  return (
    <>
      <p className="text-center text-lg">{labels.title}</p>
      <h1 className="text-2xl text-center uppercase font-bold">
        {personal.name}
      </h1>

      <ul className="flex divide-x justify-center m-2">
        {titles.map((title) => {
          return (
            <li key={title} className="px-2 text-xl">
              {title}
            </li>
          );
        })}
      </ul>

      <ul className="flex divide-x justify-center mx-2 my-4 flew-wrap">
        {personalLinks.map(({ title, link }) => {
          return (
            <li key={title} className="px-2">
              <a href={link}>{title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
