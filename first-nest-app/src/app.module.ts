import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cat/controller/cat.controller';
import { CatService } from './cat/service/cat.service';
import { CatsModule } from './cat/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})
export class AppModule {}
