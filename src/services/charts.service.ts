import {Injectable} from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { charts1, Prisma } from "@prisma/client";

@Injectable()
export class ChartsService{

    constructor(private prisma: PrismaService){}

    async getChart(
        charts1WhenUniqueInput: Prisma.charts1WhereUniqueInput,
    ): Promise<charts1 | null>{
        return this.prisma.charts1.findUnique({
            where: charts1WhenUniqueInput,
        });
    }

    async getCharts(params: {
        skip?: number
        take?: number
        cursor?: Prisma.charts1WhereUniqueInput
        where?: Prisma.charts1WhereInput
        orderBy?: Prisma.charts1OrderByWithRelationInput
    }): Promise<charts1[]>{
        const { skip, take, cursor, where, orderBy} = params;
        return this.prisma.charts1.findMany(
            {skip, take, cursor, where, orderBy}
        )
    };
}