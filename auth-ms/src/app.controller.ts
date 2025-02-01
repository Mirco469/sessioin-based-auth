import { Controller, Get, HttpStatus, Req, Res, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  login(@Session() session: Record<string, any>) {
    console.log('Login');
    session.username = 'Test';
    return session;
  }

  @Get('logout')
  logout(@Req() request: Request, @Res() response: Response) {
    console.log('Logout');
    request.session.destroy(() => {
      response.status(HttpStatus.OK).json({
        message: 'Logout successful',
        statusCode: HttpStatus.OK,
      });
    });
  }

  @Get('some-service')
  someService(@Session() session: Record<string, any>) {
    console.log('Service');
    console.log(session);
    return session;
  }
}
