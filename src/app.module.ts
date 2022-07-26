import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SongController } from './controllers/song.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsController } from './controllers/songs.controller';
import { ArtistController } from './controllers/artist.controller';
import { ArtistsController } from './controllers/artists.controller';
import { ChartController } from './controllers/chart.controller';
import { ContactController } from './controllers/contact.controller';
import { Artist } from './entities/artist.entity';
import { Chart } from './entities/chart.entity';
import { Chartdate } from './entities/chartdate.entity';
import { Song } from './entities/song.entity';
import { SongsService } from './services/songs.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'cipa',
      database: 'songs',
      entities: [Artist, Chart, Chartdate, Song],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ArtistController, ArtistsController, ChartController, ContactController, SongController, SongsController],
  providers: [AppService, SongsService],
})
export class AppModule {}
