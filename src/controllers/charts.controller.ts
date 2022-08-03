import { Controller, Get, Param } from '@nestjs/common';
import { ChartsService } from '../services/charts.service';
import { charts1_view as ChartsModel } from '@prisma/client';

@Controller()
export class ChartsController {
  constructor(
    private readonly chartsService: ChartsService,) {}

  @Get('charts/chartno/:id')
  async getChartByNo(@Param('id') id: string): Promise<ChartsModel[]>{
    return this.chartsService
    .getCharts({where: {ChartNo: {equals: Number(id)}}, orderBy: {ChartPos: 'asc'}})
  }

  @Get('charts/songid/:id')
  async getChartsBySongID(@Param('id') id: string): Promise<ChartsModel[]>{
    return this.chartsService
    .getCharts({where: {SongID: {equals: Number(id)}}, orderBy: {ChartNo: 'asc'}})
  }
}
