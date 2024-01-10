import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { types } from "@yourdata/sdk"

registerEnumType(types.CountryCode, { name: "CountryCode" })

registerEnumType(types.CurrencyCode, { name: "CurrencyCode" })

registerEnumType(types.RecEnumType, { name: "RecType" })

registerEnumType(types.PaymentMethodEnumType, { name: "PaymentMethodType" })

registerEnumType(types.ExpensesClassificationCategoryEnumType, { name: "ExpensesClassificationCategoryType" })

registerEnumType(types.ExpensesClassificationEnumType, { name: "ExpensesClassificationType" })

registerEnumType(types.MeasurementUnitEnumType, { name: "MeasurementUnitType" })

registerEnumType(types.StampDutyPercentCategoryEnumType, { name: "StampDutyPercentCategoryType" })

registerEnumType(types.VatCategoryEnumType, { name: "VatCategoryType" })

registerEnumType(types.VatExemptionCategoryEnumType, { name: "VatExemptionCategoryType" })

registerEnumType(types.InvoiceDetailEnumType, { name: "InvoiceDetailEnumType" })

registerEnumType(types.InvoiceEnumType, { name: "InvoiceEnumType" })

@ObjectType()
export class InvoiceHeaderType implements types.InvoiceHeaderType {
    @Field()
    aa: string;

    @Field({ nullable: true })
    correlatedInvoices?: string;

    @Field({ nullable: true })
    currency?: types.CurrencyCode;

    @Field({ nullable: true })
    dispatchDate?: Date;

    @Field({ nullable: true })
    dispatchTime?: Date;

    @Field({ nullable: true })
    exchangeRate?: number;

    @Field({ nullable: true })
    fuelInvoice?: boolean;

    @Field()
    invoiceType: types.InvoiceEnumType;

    @Field({ nullable: true })
    invoiceVariationType?: types.InvoiceVariationEnumType;

    @Field()
    issueDate: Date;

    @Field({ nullable: true })
    movePurpose?: types.MovePurposeEnumType;

    @Field({ nullable: true })
    otherCorrelatedEntities?: types.EntityEnumType;

    @Field({ nullable: true })
    selfPricing?: boolean;

    @Field()
    series: string;

    @Field({ nullable: true })
    specialInvoiceCategory?: types.SpecialInvoiceCategoryEnumType;

    @Field({ nullable: true })
    vatPaymentSuspension?: boolean;

    @Field({ nullable: true })
    vehicleNumber?: string;

}

@ObjectType()
export class ExpensesClassificationType {
    @Field({ nullable: true })
    id?: number

    @Field()
    amount: number;

    @Field({ nullable: true })
    classificationType?: types.ExpensesClassificationEnumType

    @Field({ nullable: true })
    classificationCategory?: types.ExpensesClassificationCategoryEnumType
}

@ObjectType()
export class IncomeClassificationType {
    @Field({ nullable: true })
    id?: number

    @Field()
    amount: number;

    @Field({ nullable: true })
    classificationType?: types.IncomeClassificationEnumType

    @Field()
    classificationCategory: types.IncomeClassificationCategoryEnumType
}


@ObjectType()
export class AddressType implements types.AddressType {
    @Field()
    city: string;

    @Field({ nullable: true })
    number?: string;

    @Field()
    postalCode: string

    @Field({ nullable: true })
    street?: string;
}

@ObjectType()
export class PartyType implements types.PartyType {

    @Field({ nullable: true })
    address?: AddressType;

    @Field()
    branch: number;

    @Field()
    country: types.CountryCode;

    @Field({ nullable: true })
    countryDocumentId?: string;

    @Field({ nullable: true })
    documentIdNo?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    supplyAccountNo?: string;

    @Field()
    vatNumber: string;
}

@ObjectType()
export class ShipType implements types.ShipType {
    @Field()
    applicationDate: Date;

    @Field()
    applicationId: string;

    @Field({ nullable: true })
    doy?: string;

    @Field()
    shipID: string;

}

@ObjectType()
export class InvoiceRowType implements types.InvoiceRowType {
    @Field({ nullable: true })
    deductionsAmount?: number;

    @Field({ nullable: true })
    dienergia?: ShipType;

    @Field({ nullable: true })
    discountOption?: boolean;

    @Field({ nullable: true })
    expense?: ExpensesClassificationType;

    @Field({ nullable: true })
    feesAmount?: number;

    @Field({ nullable: true })
    feesPercentCategory?: number;

    @Field({ nullable: true })
    fuelCode?: types.FuelCodeEnumType;

    @Field({ nullable: true })
    income?: IncomeClassificationType;

    @Field({ nullable: true })
    invoiceDetailType?: types.InvoiceDetailEnumType;

    @Field({ nullable: true })
    itemDescr?: string;

    @Field({ nullable: true })
    lineComments?: string;

    @Field({ nullable: true })
    lineNumber?: number;

    @Field({ nullable: true })
    measurementUnit?: types.MeasurementUnitEnumType;

