import {Injectable} from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { songs1_view, Prisma } from "@prisma/client";

@Injectable()
export class SongsService{

    constructor(private prisma: PrismaService){}

    async getSong(
        songs1_viewWhenUniqueInput: Prisma.songs1_viewWhereUniqueInput,
    ): Promise<songs1_view | null>{
        return this.prisma.songs1_view.findUnique({
            where: songs1_viewWhenUniqueInput,
        });
    }

    async getSongs(params: {
        skip?: number
        take?: number
        cursor?: Prisma.songs1_viewWhereUniqueInput
        where?: Prisma.songs1_viewWhereInput
        orderBy?: Prisma.songs1_viewOrderByWithRelationInput
    }): Promise<songs1_view[]>{
        const { skip, take, cursor, where, orderBy} = params;
        return this.prisma.songs1_view.findMany(
            {skip, take, cursor, where, orderBy}
        )
    };
}