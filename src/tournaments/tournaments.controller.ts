import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Torneos')
@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los torneos' })
  findAll() {
    return this.tournamentsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo torneo' })
  @ApiBody({ type: CreateTournamentDto })
  create(@Body() createDto: CreateTournamentDto) {
    return this.tournamentsService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un torneo por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del torneo' })
  findOne(@Param('id') id: string) {
    return this.tournamentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un torneo por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del torneo a actualizar' })
  @ApiBody({ type: UpdateTournamentDto })
  update(@Param('id') id: string, @Body() updateData: UpdateTournamentDto) {
    return this.tournamentsService.update(+id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un torneo por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del torneo a eliminar' })
  remove(@Param('id') id: string) {
    return this.tournamentsService.remove(+id);
  }
}
