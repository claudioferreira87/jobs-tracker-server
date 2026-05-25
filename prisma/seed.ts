import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // limpa o banco primeiro
  await prisma.stack.deleteMany();
  await prisma.job.deleteMany();

  // seed
  await prisma.job.createMany({
    data: [],
  });

  await prisma.job.create({
    data: {
      company: 'Intesa Sanpaolo',
      role: 'Senior Angular Developer',
      ral: 45000,
      modality: 'Remote',
      city: 'Milano',
      status: 'interview',
      appliedAt: '2026-03-28',
      nextStep: '2026-04-05',
      contact: 'HR — LinkedIn',
      link: 'https://linkedin.com/jobs/1',
      notes:
        'Entrevista técnica marcada para 5 abril às 15h. Foco em Signals e NgRx.',
      stacks: {
        create: [
          { stack: 'Angular 17+' },
          { stack: 'RxJS' },
          { stack: 'NgRx' },
          { stack: 'TypeScript' },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: 'NTT DATA',
      role: 'Frontend Developer',
      ral: 42000,
      modality: 'Ibrido',
      city: 'Milano',
      status: 'test',
      appliedAt: '2026-03-25',
      nextStep: null,
      contact: null,
      link: 'https://linkedin.com/jobs/2',
      notes: 'Teste técnico no HackerRank. Prazo 3 dias.',
      stacks: {
        create: [
          { stack: 'React 18' },
          { stack: 'TypeScript' },
          { stack: 'TanStack Query' },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: 'Accenture',
      role: 'Full Stack Developer',
      ral: 48000,
      modality: 'Ibrido',
      city: 'Torino',
      status: 'offer',
      appliedAt: '2026-03-22',
      nextStep: null,
      contact: 'Recruiter — Email',
      link: 'https://linkedin.com/jobs/3',
      notes: 'Oferta recebida. Avaliar RAL e benefit.',
      stacks: {
        create: [
          { stack: 'Angular' },
          { stack: '.NET Core' },
          { stack: 'Azure' },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: 'Deloitte',
      role: 'Angular Engineer',
      ral: 43000,
      modality: 'Ibrido',
      city: 'Milano',
      status: 'applied',
      appliedAt: '2026-03-18',
      nextStep: null,
      contact: null,
      link: 'https://linkedin.com/jobs/4',
      notes: '',
      stacks: {
        create: [{ stack: 'Angular' }, { stack: 'NgRx' }, { stack: 'SCSS' }],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: 'Reply',
      role: 'Frontend Developer',
      ral: 40000,
      modality: 'Remote',
      city: 'Torino',
      status: 'waiting',
      appliedAt: '2026-03-15',
      nextStep: null,
      contact: 'HR — LinkedIn',
      link: 'https://linkedin.com/jobs/5',
      notes: 'Enviado CV. Aguardando retorno do HR.',
      stacks: {
        create: [
          { stack: 'React' },
          { stack: 'TypeScript' },
          { stack: 'Node.js' },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: 'Capgemini',
      role: 'Senior Frontend',
      ral: 41000,
      modality: 'Presenziale',
      city: 'Roma',
      status: 'rejected',
      appliedAt: '2026-03-10',
      nextStep: null,
      contact: null,
      link: 'https://linkedin.com/jobs/6',
      notes: 'Recusado após screening HR.',
      stacks: {
        create: [{ stack: 'Vue.js' }, { stack: 'TypeScript' }],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: 'Engineering Group',
      role: 'Angular Developer',
      ral: 38000,
      modality: 'Ibrido',
      city: 'Torino',
      status: 'applied',
      appliedAt: '2026-04-01',
      nextStep: null,
      contact: null,
      link: 'https://linkedin.com/jobs/7',
      notes: 'Java no backend mas FE é Angular puro.',
      stacks: {
        create: [
          { stack: 'Angular' },
          { stack: 'Java' },
          { stack: 'Spring Boot' },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: 'Bending Spoons',
      role: 'Frontend Engineer',
      ral: 55000,
      modality: 'Remote',
      city: 'Milano',
      status: 'interview',
      appliedAt: '2026-03-30',
      nextStep: '2026-04-08',
      contact: 'CTO — Email',
      link: 'https://linkedin.com/jobs/8',
      notes: 'Produto próprio. Culture fit call primeiro.',
      stacks: {
        create: [
          { stack: 'React' },
          { stack: 'TypeScript' },
          { stack: 'GraphQL' },
        ],
      },
    },
  });

  console.log('✅ Seed concluído!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
