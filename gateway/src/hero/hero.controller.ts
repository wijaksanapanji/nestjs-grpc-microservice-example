import { Controller, Get, Inject, Param, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IHero } from './interface/hero.interface';

@Controller('hero')
export class HeroController implements OnModuleInit {
    private heroService;

    constructor(@Inject('HERO_PACKAGE') private heroClient: ClientGrpc) { }

    onModuleInit() {
        this.heroService = this.heroClient.getService('HeroService');
    }

    @Get()
    findAll(): IHero[] {
        return this.heroService.findAll({});
    }

    @Get(':id')
    findOne(@Param('id') id: number): IHero {
        return this.heroService.findOne({ id });
    }
}
