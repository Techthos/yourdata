import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { YourDataModule } from './yourdata/yourdata.module';

@Module({
  imports: [
    YourDataModule,
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: 'schema.gql',
      graphiql: true,
    }),
  ],
})
export class AppModule {}