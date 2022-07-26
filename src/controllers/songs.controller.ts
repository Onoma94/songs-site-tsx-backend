import { Controller, Get, HttpCode, Body } from '@nestjs/common';
import { Request } from 'express';
import { SongsService } from 'src/services/songs.service';
import { Song } from '../entities/song.entity';

@Controller('songs')
export class SongsController{

    constructor(private songsService : SongsService){}

    @Get()
    @HttpCode(200)
    async findAll(): Promise<Song[]> {
        return this.songsService.findAll();
    }
}