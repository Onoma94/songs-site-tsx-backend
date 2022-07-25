import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('chart')
export class ChartController{
    @Get()
    findAll(@Req() request: Request): string{
        return "current chart"
    }
}