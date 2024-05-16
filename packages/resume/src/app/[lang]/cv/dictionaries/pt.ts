import { Education, Experience, Labels, Language } from '../types';

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

export const summary = `Foco na experiência de usuário e desenvolvimento, com performance para o cliente enquanto mantém o código limpo e organizado para adoção por novos desenvolvedores. Passo rápido de aprendizagem. `;

export const experience: Experience[] = [];

export const educations: Education[] = [];

export const achievements = [];

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
