import { DateDef, RequestedBookInfo, ResponseDocXML } from "../types"
import { InvoiceBuilder } from "./InvoiceBuilder"
import { parseXML } from "../helpers/xml"
import { URL, URLSearchParams } from "url"
import moment from "moment"
import { DATE_REQUEST_FORMAT } from "../helpers/constants"
import { ENV } from "./config"




type MyDataServices = "SendInvoices" | "RequestMyIncome" | "RequestMyExpenses"


export class MyDataClient {
    constructor(
        private readonly username: string = ENV.AADE_USER_ID,
        private readonly subscriptionKey: string = ENV.AADE_SUB_KEY,
        private readonly endpoint: string = ENV.AADE_ENDPOINT,
    ) {
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

    private async get<T>(service: MyDataServices, params?: { [key: string]: string }) {

        const searchParams = new URLSearchParams(params)
        const url = new URL(`${this.endpoint}/${service}`)
        url.search = searchParams.toString()

        const response = await fetch(url, {
            headers: {
                ...(this.authHeaders)
            },
        })

        if(response.status !== 200) {
            throw new Error(`HTTPError: ${response.status} - ${response.statusText}`)
        }

        const xml: string = await response.text()

        const data =  parseXML(xml) as {RequestedBookInfo: { bookInfo: RequestedBookInfo[] }}

        if(data && data.RequestedBookInfo && data.RequestedBookInfo.bookInfo && data.RequestedBookInfo.bookInfo.length) {
            return data.RequestedBookInfo.bookInfo
        } else {
            return []
        }
    }

    async requestMyIncome(from: DateDef, to: DateDef) {
        return await this.get("RequestMyIncome", {
            dateFrom: moment(from).format(DATE_REQUEST_FORMAT),
            dateTo: moment(to).format(DATE_REQUEST_FORMAT)
        })
    }

    async requestMyExpenses(from: DateDef, to: DateDef) {
        return await this.get<RequestedBookInfo>("RequestMyExpenses", {
            dateFrom: moment(from).format(DATE_REQUEST_FORMAT),
            dateTo: moment(to).format(DATE_REQUEST_FORMAT)
        })
    }

    async sendXML<T>(xml: string, service: MyDataServices): Promise<T[]> {

        const headers = {
            ...this.authHeaders,
            "Content-Type": "application/xml"
        }

        const response = await fetch(`${this.endpoint}/${service}`, {
            method: "POST",
            headers,
            body: xml
        })

        if(response.status !== 200) {
            throw new Error(`Response error: ${response.statusText} (${response.status})`)
        }

        const data = parseXML(await response.text()) as ResponseDocXML<T>

        if(data && data.ResponseDoc && Array.isArray(data.ResponseDoc.response)) {
            return data.ResponseDoc.response
        } else if (data && data.ResponseDoc && data.ResponseDoc.response && !Array.isArray(data.ResponseDoc.response)) {
            return [data.ResponseDoc.response]
        } else {
            return []
        }
    }
}