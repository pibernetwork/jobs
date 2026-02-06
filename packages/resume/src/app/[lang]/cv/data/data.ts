import dayjs from 'dayjs';
import ActionsIcon from '../icons/actions-icon';
import AWSIcon from '../icons/aws-icon';
import BashIcon from '../icons/bash-icon';
import ClickupIcon from '../icons/clickup-icon';
import CloudflareIcon from '../icons/cloudflare-icon';
import DockerIcon from '../icons/docker-icon';
import GitIcon from '../icons/git-icon';
import GraphQLIcon from '../icons/graphql-icon';
import HonoIcon from '../icons/hono-icon';
import JavaScriptIcon from '../icons/javascript-icon';
import JestIcon from '../icons/jest-icon';
import JiraIcon from '../icons/jira-icon';
import KubernetesIcon from '../icons/kubernetes-icon';
import MongoIcon from '../icons/mongo-icon';
import MysqlIcon from '../icons/mysql-icon';
import NextJSIcon from '../icons/nextjs-icon';
import NodeJSIcon from '../icons/nodejs-icon';
import PHPIcon from '../icons/php-icon';
import PlaywrightIcon from '../icons/playwright';
import ReactIcon from '../icons/react-icon';
import SlackIcon from '../icons/slack-icon';
import SQLiteIcon from '../icons/sqlite-icon';
import SvelteIcon from '../icons/svelte-icon';
import TailwindCSSIcon from '../icons/tailwindcss-icon';
import TestCafeIcon from '../icons/testcafe-icon';
import TypeScriptIcon from '../icons/typescript-icon';
import VercelIcon from '../icons/vercel-icon';
import VitestIcon from '../icons/vitest-icon';
import {
  Education,
  I18NExperience,
  I18NString,
  Labels,
  Language,
  Metadata,
  Methodology,
  Personal,
  TechnologyGroup,
  Titles,
} from '../types';

export const metadata: Metadata = {
  title: {
    en: 'Resume - Maurício Piber Fão',
  },
};

export const personal: Personal = {
  name: 'Maurício Piber Fão',
  email: 'mauriciopiber@gmail.com',
  phone: {
    en: { label: '+55 (51) 994599119', value: '5551994599119' },
  },
  linkedin:
    'https://www.linkedin.com/in/maur%C3%ADcio-piber-f%C3%A3o-4a616728/',
  instagram: 'https://www.instagram.com/m.piber/',
  facebook: 'https://www.facebook.com/mauricio.piber',
  github: 'https://github.com/mauriciopiber',
  location: {
    label: {
      en: 'Porto Alegre, RS, Brazil',
    },
    maps: 'https://www.google.com/maps/place/Porto+Alegre,+RS/@-30.1087672,-51.3419504,11z/data=!3m1!4b1!4m6!3m5!1s0x95199cd2566acb1d:0x603111a89f87e91f!8m2!3d-30.0368176!4d-51.2089887!16zL20vMDE3NTc1?entry=ttu',
  },
};

export const labels: Labels = {
  years: { en: 'Years' },
  title: { en: 'Resume' },
  summary: { en: 'Profile' },
  experience: { en: 'Experience' },
  education: { en: 'Education' },
  achievements: { en: 'Achievements' },
  skill: { en: 'Skills' },
  language: { en: 'Languages' },
  tools: { en: 'Tools' },
  technology: { en: 'Technology' },
  methodology: { en: 'Methodology' },
  to: { en: 'to' },
};

export const summary: I18NString = {
  en: `Full stack software engineer with 13 years of experience and 12 years of remote work, specialized in web technologies like JavaScript, TypeScript, NodeJS, React. Emphasizing good practices, performance, clean code, and security, I've worked on projects from conception to realization, always seeking efficient and cost-effective solutions. Dedicated to delivering high quality on schedule, I am motivated by technical challenges and the constant evolution.`,
};

