import {Injectable} from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { chart1_dates, Prisma } from "@prisma/client";

@Injectable()
export class ChartdatesService{

    constructor(private prisma: PrismaService){}

    async getChartdate(
        chart1_datesWhenUniqueInput: Prisma.chart1_datesWhereUniqueInput,
    ): Promise<chart1_dates | null>{
        return this.prisma.chart1_dates.findUnique({
            where: chart1_datesWhenUniqueInput,
        });
    }

    async getChartdates(params: {
        skip?: number
        take?: number
        cursor?: Prisma.chart1_datesWhereUniqueInput
        where?: Prisma.chart1_datesWhereInput
        orderBy?: Prisma.chart1_datesOrderByWithRelationInput
    }): Promise<chart1_dates[]>{
        const { skip, take, cursor, where, orderBy} = params;
        return this.prisma.chart1_dates.findMany(
            {skip, take, cursor, where, orderBy}
        )
    };
}