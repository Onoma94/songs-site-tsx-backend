import { Controller, Get, Param } from '@nestjs/common';
import { SongsService } from '../services/songs.service';
import { songs1_view as SongsModel } from '@prisma/client';

@Controller()
export class SongsController {
  constructor(
    private readonly songsService: SongsService,) {}

  @Get('songs/songid/:id')
  async getSongById(@Param('id') id: string): Promise<SongsModel>{
    return this.songsService.getSong({SongID: Number(id)});
  }

  @Get('songs')
  async getSongs(): Promise<SongsModel[]>{
    return this.songsService.getSongs({});
  }
  
  @Get('songs/artistid/:id')
  async getSongsByArtistId(@Param('id') id: string) : Promise<SongsModel[]>{
    return this.songsService.getSongs({where: {ArtistID: {equals: Number(id)}}, orderBy: {SongTitle: 'asc'}})
  }

  @Get('songs/songtitle/:title')
  async getSongsByTitle(@Param('title') title: string) : Promise<SongsModel[]>{
    return this.songsService.getSongs({where: {SongTitle: {contains: title}}});
  }

  @Get('songs/artistname/:name')
  async getSongsByArtistName(@Param('name') name: string) : Promise<SongsModel[]>{
    return this.songsService.getSongs({where: {ArtistName: {contains: name}}});
  }
}
