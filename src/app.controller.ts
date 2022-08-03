import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { SongsService } from './services/songs.service';
import { ChartsService } from './services/charts.service';
import { ArtistsService } from './services/artists.service';
import { ChartdatesService } from './services/chartdates.service';
import { artists1 as ArtistsModel,
         songs1 as SongsModel, 
         charts1 as ChartsModel,
         chart1_dates as ChartdatesModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly songsService: SongsService,
    private readonly artistsService: ArtistsService,
    private readonly chartsService: ChartsService,
    private readonly chartdatesService: ChartdatesService) {}

  @Get('artist/:id')
  async getArtistById(@Param('id') id: string): Promise<ArtistsModel>{
    return this.artistsService.getArtist({ArtistID: Number(id)});
  }

  @Get('artists')
  async getArtists(): Promise<ArtistsModel[]>{
    return this.artistsService.getArtists({});
  }
  
}
