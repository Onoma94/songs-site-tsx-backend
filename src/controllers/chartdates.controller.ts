import { Controller, Get, Param } from '@nestjs/common';
import { ChartdatesService } from '../services/chartdates.service';
import { chart1_dates as ChartdatesModel } from '@prisma/client';

@Controller()
export class ChartdatesController {
  constructor(
    private readonly chartdatesService: ChartdatesService,) {}

  @Get('chartdates/:id')
  async getChartdate(@Param('id') id: string): Promise<ChartdatesModel>{
    return this.chartdatesService.getChartdate({ChartNo: Number(id)});
  }

}
