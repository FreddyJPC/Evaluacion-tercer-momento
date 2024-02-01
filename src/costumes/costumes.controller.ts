import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostumesService } from './costumes.service';
import { CreateCostumeDto } from './dto/create-costume.dto';
import { UpdateCostumeDto } from './dto/update-costume.dto';

@Controller('costumes')
export class CostumesController {
  constructor(private readonly costumesService: CostumesService) {}

  @Post()
  create(@Body() createCostumeDto: CreateCostumeDto) {
    return this.costumesService.create(createCostumeDto);
  }

  @Get('stock')
  findStockCostumes() {
    return this.costumesService.findStockCostumes();
  }

  @Get('supplying') // Cambio aquí
  addCostumesToInventory() {
    return this.costumesService.addCostumesToInventory([]); // Pass an empty array as an argument
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostumeDto: UpdateCostumeDto) {
    return this.costumesService.update(+id, updateCostumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumesService.remove(+id);
  }
}