export interface IJob {
  id: string;
  company: string;
  role: string;
  stacks: StackType[];
  ral: number;
  modality: string;
  city: string;
  status: string;
  appliedAt: string;
  nextStep: string | null;
  contact: string | null;
  link: string;
  notes: string;
}

export interface StackType {
  id: string;
  stack: string;
}
