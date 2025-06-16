import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';

describe('TournamentsController', () => {
  let controller: TournamentsController;
  let service: TournamentsService;

  const mockService = {
    findAll: jest.fn().mockResolvedValue([]),
    create: jest.fn().mockImplementation((dto: CreateTournamentDto) => ({
      id: 1,
      ...dto,
    })),
    findOne: jest.fn().mockResolvedValue({
      id: 1,
      name: 'Test Tournament',
      category: 'FPS',
      maxParticipants: 16,
      isFree: true,
    }),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    remove: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentsController],
      providers: [
        {
          provide: TournamentsService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<TournamentsController>(TournamentsController);
    service = module.get<TournamentsService>(TournamentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a tournament', async () => {
    const dto: CreateTournamentDto = {
      name: 'Rocket League Cup',
      category: 'Sports',
      maxParticipants: 64,
      isFree: false,
    };

    expect(await controller.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });
    expect(mockService.create).toHaveBeenCalledWith(dto);
  });

  it('should return all tournaments', async () => {
    await controller.findAll();
    expect(mockService.findAll).toHaveBeenCalled();
  });
});
