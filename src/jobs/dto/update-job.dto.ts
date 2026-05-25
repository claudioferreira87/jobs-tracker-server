export class UpdateJobDto {
  company?: string;
  role?: string;
  stacks?: { stack: string }[];
  ral?: number;
  modality?: string;
  city?: string;
  status?: string;
  appliedAt?: string;
  nextStep?: string | null;
  contact?: string | null;
  link?: string;
  notes?: string;
}
