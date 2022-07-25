import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('contact')
export class SongController{
    @Get()
    findAll(@Req() request: Request): string{
        return "contact info"
    }
}