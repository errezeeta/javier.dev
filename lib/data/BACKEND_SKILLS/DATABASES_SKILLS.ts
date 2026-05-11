import { ISkill } from '@/lib/types/ISkill';

export const DATABASES_SKILLS: ISkill = {
  name: 'Databases',
  since: 2017,
  description: 'I have worked with many different kinds of databases, with a strong focus on PostgreSQL and Prisma ORM.',
  subSkills: [
    { name: "PostgreSQL" },
    { name: "Prisma" },
    { name: "Supabase" },
    { name: "MySQL" },
    { name: "MongoDB" },
  ]
}