    @Field()
    netValue: number;

    @Field({ nullable: true })
    otherTaxesAmount?: number;

    @Field({ nullable: true })
    otherTaxesPercentCategory?: number;

    @Field({ nullable: true })
    quantity15?: number;

    @Field({ nullable: true })
    quantity?: number;

    @Field({ nullable: true })
    recType?: types.RecEnumType;

    @Field({ nullable: true })
    stampDutyAmount?: string;

    @Field({ nullable: true })
    stampDutyPercentCategory?: types.StampDutyPercentCategoryEnumType;

    @Field()
    vatAmount: number;

    @Field()
    vatCategory: types.VatCategoryEnumType;

    @Field({ nullable: true })
    vatExemptionCategory?: types.VatExemptionCategoryEnumType;

    @Field({ nullable: true })
    withheldAmount?: number;

    @Field({ nullable: true })
    withheldPercentCategory?: string;

}

@ObjectType()
export class PaymentMethod implements types.PaymentMethodDetailType {
    @Field()
    amount: number;

    @Field({ nullable: true })
    paymentMethodInfo?: string;

    @Field()
    type: types.PaymentMethodEnumType;

}

@ObjectType()
export class InvoiceSummaryType implements types.InvoiceSummaryType {
    @Field(type => [ExpensesClassificationType], { nullable: true })
    expenses?: ExpensesClassificationType[];

    @Field(type => [IncomeClassificationType], { nullable: true })
    incomes?: IncomeClassificationType[];

    @Field()
    totalDeductionsAmount: number;

    @Field()
    totalFeesAmount: number;

    @Field()
    totalGrossValue: number;

    @Field()
    totalNetValue: number;

    @Field()
    totalOtherTaxesAmount: number;

    @Field()
    totalStampDutyAmount: number;

    @Field()
    totalVatAmount: number;

    @Field()
    totalWithheldAmount: number;

}

@ObjectType()
export class InvoiceType implements types.InvoiceType {

    @Field({ nullable: true })
    authenticationCode?: string;

    @Field({ nullable: true })
    cancelledByMark?: number;

    @Field({ nullable: true })
    counterpart?: PartyType;

    @Field(type => [InvoiceRowType], { nullable: true })
    invoiceDetails?: InvoiceRowType[];

    @Field()
    invoiceHeader: InvoiceHeaderType;

    @Field({ nullable: true })
    invoiceSummary?: InvoiceSummaryType;

    @Field({ nullable: true })
    issuer?: PartyType;

    @Field({ nullable: true })
    mark?: number;

    @Field({ nullable: true })
    otherTransportDetails?: string;

    @Field()
    paymentMethod: PaymentMethod

    @Field({ nullable: true })
    qrCodeUrl?: string;

    @Field({ nullable: true })
    taxesTotals?: string;

    @Field({ nullable: true })
    transmissionFailure?: number;

    @Field({ nullable: true })
    uid?: string;
}

@ObjectType()
export class RequestedDoc implements types.RequestedDoc {
    @Field(type => ID)
    id: string

    @Field()
    cancellationDate: Date;

    @Field()
    cancellationMark: string;

    @Field({ nullable: true })
    cancelledInvoicesDoc?: InvoiceType;

    @Field(type => String, { nullable: true })
    continuationToken?: unknown;


    @Field({ nullable: true })
    expense?: ExpensesClassificationType;

    @Field({ nullable: true })
    income?: IncomeClassificationType;

    @Field()
    invoiceMark: number;

    @Field({ nullable: true })
    invoicesDoc?: InvoiceType;

    @Field()
    nextPartitionKey: string;

    @Field()
    nextRowKey: string;
}

@ObjectType()
export class RequestedBookInfo implements types.RequestedBookInfo {
    @Field(type => String, { nullable: true })
    continuationToken?: unknown;

    @Field()
    counterVatNumber?: string;

    @Field()
    count: number;
    @Field({ nullable: true })
    deductionsAmount?: number;
    @Field({ nullable: true })
    feesAmount?: number;
    @Field({ nullable: true })
    grossValue?: number;

    @Field(type => types.InvoiceEnumType)
    invType: types.InvoiceEnumType;

    @Field(type => types.InvoiceDetailEnumType, { nullable: true })
    invoiceDetailType?: types.InvoiceDetailEnumType;
    @Field()
    issueDate: Date;
    @Field({ nullable: true })
    maxMark?: string;
    @Field({ nullable: true })
    minMark?: string;
    @Field({ nullable: true })
    netValue?: number;
    @Field({ nullable: true })
    otherTaxesAmount?: number;
    @Field({ nullable: true })
    selfpricing?: boolean;
    @Field({ nullable: true })
    stampDutyAmount?: number;
    @Field({ nullable: true })
    thirdPartyAmount?: number;
    @Field({ nullable: true })
    vatAmount?: number;
    @Field({ nullable: true })
    withheldAmount?: number;
}