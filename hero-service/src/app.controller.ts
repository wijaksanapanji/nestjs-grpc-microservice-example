import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroService } from './hero/hero.service';
import { IHero, IHeroById, IHeroList } from './hero/interface/hero.interface';

@Controller()
export class AppController {
  constructor(private readonly heroService: HeroService) { }

  @GrpcMethod('HeroService', 'FindAll')
  findAll({ }): IHeroList {
    return { heroes: this.heroService.findAll({}) } // must return array as object
  }

  @GrpcMethod('HeroService', 'FindOne')
  findOne(params: IHeroById): IHero {
    return this.heroService.findOne(params);
  }

}
