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
    description: {
      en: 'Self-employed',
      pt: 'Autônomo',
    },
    achievements: [
      {
        en: 'Engineered a smart calculator for meal tracking and dieting using TypeScript and PDFKit.',
        pt: 'Desenvolvi uma calculadora inteligente para o bem-estar e rastreamento de refeições usando TypeScript.',
      },
      {
        en: 'Developed a solution for CTA buttons on a client’s marketing website, enhancing user experience and increasing conversion rates by 40%.',
        pt: 'Desenvolvi uma solução para CTAs em um site de marketing que melhorou a experiência do usuário.',
      },
      {
        en: 'Leveraged AI prompts, GitHub Copilot, and Codium to enhance productivity through automated code generation, reducing coding time by 50%.',
        pt: 'Utilizei prompts de IA, GitHub Copilot e Codium para aumentar a produtividade com a geração de código automatizado, reduzindo o tempo de codificação.',
      },
      {
        en: 'Evaluated the capabilities of the latest web development tools, including Svelte, SvelteKit, React 18, and Next.js 14, to determine the most suitable options for long-term needs and optimal performance.',
        pt: 'Avaliei as capacidades das ferramentas mais recentes de desenvolvimento web, incluindo Svelte, SvelteKit, React 18 e Next.js 14, para determinar as opções mais adequadas para as necessidades de longo prazo e desempenho ótimo.',
      },
    ],
  },
  {
    company: 'Finsweet',
    title: {
      en: 'Senior full stack engineer',
      pt: 'Engenheiro full stack senior',
    },
    start: { en: 'Dec 2021', pt: 'Dezembro 2021' },
    end: { en: 'Jul 2023', pt: 'Julho 2023' },
    location: {
      en: 'New York, New York, United States',
      pt: 'Nova York, Nova York, Estados Unidos',
    },
    description: {
      en: 'Leading Webflow development company. I worked on the product team as the development and maintenance leader, utilizing TypeScript, HonoJS, React, Cloudflare, NPM, among other tools.',
      pt: 'Companhia líder em desenvolvimento Webflow. Atuei na equipe de produtos como líder de desenvolvimento e manutenção, utilizando TypeScript, HonoJS, React, Cloudflare, NPM, entre outras ferramentas.',
    },
    achievements: [
      {
        en: 'Development of automated support for no-code libraries, resulting in fewer support tickets and facilitating tool adoption.',
        pt: 'Desenvolvido ferramenta para suporte de instalação de bibliotecas no-code com resultado de diminuição de volume de tickets de suporte abertos e facilitando adoção das ferramentas.',
      },
      {
        en: 'Creation of new features and maintained existing components of the no-code library based on community feedback.',
        pt: 'Criação de novas funcionalidades e manutenção de recursos existentes da biblioteca no-code de acordo com feedback da comunidade.',
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
    description: {
      en: `Working with a team of 6 members using Kanban, being responsable for leading the development and maintence of core websites designed for marketing campaings and portal with SEO. We used React, NextJS, Figma, Typescript, Strapi, AWS, and many other tools.`,
      pt: ``,
    },
    achievements: [
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
    description: {
      en: `Leading the development for the marketing team, which included 15 people. We used React, NextJS, Figma, Typescript, AWS, Webflow and many other tools.`,
      pt: ``,
    },
    achievements: [
      {
        en: 'Introduction of Next.js technology with incremental substitution culminating in total migration to React with NextJS, which reduced costs by 20%, improving the time to implement new features and improving campaign performance by 50%.',
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
        en: 'Development of monitoring tool to check the health of websites and e-commerce systems that reduced response time to incindents 90%.',
        pt: '',
      },
      {
        en: 'Development of tool for monitoring SEO performance for major keywords reducing the response time to 90%.',
        pt: '',
      },
      {
        en: 'Development of tool to monitoring own and competitors websites performance in major metrics and web core vitals to achieve best results overall.',
        pt: '',
      },
      {
        en: 'Created specialized pages from Figma to NextJS for AdWords campaigns and affiliates, significantly increasing the sales conversion rate.',
        pt: 'Criado páginas específicas para campanhas de AdWords e afiliados, aumentando a taxa de vendas.',
      },
    ],
  },
];
