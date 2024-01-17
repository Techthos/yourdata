import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { BadRequestException } from "@nestjs/common"
import { AppModule } from './app.module';
import { ValidationError } from 'class-validator';
import { RawServerDefault } from 'fastify';

export async function bootstrap(address: string, port: number): Promise<NestFastifyApplication<RawServerDefault>> {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      return new BadRequestException(validationErrors);
    },
  }));

  await app.listen(port, address);

  return app
}