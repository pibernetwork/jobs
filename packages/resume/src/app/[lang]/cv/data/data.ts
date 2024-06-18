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
  phone: {
    en: { label: '55 (51) 994599119', value: '5551994599119' },
    pt: { label: '(51) 994599119', value: '51994599119' },
  },
  linkedin:
    'https://www.linkedin.com/in/maur%C3%ADcio-piber-f%C3%A3o-4a616728/',
  instagram: 'https://www.instagram.com/m.piber/',
  facebook: 'https://www.facebook.com/mauricio.piber',
  github: 'https://github.com/mauriciopiber',
  location: {
    label: {
      en: 'Porto Alegre, RS, Brazil',
      pt: 'Porto Alegre, RS, Brasil',
    },
    maps: 'https://www.google.com/maps/place/Porto+Alegre,+RS/@-30.1087672,-51.3419504,11z/data=!3m1!4b1!4m6!3m5!1s0x95199cd2566acb1d:0x603111a89f87e91f!8m2!3d-30.0368176!4d-51.2089887!16zL20vMDE3NTc1?entry=ttu',
  },
};

export const labels: Labels = {
  years: { en: 'Years', pt: 'Anos' },
  title: { en: 'Resume', pt: 'Curriculum Vitae' },
  summary: { en: 'Profile', pt: 'Perfil' },
  experience: { en: 'Experience', pt: 'Experiência' },
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
  pt: 'Desenvolvedor profissional com 13 anos de experiência na área e 12 anos de trabalho remoto, especializado em tecnologia web, Javascript, Typescript, NodeJS, React e Next.JS. Com forte fundamentos de boas práticas, performance e segurança. Trabalho do levantamento de requisitos até a entrega final, sempre buscando soluções eficientes. Dedicado a entregar produtos de alta qualidade e dentro do prazo, sou motivado por aprender tecnologias e pela constante evolução.',
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
    company: 'Piber Network',
    title: {
      en: 'Senior software engineer',
      pt: 'Desenvolvedor Full Stack Sênior',
    },
    start: { en: 'Jan 2024', pt: 'Janeiro 2024' },
    end: { en: 'Jun 2024', pt: 'Jun 2024' },
    location: {
      en: 'Remote - Porto Alegre - RS - Brazil',
      pt: 'Remoto - Porto Alegre - RS - Brasil',
    },
    description: {
      en: 'Software house providing freelancing and consulting services. ',
      pt: 'Fábrica de software fornecendo serviços de freelancer e consultoria.',
    },
    skills: [
      'React',
      'NextJS',
      'Svelte-Kit',
      'Typescript',
      'NodeJS',
      'MongoDB',
    ],
    achievements: [
      {
        en: 'Engineered a smart calculator for meal tracking and dieting using TypeScript and PDFKit.',
        pt: 'Desenvolvimento de uma calculadora inteligente para o bem-estar e rastreamento de refeições e dieta usando TypeScript e PDFKit.',
      },
      {
        en: 'Developed a solution for CTA buttons on a client’s marketing website, enhancing user experience and increasing conversion rates by 40%.',
        pt: 'Desenvolvimento de uma solução para CTAs para site de marketing com melhoria na experiência do usuário.',
      },
      {
        en: 'Leveraged AI prompts, GitHub Copilot, and Codium to enhance productivity through automated code generation, reducing coding time by 50%.',
        pt: 'Utilização de prompts de IA, GitHub Copilot e Codium para aumentar a produtividade com a geração de código automatizado, reduzindo o tempo de codificação.',
      },
      {
        en: 'Prototyping for evaluated the capabilities of the latest web development tools, including Svelte, SvelteKit, React 18, and Next.js 14, to determine the most suitable options for long-term needs and optimal performance.',
        pt: 'Prototipação para avaliação das capacidades das ferramentas mais recentes de desenvolvimento web, incluindo Svelte, SvelteKit, React 18 e Next.js 14, para determinar as opções mais adequadas às necessidades de longo prazo e máximo desempenho.',
      },
    ],
  },
  {
    company: 'Finsweet',
    title: {
      en: 'Senior full stack engineer',
      pt: 'Desenvolvedor Full Stack Sênior',
    },
    start: { en: 'Dec 2021', pt: 'Dezembro 2021' },
    end: { en: 'Jul 2023', pt: 'Julho 2023' },
    location: {
      en: 'New York, New York, United States',
      pt: 'Nova York, Nova York, Estados Unidos',
    },
    description: {
      en: 'Leading Webflow development company. I worked on the product team as the development and maintenance leader.',
      pt: 'Empresa líder em desenvolvimento Webflow. Atuei na equipe de produtos como desenvolvedor sênior.',
    },
    skills: [
      'Javascript',
      'TypeScript',
      'HonoJS',
      'React',
      'Cloudflare',
      'SQLIte',
      'NPM',
    ],
    achievements: [
      {
        en: 'Development of automated support to help users install and configure no-code library, resulting in lowering support tickets and facilitating tool adoption.',
        pt: 'Desenvolvimento de ferramenta automatizada para auxiliar usuários a instalar e configurar extensões do Webflow. Resultado de diminuição de volume de tickets abertos e facilitação da adoção.',
      },
      {
        en: 'Creation of new features and maintained existing components of the no-code library based on community feedback.',
        pt: 'Criação de novas funcionalidades e manutenção de recursos existentes da biblioteca no-code de acordo com feedback da comunidade.',
      },
      {
        en: '',
        pt: 'Adoçao de Typescript em projeto existente escrito em Javascript com resultado de diminuição de tempo de correção das tarefas.',
      },
      {
        en: 'Integrade authentication, APIs, complex data syncronization into a SaaS project focusing on the synchronization between no-code platforms resulting in more confidence into the project.',
        pt: 'Integraçao de autenticação, APIs, sincronização complexa no projeto SaaS de sincronização de dados entre diferentes plataformas no-code.',
      },
      {
        en: 'Provided mentoring and support, addressing inquiries from webflow and JavaScript developers and identifying solutions to ensure timely and quality deliveries.',
        pt: 'Mentoria e suporte para desenvolvedores webflow e demais desenvolvedores javascript, como no apontamento de soluções para garantir qualidade na entrega.',
      },
    ],
  },
  {
    company: 'Wing',
    title: {
      en: 'Full stack developer',
      pt: 'Desenvolvedor Full Stack Sênior',
    },
    start: { en: 'May 2021', pt: 'Maio 2021' },
    end: { en: 'Dec 2021', pt: 'Dezembro 2021' },
    location: { en: 'São Paulo - SP - Brazil', pt: 'São Paulo - SP - Brazil' },
    description: {
      en: `Working with a team of 6 members using Kanban, being responsable for leading the development and maintence of core websites designed for marketing campaings and portal with SEO`,
      pt: `Fábrica de software, trabalhava em um time de 6 membros com Kanban, sendo responsável pelo desenvolvimento e manutencão da estrutura dos sites criados para campanhas de marketing e portal com SEO`,
    },
    skills: [
      'Kanban',
      'React',
      'Redux',
      'NextJS',
      'Figma',
      'Typescript',
      'Strapi',
      'MySQL',
      'AWS',
      'Git',
      'Github',
    ],
    achievements: [
      {
        en: 'Research and implementation of technical improvements for SEO, as new site structure, new pages, and more along marketing advisors.',
        pt: 'Pesquisa e implementação de melhorias de SEO, como nova estrutura dos sites, novas páginas e mais, junto com time de consultores.',
      },
      {
        en: "Research and implementation of a blog using a headless CMS to enhance the marketing team's flexibility and autonomy.",
        pt: 'Pesquisa e implementação de blog utilizando headless CMS para maior flexibilidade e autonomia do time de Marketing.',
      },
      {
        en: 'Improvements on the Marketing website based on team feedback, resulting in increased sales conversion in a weekly basis.',
        pt: 'Melhorias no site de Marketing de acordo com feedback do time e aumento da conversão de vendas em ciclos semanais.',
      },
    ],
  },
  {
    company: 'OMEGA',
    title: {
      en: 'Full stack developer',
      pt: 'Desenvolvedor Full Stack Sênior',
    },
    start: { en: 'Oct 2019', pt: 'Octubro 2019' },
    end: { en: 'Dec 2021', pt: 'Dezembro 2021' },
    location: { en: 'São Paulo - SP - Brazil', pt: 'São Paulo - SP - Brazil' },
    description: {
      en: `Leading the development for the marketing team, which included 15 people. We used Scrum, React, NextJS, Figma, Typescript, AWS, Webflow and many other tools.`,
      pt: `Liderei o desenvolvimento para o time de marketing, que incluia 15 pessoas. Nos usavamos Scrum, React, NextJS, Figma, Typescript, AWS, Webflow e muitas outras ferramentas.`,
    },
    skills: [
      'Kanban',
      'React',
      'Redux',
      'NextJS',
      'Figma',
      'Typescript',
      'AWS',
      'Bash',
      'Webflow',
      'Git',
      'Github',
    ],
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
        pt: 'Desenvolvimento de ferramenta de monitoramento para checar a saude dos sites e sistemas de e-commerce que reduziu o tempo de resposta para 90%.',
      },
      {
        en: 'Development of tool for monitoring SEO performance for major keywords reducing the response time to 90%.',
        pt: 'Desenvolvimento de ferramenta para monitoramento de performance de SEO para palavras-chave principais reduzindo o tempo de resposta para 90%.',
      },
      {
        en: 'Development of tool to monitoring own and competitors websites performance in major metrics and web core vitals to achieve best results overall.',
        pt: 'Desenvolviento de ferramenta para monitorar a performance de sites próprios e competidores no conjunto de métricas e Web Core Vitals para alcancar melhores resultados.',
      },
      {
        en: 'Created specialized pages from Figma to NextJS for AdWords campaigns and affiliates, significantly increasing the sales conversion rate.',
        pt: 'Criado páginas específicas para campanhas de AdWords e afiliados, aumentando a taxa de vendas.',
      },
    ],
  },
  {
    company: 'Piber Netwwork',
    title: {
      en: 'Software engineer',
      pt: 'Desenvolvimento Fullstack',
    },
    start: { en: 'Set 2013', pt: 'Setembro 2013' },
    end: { en: 'Nov 2019', pt: 'Novembro 2019' },
    location: {
      en: 'Remote - Porto Alegre - RS - Brazil',
      pt: 'Remoto - Porto Alegre - RS - Brasil',
    },
    skills: [
      'PHP',
      'Zend Framework 1-2-3',
      'Javascript',
      'MySQL',
      'React',
      'Angular',
    ],
    description: {
      en: 'Software house providing freelancing and consulting services.',
      pt: 'Fábrica de software fornecendo serviços de freelancer e consultoria.',
    },
    achievements: [
      {
        en: 'Integrated websites with lead capture services requiring JavaScript and API utilization.',
        pt: 'Integração de sites com serviços específicos que demandam programação Javascript e utilização de APIs para captura de Leads.',
      },
      {
        en: 'Developed custom code for Webflow sites, enhancing functionality and user experience.',
        pt: 'Desenvolvimento de custom code para sites em webflow.',
      },
      {
        en: 'Provided consulting on best practices and quality assurance to junior developers.',
        pt: 'Consultoria para boas práticas e qualidade final para desenvolvedores iniciantes.',
      },
      {
        en: 'Consulting on websites with a focus on improving UI and conversion rates.',
        pt: 'Consultoria em sites com foco na melhoria de UI e maior conversão de vendas.',
      },
      {
        en: 'Created prototypes to innovate and introduce modern technologies such as Next and React in companies, leading to technological pioneering.',
        pt: 'Criação de protótipos com objetivo de inovação e introdução de novas tecnologias em empresas Next e React, resultado em pioneiro tecnológico em empresas que ofereciam resistência à inovação.',
      },
      {
        en: 'Developed a chatbot using IBM Watson, an AI platform designed for conversational interfaces.',
        pt: 'Desenvolvimento de chatbot utilizando IBM Watson, uma inteligência artificial voltada para chatbot.',
      },
      {
        en: 'Conducted both manual and automated tests and quality assurance on existing projects.',
        pt: 'Realização de testes e QA, tanto manuais quanto automatizados em projetos já existentes.',
      },
      {
        en: 'Developed multiple e-commerce platforms, selling products ranging from digital goods to food.',
        pt: 'Desenvolvimento de diversões e-commerces para venda de produtos digitais até alimentos.',
      },
      {
        en: 'Developed a business intelligence system to replace Excel spreadsheets with a unified system for more integrated data analysis.',
        pt: 'Desenvolvimento de BI para substituir planilhas de excel por sistema integrado e uma análise mais integral aos dados de empresa.',
      },
    ],
  },
];
