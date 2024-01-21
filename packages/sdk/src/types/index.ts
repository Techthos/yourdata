
export * from "./enums"

export * from "./countries"
export * from "./currencies"

import type { Moment } from "moment"
import { CountryCode } from "./countries"
import { CurrencyCode } from "./currencies"

import * as enums from "./enums"


export type DateDef = Moment | Date | string

export type AddressType = {
    street?: string
    number?: string
    postalCode: string
    city: string
}

export type PartyType = {
    vatNumber: string
    country: CountryCode
    branch: number
    name?: string
    address?: AddressType
    documentIdNo?: string
    supplyAccountNo?: string
    countryDocumentId?: string
}

export type IncomeClassificationType = {
    "icls:classificationType"?: enums.IncomeClassificationEnumType
    "icls:classificationCategory": enums.IncomeClassificationCategoryEnumType
    "icls:amount": number
    id?: number
}

export type ExpensesClassificationType = {
    "icls:classificationType"?: enums.ExpensesClassificationEnumType
    "icls:classificationCategory"?: enums.ExpensesClassificationCategoryEnumType
    "icls:amount": number
    id?: number
}

export type PaymentMethodDetailType = {
    type: enums.PaymentMethodEnumType
    amount: number
    paymentMethodInfo?: string
}

export type EntityType = {
    type: enums.EntityEnumType
    entityData: PartyType
}

export type InvoiceHeaderType = {
    series: string
    aa: string
    issueDate: Moment | Date | string
    invoiceType: enums.InvoiceEnumType
    vatPaymentSuspension?: boolean
    currency?: CurrencyCode
    exchangeRate?: number
    correlatedInvoices?: string
    selfPricing?: boolean
    dispatchDate?: Date
    dispatchTime?: Date
    vehicleNumber?: string
    movePurpose?: enums.MovePurposeEnumType,
    fuelInvoice?: boolean,
    specialInvoiceCategory?: enums.SpecialInvoiceCategoryEnumType,
    invoiceVariationType?: enums.InvoiceVariationEnumType
    otherCorrelatedEntities?: enums.EntityEnumType
}

export type ShipType = {
    applicationId: string
    applicationDate: Date
    doy?: string
    shipID: string
}

export type InvoiceRowType = {

    // will be handled automatically.
    lineNumber?: number

    recType?: enums.RecEnumType
    fuelCode?: enums.FuelCodeEnumType
    quantity?: number
    measurementUnit?: enums.MeasurementUnitEnumType
    invoiceDetailType?: enums.InvoiceDetailEnumType
    netValue: number
    vatCategory: enums.VatCategoryEnumType
    vatAmount: number
    vatExemptionCategory?: enums.VatExemptionCategoryEnumType
    dienergia?: ShipType
    discountOption?: boolean
    withheldAmount?: number
    withheldPercentCategory?: string
    stampDutyAmount?: string
    stampDutyPercentCategory?: enums.StampDutyPercentCategoryEnumType
    feesAmount?: number
    feesPercentCategory?: number
    otherTaxesPercentCategory?: number
    otherTaxesAmount?: number
    deductionsAmount?: number
    lineComments?: string
    incomeClassification?: IncomeClassificationType
    expensesClassification?: ExpensesClassificationType
    quantity15?: number
    itemDescr?: string
}

export type TaxTotalsType = {
    taxType: enums.TaxEnumType
    taxAmount: number
    /**
     * xs:byte ?
     * 
     * Το πεδίο taxCategory μπορεί να πάρει κάθε φορά οποιαδήποτε τιμή από τον
     * αντίστοιχο πίνακα του Παραρτήματος του φόρου που αναφέρεται στο πεδίο
     * taxType.
     */
    taxCategory?: number

    underlyingValue?: number
    id?: number
}

export type InvoiceSummaryType = {
    totalNetValue: number
    totalVatAmount: number
    totalWithheldAmount: number
    totalFeesAmount: number
    totalStampDutyAmount: number
    totalOtherTaxesAmount: number
    totalDeductionsAmount: number
    totalGrossValue: number
    incomeClassification?: IncomeClassificationType[]
    expensesClassification?: ExpensesClassificationType[]
}

export type TransportDetailType = {
    vehicleNumber: number
}

export type ErrorType = {
    message: string
    code: string
}

export type ResponseDoc = {
    index?: number
    statusCode: string
    invoiceUid?: string
    invoiceMark?: number
    classificationMark?: number
    authenticationCode?: string
    cancellationMark?: number
    qrUrl?: string
    errors?: {
        error: ErrorType[]
    }
}

export type ResponseDocXML<T> = {
    ResponseDoc: {
        response: T | T[]
    }
}

export type InvoiceType = {
    uid?: string
    mark?: number
    cancelledByMark?: number
    authenticationCode?: string
    transmissionFailure?: number
    issuer?: PartyType
    counterpart?: PartyType
    paymentMethods?: {
        paymentMethodDetails: PaymentMethodDetailType
    }
    invoiceHeader: InvoiceHeaderType
    invoiceDetails?: InvoiceRowType[]
    taxesTotals?: string
    invoiceSummary?: InvoiceSummaryType
    qrCodeUrl?: string
    otherTransportDetails?: string
}

export type RequestedDoc = {
    continuationToken?: unknown
    invoicesDoc?: InvoiceType
    cancelledInvoicesDoc?: InvoiceType
    invoiceMark: number
    cancellationMark: string
    cancellationDate: Date
    incomeClassificationsDoc?: IncomeClassificationType
    expensesClassificationsDoc?: ExpensesClassificationType
    nextPartitionKey: string
    nextRowKey: string
}

export type RequestedBookInfo = {
    continuationToken?: unknown
    issueDate: Date
    invType: enums.InvoiceEnumType
    selfpricing?: boolean
    invoiceDetailType?: enums.InvoiceDetailEnumType
    netValue?: number
    vatAmount?: number
    withheldAmount?: number
    otherTaxesAmount?: number
    stampDutyAmount?: number
    feesAmount?: number
    deductionsAmount?: number
    thirdPartyAmount?: number
    grossValue?: number
    count: number
    minMark?: string
    maxMark?: string
}