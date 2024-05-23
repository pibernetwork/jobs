import dayjs from 'dayjs';
import ActionsIcon from './icons/actions-icon';
import AWSIcon from './icons/aws-icon';
import BashIcon from './icons/bash-icon';
import ClickupIcon from './icons/clickup-icon';
import CloudflareIcon from './icons/cloudflare-icon';
import DockerIcon from './icons/docker-icon';
import GitIcon from './icons/git-icon';
import GraphQLIcon from './icons/graphql-icon';
import HonoIcon from './icons/hono-icon';
import JavascriptIcon from './icons/javascript-icon';
import JestIcon from './icons/jest-icon';
import JiraIcon from './icons/jira-icon';
import KubernetesIcon from './icons/kubernetes-icon';
import MongoIcon from './icons/mongo-icon';
import MysqlIcon from './icons/mysql-icon';
import NextJSIcon from './icons/nextjs-icon';
import NodeJSIcon from './icons/nodejs-icon';
import PlaywrightIcon from './icons/playwright';
import ReactIcon from './icons/react-icon';
import SlackIcon from './icons/slack-icon';
import SQLiteIcon from './icons/sqlite-icon';
import SvelteIcon from './icons/svelte-icon';
import SvelteKitIcon from './icons/svelte-kit-icon';
import TailwindCSSIcon from './icons/tailwindcss-icon';
import TestCafeIcon from './icons/testcafe-icon';
import TypescriptIcon from './icons/typescript-icon';
import VercelIcon from './icons/vercel-icon';
import VitestIcon from './icons/vitest-icon';
import { Personal, Technology, TechnologyGroup, Tools } from './types';

export const personal: Personal = {
  name: 'Maurício Piber Fão',
  email: 'mauriciopiber@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/maur%C3%ADcio-piber-f%C3%A3o-4a616728/',
  instagram: 'https://www.instagram.com/m.piber/',
  facebook: 'https://www.facebook.com/mauricio.piber',
  github: 'https://github.com/mauriciopiber',
  location: {
    city: 'Porto Alegre',
    state: 'RS',
    country: 'Brazil',
    maps: 'https://www.google.com/maps/place/Porto+Alegre,+RS/@-30.1087672,-51.3419504,11z/data=!3m1!4b1!4m6!3m5!1s0x95199cd2566acb1d:0x603111a89f87e91f!8m2!3d-30.0368176!4d-51.2089887!16zL20vMDE3NTc1?entry=ttu',
  },
};

export const technologies: TechnologyGroup[] = [
  {
    title: 'Front-End Development:',
    skills: [
      {
        title: 'JavaScript',
        age: dayjs().diff(dayjs('2011-01-01'), 'year'),
        Icon: JavascriptIcon,
      },
      {
        title: 'TypeScript',
        age: dayjs().diff(dayjs('2020-06-01'), 'year'),
        Icon: TypescriptIcon,
      },
      {
        title: 'ReactJS',
        age: dayjs().diff(dayjs('2017-09-01'), 'year'),
        Icon: ReactIcon,
      },
      {
        title: 'NextJS',
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
      {
        title: 'SvelteKit',
        age: 1,
        Icon: SvelteKitIcon,
      },
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
    title: 'Back-End Development:',
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
    ],
  },
  {
    title: 'Testing:',
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
    title: 'Database Management:',
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
    title: 'Deployment & DevOps:',
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
    title: 'Other Tools & Technologies:',
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

export const technology: Technology[] = [];

export const tools: Tools[] = [];
