import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chartdate {
  @PrimaryGeneratedColumn()
  chartno: number;

  @Column()
  chartdate: string;

}
