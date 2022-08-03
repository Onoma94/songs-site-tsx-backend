import { Controller, Get, Param } from '@nestjs/common';
import { ArtistsService } from '../services/artists.service';
import { artists1 as ArtistsModel } from '@prisma/client';

@Controller()
export class ArtistsController {
  constructor(
    private readonly artistsService: ArtistsService,) {}

  @Get('artists/artistid/:id')
  async getArtistById(@Param('id') id: string): Promise<ArtistsModel>{
    return this.artistsService.getArtist({ArtistID: Number(id)});
  }

  @Get('artists')
  async getArtists(): Promise<ArtistsModel[]>{
    return this.artistsService.getArtists({});
  }

  @Get('artists/artistname/:name')
  async getArtistsByName(@Param('name') name: string) : Promise<ArtistsModel[]>{
    return this.artistsService.getArtists({where: {ArtistName: {contains: name}}});
  }
  
}
