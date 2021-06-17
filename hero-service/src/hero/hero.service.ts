import { Injectable } from '@nestjs/common';
import { IHero, IHeroById, IHeroList } from './interface/hero.interface';

@Injectable()
export class HeroService {
    private heroes: IHero[] = [
        {
            id: 1,
            name: 'Sadboy',
        },
        {
            id: 2,
            name: 'Sadpanda',
        },
        {
            id: 3,
            name: 'Sadpanda',
        },
    ];

    findAll({ }): IHero[] {
        return this.heroes;
    }

    findOne(params: IHeroById): IHero {
        return this.heroes.find(({ id }) => id === params.id);
    }
}
