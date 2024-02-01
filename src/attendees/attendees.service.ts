import { Injectable } from '@nestjs/common';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AttendeesService {

  constructor(private prisma: PrismaService) {}

  create(createAttendeeDto: CreateAttendeeDto) {
    return 'This action adds a new attendee';
  }

  findAll() {
    return `This action returns all attendees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendee`;
  }

  update(id: number, updateAttendeeDto: UpdateAttendeeDto) {
    return `This action updates a #${id} attendee`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendee`;
  }

  increaseBudget(id: number, amount: number) {
    // Lógica para aumentar el presupuesto del asistente con el id proporcionado
    return this.prisma.attendee.update({
      where: { id },
      data: { budget: { increment: amount } },
    });
  }

  reallocateBudget(from: number, to: number, amount: number) {
    // Lógica para transferir presupuesto de un asistente a otro
    return this.prisma.$transaction([
      this.prisma.attendee.update({
        where: { id: from },
        data: { budget: { decrement: amount } },
      }),
      this.prisma.attendee.update({
        where: { id: to },
        data: { budget: { increment: amount } },
      })
    ]);
  }
}
