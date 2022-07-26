import { Controller, Get, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('song/:id')
export class SongController{
    @Get('/song/:id')
    findOne(@Param() params): string{
        return `#${params.id} Weezer - Buddy Holly`;
    }
}