import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('artist')
export class ArtistController{
    @Get()
    findAll(@Req() request: Request): string{
        return "Weezer"
    }
}