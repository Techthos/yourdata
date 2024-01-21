import { DateDef, InvoiceEnumType, RequestedBookInfo, ResponseDocXML } from "../types"
import { InvoiceBuilder } from "./InvoiceBuilder"
import { parseXML } from "../helpers/xml"
import { URL, URLSearchParams } from "url"
import moment from "moment"
import { DATE_REQUEST_FORMAT } from "../helpers/constants"
import { ENV } from "./config"

import { Logger, LoggerOptions, createLogger } from "winston"

type YourDataServices = "SendInvoices" | "RequestMyIncome" | "RequestMyExpenses"

export type YourDataClientOptions = {
    logger?: LoggerOptions
}

export type DocumentRequestArgs = {
    dateFrom: DateDef,
    dateTo: DateDef,
    counterVatNumber?: string,
    entityVatNumber?: string,
    invType?: InvoiceEnumType,
    nextPartitionKey?: string,
    nextRowKey?: string
}

export class YourDataClient {

    public readonly logger: Logger

    constructor(
        private readonly username: string = ENV.AADE_USER_ID,
        private readonly subscriptionKey: string = ENV.AADE_SUB_KEY,
        private readonly endpoint: string = ENV.AADE_ENDPOINT,
        options: YourDataClientOptions = {}
    ) {
        this.logger = createLogger({
            ...(options.logger || {}),
        })
    }


    initInvoiceBuilder() {
        return new InvoiceBuilder(this)
    }

    private get authHeaders() {

        return {
            "aade-user-id": this.username,
            "ocp-apim-subscription-key": this.subscriptionKey
        }
    }

    private async get<T>(service: YourDataServices, params?: { [key: string]: string }) {

        const searchParams = new URLSearchParams(params)
        const url = new URL(`${this.endpoint}/${service}`)
        url.search = searchParams.toString()

        this.logger.debug({GET: url})

        const response = await fetch(url, {
            headers: {
                ...(this.authHeaders)
            },
        })
        const body = await response.text()

        this.logger.debug({
            status: response.status,
            message: response.statusText,
            body
        })

        if(response.status !== 200) {
            throw new Error(`HTTPError: ${response.status} - ${response.statusText}`)
        }

        const data =  parseXML(body) as {RequestedBookInfo: { bookInfo: RequestedBookInfo[] }}

        this.logger.debug({
            parseData: data
        })


        if(data && data.RequestedBookInfo && data.RequestedBookInfo.bookInfo && data.RequestedBookInfo.bookInfo.length) {
            return data.RequestedBookInfo.bookInfo
        } else {
            return []
        }
    }

    async requestMyIncome(args: DocumentRequestArgs) {
        return await this.get("RequestMyIncome", {
            ...args,
            dateFrom: moment(args.dateFrom).format(DATE_REQUEST_FORMAT),
            dateTo: moment(args.dateTo).format(DATE_REQUEST_FORMAT),
        })
    }

    async requestMyExpenses(args: DocumentRequestArgs) {
        return await this.get<RequestedBookInfo>("RequestMyExpenses", {
            ...args,
            dateFrom: moment(args.dateFrom).format(DATE_REQUEST_FORMAT),
            dateTo: moment(args.dateTo).format(DATE_REQUEST_FORMAT)
        })
    }

    async sendXML<T>(xml: string, service: YourDataServices): Promise<T[]> {

        const headers = {
            ...this.authHeaders,
            "Content-Type": "application/xml"
        }

        this.logger.debug({xml})

        const response = await fetch(`${this.endpoint}/${service}`, {
            method: "POST",
            headers,
            body: xml
        })

        if(response.status !== 200) {
            throw new Error(`Response error: ${response.statusText} (${response.status})`)
        }

        const text = await response.text()

        this.logger.debug(`Response: \n ${text}`)

        const data = parseXML(text) as ResponseDocXML<T>

        if(data && data.ResponseDoc && Array.isArray(data.ResponseDoc.response)) {
            return data.ResponseDoc.response
        } else if (data && data.ResponseDoc && data.ResponseDoc.response && !Array.isArray(data.ResponseDoc.response)) {
            return [data.ResponseDoc.response]
        } else {
            return []
        }
    }
}