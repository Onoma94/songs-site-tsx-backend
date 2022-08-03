import {Injectable} from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { artists1, Prisma } from "@prisma/client";

@Injectable()
export class ArtistsService{

    constructor(private prisma: PrismaService){}

    async getArtist(
        artists1WhenUniqueInput: Prisma.artists1WhereUniqueInput,
    ): Promise<artists1 | null>{
        return this.prisma.artists1.findUnique({
            where: artists1WhenUniqueInput,
        });
    }

    async getArtists(params: {
        skip?: number
        take?: number
        cursor?: Prisma.artists1WhereUniqueInput
        where?: Prisma.artists1WhereInput
        orderBy?: Prisma.artists1OrderByWithRelationInput
    }): Promise<artists1[]>{
        const { skip, take, cursor, where, orderBy} = params;
        return this.prisma.artists1.findMany(
            {skip, take, cursor, where, orderBy}
        )
    };

}