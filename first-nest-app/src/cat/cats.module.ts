import { Module } from '@nestjs/common';
import { CatsController } from './controller/cat.controller';
import { CatService } from './service/cat.service';

@Module({
  controllers: [CatsController],
  providers: [CatService],
})
export class CatsModule {}
