import { Controller, Get } from '@nestjs/common';
import { Response, responseFormatter } from 'src/utils/response';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Response> {
    const res = this.appService.getHello();
    return responseFormatter(null, 0, res);
  }
}
