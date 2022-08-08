import {Injectable} from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { charts1_view, Prisma } from "@prisma/client";

@Injectable()
export class ChartsService{

    constructor(private prisma: PrismaService){}

    async getChart(
        charts1_viewWhenUniqueInput: Prisma.charts1_viewWhereUniqueInput,
    ): Promise<charts1_view | null>{
        return this.prisma.charts1_view.findUnique({
            where: charts1_viewWhenUniqueInput,
        });
    }

    async getLatestChartNo() {
        const result = await this.prisma.$queryRaw`SELECT MAX(ChartNo) AS latest FROM charts1`;
        return result;
    };

    async getCharts(params: {
        skip?: number
        take?: number
        cursor?: Prisma.charts1_viewWhereUniqueInput
        where?: Prisma.charts1_viewWhereInput
        orderBy?: Prisma.charts1_viewOrderByWithRelationInput
    }): Promise<charts1_view[]>{
        const { skip, take, cursor, where, orderBy} = params;
        return this.prisma.charts1_view.findMany(
            {skip, take, cursor, where, orderBy}
        )
    };
}