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
import JavascriptIcon from '../icons/javascript-icon';
import JestIcon from '../icons/jest-icon';
import JiraIcon from '../icons/jira-icon';
import KubernetesIcon from '../icons/kubernetes-icon';
import MongoIcon from '../icons/mongo-icon';
import MysqlIcon from '../icons/mysql-icon';
import NextJSIcon from '../icons/nextjs-icon';
import NodeJSIcon from '../icons/nodejs-icon';
import PlaywrightIcon from '../icons/playwright';
import ReactIcon from '../icons/react-icon';
import SlackIcon from '../icons/slack-icon';
import SQLiteIcon from '../icons/sqlite-icon';
import SvelteIcon from '../icons/svelte-icon';
import SvelteKitIcon from '../icons/svelte-kit-icon';
import TailwindCSSIcon from '../icons/tailwindcss-icon';
import TestCafeIcon from '../icons/testcafe-icon';
import TypescriptIcon from '../icons/typescript-icon';
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
    en: 'Resume - Mauricio Piber Fão',
    pt: 'Curriculum Vitae - Mauricio Piber Fão',
  },
};

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

export const labels: Labels = {
  years: { en: 'Years', pt: 'Anos' },
  title: { en: 'Resume', pt: 'Curriculum Vitae' },
  summary: { en: 'Summary', pt: 'Resumo' },
  experience: { en: 'Experiences', pt: 'Experiências' },
  education: { en: 'Education', pt: 'Educação' },
  achievements: { en: 'Achievements', pt: 'Conquistas' },
  skill: { en: 'Skills', pt: 'Habilidades' },
  language: { en: 'Languages', pt: 'Línguas' },
  tools: { en: 'Tools', pt: 'Ferramentas' },
  technology: { en: 'Technology', pt: 'Tecnologia' },
  methodology: { en: 'Methodology', pt: 'Metodologia' },
  to: { en: 'to', pt: 'até' },
};

export const summary: I18NString = {
  pt: 'Desenvolvedor web profissional com 13 anos de experiência, especializado em tecnologias como Javascript moderno, Typescript, NodeJS, React e Next.JS. Com um forte foco em boas práticas, performance, e segurança, trabalho do levantamento de requisitos até a entrega final, sempre buscando soluções eficientes e custo-efetivas. Dedicado a entregar produtos de alta qualidade e dentro do prazo, sou motivado por desafios técnicos e pela constante evolução no campo da tecnologia.',
  en: `Professional full stack software engineer with 13+ years of experience, specialized in web technologies like JavaScript, TypeScript, NodeJS, React. Emphasizing good practices, performance, clean code, and security, I've worked on projects from conception to realization, always seeking efficient and cost-effective solutions. Dedicated to delivering high quality on schedule, I am motivated by technical challenges and the constant evolution in the technology field.`,
};

export const technologies: TechnologyGroup[] = [
  {
    title: { en: 'Front-End Development:', pt: 'Desenvolvimento Front-End:' },
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
    title: { en: 'Back-End Development:', pt: `Desenvolvimento Back-End:` },
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
    title: { en: 'Testing:', pt: 'Testes:' },
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
    title: { en: 'Database:', pt: 'Banco de Dados:' },
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
    title: { en: 'Deployment & DevOps:', pt: 'DevOps:' },
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
    title: { en: 'Other Tools & Technologies:', pt: 'Ferramentas e Técnicas:' },
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
    title: 'BS in Computer Science',
    university: 'Unisinos',
    location: 'São Leopoldo - RS - Brazil',
    start: 'Mar 2008',
    end: 'Nov 2011',
  },
  pt: {
    title: 'Bacharelado em Ciência da Computação',
    university: 'Unisinos',
    location: 'São Leopoldo - RS - Brazil',
    start: 'Março 2008',
    end: 'Novembro 2011',
  },
};

/**
 * Metodology
 */
export const methodology: Methodology = [
  { pt: 'Kanban', en: 'Kanban' },
  { pt: 'Scrum', en: 'Scrum' },
  { pt: 'Desenvolvimento guiado à teste (TDD)', en: 'TDD' },
];

export const languages: Language[] = [
  {
    title: { pt: 'Português', en: 'Portuguese' },
    quality: { pt: 'Nativo', en: 'Native' },
  },
  {
    title: { pt: 'Inglês', en: 'English' },
    quality: { pt: 'Intermediário', en: 'Upper Intermediate' },
  },
];

export const titles: Titles = [
  { en: 'Full stack', pt: 'Full stack' },
  { en: 'Javascript', pt: 'Javascript' },
  { en: 'React', pt: 'React' },
  { en: 'NodeJS', pt: 'NodeJS' },
  { en: 'Typescript', pt: 'Typescript' },
];

