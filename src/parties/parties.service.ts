import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PartiesService {
  constructor(private prisma: PrismaService) {}

  async getPartiesByDate(date: string) {
    // Aquí deberías utilizar el servicio Prisma para buscar las fiestas por fecha
    const parties = await this.prisma.party.findMany({
      where: {
        date: date,
      },
    });
    return parties;
  }

  create(createPartyDto: CreatePartyDto) {
    return 'This action adds a new party';
  }

  findAll() {
    return `This action returns all parties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} party`;
  }

  update(id: number, updatePartyDto: UpdatePartyDto) {
    return `This action updates a #${id} party`;
  }

  remove(id: number) {
    return `This action removes a #${id} party`;
  }
}
