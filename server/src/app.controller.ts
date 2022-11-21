import {
  ApiTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    description: 'Hello API',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }
}
