import { Injectable } from '@nestjs/common';
import { Counter } from 'prom-client';
import { registry } from './metrics.registry';

@Injectable()
export class MetricsService {
  private readonly tournamentCreatedCounter: Counter<string>;

  constructor() {
    this.tournamentCreatedCounter = new Counter({
      name: 'tournament_created_total',
      help: 'Número total de torneos creados',
      registers: [registry], // 👈 Importante para que esté visible en Prometheus
    });
  }

  incrementTournamentsCreated() {
    this.tournamentCreatedCounter.inc();
  }
}
