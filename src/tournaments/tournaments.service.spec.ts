import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsService } from './tournaments.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Tournament } from './tournament.entity';
import { Repository } from 'typeorm';
import { ObjectLiteral } from 'typeorm';

const mockTournamentRepository = () => ({
  find: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

type MockRepository<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('TournamentsService', () => {
  let service: TournamentsService;
  let repository: MockRepository<Tournament>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TournamentsService,
        {
          provide: getRepositoryToken(Tournament),
          useFactory: mockTournamentRepository,
        },
      ],
    }).compile();

    service = module.get<TournamentsService>(TournamentsService);
    repository = module.get<MockRepository<Tournament>>(getRepositoryToken(Tournament));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all tournaments', async () => {
    const tournaments = [{ id: 1, name: 'FIFA' }];
    repository.find!.mockResolvedValue(tournaments);

    const result = await service.findAll();
    expect(result).toEqual(tournaments);
  });

  it('should create and save a new tournament', async () => {
    const dto = { name: 'LOL', category: 'MOBA', maxParticipants: 10, isFree: true };
    const tournament = { id: 1, ...dto };

    repository.create!.mockReturnValue(tournament);
    repository.save!.mockResolvedValue(tournament);

    const result = await service.create(dto);
    expect(repository.create).toHaveBeenCalledWith(dto);
    expect(repository.save).toHaveBeenCalledWith(tournament);
    expect(result).toEqual(tournament);
  });

  it('should return one tournament by id', async () => {
    const tournament = { id: 1, name: 'CS:GO', category: 'FPS', maxParticipants: 8, isFree: false };
    repository.findOne!.mockResolvedValue(tournament);

    const result = await service.findOne(1);
    expect(result).toEqual(tournament);
  });

  it('should update a tournament', async () => {
    const updateData = { name: 'Updated' };
    repository.update!.mockResolvedValue({ affected: 1 });

    const result = await service.update(1, updateData);
    expect(result).toEqual({ affected: 1 });
  });

  it('should delete a tournament', async () => {
    repository.delete!.mockResolvedValue({ affected: 1 });

    const result = await service.remove(1);
    expect(result).toEqual({ affected: 1 });
  });
});
