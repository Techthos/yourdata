
import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { Length, validateSync, IsEnum, IsOptional } from 'class-validator';
import { IncomingHttpHeaders } from "http"
import { FastifyRequest } from "fastify"
import { YourDataClient, config, DocumentRequestArgs, InvoiceBuilder } from "@yourdata/sdk"
import * as winston from 'winston';
import { parseXML, serializeInvoiceType } from '@yourdata/sdk/dist/helpers/xml';
import { RequestedDoc, ResponseDoc } from '@yourdata/sdk/dist/types';


const { DEBUG } = process.env

export enum Environments {
    TEST = "TEST",
    PROD = "PROD"
}

export class Headers {

    constructor(headers: IncomingHttpHeaders) {
        this['username'] = headers['username'] as string
        this['subscriptionkey'] = headers['subscriptionkey'] as string
        this.environment = headers['environment'] as Environments || Environments.TEST

    }

    @Length(2)
    'username': string

    @Length(32)
    'subscriptionkey': string

    @IsOptional()
    @IsEnum(Environments)
    environment: Environments
}


@Injectable({ scope: Scope.REQUEST })
export class YourDataService {

    public readonly _client: YourDataClient

    constructor(@Inject(CONTEXT) private context: {req: FastifyRequest}) {
        const headers = new Headers(context.req.headers)
        const err = validateSync(headers)

        if(err.length) {
            throw err[0]
        }

        this._client = new YourDataClient(
            headers['username'],
            headers['subscriptionkey'],
            config.AADE_ENVIRONMENTS[headers.environment],
            {
                logger: {
                    level: DEBUG ? 'debug' : 'info',
                    transports: [
                        new winston.transports.Console({
                            format: winston.format.json()
                        })
                    ]
                }
            }
        )
    }

    async send(invoice: InvoiceBuilder): Promise<ResponseDoc> {
        const response = await this._client.sendXML<ResponseDoc>(serializeInvoiceType(invoice.data), "SendInvoices")
        

        if(response.length === 1) {
            const [responseDoc] = response
            return responseDoc
        } else {
            throw new Error("unexpected response.")
        }
    }

    async expenses(args: DocumentRequestArgs) {
        return this._client.requestMyExpenses(args)
    }

    async income(args: DocumentRequestArgs) {
        return this._client.requestMyIncome(args)
    }
}