export const technologies: TechnologyGroup[] = [
  {
    title: { en: 'Front-End Development:' },
    skills: [
      {
        title: 'JavaScript',
        age: dayjs().diff(dayjs('2011-01-01'), 'year'),
        Icon: JavaScriptIcon,
      },
      {
        title: 'TypeScript',
        age: dayjs().diff(dayjs('2020-06-01'), 'year'),
        Icon: TypeScriptIcon,
      },
      {
        title: 'React',
        age: dayjs().diff(dayjs('2017-09-01'), 'year'),
        Icon: ReactIcon,
      },
      {
        title: 'Next.js',
        age: dayjs().diff(dayjs('2019-06-01'), 'year'),
        Icon: NextJSIcon,
      },
      {
        title: 'TailwindCSS',
        age: 1,
        Icon: TailwindCSSIcon,
      },
      {
        title: 'Svelte',
        age: 1,
        Icon: SvelteIcon,
      },
      // {
      //   title: 'SvelteKit',
      //   age: 1,
      //   Icon: SvelteKitIcon,
      // },
      // {
      //   title: 'Webflow',
      //   age: 1,
      //   Icon: WebflowIcon,
      // },
      // {
      //   title: 'MaterialUi',
      //   age: 1,
      //   Icon: MaterialUiIcon,
      // },
    ],
  },
  {
    title: { en: 'Back-End Development:' },
    skills: [
      {
        title: 'Hono',
        age: 1,
        Icon: HonoIcon,
      },
      {
        title: 'GraphQL',
        age: 1,
        Icon: GraphQLIcon,
      },
      {
        title: 'NodeJS',
        age: 1,
        Icon: NodeJSIcon,
      },
      {
        title: 'PHP',
        age: 1,
        Icon: PHPIcon,
      },
    ],
  },
  {
    title: { en: 'Testing:' },
    skills: [
      {
        title: 'Jest',
        age: dayjs().diff(dayjs('2018-01-01'), 'year'),
        Icon: JestIcon,
      },
      {
        title: 'Playwright',
        age: dayjs().diff(dayjs('2022-01-01'), 'year'),
        Icon: PlaywrightIcon,
      },
      {
        title: 'TestCafe',
        age: 1,
        Icon: TestCafeIcon,
      },
      {
        title: 'Vitest',
        age: 1,
        Icon: VitestIcon,
      },
    ],
  },
  {
    title: { en: 'Database:' },
    skills: [
      {
        title: 'MongoDB',
        age: 1,
        Icon: MongoIcon,
      },
      {
        title: 'MySQL',
        age: 1,
        Icon: MysqlIcon,
      },
      {
        title: 'SQLite',
        age: 1,
        Icon: SQLiteIcon,
      },
    ],
  },
  {
    title: { en: 'Deployment & DevOps:' },
    skills: [
      {
        title: 'Vercel',
        age: 1,
        Icon: VercelIcon,
      },

      {
        title: 'AWS',
        age: 1,
        Icon: AWSIcon,
      },
      {
        title: 'Docker',
        age: 1,
        Icon: DockerIcon,
      },
      {
        title: 'Kubernetes',
        age: 1,
        Icon: KubernetesIcon,
      },
      {
        title: 'Actions',
        age: 1,
        Icon: ActionsIcon,
      },
      {
        title: 'Cloudflare',
        age: 1,
        Icon: CloudflareIcon,
      },
    ],
  },
  {
    title: { en: 'Other Tools & Technologies:' },
    skills: [
      {
        title: 'Bash',
        age: dayjs().diff(dayjs('2013-01-01'), 'year'),
        Icon: BashIcon,
      },
      {
        title: 'Slack',
        age: 1,
        Icon: SlackIcon,
      },
      {
        title: 'ClickUp',
        age: 1,
        Icon: ClickupIcon,
      },
      {
        title: 'Jira',
        age: 1,
        Icon: JiraIcon,
      },
      {
        title: 'Git',
        age: 1,
        Icon: GitIcon,
      },
    ],
  },
];

export const education: Education = {
  en: {
    title: 'BSc in Computer Science',
    university: 'Unisinos',
    location: 'São Leopoldo - RS - Brazil',
    start: 'Mar 2008',
    end: 'Nov 2011',
  },
};

/**
 * Metodology
 */
