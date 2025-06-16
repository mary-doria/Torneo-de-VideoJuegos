import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  maxParticipants: number;

  @Column()
  isFree: boolean;
}
