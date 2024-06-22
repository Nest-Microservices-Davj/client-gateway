import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HealthCheckController {
  @Get()
  healthCheck() {
    return 'Health check is ok!!';
  }
}
