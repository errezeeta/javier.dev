import { ISkill } from '@/lib/types/ISkill';

export const DATABASES_SKILLS: ISkill = {
  name: 'Databases',
  since: 2017,
  description: 'I have worked with many different kinds of databases.',
  subSkills: [
    { name: "PostgreSQL" },
    { name: "Supabase" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "MariaDB" },
  ]
}
