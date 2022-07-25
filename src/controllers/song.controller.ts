import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('song')
export class SongController{
    @Get()
    findAll(@Req() request: Request): string{
        return "Weezer - Buddy Holly"
    }
}