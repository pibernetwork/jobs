import { Education, Experience, Labels, Language } from '../types';

export const metadata = {
  title: 'Resume - Mauricio Piber Fão',
};

export const titles = ['Full stack', 'NextJS', 'React', 'NodeJS', 'Typescript'];

export const labels: Labels = {
  years: 'Years',
  title: 'Resume',
  summary: 'Summary',
  experience: 'Experiences',
  education: 'Education',
  achievements: 'Achievements',
  skill: 'Skills',
  language: 'Languages',
  tools: 'Tools',
  books: 'Books',
  technology: 'Technology',
};

// export const summary = `Focus on both customer and developer experience, always providing performante solution while keeping clean code.
//   Fast peace for learning new technology and become productive`;

export const summary = `Dynamic web development professional with 13 years of pioneering experience in adopting cutting-edge technologies in Brazilian enterprises. Proven track record in delivering high-quality, scalable websites for medium to large-scale projects. Expert in modern frameworks and tools, driving significant improvements in performance and user engagement. Committed to continuous learning and excellence, with a passion for fostering innovation and collaboration.`;

export const experience: Experience[] = [
  {
    company: 'Piber Network',
    title: 'Owner - Fullstack developer',
    start: 'Jul 2023',
    end: 'Present',
    location: 'Porto Alegre - RS - Brazil',
    responsabilities: [
      'Developing internal solution to create marketing websites that reach maximum google score for SEO optimization and Adwords - WIP',
      'Freelancing on marketing websites to solve bugs and deliver on deadline',
      'Migrate legacy code to NextJS 14 and Typescript',
    ],
  },
  {
    company: 'Finsweet',
    title: 'Frontend developer',
    start: 'Dez 2021',
    end: 'Jul 2023',
    location: 'New York, New York, United States',
    responsabilities: [
      'Led the transition of a legacy application from Vanilla JavaScript to TypeScript, enhancing type safety and reducing runtime errors.',
      'Developed an automated support service for Attributes to help without human intervention, resulting in a 60% reduction in support tickets and chats.',
      'Supported college projects by identifying and resolving bugs and answering technical questions, ensuring deadlines were met for major projects.',
    ],
  },
  {
    company: 'Omega/Wing',
    title: 'Fullstack developer',
    start: 'Oct 2019',
    end: 'Dez 2021',
    location: 'São Paulo - SP - Brazil',
    responsabilities: [
      'Rewrite legacy webflow sites into NextJS for maximum performance and google ads quality score',
      'Creating new websites from scratch',
      'Maintance on legacy system writen on Angular + C#',
      'Mentoring of new developers in Javascript, React',
    ],
  },
  {
    company: 'Piber Network',
    title: 'Owner - Fullstack developer',
    start: 'Set 2013',
    end: 'Dez 2021',
    location: 'Porto Alegre - RS - Brazil',
    responsabilities: [
      'Over 5 e-commerces with more than $ 10m avenue in sales write in Zend Framework',
      'Support on marketing websites by improving UX, performance, code quality and adding more features',
      'Create automations and communication between different services and APIs',
    ],
  },
];

export const educations: Education[] = [
  {
    title: 'BS in Computer Science (Incomplete)',
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

export const languages: Language[] = [
  {
    title: 'Portuguese',
    quality: 'Native',
  },
  {
    title: 'English',
    quality: 'Upper Intermediate',
  },
];
