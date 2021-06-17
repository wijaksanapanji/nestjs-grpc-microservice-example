import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroService } from './hero/hero.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [HeroService],
})
export class AppModule {}
