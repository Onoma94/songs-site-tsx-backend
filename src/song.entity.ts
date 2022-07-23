import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  songid: number;

  @Column()
  artistid: number;

  @Column()
  artistname: string;

  @Column()
  songtitle: string;

}
