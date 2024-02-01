import { Controller, Get, Param } from '@nestjs/common';
import { PartiesService } from './parties.service';

@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Get(':date')
  getPartiesByDate(@Param('date') date: string) {
    return this.partiesService.getPartiesByDate(date);
  }
}
