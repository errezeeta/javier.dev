import { API_SKILLS } from '@/lib/data/BACKEND_SKILLS/API_SKILLS';
import { API_INTEGRATION_SKILLS } from '@/lib/data/BACKEND_SKILLS/API_INTEGRATION_SKILLS';
import { BACKEND_OTHER_SKILLS } from '@/lib/data/BACKEND_SKILLS/BACKEND_OTHER_SKILLS';
import { DATABASES_SKILLS } from '@/lib/data/BACKEND_SKILLS/DATABASES_SKILLS';
import { ISkill } from '@/lib/types/ISkill';

export const BACKEND_SKILLS: ISkill = {  
  name: 'Backend',
  since: 2019,
  level: 50,
  description: 'Although backend is not my primary focus, I have significant experience in backend development: I have built servers and APIs and implemented various integrations.',
  subSkills: [
    DATABASES_SKILLS,
    API_SKILLS,
    API_INTEGRATION_SKILLS,
    BACKEND_OTHER_SKILLS,
  ]
}


