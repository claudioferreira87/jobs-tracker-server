import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getAllJobs() {
    return this.jobsService.getAllJobs();
  }

  @Get()
  getJobById(id: string) {
    return this.jobsService.getJobById(id);
  }

  @Post()
  createNewJob(@Body() dto: CreateJobDto) {
    return this.jobsService.createNewJob(dto);
  }

  @Put(':id')
  updateJob(@Param('id') id: string, @Body() job: UpdateJobDto) {
    return this.jobsService.updateJob(id, job);
  }

  @Delete(':id')
  deleteJob(@Param('id') id: string) {
    return this.jobsService.deleteJob(id);
  }
}
