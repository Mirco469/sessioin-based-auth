import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('some-ext-service')
  someService(@Session() session: Record<string, any>) {
    console.log('Service');
    console.log(session);
    return session;
  }
}
