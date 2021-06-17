import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroController } from './hero/hero.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3001',
          package: 'hero',
          protoPath: join(__dirname, '../../protos/hero/hero.proto'),
        }
      }
    ])
  ],
  controllers: [HeroController],
  providers: [],
})
export class AppModule { }
