import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('blog')
export class GuestbookController{
    @Get()
    findAll(@Req() request: Request): string{
        return "all posts"
    }
}