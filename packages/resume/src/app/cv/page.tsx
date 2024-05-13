import { useMemo } from "react";
import { personal, titles } from "./data";

export default function Page() {
  const personalLinks = useMemo(
    () => [
      {
        title: personal.email,
        link: `mailto:${personal.email}`,
      },
      {
        title: "Linkedin",
        link: personal.linkedin,
      },
      {
        title: "Instagram",
        link: personal.instagram,
      },
      {
        title: "Facebook",
        link: personal.facebook,
      },
      {
        title: `${personal.location.city} - ${personal.location.state}`,
        link: personal.location.maps,
      },
    ],
    []
  );

  return (
    <div>
      <div className="m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg print:m-0 print:h-screen print:w-screen print:rounded-none print:shadow-none mx-auto">
        <h1 className="text-2xl text-center uppercase font-bold">
          Mauricio Piber Fão
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
        <div className="grid grid-cols-[3fr,1fr]">
          <div className="bg-yellow-400">
            <div>Summary</div>
            <div>Experience</div>
            <div>Education</div>
          </div>
          <div className="bg-red-700">
            <div>Achievements</div>
            <div>Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
}
