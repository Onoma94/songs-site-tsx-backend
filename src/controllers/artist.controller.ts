import { Controller, Get, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('artist')
export class ArtistController{
    @Get('/artist/:id')
    findOne(@Param() params): string{
        return `#${params.id} Weezer`;
    }
}