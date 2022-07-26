import {Injectable} from "@nestjs/common";
import { Song } from "src/entities/song.entity";

@Injectable()
export class SongsService{
    private readonly songs : Song[] = [];

    findAll(): Song[]
    {
        return this.songs;
    }
}