import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { registry } from './metrics.registry';

@Controller('metrics')
export class MetricsController {
  @Get()
  async getMetrics(@Res() res: Response) {
    res.set('Content-Type', registry.contentType);
    res.end(await registry.metrics());
  }
}
