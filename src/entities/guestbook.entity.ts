import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guestbook {
  @PrimaryGeneratedColumn()
  postid: number;

  @Column()
  postcontent: string;

  @Column()
  postauthor: string;

  @Column()
  postdate: string;

}
