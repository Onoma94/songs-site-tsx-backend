import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('contact')
export class ContactController{
    @Get()
    findAll(@Req() request: Request): string{
        return "contact info"
    }
}