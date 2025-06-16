import { IsBoolean, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentDto {
  @ApiProperty({
    example: 'FIFA Ultimate Cup',
    description: 'Nombre del torneo (no puede estar vacío)',
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre del torneo es obligatorio' })
  name: string;

  @ApiProperty({
    example: 'Fútbol',
    description: 'Categoría del torneo (no puede estar vacía)',
  })
  @IsString()
  @IsNotEmpty({ message: 'La categoría del torneo es obligatoria' })
  category: string;

  @ApiProperty({
    example: 16,
    description: 'Número máximo de participantes (entre 2 y 1000)',
  })
  @IsInt({ message: 'El número de participantes debe ser un número entero' })
  @Min(2, { message: 'Debe haber al menos 2 participantes' })
  @Max(1000, { message: 'El número máximo de participantes es 1000' })
  maxParticipants: number;

  @ApiProperty({
    example: true,
    description: 'Indica si el torneo es gratuito o no',
  })
  @IsBoolean({ message: 'El campo "isFree" debe ser verdadero o falso (booleano)' })
  isFree: boolean;
}
