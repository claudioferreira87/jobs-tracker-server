import { Injectable } from '@nestjs/common';
import { IJob } from './jobs.model';
import { PrismaService } from 'prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  private jobs: IJob[] = [
    {
      id: '1',
      company: 'Intesa Sanpaolo',
      role: 'Senior Angular Developer',
      stacks: [
        { id: '1', stack: 'Angular 17+' },
        { id: '2', stack: 'RxJS' },
        { id: '3', stack: 'NgRx' },
        { id: '4', stack: 'TypeScript' },
      ],
      ral: 45000,
      modality: 'Remote',
      city: 'Milano',
      status: 'entrevista',
      appliedAt: '2026-03-28',
      nextStep: '2026-04-05',
      contact: 'HR — LinkedIn',
      link: 'https://linkedin.com/jobs/1',
      notes:
        'Entrevista técnica marcada para 5 abril às 15h. Foco em Signals e NgRx.',
    },
    {
      id: '2',
      company: 'NTT DATA',
      role: 'Frontend Developer',
      stacks: [
        { id: '1', stack: 'React 18' },
        { id: '2', stack: 'TypeScript' },
        { id: '3', stack: 'TanStack Query' },
      ],
      ral: 42000,
      modality: 'Ibrido',
      city: 'Milano',
      status: 'teste',
      appliedAt: '2026-03-25',
      nextStep: null,
      contact: null,
      link: 'https://linkedin.com/jobs/2',
      notes: 'Teste técnico no HackerRank. Prazo 3 dias.',
    },
    {
      id: '3',
      company: 'Accenture',
      role: 'Full Stack Developer',
      stacks: [
        { id: '1', stack: 'Angular' },
        { id: '2', stack: '.NET Core' },
        { id: '3', stack: 'Azure' },
      ],
      ral: 48000,
      modality: 'Ibrido',
      city: 'Torino',
      status: 'oferta',
      appliedAt: '2026-03-22',
      nextStep: null,
      contact: 'Recruiter — Email',
      link: 'https://linkedin.com/jobs/3',
      notes: 'Oferta recebida. Avaliar RAL e benefit.',
    },
    {
      id: '4',
      company: 'Deloitte',
      role: 'Angular Engineer',
      stacks: [
        { id: '1', stack: 'Angular' },
        { id: '2', stack: 'NgRx' },
        { id: '3 ', stack: 'SCSS' },
      ],
      ral: 43000,
      modality: 'Ibrido',
      city: 'Milano',
      status: 'aplicado',
      appliedAt: '2026-03-18',
      nextStep: null,
      contact: null,
      link: 'https://linkedin.com/jobs/4',
      notes: '',
    },
    {
      id: '5',
      company: 'Reply',
      role: 'Frontend Developer',
      stacks: [
        { id: '1', stack: 'React' },
        { id: '2', stack: 'TypeScript' },
        { id: '3', stack: 'Node.js' },
      ],
      ral: 40000,
      modality: 'Remote',
      city: 'Torino',
      status: 'aguardando',
      appliedAt: '2026-03-15',
      nextStep: null,
      contact: 'HR — LinkedIn',
      link: 'https://linkedin.com/jobs/5',
      notes: 'Enviado CV. Aguardando retorno do HR.',
    },
    {
      id: '6',
      company: 'Capgemini',
      role: 'Senior Frontend',
      stacks: [
        { id: '1', stack: 'Vue.js' },
        { id: '2', stack: 'TypeScript' },
      ],
      ral: 41000,
      modality: 'Presenziale',
      city: 'Roma',
      status: 'recusado',
      appliedAt: '2026-03-10',
      nextStep: null,
      contact: null,
      link: 'https://linkedin.com/jobs/6',
      notes: 'Recusado após screening HR.',
    },
    {
      id: '7',
      company: 'Engineering Group',
      role: 'Angular Developer',
      stacks: [
        { id: '1', stack: 'Angular' },
        { id: '2', stack: 'Java' },
        { id: '3', stack: 'Spring Boot' },
      ],
      ral: 38000,
      modality: 'Ibrido',
      city: 'Torino',
      status: 'aplicado',
      appliedAt: '2026-04-01',
      nextStep: null,
      contact: null,
      link: 'https://linkedin.com/jobs/7',
      notes: 'Java no backend mas FE é Angular puro.',
    },
    {
      id: '8',
      company: 'Bending Spoons',
      role: 'Frontend Engineer',
      stacks: [
        { id: '1', stack: 'React' },
        { id: '2', stack: 'TypeScript' },
        { id: '3', stack: 'GraphQL' },
      ],
      ral: 55000,
      modality: 'Remote',
      city: 'Milano',
      status: 'entrevista',
      appliedAt: '2026-03-30',
      nextStep: '2026-04-08',
      contact: 'CTO — Email',
      link: 'https://linkedin.com/jobs/8',
      notes: 'Produto próprio. Culture fit call primeiro.',
    },
  ];

  getAllJobs() {
    return this.prisma.job.findMany({
      include: { stacks: true },
    });
  }

  getJobById(id: string) {
    return this.prisma.job.findUnique({
      where: { id },
      include: { stacks: true },
    });
  }

  createNewJob(dto: CreateJobDto) {
    const { stacks, ...jobData } = dto;
    return this.prisma.job.create({
      data: {
        ...jobData,
        stacks: {
          create: stacks ?? [],
        },
      },
      include: { stacks: true },
    });
  }

  updateJob(id: string, dto: UpdateJobDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { stacks: _stacks, ...jobData } = dto;
    return this.prisma.job.update({
      where: { id },
      data: jobData,
      include: { stacks: true },
    });
  }

  deleteJob(id: string) {
    return this.prisma.job.delete({
      where: { id },
    });
  }
}
