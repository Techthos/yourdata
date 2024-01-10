
import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { Length, validateSync, IsEnum, IsOptional } from 'class-validator';
import { IncomingHttpHeaders } from "http"
import { FastifyRequest } from "fastify"
import { MyDataClient, config } from "@yourdata/sdk"

export enum Environments {
    TEST = "TEST",
    PROD = "PROD"
}

export class Headers {

    constructor(headers: IncomingHttpHeaders) {
        this['aade-user-id'] = headers['aade-user-id'] as string
        this['ocp-apim-subscription-key'] = headers['ocp-apim-subscription-key'] as string
        this.environment = headers['environment'] as Environments || Environments.TEST

    }

    @Length(2)
    'aade-user-id': string

    @Length(32)
    'ocp-apim-subscription-key': string

    @IsOptional()
    @IsEnum(Environments)
    environment: Environments
}


@Injectable({ scope: Scope.REQUEST })
export class YourDataService {

    private client: MyDataClient

    constructor(@Inject(CONTEXT) private context: {req: FastifyRequest}) {
        const headers = new Headers(context.req.headers)
        const err = validateSync(headers)

        if(err.length) {
            throw err[0]
        }

        this.client = new MyDataClient(
            headers['aade-user-id'],
            headers['ocp-apim-subscription-key'],
            config.AADE_ENVIRONMENTS[headers.environment]
        )
    }

    async expenses(from: Date, to: Date) {
        return this.client.requestMyExpenses(from, to)
    }
}