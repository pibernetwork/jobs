import { createContext } from 'react';
import { Resume } from '../types';

export const ResumeContext = createContext<Resume | undefined>(undefined);
