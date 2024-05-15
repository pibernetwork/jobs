import { Education, Experience } from '../types';

export const metadata = {
  title: 'Resume - Mauricio Piber Fão',
};

export const titles = ['Full stack', 'NextJS', 'React', 'NodeJS', 'Typescript'];

export const labels = {
  title: 'Resume',
  summary: 'Summary',
  experience: 'Experience',
  education: 'Education',
  achievements: 'Achievements',
  skill: 'Skills',
  language: 'Languages',
};

// export const summary = `Focus on both customer and developer experience, always providing performante solution while keeping clean code.
//   Fast peace for learning new technology and become productive`;

export const summary = `13+ years in web development, proficient in all aspects of full stack development from ideation to deployment.
Dedicated to both teaching and learning, with a love for sharing knowledge and expertise.`;

export const experience: Experience[] = [
  {
    company: 'Finsweet',
    title: 'Frontend developer',
    start: 'Dez 2021',
    end: 'Jul 2023',
    responsabilities: [
      'Rewrite legacy application from Vanilla javascript to Typescript',
      'Maintence to existing and creating of new Attributes',
      'Develop an automate support service for Attributes as web component using Svelte',
      'Support for newer developer as well as code review',
    ],
  },
  {
    company: 'Omega/Wing',
    title: 'Fullstack developer',
    start: 'Oct 2019',
    end: 'Dez 2021',
    responsabilities: [
      'Rewrite legacy webflow sites into NextJS for maximum performance and google ads quality score',
      'Creating new websites from scratch',
      'Maintance on legacy system writen on Angular + C#',
      'Coach developers on Javascript',
    ],
  },
  {
    company: 'Piber Network',
    title: 'Owner - Fullstack developer',
    start: 'Set 2013',
    end: 'Dez 2021',
    responsabilities: [
      'Custom javascript integrations',
      'Custom components',
      'Automations',
      'Quality review',
      'Mentoring',
    ],
  },
];

export const educations: Education[] = [
  {
    title: 'Computer science (incomplete)',
    university: 'Unisinos',
    location: 'São Leopoldo - RS - Brazil',
    start: 'Mar 2008',
    end: 'Nov 2011',
  },
];

export const achievements = [
  'Rewrite a legacy website to pass on web core vitals, with 90~ average on page speed insights mobile, passing from 0.2 to 0.9 on adword quality score, getting a hugh discount to adwords, competing with big companies for first place on google',
  'Understood a big codebase to create an automate tool to validate Attributes instalation',
  'Being able to lead websites and e-commerce for a marketing company with 20M BRL income/year running my websites',
  'Maintence/support of attributes that passes 140,000,000 page loads per month',
  'Pioneer on NextJS on 2020',
  'Pioneer on AngularJS in 2013',
  'Pioneer on ReactJS on 2018',
];

export const books = [
  'The pragmatic programmer',
  'Clean code',
  'Clean architecture',
];

export const languages = [
  {
    title: 'Portuguese',
    quality: 'Native',
  },
  {
    title: 'English',
    quality: 'Upper Intermediate',
  },
];
