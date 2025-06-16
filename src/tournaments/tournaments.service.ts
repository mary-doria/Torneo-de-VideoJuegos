import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './tournament.entity';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { MetricsService } from '../metrics.service'; // 👈 Nuevo import

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
    private readonly metricsService: MetricsService, // 👈 Inyectamos el servicio de métricas
  ) {}

  findAll() {
    return this.tournamentRepository.find();
  }

  findOne(id: number) {
    return this.tournamentRepository.findOne({ where: { id } });
  }

  async create(createDto: CreateTournamentDto) {
    const newTournament = this.tournamentRepository.create(createDto);
    const savedTournament = await this.tournamentRepository.save(newTournament);
    this.metricsService.incrementTournamentsCreated(); // 👈 Incrementamos la métrica
    return savedTournament;
  }

  update(id: number, updateData: UpdateTournamentDto) {
    return this.tournamentRepository.update(id, updateData);
  }

  remove(id: number) {
    return this.tournamentRepository.delete(id);
  }
}
