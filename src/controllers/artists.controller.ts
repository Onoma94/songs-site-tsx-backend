import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('artists')
export class ArtistsController{
    @Get()
    findAll(@Req() request: Request): string{
        return "all artists"
    }
}