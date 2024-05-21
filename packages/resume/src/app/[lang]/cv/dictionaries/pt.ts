import { Achievement, Education, Experience, Labels, Language } from '../types';

export const metadata = {
  title: 'Curriculum Vitae - Mauricio Piber Fão',
};

export const titles = [
  'Desenvolvedor Full Stack',
  'Especialista Web',
  'Conhecimento profundo',
];

export const labels: Labels = {
  years: 'Anos',
  title: 'Curriculum Vitae',
  summary: 'Resumo',
  experience: 'Experiências',
  education: 'Educação',
  achievements: 'Conquistas',
  skill: 'Habilidades',
  language: 'Línguas',
  tools: 'Ferramentas',
  technology: 'Tecnologia',
  methodology: 'Metodologia',
};

export const summary = `Entusiasta em desenvolvimento web e experiência em tecnologias de ponta para empresas. Especialista em frameworks e ferramentas modernas, bem como profundo conhecimento do básico. Mais de 13 anos trabalhando com clientes de pequeno a grande porte em trabalhos regulares e freelancers. Comprometido com o aprendizado contínuo e a excelência no trabalho. Histórico comprovado de inovação e colaboração.`;

export const experience: Experience[] = [
  {
    company: 'Piber Network',
    title: 'Desenvolvedor Fullstack',
    start: 'Jul 2023',
    end: 'Present',
    location: 'Porto Alegre - RS - Brasil',
    responsabilities: [
      'Estudo de viabilidade de framework a utilizar para criação de sites que atinjam pontuação máxima google para otimização SEO e Adwords',
      'Consultoria para entrega de sites de webflow de alta qualidade',
      'Migrar ferramentas internas do NextJS 9 legado e kit Svelte para NextJS 14 com App Router',
    ],
  },
  {
    company: 'Finsweet',
    title: 'Desenvolvedor Fullstack',
    start: 'Dez 2021',
    end: 'Jul 2023',
    location: 'Nova York, Nova York, USA.',
    responsabilities: [
      'Liderei a transição de aplicações de JavaScript para TypeScript, melhorando a qualidade e manutenção do código.',
      'Desenvolvi um serviço de suporte automatizado para ferramenta sem código para ajudar a comunidade sem exigir intervenção humana, resultando em uma redução de 60% nos tickets de suporte e chats e ajudando a atingir 140 milhões de downloads/mês.',
      'Apoiei projetos identificando e resolvendo bugs e respondendo questões técnicas, garantindo que os prazos fossem cumpridos para grandes projetos',
    ],
  },
];

export const educations: Education[] = [];

export const achievements: Achievement[] = [];

/**
 * Metodology
 */
export const methodology = [
  'The pragmatic programmer',
  'Clean code',
  'Clean architecture',
];

export const languages: Language[] = [
  {
    title: 'Português',
    quality: 'Nativo',
  },
  {
    title: 'Inglês',
    quality: 'Intermediário',
  },
];
