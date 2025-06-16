import { IsBoolean, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateTournamentDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del torneo es obligatorio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'La categoría del torneo es obligatoria' })
  category: string;

  @IsInt({ message: 'El número de participantes debe ser un número entero' })
  @Min(2, { message: 'Debe haber al menos 2 participantes' })
  @Max(1000, { message: 'El número máximo de participantes es 1000' })
  maxParticipants: number;

  @IsBoolean({ message: 'El campo "isFree" debe ser verdadero o falso (booleano)' })
  isFree: boolean;
}
