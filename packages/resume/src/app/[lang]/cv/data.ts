import dayjs from 'dayjs';
import BashIcon from './icons/bash';
import JavascriptIcon from './icons/javascript-icon';
import JestIcon from './icons/jest-icon';
import NextJSIcon from './icons/nextjs-icon';
import PlaywrightIcon from './icons/playwright';
import ReactIcon from './icons/react-icon';
import TypescriptIcon from './icons/typescript-icon';
import { Personal, Technology, Tools } from './types';

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

export const technology: Technology[] = [
  {
    title: 'Javascript',
    age: dayjs().diff(dayjs('2011-01-01'), 'year'),
    Icon: JavascriptIcon,
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
    title: 'Typescript',
    age: dayjs().diff(dayjs('2020-06-01'), 'year'),
    Icon: TypescriptIcon,
  },
  {
    title: 'Bash',
    age: dayjs().diff(dayjs('2013-01-01'), 'year'),
    Icon: BashIcon,
  },
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
];

export const tools: Tools[] = [];
