import { Achievement, Education, Experience, Labels, Language } from '../types';

export const metadata = {
  title: 'Resume - Mauricio Piber Fão',
};

export const titles = [
  'Full stack',
  'Javascript 13y+',
  'React 6y+',
  'NodeJS 4y+',
  'Typescript 3y+',
];

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
  methodology: 'Methodology',
  technology: 'Technology',
};

// export const summary = `Focus on both customer and developer experience, always providing performante solution while keeping clean code.
//   Fast peace for learning new technology and become productive`;

export const summary =
  'Web development entusiastic and experience in cutting-edge technologies for enteprises. Expert in modern frameworks and tools as well as deep knowledge on basics. Over 13 years working on small to big customers on regular jobs and freelancing. Committed to continuous learning and excellence at work. Proven track record of innovation and collaboration. Self-taught.';

export const experience: Experience[] = [
  {
    company: 'Piber Network',
    title: 'Fullstack developer',
    start: 'Jul 2023',
    end: 'Present',
    location: 'Porto Alegre - RS - Brazil',
    responsabilities: [
      'Study of viability of witch framework to use to create websites that reach maximum google score for SEO optimization and Adwords',
      'Consulting for delivery high quality webflow websites',
      'Migrate internal tools from legacy NextJS 9 and Svelte kit to NextJS 14 with App Router',
    ],
  },
  {
    company: 'Finsweet',
    title: 'Fullstack developer',
    start: 'Dez 2021',
    end: 'Jul 2023',
    location: 'New York, New York, United States',
    responsabilities: [
      'Led the applications transition from JavaScript to TypeScript, improving code quality and maintenance.',
      'Developed an automated support service for no code tool to help community without requiring human intervention, resulting in a 60% reduction in support tickets and chats and help reaching 140 millions download/month.',
      'Supported projects by identifying and resolving bugs and answering technical questions, ensuring deadlines were met for major projects.',
    ],
  },
  {
    company: 'OMEGA',
    title: 'Lead developer',
    start: 'Oct 2019',
    end: 'Dez 2021',
    location: 'São Paulo - SP - Brazil',
    responsabilities: [
      'Led development giving support to all marketing operations, with 6 websites and 1 e-commerce.',
      'Rewrite all 6 websites from webflow to NextJS with an gain of performance and quality score.',
      'Improve websites from feedback of marketing team.',
      'Led the implementation of daily meetings and scrum artifacts for all marketing team.',
      'Mentoring of newer developers with teaching, guiding and leading by example.',
    ],
  },
  {
    company: 'Piber Network',
    title: 'Fullstack developer',
    start: 'Set 2013',
    end: 'Dez 2021',
    location: 'Porto Alegre - RS - Brazil',
    responsabilities: [
      '7 e-commerces. The biggest with over $ 500k in sales by year.',
      'Support on marketing websites by improving UX, performance, code quality and adding more features',
      'Optimizations for google page insights',
      'Create automations and communication between different services and APIs. Integrations between differente services as proxy or bridges.',
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

export const achievements: Achievement[] = [
  {
    title: 'Leadership',
    description:
      'Led the migration of high-revenue webflow websites generating $5 million annually from study to deployment in Next.js, reducing maintenance time by 50% and annual costs by 75%.',
  },
  {
    title: 'Technology Pioneer',
    description:
      'Early adopter of emerging technologies in Brazil, including Next.js (2020), ReactJS (2017), Webflow (2014), and AngularJS (2013), driving long-term success in the market.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Improved slow website performance to meet Core Web Vitals, achieving a perfect PageSpeed Insights score of 100 for landing pages and an average of 90 overall. Boosted Google Ads quality score from 2 to 9, reducing AdWords costs by 75%.',
  },
];

/**
 * Metodology
 */
export const methodology = ['Kanban', 'Scrum', 'TDD'];

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
