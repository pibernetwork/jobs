import { useContext } from 'react';
import { Resume } from '../types';
import { ResumeContext } from './resume.context';

export function useResumeContext(): Resume {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
}
