import { Controller, Get, Post, Body } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { Param, Patch, Delete } from '@nestjs/common';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

    @Get()
        findAll() {
            return this.tournamentsService.findAll();
    }

    @Post()
        create(@Body() createDto: CreateTournamentDto) {
            return this.tournamentsService.create(createDto);
    }
 
    @Get(':id')
        findOne(@Param('id') id: string) {
            return this.tournamentsService.findOne(+id);
    }

    @Patch(':id')
        update(@Param('id') id: number, @Body() updateData: UpdateTournamentDto) {
            return this.tournamentsService.update(+id, updateData);
    }    

    @Delete(':id')
        remove(@Param('id') id: string) {
            return this.tournamentsService.remove(+id);
    }
}
