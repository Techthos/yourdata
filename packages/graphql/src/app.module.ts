import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import * as path from "path"
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { YourDataModule } from './yourdata/yourdata.module';
import { enumResolvers } from './yourdata/enum.resolver';

const { GRAPHQL_SCHEMA = "0" } = process.env

const absSchemaPath = path.resolve(__dirname, "..", 'schema.gql')

@Module({
  imports: [
    YourDataModule,
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      resolvers: {
        ...(enumResolvers)
      },
      typePaths: [absSchemaPath],
      autoSchemaFile: GRAPHQL_SCHEMA === "1" ? 'schema.gql' : false,
      graphiql: true,
    }),
  ],
})
export class AppModule { }