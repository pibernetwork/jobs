import { Achievement, Experience } from '../../types';

// export const summary = `Focus on both customer and developer experience, always providing performante solution while keeping clean code.
//   Fast peace for learning new technology and become productive`;

const experience: Experience[] = [
  {
    company: 'Piber Network - Freelancer',
    title: 'Full stack developer',
    start: 'Jun 2023',
    end: 'Present',
    location: 'Porto Alegre - RS - Brazil',
    responsabilities: [
      'Web development of solutions for marketing agencies, as performance tuning, creating new components, fixing implementation, consultant for solutions.',
      // 'Prototype for viability of NextJS 14 and React 18 Server Components utilization on production with focus on understanding development experience and trade-offs.',
      'Exploring new IA tools to improve development productivity with code generation and prompts for technical solutions in practice.',
      'Time dedicated to development of internal tools used for personal growth and improvement, as well as applying clean code and improving overall skills.',
    ],
  },
  {
    company: 'Finsweet',
    title: 'Full stack developer',
    start: 'Dec 2021',
    end: 'Jul 2023',
    location: 'New York, New York, United States',
    responsabilities: [
      'Developed automated support for no-code libraries, resulting in fewer support tickets and facilitating tool adoption.',
      'Developed new features and maintained existing components of the no-code library based on community feedback.',
      // 'Integrated TypeScript and developed functionalities for a SaaS project focusing on the synchronization of no-code platforms.',
      // 'Provided project support, addressing inquiries from no-code and JavaScript developers and identifying solutions to ensure timely and quality deliveries.',
    ],
  },
  {
    company: 'Wing',
    title: 'Full stack developer',
    start: 'May 2021',
    end: 'Dec 2021',
    location: 'São Paulo - SP - Brazil',
    responsabilities: [
      'Technical contribution to SEO adjustments that resulted in improvements on major pages in Google search results.',
      "Research and implementation of a blog using a headless CMS to enhance the marketing team's flexibility and autonomy.",
      'Implemented improvements on the Marketing website based on team feedback, resulting in increased sales conversion.',
      'Participate in daily collaborative development meetings to align ideas across different projects.',
    ],
  },
  {
    company: 'OMEGA',
    title: 'Full stack developer',
    start: 'Oct 2019',
    end: 'Dec 2021',
    location: 'São Paulo - SP - Brazil',
    responsabilities: [
      'Support for the whole Marketing department dedicated to internet fiber sales, that covers 7 websites, 1 e-commerce, a medium size team and integration with sales, backoffice and managers.',
      'Introduction of Next.js technology with incremental substitution culminating in total migration to React with NextJS, which reduced costs and implementation times for new features while improving campaign performance by 50%.',
      // 'Improvements on ETLs used for processing and syncing data from various code bases, achieving a 50% reduction in execution time and enhanced data reliability',
      // 'Applied improvements and best practices on conversion pages, raising the Google Quality Score from 2 to 9. The main pages averaged 90 points on Page Speed Insights Mobile, with some achieving 100 points, surpassing all standards in Web Core Vitals.',
      // 'Created specialized pages for AdWords campaigns and affiliates, significantly increasing the sales conversion rate.',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Leadership',
    description:
      'Took lead roles in the Marketing department of OMEGA, resulting in improvements on a large number of processes, achieving a 50% reduction in execution time and improved team work.',
  },
  {
    title: 'Technology Pioneer',
    description:
      'Early adopter of emerging technologies in Brazil, including Next.js (2020), ReactJS (2017), Webflow (2014), and AngularJS (2013)',
  },
  {
    title: 'Performance',
    description:
      'Improved website performance to meet Core Web Vitals, achieving a perfect PageSpeed Insights score of 100 for landing pages and an average of 90 overall. Boosted Google Ads quality score from 2 to 9, reducing AdWords costs by 75%',
  },
];
