import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { CreateCatDto } from './CatDto';

@Controller()
export class CatsController {
  @Get('/cats')
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('/cats')
  @HttpCode(500)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('/cats2')
  @Redirect('https://naver.com')
  find(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('/cats/:id/:namespace12')
  findByIdAndName(@Param() params): string {
    console.log(params.id);
    console.log(params.namespace12);
    return 'Hello World';
  }

  @Post('/create/cats')
  async createCats(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto.name);
    console.log(createCatDto.age);
    console.log(createCatDto.breed);
    return 'This action adds a new cat';
  }
}
