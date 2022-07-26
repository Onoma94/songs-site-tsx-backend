import {Injectable} from "@nestjs/common";
import { Artist } from "src/entities/artist.entity";

@Injectable()
export class ArtistsService{
    private readonly artists : Artist[] = [];

    findAll(): Artist[]
    {
        return this.artists;
    }
}