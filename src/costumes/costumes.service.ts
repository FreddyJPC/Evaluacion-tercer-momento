import { Injectable } from '@nestjs/common';
import { CreateCostumeDto } from './dto/create-costume.dto';
import { UpdateCostumeDto } from './dto/update-costume.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CostumesService {
  constructor(private prisma: PrismaService) {}

  async findStockCostumes() {
    // Lógica para encontrar disfraces en stock
    const stockCostumes = await this.prisma.costume.findMany({
      where: {
        stock: {
          gt: 0 // Busca disfraces con stock mayor que 0
        }
      }
    });
    return stockCostumes;
  }

  async addCostumesToInventory(newCostumes: CreateCostumeDto[]) {
    // Lógica para agregar disfraces al inventario
    const createdCostumes = [];
    for (const costumeData of newCostumes) {
      const createdCostume = await this.prisma.costume.create({
        data: {
          name: costumeData.name,
          description: costumeData.description,
          weakness: costumeData.weakness,
          skills: costumeData.skills,
          price: costumeData.price,
          stock: true, // Suponiendo que todos los disfraces agregados están en stock inicialmente
        }
      });
      createdCostumes.push(createdCostume);
    }
    return createdCostumes;
  }

  create(createCostumeDto: CreateCostumeDto) {
    return 'This action adds a new costume';
  }

  findAll() {
    return `This action returns all costumes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costume`;
  }

  update(id: number, updateCostumeDto: UpdateCostumeDto) {
    return `This action updates a #${id} costume`;
  }

  remove(id: number) {
    return `This action removes a #${id} costume`;
  }
}
