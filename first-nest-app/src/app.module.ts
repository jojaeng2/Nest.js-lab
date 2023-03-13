import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cat/controller/cat.controller';
import { CatService } from './cat/service/cat.service';
import { CatsModule } from './cat/cats.module';
import { LoggerMiddleware } from './logger/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
