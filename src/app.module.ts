import { Module } from "@nestjs/common";
import { ArtistsController } from "./controllers/artists.controller";
import { ChartdatesController } from "./controllers/chartdates.controller";
import { ChartsController } from "./controllers/charts.controller";
import { SongsController } from "./controllers/songs.controller";
import { ArtistsService } from "./services/artists.service";
import { ChartdatesService } from "./services/chartdates.service";
import { ChartsService } from "./services/charts.service";
import { PrismaService } from "./services/prisma.service";
import { SongsService } from "./services/songs.service";

@Module({
    controllers: [SongsController, ArtistsController, ChartdatesController, ChartsController],
    providers: [SongsService, ArtistsService, ChartsService, ChartdatesService, PrismaService],
})
export class AppModule{}