import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chart {
  @PrimaryGeneratedColumn()
  chartid: number;

  @Column()
  chartno: number;

  @Column()
  chartpos: number;

  @Column()
  artistid: number;

  @Column()
  songid: number;

  @Column()
  artistname: string;

  @Column()
  songtitle: string;

}
