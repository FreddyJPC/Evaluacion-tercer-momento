import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendeeDto {
  @ApiProperty({ description: 'El nombre del asistente' })
  readonly name: string;

  @ApiProperty({ description: 'La edad del asistente', type: 'integer', minimum: 0 })
  readonly age: number;

  @ApiProperty({ description: 'El correo electrónico del asistente' })
  readonly email: string;
}
