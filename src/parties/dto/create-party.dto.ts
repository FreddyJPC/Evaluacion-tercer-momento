import { ApiProperty } from '@nestjs/swagger';

export class CreatePartyDto {
  @ApiProperty({ description: 'El nombre de la fiesta' })
  readonly name: string;

  @ApiProperty({ description: 'La fecha de la fiesta', type: 'string', format: 'date' })
  readonly date: string;

  @ApiProperty({ description: 'La ubicación de la fiesta' })
  readonly location: string;

  // Otros campos necesarios para crear una fiesta
}
