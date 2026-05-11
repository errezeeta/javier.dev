import { API_SKILLS } from '@/lib/data/BACKEND_SKILLS/API_SKILLS';
import { API_INTEGRATION_SKILLS } from '@/lib/data/BACKEND_SKILLS/API_INTEGRATION_SKILLS';
import { BACKEND_OTHER_SKILLS } from '@/lib/data/BACKEND_SKILLS/BACKEND_OTHER_SKILLS';
import { DATABASES_SKILLS } from '@/lib/data/BACKEND_SKILLS/DATABASES_SKILLS';
import { ISkill } from '@/lib/types/ISkill';

export const BACKEND_SKILLS: ISkill = {  
  name: 'Backend',
  since: 2019,
  level: 50,
  description: 'I have strong backend experience building scalable APIs and services. I work extensively with Express, Prisma, PostgreSQL, and event-driven architectures.',
  subSkills: [
    DATABASES_SKILLS,
    API_SKILLS,
    API_INTEGRATION_SKILLS,
    BACKEND_OTHER_SKILLS,
  ]
}


