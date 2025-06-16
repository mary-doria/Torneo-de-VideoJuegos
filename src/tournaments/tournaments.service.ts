import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './tournament.entity';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
  ) {}

  findAll() {
    return this.tournamentRepository.find();
  }

  findOne(id: number) {
    return this.tournamentRepository.findOne({ where: { id } });
  }

  create(createDto: CreateTournamentDto) {
    const newTournament = this.tournamentRepository.create(createDto);
    return this.tournamentRepository.save(newTournament);
  }

  update(id: number, updateData: UpdateTournamentDto) {
    return this.tournamentRepository.update(id, updateData);
  }

  remove(id: number) {
    return this.tournamentRepository.delete(id);
  }
}
