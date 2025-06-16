import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PrometheusModule, makeCounterProvider } from '@willsoto/nestjs-prometheus';
import { Registry } from 'prom-client';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsModule } from './tournaments/tournaments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service'; 

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'esports',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PrometheusModule.register(),
    TournamentsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, MetricsController],
  providers: [
    AppService,
    {
      provide: Registry,
      useValue: require('prom-client').register,
    },
    MetricsService, 
  ],
})
export class AppModule {}
