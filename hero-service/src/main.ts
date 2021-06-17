import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const host = '0.0.0.0';
  const port = '3001';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${host}:${port}`,
      package: 'hero',
      protoPath: join(__dirname, '../../protos/hero/hero.proto')
    }
  });
  await app.listen(() => console.log(`hero-service running at ${host}:${port}`));
}
bootstrap();