export const methodology: Methodology = [
  { en: 'Kanban' },
  { en: 'Scrum' },
  { en: 'TDD' },
];

export const languages: Language[] = [
  {
    title: { en: 'Portuguese' },
    quality: { en: 'Native' },
  },
  {
    title: { en: 'English' },
    quality: { en: 'B2' },
  },
];

export const titles: Titles = [
  { en: 'Full Stack' },
  { en: 'JavaScript' },
  { en: 'React' },
  { en: 'NodeJS' },
  { en: 'TypeScript' },
];

export const experiences: I18NExperience[] = [
  {
    company: 'Edgevanta',
    title: {
      en: 'Senior software engineer - Full stack',
    },
    start: { en: 'Set 2024' },
    end: { en: 'Present' },
    location: {
      en: 'Remote - Nashville - Tenessie - USA',
    },
    description: { en: '' },
    skills: [],
    achievements: [
      {
        en: '',
      },
    ],
  },
  {
    company: 'Afya',
    title: {
      en: 'Senior software engineer - Full stack',
    },
    start: { en: 'Jun 2024' },
    end: { en: 'Set 2024' },
    location: {
      en: 'Remote - Nashville - Tenessie - USA',
    },
    description: { en: '' },
    skills: [],
    achievements: [
      {
        en: '',
      },
    ],
  },
  {
    company: 'Piber Network',
    title: {
      en: 'Senior software engineer',
    },
    start: { en: 'Aug 2023' },
    end: { en: 'Jun 2024' },
    location: {
      en: 'Remote - Porto Alegre - RS - Brazil',
    },
    description: {
      en: 'Software house providing freelancing and consulting services. ',
    },
    skills: [
      'React',
      'Next.js',
      'SvelteKit',
      'TypeScript',
      'NodeJS',
      'MongoDB',
    ],
    achievements: [
      {
        en: 'Engineered a smart calculator for meal tracking and dieting using TypeScript.',
      },
      {
        en: 'Developed a solution for CTA buttons on a client’s marketing website, enhancing user experience and increasing conversion rates by 40%.',
      },
      {
        en: 'Leveraged AI prompts, GitHub Copilot, and Codium to enhance productivity through automated code generation, reducing coding time by 50%.',
      },
      {
        en: 'Development of a prototypal web application using the most recent tools including Svelte, SvelteKit, React 18, and Next.js 14 to assess their capabilities and determine the most suitable options for long-term needs and performance optimization.',
      },
    ],
  },
  {
    company: 'Finsweet',
    title: {
      en: 'Senior full stack engineer',
    },
    start: { en: 'Dec 2021' },
    end: { en: 'Jul 2023' },
    location: {
      en: 'Remote - New York, New York, United States',
    },
    description: {
      en: 'Leading Webflow development company. I worked on the product team as senior full stack engineer.',
    },
    skills: [
      'JavaScript',
      'TypeScript',
      'Svelte',
      'Hono',
      'React',
      'Cloudflare',
      'SQLite',
      'NPM',
    ],
    achievements: [
      {
        en: 'Development of automated support to help users install and configure no-code library, resulting in lowering support tickets and facilitating tool adoption.',
      },
      {
        en: 'Creation of new features and maintained existing components of the no-code library based on community feedback.',
      },
      {
        en: 'Adoption of TypeScript in an existing project written in JavaScript, resulting in reduced time for refactoring.',
      },
      {
        en: 'Integrated authentication using JWT, APIs, complex data synchronization into a SaaS project focusing on the synchronization between platforms.',
      },
      {
        en: 'Provided mentoring and support, addressing inquiries from webflow and JavaScript developers and identifying solutions to ensure timely and quality deliveries.',
      },
    ],
  },
  {
    company: 'Wing',
    title: {
      en: 'Senior full stack engineer',
    },
    start: { en: 'May 2021' },
    end: { en: 'Dec 2021' },
    location: {
      en: 'Remote - São Paulo - SP - Brazil',
    },
    description: {
      en: `Collaborated with a team of 6 members using Kanban, responsible for the development and maintenance of core operational websites.`,
    },
    skills: [
      'Kanban',
      'React',
      'Redux',
      'Next.js',
      'Figma',
      'TypeScript',
      'Strapi',
      'MySQL',
      'AWS',
      'Git',
      'GitHub',
    ],
    achievements: [
      {
        en: 'Research and implementation of technical improvements for SEO, as new site structure, new pages, and more along marketing advisors.',
      },
      {
        en: "Research and implementation of a blog using a headless CMS to enhance the marketing team's flexibility and autonomy.",
      },
      {
        en: 'Enhanced the Marketing website based on team feedback, which increased sales conversions on a weekly basis.',
      },
    ],
  },
  {
    company: 'OMEGA',
    title: {
      en: 'Senior full stack engineer',
    },
    start: { en: 'Oct 2019' },
    end: { en: 'May 2021' },
    location: {
      en: 'Remote - São Paulo - SP - Brazil',
    },
    description: {
      en: `Leading the development for the marketing team, which included 15 people.`,
    },
    skills: [
      'Scrum',
      'Kanban',
      'Trello',
      'Clickup',
      'React',
      'Redux',
      'Next.js',
      'Figma',
      'TypeScript',
      'AWS',
      'Bash',
      'Webflow',
      'Git',
      'GitHub',
      'Storybook',
    ],
    achievements: [
      {
        en: 'Introduction of Next.js technology with incremental substitution culminating in total migration to React with Next.js, which reduced costs by 20%, improving the time to implement new features and improving campaign performance by 50%.',
      },
      {
        en: 'Creation of a design system with Storybook for better visualization of components on the site and higher consistency of design.',
      },
      {
        en: 'Improvements on ETLs used for processing and syncing data from various code bases, achieving a 50% reduction in execution time and enhanced data reliability',
      },
      {
        en: 'Applied improvements and best practices on conversion pages, raising the Google Quality Score from 2 to 9. The main pages averaged 90 points on Page Speed Insights Mobile, with some achieving 100 points, surpassing all standards in Web Core Vitals.',
      },
      {
        en: 'Development of monitoring tool to check the health of websites and e-commerce systems that reduced response time to incidents to 90%.',
      },
      {
        en: 'Development of tool for monitoring SEO and AdWords performance for major keywords reducing the response time to 90%.',
      },
      {
        en: 'Development of a tool for monitoring our own and competitors websites performance in major metrics and web core vitals to achieve optimal results.',
      },
      {
        en: 'Created specialized pages from Figma to Next.js for AdWords campaigns and affiliates, significantly increasing the sales conversion rate.',
      },
    ],
  },
  {
    company: 'Piber Network',
    title: {
      en: 'Software engineer',
    },
    start: { en: 'Sep 2013' },
    end: { en: 'Nov 2019' },
    location: {
      en: 'Remote - Porto Alegre - RS - Brazil',
    },
    skills: [
      'PHP',
      'Zend Framework 1-2-3',
      'JavaScript',
      'MySQL',
      'React',
      'Angular',
    ],
    description: {
      en: 'Software house providing freelancing and consulting services.',
    },
    achievements: [
      {
        en: 'Integrated websites with lead capture services requiring JavaScript and API utilization.',
      },
      {
        en: 'Developed custom code for Webflow sites, enhancing functionality and user experience.',
      },
      {
        en: 'Provided consulting on best practices and quality assurance to junior developers.',
      },
      {
        en: 'Consulting on websites with a focus on improving UI and conversion rates.',
      },
      {
        en: 'Created prototypes to innovate and introduce modern technologies such as Next and React in companies, leading to technological pioneering.',
      },
      {
        en: 'Developed a chatbot using IBM Watson, an AI platform designed for conversational interfaces.',
      },
      {
        en: 'Conducted both manual and automated tests and quality assurance on existing projects.',
      },
      {
        en: 'Developed multiple e-commerce platforms, selling products ranging from digital goods to food using own code generator.',
      },
      {
        en: 'Developed a business intelligence system to replace Excel spreadsheets with a unified system for more integrated data analysis.',
      },
    ],
  },
];
