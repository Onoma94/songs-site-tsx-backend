import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SongController } from './controllers/song.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dupa',
      database: 'songs',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, SongController],
  providers: [AppService],
})
export class AppModule {}
