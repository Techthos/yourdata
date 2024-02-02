import { Field, Float, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { DocumentRequestArgs, types } from "@yourdata/sdk"

registerEnumType(types.MovePurposeEnumType, { name: 'MovePurposeEnumType' })

registerEnumType(types.InvoiceVariationEnumType, { name: "InvoiceVariationEnumType" })

registerEnumType(types.CountryCode, { name: "CountryCodeEnumType" })

registerEnumType(types.CurrencyCode, { name: "CurrencyCodeEnumType", valuesMap: {} })

registerEnumType(types.RecEnumType, { name: "RecEnumType" })

registerEnumType(types.PaymentMethodEnumType, { name: "PaymentMethodEnumType" })

registerEnumType(types.ExpensesClassificationCategoryEnumType, { name: "ExpensesClassificationCategoryEnumType" })

registerEnumType(types.ExpensesClassificationEnumType, { name: "ExpensesClassificationEnumType" })

registerEnumType(types.MeasurementUnitEnumType, { name: "MeasurementUnitEnumType" })

registerEnumType(types.StampDutyPercentCategoryEnumType, { name: "StampDutyPercentCategoryEnumType" })

registerEnumType(types.VatCategoryEnumType, { name: "VatCategoryEnumType" })

registerEnumType(types.VatExemptionCategoryEnumType, { name: "VatExemptionCategoryEnumType" })

registerEnumType(types.InvoiceDetailEnumType, { name: "InvoiceDetailEnumType" })

registerEnumType(types.InvoiceEnumType, { name: "InvoiceEnumType" })

registerEnumType(types.EntityEnumType, { name: 'EntityEnumType' })

registerEnumType(types.SpecialInvoiceCategoryEnumType, { name: 'SpecialInvoiceCategoryEnumType' })

registerEnumType(types.IncomeClassificationEnumType, { name: 'IncomeClassificationEnumType' })

registerEnumType(types.IncomeClassificationCategoryEnumType, { name: 'IncomeClassificationCategoryEnumType' })

registerEnumType(types.FuelCodeEnumType, { name: 'FuelCodeEnumType' })

@InputType("InvoiceHeaderInput")
@ObjectType()
export class InvoiceHeaderType implements types.InvoiceHeaderType {
    @Field()
    aa: string;

    @Field({ nullable: true })
    correlatedInvoices?: string;

    @Field(type => types.CurrencyCode, { nullable: true })
    currency?: types.CurrencyCode;

    @Field({ nullable: true })
    dispatchDate?: Date;

    @Field({ nullable: true })
    dispatchTime?: Date;

    @Field({ nullable: true })
    exchangeRate?: number;

    @Field({ nullable: true })
    fuelInvoice?: boolean;

    @Field(type => types.InvoiceEnumType)
    invoiceType: types.InvoiceEnumType;

    @Field(type => types.InvoiceVariationEnumType, { nullable: true })
    invoiceVariationType?: types.InvoiceVariationEnumType;

    @Field()
    issueDate: Date;

    @Field(type => types.MovePurposeEnumType, { nullable: true })
    movePurpose?: types.MovePurposeEnumType;

    @Field(type => types.EntityEnumType, { nullable: true })
    otherCorrelatedEntities?: types.EntityEnumType;

    @Field({ nullable: true })
    selfPricing?: boolean;

    @Field()
    series: string;

    @Field(type => types.SpecialInvoiceCategoryEnumType, { nullable: true })
    specialInvoiceCategory?: types.SpecialInvoiceCategoryEnumType;

    @Field({ nullable: true })
    vatPaymentSuspension?: boolean;

    @Field({ nullable: true })
    vehicleNumber?: string;

}

@InputType("ExpensesClassificationInput")
@ObjectType()
export class ExpensesClassificationType {
    @Field({ nullable: true })
    id?: number

    @Field()
    amount: number;

    @Field(type => types.ExpensesClassificationEnumType, { nullable: true })
    classificationType?: types.ExpensesClassificationEnumType

    @Field(type => types.ExpensesClassificationCategoryEnumType, { nullable: true })
    classificationCategory?: types.ExpensesClassificationCategoryEnumType
}

@InputType("IncomeClassificationInput")
@ObjectType()
export class IncomeClassificationType {
    @Field({ nullable: true })
    id?: number

    @Field()
    amount: number;

    @Field(type => types.IncomeClassificationEnumType, { nullable: true })
    classificationType?: types.IncomeClassificationEnumType

    @Field(type => types.IncomeClassificationCategoryEnumType)
    classificationCategory: types.IncomeClassificationCategoryEnumType
}


@InputType("AddressInput")
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

@InputType("PartyInput")
@ObjectType()
export class PartyType implements types.PartyType {

    @Field(type => AddressType, { nullable: true })
    address?: AddressType;

    @Field()
    branch: number;

    @Field(type => types.CountryCode, {middleware: []})
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

@InputType("ShipInput")
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

@InputType("InvoiceItemInput")
@ObjectType()
export class InvoiceRowType implements types.InvoiceRowType {
    @Field({ nullable: true })
    deductionsAmount?: number;

    @Field(type => ShipType, { nullable: true })
    dienergia?: ShipType;

    @Field({ nullable: true })
    discountOption?: boolean;

    @Field(type => ExpensesClassificationType, { nullable: true })
    expense?: ExpensesClassificationType;

    @Field({ nullable: true })
    feesAmount?: number;

    @Field({ nullable: true })
    feesPercentCategory?: number;

    @Field(type => types.FuelCodeEnumType, { nullable: true })
    fuelCode?: types.FuelCodeEnumType;

    @Field({ nullable: true })
    income?: IncomeClassificationType;

    @Field(type => types.InvoiceDetailEnumType, { nullable: true })
    invoiceDetailType?: types.InvoiceDetailEnumType;

    @Field({ nullable: true })
    itemDescr?: string;

    @Field({ nullable: true })
    lineComments?: string;

    @Field({ nullable: true })
    lineNumber?: number;

    @Field(type => types.MeasurementUnitEnumType, { nullable: true })
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

    @Field(type => types.RecEnumType, { nullable: true })
    recType?: types.RecEnumType;

    @Field({ nullable: true })
    stampDutyAmount?: string;

    @Field(type => types.StampDutyPercentCategoryEnumType, { nullable: true })
    stampDutyPercentCategory?: types.StampDutyPercentCategoryEnumType;

    @Field()
    vatAmount: number;

    @Field(type => types.VatCategoryEnumType,)
    vatCategory: types.VatCategoryEnumType;

    @Field(type => types.VatExemptionCategoryEnumType, { nullable: true })
    vatExemptionCategory?: types.VatExemptionCategoryEnumType;

    @Field({ nullable: true })
    withheldAmount?: number;

    @Field({ nullable: true })
    withheldPercentCategory?: string;

}

@InputType("PaymentMethodInput")
@ObjectType()
export class PaymentMethod implements types.PaymentMethodDetailType {
    @Field()
    amount: number;

    @Field({ nullable: true })
    paymentMethodInfo?: string;

    @Field(type => types.PaymentMethodEnumType)
    type: types.PaymentMethodEnumType;

}

@InputType("InvoiceSummaryInput")
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

@InputType("InvoiceInput")
@ObjectType()
export class InvoiceType implements types.InvoiceType {

    @Field({ nullable: true })
    authenticationCode?: string;

    @Field({ nullable: true })
    cancelledByMark?: number;

    @Field(type => PartyType, { nullable: true })
    counterpart?: PartyType;

    @Field(type => [InvoiceRowType], { nullable: true })
    invoiceDetails?: InvoiceRowType[];

    @Field()
    invoiceHeader: InvoiceHeaderType;

    @Field({ nullable: true })
    invoiceSummary?: InvoiceSummaryType;

    @Field(type => PartyType, { nullable: true })
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

    @Field(type => Float, { nullable: true })
    deductionsAmount?: number;

    @Field(type => Float, { nullable: true })
    feesAmount?: number;

    @Field(type => Float, { nullable: true })
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

    @Field(type => Float, { nullable: true })
    netValue?: number;

    @Field(type => Float, { nullable: true })
    otherTaxesAmount?: number;

    @Field({ nullable: true })
    selfpricing?: boolean;

    @Field(type => Float, { nullable: true })
    stampDutyAmount?: number;

    @Field(type => Float, { nullable: true })
    thirdPartyAmount?: number;

    @Field(type => Float, { nullable: true })
    vatAmount?: number;

    @Field(type => Float, { nullable: true })
    withheldAmount?: number;
}

@ObjectType()
export class ErrorType implements types.ErrorType {
    @Field()
    code: string;

    @Field()
    message: string;
}

@ObjectType()
export class ResponseDocType implements types.ResponseDoc {
    @Field({nullable: true})
    authenticationCode?: string;

    @Field({nullable: true})
    cancellationMark?: number;

    @Field({nullable: true})
    classificationMark?: number;

    @Field(type => [ErrorType])
    errs?: ErrorType[];

    @Field({nullable: true})
    index?: number;

    @Field({nullable: true})
    invoiceMark?: number;

    @Field({nullable: true})
    invoiceUid?: string;

    @Field({nullable: true})
    qrUrl?: string;

    @Field({nullable: true})
    statusCode: string;

}

@InputType()
export class RequestBookInfoInput implements DocumentRequestArgs {
    @Field()
    dateFrom: Date;

    @Field()
    dateTo: Date;

    @Field({ nullable: true })
    counterVatNumber?: string;

    @Field({ nullable: true })
    entityVatNumber?: string;

    @Field(type => types.InvoiceEnumType, { nullable: true })
    invType?: types.InvoiceEnumType;

    @Field({ nullable: true })
    nextPartitionKey?: string;

    @Field({ nullable: true })
    nextRowKey?: string;

}