export const experiences: I18NExperience[] = [
  {
    company: 'Piber Netwwork',
    title: {
      en: 'Senior software engineer',
      pt: 'Engenheiro de software senior',
    },
    start: { en: 'Jun 2023', pt: 'Junho 2023' },
    end: { en: 'April 2024', pt: 'Abril 2024' },
    location: {
      en: 'Remote - Porto Alegre - RS - Brazil',
      pt: 'Remoto - Porto Alegre - RS - Brasil',
    },
    responsabilities: [
      {
        en: 'Development of a smart calculator for dieting and meal tracking using Typescript',
        pt: 'Desenvolvimento de uma calculadora inteligente para o bem-estar e rastreamento de refeições usando Typescript',
      },
      {
        en: 'Development of solution for click to action for marketing website for improving user experience.',
        pt: 'Desenvolvimento de solução para CTAs em site de marketing para melhorar a experiência do usuário.',
      },
      {
        en: 'Exploring utilization of IA prompts to improve productivity with automate code generation.',
        pt: 'Exploração da utilização de prompts de IA para aumentar produtividade com geração de código automatizado.',
      },
      {
        en: 'Development of an internal tool used for personal growth and improvement, as well as applying clean code and improving overall skills.',
        pt: 'Desenvolvimento de uma ferramenta interna para crescimento pessoal e melhoria, bem como aplicação de código limpo e melhoria de habilidades.',
      },
    ],
  },
  {
    company: 'Finsweet',
    title: { en: 'Full stack developer', pt: 'Full stack developer' },
    start: { en: 'Dec 2021', pt: 'Dezembro 2021' },
    end: { en: 'Jul 2023', pt: 'Julho 2023' },
    location: { en: 'New York, New York, United States', pt: '' },
    responsabilities: [
      {
        en: 'Developed automated support for no-code libraries, resulting in fewer support tickets and facilitating tool adoption.',
        pt: 'Desenvolvido ferramenta para suporte de instalação de bibliotecas no-code resultando em diminuição de volume de tickets de suporte abertos e facilitando adoção das ferramentas.',
      },
      {
        en: 'Developed new features and maintained existing components of the no-code library based on community feedback.',
        pt: 'Criado novos recursos bem como manutenção em recursos existentes da biblioteca no-code de acordo com feedback da comunidade.',
      },
      {
        en: 'Integrated TypeScript and developed functionalities for a SaaS project focusing on the synchronization of no-code platforms.',
        pt: 'Adicionado typescript e desenvolvido funcionalidades no projeto SaaS de sincronização de dados entre diferentes plataformas no-code.',
      },
      {
        en: 'Provided project support, addressing inquiries from no-code and JavaScript developers and identifying solutions to ensure timely and quality deliveries.',
        pt: 'Auxílio na área de projetos, no suporte de dúvidas para desenvolvedores no-code e demais desenvolvedores javascript, como no apontamento de soluções para garantir entregas dentro do prazo e qualidade das soluções.',
      },
    ],
  },
  {
    company: 'Wing',
    title: { en: 'Full stack developer', pt: 'Full stack developer' },
    start: { en: 'May 2021', pt: 'Maio 2021' },
    end: { en: 'Dec 2021', pt: 'Dezembro 2021' },
    location: { en: 'São Paulo - SP - Brazil', pt: 'São Paulo - SP - Brazil' },
    responsabilities: [
      {
        en: 'Technical contribution to SEO adjustments that resulted in improvements on major pages in Google search results.',
        pt: 'Contribuição técnica para implementação de ajustes de SEO que resultaram em melhorias das principais páginas no ranking do google.',
      },
      {
        en: "Research and implementation of a blog using a headless CMS to enhance the marketing team's flexibility and autonomy.",
        pt: 'Pesquisa e implementação de blog utilizando headless CMS para maior flexibilidade e autonomia do time de Marketing.',
      },
      {
        en: 'Implemented improvements on the Marketing website based on team feedback, resulting in increased sales conversion.',
        pt: 'Implementar melhorias no site de Marketing de acordo com feedback do time e aumento da conversão de vendas.',
      },
      {
        en: 'Participate in daily collaborative development meetings to align ideas across different projects.',
        pt: 'Participei de reuniões diárias de colaboração de desenvolvedores para alinhar ideias de projetos.',
      },
    ],
  },
  {
    company: 'OMEGA',
    title: { en: 'Full stack developer', pt: 'Full stack developer' },
    start: { en: 'Oct 2019', pt: 'Octubro 2019' },
    end: { en: 'Dec 2021', pt: 'Dezembro 2021' },
    location: { en: 'São Paulo - SP - Brazil', pt: 'São Paulo - SP - Brazil' },
    responsabilities: [
      {
        en: 'Support for the whole Marketing department dedicated to internet fiber sales, that covers 7 websites, 1 e-commerce, a medium size team and integration with sales, backoffice and managers.',
        pt: 'Suporte total para área de Marketing da empresa dedicada ao mercado fixo, que compreendia 7 sites, 1 e-commerce, 15 pessoas e integração com a área de vendas, backoffice e gerência.',
      },
      {
        en: 'Introduction of Next.js technology with incremental substitution culminating in total migration to React with NextJS, which reduced costs and implementation times for new features while improving campaign performance by 50%.',
        pt: 'Introdução da tecnologia Next.JS, com substituição incrementais até total migração para Next.JS 9, diminuindo tempo para implementação de novas funcionalidades e melhorando a performance das campanhas em 50%.',
      },
      {
        en: 'Improvements on ETLs used for processing and syncing data from various code bases, achieving a 50% reduction in execution time and enhanced data reliability',
        pt: 'Melhorias em ETLs para processar e sincronizar informação de diferentes bases de dados com melhoras de 50% em tempo de execução e maior confiabilidade de dados.',
      },
      {
        en: 'Applied improvements and best practices on conversion pages, raising the Google Quality Score from 2 to 9. The main pages averaged 90 points on Page Speed Insights Mobile, with some achieving 100 points, surpassing all standards in Web Core Vitals.',
        pt: 'Aplicação de melhorias e melhores práticas de performance nas páginas de conversão obtendo melhora de 2 para 9 no Google Quality Score. As principais páginas alcançaram uma média de 90 pontos no Page Speed Insights mobile, com algumas atingindo 100 pontos, passando todos os sites nos Web Core Vitals.',
      },
      {
        en: 'Created specialized pages for AdWords campaigns and affiliates, significantly increasing the sales conversion rate.',
        pt: 'Criado páginas específicas para campanhas de AdWords e afiliados, aumentando a taxa de vendas.',
      },
    ],
  },
];
