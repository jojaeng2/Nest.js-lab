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
import { CatService } from '../service/cat.service';
import { Cat } from '../interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
