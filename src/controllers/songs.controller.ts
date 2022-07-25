import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('songs')
export class SongsController{
    @Get()
    findAll(@Req() request: Request): string{
        return "all songs"
    }
}