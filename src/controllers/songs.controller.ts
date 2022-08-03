import { Controller, Get, Param } from '@nestjs/common';
import { SongsService } from '../services/songs.service';
import { songs1 as SongsModel } from '@prisma/client';

@Controller()
export class SongsController {
  constructor(
    private readonly songsService: SongsService,) {}

  @Get('songs/:id')
  async getSongById(@Param('id') id: string): Promise<SongsModel>{
    return this.songsService.getSong({SongID: Number(id)});
  }

  @Get('songs')
  async getSongs(): Promise<SongsModel[]>{
    return this.songsService.getSongs({});
  }
  
}
