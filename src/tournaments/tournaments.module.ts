import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { Tournament } from './tournament.entity';
import { MetricsModule } from '../metrics.module';


@Module({
  imports: [TypeOrmModule.forFeature([Tournament]), MetricsModule],
  controllers: [TournamentsController],
  providers: [TournamentsService],
})
export class TournamentsModule {}
