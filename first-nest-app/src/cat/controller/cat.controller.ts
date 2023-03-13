import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from './CatDto';
import { CatService } from '../service/cat.service';
import { Cat } from '../interface/cat.interface';
import { ForbiddenException } from '../exception/cat.exception';
import { HttpExceptionFilter } from './filter/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }

  @Get('/')
  async findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('/v2')
  @UseFilters(new HttpExceptionFilter())
  async findAllV2() {
    throw new ForbiddenException();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
    return this.catsService.findAll();
  }
}
