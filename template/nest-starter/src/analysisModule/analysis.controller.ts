import { Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { Response, responseFormatter } from 'src/utils/response';

@Controller()
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) { }

  @Post('/allocateData')
  @HttpCode(200)
  async allocateData(): Promise<Response> {
    await this.analysisService.allocateDataForMsg();
    return responseFormatter(null, 0, 'success');
  }

  @Get('/wordFreq')
  @HttpCode(200)
  async getWordFreq(
    @Query('group_id') group_id,
  ): Promise<Response> {
    if (!group_id) return responseFormatter(null, 1, 'group_id is required');
    return responseFormatter(
      {}, 0, 'success'
    );
  }
}
