import {Injectable} from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { songs1, Prisma } from "@prisma/client";

@Injectable()
export class SongsService{

    constructor(private prisma: PrismaService){}

    async getSong(
        songs1WhenUniqueInput: Prisma.songs1WhereUniqueInput,
    ): Promise<songs1 | null>{
        return this.prisma.songs1.findUnique({
            where: songs1WhenUniqueInput,
        });
    }

    async getSongs(params: {
        skip?: number
        take?: number
        cursor?: Prisma.songs1WhereUniqueInput
        where?: Prisma.songs1WhereInput
        orderBy?: Prisma.songs1OrderByWithRelationInput
    }): Promise<songs1[]>{
        const { skip, take, cursor, where, orderBy} = params;
        return this.prisma.songs1.findMany(
            {skip, take, cursor, where, orderBy}
        )
    };
}