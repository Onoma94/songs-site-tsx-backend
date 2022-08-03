import { Controller, Get, Param } from '@nestjs/common';
import { ChartsService } from '../services/charts.service';
import { charts1 as ChartsModel } from '@prisma/client';

@Controller()
export class ChartsController {
  constructor(
    private readonly chartsService: ChartsService,) {}

  @Get('charts/:id')
  async getChartByNo(@Param('id') id: string): Promise<ChartsModel[]>{
    return this.chartsService
    .getCharts({where: {ChartNo: {equals: Number(id)}}, orderBy: {ChartPos: 'asc'}})
  }

}
