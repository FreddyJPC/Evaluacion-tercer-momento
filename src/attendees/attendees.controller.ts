import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttendeesService } from './attendees.service';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';

@Controller('attendees')
export class AttendeesController {
  constructor(private readonly attendeesService: AttendeesService) {}

  @Post()
  create(@Body() createAttendeeDto: CreateAttendeeDto) {
    return this.attendeesService.create(createAttendeeDto);
  }

  @Get()
  findAll() {
    return this.attendeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttendeeDto: UpdateAttendeeDto) {
    return this.attendeesService.update(+id, updateAttendeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendeesService.remove(+id);
  }

  // Nuevo Endpoint para incrementar presupuesto
  @Post(':id/bank')
  increaseBudget(@Param('id') id: string, @Body() data: any) {
    // Lógica para aumentar el presupuesto del asistente con el id proporcionado
    return this.attendeesService.increaseBudget(+id, data.amount);
  }

  // Nuevo Endpoint para la realocación de presupuesto
  @Post('reallocation')
  reallocateBudget(@Body() data: any) {
    // Lógica para transferir presupuesto de un asistente a otro según los datos proporcionados
    return this.attendeesService.reallocateBudget(data.from, data.to, data.amount);
  }
}
