import moment from "moment";
import type { MyDataClient } from "./MyDataClient";
import { CountryCode, CurrencyCode, InvoiceEnumType, InvoiceHeaderType, InvoiceRowType, InvoiceSummaryType, InvoiceType, PartyType, PaymentMethodDetailType, VatCategoryEnumType } from "../types";
import { DATE_FORMAT } from "../helpers/constants";
import { InvoiceSummaryBuilder } from "./InvoiceSummaryBuilder";
import { orderObject } from "../helpers/obj";

export class InvoiceBuilder {
    get COUNTRY() { return CountryCode }
    get CURRENCY() { return CurrencyCode }
    get TYPE() { return InvoiceEnumType }
    get VAT_CATEGORY() { return VatCategoryEnumType }

    private _data: Partial<InvoiceType> = {}
    private _dataItemIndex: Map<number, number> = new Map()

    constructor(private readonly client: MyDataClient) {
    }

    setIssuer(party: PartyType) {
        this._data.issuer = party
        return this
    }

    setCounterpart(party: PartyType) {
        this._data.counterpart = party
        return this
    }

    setHeader(header: InvoiceHeaderType) {
        this._data.invoiceHeader = {
            ...header,
            issueDate: moment(header.issueDate).format(DATE_FORMAT)
        }

        return this
    }

    setPaymentMethod(paymentMethod: PaymentMethodDetailType) {
        this._data.paymentMethods = {
            paymentMethodDetails: orderObject([
                ["type"],
                ["amount"],
                ["paymentMethodInfo"]
            ], paymentMethod)!
        }
        return this
    }

    addItem(item: InvoiceRowType) {

        if (!this._data.invoiceDetails) {
            this._data.invoiceDetails = []
        }

        item.lineNumber = this._data.invoiceDetails.length + 1

        const idx = this._data.invoiceDetails.push(orderObject([
            ["lineNumber"],
            ["netValue"],
            ["vatCategory"],
            ["vatAmount"],
            ["vatExemptionCategory"],
            ["incomeClassification", orderObject([
                ["icls:classificationType"],
                ["icls:classificationCategory"],
                ["icls:amount"]
            ], item.incomeClassification!)],
        ], item)!)

        this._dataItemIndex.set(item.lineNumber, idx)

        return this
    }

    calculateSummary() {
        if (this._dataItemIndex.size === 0) {
            return this
        }

        const summary = new InvoiceSummaryBuilder(this._data)

        this._data.invoiceDetails?.forEach(details => summary.add(details))

        this._data.invoiceSummary = summary.build()

        return this
    }

    removeItem(lineNumber: number) {
        if (this._data.invoiceDetails?.length) {
            this.data.invoiceDetails = this.data.invoiceDetails?.slice(lineNumber - 1, 1)
        }
        return this
    }

    setSummary(summary: InvoiceSummaryType) {
        this._data.invoiceSummary = summary
        return this
    }

    get data(): Partial<InvoiceType> {
        return orderObject([
            ["issuer", orderObject([
                ["vatNumber"],
                ["country"],
                ["branch"],
                ["address", orderObject([
                    ["street"],
                    ["number"],
                    ["postalCode"],
                    ["city"]
                ], this._data.issuer?.address!)]
            ], this._data.issuer!)],
            ["counterpart", orderObject([
                ["vatNumber"],
                ["country"],
                ["branch"],
                ["name"],
                ["address", orderObject([
                    ["street"],
                    ["number"],
                    ["postalCode"],
                    ["city"]
                ], this._data.counterpart?.address!)],
            ], this._data.counterpart!)],
            ["invoiceHeader", orderObject([
                ["series"],
                ["aa"],
                ["issueDate"],
                ["invoiceType"],
                ["currency"]
            ], this._data.invoiceHeader!)],
            ["paymentMethods"],
            ["invoiceDetails"],
            ["invoiceSummary", orderObject([
                ["totalNetValue"],
                ["totalVatAmount"],
                ["totalWithheldAmount"],
                ["totalFeesAmount"],
                ["totalStampDutyAmount"],
                ["totalOtherTaxesAmount"],
                ["totalDeductionsAmount"],
                ["totalGrossValue"],
                ["incomeClassification"],
                ["expensesClassification"],
            ], this._data.invoiceSummary!)],
        ], this._data)!
    }
}